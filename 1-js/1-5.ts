/**
 * #50 implement operator 'new', use like 'operatorNew(constructor, ...args)'
 */
export const operatorNew = (cons: Function, ...args):object => {
  if (typeof cons !== 'function') {
    throw new TypeError();
  }
  
  const obj = Object.create(cons.prototype);
  const res = cons.call(obj, [].slice.call(args, 1));

  return res && typeof res === 'object' ? res : obj;
}