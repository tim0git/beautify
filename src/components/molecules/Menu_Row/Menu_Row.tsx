/**
 * @name Menu_Row
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Switch from '../../atoms/Switch/Switch';

export interface Props {
  title: string;
  type: string | 'Switch';
  onValueChange: (title: string) => string;
  isEnabled: boolean;
  disabled: boolean;
}

const Menu_Row: React.FC<Props> = ({onValueChange, isEnabled, disabled, title, type}) => {
  const {style} = ThemeProvider('Menu_Row');
  return (
    <View style={style.wrapper[type]} testID="Menu_Row">
      <View style={style.container[type]}>
        <Text testID="Menu_Row_Menu_Text" style={style.text[type]}>
          {title}
        </Text>
        <Switch
          testID="Menu_Row_Switch"
          isEnabled={isEnabled}
          onValueChange={() => {
            onValueChange(title);
          }}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

export default Menu_Row;
