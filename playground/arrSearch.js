/**
 * 每一行递增，每一列递增
 */
const arrSearch = (arr, k) => {
  if(!(arr instanceof Array) || !(arr[0] instanceof Array)){
    return false;
  }
  let i = 0;
  let j = arr[0].length;


  while(j > -1 && i < arr.length){
    if(arr[i][j] === k){
      return true;
    }else if(arr[i][j] > k){
        i += 1;
    }else{
        j -= 1;
    }
  }
  return false;
}
console.log(
  arrSearch(0)
);
console.log(
  arrSearch([[], []], 2)
  );
console.log(
  arrSearch([[0, 1, 2], [2, 3, 4]], 5)
    )
console.log(
  arrSearch([[0, 1, 2], [2, 3, 4]], 2)
      );