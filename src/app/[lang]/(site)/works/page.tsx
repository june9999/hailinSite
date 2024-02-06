"use serve";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { getData, getDataUnique } from "@/src/lib/works";
import Works from "./components/Works";

const page = async () => {
  const data = await getData();
  const year = await getDataUnique("addedYear");
  const type = await getDataUnique("material");

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      {/* <ErrorBoundary fallback={<Error />}> */}
      <Works data={data} year={year} type={type} />
      {/* </ErrorBoundary> */}
    </Suspense>
  );
};

export default page;
