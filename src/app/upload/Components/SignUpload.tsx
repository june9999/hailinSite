"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { WorkInfo } from "@/lib/interfaces";
import Checkform from "./Checkform";

type resultFiles = {
  files: object[];
};
export const SignedUpload = () => {
  const [fileTodb, setFileTodb] = useState<any>();

  return (
    <div className={`grid gap-6 ${fileTodb ? "grid-cols-2" : "grid-cols-1"}`}>
      {/* how to handle the error from CIduploadWidget  */}
      <CldUploadWidget
        // get the signature from the server side
        signatureEndpoint="/api/cloudinarySign"
        //   Preset is a predefined setting in the user setting
        uploadPreset="hailinsite"
        // THEN,
        // the error, loading, preventdefault, duplicate (covered by the tool)
        onQueuesEnd={(result, { widget }) => {
          if (result && result.info) {
            const resultFiles = result?.info as resultFiles;
            const files = resultFiles.files;
            const filesInfo = files.map((e: any) => {
              const fileInfo: WorkInfo = {
                name: e.name.split(/[,.]+/)[0],
                addedYear: e.name.split(/[,.]+/)[1],
                material: e.name.split(/[,.]+/)[2],
                size: e.name.split(/[,.]+/)[3],
                imgUrl: e.uploadInfo.url,
              };
              return fileInfo;
            });
            setFileTodb(filesInfo);
          }
        }}
        options={{
          sources: ["local", "url"],
          showCompletedButton: true,
        }}
      >
        {/* we pass the whole function into the component ciduploadwidget */}
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
      {fileTodb && <Checkform fileTodb={fileTodb} setFileTodb={setFileTodb} />}
    </div>
  );
};

export default SignedUpload;
