import { takeLatest } from 'redux-saga/effects';
import { CONNECT_WEBSOCKET } from './prices.actions';

function* handleConnectWebsocket() {}

export function* pricesSagaWatchers() {
  yield takeLatest(CONNECT_WEBSOCKET, handleConnectWebsocket);
}
