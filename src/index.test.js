const { sum, multiply } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 4 * 5 to equal 20', () => {
  expect(multiply(4, 5)).toBe(20);
});