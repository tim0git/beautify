---
to: src/components/templates/<%=name%>/<%=name%>_Template.tsx
---
/**
 * @name <%=name%>
 * @description {description}
 * 
 */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from '../../atoms/Header/Header';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  headerText: string;
  render: () => any;
  testID: string;
}

const <%=name%>__Template: React.FC<Props> = ({headerText, render, testID}) => {
  const {config, dict, style} = ThemeProvider('<%=name%>')
  const {barStyle} = ThemeProvider('global').styles;

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.pageWrapper} testID={testID ? testID="<%=name%>_Template"} ,>
        <Header headerText={headerText} type='Screen' testID='<%=name%>_Template_Screen_Header'/>
        {render}
      </SafeAreaView>
    </>
  );
}

export default <%=name%>__Template;
