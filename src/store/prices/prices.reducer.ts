import { createSlice } from '@reduxjs/toolkit';
import { ON_WEBSOCKET_MESSAGE } from './../sagas/prices/prices.actions';

export const pricesSlice = createSlice({
  name: 'prices',
  initialState: {
    value: 0,
  },
  reducers: {
    // dummy actions
    [ON_WEBSOCKET_MESSAGE]: (state, action) => {
      console.log('on websocket message on reducer', action);
      return state;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement, incrementByAmount } = pricesSlice.actions;

export default pricesSlice.reducer;
