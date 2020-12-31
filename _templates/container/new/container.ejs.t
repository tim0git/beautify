---
to: src/containers/<%=name%>_Container.ts
---
/**
 * @name <%=name%>
 * @description {description}
 */
import React, { Component } from "react";
import { 
    View,
    Text
} from "react-native";

import { connect } from 'react-redux'

class <%=name%> extends Component {
    render() {
        return (
            <View>
                <Text><%=name%></Text>
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) =>{
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(<%=name%>);
 