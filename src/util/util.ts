import axios from 'axios';

export const WavvyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WAVVY_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin' ": 'http://localhost:3000',
    'Content-Type': 'application/json',
    'CLIENT-NETWORK': 'ethereum'
  }
});

export const fetcher = (url: string) => WavvyApi.get(url).then(res => res.data);
