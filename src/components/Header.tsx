import * as React from 'react';
import { Address } from '../model/interfaces/address';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/colors';

interface Props {
  address: Address;
  date: string;
  dayOfWeek: string;
}

const Header: React.FC<Props> = ({ address, date, dayOfWeek }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {address.city}, {address.country}
      </Text>
      <Text style={styles.subtitle}>
        {dayOfWeek}, {date}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 16,
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
