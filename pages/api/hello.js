const handler = (req, res) => {
    res.status(200).json({ name: "John Doe" });
};

export { handler as default };