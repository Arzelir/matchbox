import db from "./db.js";

export default async function handler(req, res) {
    const result = await db.execute("SELECT name, picture_path, email, description FROM user");

    res.status(200).json(result.rows);
}