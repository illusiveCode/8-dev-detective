import { FC } from "react";

type StatsCardProps = {
  repos: number;
  followers: number;
  following: number;
};

const StatsCard: FC<StatsCardProps> = ({ repos, followers, following }) => {
  return (
    <div className="bg-neutral-light-blue dark:bg-dark-midnight rounded-2xl w-full grid grid-cols-3 place-items-center text-center  h-[85px]">
      <div className="flex flex-col gap-2">
        <span className="text-xs tablet:text-body text-primary-steel dark:text-dark-white">
          Repos
        </span>
        <strong className="text-md tablet:text-lg dark:text-dark-white text-primary-dark-blue">
          {repos}
        </strong>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs tablet:text-body text-primary-steel dark:text-dark-white">
          Followers
        </span>
        <strong className="text-md tablet:text-lg dark:text-dark-white text-primary-dark-blue">
          {followers}
        </strong>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs tablet:text-body text-primary-steel dark:text-dark-white">
          Following
        </span>
        <strong className="text-md tablet:text-lg dark:text-dark-white text-primary-dark-blue">
          {following}
        </strong>
      </div>
    </div>
  );
};

export default StatsCard;
