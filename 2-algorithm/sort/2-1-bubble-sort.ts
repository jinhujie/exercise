import { swap } from '../../utils/index';

export default function bubbleSort(nums: number[]): number[] {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n -1 - i; j++){
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
  return nums
}
