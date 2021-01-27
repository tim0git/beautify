import {goBack, navigate, navigationRef} from './RootNavigation';

describe('<goBack>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should call navigationRef.current.goBack when goBack is called', () => {
    navigationRef.current = {goBack: jest.fn()};
    goBack();
    expect(navigationRef.current.goBack).toHaveBeenCalledTimes(1);
  });
});

describe('<navigate>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should call navigationRef.current.navigate when navigate is called', () => {
    navigationRef.current = {navigate: jest.fn()};
    navigate();
    expect(navigationRef.current.navigate).toHaveBeenCalledTimes(1);
  });
  test('should call navigationRef.current.navigate with the props passed to navigate()', () => {
    navigationRef.current = {navigate: jest.fn()};
    const mockName = 'MOCK_NAME';
    const mockParam = {TEST: 'MOCK_PARAM'};
    navigate(mockName, mockParam);
    expect(navigationRef.current.navigate).toHaveBeenCalledWith(mockName, mockParam);
  });
});
