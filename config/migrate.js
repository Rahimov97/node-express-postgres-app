const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = require('./database');

const umzug = new Umzug({
    migrations: { glob: 'migrations/*.js' },
    context: sequelize,
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

(async () => {
    await umzug.up();
    console.log('Миграция успешна.');
})();
