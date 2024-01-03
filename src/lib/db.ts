import { PrismaClient } from "@prisma/client";
// export const db = new PrismaClient();
//   {
//   datasourceUrl:
//     "mongodb+srv://wanghailin130:0QR5Zxw5e39DMjRO@cluster0.cn0pflz.mongodb.net/Site?retryWrites=true&w=majority",
// }
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
