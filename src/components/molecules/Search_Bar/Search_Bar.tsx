import React from 'react';
import {TextInput, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Button from '../../atoms/Button/Button';
import IconRN from '../../atoms/Icon/Icon';

export interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  keyboardType?: string;
  testID: string;
}

const Search_Bar: React.FC<Props> = ({onPress, value, onChangeText, testID}) => {
  const {styles} = ThemeProvider('Search_Bar');
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.iconContainer}>
          <IconRN name="Search" color="grey" size={30} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            testID={testID || 'Search_Bar_Text_Input'}
            style={styles.textInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            keyboardType="default"
            autoFocus={true}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          type="NoBorder"
          onPress={onPress}
          accessible
          accessibilityLabel=""
          accessibilityHint=""
          disabled={false}
          testID="Search_Bar_Button"
        />
      </View>
    </View>
  );
};

export default Search_Bar;
