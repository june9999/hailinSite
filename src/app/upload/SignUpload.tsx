"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { WorkInfo } from "@/lib/data";
import WorkCard from "./WorkCard";

export const SignedUpload = (): JSX.Element => {
  const [FileTodb, setFileTodb] = useState<WorkInfo[]>();
  const changeFormValue = () => {};

  return (
    <div className={`grid gap-6 ${FileTodb ? "grid-cols-2" : "grid-cols-1"}`}>
      <CldUploadWidget
        //   Preset is a predefined setting in the user setting
        signatureEndpoint="/api/cloudinarySign"
        uploadPreset="hailinsite"
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
          language: "zh-CN",
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
      {FileTodb && (
        <form>
          {FileTodb.map((work: WorkInfo) => {
            return (
              <div key={"wait"}>
                {Object.entries(work).map(([key, value]) => (
                  <>
                    <label htmlFor={key}>{key}:</label>
                    <input
                      key={key}
                      value={value}
                      name={key}
                      onChange={changeFormValue}
                      required
                    />
                  </>
                ))}
              </div>
            );
          })}
          <button>提交数据</button>
        </form>
      )}
    </div>
  );
};

export default SignedUpload;
