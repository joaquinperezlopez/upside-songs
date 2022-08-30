import {
  ConnectWebsocketAction,
  ConnectWebsocketSuccessAction,
  CONNECT_WEBSOCKET,
  CONNECT_WEBSOCKET_SUCCESS,
  DisconnectWebsocketAction,
  DISCONNECT_WEBSOCKET,
  OnWebsocketMessageAction,
  ON_WEBSOCKET_MESSAGE,
} from './prices.actions';
import { WebsocketMessage } from './prices.types';

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

export function getDisconnectWebsocketAction(): DisconnectWebsocketAction {
  return {
    type: DISCONNECT_WEBSOCKET,
  };
}

export function getOnWebsocketMessageAction(
  message: WebsocketMessage,
): OnWebsocketMessageAction {
  return {
    type: ON_WEBSOCKET_MESSAGE,
    payload: message,
  };
}
