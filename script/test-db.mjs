import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const addwork = await db.work.create({
  data: {
    material: "Öl und Acryl auf Leinwand",
    size: "30x30cm",
    name: "Blätterschatten2",
    addedYear: 2022,
    img: "s",
  },
});
