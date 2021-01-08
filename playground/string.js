/**
 * 修改string会创建新的实例
 */
function setString(){
  var str = 'aa';
  var str1 = str.toUpperCase();
  console.log(str === str1);
}

// setString();

/**
 * 替换空格
 */
(function repaceSpaceWtihASC2(){
  let str = 'we are happy';
  console.log(str.replace(/\s/g, '%20'));
  console.log(str.split(' ').join('%20'));
})();

/**
 * 排序的俩个数组A1,A2，将A2插入到A1中
 */
//从前向后插入需要不断移动后面的subArr
//先计算插入后数组长度，再从后向前插入较大的item