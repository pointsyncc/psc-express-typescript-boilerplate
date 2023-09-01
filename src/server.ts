import { checkENV } from './env.server.js';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import statusMonitor from 'express-status-monitor';

checkENV();

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // store: ... , // Use an external store for more precise rate limiting
});

const app = express();

app.use(
  helmet(),
  statusMonitor({
    path: '/status',
    title: 'Status Monitor',
    spans: [
      {
        interval: 1, // Every second
        retention: 60, // Keep 60 datapoints in memory
      },
      {
        interval: 5, // Every 5 seconds
        retention: 60,
      },
      {
        interval: 15, // Every 15 seconds
        retention: 60,
      },
    ],
    chartVisibility: {
      cpu: true,
      mem: true,
      load: true,
      heap: true,
      responseTime: true,
      rps: true,
      statusCodes: true,
    },
  }),
  limiter,
);

app.get('/', (req, res) => {
  res.send('Hello world! This is a test!');
});

app.listen(SERVER_PORT, () => {
  console.log(
    `Server listening on port ${SERVER_PORT}, visit http://localhost:${SERVER_PORT}, press Ctrl+C to stop.`,
  );
});
