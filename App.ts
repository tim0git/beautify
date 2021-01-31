/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import App from './src/index';
// @ts-ignore
import {default as storybook} from './storybook';

const useStorybook = false;

export default useStorybook ? storybook : App;
