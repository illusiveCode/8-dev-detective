import { FC } from "react";

type CardHeaderProps = {
  image?: string;
  name: string;
  username: string;
  joinedDate: string;
};

const CardHeader: FC<CardHeaderProps> = ({
  image,
  name,
  username,
  joinedDate,
}) => (
  <div className="">
    <img src={image} alt={`${name}'s avatar`} />
    <div className="">
      <h2>{name}</h2>
      <h3>@{username}</h3>
      <p>Joined {joinedDate}</p>
    </div>
  </div>
);

export default CardHeader;
