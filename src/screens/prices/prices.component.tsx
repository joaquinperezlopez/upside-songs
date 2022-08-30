import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { useAppDispatch } from '../../hooks/redux';
import { routes } from '../../navigation';
import { StackParamList } from '../../navigation/routes';
import { useWebsocket } from './prices.hooks';

type PriceScreenProps = {} & NativeStackScreenProps<
  StackParamList,
  typeof routes.Prices
>;

const PricesScreen = ({}: PriceScreenProps) => {
  const dispatch = useAppDispatch();
  useWebsocket(dispatch);

  return <View />;
};

export default PricesScreen;
