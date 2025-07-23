const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(' Backend is running!');
});

// 👉 New POST route to receive data
app.post('/api/contact', (req, res) => {
  const { name, email } = req.body;

  console.log('📨 Received:', { name, email });

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email required' });
  }

  res.status(200).json({ message: 'Data received successfully!' });
});

app.listen(PORT, () => {
  console.log(` Server started on http://localhost:${PORT}`);
});
