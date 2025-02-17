module.exports = (res, errorMessage, statusCode = 400) => {
    console.error(`Ошибка: ${errorMessage}`);
    return res.status(statusCode).json({ error: errorMessage });
};
