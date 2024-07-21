import NavBar from "@/components/NavBar";
import { NextPage } from "next";
import "./../app/globals.css";
import magnifyingGlass from "../../assets/icon-search.svg";
import moonImgUrl from "../../assets/icon-moon.svg";
import Search from "@/components/Search";
import ProfileCard from "@/modules/ProfileCard";

const Home: NextPage<any> = () => {
  return (
    <div className="bg-neutral-light-blue py-6 dark:bg-dark-midnight h-auto tablet:h-screen flex items-center justify-center">
      <div className="container mx-auto w-full h-screen tablet:h-auto  max-w-[730px]">
        <NavBar iconUrl={moonImgUrl} text="Dark" title="DevDetective" />
        <Search
          placeholder={"Search GitHub username"}
          iconUrl={magnifyingGlass}
          buttonText={"Search"}
          errorText="No Results"
        />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Home;
