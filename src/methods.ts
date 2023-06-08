import { formatEther, parseEther } from "ethers";

const Web3 = require('web3');
const { BigNumber } = require("@ethersproject/bignumber");

const { abi: wavvyAbi } = require('./app/abi/Wavvy.json');


const WAVVY_MATIC_CONTRACT_ADDRESS = '0x965e4791b1aaF4C0AF66b80367c8744CFbB08C29';
declare global {
    interface Window {
        ethereum?: any;
        web3?: any
    }
}
export async function connectToBrowserProvider() {
    const { ethereum } = window;
    if (ethereum) {
        if (ethereum) {
            window.web3 = new Web3(ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }

        await confirmUserNetwork()

        let address = await getConnectedAddress()
        console.log({ address })
        return address;

    } else {
        console.log("Please install a browser wallet...");
    }
}
export async function loadProvider() {
    const { ethereum } = window;
    if (!ethereum) {
        console.log("Please install a browser wallet...");
        return;
    }
    if (ethereum) {
        window.web3 = new Web3(ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    }
    return window.web3
}
async function confirmUserNetwork() {
    const { ethereum } = window;

    if (!ethereum) {
        console.error("Browser is not Web3 enabled. Install MetaMask!");
        return;
    }
    let userChainId = await ethereum.request({ method: "eth_chainId" });
    console.log("User is connected to chain " + userChainId);

    // String, hex code of the chainId of the  network
    let ChainId = process.env.REACT_APP_CHAIN_ID || '0x38';
    let networkName = process.env.REACT_APP_NETWORK_NAME || "BSC";

    if (userChainId !== ChainId) {
        console.error("You are not connected to the " + networkName + " Network!");
        return;
    } else {
        console.log("Connected to " + networkName + " Network")
    }

}

const connectedNetworkChainId = async () => {
    const { ethereum } = window;
    if (!ethereum) {
        console.error("Browser is not Web3 enabled. Install MetaMask!");
        return;
    }
    let userChainId = await ethereum.request({ method: "eth_chainId" });
    return parseInt(userChainId, 16)
}

export const getConnectedAddress = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
};

/* 
    function purchaseNFT(
        address tokenAddress,
        uint256 tokenId,
        uint256 downPaymentAmount,
        uint256 principal,
        uint256 poolId
    ) 
     */

export const purchaseNFT =
    async (client: any, fromAddress: string, tokenAddress: string, tokenId: number, downPaymentAmount: number, principal: number, poolId: number) => {
        let amount = Web3.utils.toWei(String(downPaymentAmount), "ether");

        const contract = new client.eth.Contract(wavvyAbi, WAVVY_MATIC_CONTRACT_ADDRESS.trim())
        let action = await contract.methods.purchaseNFT(tokenAddress, tokenId, amount, amount, poolId)

        let gas = Math.floor(await action.estimateGas(
            { from: fromAddress, value: Web3.utils.toWei(String(downPaymentAmount), "ether") }
        ) * 1.40);

        // let client = await loadProvider()
        let txn = await client.eth.sendTransaction({
            from: fromAddress,
            to: WAVVY_MATIC_CONTRACT_ADDRESS,
            data: action.encodeABI(),
            value: amount,
            gas,   //   300000 GAS
            gasPrice: 500000000000  //  wei
        })

        console.log({ txn })
        return { ok: true, data: txn }

    }