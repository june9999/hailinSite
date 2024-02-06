// Where I deal with Works Collection from db
import prisma from "./db";
import { WorkInfo } from "./interfaces";

export const addData = async (WorkInfo: WorkInfo) => {
  console.log("invoking");
  try {
    WorkInfo.addedYear = Number(WorkInfo.addedYear);
    const res = await prisma.work.create({ data: WorkInfo });
    console.log("successfully created data" + res);
    // Return response to action
    return;
  } catch (error) {
    console.log(error);
    throw new Error("unable to connect to db");
  }
};

export const getData = async () => {
  try {
    const res = await prisma.work.findMany();
    console.log("data is successfully fetched from database");
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("unable to connect to db");
  }
};

export const deleteData = async (id: string) => {
  try {
    const res = await prisma.work.delete({
      where: {
        id: id,
      },
    });

    console.log("successfully delete data" + res);
  } catch (error) {
    console.log(error);
    throw new Error("unable to connect to db");
  }
};

export const getDataUnique = async (key: string) => {
  try {
    let res = await prisma.work.findMany({
      select: {
        [key]: true,
      },
      orderBy: {
        [key]: "desc",
      },
    });
    console.log(res);
    const newr = res.map((e) => e[key]);
    const newRes = new Set(newr);
    console.log(newRes);
    console.log("data is successfully fetched from database");
    return newRes;
  } catch (error) {
    console.log(error);
    throw new Error("unable to connect to db");
  }
};
