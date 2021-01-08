/**
 * 递增序列的旋转数组的最小数字
 * {3,4,5,1,2}
 * 被旋转的sub小于另外一部分
 */

function minOfRotateArray(arr){
  if(!arr || typeof arr !== 'object' || !arr.length){
    return false;
  }

  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let midIndex = (left + right) / 2 | 0;
    let midValue = arr[midIndex];
    if(midValue > arr[left]){
      left = midIndex + 1;
    }else if(midValue < arr[left]){
      right = midIndex;
    }else if(midValue === arr[left]){
      if(midValue >= arr[right]){
        left = midIndex + 1;
      }else if(midValue < arr[right]){
        right = midIndex;
      }
    }
  }
  return arr[left];
}
console.log(
  minOfRotateArray(null),
  minOfRotateArray([1]),
  minOfRotateArray([3,4,5,1,2]),
  minOfRotateArray([1,1,1,0,1])
);
