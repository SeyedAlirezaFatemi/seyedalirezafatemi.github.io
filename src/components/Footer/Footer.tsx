import {
  FaTelegramPlane,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';
import { links } from '@/constants';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex h-fit w-full flex-col items-center justify-center space-y-4">
      <div className="flex w-full flex-row items-center justify-center space-x-4">
        <Link href="https://github.com/SeyedAlirezaFatemi" target="_blank">
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://www.instagram.com/_alireza_fa_/" target="_blank">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://twitter.com/alir3zafa" target="_blank">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://t.me/OriginalAngel" target="_blank">
          <FaTelegramPlane size={24} />
        </Link>
        <Link href="mailto:seyedalirezafatemijahromi@gmail.com" target="_blank">
          <TbBrandGmail size={24} />
        </Link>
      </div>
      <div className="flex w-full flex-row items-center justify-center space-x-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.href}
          </Link>
        ))}
      </div>
      <p>&ldquo;I choose the labyrinth.&rdquo;</p>
      <p>
        Design & Development By Seyed Alireza FatemiJahromi | Logo from{' '}
        <Link
          href="https://dribbble.com/shots/7896171-Alone-In-The-Dark"
          target="_blank"
          rel="noopener noreferrer"
          className="link-info link"
        >
          source
        </Link>
      </p>
    </footer>
  );
}
