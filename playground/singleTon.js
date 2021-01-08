/**
 * 延迟初始化
 * 缺点：单例模式的存在说明模块间耦合度高
 */
const singleTon = (() => {
  let ins = null;
  function init() {
    namespace = 'singleTon1';

    return {
      getNamespce: () => namespace,
    }
  }

  return {
    getInstance: () => {
      if(!ins){
        ins = init();
      }
      return ins;
    }
  }
})();

console.log(singleTon.getInstance().getNamespce());
console.log(singleTon.getInstance().getNamespce());