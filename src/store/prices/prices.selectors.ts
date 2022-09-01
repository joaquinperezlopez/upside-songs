import { RootState } from './../index';

export const getPricesSelector = (state: RootState) => {
  return state.prices;
};
