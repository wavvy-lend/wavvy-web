import { NETWORKS } from '@/interface/util_interface';
import { SupportedNetWork } from './chain';

export const AUTH_JSON_HEADERS = (clientNetwork: NETWORKS, headers: Headers) =>
  headers.set('CLIENT-NETWORK', `${clientNetwork}`);

export const UN_AUTH_JSON_HEADERS = {
  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Content-Type': 'application/json',
  'CLIENT-NETWORK': 'ethereum'
};

export const header = (chainNetwork: SupportedNetWork, headers: Headers) => {
  return headers.set('CLIENT-NETWORK', `${chainNetwork}`);
};
