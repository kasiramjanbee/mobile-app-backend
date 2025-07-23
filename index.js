const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/users', (req, res) => {
  const filePath = path.join(__dirname, 'users.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users.json:', err);
      return res.status(500).json({ error: 'Unable to read user data' });
    }
    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (parseErr) {
      console.error('Invalid JSON format:', parseErr);
      res.status(500).json({ error: 'Invalid JSON in users file' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
