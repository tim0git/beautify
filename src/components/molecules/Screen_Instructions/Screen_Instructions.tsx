import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Text from '../../atoms/Text/Text';

export interface Props {
  titleProps: {
    content: string;
    type: string;
    testID: string;
  };
  subTitleProps: {
    content: string;
    type: string;
    testID: string;
  };
}

const Screen_Instructions: React.FC<Props> = ({titleProps, subTitleProps}) => {
  const {styles} = ThemeProvider('Screen_Instructions');

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text {...titleProps} testID={titleProps.testID || 'Screen_Instructions_Title'} />
      </View>
      <View style={styles.subTitleContainer}>
        <Text {...subTitleProps} testID={subTitleProps.testID || 'Screen_Instructions_SubTitle'} />
      </View>
    </View>
  );
};

export default Screen_Instructions;
