import quickSort from '../2-2-quick-sort';

test('quick sort test 0', () => {
  expect(
    quickSort([1, 34, 5, 76, 8, 10, 9, 7, 6, 3])
  ).toStrictEqual([1, 3, 5, 6, 7, 8, 9, 10, 34, 76])
})