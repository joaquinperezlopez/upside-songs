// we need to connect to a webscoket to get the prices
import base64 from 'react-native-base64';
import Config from 'react-native-config';

export const connectWebsocket = async () =>
  new Promise<WebSocket>((resolve, reject) => {
    console.log('connecting to websocket...');
    const ws = new WebSocket(Config.WS_URL, [], {
      headers: {
        Authorization: `Basic ${base64.encode(
          `${Config.WS_USERNAME}:${Config.WS_PASSWORD}`,
        )}`,
      },
    });

    ws.onopen = () => {
      console.log('connected to websocket');
      resolve(ws);
    };

    ws.onerror = (err: WebSocketErrorEvent) => {
      console.log('error', err);
      reject(err);
    };

    return ws;
  });
