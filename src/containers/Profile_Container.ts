import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Profile_Screen from '../components/screens/Profile/Profile_Screen';
import {signOut} from '../state/Auth.state';

const mapStateToProps = (state) => ({
  isLoggedIn: state.authentication.isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      signOut: signOut,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile_Screen);
