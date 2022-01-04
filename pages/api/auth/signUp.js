import { hash } from "../../../lib/crypto";
import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
    // !TODO: properly validate data
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { body } = req;

    if (!body.username || !body.email || !body.password) {
        return res.status(400).json({ message: "Bad Request" });
    }

    const username = body.username.trim().toLowerCase();
    const email = body.email.trim().toLowerCase();
    const password = hash(body.password);

    try {
        await prisma.user.create({
            data: { username, email, password }
        });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(201).json({ message: "Created" });
};

export { handler as default };