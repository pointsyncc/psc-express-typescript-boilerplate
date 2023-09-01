import { SERVER_PORT, STRIPE_WEBHOOK_SECRET } from './utils/constants.js';
import {
  StripeChargeRefundedResponse,
  StripePaymentIntentSucceededResponse,
} from './types/stripe.types.js';

import { checkENV } from './env.server.js';
import express from 'express';
import { getItemByCode } from './services/minimax.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import statusMonitor from 'express-status-monitor';
import { stripe } from './services/stripe.js';

checkENV();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
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

app.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
  const signature = request.headers['stripe-signature'] as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, signature, STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object as StripePaymentIntentSucceededResponse;
      console.log(JSON.stringify(paymentIntentSucceeded.amount));
      const Timestamp = new Date().toISOString();

      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    case 'charge.refunded':
      const chargeRefunded = event.data.object as StripeChargeRefundedResponse;
      console.log(JSON.stringify(chargeRefunded.amount_refunded));
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(SERVER_PORT, async () => {
  /*   const res = await getItemByCode("RS3VUX");
  console.log(res.Price); */
  console.log(
    `Server listening on port ${SERVER_PORT}, visit http://localhost:${SERVER_PORT}, press Ctrl+C to stop.`,
  );
});
