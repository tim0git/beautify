---
to: src/containers/<%=name%>_Container.ts
---
/**
 * @name <%=name%>
 * @description {description}
 */
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import <%=name%>_Screen from '../components/screens/Landing/<%=name%>_Screen';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
        // place imported actions here
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(<%=name%>_Screen);