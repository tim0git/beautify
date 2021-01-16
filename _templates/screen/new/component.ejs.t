---
to: src/components/screens/<%=name%>/<%=name%>_Screen.tsx
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

const <%=name%>_Screen: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('<%=name%>')
  return (
     <View style={style.container} testID='<%=name%>_Screen'>
        <Text><%=name%></Text>
      </View>
  );
}

export default <%=name%>_Screen;
