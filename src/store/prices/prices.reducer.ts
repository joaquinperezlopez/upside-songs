import { createSlice } from '@reduxjs/toolkit';
import { PriceInfo } from '../sagas/prices/prices.types';

type PricesState = {
  [song: string]: {
    name: string;
    bid: number;
    ask: number;
    bidDelta: number;
    askDelta: number;
  };
};

const initialState: PricesState = {};

export const pricesSlice = createSlice({
  name: 'prices',
  initialState: initialState,
  reducers: {
    savePrices: (state, action) => {
      const priceObject: PriceInfo = action.payload;
      Object.keys(priceObject.bookPrices).forEach(song => {
        state[song] = {
          name: song,
          bid: priceObject?.bookPrices?.[song]?.bid,
          ask: priceObject.bookPrices[song].ask,
          bidDelta: state?.[song]?.bid
            ? priceObject.bookPrices[song].bid - (state?.[song]?.bid ?? 0)
            : 0,
          askDelta: state?.[song]?.bid
            ? priceObject.bookPrices[song].ask - (state?.[song]?.ask ?? 0)
            : 0,
        };
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { savePrices } = pricesSlice.actions;

export default pricesSlice.reducer;
