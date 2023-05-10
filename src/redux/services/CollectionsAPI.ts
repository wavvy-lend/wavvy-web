import { AUTH_JSON_HEADERS, UN_AUTH_JSON_HEADERS } from '@/util/headers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { headers } from 'next/dist/client/components/headers';

export enum NETWORKS {
  ETHEREUM = 'ethereum',
  MATIC = 'matic',
  POLYGONMUMBAI = 'polygonMumbai',
  BSCTESTNET = 'bscTestnet'
}

export enum STATUS {
  ACTIVE = 'active'
}
export interface Collections {
  id: string;
  unique_id: string;
  address: string;
  network: NETWORKS;
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

export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wavvy-server.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      const clientNetwork: NETWORKS | null = localStorage.getItem('clientNetwork') as NETWORKS;
      if (clientNetwork) {
        AUTH_JSON_HEADERS(clientNetwork, headers);
      }
      return headers;
    },
    headers: UN_AUTH_JSON_HEADERS
  }),
  tagTypes: ['Collections'],
  endpoints: builder => ({
    getCollections: builder.query<Collections[], void>({
      query: () => '/collections/active',
      transformResponse: (response: { data: Collections[] }) => response.data,
      providesTags: (result, error, arg) => ['Collections']
    })
  })
});

export const { useGetCollectionsQuery } = collectionsApi;
