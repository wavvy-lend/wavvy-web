import { MetaMaskInpageProvider } from '@metamask/providers';
import { createSlice } from '@reduxjs/toolkit';
import { BrowserProvider, JsonRpcSigner, ethers } from 'ethers';
import { useCallback, useState } from 'react';
import { connectWallet } from '../../services/asyncThunkAction';
import { RootState } from '../../store';

// declare global {
interface Window {
  ethereum?: any;
}
// }

export enum NETWORKS {
  ETHEREUM = 'ethereum',
  MATIC = 'matic',
  POLYGONMUMBAI = 'polygonMumbai',
  BSCTESTNET = 'bscTestnet'
}

export interface IState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  isSuccess: boolean;
  userWallet: IWalletProvoder | undefined;
}
export interface IWalletProvoder {
  address: string | null;
  chainNetwork?: NETWORKS;
  signer: JsonRpcSigner | null;
  provider: BrowserProvider | null;
  isAuthenticated: 'connected' | 'disconnected';
}

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  userWallet: {
    address: null,
    chainNetwork: NETWORKS.ETHEREUM,
    signer: null,
    provider: null,
    isAuthenticated: 'disconnected'
  }
} as IState;

export const connectWalletSlice = createSlice({
  name: 'connectWallet',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(connectWallet.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(connectWallet.fulfilled, (state, { payload }) => {
        state.userWallet = payload;
      })
      .addCase(connectWallet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
        state.userWallet = undefined;
      });
  }
});

export const connect = (state: RootState) => state.connectWallet;

export default connectWalletSlice.reducer;

// const useWalletProvider = () => {

// const [state, setState] = useState<IwWalletProvider>(initialState);
