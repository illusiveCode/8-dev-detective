import Link from "next/link";
import { FC } from "react";

type CardHeaderProps = {
  image?: string;
  name: string;
  username: string;
  joinedDate: string;
  link: string;
};

const CardHeader: FC<CardHeaderProps> = ({
  image,
  name,
  username,
  joinedDate,
  link,
}) => (
  <div className="flex gap-6">
    <img
      className="w-[70px] h-[70px] tablet:w-[117px] tablet:h-[117px] rounded-full "
      src={image}
      alt={`${name}'s avatar`}
    />
    <div className="tablet:flex flex-col justify-center gap-1">
      <h2 className="font-bold text-body text-primary-dark-blue dark:text-dark-white tablet:text-xl">
        {name}
      </h2>
      <Link href={link} className="text-primary-blue text-sm tablet:text-md">
        @{username}
      </Link>
      <p className="text-sm tablet:text-body text-primary-grey dark:text-dark-white">
        Joined {joinedDate}
      </p>
    </div>
  </div>
);

export default CardHeader;
