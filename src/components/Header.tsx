import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-2 bg-yellow-400 text-zinc-950">
        <div className="flex items-center text-sm font-medium gap-16">
          <p>contact@avaproduction.com</p>
          <p>+62 823 5678 9009</p>
        </div>
        <div className="flex items-center gap-6">
          <Link className="hover:text-zinc-950/90 transition-all" href="#">
            <InstagramLogo size={20} weight="fill" />
          </Link>
          <Link className="hover:text-zinc-950/90 transition-all" href="#">
            <FacebookLogo size={20} weight="fill" />
          </Link>
          <Link className="hover:text-zinc-950/90 transition-all" href="#">
            <WhatsappLogo size={20} weight="fill" />
          </Link>
        </div>
      </header>
      <nav>
        
      </nav>
    </>
  );
};

export default Header;
