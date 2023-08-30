import pino from 'pino';
import pinoHTTP from 'pino-http';

export const logHttp = pinoHTTP();

export const logPath = process.env.LOG_PATH || './logs/app.log';

timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`;

const options = pino.transport({
  targets: [
    {
      level: 'trace',
      target: 'pino/file',
      options: {
        destination: logPath,
      },
    },
    {
      level: 'trace',
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  ],
});

export const log = pino(options);
