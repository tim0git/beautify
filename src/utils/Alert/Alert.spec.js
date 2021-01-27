import {Alert} from 'react-native';
import {AlertLogout} from './Alert';

describe('<AlertLogout>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should call Alert when AlertLogout is called', () => {
    const mockOnOkPress = jest.fn();
    const mockAlert = jest.fn();
    jest.spyOn(Alert, 'alert').mockImplementationOnce(mockAlert);

    AlertLogout(mockOnOkPress);

    expect(mockAlert).toHaveBeenCalledTimes(1);
  });
});
