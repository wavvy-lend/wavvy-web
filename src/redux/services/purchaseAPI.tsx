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
export const purchaseApi = createApi({
  reducerPath: 'purchaseApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}`,
    prepareHeaders(headers, api) {
      const chainNetwork: SupportedNetWork | null = localStorage.getItem('chain_network') as SupportedNetWork;
      header(chainNetwork ? chainNetwork : SupportedNetWork.POLYGONMAINNET, headers);
    }
  }),

  tagTypes: ['purchase'],

  endpoints: builder => ({
    getLoanTimeLine: builder.query<string[], string>({
      query: id => `/repayment/timeline/${id}`,
      transformResponse: (response: { data: string[] }) => response.data
    })
    // getPuurchaseDetails: builder.query<, void>({
    //   query: id => `purchase/user/projects/${id}`,
    //   transformResponse: (response: { data: [] }) => response.data
    // })
  })
});

export const { useGetLoanTimeLineQuery } = purchaseApi;
