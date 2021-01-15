import { operatorNew } from '../1-5';

test('1-50 called operatorNew("")', () => {
  expect(() => operatorNew('')).toThrow(TypeError)
});
test('1-50 called operatorNew(() => ())', () => {
  function Foo(){}
  expect(operatorNew(Foo)).toStrictEqual(new Foo());
});
test('1-50 called operatorNew(() => null)', () => {
  function Foo(){
    return null;
  }
  expect(operatorNew(Foo)).toStrictEqual(new Foo());
  expect(operatorNew(Foo) instanceof Foo).toBe(true);
})
test('1- 50 called operatorNew(() => {name: "jay"})', () => {
  function Foo() {
    return { name: 'jay'}
  }
  Foo.prototype.say = () => 'hi';
  expect(operatorNew(Foo)).toStrictEqual(new Foo());
  expect(operatorNew(Foo) instanceof Foo).toBe(false);
  expect(() => operatorNew(Foo).say()).toThrow(TypeError);
})
test('1- 50 called operatorNew((name) => this.name = name)', () => {
  function Foo() {
    this.name = 'jay';
  }
  expect(operatorNew(Foo, 'jay')).toStrictEqual(new Foo());
})