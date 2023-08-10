import Image from "next/image";
import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const Header = () => {
  return (
    <div className="md:rounded-lg sticky top-0 md:top-4 z-40 w-full header__blur">
      <div className="container mx-auto flex flex-row justify-between items-center py-2 px-2">
        <div className="flex items-center rounded-full p-2 bg-primary">
          <h1 className="text-2xl font-bold text-white">HR</h1>
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
