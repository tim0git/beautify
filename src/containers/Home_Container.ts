import {connect} from 'react-redux';

import Home_Screen from '../components/screens/Home/Home_Screen';

const mapStateToProps = ({onboarding}) => ({
  onboardingComplete: onboarding.onboardingComplete,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home_Screen);
