import 'jest-enzyme';
import 'react-native-gesture-handler/jestSetup';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Setup
 */

const {JSDOM} = require('jsdom');
const {document} = new JSDOM('', {
  url: 'https://cdl.co.uk', // or whatever
}).window;

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

function suppressDomErrors() {
  const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|PascalCase)/;
  // eslint-disable-next-line no-console
  console.error = (message) => {
    if (message.match(suppressedErrors)) {
    }
  };
}
suppressDomErrors();

configure({adapter: new Adapter()});

/**
 * Setup
 */
// Mock reanimated in order to test navigation
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
