import Image from "next/image";
import { FC } from "react";

type SearchProps = {
  buttonText: string;
  placeholder: string;
  altText?: string;
  iconUrl: string;
  errorText: string;
};

const Search: FC<SearchProps> = ({
  buttonText,
  placeholder,
  iconUrl,
  errorText,
}) => {
  return (
    <form className="">
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
            className="w-[184px] tablet:min-w-[254px] text-sm tablet:text-md bg-transparent dark:bg-dark-neutral placeholder-primary-steel dark:placeholder-dark-white text-primary-dark-blue dark:text-dark-white outline-none text-ellipsis caret-primary-blue"
          />
        </div>
        <p className="text-red-400 absolute right-32 hidden">{errorText}</p>
        <button className="bg-primary-blue rounded-lg px-4 h-[46px] tablet:h-[50px] mr-2 text-body tablet:text-md text-neutral-white active:opacity-50">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default Search;
