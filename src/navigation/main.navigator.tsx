import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/home/home.component';
import PricesScreen from '../screens/prices';
import routes from './routes';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.Home} component={HomeScreen} />
      <Stack.Screen name={routes.Prices} component={PricesScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
