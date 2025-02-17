module.exports = {
    up: async ({ context: sequelize }) => {
        await sequelize.getQueryInterface().createTable('users', {
            id: {
                type: 'INTEGER',
                autoIncrement: true,
                primaryKey: true,
            },
            balance: {
                type: 'INTEGER',
                allowNull: false,
                defaultValue: 10000,
            },
        });

        await sequelize.getQueryInterface().bulkInsert('users', [{ balance: 10000 }]);
    },
    down: async ({ context: sequelize }) => {
        await sequelize.getQueryInterface().dropTable('users');
    },
};
