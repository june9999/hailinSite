"use client";
import React, { useState } from "react";
import Upload from "./Upload";
import Check from "./Check";
import { WorkInfo } from "@/src/lib/interfaces";

const SideBar: React.FC<{ data: WorkInfo[] }> = ({ data }) => {
  const [pageDisplay, setPageDisplay] = useState("Data Manage");

  return (
    <>
      <aside
        id="sidebar"
        className="w-[60px] lg:w-[20rem] h-[full] shadow  duration-500 ease-in-out"
      >
        <div className="flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-1 mt-2">
            <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
              <i className="fa-solid fa-house text-center px-5"></i>
              <button
                onClick={() => {
                  setPageDisplay("Upload");
                }}
                className="whitespace-nowrap pl-1"
              >
                Upload
              </button>
            </li>

            <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
              <i className="fa-solid fa-chart-line text-center px-5"></i>
              <button
                onClick={() => {
                  setPageDisplay("Data Manage");
                }}
                className="whitespace-nowrap pl-1"
              >
                Data Manage
              </button>
            </li>
            <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
              <i className="fa-solid fa-chart-line text-center px-5"></i>
              <button
                onClick={() => {
                  setPageDisplay("HomePage Setting");
                }}
                className="whitespace-nowrap pl-1"
              >
                Home Setting
              </button>
            </li>
            <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
              <i className="fa-solid fa-chart-line text-center px-5"></i>
              <button
                onClick={() => {
                  setPageDisplay("HomePage Setting");
                }}
                className="whitespace-nowrap pl-1"
              >
                Setting
              </button>
            </li>
          </ul>

          <ul className="flex flex-col gap-1 mt-2">
            <li className="text-gray-500 hover:bg-gray-100 hover:text-gray-900">
              <a
                className="w-full flex items-center py-3"
                href="../api/auth/logout"
              >
                <i className="fa-solid fa-right-from-bracket text-center px-5"></i>
                <span className="pl-1">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {pageDisplay == "Upload" && <Upload />}
      {pageDisplay == "Data Manage" && <Check data={data} />}
    </>
  );
};

export default SideBar;
