import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useWebsocket } from './prices.hooks';

const PricesScreen = () => {
  const dispatch = useDispatch();
  useWebsocket(dispatch);

  return <View />;
};

export default PricesScreen;
