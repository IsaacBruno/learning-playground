import counterReducer from './counter';

describe('counter reducer', () => {
  test('should return the initial state', () => {
    const result = counterReducer(undefined, {});
    expect(result).toBe(0);
  });
});
