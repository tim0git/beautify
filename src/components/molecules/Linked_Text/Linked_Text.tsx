/**
 * @name Linked_Text
 * @description {description}
 *
 */
import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import * as RootNavigation from '../../../RootNavigation';

export interface Props {
  content: string;
  textToLink: string;
  link: string;
  type: string | 'URL' | 'NAVIGATION';
  testID?: string;
}

const Linked_Text: React.FC<Props> = ({content, textToLink, testID, link, type}) => {
  const {style} = ThemeProvider('Linked_Text');

  const sentances: Array<string> = content.split('.');

  const handlePress = () => {
    switch (type) {
      case 'NAVIGATION':
        return RootNavigation.navigate(link);
      default:
        return Linking.openURL(link);
    }
  };

  const renderLinkedSentance = (sentance: string) => {
    const sentancesWithLinkRemoved: Array<string> = sentance.split(textToLink);
    return (
      <React.Fragment key={sentance}>
        <Text testID="Linked_Text_Text_Before_Link" style={style.textBeforeLink}>
          {sentancesWithLinkRemoved[0]}
        </Text>
        <TouchableOpacity onPress={handlePress} testID="Linked_Text_Text_Pressable">
          <Text style={style.linkText} testID="Linked_Text_Text">
            {textToLink}
          </Text>
        </TouchableOpacity>
        <Text testID="Linked_Text_Text_After_Link" style={style.textAfterLink}>
          {sentancesWithLinkRemoved[1] + '.'}
        </Text>
      </React.Fragment>
    );
  };

  const nonLinkedSentance = (sentance: string) => {
    return (
      <Text style={style.textBeforeLink} key={sentance} testID="Linked_Text_Non_Linked_Sentance">
        {sentance + '.'}
      </Text>
    );
  };

  return (
    <View style={style.container} testID={testID ? testID : 'Linked_Text'}>
      <View style={style.container}>
        <View style={style.textWrapper}>
          {sentances.map((sentance) => {
            if (sentance.includes(textToLink)) {
              return renderLinkedSentance(sentance);
            }
            return nonLinkedSentance(sentance);
          })}
        </View>
      </View>
    </View>
  );
};

export default Linked_Text;
