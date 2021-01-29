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
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const <%=name%>_Screen: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('<%=name%>')
  const {screenTitle, backButton} = config;
  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="<%=name%>_Default_Screen_Template"
      render={}
      backButton={backButton}
    />
  );
}

export default <%=name%>_Screen;
