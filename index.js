const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is live 🚀');
});

app.get('/users', (req, res) => {
  fs.readFile('./fake_users_900.json', 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Failed to read users:', err);
      return res.status(500).json({ error: 'Unable to read user data' });
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
