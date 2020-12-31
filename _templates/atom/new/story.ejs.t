---
to: src/components/atoms/<%=name%>/<%=name%>.stories.js
---
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import <%=name%> from './<%=name%>';

const defaultProps = {};

storiesOf('<%=name%>', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('<%=name%>_Default', () => <<%=name%> {...defaultProps} />);
