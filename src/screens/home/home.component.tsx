import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import routes from '../../navigation/routes';
import styles from './home.styles';

const HomeScreen = () => {
  const navigator = useNavigation();

  const _onPressConnect = () => {
    navigator.navigate(routes.Prices);
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
