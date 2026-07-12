import db from "./db.js";

export default async function handler(req, res) {
    const result = await db.execute("SELECT User.user_id, User.name, User.picture_path, User.description FROM User JOIN Registration ON User.user_id = Registration.user_id WHERE Registration.event_id = ? AND Registration.has_team = 0;");

    res.status(200).json(result.rows);
}