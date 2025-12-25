'use client';

import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('grid grid-cols-12 gap-4', className)}>{children}</div>
  );
};

const BentoCard = ({
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
        'relative cursor-pointer rounded-lg border border-transparent bg-neutral-900 p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-800',
        'active:border-neutral-700 active:animate-border-pulse',
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

const DeepDiveCard = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        layout
        className="relative w-1/2 rounded-lg border border-neutral-700 bg-neutral-900 p-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          Close
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export const Bento = ({ items }: { items: any[] }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <LayoutGroup>
      <BentoGrid>
        {items.map(item => (
          <BentoCard
            key={item.id}
            className={item.className}
            onClick={() => setSelectedId(item.id)}
          >
            {item.content}
          </BentoCard>
        ))}
      </BentoGrid>

      {selectedItem && (
        <DeepDiveCard onClose={() => setSelectedId(null)}>
          {selectedItem.deepDiveContent}
        </DeepDiveCard>
      )}
    </LayoutGroup>
  );
};

export { BentoCard, BentoGrid };
