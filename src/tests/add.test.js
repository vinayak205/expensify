const add = (a, b) => a + b;

test('Test add function', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});
