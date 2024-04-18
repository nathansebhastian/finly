const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

mongoose.connect(MONGODB_URI, {
  dbName: 'finly-db',
  bufferCommands: false,
});

console.log('Connected to MongoDB');
