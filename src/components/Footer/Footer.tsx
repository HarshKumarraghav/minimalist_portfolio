import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center items-center header__blur mt-8 px-4">
      <div className="flex gap-x-4 mb-2">
        <Link
          href={"https://twitter.com/_Harsh_raghav_"}
          target="_blank"
          className="p-2 bg-primary rounded-lg text-white"
        >
          <TwitterLogoIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"}
          target="_blank"
          className="p-2 bg-primary rounded-lg text-white"
        >
          <LinkedInLogoIcon />
        </Link>
        <Link
          href={"mailto:raghavharsh)68@gmial.com"}
          target="_blank"
          className="p-2 bg-primary rounded-lg text-white"
        >
          <BiMailSend />
        </Link>
      </div>
      <p className="text-sm text-center">
        <span>Designed & Built by Harsh K. Raghav</span>
        <br />
        <span>© 2023</span> All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
