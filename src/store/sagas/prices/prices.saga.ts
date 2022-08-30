import { showMessage } from 'react-native-flash-message';
import { EventChannel, eventChannel } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';
import { CONNECT_WEBSOCKET } from './prices.actions';
import { connectWebsocket } from './prices.services';

type WebSocketEvent = {
  type: string;
  payload: {};
};

function* createWebsocketChannel() {
  try {
    const ws: WebSocket = yield call(connectWebsocket);
    if (ws.readyState === WebSocket.OPEN) {
      showMessage({
        message: 'Websocket connected',
        type: 'success',
        icon: 'success',
        floating: true,
      });
    }
    return eventChannel<WebSocketEvent>(emit => {
      ws.addEventListener('message', (event: WebSocketMessageEvent) => {
        console.log('message: ', event.data);
        const message: WebSocketEvent = JSON.parse(event.data);
        emit(message);
      });

      ws.addEventListener('error', (event: WebSocketErrorEvent) => {
        console.log('error: ', event);
      });

      ws.addEventListener('close', (event: WebSocketCloseEvent) => {
        console.log('close: ', JSON.stringify(event, null, 2));
      });

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
    while (true) {
      const action: WebSocketEvent = yield take(wsChannel);
      console.log('websocket action:', action);
      yield put(action);
    }
  } catch (error) {
    console.log('error', error);
  }
}

export function* pricesSagaWatchers() {
  yield takeLatest(CONNECT_WEBSOCKET, handleConnectWebsocket);
}
