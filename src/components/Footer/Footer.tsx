import Link from "next/link";
import {
  FaTelegramPlane,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

const links = [
  {
    name: "/home",
    to: "/",
  },
  {
    name: "/work",
    to: "/work",
  },
  {
    name: "/honors",
    to: "/honors",
  },
  {
    name: "/blog",
    to: "/blog",
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-fit space-y-4">
      <div className="flex flex-row items-center justify-center w-full space-x-4">
        <a href="https://github.com/SeyedAlirezaFatemi" target="_blank">
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/_alireza_fa_/" target="_blank">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/alir3zafa" target="_blank">
          <FaTwitter size={24} />
        </a>
        <a href="https://t.me/OriginalAngel" target="_blank">
          <FaTelegramPlane size={24} />
        </a>
        <a href="mailto:seyedalirezafatemijahromi@gmail.com" target="_blank">
          <TbBrandGmail size={24} />
        </a>
      </div>
      <div className="flex flex-row items-center justify-center w-full space-x-4">
        {links.map((link) => (
          <Link href={link.to}>{link.name}</Link>
        ))}
      </div>
      <p>"I choose the labyrinth."</p>
      <p>
        Design & Development By Seyed Alireza FatemiJahromi | Logo from{" "}
        <a
          href="https://dribbble.com/shots/7896171-Alone-In-The-Dark"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-info"
        >
          source
        </a>
      </p>
    </footer>
  );
}
