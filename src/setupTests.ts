import './components/screens/Landing/node_modules/jest-enzyme';

// setup file
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
