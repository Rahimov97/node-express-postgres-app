const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

sequelize.sync().then(() => {
    console.log('База данных подключена и перенесена');
    app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
}).catch(err => console.error('Ошибка подключения к бд:', err));
