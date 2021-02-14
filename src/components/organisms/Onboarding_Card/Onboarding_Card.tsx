/**
 * @name Onboarding_Card
 * @description {description}
 *
 */
import React from 'react';
import {View, Image} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Text from '../../atoms/Text/Text';

export interface Props {
  title: string;
  body: string;
  image: string;
}

const Onboarding_Card: React.FC<Props> = ({title, body, image}) => {
  const {style} = ThemeProvider('Onboarding_Card');
  return (
    <View style={style.container} testID="Onboarding_Card">
      <View style={style.titleContainer}>
        <Text content={title} type={'TitleLarge'} testID="Onboarding_Card_Title" />
      </View>
      <View style={style.bodyContainer}>
        <Text content={body} type={'Title'} testID="Onboarding_Card_Title" />
      </View>
      <View style={style.imageContainer}>
        <Image source={{uri: image}} style={{flex: 1}} />
      </View>
    </View>
  );
};

export default Onboarding_Card;
