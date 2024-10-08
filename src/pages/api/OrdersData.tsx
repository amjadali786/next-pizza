/* eslint-disable @typescript-eslint/no-explicit-any */

import Orders from "@/models/Orders";
import db from "@/utils/db";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    await db.connect();
    try {
      if (req.body.email === undefined || req.body.email === null) {
        throw new Error();
      }
      const data = req.body.order_data;
      await data.splice(0, 0, { order_date: req.body.order_date });

      let eId = await Orders.findOne({ email: req.body.email });
      if (eId === null) {
        try {
          await Orders.create({
            email: req.body.email,
            order_data: [data],
          }).then(() => {
            res.json({ success: true });
          });
        } catch (error: any) {
          res.send("Server error: ", error.message);
        }
      } else {
        try {
          await Orders.findOneAndUpdate(
            { email: req.body.email },
            { $push: { order_data: data } }
          ).then(() => {
            res.json({ success: true });
          });
        } catch (error: any) {
          res.status(400).send("Server error: ", error.message);
        }
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }

    await db.disconnect();
    //{order_data:[{Date},{MAr},{Peppy},{}],email: "", order_date:Date() }
  }
}