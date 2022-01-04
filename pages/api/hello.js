import jwt from "jsonwebtoken";

const handler = (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        res.status(401).json({ message: "Not Authorized" });
    }

    const isValid = jwt.verify(token, "secret");

    if (!isValid) {
        res.status(401).json({ message: "Not Authorized" });
    }

    res.status(200).json({ name: "John Doe" });
};

export { handler as default };