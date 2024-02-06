"use client";
import { WorkInfo } from "@/src/lib/interfaces";
import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";

interface SearchProps {
  year: Set<any>; // Assuming year is an array of strings
  type: Set<any>; // Assuming type is an array of strings
  setWorksdata: (data: any) => void; // Adjust any to the type of data you expect
  data: WorkInfo[]; // Adjust any to the type of data you expect
}

const Search: React.FC<SearchProps> = ({ year, type, setWorksdata, data }) => {
  const [dropdownDisplay, setDropDown] = useState(false);
  const [selectContent, setSelectContent] = useState("Add Search Type");
  const [selectValue, setSelectValue] = useState("");
  const yearData = [...year];
  const typeData = [...type];

  useEffect(() => {
    setWorksdata(data);
    if (
      selectContent !== "Add Search Type" &&
      selectValue !== "Choose a year" &&
      selectValue !== "Choose a art type" &&
      selectValue
    ) {
      const newdata = data.filter((e) => e[selectContent] == selectValue);
      console.log(newdata);
      setWorksdata(newdata);
    }
  }, [data, setWorksdata, selectContent, selectValue]);

  return (
    <div className="flex pb-[2rem] w-[90%] m-auto relative">
      <button
        id="states-button"
        onClick={() => {
          setDropDown(!dropdownDisplay);
        }}
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
        type="button"
      >
        {selectContent === "Add Search Type"
          ? "Add Search Type"
          : `Filter by ${selectContent}`}
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
                  setSelectContent("addedYear");
                  setDropDown(!dropdownDisplay);
                  setSelectValue("");
                }}
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="inline-flex items-center">Creation Year</div>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setSelectContent("material");
                  setDropDown(!dropdownDisplay);
                  setSelectValue("");
                }}
              >
                <div className="inline-flex items-center">Art Material</div>
              </button>
            </li>
          </ul>
        </div>
      )}
      {selectContent === "material" && (
        <>
          <label htmlFor="artTypes" className="sr-only">
            Choose a state
          </label>
          <select
            id="artTypes"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
          >
            <option selected>Choose a art type</option>
            {typeData.length > 0 &&
              typeData.map((e) => {
                return <option key={uuid()}>{e}</option>;
              })}
          </select>
        </>
      )}
      {selectContent === "addedYear" && (
        <>
          <label htmlFor="year" className="sr-only">
            Choose a year
          </label>
          <select
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
          >
            <option defaultValue={"Choose a year"}>Choose a year</option>
            {yearData.length > 0 &&
              yearData.map((e) => {
                return <option key={uuid()}>{e}</option>;
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
  );
};

export default Search;
