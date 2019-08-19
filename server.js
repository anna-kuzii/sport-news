const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const dbConnect = require('./db/connect');

const register = require('./routes/register');

dbConnect.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


app.use(passport.initialize());
require('./config/passport')(passport);
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
const login = require('./routes/login');
const forgotPassword = require('./routes/forgotPassword');
const logout = require('./routes/logout');


app.use('/register', register);
app.use('/login', login);
app.use('/forgotpassword', forgotPassword);
app.use('/logout', logout);

