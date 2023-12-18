import React from 'react';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import { Providers } from '@/providers';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const revalidate = 3600;

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
