import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/home/home.component';
import PricesScreen from '../screens/prices';
import routes, { StackParamList } from './routes';

const Stack = createNativeStackNavigator<StackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={routes.Prices} component={PricesScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
