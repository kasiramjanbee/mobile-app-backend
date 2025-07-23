const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.get('/users', (req, res) => {
  const users = Array.from({ length: 900 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
  }));
  res.json(users);
});

app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
