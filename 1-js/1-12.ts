/**
 * #126 implements setInterval with setTimeout
 * 
 */
// function mySetInterval
export const mySetInterval = function (fn: Function, delay: number) {
  const timer = {
    tag: true
  }
  function callbackWrap () {
    if (timer.tag) {
      fn();
      setTimeout(callbackWrap, delay);
    }
  }
  setTimeout(callbackWrap, delay);
  return timer;
}

