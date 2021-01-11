const { bubbleSort, quickSort } = require('../1.ts')

test('bubble sort test 0', () => {
  expect(bubbleSort([5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3]))
    .toStrictEqual([2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9])
})

test('quick sort test 0', () => {
  expect(
    quickSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3])
  ).toStrictEqual([1, 3, 5, 6, 6, 7, 8, 9, 34, 76])
})
