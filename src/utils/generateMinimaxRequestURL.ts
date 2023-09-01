import { MinimaxInitOptions } from './constants.js';

type MinimaxRequestMethodType = 'issuedinvoices' | 'customers' | 'items';

export function generateMinimaxRequestURL(
  requestMethod: MinimaxRequestMethodType,
  item_code?: string,
) {
  if (requestMethod === 'items' && item_code === undefined) {
    throw new Error('item_code is required for items request method');
  }
  const url = (MinimaxInitOptions.apiBaseUrl +
    requestMethod +
    (item_code ? `/code(${item_code})` : '')) as string;
  console.log(url);
  return url;
}
