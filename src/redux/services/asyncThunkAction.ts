import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import { IWalletProvoder } from '../features/walletConnectSlice';

// export const signup = createAsyncThunk(
//     'neverlandUser/signup',
//     async (userData, thunkAPI) => {
//       try {
//         return await userService.signup(userData)
//       } catch (error) {
//         const message = (error.response
//         && error.response.data
//         && error.response.data.message)
//       || error.message
//       || error.toString();
//         return thunkAPI.rejectWithValue(message);
//       }
//     },
//   )

export const connectWallet = createAsyncThunk('wavvy', async (_, thunkAPI) => {
  try {
    return await connect();
  } catch (error) {
    return thunkAPI.rejectWithValue('error');
  }
});

const connect = async (): Promise<IWalletProvoder | undefined> => {
  // if (state.isAuthenticated) return;
  if (localStorage.getItem('isAuthenticated') === 'connected') return;

  const { ethereum } = window;

  if (!ethereum) console.log('no metamask connected');

  const provider = new ethers.BrowserProvider(ethereum);

  const accounts: string[] = await provider.send('eth_requestAccounts', []);

  let signer;

  if (accounts.length > 0) {
    // const chain = Number(await (await provider.getNetwork()).chainId);
    signer = await provider.getSigner();

    localStorage.setItem('isAuthenticated', 'connected');

    return {
      address: accounts[0],
      signer,
      provider,
      isAuthenticated: 'connected'
    };

    // setState({
    //   ...state,
    //   address: accounts[0],
    //   signer,
    //   provider,
    //   isAuthenticated: "connected",
    // });
  }
};
