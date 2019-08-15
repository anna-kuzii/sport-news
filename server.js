const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).then(
  () => (console.log('Database is connected')),
  (err) => (console.log(`Can not connect to the database${err}`)),
);

app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
