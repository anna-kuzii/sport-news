const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
require('dotenv').config();

exports.connect = () => {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).then(
    () => (console.log(`Database is connected ${process.env.DATABASE_URL}`)),
    (err) => (console.log(`Can not connect to the database${err}`)),
  );
};
