import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from '../infra/routes';
import { port } from './config';

const app = express();

app.use(bodyParser.json());
app.use(cors());

Object.keys(routes).forEach(key => {
  app.use(`${key}`, routes[key]);
});

app.get('/', (req, res) => {
  res.send('backend-signaturit is running...');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use((err, req, res, next) => {
  const { httpCode = 500, message = '' } = err;

  res.status(httpCode).json({ error: message || err });

  next();
});

const start = async () => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Starting API Rest');
  });
};

export { start };
