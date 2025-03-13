const { add, subtract, multiply, divide, calculate, getHistory, clearHistory } = require('../src/calculator');

describe('Calculator Functions', () => {
  test('add should return correct sum', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 3)).toBe(1);
  });

  test('subtract should return correct difference', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiply should return correct product', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('divide should return correct quotient', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
  });

  test('divide by zero should return Infinity', () => {
    expect(divide(5, 0)).toBe(Infinity);
  });
});

describe('Calculate Function', () => {
  beforeEach(() => {
    clearHistory();
  });

  test('calculate should return correct results and update history', () => {
    expect(calculate('+', 2, 3)).toBe(5);
    expect(calculate('-', 5, 2)).toBe(3);
    expect(calculate('*', 2, 3)).toBe(6);
    expect(calculate('/', 6, 3)).toBe(2);
  });

  test('calculate should handle invalid operations', () => {
    expect(calculate('%', 5, 2)).toBeNaN();
  });

  test('history should store calculations', () => {
    calculate('+', 2, 3);
    calculate('*', 4, 5);
    
    const history = getHistory();
    expect(history.length).toBe(2);
    expect(history[0]).toEqual({ operation: '+', a: 2, b: 3, result: 5 });
    expect(history[1]).toEqual({ operation: '*', a: 4, b: 5, result: 20 });
  });

  test('clearHistory should reset history', () => {
    calculate('-', 10, 5);
    clearHistory();
    expect(getHistory()).toEqual([]);
  });
});