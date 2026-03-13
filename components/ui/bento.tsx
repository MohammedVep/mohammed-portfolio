'use client';

import { useEffect, useState } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

type BentoItem = {
  id: string;
  className?: string;
  content: React.ReactNode;
  deepDiveContent?: React.ReactNode;
};

export const BentoGrid = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('grid grid-cols-12 gap-4 auto-rows-[minmax(220px,auto)]', className)}>
      {children}
    </div>
  );
};

export const BentoCard = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        'relative h-full rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-2xl transition-all duration-300',
        'hover:border-emerald-500/50 hover:shadow-emerald-500/10 hover:bg-neutral-900',
        'group overflow-hidden',
        onClick ? 'cursor-pointer' : 'cursor-default',
        className
      )}
    >
      {/* Industrial Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
};

export const DeepDiveCard = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/85 p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        className="relative mx-auto flex h-full max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={event => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-800 bg-neutral-950/95 px-4 py-3 backdrop-blur sm:px-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-500">
            Project Deep Dive
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs font-mono text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-400"
          >
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          {children}
        </div>
        <div className="border-t border-neutral-800 bg-neutral-950 px-4 py-3 sm:hidden">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-xs font-mono uppercase tracking-widest text-neutral-200 transition hover:border-emerald-500/60 hover:text-emerald-300"
          >
            Close Details
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Bento = ({ items }: { items: BentoItem[] }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <LayoutGroup>
      <BentoGrid>
        {items.map(item => (
          <BentoCard
            key={item.id}
            className={item.className}
            onClick={item.deepDiveContent ? () => setSelectedId(item.id) : undefined}
          >
            {item.content}
          </BentoCard>
        ))}
      </BentoGrid>
      <AnimatePresence>
        {selectedItem?.deepDiveContent && (
          <DeepDiveCard onClose={() => setSelectedId(null)}>
            {selectedItem.deepDiveContent}
          </DeepDiveCard>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};
