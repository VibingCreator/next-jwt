const handler = (req, res) => {
    // !TODO: properly validate data
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { body } = req;

    if (!body.username || !body.email || !body.password) {
        return res.status(400).json({ message: "Bad Request" });
    }

    return res.status(201).json(body);
};

export { handler as default };