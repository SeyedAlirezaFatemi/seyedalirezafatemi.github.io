'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: ReactNode;
};
export const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
