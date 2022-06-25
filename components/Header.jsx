import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex justify-between items-center flex-col sm:flex-row m-5 h-auto" >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} ></HeaderItem>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} ></HeaderItem>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} ></HeaderItem>
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} ></HeaderItem>
        <HeaderItem title="SEARCH" Icon={SearchIcon} ></HeaderItem>
        <HeaderItem title="ACCOUNT" Icon={UserIcon} ></HeaderItem>
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
        alt="Hulu"
        width="100px"
        height="50px"
      />
    </header>
  );
}

export default Header;
