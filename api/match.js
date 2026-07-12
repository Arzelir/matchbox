import db from "./db.js";

export default async function handler(req, res) {

    const { eventId } = req.query;

    try {

        const result = await db.execute({
            sql: `
                SELECT 
                    User.user_id,
                    User.name,
                    User.picture_path,
                    User.description
                FROM User
                JOIN Registration
                    ON User.user_id = Registration.user_id
                WHERE Registration.event_id = ?
                AND Registration.has_team = 0
            `,
            args: [eventId]
        });

        res.status(200).json(result.rows);

    } catch(error) {

        res.status(500).json({
            error: error.message
        });

    }
}