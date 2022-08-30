import { all } from 'redux-saga/effects';
import { pricesSagaWatchers } from './prices/prices.saga';

export function* rootSaga() {
  yield all([pricesSagaWatchers()]);
}
