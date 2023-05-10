import axios from 'axios';
import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

export const WavvyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WAVVY_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin' ": 'http://localhost:3000',
    'Content-Type': 'application/json',
    'CLIENT-NETWORK': 'ethereum'
  }
});

// fetch data from server
export const fetcher = (url: string) => WavvyApi.get(url).then(res => res.data);

export const getCookieItem = (key: string) => {
  'use server';
  return cookies().get(key);
};

export const setCookieItem = (key: string, value: string) => {
  'use server';

  return Cookies.set(key, value);
};
