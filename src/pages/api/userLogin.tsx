/* eslint-disable @typescript-eslint/no-explicit-any */

import Users from "@/models/Users";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// const jwtSecret = process.env.JWT_SECRET;
const jwtSecret = '$%ADDFSAFDSFAFA?.'
export default async function handler(req: any, res: any) {
  let success = false;

  if (req.method === "POST") {
    await db.connect();
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Try logging in with correct email" });
      }

      const pwdCompare = await bcrypt.compare(password, user.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ success, error: "Try logging in with correct password" });
      }

      const data = {
        user: {
          id: user["_id"],
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      const isAdmin = await user.isAdmin;
      success = true;
      res.json({ success: success, authToken: authToken, isAdmin: isAdmin });
    } catch (error: any) {
      console.log(error.message);
      res.send("Server Error");
    }
  }
}