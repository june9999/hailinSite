"use serve";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 w-full shadow">
      <div className="flex justify-between items-center px-10 h-14">
        <div className="flex justify-between items-center gap-x-14">
          <div className="w-40">
            <p className="text-gray-400 text-[12px]">Admin Page</p>
          </div>
        </div>

        <ul className="flex items-center gap-5">
          <li className="">
            <a className="bg-gray-200 px-3 py-2 rounded-sm" href="/home">
              <i className="fa-regular fa-bell">Back</i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
