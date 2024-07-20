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
      className="w-[70px] rounded-full "
      src={image}
      alt={`${name}'s avatar`}
    />
    <div className="">
      <h2 className="">{name}</h2>
      <Link href={link} className="text-light">
        @{username}
      </Link>
      <p>Joined {joinedDate}</p>
    </div>
  </div>
);

export default CardHeader;
