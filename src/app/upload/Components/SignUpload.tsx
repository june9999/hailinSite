"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { WorkInfo } from "@/lib/interfaces";
import Checkform from "./Checkform";

export const SignedUpload = () => {
  const [FileTodb, setFileTodb] = useState<WorkInfo[]>();

  return (
    <div className={`grid gap-6 ${FileTodb ? "grid-cols-2" : "grid-cols-1"}`}>
      {/* how to handle the error from CIduploadWidget  */}
      <CldUploadWidget
        //   Preset is a predefined setting in the user setting
        // get the signature from the server side
        signatureEndpoint="/api/cloudinarySign"
        uploadPreset="hailinsite"
        // THEN, front-end
        // do I need to clean the data onqueuestart
        // reset at the end of queue
        // how to show the error, loading, preventdefault, duplicate (covered by the tool?)
        onQueuesEnd={(result, { widget }) => {
          if (result && result.info) {
            const Filesinfo = result?.info?.files;
            const Files = Filesinfo.map((e: any) => {
              return {
                name: e.name.split(/[,.]+/)[0],
                addedYear: e.name.split(/[,.]+/)[1],
                material: e.name.split(/[,.]+/)[2],
                size: e.name.split(/[,.]+/)[3],
                imgUrl: e.uploadInfo.url,
              };
            }) as WorkInfo[];
            setFileTodb(Files);
          }
        }}
        options={{
          sources: ["local", "url"],
          showCompletedButton: true,
        }}
      >
        {/* we pass the whole function into the component ciduploadwidget */}
        {/* Inside the component, there must somewhere define the functionality of open  */}
        {({ open }) => {
          function handleOnClick() {
            setFileTodb(undefined);
            open();
          }
          return (
            <p className="flex items-center justify-center h-full">
              <button onClick={handleOnClick}>Upload an Image</button>
            </p>
          );
        }}
      </CldUploadWidget>
      {FileTodb && <Checkform FileTodb={FileTodb} setFileTodb={setFileTodb} />}
    </div>
  );
};

export default SignedUpload;
