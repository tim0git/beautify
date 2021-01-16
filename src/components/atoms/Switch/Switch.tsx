/**
 * @name Switch
 * @description {description}
 *
 */
import React from 'react';
import {Switch as SwitchRN} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  isEnabled: boolean;
  onValueChange: () => void;
  disabled: boolean;
  testID: string;
}

const Switch: React.FC<Props> = ({testID, isEnabled, onValueChange, disabled = false}) => {
  const {style} = ThemeProvider('Switch');

  return (
    <SwitchRN
      style={style.switch}
      testID={testID ? testID : 'Switch'}
      disabled={disabled}
      ios_backgroundColor={style.ios_backgroundColor}
      trackColor={style.trackColor}
      thumbColor={!isEnabled ? style.thumbColor.isEnbaledFalse : style.thumbColor.isEnabledTrue}
      onValueChange={onValueChange}
      value={isEnabled}
    />
  );
};

export default Switch;
