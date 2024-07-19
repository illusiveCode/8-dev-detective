import { FC } from "react";
import Image from "next/image";
import locationIcon from "../../assets/icon-location.svg";
import linkIcon from "../../assets/icon-website.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import githubIcon from "../../assets/icon-company.svg";

type ProfileLinksProps = {
  location: string;
  website: string;
  twitter: string;
  github: string;
};
const ProfileLinks: FC<ProfileLinksProps> = ({
  location,
  website,
  twitter,
  github,
}) => (
  <div className="grid gap-4">
    <div className="flex gap-4">
      <Image
        className="object-contain"
        src={locationIcon}
        alt=""
        width={20}
        height={20}
      />
      {location}
    </div>
    <div className="flex gap-4">
      <Image
        className="object-contain"
        src={linkIcon}
        alt=""
        width={20}
        height={20}
      />
      <a href={website}>{website}</a>
    </div>
    <div className="flex gap-4">
      <Image
        className="object-contain"
        src={twitterIcon}
        alt=""
        width={20}
        height={20}
      />
      {twitter}
    </div>
    <div className="flex gap-4">
      <Image
        className="object-contain"
        src={githubIcon}
        alt=""
        width={20}
        height={20}
      />
      @{github}
    </div>
  </div>
);

export default ProfileLinks;
