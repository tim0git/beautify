/**
 * @name Linked_Text
 * @description {description}
 *
 */
import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  content: string;
  textToLink: string;
}

const Linked_Text: React.FC<Props> = ({content, textToLink}) => {
  const {style} = ThemeProvider('Linked_Text');

  const sentances: Array<string> = content.split('.');

  const renderLinkedSentance = (sentance) => {
    const sentancesWithLinkRemoved: Array<string> = sentance.split(textToLink);
    return (
      <React.Fragment key={sentance}>
        <Text style={style.textBeforeLink}>{sentancesWithLinkRemoved[0]}</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
          <Text style={style.linkText}>{textToLink}</Text>
        </TouchableOpacity>
        <Text style={style.textAfterLink}>{sentancesWithLinkRemoved[1] + '.'}</Text>
      </React.Fragment>
    );
  };

  const nonLinkedSentance = (sentance) => {
    return (
      <Text style={style.textBeforeLink} key={sentance}>
        {sentance + '.'}
      </Text>
    );
  };

  return (
    <View style={style.container} testID="Linked_Text">
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
