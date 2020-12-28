import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import Title from '../../atoms/Title/Title';

export interface Props {
  titleProps: {
    title: string;
    accessible: boolean;
    accessibilityLabel: string;
    accessibilityHint: string;
    accessibilityRole: string;
    testID: string;
  };
  subTitleProps: {
    subTitle: string;
    accessible: boolean;
    accessibilityLabel: string;
    accessibilityHint: string;
    accessibilityRole: string;
    testID: string;
  };
}

const Screen_Instructions: React.FC<Props> = ({titleProps, subTitleProps}) => {
  const {styles} = ThemeProvider('Screen_Instructions');

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Title {...titleProps} testID="Search_Title" />
      </View>
      <View style={styles.subTitleContainer}>
        <SubTitle {...subTitleProps} testID="Search_SubTitle" />
      </View>
    </View>
  );
};

export default Screen_Instructions;
