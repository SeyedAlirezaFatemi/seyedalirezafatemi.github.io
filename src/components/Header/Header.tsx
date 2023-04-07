import type { MouseEventHandler } from 'react';
import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <header className="my-6 flex flex-row justify-between text-center">
      <HeaderItem text="HOME" path="/" />
      <HeaderItem text="WORK" path="/work" />
      <Torch />
      <HeaderItem text="HONORS" path="/honors" />
      <HeaderItem text="BLOG" path="/blog" />
    </header>
  );
}

function HeaderItem({ text, path }: { path: string; text: string }) {
  const router = useRouter();
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(path);
  };
  const className = twMerge(
    'basis-32 h-12 font-medium border-2 border-transparent',
    router.pathname == path ? 'border-b-black dark:border-b-gray-400' : null
  );
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

function Torch() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <Image
      className="-mt-10 cursor-pointer"
      src={theme == 'light' ? '/on.png' : '/off.png'}
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      alt="logo"
      width="80"
      height="140"
    />
  );
}
