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

  const sentences: Array<string> = content.split('.');

  const handlePress = () => {
    if (type === 'NAVIGATION') {
      return RootNavigation.navigate(link);
    }
    return Linking.openURL(link);
  };

  const renderLinkedSentence = (sentence: string) => {
    const sentencesWithLinkRemoved: Array<string> = sentence.split(textToLink);
    return (
      <React.Fragment key={sentence}>
        <Text testID="Linked_Text_Text_Before_Link" style={style.textBeforeLink}>
          {sentencesWithLinkRemoved[0]}
        </Text>
        <TouchableOpacity onPress={handlePress} testID="Linked_Text_Text_Pressable">
          <Text style={style.linkText} testID="Linked_Text_Text">
            {textToLink}
          </Text>
        </TouchableOpacity>
        <Text testID="Linked_Text_Text_After_Link" style={style.textAfterLink}>
          {sentencesWithLinkRemoved[1] + '.'}
        </Text>
      </React.Fragment>
    );
  };

  const nonLinkedSentence = (sentence: string) => {
    return (
      <Text style={style.textBeforeLink} key={sentence} testID="Linked_Text_Non_Linked_Sentence">
        {sentence + '.'}
      </Text>
    );
  };

  return (
    <View style={style.container} testID={testID ? testID : 'Linked_Text'}>
      <View style={style.container}>
        <View style={style.textWrapper}>
          {sentences.map((sentence) => {
            if (sentence.includes(textToLink)) {
              return renderLinkedSentence(sentence);
            }
            return nonLinkedSentence(sentence);
          })}
        </View>
      </View>
    </View>
  );
};

export default Linked_Text;
