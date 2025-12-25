'use client';

import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export const BentoGrid = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return <div className={cn('grid grid-cols-12 gap-4', className)}>{children}</div>;
};

export const BentoCard = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void; }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        'relative cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-2xl transition-all duration-300',
        'hover:border-emerald-500/50 hover:shadow-emerald-500/10 hover:bg-neutral-900',
        'group overflow-hidden',
        className
      )}
    >
      {/* Industrial Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
};

// ... DeepDiveCard implementation ...

export const Bento = ({ items }: { items: any[] }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <LayoutGroup>
      <BentoGrid>
        {items.map(item => (
          <BentoCard key={item.id} className={item.className} onClick={() => setSelectedId(item.id)}>
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