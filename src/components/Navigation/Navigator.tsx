"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll/modules";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
const NavigatorMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant={"outline"}
          className="bg-primary hover:bg-primary hover:text-white text-white"
        >
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <DropdownMenuItem>About</DropdownMenuItem>
        </Link>
        <Link
          activeClass="active"
          to="stack"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <DropdownMenuItem>Teck Stack</DropdownMenuItem>
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <DropdownMenuItem>Work Experience</DropdownMenuItem>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <DropdownMenuItem>Projects</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigatorMenu;
