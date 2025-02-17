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
    console.log('Database connected and migrated');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('Database connection error:', err));
