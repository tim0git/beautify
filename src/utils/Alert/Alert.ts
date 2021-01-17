/**
 * @name Alert
 * @description {description}
 * @param {*} arg
 * @returns {number}
 * @example
 * Alert()
 *
 */
import {Alert as AlertRN} from 'react-native';

export function AlertLogout(onOKPress) {
  AlertRN.alert(
    'Are you sure you want to logout?',
    '',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          onOKPress();
        },
      },
    ],
    {cancelable: false},
  );
}
