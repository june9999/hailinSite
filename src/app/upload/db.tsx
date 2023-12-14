"use server";

import { MongoClient } from "mongodb";

export default async function handler(req: any, res: any) {
  const URL: string = process.env.MONGODB_URI || "";

  if (req.method === "POST") {
    const { data } = req.body;

    const client = new MongoClient(URL, {});

    try {
      await client.connect();
      const database = client.db("PROJECT 0"); // Choose a name for your database
      const collection = database.collection("Foto"); // Choose a name for your collection
      console.log("connect successfully");
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
