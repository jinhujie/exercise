import bubbleSort from '../2-1-bubble-sort';

test('bubble sort test 0', () => {
  expect(bubbleSort([5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3]))
    .toStrictEqual([2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9])
})
