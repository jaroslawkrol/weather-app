import * as React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import useStore from '../hooks/useStore';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';
import { Colors } from '../utils/colors';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Today from '../components/Today';
import RestOfWeek from '../components/RestOfWeek';
import CitiesModal from '../components/CitiesModal';

const WeatherScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { location, weatherInfo } = useStore();
  const { address } = location;
  const { dailyWeathers } = weatherInfo;

  useEffect(() => {
    const hydrate = async () => {
      await location.fetchLocation();
    };

    void hydrate();
  }, []);

  reaction(
    () => location.address,
    (address, previousAddress) => {
      if (address && address?.city !== previousAddress?.city) {
        void weatherInfo.fetchWeatherInfoByCoords(address.coords);
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
        <Header
          address={address}
          date={today.date}
          dayOfWeek={today.dayOfWeek}
          onLocationSelect={() => setModalVisible(true)}
        />
        <Today dailyWeather={today} />
        <RestOfWeek today={today} restOfWeek={restOfWeek} />
      </View>
    );
  };

  const onCitySelect = async (city: string | null) => {
    if (city) {
      await location.setCustomLocation(city);
    } else {
      await location.setCurrentLocation();
    }
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.backgroundStyle}>
        {renderWeatherPresentation()}
      </ScrollView>
      <CitiesModal
        activeCity={location.address?.city}
        modalVisible={modalVisible}
        onSelect={onCitySelect}
      />
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
