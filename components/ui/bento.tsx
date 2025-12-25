'use client';

import { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

type BentoItem = {
  id: string;
  className?: string;
  content: React.ReactNode;
  deepDiveContent?: React.ReactNode;
};

export const BentoGrid = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('grid grid-cols-12 gap-4', className)}>{children}</div>;
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
        'relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-2xl transition-all duration-300',
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
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950 p-8 shadow-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={event => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs font-mono text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-400"
        >
          Close
        </button>
        {children}
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
