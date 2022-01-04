import { compare } from "../../../lib/crypto";
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";
import cookie from "cookie";

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

    res.setHeader("Set-Cookie", cookie.serialize("token", token, { httpOnly: true, path: "/" }));

    return res.status(200).json({ "message": "OK" });
};

export { handler as default };