"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import WorksMenu from "./WorksMenu";

interface MenuLinkProps {
  href: string;
  name: string;
}
const Menu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [worksisOpen, setWorksIsOpen] = useState(false);

  const MenuLink: React.FC<MenuLinkProps> = ({ href, name }) => {
    const path = pathname.split(/[/]+/)[2];
    return (
      <>
        <li
          className={`${
            `/${path}` == href && "bg-gray-100 md:bg-gray-300"
          } p-[8px] `}
        >
          <Link
            href={href}
            className={`${`/${path}` == href && "text-[#6D9B74] "} `}
          >
            {name}
          </Link>
        </li>
      </>
    );
  };

  return (
    <header className="md:bg-gray-300 md:h-[5rem]">
      <button
        className="absolute right-[1rem] md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30}>
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3z" />
        </svg>
      </button>
      <nav className=" text-xl flex flex-col md:flex-row border-t:4 border-solid border-[#2ea3f2] md:py-[1rem]">
        <Link href="/" className="font-bold p-[8px]">
          Hailin Wang
        </Link>
        <ul
          className={` ${
            isOpen ? "" : "hidden "
          } flex flex-col shadow-md divide-y divide-slate-100 border-[1px] mt-[1rem]  md:flex
] md:flex-row md:shadow-none md:border-none md:m-0 md:p-0 md:divide-none md:gap-x-[3rem] md:pl-[3rem]`}
        >
          <MenuLink href="/home" name="HOME" />
          <MenuLink href="/about" name="ABOUT" />
          <div className="flex relative ">
            <button
              className={`${
                `/${pathname.split(/[/]+/)[2]}` == "/works" &&
                "text-[#6D9B74]  "
              } `}
              onClick={() => {
                setWorksIsOpen(!worksisOpen);
              }}
            >
              WORKS
            </button>
            {worksisOpen && <WorksMenu />}
          </div>

          <MenuLink href="/vita" name="VITA" />
          <MenuLink href="/contact" name="CONTACT" />
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
