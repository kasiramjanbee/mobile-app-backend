const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is live 🚀');
});

// ✅ Serve users from file
app.get('/users', (req, res) => {
  fs.readFile('./fake_users_900.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users:', err);
      return res.status(500).json({ error: 'Failed to load users' });
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
