const { User } = require('../models');
const { Op, Sequelize } = require('sequelize');

const updateBalance = async (userId, amount) => {
    try {
        const [updated] = await User.update(
            { balance: Sequelize.literal(`balance + ${amount}`) },
            { where: { id: userId, balance: { [Op.gte]: -amount } } }
        );

        if (!updated) {
            throw new Error('Недостаточно средств');
        }

        const user = await User.findOne({
            attributes: ['balance'],
            where: { id: userId },
            raw: true
        });

        return { userId, newBalance: user.balance };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { updateBalance };
