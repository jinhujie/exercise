/**
 * 
 * @param {} front 
 * @param {*} mid 
 * @return endSort
 */
function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}
function createWithFrondMid (front, mid) {
  if(!front.length){
    return null;
  }
  let val = front[0];
  let node = new TreeNode(val);
  let index = mid.indexOf(val);
  
  node.left = createWithFrondMid(
    front.slice(1, index + 1),
    mid.slice(0, index)
  );
  node.right = createWithFrondMid(
    front.slice(index + 1),
    mid.slice(index + 1)
  );
  return node;
}

function endMap (node) {
  if(node){
    endMap(node.left);
    endMap(node.right);
    console.log(node.val);
  }
}

const bt = createWithFrondMid(
  [1,2,4,7,3,5,6,8],
  [4,7,2,1,5,3,8,6]
);
endMap(bt); //7,4,2,5,8,6,3,1

//d,b,h,e,i,a,f,c,g