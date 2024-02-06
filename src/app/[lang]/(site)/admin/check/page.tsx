import { Suspense } from "react";
import { deleteData, getData } from "@/src/lib/works";
import { WorkInfo } from "@/src/lib/interfaces";
import Button from "./Button";

const page = async () => {
  const data = await getData();

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="flex flex-wrap">
        {data?.map((e: WorkInfo) => (
          <>
            <img className="w-[20rem]" src={e.imgUrl} key={e.id} />
            <Button />
          </>
        ))}
      </div>
    </Suspense>
  );
};

export default page;
