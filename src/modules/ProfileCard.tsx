// components/ProfileCard.tsx
"use client";

import { FC } from "react";
import CardBio from "@/components/CardBio";
import CardHeader from "@/components/CardHeader";
import ProfileLinks from "@/components/ProfileLinks";
import StatsCard from "@/components/StatsCard";

type User = {
  avatar_url: string;
  name: string;
  login: string;
  created_at: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  html_url: string;
};

type ProfileCardProps = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const ProfileCard: FC<ProfileCardProps> = ({ user, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p className="text-primary-blue dark:text-dark-white text-center">
        No results: {error}
      </p>
    );

  return (
    <div className="profile-card">
      <CardHeader
        image={user?.avatar_url ?? "default-avatar-url"}
        name={user?.name ?? "No name available"}
        link={user?.html_url ?? ""}
        username={user?.login ?? "No username available"}
        joinedDate={
          user
            ? new Date(user.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "No date available"
        }
      />
      <CardBio text={user?.bio ?? "This user has no bio"} />
      <StatsCard
        repos={user?.public_repos ?? 0}
        followers={user?.followers ?? 0}
        following={user?.following ?? 0}
      />
      <ProfileLinks
        location={user?.location ?? "Not Available"}
        website={user?.blog ?? "Not Available"}
        twitter={user?.twitter_username ?? "Not Available"}
        github={user?.html_url.split("/").pop() ?? "Not Available"}
      />
    </div>
  );
};

export default ProfileCard;
