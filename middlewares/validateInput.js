module.exports = (req, res, next) => {
    const { userId, amount } = req.body;

    if (!Number.isInteger(userId) || !Number.isFinite(amount)) {
        return res.status(400).json({ error: 'Некорректные входные данные' });
    }

    next();
};
