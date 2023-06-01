export enum SupportedChainId {
  ETHEREUM = 1,
  POLYGONMAINNET = 137,
  POLYGONTESTNET = 80001,
  BSCTESTNET = 97
}

export enum SupportedNetWork {
  ETHEREUM = 'ethereum',
  POLYGONMAINNET = 'matic',
  POLYGONTESTNET = 'polygonMumbai',
  BSCTESTNET = 'bscTestnet'
}

export interface L1ChainInfo {
  readonly network: string;
  readonly icon: string;
  readonly chainId: string;
  readonly chainName: string;
  readonly rpcUrls?: string[];
  readonly blockExplorerUrls: string[];
  readonly nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

export type ChainInfo = { readonly [chainId: number | string]: L1ChainInfo } & {
  readonly [chainId in SupportedChainId]: L1ChainInfo;
};

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.BSCTESTNET]: {
    network: 'bscTestnet',
    icon: '/assets/icons/bnb.svg',
    chainId: `0x${Number(97).toString(16)}`,
    rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545/'],
    chainName: 'BSC Testnet',
    nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
    blockExplorerUrls: ['https://testnet.bscscan.com/']
  },
  [SupportedChainId.ETHEREUM]: {
    network: 'ethereum',
    icon: '/assets/icons/eth.svg',
    chainId: `0x${Number(1).toString(16)}`,
    rpcUrls: ['https://mainnet-infura.brave.com/'],
    chainName: 'Ethereum Mainnet',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    blockExplorerUrls: ['https://etherscan.io']
  },
  [SupportedChainId.POLYGONMAINNET]: {
    network: 'matic',
    icon: '/assets/icons/matic.svg',
    chainId: `0x${Number(89).toString(16)}`,
    rpcUrls: ['https://polygon-rpc.com/'],
    chainName: 'Polygon Mainnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  [SupportedChainId.POLYGONTESTNET]: {
    network: 'polygonMumbai',
    icon: '/assets/icons/matic.svg',
    chainId: `0x${Number(13881).toString(16)}`,
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
    chainName: 'Mumbai Testnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  }
};
