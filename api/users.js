import db from "./db.js";

export default async function handler(req, res) {
    const result = await db.execute("SELECT * FROM users");

    res.status(200).json(result.rows);
}