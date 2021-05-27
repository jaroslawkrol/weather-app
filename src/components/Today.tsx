import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/colors';
import { DailyWeather } from '../model/interfaces/daily-weather';
import WeatherIcon from './WeatherIcon';
import Icon from 'react-native-vector-icons/Fontisto';

interface Props {
  dailyWeather: DailyWeather;
}

const Today: React.FC<Props> = ({ dailyWeather }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.leftSide}>
          <Text style={styles.mean}>{dailyWeather.mean}°</Text>
          <View style={styles.minmaxContainer}>
            <Text style={styles.minMax}>
              <Icon style={styles.minMaxIcon} name={'caret-down'} /> {dailyWeather.minimum}°
            </Text>
            <Text style={styles.minMax}>
              <Icon style={styles.minMaxIcon} name={'caret-up'} /> {dailyWeather.maximum}°
            </Text>
          </View>
        </View>
        <View style={styles.rightSide}>
          <WeatherIcon style={styles.mainIcon} code={dailyWeather.type} />
          <Text style={styles.description}>{dailyWeather.description}</Text>
        </View>
      </View>
      <Text style={styles.humidity}>Humidity: {dailyWeather.humidity}%</Text>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: Colors.primary,

    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  leftSide: {
    width: '50%',
  },
  rightSide: {
    width: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mean: {
    fontSize: 48,
    color: Colors.secondary,
    textAlign: 'center',
  },
  minmaxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  minMax: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.secondaryLighter,
  },
  minMaxIcon: {
    marginRight: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 18,
    color: Colors.secondary,
  },
  humidity: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: Colors.primary,
  },
  mainIcon: {
    marginBottom: 8,
  },
});
