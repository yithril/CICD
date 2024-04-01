import * as functions from 'firebase-functions';
import * as express from 'express';

const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello from Firebase!');
});

// Correct export syntax for TypeScript
export const api = functions.https.onRequest(app);