import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeProvider} from '../../../services/ThemeProvider';
export interface Props {
  name: string;
  color: string;
  size: number;
}

const IconRN: React.FC<Props> = ({name, color, size}) => {
  const {config} = ThemeProvider('Icon');

  const iconName = config.iconMapper[name];

  return <Icon name={iconName} color={color} size={size} testID={'Icon-Icon'} />;
};

export default IconRN;
