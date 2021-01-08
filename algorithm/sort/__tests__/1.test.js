const { bubbleSort } = require('../1.ts')

test('bubble test 1', () => {
  expect(bubbleSort([5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3]))
    .toStrictEqual([2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9])
})
