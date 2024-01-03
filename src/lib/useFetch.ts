"use client";
import { Url } from "next/dist/shared/lib/router/router";
// in the frontend, I want to reuse some code to fetch data from some api
import { useEffect, useState } from "react";

const useFetch = (url: string, fetcher: Function) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // we envoke the function by the backend router
        const newData = await fetcher(url);
        setData(newData);
      } catch (error: any) {
        setError(error);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading, error];
};

export default useFetch;
