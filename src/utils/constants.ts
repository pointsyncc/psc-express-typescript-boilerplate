import { MinimaxApiInit, MinimaxLocalizationType } from '../types/minimax.types';

import dotenv from 'dotenv';

dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT || 3000;

export const STRIPE_API_VERSION = process.env.STRIPE_API_VERSION || '2023-08-16';
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
export const STRIPE_WEBHOOK_SECRET =
  'whsec_779aa4b4a748c7ca9e9b8a15012666369733d64ca51ec11e5f48487041b0e265';

export const MinimaxInitOptions: MinimaxApiInit = {
  params: {
    client_id: process.env.MINIMAX_API_CLIENT_ID,
    client_secret: process.env.MINIMAX_API_CLIENT_SECRET,
    grant_type: 'password',
    username: process.env.MINIMAX_APP_USERNAME,
    password: process.env.MINIMAX_APP_PASSWORD,
    scope: 'minimax.si',
  },
  localization: process.env.MINIMAX_LOCALIZATION_TYPE as MinimaxLocalizationType,
  organisationId: process.env.MINIMAX_ORG_ID ? parseInt(process.env.MINIMAX_ORG_ID) : 23019,
  apiTokenEndpoint: `https://moj.minimax.${process.env.MINIMAX_LOCALIZATION_TYPE.toLowerCase()}/${
    process.env.MINIMAX_LOCALIZATION_TYPE
  }/AUT/oauth20/token`,
  apiBaseUrl: `https://moj.minimax.${process.env.MINIMAX_LOCALIZATION_TYPE.toLowerCase()}/${
    process.env.MINIMAX_LOCALIZATION_TYPE
  }/API/api/orgs/${process.env.MINIMAX_ORG_ID}/`,
};
