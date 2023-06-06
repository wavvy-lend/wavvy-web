'use client';

import { useRouter } from 'next/navigation';
import { useCreateUserMutation } from '@/redux/services/userApi';
import { CHAIN_INFO, SupportedChainId, SupportedNetWork } from '@/util/chain';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { chain } from 'lodash';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface IAccount {
  address: string;
  chainId: SupportedChainId | null;
  chainNetwork: string;
  isAuthenticated: boolean;
  isNetwork: boolean;
}

export interface ContractState {
  account: IAccount;
}

const initialState: ContractState = {
  account: {
    address: '',
    chainId: SupportedChainId.POLYGONTESTNET,
    chainNetwork: SupportedNetWork.POLYGONTESTNET,
    isAuthenticated: false,
    isNetwork: false
  }
};

const ContractContext = createContext<any | null>(initialState);

export interface ContractProps extends React.PropsWithChildren { }

export default function ContractProvider({ children }: ContractProps) {
  const router = useRouter();
  const [account, setAccount] = useState<IAccount>(initialState.account);
  const [createUser, { isLoading, error, data }] = useCreateUserMutation();

  /**
   * Connect user wallet and sign up user
   */
  const connectWallet = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error('No ethereum wallet found, Please install metamask');
        return;
      }

      const accounts: any = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[];
      const chainId = await ethereum.request({ method: 'eth_chainId' });

      // const chainNetwork = CHAIN_INFO[Number(chainId)].network;
      const chainNetwork = CHAIN_INFO[Number(chainId)];

      if (chainNetwork !== undefined) {
        setAccount({
          address: accounts[0],
          chainId: Number(chainId),
          chainNetwork: chainNetwork.network,
          isAuthenticated: true,
          isNetwork: true
        });
        localStorage.setItem('chain_network', chainNetwork.network);
      } else {
        setAccount({
          ...initialState.account,
          address: accounts[0],
          chainId: Number(chainId),
          isAuthenticated: true,
          isNetwork: false
        });
      }

      if (error) return console.log(error);

      let result = await createUser({ address: accounts[0] });
      
      // @ts-ignore
      localStorage.setItem('user_id', result.error.data);

      if (!isLoading) return;


      if (data) {
        // console.log({ data })
        toast.success('User Successfully registered');
        return;
      }
    } catch (error: any) {
      if (error.code === 4001) {
        toast.error('Please connect your wallet');
        return;
      }
    }
  }, [createUser, data, error, isLoading]);

  // Disconnect wallet
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
      // const chainNetwork = CHAIN_INFO[Number(chainId)].network;

      const chainNetwork = CHAIN_INFO[Number(chainId)];

      if (chainNetwork !== undefined) {
        setAccount({
          address: accounts[0],
          chainId: Number(chainId),
          chainNetwork: chainNetwork.network,
          isAuthenticated: true,
          isNetwork: true
        });
        localStorage.setItem('chain_network', chainNetwork.network);
      } else {
        setAccount({
          ...initialState.account,
          address: accounts[0],
          chainId: Number(chainId),
          isAuthenticated: true,
          isNetwork: false
        });
      }
    } catch (error) { }
  }, []);

  useEffect(() => {
    _updateWalletConnection();
    router.refresh();
  }, [_updateWalletConnection, router]);

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;

    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      setAccount({ ...account, address: accounts[0] });
    });

    window.ethereum.on('networkChanged', (network: string) => {
      const chainNetwork = CHAIN_INFO[Number(network)];
      if (chainNetwork !== undefined) {
        console.log({ chainNetwork: chainNetwork.network })
        setAccount({ ...account, chainId: Number(network), chainNetwork: chainNetwork.network });
      }
      window.location.reload();

    });

    window.ethereum.on('disconnect', disconnect);


    return () => {
      window.ethereum.removeAllListeners();
    };
  }, [account, router]);

  const contextValue = useMemo(() => {
    return { account, connectWallet, disconnect };
  }, [account, connectWallet, disconnect]);

  return <ContractContext.Provider value={contextValue}>{children}</ContractContext.Provider>;
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
