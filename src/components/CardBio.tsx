import { FC } from "react";

type CardBioProps = {
  text: string;
};
const CardBio: FC<CardBioProps> = ({ text }) => {
  return (
    <p className="text-primary-steel dark:text-dark-white text-sm tablet:text-body">
      {text}
    </p>
  );
};

export default CardBio;
