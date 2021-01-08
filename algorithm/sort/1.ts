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

function quickSort(nums: number[]): number[] {

  return nums; 
}

module.exports = {
  bubbleSort,
  quickSort,
}
