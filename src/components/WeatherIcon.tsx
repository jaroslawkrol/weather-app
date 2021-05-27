import * as React from 'react';
import { Colors } from '../utils/colors';
import { WeatherCode } from '../model/enums/weather-code.enum';
import { extractFontistoIconNameByWeatherCode } from '../utils/helpers';
import Icon from 'react-native-vector-icons/Fontisto';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  code: WeatherCode;
  style?: StyleProp<ViewStyle>;
}

const WeatherIcon: React.FC<Props> = ({ code, style }) => {
  const iconName = extractFontistoIconNameByWeatherCode(code);

  return (
    <View style={style}>
      <Icon style={styles.iconStyle} name={iconName} size={48} color={Colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: { textAlign: 'center' },
});

export default WeatherIcon;
