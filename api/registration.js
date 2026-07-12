import db from "./db.js";

export default async function handler(req, res) {

    const { userId, eventId } = req.body;

    try {

        await db.execute({
            sql: `
                UPDATE Registration
                SET has_team = 1
                WHERE user_id = ?
                AND event_id = ?
            `,
            args: [userId, eventId]
        });

        res.status(200).json({
            message: "User added to team"
        });

    } catch(error) {

        res.status(500).json({
            error: error.message
        });

    }
}