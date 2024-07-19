import { FC } from "react";

type CardBioProps = {
  text: string;
};
const CardBio: FC<CardBioProps> = ({ text }) => {
  return <p className="description">{text}</p>;
};

export default CardBio;
