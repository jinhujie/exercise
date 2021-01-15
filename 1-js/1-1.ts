/** #1 basic data type
 * @return: string(return by 'typeof' operator)[]
 */
export const basicDataType = () : string[] => {
  return ['number', 'boolean', 'null', 'undefined', 'string', 'symbol', 'bigint'];
}

/**
 * #2, #3 how variables are stored in memory
 * https://jinhujie.github.io/blogs/javascript-stack.html
 */

 /**
  * #4 What's the [[class]] and how to get and set
  */
export const getBuildInClass = () : string[] => {
  // return [[class]] of intances of box 
  class MyClass{}
  const box = [/^a/, MyClass, [], new MyClass()];
  return box.map(i => Object.prototype.toString.call(i));
}

export const setBuildInClass = () : any => {
  // make [[class]] of instance of MyClass toBe MyClass.name
  class MyClass{
    get [Symbol.toStringTag]() {
      return MyClass.name;
    }
  }
  return MyClass;
}