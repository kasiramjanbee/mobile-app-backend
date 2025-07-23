const fs = require('fs');
const path = require('path');

app.get('/users', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'users.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(data);
    res.json(users);
  } catch (error) {
    console.error('Error reading user data:', error);
    res.status(500).json({ error: 'Unable to read user data' });
  }
});
