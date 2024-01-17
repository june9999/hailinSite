"use server";
import { fileInfo } from "@/lib/data";
import { hasUrl } from "@/lib/data";
import { addData } from "../../lib/works";
import { WorkInfo } from "../../lib/works";
import { cloudinary } from "../../lib/cloudinary";

export async function addForm(formData: FormData) {
  "use server";
  // to check from the serve side if the value is empty, starting from the second value
  let loopNumber = 1;
  for (const pair of formData.entries()) {
    if (loopNumber > 1 && !pair[1]) {
      throw Error(`${pair[0]} value is ${pair[1]}`);
    }
    loopNumber++;
  }
  //  upload the file
  try {
    const WorkInfo: WorkInfo = {
      data: {
        name: formData.get("name") as string,
        material: formData.get("material") as string,
        addedYear: parseInt(formData.get("addedYear") as string),
        size: formData.get("size") as string,
        img: uploadResult.url as string,
      },
    };
    const res = addData(WorkInfo);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
