/**
 * 矩阵中路径
 * 每个点可以上下左右移动一格，不可以访问已经访问过的单元
 */
function hasPathCore(arr, visited, i, j, path){
  if(
    !(i > -1 && i < arr.length) ||
    !(j > -1 && j < arr[0].length) ||
    visited[i][j] ||
    arr[i][j] !== path[0]
  ){
    return false;
  }
  if(path.length === 1){
    return true;
  }
  visited[i][j] = true;
  if(
    hasPathCore(arr, visited, i + 1, j, path.slice(1)) ||
    hasPathCore(arr, visited, i - 1, j, path.slice(1)) ||
    hasPathCore(arr, visited, i, j + 1, path.slice(1)) ||
    hasPathCore(arr, visited, i, j - 1, path.slice(1))
  ){
    return true;
  }
  //递归完成，没有匹配路径，那么该点对于其他搜索是可见的
  //这种实现避免了visited的clone和传递
  visited[i][j] = false;
  return false;
}
function hasPath(arr, path){
  if(!arr || typeof arr !== 'object' || !arr.length){
    return false;
  }
  if(!path){
    return false;
  }
  const visited = new Array(arr.length);
  const column = arr[0].length;

  for(let i = 0; i < visited.length; i++){
    visited[i] = new Array(column).fill(false);
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(hasPathCore(arr, visited, i, j, path)){
        return true;
      }
    }
  }
  return false;
}
// console.log(
//   null,
//   hasPath(
//     [
//       ['a', 'b', 't', 'g'], 
//       ['c', 'f', 'c', 's'], 
//       ['j', 'd', 'e', 'h']
//     ], 'bfce'
//   ),
//   hasPath(
//     [
//       ['a', 'b', 't', 'g'], 
//       ['c', 'f', 'c', 's'], 
//       ['j', 'd', 'e', 'h']
//     ], 'abfg'
//   ),
//   hasPath(
//     [
//       ['a', 'b', 't', 'g'], 
//       ['c', 'f', 'c', 's'], 
//       ['j', 'd', 'e', 'h']
//     ], 'abfb'
//   ),
//   hasPath(
//     [
//       ['a', 'b', 't', 'g'], 
//     ], 'ab'
//   ),
//   hasPath(
//     [
//       ['a', 'a', 'a', 'a'], 
//     ], 'a'
//   ),
// );

/**
 * matrix[m,n], 从0，0开始移动，不能进入行列位数之和为K。
 * 可以进入多少个格子
 */
function movingCount(matrix, k){
  
}
function movingCountDFS(matrix, visited, count){

}

console.log(
  movingCount(null, 2),
  movingCount([[1,1,1,1]], 3),
  movingCount([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]], 4)
);
