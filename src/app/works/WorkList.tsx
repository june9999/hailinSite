"use client";
import React from "react";
import useFetch from "@/lib/useFetch";

const WorkList = () => {
  // in this case, I want to get the data from some api and update the status

  const customerFetch = async (args: string) => {
    const res = await fetch(args);
    return await res.json();
  };
  const [data, loading, error] = useFetch("apo/work", customerFetch);
  console.log(data);
  return <div>WorkList</div>;
};

export default WorkList;
