import React from 'react';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import { Providers } from '@/providers';
import type { Metadata } from 'next';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return {
    title: {
      template: '%s | Seyed Alireza Fatemi Jahromi',
      default: 'Seyed Alireza Fatemi Jahromi | Personal website',
    },
  };
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body className="mx-auto max-w-4xl p-4">
        <Providers>
          <Header />
          {children}
          <div className="divider" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default MainLayout;
