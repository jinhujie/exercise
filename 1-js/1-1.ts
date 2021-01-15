/** #1 basic data type
 * @return: string(return by 'typeof' operator)[]
 */
export const basicDataType = () : string[] => {
  return [];
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
  return [];
}

export const setBuildInClass = () : any => {
  // make [[class]] of instance of MyClass toBe MyClass.name
  class MyClass{}
  return MyClass;
}