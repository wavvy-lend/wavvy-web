import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState = {
  value: 0,
} as CounterState;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
  }
});

export const {
// Todo: add action functions
} = counter.actions;
export default counter.reducer;
