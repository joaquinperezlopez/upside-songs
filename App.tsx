import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

export default App;
