import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import React from 'react';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Providers } from '@/providers';
import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL('https://seyedalirezafatemi.github.io'),
    title: {
      template: '%s | Seyed Alireza Fatemi Jahromi',
      default: 'Seyed Alireza Fatemi Jahromi | Personal website',
    },
    description:
      'Personal website of Seyed Alireza Fatemi Jahromi — Software & Machine Learning Engineer, Game Designer & Developer.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Seyed Alireza Fatemi Jahromi',
    },
    twitter: {
      card: 'summary',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="mx-auto max-w-4xl p-4">
        {process.env.NODE_ENV === 'production' && (
          <>
            <VercelAnalytics />
            <SpeedInsights />
          </>
        )}
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
