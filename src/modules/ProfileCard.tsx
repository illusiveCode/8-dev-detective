// components/ProfileCard.tsx
"use client";

import { useState, useEffect } from "react";
import CardBio from "@/components/CardBio";
import CardHeader from "@/components/CardHeader";
import ProfileLinks from "@/components/ProfileLinks";
import StatsCard from "@/components/StatsCard";
import { fetchGithubUser } from "@/api/github";

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

const ProfileCard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchGithubUser("octocat");
        setUser(userData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

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
      <CardBio
        text={
          user?.bio ??
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
        }
      />
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
