import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Landing_Screen from '../components/screens/Landing/Landing_Screen';
import {login, submitCode} from '../state/Auth.state';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loginIn: login,
      submitCode: submitCode,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Landing_Screen);
