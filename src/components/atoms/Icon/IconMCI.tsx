import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface Props {
  name: string;
  color: string;
  size: number;
}

const IconMCI: React.FC<Props> = ({name, color, size}) => {
  return <Icon name={name} color={color} size={size} />;
};

export default IconMCI;
