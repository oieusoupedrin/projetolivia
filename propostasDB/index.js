const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/creditconsult');

mongoose.Promise = global.Promise


module.exports = mongoose
const db = mongoose.connection;