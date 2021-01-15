import {
  getBuildInClass,
  setBuildInClass,
} from '../1-1';

test('1-4: get [[class]] of instance', () => {
  expect(getBuildInClass().sort())
    .toEqual([
      '[object Function]',
      '[object Array]',
      '[object Object]',
      '[object RegExp]'
    ].sort())
})
test('1-4: proxy [[class]] of instance', () => {
  const myClass = setBuildInClass();
  expect(Object.prototype.toString.call(new myClass()))
    .toBe(`[object ${myClass.name}]`)
})