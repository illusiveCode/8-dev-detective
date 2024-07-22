"use client";

import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { NextPage } from "next";
import "./../app/globals.css";
import magnifyingGlass from "../../assets/icon-search.svg";
import moonImgUrl from "../../assets/icon-moon.svg";
import Search from "@/components/Search";
import ProfileCard from "@/modules/ProfileCard";
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

const Home: NextPage<any> = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await fetchGithubUser(username);
      setUser(userData);
    } catch (err: any) {
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("octocat");
  }, []);

  return (
    <div className="bg-neutral-light-blue py-6 dark:bg-dark-midnight tablet:min-w-[600px] h-auto tablet:h-screen flex items-center justify-center">
      <div className="container mx-auto  h-screen tablet:h-auto max-w-[730px] grid place-content-center ">
        <NavBar iconUrl={moonImgUrl} text="Dark" title="DevDetective" />
        <Search
          placeholder={"Search GitHub username"}
          iconUrl={magnifyingGlass}
          buttonText={"Search"}
          errorText="No Results"
          onSearch={handleSearch}
        />
        <ProfileCard user={user} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Home;
