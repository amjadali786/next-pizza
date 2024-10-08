/* eslint-disable @typescript-eslint/no-explicit-any */

import PizzaData from "@/models/PizzaData";
import db from "@/utils/db";

export default async function handler(req:any, res: any) {
    if(req.method === 'POST') {
        await db.connect();
        const data = await PizzaData.findById(req.body.item);
        res.status(200).json({ data });
    }
    db.disconnect();
}