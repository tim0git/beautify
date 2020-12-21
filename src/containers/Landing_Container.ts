import {connect} from 'react-redux';
import Landing_Screen from '../components/screens/Landing/Landing_Screen';
import {subscribeFireBaseAuth} from '../state/Auth.state';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    subscribeFireBaseAuth: () => dispatch(subscribeFireBaseAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing_Screen);
