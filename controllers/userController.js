const { updateBalance } = require('../services/userService');

const updateUserBalance = async (req, res) => {
    try {
        const { userId, amount } = req.body;

        if (typeof userId !== 'number' || typeof amount !== 'number') {
            return res.status(400).json({ error: 'Неверные входные данные' });
        }

        const result = await updateBalance(userId, amount);
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { updateUserBalance };
