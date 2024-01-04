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
  try {
    const res = await prisma.work.create(WorkInfo);
    console.log("successfully created data" + res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    const res = await prisma.work.findMany();
    console.log("data is successfully fetched from database" + res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
