'use client';

import { useCreateUserMutation } from '@/redux/services/userApi';
import { CHAIN_INFO, SupportedChainId, SupportedNetWork } from '@/util/chain';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface IAccount {
  address: string;
  chainId: SupportedChainId;
  chainNetwork: string;
  isAuthenticated: boolean;
}

export interface ContractState {
  account: IAccount;
}

const initialState: ContractState = {
  account: {
    address: '',
    chainId: SupportedChainId.POLYGONTESTNET,
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
      const chainNetwork = CHAIN_INFO[Number(chainId)].network;

      setAccount({
        address: accounts[0],
        chainId: Number(chainId),
        chainNetwork,
        isAuthenticated: true
      });

      if (error) return console.log(error);

      await createUser({ address: accounts[0] });

      if (!isLoading) return;

      if (data) {
        toast.success('User Successfully registered');
        return;
      }

      localStorage.setItem('chain_network', chainNetwork);
    } catch (error: any) {
      if (error.code === 4001) {
        toast.error('Please connect your wallet');
        return;
      }
    }
  }, [createUser, data, error, isLoading]);

  const disconnect = async () => {
    setAccount(initialState.account);

    localStorage.removeItem('chain_network');
  };

  const _updateWalletConnection = useCallback(async () => {
    try {
      const { ethereum } = window;
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      if (accounts.length === 0) {
        disconnect();
        return;
      }

      const chainId = await ethereum.request({ method: 'eth_chainId' });
      const chainNetwork = CHAIN_INFO[Number(chainId)].network;

      setAccount({
        address: accounts[0],
        chainNetwork,
        chainId: Number(chainId),
        isAuthenticated: true
      });
      localStorage.setItem('chain_network', chainNetwork);
    } catch (error) {}
  }, []);

  useEffect(() => {
    _updateWalletConnection();
  }, [_updateWalletConnection]);

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      setAccount({ ...account, address: accounts[0] });
    });

    window.ethereum.on('networkChanged', (network: string) => {
      setAccount({ ...account, chainId: Number(network), chainNetwork: CHAIN_INFO[Number(network)].network });
    });

    window.ethereum.on('disconnect', disconnect);

    return () => {
      window.ethereum.removeAllListeners();
    };
  }, [account]);

  return <ContractContext.Provider value={{ account, connectWallet, disconnect }}>{children}</ContractContext.Provider>;
}

export const useContractContext = () => useContext(ContractContext);

// const confirmWalletConnection = useCallback(async () => {
//   try {
//     const { ethereum } = window;

//     if (!ethereum) {
//       toast.error('No ethereum wallet found, Please install metamask');
//       return;
//     }

//     const accounts: any = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[];
//     const chainId = await ethereum.request({ method: 'eth_chainId' });

//     if (accounts?.length > 0) {
//       const chainNetwork = CHAIN_INFO[Number(chainId)].network;

//       console.log(chainNetwork);

//       setAccount({
//         address: accounts[0],
//         chainNetwork,
//         chainId,
//         isAuthenticated: true
//       });
//       localStorage.setItem('chain_network', chainNetwork);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }, []);
