import * as React from 'react';
import { Address } from '../model/interfaces/address';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Fontisto';

interface Props {
  address: Address;
  date: string;
  dayOfWeek: string;
  onLocationSelect: () => void;
}

const Header: React.FC<Props> = ({ address, date, dayOfWeek, onLocationSelect }) => {
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
      <TouchableOpacity onPress={onLocationSelect}>
        <Icon name={'holiday-village'} size={48} />
      </TouchableOpacity>
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
