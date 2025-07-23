app.get('/users', (req, res) => {
  const users = Array.from({ length: 900 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`
  }));
  res.json(users);
});
