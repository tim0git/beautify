export const config = {
  treatmentButtonProps: {
    title: 'Find a Treatment',
    type: 'Primary',
    iconLeft: false,
    iconRight: true,
    accessible: true,
    accessibilityLabel: 'Navigate to Search for a Treatment',
    accessibilityHint: 'Press to navigate to the Search for treatment screen',
    disabled: false,
    testID: 'LOGIN_CLUSTER_TEST_FIND_A_TREATMENT_BUTTON',
  },
  captionProps: {
    content: 'If you already have an account',
    type: 'Caption',
    testID: 'LOGIN_CLUSTER_TEST_CAPTION',
  },
  loginButtonProps: {
    title: 'Login here',
    type: 'Secondary',
    iconLeft: false,
    iconRight: true,
    accessible: true,
    accessibilityLabel: 'Navigate to login screen',
    accessibilityHint: 'Press to navigate to the login screen',
    disabled: false,
    testID: 'LOGIN_CLUSTER_TEST_LOGIN_BUTTON',
  },
  navigationProps: {
    treatment: 'Search_Screen',
    login: 'Login_Screen',
  },
};
