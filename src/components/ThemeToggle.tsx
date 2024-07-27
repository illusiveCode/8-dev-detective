import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import moonIcon from "../../assets/icon-moon.svg";
import sunIcon from "../../assets/icon-sun.svg";
import placeholderIcon from "../../assets/placeholderIcon.svg";

type ThemeToggleProps = {
  mode?: string;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ mode }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeClick = useCallback(() => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    }
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src={placeholderIcon}
        width={20}
        height={20}
        className="bg-gray-500 border-none"
        sizes="20x20"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleThemeClick}
    >
      <p className="text-sm font-bold text-primary-steel dark:text-dark-white uppercase tracking-[2.5px]">
        {resolvedTheme === "dark" ? "light" : "dark"}
      </p>
      <Image
        className="object-contain"
        src={resolvedTheme === "dark" ? sunIcon : moonIcon}
        alt={resolvedTheme === "dark" ? "Dark mode icon" : "Light mode icon"}
      />
    </div>
  );
};

export default ThemeToggle;
