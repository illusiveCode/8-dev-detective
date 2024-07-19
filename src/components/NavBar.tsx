import Image from "next/image";
import { FC } from "react";

type NavBarProps = {
  iconUrl: string;
  text: string;
  title: string;
};

const NavBar: FC<NavBarProps> = ({ text, title, iconUrl }) => {
  return (
    <nav className="max-w-1/2 flex justify-between mb-8">
      <h1 className="text-h1 text-light-neutral dark:text-dark-secondary font-bold">
        {title}
      </h1>
      <div role="button" className="flex items-center gap-4">
        <p className="text-h4 font-bold text-light-secondary dark:text-dark-secondary uppercase tracking-[2.5px]">
          {text}
        </p>
        <Image src={iconUrl} alt={text} width={20} height={20} />
      </div>
    </nav>
  );
};

export default NavBar;
