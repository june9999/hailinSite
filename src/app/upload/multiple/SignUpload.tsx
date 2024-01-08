"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

export const SignedUpload = (): JSX.Element => {
  const [resource, setResource] = useState<string | Object>();
  const [tryResource, setTryResource] = useState<any[]>([]);
  useEffect(() => {
    if (!resource) {
      setTryResource([]);
    } else {
      setTryResource([...tryResource, resource]);
    }
  }, [resource]);

  console.log(tryResource);
  return (
    <div className={`grid gap-6 ${resource ? "grid-cols-2" : "grid-cols-1"}`}>
      <CldUploadWidget
        //   Preset is a predefined setting in the user setting
        signatureEndpoint="/api/cloudinarySign"
        uploadPreset="hailinsite"
        onSuccess={(result, { widget }) => {
          setResource(result?.info);
          widget.close();
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
