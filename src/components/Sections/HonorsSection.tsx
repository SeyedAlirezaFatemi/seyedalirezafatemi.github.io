import { useTheme } from 'next-themes';
import { SectionHeader } from '@/components/Typography/Headers';
import Image from 'next/image';

export default function HonorsSection() {
  return (
    <div className="flex text-center">
      <SectionHeader className="text-center">Honors</SectionHeader>
      <HonorIcon />
    </div>
  );
}

export function HonorIcon() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <Image
      src={isDark ? '/trophy_dark.svg' : '/trophy_light.svg'}
      alt="Honor"
      width={24}
      height={24}
      className="-my-8"
    />
  );
}
