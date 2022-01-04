import { compare } from "../../../lib/crypto";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { body } = req;

    if (!body.username || !body.password) {
        return res.status(400).json({ message: "Bad Request" });
    }

    const username = body.username.trim().toLowerCase();

    const user = await prisma.user.findUnique(
        { where: { username } }
    );

    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const validCredentials = compare(body.password, user.password);

    if (!validCredentials) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = jwt.sign({ "id": user.id }, "secret");

    return res.status(200).json({ token });
};

export { handler as default };