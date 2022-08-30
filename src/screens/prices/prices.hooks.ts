import { useEffect } from 'react';
import { Dispatch } from 'redux';
import {
  getConnectWebsocketAction,
  getDisconnectWebsocketAction,
} from '../../store/sagas/prices/prices.actionCreators';

export const useWebsocket = (dispatch: Dispatch) => {
  useEffect(() => {
    dispatch(getConnectWebsocketAction());
    return () => {
      dispatch(getDisconnectWebsocketAction());
    };
  }, [dispatch]);
};
