import { curry } from '../1-9';

test('curry', () => {
  const abc = (a, b, c) => [a, b, c];
  const curried = curry(abc);
  expect(curried(1)(2)(3)).toStrictEqual([1,2,3]);
  expect(curried(1, 2)(3)).toStrictEqual([1,2,3]);
  expect(curried(1, 2, 3)).toStrictEqual([1,2,3]);
})