import { myInstanceOf } from '../1-4';

test('1-49: expect {} myInstanceOf Object tobe true', () => {
  expect(myInstanceOf({}, Object))
  .toBe(true);
});

test('1-49: expect [] myInstanceOf Object tobe true', () => {
  expect(myInstanceOf([], Object))
  .toBe(true);
});

test('1-49: expect new MyClass() myInstanceOf MyClass tobe true', () => {
  function MyClass () {}
  expect(myInstanceOf(new MyClass, MyClass))
  .toBe(true);
});

test('1-49: expect "a" myInstanceOf Object tobe false', () => {
  expect(myInstanceOf('a', Object))
  .toBe(false);
});