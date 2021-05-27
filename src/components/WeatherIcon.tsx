import * as React from 'react';
import { Colors } from '../utils/colors';
import { WeatherCode } from '../model/enums/weather-code.enum';
import { extractFontistoIconNameByWeatherCode } from '../utils/helpers';
import Icon from 'react-native-vector-icons/Fontisto';
import { StyleSheet, View } from 'react-native';

interface Props {
  code: WeatherCode;
  size?: 'small' | 'normal' | 'big';
  light?: boolean;
}

const WeatherIcon: React.FC<Props> = ({ code, size = 'normal', light }) => {
  const iconName = extractFontistoIconNameByWeatherCode(code);

  return (
    <View>
      <Icon
        style={styles.iconStyle}
        name={iconName}
        size={48}
        color={light ? Colors.secondary : Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: { textAlign: 'center' },
});

export default WeatherIcon;
