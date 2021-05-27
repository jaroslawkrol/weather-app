import * as React from 'react';
import { Address } from '../model/interfaces/address';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/colors';

interface Props {
  address: Address;
  date: string;
  dayOfWeek: string;
}

const Header: React.FC<Props> = ({ address, date, dayOfWeek }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>
          {dayOfWeek}, {date}
        </Text>
        <Text style={styles.title}>
          {address.city}, {address.country}
        </Text>
      </View>
      <Picker
        selectedValue={'java'}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.primaryLighter,
    marginBottom: 8,
  },
});
