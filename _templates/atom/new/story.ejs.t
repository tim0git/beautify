---
to: src/components/atoms/<%=name%>/<%=name%>.stories.js
---
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import  <%=name%>  from './<%=name%>'


storiesOf('<%=name%>', module)
  .addDecorator(standardDecorator)
  .add('Default state', () => (
    <View style={s.wrap}>
      <<%=name%> />
    </View>
  ))