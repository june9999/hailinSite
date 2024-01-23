"use server";
import { WorkInfo } from "@/lib/interfaces";
import { addData } from "@/lib/works";

// export async function WorksToDB(files: WorkInfo[]) {
//   try {
//     const res = await files.map(async (e) => await addData(e));
//     // return response to frontend hook
//     console.log(res);
//     console.log(JSON.stringify(res));
//     return JSON.stringify(res);
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

export async function WorksToDB(files: WorkInfo[]) {
  try {
    // Use Promise.all to wait for all promises to resolve
    await Promise.all(files.map(async (e) => await addData(e)));
    // Return response to frontend hook
    return { messages: "all data have been added", error: "" };
  } catch (error) {
    console.log(error);
    return Response.json({ error: "workdata upload failed" });
  }
}
