"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SignedUpload = (): JSX.Element => {
  const [resource, setResource] = useState<Object>();
  const router = useRouter();

  return (
    <div className={`grid gap-6 ${resource ? "grid-cols-2" : "grid-cols-1"}`}>
      <CldUploadWidget
        //   Preset is a predefined setting in the user setting
        signatureEndpoint="/api/cloudinarySign"
        uploadPreset="hailinsite"
        onQueuesEnd={(result, { widget }) => {
          setResource(result?.info);
          console.log(result);
          router.push("/upload/checkpage");
        }}
        // onShowCompleted={() => {
        // }}
        options={{
          sources: ["local", "url"],
          // why language is not working?
          language: "zh-CN",
          showCompletedButton: true,
        }}
      >
        {/* we pass the whole function into the component ciduploadwidget */}
        {/* Inside the component, there must somewhere define the functionality of open  */}
        {({ open }) => {
          function handleOnClick() {
            setResource(undefined);
            open();
          }
          return (
            <p className="flex items-center justify-center h-full">
              <button onClick={handleOnClick}>Upload an Image</button>
            </p>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default SignedUpload;
