import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  inputValue: string;
};

const initialState: SearchState = {
  inputValue: "",
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = searchSlice.actions;
export const selectSearchItem = (state: RootState) => state.searchItems;
export default searchSlice.reducer;
