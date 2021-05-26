import * as React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import useStore from '../hooks/useStore';
import { observer } from 'mobx-react';

interface Props {}

const WeatherScreen: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { location } = useStore();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>
            Lat: {location.cords?.lat}, lon: {location.cords?.lon}
          </Text>
          <Button title={'fetch location'} onPress={location.fetchCurrentLocation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(WeatherScreen);
