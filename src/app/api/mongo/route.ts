import { NextApiRequest, NextApiResponse } from "next";

import { connectMongo } from "@/app/lib/mongoose";
import UserModel from "../../lib/models/user.model";

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    connectMongo();
    const users = UserModel;

    const allUsers = await users.find({});

    res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
