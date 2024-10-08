/* eslint-disable @typescript-eslint/no-explicit-any */

import Orders from "@/models/Orders";
import db from "@/utils/db";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    await db.connect();
    try {
      const data = await Orders.findOne({ email: req.body.email });
      res.json({ order_data: data });
    } catch (error: any) {
      res.send("Server error: " + error.message);
    }
    await db.disconnect();
  }
}