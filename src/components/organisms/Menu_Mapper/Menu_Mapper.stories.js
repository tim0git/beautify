import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_Mapper from './Menu_Mapper';
import {USER_PROFILE_MENU} from '../../../theme/global/config';

const defaultProps = {
  userProfileMenu: USER_PROFILE_MENU,
  navigation: () => {},
};

storiesOf('Design System/Organism/Menu_Mapper', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_Mapper_Default', () => <Menu_Mapper {...defaultProps} />);
