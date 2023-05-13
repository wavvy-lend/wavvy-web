'use client';

import { useCreateUserMutation } from '@/redux/services/userApi';
import { CHAIN_INFO, SupportedNetWork } from '@/util/chain';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
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

  const [createUser, { isLoading, error, data }] = useCreateUserMutation();

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

      if (error) return console.log(error);

      await createUser({ address: accounts[0] });

      if (!isLoading) return;

      if (data) {
        toast.error('User Successfully registered');
        return;
      }

      localStorage.setItem('chain_network', chainNetwork);
    } catch (error) {
      console.log(error);
    }
  }, [createUser, data, error, isLoading]);

  const disconnect = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error('No ethereum wallet found, Please install metamask');
        return;
      }

      const accounts: any = (await ethereum.request({ method: 'eth_accounts' })) as string[];
      if (accounts?.length > 0) {
        setAccount(initialState.account);
      }
      localStorage.removeItem('chain_network');
    } catch {}
  };

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
  }, [account, confirmWalletConnection]);

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      setAccount({ ...account, address: accounts[0] });
    });

    window.ethereum.on('networkChanged', (network: string) => {
      setAccount({ ...account, chainNetwork: CHAIN_INFO[Number(network)].network });
    });

    window.ethereum.on('disconnect', disconnect);

    return () => {
      window.ethereum.removeAllListeners();
    };
  }, [account]);

  // const contextValue = useMemo(() => {
  //   return { account, connectWallet };
  // }, [account, connectWallet]);

  return <ContractContext.Provider value={{ account, connectWallet, disconnect }}>{children}</ContractContext.Provider>;
}

export const useContractContext = () => useContext(ContractContext);
