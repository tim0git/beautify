import React from 'react';
import {TextInput, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Button from '../../atoms/Button/Button';
import IconMCI from '../../atoms/Icon/IconMCI';

export interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  keyboardType?: string;
}

const Search_Bar: React.FC<Props> = ({onPress, value, onChangeText}) => {
  const {styles, config} = ThemeProvider('Search_Bar');
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.iconContainer}>
          <IconMCI name="magnify" color="grey" size={30} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
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
          textAlign="center"
          onPress={onPress}
          accessible
          accessibilityLabel=""
          accessibilityHint=""
          accessibilityRole="button"
          disabled={false}
          testID="Search_Bar_Button"
        />
      </View>
    </View>
  );
};

export default Search_Bar;
