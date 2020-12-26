import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import IconMCI from '../../../components/atoms/Icon/IconMCI';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  type: string;
  textAlign: string;
  onPress: () => void;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: string;
  disabled: boolean;
  testID: string;
}

const SearchBarButton: React.FC<Props> = ({title, type = 'default', textAlign = 'center', onPress}) => {
  const {styles} = ThemeProvider('SearchBarButton');

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.type[type]}>
        <IconMCI name={'magnify'} color={'#696969'} size={35} />
        <Text style={styles.textAlign[textAlign]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBarButton;
