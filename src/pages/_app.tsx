import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const links = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Work',
      href: '/work',
    },
    {
      text: 'Honors',
      href: '/honors',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ];
  return (
    <ThemeProvider>
      <div className="p-20">
        <Header links={links} />
        <Component {...pageProps} />
        <div className="divider"></div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
