import {colors} from '../../../global/styles';

export const style = {
  ios_backgroundColor: colors.switch.secondaryDisabled,
  trackColor: {
    true: colors.switch.secondaryEnabled,
    false: colors.switch.secondaryDisabled,
  },
  thumbColor: {
    isEnabledTrue: colors.switch.primaryEnabled,
    isEnbaledFalse: colors.switch.primaryDisabled,
  },
  switch: {transform: [{scaleX: 1.0}, {scaleY: 1.0}]},
};
