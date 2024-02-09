import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative"></div>
        <h1 className="text-white text-[25px] font-semibold">
          AJAY{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            SINGH{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        <Link href="https://github.com/Ajay-308">
          <RxGithubLogo className="w-[30px] h-[30px] text-white cursor-pointer hover:rounded-full hover:bg-gradient-to-r from-purple-500 to-red-500" />
        </Link>
        <Link href="https://twitter.com/ajaysin308?t=GHbscjL8Xr8fLFbsl3ax3g&s=08">
          <RxTwitterLogo className="w-[30px] h-[30px] text-white cursor-pointer hover:rounded-full hover:bg-gradient-to-r from-purple-500 to-red-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/ajay-b94a13233/">
          <RxLinkedinLogo className="w-[30px] h-[30px] text-white cursor-pointer hover:rounded-full hover:bg-gradient-to-r from-purple-500 to-red-500" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
