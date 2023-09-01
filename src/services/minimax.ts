import {
  MinimaxAddIssuedInvoiceRequest,
  MinimaxApiGetTokenResponse,
  MinimaxApiInit,
  MinimaxResponseGetItemByCode,
} from '../types/minimax.types.js';

import { MinimaxInitOptions } from '../utils/constants.js';
import axios from 'axios';
import { generateMinimaxRequestURL } from '../utils/generateMinimaxRequestURL.js';
import { log } from '../utils/logging.js';

function getToken(url: MinimaxApiInit['apiTokenEndpoint'], params: MinimaxApiInit['params']) {
  const config = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  };
  return axios
    .post(url, params, config)
    .then((response: MinimaxApiGetTokenResponse) => {
      return response.data.access_token;
    })
    .catch((error: any) => {
      return error;
    });
}

async function minimaxAPI<T>(
  method: 'POST' | 'PUT' | 'GET',
  url: MinimaxApiInit['apiBaseUrl'],
  data?: MinimaxAddIssuedInvoiceRequest | any,
): Promise<T> {
  const access_token = (await getToken(
    MinimaxInitOptions.apiTokenEndpoint,
    MinimaxInitOptions.params,
  )) as string;

  const config = {
    headers: {
      'Content-type': 'application/json',
      'Content-Length': data ? JSON.stringify(data).length : 0,
      Authorization: `Bearer ${access_token}`,
    },
  };
  switch (method) {
    case 'POST' && data:
      return axios
        .post(url, data, config)
        .then((response) => {
          /* console.log(response); */
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    case 'PUT' && data:
      return axios
        .put(url, data, config)
        .then((response) => {
          /*  console.log(response); */
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    default:
      return axios
        .get(url, config)
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
  }
}

/* export function AddIssuedInvoice(
  data: MinimaxAddIssuedInvoiceRequest,
  access_token: string,
): Promise<any> {
  return callMinimaxAPI<any>('POST', MinimaxInitOptions.apiBaseUrl, data, access_token);
} */

interface GetIssuedInvoicesResponse {
  data: {
    Rows: any[];
  };
}

export async function getItemByCode(item_code: string): Promise<MinimaxResponseGetItemByCode> {
  const url = generateMinimaxRequestURL('items', item_code);
  const res = await minimaxAPI<any>('GET', url);
  return res;
}
