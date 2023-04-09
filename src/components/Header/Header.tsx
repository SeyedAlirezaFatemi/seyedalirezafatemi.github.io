import { Bars3Icon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export type HeaderProps = {
  links: { href: string; text: string }[];
  rootClassName?: string;
};
export default function Header({ links, rootClassName }: HeaderProps) {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <header className={rootClassName}>
      <div className="container mx-auto flex items-center justify-between lg:justify-start">
        <nav className="mr-10 hidden w-full lg:flex">
          {links.map((it) => (
            <a
              className={twMerge(
                'rounded-lg px-3 py-2 font-medium hover:bg-blue-200 hover:text-gray-900'
              )}
              href={it.href}
              key={it.href}
            >
              {it.text}
            </a>
          ))}
        </nav>
        <button
          className={twMerge(
            'block rounded-lg px-3 py-2 font-medium lg:hidden'
          )}
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <Bars3Icon className={twMerge('h-8 w-8')} />
        </button>
      </div>
      {showDrawer && (
        <div className={twMerge('mt-2 p-4 text-xs')}>
          <nav>
            {links.map((it) => (
              <a
                className={twMerge(
                  'block rounded-lg px-3 py-2 font-medium hover:bg-blue-200 hover:text-gray-900',
                  'dark:text-gray-100 dark:hover:text-gray-900'
                )}
                href={it.href}
                key={it.href}
              >
                {it.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
