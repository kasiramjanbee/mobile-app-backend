const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is live and working! 🚀');
});

// your other API routes like:
// app.use('/api', require('./routes/yourRoutes'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
