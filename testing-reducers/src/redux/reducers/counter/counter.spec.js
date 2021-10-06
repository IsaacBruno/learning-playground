import counterReducer from './counter';

describe('counter reducer', () => {
  test('should return the initial state', () => {
    const result = counterReducer(undefined, {});
    expect(result).toBe(0);
  });

  test('should handle INCREMENT', () => {
    const result = counterReducer(0, { type: 'INCREMENT' });
    expect(result).toBe(1);
  });
});
