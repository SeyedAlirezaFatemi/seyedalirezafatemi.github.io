'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeaderItem({ text, path }: { path: string; text: string }) {
  const pathname = usePathname();
  const className = twMerge(
    'basis-32 h-12 font-medium border-2 border-transparent capitalize',
    pathname == path ? 'border-b-black dark:border-b-gray-400' : null
  );
  return (
    <Link className={className} href={path}>
      {text}
    </Link>
  );
}
