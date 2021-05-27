import * as React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../utils/colors';
import { cities } from '../utils/cities';

interface Props {
  activeCity?: string;
  modalVisible: boolean;
  onSelect: (city: string | null) => void;
}

const CitiesModal: React.FC<Props> = ({ modalVisible, onSelect, activeCity }) => {
  const isCurrentLocation = !cities.some((city) => city === activeCity);

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Select location:</Text>
        <TouchableOpacity style={styles.modalOption} onPress={() => onSelect(null)}>
          <Text style={[styles.modalOptionText, isCurrentLocation && styles.selected]}>
            My current location
          </Text>
        </TouchableOpacity>
        {cities.map((city) => {
          return (
            <TouchableOpacity key={city} style={styles.modalOption} onPress={() => onSelect(city)}>
              <Text style={[styles.modalOptionText, activeCity === city && styles.selected]}>
                {city}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalOption: {
    padding: 12,
  },
  modalOptionText: {
    fontSize: 20,
  },
  selected: {
    color: Colors.primary,
  },
});

export default CitiesModal;
