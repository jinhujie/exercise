/**
 * #49 implements 'instanceOf' by yourself
 */
export const myInstanceOf = (left: any, right: Function): boolean => {
  if (!left || typeof left !== 'object'){
    return false;
  }

  let prototypeOfLeft = Object.getPrototypeOf(left),
    prototypeOfRight = right.prototype;

  while (prototypeOfLeft) {
    if (prototypeOfLeft === prototypeOfRight) {
      return true;
    } else {
      prototypeOfLeft = Object.getPrototypeOf(prototypeOfLeft);
    }
  }
  return false;
}
