import { prisma } from "../../../lib/db";
import { formInfo } from "@/lib/data";
export interface WorkInfo {
  data: {
    form: formInfo;
  };
}

export async function GET(): Promise<Response> {
  try {
    const res = await prisma.work.findMany();
    console.log("getData has been called succssfully" + res);
    return Response.json(res);
  } catch (error) {
    // is it good to return error
    return Response.error();
  }
}

// export async function ADD(data: WorkInfo) {
//   try {
//     const res = await prisma.work.create(data);
//     console.log("getData has been called succssfully" + res);
//     return Response.json(res);
//   } catch (error) {
//     // is it good to return error
//     return error;
//   }
// }
