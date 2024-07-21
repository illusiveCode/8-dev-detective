import { FC } from "react";
import Image from "next/image";
import locationIcon from "../../assets/icon-location.svg";
import linkIcon from "../../assets/icon-website.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import githubIcon from "../../assets/icon-company.svg";
import Link from "next/link";

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
}) => {
  const linkStyle = (isDisabled: boolean) =>
    `text-sm dark:text-dark-white ${
      isDisabled ? "opacity-50 cursor-not-allowed" : ""
    }`;

  const iconSize = "w-5 h-5";

  return (
    <div className="grid tablet:grid-cols-2 gap-4">
      <div
        className={`flex items-center gap-4 ${linkStyle(
          location === "Not Available"
        )}`}
      >
        <Image
          className={`object-contain ${iconSize}`}
          src={locationIcon}
          alt=""
        />
        <p>{location}</p>
      </div>
      <div
        className={`flex items-center gap-4 ${linkStyle(
          website === "Not Available"
        )}`}
      >
        <Image className={`object-contain ${iconSize}`} src={linkIcon} alt="" />
        {website !== "Not Available" ? (
          <Link href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </Link>
        ) : (
          <p>{website}</p>
        )}
      </div>
      <div
        className={`flex items-center gap-4 tablet:order-2 ${linkStyle(
          twitter === "Not Available"
        )}`}
      >
        <Image
          className={`object-contain  ${iconSize}`}
          src={twitterIcon}
          alt=""
        />
        {twitter !== "Not Available" ? (
          <Link
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{twitter}
          </Link>
        ) : (
          <p>{twitter}</p>
        )}
      </div>
      <div
        className={`flex items-center gap-4 ${linkStyle(
          github === "Not Available"
        )}`}
      >
        <Image
          className={`object-contain dark:stroke-white ${iconSize}`}
          src={githubIcon}
          alt=""
        />
        {github !== "Not Available" ? (
          <Link
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{github}
          </Link>
        ) : (
          <p>@{github}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileLinks;
