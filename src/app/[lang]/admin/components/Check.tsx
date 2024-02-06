import { WorkInfo } from "@/src/lib/interfaces";
import React, { Suspense } from "react";
import Button from "./Button";
import Image from "next/image";

const Check: React.FC<{ data: WorkInfo[] }> = (data) => {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="flex flex-wrap gap-[8px] p-[1rem]">
        {data.data?.map((e: WorkInfo) => (
          <>
            <img className="w-[20rem]" src={e.imgUrl} alt={e.name} />
            <Button work={e} />
          </>
        ))}
      </div>
    </Suspense>
  );
};

export default Check;
