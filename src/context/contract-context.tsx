'use client';

import { CHAIN_INFO, SupportedNetWork } from '@/util/chain';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface IAccount {
  address: string;
  chainNetwork: string;
  isAuthenticated: boolean;
}

export interface ContractState {
  account: IAccount;
}

const initialState: ContractState = {
  account: {
    address: '',
    chainNetwork: SupportedNetWork.POLYGONTESTNET,
    isAuthenticated: false
  }
};

const ContractContext = createContext<any | null>(initialState);

export interface ContractProps extends React.PropsWithChildren {}

export default function ContractProvider({ children }: ContractProps) {
  const [account, setAccount] = useState<IAccount>(initialState.account);

  const connectWallet = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error('No ethereum wallet found, Please install metamask');
        return;
      }

      const accounts: any = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[];
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      // console.log(chainId);
      const chainNetwork = CHAIN_INFO[13881].network;

      setAccount({
        address: accounts[0],
        chainNetwork,
        isAuthenticated: true
      });

      localStorage.setItem('chain_network', chainNetwork);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const confirmWalletConnection = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error('No ethereum wallet found, Please install metamask');
        return;
      }

      const accounts: any = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[];

      if (accounts?.length > 0) {
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log(chainId);
        const chainNetwork = CHAIN_INFO[13881].network;
        setAccount({
          address: accounts[0],
          chainNetwork,
          isAuthenticated: true
        });
        localStorage.setItem('chain_network', chainNetwork);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    confirmWalletConnection();
  }, []);

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      setAccount({ ...account, address: accounts[0] });
    });

    window.ethereum.on('networkChanged', (network: string) => {
      setAccount({ ...account, chainNetwork: CHAIN_INFO[Number(network)].network });
    });

    return () => {
      window.ethereum.removeAllListeners();
    };
  }, [account]);

  console.log(account);

  const contextValue = useMemo(() => {
    return { account, connectWallet };
  }, [account, connectWallet]);

  return <ContractContext.Provider value={contextValue}>{children}</ContractContext.Provider>;
}

export const useContractContext = () => useContext(ContractContext);
