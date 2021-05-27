/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import AppStoreProvider from './src/providers/AppStoreProvider';
import WeatherScreen from './src/screens/WeatherScreen';

const App = (): JSX.Element => {
  return (
    <AppStoreProvider>
      <WeatherScreen />
    </AppStoreProvider>
  );
};

export default App;
