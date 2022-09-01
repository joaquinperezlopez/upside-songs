import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/redux';
import { routes } from '../../navigation';
import { StackParamList } from '../../navigation/routes';
import { getPricesSelector } from '../../store/prices/prices.selectors';
import { useWebsocket } from './prices.hooks';
import styles from './prices.styles';

type PriceScreenProps = {} & NativeStackScreenProps<
  StackParamList,
  typeof routes.Prices
>;

const PricesScreen = ({}: PriceScreenProps) => {
  const dispatch = useAppDispatch();
  useWebsocket(dispatch);
  const prices = useSelector(getPricesSelector);

  const getSign = (delta: number) => {
    if (delta === 0) {
      return delta;
    }
    return delta > 0
      ? `+${'$' + delta.toFixed(2)} \u25B2`
      : `${'-$' + Math.abs(delta).toFixed(2)} \u25BC`;
  };

  const renderItem = ({ item }: { item: string }) => {
    const currPrice = prices[item];
    return (
      <View style={styles.priceRowContainer}>
        <Text style={styles.priceRowLabel}>{item}</Text>
        <View style={styles.infoContainer}>
          <View style={[styles.infoBox, styles.bidColor]}>
            <Text style={styles.data}>${currPrice.bid}</Text>
            {currPrice.bidDelta !== 0 && (
              <Text style={styles.data}>{getSign(currPrice.bidDelta)}</Text>
            )}
          </View>
          <View style={[styles.infoBox, styles.askColor]}>
            <Text style={styles.data}>${currPrice.ask}</Text>
            {currPrice.askDelta !== 0 && (
              <Text style={styles.data}>{getSign(currPrice.askDelta)}</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  const keyExtractor = (item: string) => item;

  if (Object.keys(prices).length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(prices)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default PricesScreen;
