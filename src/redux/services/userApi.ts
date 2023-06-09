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
  noOfLoans: number;
  duration_in_secs: number;
  duration_in_months: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  volume: number;
}

export interface IRecentPurchaseItems {
  borrower: string;
  collectionName: string;
  contract_loan_id: string;
  contract_pool_id: string;
  contract_purchase_id: string;
  created_at: string;
  down_payment: string;
  escrow_address: string;
  id: number;
  network: string;
  principal: string;
  status: string;
  tokenAvatar: string;
  token_address: string;
  token_id: string;
  unique_id: string;
  updated_at: string;
  user_address: string;
}

export interface IUserState {
  user: IUser;
  pools: IPool[];
}

const header = (chainNetwork: SupportedNetWork, headers: Headers) => {
  return headers.set('CLIENT-NETWORK', `${chainNetwork ? chainNetwork : SupportedNetWork.POLYGONMAINNET}`);
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
      query: data => `/pools/user/${data}`,
      transformResponse: (response: { data: IPool[] }) => response.data,
      providesTags: ['Pools']
    }),
    getRecentPurchase: builder.query<IRecentPurchaseItems[], void>({
      query: () => '/purchase/recent',
      transformResponse: (response: { data: IRecentPurchaseItems[] }) => response.data
    }),
    getUserPurchase: builder.query<any, any>({
      query: (userId: string) => `/purchase/user/projects/${userId}`,
      transformResponse: (response: { data: any }) => response.data
    })
  })
});

export const { useCreateUserMutation, useGetUserPoolsQuery, useGetRecentPurchaseQuery, useGetUserPurchaseQuery } =
  userAPi;
