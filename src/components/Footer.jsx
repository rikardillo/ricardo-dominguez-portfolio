import { FaInstagram, FaReddit, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex h-[10rem] w-full flex-col items-center justify-center gap-2 bg-black">
      Find me on:
      <div className="social-icons flex gap-4 text-[2rem]">
        <Link
          className="transition-all duration-300 hover:scale-110 hover:text-amber-500"
          to="https://www.linkedin.com/in/ricardo-dom%C3%ADnguez-662a054a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>

        <Link
          className="transition-all duration-300 hover:scale-110 hover:text-amber-500"
          to="https://github.com/rikardillo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>

        <Link
          className="transition-all duration-300 hover:scale-110 hover:text-amber-500"
          to="https://www.instagram.com/ricardo.dmgz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>

        <Link
          className="transition-all duration-300 hover:scale-110 hover:text-amber-500"
          to="https://www.reddit.com/user/Ricardo_Dmgz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReddit />
        </Link>
      </div>
    </div>
  );
}
