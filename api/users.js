import db from "./db.js";

export default async function handler(req, res) {
    const { type, id, email } = req.query;

    let result;

    switch (type) {
        case "all":
            result = await db.execute(`
                SELECT name, picture_path, email, description
                FROM User
            `);
            break;

        case "id":
            result = await db.execute({
                sql: `
                    SELECT name, picture_path, email, description
                    FROM User
                    WHERE user_id = ?
                `,
                args: [id]
            });
            break;

        case "email":
            result = await db.execute({
                sql: `
                    SELECT name, picture_path, email, description
                    FROM User
                    WHERE email = ?
                `,
                args: [email]
            });
            break;

        default:
            return res.status(400).json({
                error: "Invalid query type"
            });
    }

    res.status(200).json(result.rows);
}