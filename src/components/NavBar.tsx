import { FC } from "react";
import ThemeToggle from "./ThemeToggle";

type NavBarProps = {
  title: string;
};

const NavBar: FC<NavBarProps> = ({ title }) => {
  return (
    <nav className="max-w-1/2 flex justify-between mb-8 items-center">
      <h1 className="text-xl text-primary-dark-blue dark:text-dark-white font-bold">
        {title}
      </h1>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
