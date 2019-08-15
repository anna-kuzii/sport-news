const express = require('express');

require('dotenv').config();

const app = express();

// TODO: change that part ,please:)
app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
