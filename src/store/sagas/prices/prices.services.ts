// we need to connect to a webscoket to get the prices
import base64 from 'react-native-base64';
import Config from 'react-native-config';

export const createWebSocket = () => {
  const ws = new WebSocket(Config.WS_URL, [], {
    headers: {
      Authorization: `Basic ${base64.encode(
        `${Config.WS_USERNAME}:${Config.WS_PASSWORD}`,
      )}`,
    },
  });

  return ws;
};
