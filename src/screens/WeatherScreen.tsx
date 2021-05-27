import * as React from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import useStore from '../hooks/useStore';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';
import { Colors } from '../utils/colors';
import { useEffect } from 'react';
import Header from '../components/Header';
import Today from '../components/Today';
import Icon from 'react-native-vector-icons/Fontisto';
import RestOfWeek from '../components/RestOfWeek';

const WeatherScreen: React.FC = () => {
  const { location, weatherInfo } = useStore();
  const { address } = location;
  const { dailyWeathers } = weatherInfo;

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

  const renderWeatherPresentation = () => {
    if (!(dailyWeathers && dailyWeathers.length) || !address) {
      return <></>;
    }

    const [today, ...restOfWeek] = dailyWeathers;
    return (
      <View style={styles.backgroundStyle}>
        <Header address={address} date={today.date} dayOfWeek={today.dayOfWeek} />
        <Today dailyWeather={today} />
        <RestOfWeek today={today} restOfWeek={restOfWeek} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.backgroundStyle}>
        {renderWeatherPresentation()}
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
