import { Address } from '../model/interfaces/address';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/colors';

interface Props {
  address: Address;
  date: string;
  dayOfWeek: string;
}

const Today: React.FC<Props> = ({ address, date, dayOfWeek }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          {address.city}, {address.country}
        </Text>
        <Text style={styles.subtitle}>
          {dayOfWeek}, {date}
        </Text>
      </View>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  innerContainer: {
    padding: 16,
    marginHorizontal: 16,
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
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.primaryLighter,
  },
});
