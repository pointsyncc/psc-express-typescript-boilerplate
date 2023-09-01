import { STRIPE_SECRET_KEY } from '../utils/constants.js';
import Stripe from 'stripe';

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});
