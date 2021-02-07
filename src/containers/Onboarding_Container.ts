/**
 * @name Onboarding
 * @description {description}
 */
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Onboarding_Screen from '../components/screens/Onboarding/Onboarding_Screen';
import {skipOnboarding} from '../state/Onboarding.state';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      skipOnboarding: skipOnboarding,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding_Screen);
