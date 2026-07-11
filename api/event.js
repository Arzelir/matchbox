import db from "./db.js";

export default async function handler(req, res) {
    const result = await db.execute("SELECT name, date, location, sport, max_players, description FROM event");

    res.status(200).json(result.rows);
}