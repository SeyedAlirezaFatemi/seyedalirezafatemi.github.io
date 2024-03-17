import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import React from 'react';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hotjar from '@/components/Hotjar';
import { Providers } from '@/providers';
import '@/styles/globals.css';
import * as gtag from '@/utils/gtag';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        {process.env.NODE_ENV === 'production' && (
          <>
            <Hotjar />
            <GoogleAnalytics gaId={gtag.GA_TRACKING_ID} />
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
