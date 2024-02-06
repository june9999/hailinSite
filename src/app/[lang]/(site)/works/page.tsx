"use serve";
import { Suspense } from "react";
import { getData, getDataUnique } from "@/src/lib/works";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { WorkInfo } from "@/src/lib/interfaces";
import Search from "./components/Search";

const page = async () => {
  let obj = {
    a: function () {
      console.log(this);
    },
  };
  let func = obj.a;
  func();

  const data = await getData();
  const year = await getDataUnique("addedYear");
  const type = await getDataUnique("material");

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <ErrorBoundary fallback={<Error />}>
        <Search year={year} type={type} />
        <div className="flex flex-wrap gap-[1rem] m-auto justify-center">
          {data?.map((e: WorkInfo) => (
            <img className="w-[25rem]" src={e.imgUrl} key={e.id} />
          ))}
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};

export default page;
