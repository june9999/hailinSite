"use client";
import { getDataYear } from "@/src/lib/works";
import React, { useEffect, useState } from "react";

const Search = ({ year, type }) => {
  const [dropdownDisplay, setDropDown] = useState(false);
  const [selectContent, setSelectContent] = useState("Add Search Type");
  const yearData = [...year];
  const typeData = [...type];
  return (
    <div>
      <div>
        <div className="flex pb-[1rem] w-[90%] m-auto relative">
          <button
            id="states-button"
            onClick={() => {
              setDropDown(!dropdownDisplay);
            }}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
            type="button"
          >
            {selectContent}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {dropdownDisplay && (
            <div
              id="dropdown-states"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 flex flex-col absolute top-[80%]"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="states-button"
              >
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectContent("Created Year");
                      setDropDown(!dropdownDisplay);
                    }}
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <div className="inline-flex items-center">Created Year</div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      setSelectContent("Art Type");
                      setDropDown(!dropdownDisplay);
                    }}
                  >
                    <div className="inline-flex items-center">Art Type</div>
                  </button>
                </li>
              </ul>
            </div>
          )}
          {selectContent === "Art Type" && (
            <>
              <label htmlFor="artTypes" className="sr-only">
                Choose a state
              </label>
              <select
                id="artTypes"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a art type</option>
                {typeData.length > 0 &&
                  typeData.map((e) => {
                    return <option>{e}</option>;
                  })}
              </select>
            </>
          )}
          {selectContent === "Created Year" && (
            <>
              <label htmlFor="year" className="sr-only">
                Choose a year
              </label>
              <select
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option defaultValue={"Choose a year"}>Choose a year</option>
                {yearData.length > 0 &&
                  yearData.map((e) => {
                    return <option>{e}</option>;
                  })}
              </select>
            </>
          )}
          {selectContent === "Add Search Type" && (
            <>
              <label htmlFor="search" className="sr-only">
                Type to search
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Type to search"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
