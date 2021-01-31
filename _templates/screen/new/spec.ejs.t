---
to: src/components/screens/<%=name%>/<%=name%>.spec.js
---
import React from 'react'
import 'react-native'
import 'jest-enzyme'
import { shallow, render, mount } from 'enzyme'
import <%=name%>_Screen from './<%=name%>_Screen'

const defaultProps = {}

describe('<<%=name%> />', () => {
 describe('<Render>', () => {
     test('should render a default screen template, () =>{
        const wrapper = shallow(<<%=name%>_Screen {...defaultProps}/>)
        const defaultScreenTemplate = wrapper.findWhere((node)=>node.prop('testID') === '<%=name%>_Default_Screen_Template')
        expect(defaultScreenTemplate).toExist()
        })
    })
})