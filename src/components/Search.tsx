import Image from "next/image";
import { FC } from "react";

type SearchProps = {
  buttonText: string;
  placeholder: string;
  altText?: string;
  iconUrl: string;
  errorText: string;
};

const NavBar: FC<SearchProps> = ({
  buttonText,
  placeholder,
  iconUrl,
  errorText,
}) => {
  return (
    <form>
      <div className="w-full relative bg-neutral-white dark:bg-dark-navy h-[60px] tablet:h-[69px] flex items-center justify-between shadow-xl rounded-xl">
        <div className="flex gap-2">
          <Image
            className="ml-4 object-contain"
            src={iconUrl}
            alt=""
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder={placeholder}
            className="w-[184px] text-h4 bg-transparent dark:bg-dark-neutral placeholder-primary-steel dark:placeholder-dark-white text-primary-dark-blue dark:text-dark-white outline-none text-ellipsis caret-primary-blue"
          />
        </div>
        <p className="text-red-400 absolute right-32 hidden">{errorText}</p>
        <button className="bg-primary-blue rounded-lg px-4 h-12 mr-2 text-body text-neutral-white active:opacity-50">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default NavBar;
