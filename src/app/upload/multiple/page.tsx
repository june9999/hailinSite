"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export const UnsignedUpload = ({}) => {
  const [resource, setResource] = useState();
  console.log(resource);
  return (
    <div className={`grid gap-6 ${resource ? "grid-cols-2" : "grid-cols-1"}`}>
      <CldUploadWidget
        //   Preset is a predefined setting in the user setting
        uploadPreset="hailinsite"
        onSuccess={(result, { widget }) => {
          setResource(result?.info);
          console.log(resource);
          widget.close();
        }}
      >
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

export default UnsignedUpload;
