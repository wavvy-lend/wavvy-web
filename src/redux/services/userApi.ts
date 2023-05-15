import { SupportedNetWork } from '@/util/chain';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IUser {
  address: string;
}

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
  status: string;
  created_at: Date;
  updated_at: Date;
  volume: number;
}

export interface IUserState {
  user: IUser;
  pools: IPool[];
}

const header = (chainNetwork: SupportedNetWork, headers: Headers) => {
  return {
    ...headers,
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    'CLIENT-NETWORK': chainNetwork ? chainNetwork : SupportedNetWork.POLYGONTESTNET
  };
};

// Define a service using a base URL and expected endpoints
export const userAPi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}`,
    prepareHeaders(headers, api) {
      const chainNetwork: SupportedNetWork | null = localStorage.getItem('chain_network') as SupportedNetWork;
      header(chainNetwork, headers);
    }
  }),
  tagTypes: ['Pools'],
  endpoints: builder => ({
    createUser: builder.mutation<IUser, any>({
      query: ({ address }) => ({
        url: `/user/${address}`,
        method: 'POST'
      })
    }),
    getUserPools: builder.query<IPool[], any>({
      query: data => `/user/${data}`,
      transformResponse: (response: { data: IPool[] }) => response.data,
      providesTags: ['Pools']
    })
  })
});

export const { useCreateUserMutation, useGetUserPoolsQuery } = userAPi;
