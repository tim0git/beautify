/**
 * @name Loading
 * @description {description}
 *
 */
import React, {useRef, useEffect} from 'react';
import {View, Animated} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import IconRN from '../../atoms/Icon/Icon';
import Spinner from '../../atoms/Spinner/Spinner';
import Text from '../../atoms/Text/Text';

export interface Props {}

const Loading: React.FC<Props> = ({}) => {
  const {style} = ThemeProvider('Loading');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 5000,
    }).start();
  });

  return (
    <View style={style.pageWrapper} testID="Loading">
      <Animated.View
        style={[
          style.container,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}>
        <View style={style.iconConatiner}>
          <IconRN name="Bookings" color="#19253f" size={50} />
        </View>
        <View style={style.textContainer}>
          <Text content="Loading..." type="Splash" testID="Loading_Text" />
        </View>
      </Animated.View>
      <View style={style.spinnerContainer}>
        <Spinner size="large" color="#ff6bb3" />
      </View>
    </View>
  );
};

export default Loading;
