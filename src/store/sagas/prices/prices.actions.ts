import { WebsocketMessage } from './prices.types';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';

export interface ConnectWebsocketAction {
  type: typeof CONNECT_WEBSOCKET;
}

export const CONNECT_WEBSOCKET_SUCCESS = 'CONNECT_WEBSOCKET_SUCCESS';

export interface ConnectWebsocketSuccessAction {
  type: typeof CONNECT_WEBSOCKET_SUCCESS;
}

export const DISCONNECT_WEBSOCKET = 'DISCONNECT_WEBSOCKET';

export interface DisconnectWebsocketAction {
  type: typeof DISCONNECT_WEBSOCKET;
}

export const ON_WEBSOCKET_MESSAGE = 'ON_WEBSOCKET_MESSAGE';

export interface OnWebsocketMessageAction {
  type: typeof ON_WEBSOCKET_MESSAGE;
  payload: WebsocketMessage;
}
