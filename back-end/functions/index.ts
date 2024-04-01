import functions from 'firebase-functions';
const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello from Firebase!');
});

exports.api = functions.https.onRequest(app);