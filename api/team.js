import db from "./db.js";

export default async function handler(req, res) {
    const result = await db.execute("SELECT Team.team_id, Team.name, Event.name AS event FROM Team JOIN Event ON Team.event_id = Event.event_id");

    res.status(200).json(result.rows);
}