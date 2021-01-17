/**
 * #97 Function.prototype.call
 */
export const myCall = function (fn: Function, context: object, ...args) {
  
}

/**
 * #97 Function.prototype.apply
 */
export const myApply = function (fn: Function, context: object, args) {
  
}

/**
 * # 97 Function.protype.bind
 */
Function.prototype.myBind = function (context: object, ...args) {
  
}

/**
 * # 98 curry
 */
export const curry = function (fn: Function) {
  const innerArgs = [].slice.call(arguments, 1);

  return function () {
    const outterArgs = [].slice.call(arguments, 0);
    const args = [...innerArgs, ...outterArgs];
    
    if (args.length  >= fn.length) {
      return fn.apply(this, args);
    } else {
      return curry.call(this, fn, ...args)
    }
  }
}