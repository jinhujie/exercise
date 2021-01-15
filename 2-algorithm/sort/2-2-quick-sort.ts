import { swap, getRadomInit } from '../../utils/index';

function partion (nums: number[], start: number, end: number): number {
  if (start === end) {
    return start;
  }

  let radomIndex = getRadomInit(start, end);
  let leftIndex = start - 1;

  swap(nums, radomIndex, end);
  for (let i = start; i < end; i++) {
    if (nums[i] < nums[end]) {
      leftIndex++;
      if (leftIndex !== i) {
        swap(nums, i, leftIndex);
      }
    }
  }
  leftIndex++;
  swap(nums, leftIndex, end);
  return leftIndex;
}

function quickSortCore(nums: number[], start: number, end: number): number[] {
  if (start >= end) {
    return nums;
  }
  const index = partion(nums, start, end);
  if (start < index) {
    quickSortCore(nums, start, index - 1);
  }
  if(index < end) {
    quickSortCore(nums, index + 1, end);
  }
  return nums;
}

export default function quickSort(nums: number[]): number[] {

  return quickSortCore(nums, 0, nums.length - 1); 
}