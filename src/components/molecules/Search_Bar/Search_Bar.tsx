import React from 'react';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Button from '../../atoms/Button/Button';
import IconRN from '../../atoms/Icon/Icon';

export interface Props {
  onChange: (text: string) => void;
  testID: string;
}

const Search_Bar: React.FC<Props> = ({onChange, testID}) => {
  const [value, onChangeText] = useState('');

  const {styles, config} = ThemeProvider('Search_Bar');

  const {textInputProps, searchBarIconProps, cancelButtonProps} = config;

  const handleChange = (text) => {
    onChangeText(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <View style={styles.container} testID="Search_Bar">
      <View style={styles.searchBar}>
        <View style={styles.iconContainer}>
          <IconRN {...searchBarIconProps} testID="Search_Bar_Icon" />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            {...textInputProps}
            style={styles.textInput}
            value={value}
            onChangeText={(text) => handleChange(text)}
            testID={testID || 'Search_Bar_Text_Input'}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          {...cancelButtonProps}
          onPress={() => {
            handleChange('');
          }}
          testID="Search_Bar_Button"
        />
      </View>
    </View>
  );
};

export default Search_Bar;
