import { ReactNode } from 'react';

export interface ImageProps {
  nftLoan: string;
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
  collectionId:string;
  uniqueId:string;
  name: string;
  description?: string;
  image: string;
  creator: string;
  floor_price: string;
  status: string;

}

export interface ICollection {
  collectionId:string;
  uniqueId:string;
  name: string;
  website:string;
  description: string;
  image: string;
  creator: string;
  items:string;
  floor_price: string;
  status: string;
  collections?: ICollectionItems[]
  volume?:string;
}

export interface ICollectionItems {
  tokenId:string;
  tokenAvatar: string;
  floorPrice: string | null;
  floorPriceCurrency: string | null;
  saleStatus: string;
  orderId: string | null
}

export interface INFTCard extends ICollectionItems {
  itemsNumber:string;
  network:string;
}

