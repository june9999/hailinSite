"use server";

import { WorkInfo } from "@/src/lib/interfaces";
import { addData } from "@/src/lib/works";

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
