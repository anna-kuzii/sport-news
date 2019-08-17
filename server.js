const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const dbConnect = require('./db/connect');

dbConnect.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// TODO: change that part ,please:)
app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 5000;
// TODO: change console.log()
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});


// Route Files
const register = require('./routes/register');

app.use('/register', register);
