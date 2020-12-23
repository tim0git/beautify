import {ThemeProvider} from './ThemeProvider';

describe('<ThemeProvider>', () => {
  test('should return an object', () => {
    const theme = ThemeProvider('TEST_COMPONENT');
    expect(typeof theme).toBe('object');
  });
  test('should return an object with the following keys when passed a component name as a string', () => {
    const theme = ThemeProvider('TEST_COMPONENT');
    expect(theme).toHaveProperty('dict');
    expect(theme).toHaveProperty('config');
    expect(theme).toHaveProperty('styles');
  });
  test('should throw an error when a component name is not passed as an argument', () => {
    expect(() => {
      ThemeProvider(undefined);
    }).toThrow();
  });
  test('error thrown should be "provide a component name in order to return the theme"', () => {
    expect(() => {
      ThemeProvider(undefined);
    }).toThrowError('provide a component name in order to return the theme');
  });
  test('should throw an error when the component name provided has not been imported', () => {
    expect(() => {
      ThemeProvider('NOT_A_COMPONENT');
    }).toThrow();
  });
  test('error thrown should be "no component with the name NOT_A_COMPONENT found in the theme provider, did you forget to import it?"', () => {
    expect(() => {
      ThemeProvider('NOT_A_COMPONENT');
    }).toThrowError(
      'no component with the name NOT_A_COMPONENT found in the theme provider, did you forget to import it?',
    );
  });
});
