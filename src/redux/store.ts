import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/slices/testSlice';
import connectWalletReducer from './features/slices/walletConnectSlice';
import { collectionsApi } from './services/CollectionsAPI';
import { userAPi } from './services/userApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { poolApi } from './services/poolApi';
import searchReducer from './features/slices/searchSlice';

const rootReducer = combineReducers({
  connectWallet: connectWalletReducer,
  searchItems: searchReducer,
  [userAPi.reducerPath]: userAPi.reducer,
  [poolApi.reducerPath]: poolApi.reducer,
  [collectionsApi.reducerPath]: collectionsApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([collectionsApi.middleware, userAPi.middleware, poolApi.middleware])
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
