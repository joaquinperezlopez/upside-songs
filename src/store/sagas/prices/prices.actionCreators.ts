import {
  ConnectWebsocketAction,
  ConnectWebsocketSuccessAction,
  CONNECT_WEBSOCKET,
  CONNECT_WEBSOCKET_SUCCESS,
} from './prices.actions';

export function getConnectWebsocketAction(): ConnectWebsocketAction {
  return {
    type: CONNECT_WEBSOCKET,
  };
}

export function getConnectWebSocketSuccessAction(): ConnectWebsocketSuccessAction {
  return {
    type: CONNECT_WEBSOCKET_SUCCESS,
  };
}
