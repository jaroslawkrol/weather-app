import * as React from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import useStore from '../hooks/useStore';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';
import { Colors } from '../utils/colors';
import { useEffect } from 'react';
import Header from '../components/Header';
import Today from '../components/Today';

const WeatherScreen: React.FC = () => {
  const { location, weatherInfo } = useStore();
  const { address } = location;
  const { dailyWeathers } = weatherInfo;
  const today = dailyWeathers && dailyWeathers.length ? dailyWeathers[0] : null;

  useEffect(() => {
    const hydrate = async () => {
      await location.fetchLocation();
    };

    hydrate();
  }, []);

  reaction(
    () => location.address,
    (address, previousAddress) => {
      if (address && address?.city !== previousAddress?.city) {
        weatherInfo.fetchWeatherInfoByCoords(address.coords);
      }
    },
  );

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.backgroundStyle}>
        {today && address && (
          <View style={styles.backgroundStyle}>
            <Header address={address} date={today.date} dayOfWeek={today.dayOfWeek} />
            <Today address={address} date={today.date} dayOfWeek={today.dayOfWeek} />
            <Button title={'fetch location'} onPress={location.fetchLocation} />
            {location.address && (
              <Button
                title={'fetch weather info'}
                onPress={() => weatherInfo.fetchWeatherInfoByCoords(location.address?.coords)}
              />
            )}
            {weatherInfo &&
              weatherInfo.dailyWeathers.map((daily) => {
                return <Text key={daily.id}>Weather: {daily.date}</Text>;
              })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default observer(WeatherScreen);
