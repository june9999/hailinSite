"use client";
import React, { useState } from "react";
import Search from "./Search";
import { WorkInfo } from "@/src/lib/interfaces";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

interface WorksProps {
  year: Set<any>; // Assuming year is an array of strings
  type: Set<any>; // Assuming type is an array of strings
  data: WorkInfo[];
}
const Works: React.FC<WorksProps> = ({ year, type, data }) => {
  const [worksdata, setWorksdata] = useState(data);
  return (
    <div>
      <Search year={year} type={type} setWorksdata={setWorksdata} data={data} />
      <div className="flex flex-wrap gap-[1rem] m-auto justify-center">
        <PhotoProvider>
          {worksdata?.map((e: WorkInfo) => (
            <PhotoView src={e.imgUrl} key={e.id}>
              <img alt={e.name} className="w-[20rem]" src={e.imgUrl} />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Works;
