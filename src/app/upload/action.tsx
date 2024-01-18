import { WorkInfo } from "@/lib/interfaces";
import { addData } from "@/lib/works";

export async function WorksToDB(files: FormData) {
  let index = 0;
  for (index; files[index]; index++) {
    const res = await addData(files[index]);
    return res;
  }
}
