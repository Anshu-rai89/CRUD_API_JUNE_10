require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri).then(()=> console.log("DB connected ")).catch(error=> console.log("Error",error));

const db = mongoose.connection;

module.exports = db;