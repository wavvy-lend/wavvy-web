import { SupportedNetWork } from '@/util/chain';
import { header } from '@/util/headers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IPool {
  id?: number;
  unique_id: string;
  contract_pool_id: string;
  network: string;
  creator_id: string;
  payment_cycle: string;
  apr: number;
  duration_in_secs: number;
  duration_in_months: number;
  noOfLoans: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  volume: number;
}

// const header = (chainNetwork: SupportedNetWork, headers: Headers) => {
//   return headers.set('CLIENT-NETWORK', `${chainNetwork}`);
// };

// Define a service using a base URL and expected endpoints
export const poolApi = createApi({
  reducerPath: 'poolApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}`,
    prepareHeaders(headers, api) {
      const chainNetwork: SupportedNetWork | null = localStorage.getItem('chain_network') as SupportedNetWork;
      header(chainNetwork ? chainNetwork : SupportedNetWork.POLYGONMAINNET, headers);
    }
  }),

  tagTypes: ['Pools'],

  endpoints: builder => ({
    getPools: builder.query<IPool[], any>({
      query: () => '/pools/active/',
      transformResponse: (response: { data: IPool[] }) => response.data,
      providesTags: (result, error, arg) => ['Pools']
    }),
    getVolume: builder.query<number, string>({
      query: () => '/pools/totalVolume'
    }),
    getLiquidityBorrowed: builder.query<number, string>({
      query: () => '/pools/totalLiquidityBorrowed'
    }),
    getLiquidityAvailable: builder.query<number, string>({
      query: () => '/pools/totalLiquidityAvailable'
    }),

    getLimitPools: builder.query<IPool[], any>({
      query: () => '/pools/active/',
      transformResponse: (response: { data: IPool[] }, meta, arg) => response.data.slice(0, arg),
      providesTags: (result, error, arg) => ['Pools']
    })
  })
});

export const {
  useGetPoolsQuery,
  useGetLimitPoolsQuery,
  useGetVolumeQuery,
  useGetLiquidityAvailableQuery,
  useGetLiquidityBorrowedQuery
} = poolApi;
