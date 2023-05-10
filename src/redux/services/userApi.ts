import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export enum NETWORKS {
  ETHEREUM = 'ethereum'
}

export enum STATUS {
  ACTIVE = 'active'
}
export interface Collections {
  id: 1;
  unique_id: string;
  address: string;
  network: string;
  name: string;
  description: string;
  avatar: string;
  owner: string;
  no_of_items: string;
  total_volume: string;
  floor_price: string;
  website: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

export interface CollectionResponse {
  data: Collections[];
}

export interface CollectionsPayload {
  address: string;
  network: NETWORKS;
}

export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wavvy-server.onrender.com',
    headers: {
      "Access-Control-Allow-Origin": 'http://localhost:3000',
      'Content-Type': 'application/json',
      'CLIENT-NETWORK': 'ethereum'
    }
  }),
  tagTypes: ['Collections'],
  endpoints: builder => ({
    getCollections: builder.query<CollectionResponse, void>({
      query:()=> '/collections/active',
      providesTags: (result, error, arg) => ['Collections']
    })
  })
});

export const { useGetCollectionsQuery } = collectionsApi;
