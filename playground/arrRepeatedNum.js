/**
 * 
 * arr[i] >= 0 || arr[i] <= arr.len
 * 遍历数组：不在自己座位上则和目标位置互换
 */
const arrRepeatedNum = (arr) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0 || arr[i] > arr.length - 1){
      return false;
    }
  }
  for(let i = 0; i < arr.length; i++){
    while(arr[i] !== i){
      if(arr[arr[i]] === arr[i]){
        return arr[i];
      }
      let temp = arr[i];
      arr[i] = arr[temp];
      arr[temp] = temp;
    }
  }
  return false;
}

// console.log(arrRepeatedNum([2,3,1,0,2,5,3]));
// console.log(arrRepeatedNum([0,1,2]));
// console.log(arrRepeatedNum([2,3,1]));

/**
 * 
 */
const arrRepeatedNum1 = arr => {
  let start = 1;
  let end = arr.length - 1;
  if(!(arr instanceof Array)){
    return -1;
  }
  while(start <= end){
    let mid = ((start + end) / 2) | 0;
    let count = countRange(arr, start, mid);
    console.log(arr, start, end, count);
    if(start === end){
      if(count > 1){
        return start;
      }else{
        break;
      }
    }
    if(count > (mid - start + 1)){
      end = mid;
    }else{
      start = mid + 1;
    }
  }
  return -1;
}

const countRange = (arr, start, end) => {
  let count = 0;
  arr.forEach(num => {
    if(
      num >= start &&
      num <= end
    ){
      count++;
    }
  });
  return count;
}

console.log(arrRepeatedNum1(0));
console.log(arrRepeatedNum1([0,1,2]));
console.log(arrRepeatedNum1([1,1,2]));