export const swap = function (arr, i, j): void {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

export const getRadomInit = function (min: number, max: number): number {
  const minInt = Math.ceil(min);
  const maxInt = max | 0;

  return (Math.random() * (maxInt - minInt) | 0) + minInt;
}
