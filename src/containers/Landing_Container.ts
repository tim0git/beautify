import {connect} from 'react-redux';
import Landing_Screen from '../components/screens/Landing/Landing_Screen';
import {subscribeFireBaseAuth, signIn} from '../state/Auth.state';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    subscribeFireBaseAuth: () => dispatch(subscribeFireBaseAuth()),
    signIn: () => dispatch(signIn('447902762616')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing_Screen);
