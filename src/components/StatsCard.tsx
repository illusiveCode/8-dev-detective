import { FC } from "react";

type StatsCardProps = {
  repos: number;
  followers: number;
  following: number;
};

const StatsCard: FC<StatsCardProps> = ({ repos, followers, following }) => {
  return (
    <div className="stats">
      <div>
        <strong>Repos</strong>
        <span>{repos}</span>
      </div>
      <div>
        <strong>Followers</strong>
        <span>{followers}</span>
      </div>
      <div>
        <strong>Following</strong>
        <span>{following}</span>
      </div>
    </div>
  );
};

export default StatsCard;
