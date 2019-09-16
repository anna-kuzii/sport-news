const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
require('dotenv').config();

const CONNECTION_URI = process.env.MONGODB_URI || process.env.DATABASE_URL;

exports.connect = () => {
  mongoose.connect(CONNECTION_URI, { useNewUrlParser: true }).then(
    () => (console.log(`Database is connected ${process.env.DATABASE_URL}`)),
    (err) => (console.log(`Can not connect to the database${err}`)),
  );
};
