const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Разрешаем CORS для всех доменов
app.use(cors());

// Используем middleware для обработки JSON-запросов
app.use(express.json());

// Путь к файлу, куда будут сохраняться данные
const filePath = path.join(__dirname, "data_message.json");

// Маршрут для обработки POST-запросов
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  // Валидация данных
  if (!name || !email || !message) {
    return res.status(400).json({ status: "error", message: "Invalid input" });
  }

  // Читаем существующий файл или создаем новый массив данных
  let messages = [];
  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  // Добавляем новое сообщение
  messages.push({
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  });

  // Записываем данные в JSON-файл
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  // Отправляем ответ клиенту
  res.json({ status: "success", message: "Message saved successfully" });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
