import Image from "next/image";
import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import NavigatorMenu from "./Navigator";

const Header = () => {
  return (
    <div className="md:rounded-lg sticky top-0 md:top-4 z-40 w-full header__blur">
      <div className="container mx-auto flex flex-row justify-between items-center py-2 px-2">
        <div className="flex items-center">
          <Image alt="loga" src={"/logo/logo.png"} width={40} height={40} />
        </div>
        <div className="flex items-center gap-x-3">
          <ThemeSwitcher />
          <NavigatorMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
