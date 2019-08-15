const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function () {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).then(
    () => (console.log('Database is connected')),
    (err) => (console.log(`Can not connect to the database${err}`)),
  );
};
