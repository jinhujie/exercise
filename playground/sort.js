//插入排序
//冒泡排序
//归并排序
//快速排序

//quick sort
function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
/**
 * subject: 随机选择范围内item，将item移动至index，index左边小于item，右边大于index
 * 随机生成index，将arr[index] swap 至end
 * p_small = -1,发现小于arr[end]的元素p_small++
 *    if p_small !== i(loop index), swap(i, p_small)
 * loop over
 *    p_small++, swap(end, p_small)
 * 将arr分成小于和大于p_small的俩部分
 * return p_small
 */
function partition(arr, start, end){
  let index = start;
  swap(arr, index, end);
  let small = start - 1;
  for(index = start; index < end; index++){
    if(arr[index] < arr[end]){
      small++;
      if(small !== index){
        swap(arr, small, index);
      }
    }
  }
  small++;
  swap(arr, small, end);
  return small;
} 

function QuickSort1(arr, start, end){
  if(start === end){
    return;
  }
  let index = partition(arr, start, end);
  if(index > start){
    QuickSort1(arr, start, index - 1);
  }
  if(index < end){
    QuickSort1(arr, index + 1, end);
  }
  return arr;
}
console.log(
  QuickSort1([2,3,1,5,6,8], 0, 5)
);
