const { updateBalance } = require('../services/userService');
const errorHandler = require('../utils/errorHandler');

const updateUserBalance = async (req, res) => {
    try {
        const { userId, amount } = req.body;
        const result = await updateBalance(userId, amount);
        return res.json(result);
    } catch (error) {
        return errorHandler(res, error.message);
    }
};

module.exports = { updateUserBalance };
