import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

export default function Header() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <header className="my-6 text-center flex flex-row justify-between">
      <HeaderItem text="HOME" path="/" />
      <HeaderItem text="WORK" path="work" />
      <Torch />
      <HeaderItem text="HONORS" path="honors" />
      <HeaderItem text="BLOG" path="blog" />
    </header>
  );
}

function HeaderItem({ text, path }: { text: string; path: string }) {
  const router = useRouter();
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(path);
  };
  return (
    <button
      className="basis-32 h-12 font-medium border-2 border-transparent border-b-black dark:border-b-gray-400"
      onClick={handleClick}
    >
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
      src={theme == "light" ? "/on.png" : "/off.png"}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      alt="logo"
      width="80"
      height="140"
    />
  );
}
