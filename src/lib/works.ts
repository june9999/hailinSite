import prisma from "./db";
export interface WorkInfo {
  data: {
    name: string;
    material: string;
    addedYear: number;
    size: string;
    img: string;
  };
}

export const addData = async (WorkInfo: WorkInfo) => {
  const res = await prisma.work.create(WorkInfo);
  console.log(res);
};

export const getData = async () => {
  const res = await prisma.work.findMany();
  console.log("data is successfully fetched from database" + res);
  return res;
};
