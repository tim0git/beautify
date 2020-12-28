/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import App from './src/index';
import {default as storybook} from './storybook';

const useStorybook = true;

export default useStorybook ? storybook : App;
