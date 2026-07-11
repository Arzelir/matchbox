import db from "./db.js";

export default async function handler(req, res) {

    if (req.method === "GET") {

        const { id, email } = req.query;

        let result;

        if (id) {
            result = await db.execute({
                sql: `
                    SELECT *
                    FROM User
                    WHERE user_id = ?
                `,
                args: [id]
            });

        } else if (email) {
            result = await db.execute({
                sql: `
                    SELECT *
                    FROM User
                    WHERE email = ?
                `,
                args: [email]
            });

        } else {
            result = await db.execute(`
                SELECT *
                FROM User
            `);
        }

        return res.status(200).json(result.rows);
    }
}