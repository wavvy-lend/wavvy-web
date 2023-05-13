export enum SupportedChainId {
  ETHEREUM = 1,
  POLYGONMAINNET = 86,
  POLYGONTESTNET = 13881,
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

export type ChainInfo = { readonly [chainId: number]: L1ChainInfo } & {
  readonly [chainId in SupportedChainId]: L1ChainInfo;
};

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.BSCTESTNET]: {
    network: 'bscTestnet',
    chainId: `0x${Number(97).toString(16)}`,
    rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545/'],
    chainName: 'BSC Testnet',
    nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
    blockExplorerUrls: ['https://testnet.bscscan.com/']
  },
  [SupportedChainId.ETHEREUM]: {
    network: 'ethereum',
    chainId: `0x${Number(1).toString(16)}`,
    rpcUrls: ['https://mainnet-infura.brave.com/'],
    chainName: 'Ethereum Mainnet',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    blockExplorerUrls: ['https://etherscan.io']
  },
  [SupportedChainId.POLYGONMAINNET]: {
    network: 'matic',
    chainId: `0x${Number(89).toString(16)}`,
    rpcUrls: ['https://polygon-rpc.com/'],
    chainName: 'Polygon Mainnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  [SupportedChainId.POLYGONTESTNET]: {
    network: 'polygonMumbai',
    chainId: `0x${Number(13881).toString(16)}`,
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
    chainName: 'Mumbai Testnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  }
};

const chainInfo = {
  BSCTESTNET: {
    network: 'bscTestnet',
    chainId: `0x${Number(97).toString(16)}`,
    rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545/'],
    chainName: 'BSC Testnet',
    nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
    blockExplorerUrls: ['https://testnet.bscscan.com/']
  },
  ETHEREUM: {
    network: 'ethereum',
    chainId: `0x${Number(1).toString(16)}`,
    rpcUrls: ['https://mainnet-infura.brave.com/'],
    chainName: 'Ethereum Mainnet',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    blockExplorerUrls: ['https://etherscan.io']
  },
  POLYGONMAINNET: {
    network: 'matic',
    chainId: `0x${Number(86).toString(16)}`,
    rpcUrls: ['https://polygon-rpc.com/'],
    chainName: 'Polygon Mainnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  Mumbai: {
    network: 'polygonMumbai',
    chainId: `0x${Number(13881).toString(16)}`,
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
    chainName: 'Mumbai Testnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  }
};

// export enum NETWORKS {
//   ETHEREUM = 'ethereum',
//   MATIC = 'matic',
//   POLYGONMUMBAI = 'polygonMumbai',
//   BSCTESTNET = 'bscTestnet'
// }

// export enum SupportedNetWork {
//     ETHEREUM = 'ethereum',
//     POLYGONMAINNET = 'matic',
//     POLYGONTESTNET = 'polygonMumbai',
//     BSCTESTNET = 'bscTestnet'
//   }
