const express = require('express');
const app = express();
const port = 4000;

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
