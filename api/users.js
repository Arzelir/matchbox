import db from "./db.js";

export default async function handler(req, res) {
    const result = await db.execute("SELECT * FROM user");

    res.status(200).json(result.rows);
}