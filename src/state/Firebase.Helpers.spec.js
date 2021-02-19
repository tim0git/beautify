import {getUserIDToken} from './Firebase.helpers';

describe('<getUserIDToken>', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('should throw an error if user argument is not passed or undefined', async () => {
    const mockUser = undefined;
    await expect(getUserIDToken(mockUser)).rejects.toThrow();
  });
  test('should return an empty string if user.user is not defined', async () => {
    const mockUser = {};
    const result = await getUserIDToken(mockUser);
    expect(result).toBe('');
  });
  test('should call getUserIDToken method on user object', async () => {
    const mockUser = {user: {getIdToken: jest.fn()}};
    await getUserIDToken(mockUser);
    expect(mockUser.user.getIdToken).toHaveBeenCalledTimes(1);
  });
  test('should return the value returned by getUserIDToken', async () => {
    const mockToken = 'MOCK_TOKEN';
    const mockUser = {user: {getIdToken: jest.fn(() => Promise.resolve(mockToken))}};
    const token = await getUserIDToken(mockUser);
    expect(token).toBe(mockToken);
  });
});
