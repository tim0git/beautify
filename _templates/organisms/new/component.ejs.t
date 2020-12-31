---
to: src/components/organisms/<%=name%>/<%=name%>.tsx
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

const <%=name%>: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('<%=name%>')
  return (
     <View style={style.container} testID='<%=name%>'>
        <Text><%=name%></Text>
      </View>
  );
}

export default <%=name%>;
