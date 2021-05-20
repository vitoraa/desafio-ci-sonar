const { sum, multiply, divide, subtract } = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 4 * 5 to equal 20', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('divide 10 / 5 to equal 2', () => {
  expect(divide(10, 5)).toBe(2);
});

test('subtract 10 - 5 to equal 5', () => {
  expect(subtract(10, 5)).toBe(5);
});