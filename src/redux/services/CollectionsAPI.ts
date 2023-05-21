import { ICollectionItems } from '@/interface/util_interface';
import { SupportedNetWork } from '@/util/chain';
import { AUTH_JSON_HEADERS, UN_AUTH_JSON_HEADERS, header } from '@/util/headers';
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
  collections: ICollectionItems[];
  created_at?: string;
  updated_at?: string;
}

export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}`,
    prepareHeaders(headers, api) {
      const chainNetwork: SupportedNetWork | null = localStorage.getItem('chain_network') as SupportedNetWork;
      header(chainNetwork ? chainNetwork : SupportedNetWork.ETHEREUM, headers);
    }
    // headers: UN_AUTH_JSON_HEADERS
  }),
  tagTypes: ['Collections'],
  endpoints: builder => ({
    getCollections: builder.query<Collections[], void>({
      query: () => '/collections/active',
      transformResponse: (response: { data: Collections[] }) => response.data,
      providesTags: (result, error, arg) => ['Collections']
    }),
    getCollection: builder.query<Collections[], string>({
      query: id => `/collections/${id}`,
      transformResponse: (response: { data: Collections[] }): Collections[] => response.data,
      providesTags: (result, error, arg) => ['Collections']
    })
  })
});

export const { useGetCollectionsQuery, useGetCollectionQuery } = collectionsApi;

// prepareHeaders: (headers, { getState }) => {
//   const clientNetwork: NETWORKS | null = localStorage.getItem('clientNetwork') as NETWORKS;
//   if (clientNetwork) {
//     AUTH_JSON_HEADERS(clientNetwork, headers);
//   }
//   return headers;
// },
