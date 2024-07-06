import React from 'react';
import { twMerge } from 'tailwind-merge';

export function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={twMerge('text-2xl font-semibold', className)}>{children}</h1>
  );
}
