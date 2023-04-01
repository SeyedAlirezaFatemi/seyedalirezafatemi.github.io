import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  return (
    <header className="my-6 text-center flex flex-row justify-between">
      <HeaderItem text="HOME" />
      <HeaderItem text="WORK" />
      <Torch />
      <HeaderItem text="HONORS" />
      <HeaderItem text="ABOUT" />
    </header>
  );
}

function HeaderItem({ text }: any) {
  return (
    <button className="basis-32 h-12 font-medium border-2 border-transparent border-b-black dark:border-b-gray-400">
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
