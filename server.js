const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Раздаем статические файлы
app.use(express.static('.'));

// Обработка админ-панели
app.get('/admin12345', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Обработка корневого пути
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
    console.log(`Админ-панель доступна по адресу: http://localhost:${PORT}/admin12345`);
});
