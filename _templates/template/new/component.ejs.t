---
to: src/components/templates/<%=name%>/<%=name%>_Template.tsx
---
/**
 * @name <%=name%>
 * @description {description}
 * 
 */
import React from 'react';
import { View, Text } from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const <%=name%>__Template: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('<%=name%>')
  return (
     <View style={style.container} testID='<%=name%>_Template'>
        <Text><%=name%></Text>
      </View>
  );
}

export default <%=name%>__Template;
