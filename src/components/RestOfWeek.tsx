import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { DailyWeather } from '../model/interfaces/daily-weather';
import Icon from 'react-native-vector-icons/Fontisto';

interface Props {
  today: DailyWeather;
  restOfWeek: DailyWeather[];
}

const RestOfWeek: React.FC<Props> = ({ today, restOfWeek }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Today</Text>
        <View style={styles.rowContent}>
          <Text style={styles.contentColumn}>
            <Icon name={'horizon'} /> {today.morningTemperature}°
          </Text>
          <Text style={styles.contentColumn}>
            <Icon name={'day-sunny'} /> {today.dayTemperature}°
          </Text>
          <Text style={styles.contentColumn}>
            <Icon name={'night-clear'} /> {today.nightTemperature}°
          </Text>
        </View>
      </View>
      {restOfWeek.map((daily) => (
        <View key={daily.id} style={styles.row}>
          <Text style={styles.rowTitle}>{daily.dayOfWeek.slice(0, 3)}</Text>
          <View style={styles.rowContent}>
            <Text style={styles.contentColumn}>
              <Icon name={'horizon'} /> {daily.morningTemperature}°
            </Text>
            <Text style={styles.contentColumn}>
              <Icon name={'day-sunny'} /> {daily.dayTemperature}°
            </Text>
            <Text style={styles.contentColumn}>
              <Icon name={'night-clear'} /> {daily.nightTemperature}°
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  rowTitle: {
    flex: 0.25,
    fontWeight: '600',
    marginLeft: 8,
  },
  rowContent: {
    flex: 0.75,
    flexDirection: 'row',
  },
  contentColumn: {
    flex: 0.33,
    textAlign: 'center',
  },
});

export default RestOfWeek;
