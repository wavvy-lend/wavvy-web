import { Collections, ICollectionItems, IGetCollectionItemParams } from '@/interface/util_interface';
import { SupportedNetWork } from '@/util/chain';
import { header } from '@/util/headers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_WAVVY_BASE_URL}`,
    prepareHeaders(headers, api) {
      const chainNetwork: SupportedNetWork | null = localStorage.getItem('chain_network') as SupportedNetWork;
      header(chainNetwork ? chainNetwork : SupportedNetWork.ETHEREUM, headers);
    }
    // headers: UN_AUTH_JSON_HEADERS
  }),
  tagTypes: ['Collections', 'items'],
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
    }),
    getCollectionItem: builder.query<ICollectionItems[], IGetCollectionItemParams>({
      query: ({ collectionId, tokenId }) => `tokens/get/${collectionId}/${encodeURIComponent(tokenId)}`,
      transformResponse: (response: {data: ICollectionItems} ): ICollectionItems[] => [response.data],
      providesTags: (result, error, arg) => [{ type: 'items', arg }],
    })
  })
});

export const { useGetCollectionsQuery, useGetCollectionQuery, useGetCollectionItemQuery } = collectionsApi;
