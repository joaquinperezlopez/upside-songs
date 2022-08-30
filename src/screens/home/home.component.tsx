import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import routes, { StackParamList } from '../../navigation/routes';
import styles from './home.styles';

type HomeScreenProps = {} & NativeStackScreenProps<
  StackParamList,
  typeof routes.Prices
>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const _onPressConnect = () => {
    navigation.navigate(routes.Prices);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={_onPressConnect} style={styles.button}>
        <Text style={styles.textButton}>Connect</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
