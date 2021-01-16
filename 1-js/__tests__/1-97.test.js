import { myCall, myApply, myBind } from '../1-9';

test('1-97 called myCall with [fn, null]', () => {
  const fn = () => 2;
  expect(myCall(fn, null)).toBe(2);
})
test('1-97 called myCall with [fn, null]', () => {
  const fn = num => num;
  expect(myCall(fn, null)).toBe(undefined);
})
test('1-97 called myCall with [[].slice, [1,2], 1]', () => {
  expect(myCall(Array.prototype.slice, [1,2], 1))
    .toStrictEqual([2]);
})
test('1-97 called myCall with [fn, 1, "bar"]', () => {
  const fn = name => name;
  expect(myCall(fn, 1, 'bar'))
  .toBe('bar');
})
test('1-97 called myApply with [fn, null]', () => {
  const fn = () => 2;
  expect(myApply(fn, null)).toBe(2);
})
test('1-97 called myApply with [[].slice, null, 1]', () => {
  expect(() => myApply([].slice, null, 1))
    .toThrow(TypeError);
})
test('1-97 called myAply with [[].slice, [1,2,3,4], [1,3]]', () => {
  expect(myApply([].slice, [1,2,3,4], [1,3]))
    .toStrictEqual([2,3]);
})

test('1-97 mybind', () => {
  const person = {
    name: 'jay',
    say: function (text) {
      return `${this.name}: ${text}`;
    }
  };
  expect(person.say.myBind(person, 'hi')())
    .toBe(person.say.bind(person, 'hi')());

  expect(() => person.say.myBind(null, 'hi')())
    .toThrow(TypeError);
})