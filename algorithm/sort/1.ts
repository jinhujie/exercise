import { swap, getRadomInit } from '../../utils/index';

function bubbleSort(nums: number[]): number[] {
  let n = nums.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let t = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = t
      }
    }
  }
  return nums
}

function partition(nums: number[], start: number, end: number): number {
  if (start >= end) {
    return -1;
  }
  let index = start - 1;
  let radomIndex = getRadomInit(start, end);
  swap(nums, radomIndex, end);
  for(let i = start; i < end; i++) {
    if(nums[i] < nums[end]) {
      index++;
      if(index !== i) {
        swap(nums, index, i);
      }
    }
  }
  index++;
  swap(nums, index, end);
  return index;
}

function quickSortCore(nums: number[], start: number, end: number): number[] {
  if (start >= end) {
    return nums;
  }
  let index = partition(nums, start, end);
  if (index > start) {
    quickSortCore(nums, start, index - 1);
  }
  if (index < end) {
    quickSortCore(nums, index + 1, end);
  }
  return nums;
}

function quickSort(nums: number[]): number[] {
  return quickSortCore(nums, 0, nums.length - 1);  
}

module.exports = {
  bubbleSort,
  quickSort,
}
