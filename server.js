const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const dbConnect = require('./db/connect');

dbConnect.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: true,
}));


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
