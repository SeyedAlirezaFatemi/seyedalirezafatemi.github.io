'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import onImage from '@/assets/images/theme/on.png';
import offImage from '@/assets/images/theme/off.png';

export function Torch() {
  const { theme, setTheme } = useTheme();
  return (
    <Image
      className="-mt-10 cursor-pointer"
      src={theme == 'dark' ? onImage : offImage}
      placeholder="blur"
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      alt="logo"
      width="80"
      height="140"
    />
  );
}
