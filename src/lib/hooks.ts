// where I define custom hook
"use client";

import { useState } from "react";

export const useFormState = (userMethod: (arg0: FormData) => any) => {
  const [state, setState] = useState({ error: "", loading: false });

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setState({ error: "", loading: true });
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await userMethod(formData);
    if (result?.error) {
      setState({ error: result.error, loading: false });
    } else {
      setState({ error: "", loading: false });
    }
    form.reset();
  };

  return { submitHandler, state };
};

// some coding from understanding swr -> needs continue
// import { Url } from "next/dist/shared/lib/router/router";
// in the frontend, I want to reuse some code to fetch data from some api
// import { useEffect, useState } from "react";

// const useFetch = (url: string, fetcher: Function) => {
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // we envoke the function by the backend router
//         const newData = await fetcher(url);
//         setData(newData);
//       } catch (error: any) {
//         setError(error);
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);
//   return [data, loading, error];
// };
