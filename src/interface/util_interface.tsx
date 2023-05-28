import { ReactNode } from 'react';


export enum NETWORKS {
  ETHEREUM = 'ethereum',
  MATIC = 'matic',
  POLYGONMUMBAI = 'polygonMumbai',
  BSCTESTNET = 'bscTestnet'
}
export enum STATUS {
  ACTIVE = 'active'
}

export interface ImageProps {
  nftLoan: string;
}


export interface IGetCollectionItemParams {
  collectionId: string;
  tokenId: string;
}

export interface IParentModal {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export interface IDetailedList {
  info: string;
  price: string;
}

export interface ICollections {
  collectionId: string;
  uniqueId: string;
  name: string;
  description?: string;
  image: string;
  creator: string;
  floor_price: string;
  status: string;
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

export interface ICollectionItems {
  tokenId: string;
  tokenAvatar: string;
  floorPrice: string | null;
  floorPriceCurrency: string | null;
  saleStatus: string;
  orderId: string | null;
}

export interface INFTCard extends ICollectionItems {
  itemsNumber: string;
  network: string;
}
