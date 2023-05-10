import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/testSlice';
import connectWalletReducer from './features/walletConnectSlice';
import { collectionsApi } from './services/CollectionsAPI';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  connectWallet: connectWalletReducer,
  [collectionsApi.reducerPath]: collectionsApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([collectionsApi.middleware])
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
