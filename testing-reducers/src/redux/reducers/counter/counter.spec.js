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

  test('should handle INCREMENT and then leads to the correct counter number', () => {
    const result = counterReducer(1, { type: 'INCREMENT' });
    expect(result).toBe(2);
  });

  test('should handle DECREMENT', () => {
    const result = counterReducer(0, { type: 'DECREMENT' });
    expect(result).toBe(-1);
  });

  test('should handle DECREMENT and then leads to the correct counter number', () => {
    const result = counterReducer(2, { type: 'DECREMENT' });
    expect(result).toBe(1);
  });

  test('should return the initial state if the action do not exist', () => {
    const initialState = 16;
    const result = counterReducer(initialState, { type: 'SOMETHING' });
    expect(result).toBe(initialState);
  });
});
