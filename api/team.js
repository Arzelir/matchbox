import db from "./db.js";

export default async function handler(req, res) {
    const result = await db.execute("SELECT name, event FROM event");

    res.status(200).json(result.rows);
}