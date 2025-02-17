const { User } = require('../models');
const { Op, Sequelize } = require('sequelize');

const updateBalance = async (userId, amount) => {
    const [updated] = await User.update(
        { balance: Sequelize.literal(`balance + ${amount}`) },
        { where: { id: userId, balance: { [Op.gte]: -amount } } }
    );

    if (!updated) {
        throw new Error('Недостаточно средств');
    }

    const [{ balance }] = await User.findAll({
        attributes: ['balance'],
        where: { id: userId },
        raw: true
    });

    return { userId, newBalance: balance };
};

module.exports = { updateBalance };
