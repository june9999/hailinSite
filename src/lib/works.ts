// Where I deal with Works Collection from db
import { error } from "console";
import prisma from "./db";
import { WorkInfo } from "@/lib/interfaces";

export const addData = async (WorkInfo: WorkInfo) => {
  console.log("invoking");
  try {
    console.log(WorkInfo);
    WorkInfo.addedYear = Number(WorkInfo.addedYear);
    const res = await prisma.work.create({ data: WorkInfo });
    console.log("successfully created data" + res);
    // Return response to action
    return Response.json({
      message: "work sucssfully created in db",
      error: "",
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "workdata upload failed" });
  }
};

// export const getData = async () => {
//   try {
//     const res = await prisma.work.findMany();
//     console.log("data is successfully fetched from database" + res);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
