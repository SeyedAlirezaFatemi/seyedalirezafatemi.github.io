import {
  FaTelegramPlane,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

export function Footer() {
  return (
    <footer className="flex flex-row items-center justify-center w-full h-24 space-x-2">
      <FaTelegramPlane />
      <FaGithub />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />
      <TbBrandGmail />
    </footer>
  );
}
