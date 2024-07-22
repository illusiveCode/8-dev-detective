import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type NavBarProps = {
  iconUrl: string;
  text: string;
  title: string;
};

const NavBar: FC<NavBarProps> = ({ text, title, iconUrl }) => {
  return (
    <nav className="max-w-1/2 flex justify-between mb-8">
      <h1 className="text-xl text-primary-dark-blue dark:text-dark-white font-bold">
        {title}
      </h1>

      <div role="button" className="flex items-center gap-4">
        <p className="text-sm font-bold text-primary-steel dark:text-dark-white uppercase tracking-[2.5px]">
          {text}
        </p>
        <Image src={iconUrl} alt={text} width={20} height={20} />
      </div>
    </nav>
  );
};

export default NavBar;
