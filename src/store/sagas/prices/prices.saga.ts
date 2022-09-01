import { showMessage } from 'react-native-flash-message';
import { END, EventChannel, eventChannel } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';
import { savePrices } from '../../prices/prices.reducer';
import { CONNECT_WEBSOCKET, DISCONNECT_WEBSOCKET } from './prices.actions';
import { createWebSocket } from './prices.services';

type WebSocketEvent = {
  type: string;
  payload: {};
};

function* createWebsocketChannel() {
  try {
    return eventChannel<WebSocketEvent>(emit => {
      const ws = createWebSocket();

      ws.onopen = () => {
        showMessage({
          message: 'Connected to websocket',
          type: 'success',
          icon: 'success',
          floating: true,
        });
      };

      ws.onclose = () => {
        showMessage({
          message: 'Disconnected from websocket',
          type: 'danger',
          icon: 'danger',
          floating: true,
        });
        emit(END);
      };

      ws.onerror = (_: WebSocketErrorEvent) => {
        // report error to crashlytics or whatever
        // console.log('error', error);
        showMessage({
          message: 'Error connecting to websocket',
          type: 'danger',
          icon: 'danger',
          floating: true,
        });
        emit(END);
      };

      ws.onmessage = (msg: WebSocketMessageEvent) => {
        emit(JSON.parse(msg.data));
      };

      return ws.close;
    });
  } catch (error) {
    console.log('error', error);
  }
}

function* handleConnectWebsocket() {
  try {
    const wsChannel: EventChannel<WebSocketEvent> = yield call(
      createWebsocketChannel,
    );
    yield takeLatest(wsChannel, function* (message) {
      yield put(savePrices(message));
    });
    yield take(DISCONNECT_WEBSOCKET);
    showMessage({
      message: 'Disconnected from websocket',
      type: 'danger',
      icon: 'danger',
      floating: true,
    });
    wsChannel.close();
  } catch (error) {
    console.log('error', error);
  }
}

export function* pricesSagaWatchers() {
  yield takeLatest(CONNECT_WEBSOCKET, handleConnectWebsocket);
}
