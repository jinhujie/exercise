function StackQueue(){
  this.stack1 = [];
  this.stack2 = [];
}
StackQueue.prototype.appendTail = function(val){
  this.stack1.push(val);
}
StackQueue.prototype.deleteHead = function(){
  if(this.stack2.length){
    return this.stack2.pop();
  }else{
    while(this.stack1.length){
      this.stack2.push(
        this.stack1.pop()
      );
    }
    return this.stack2.pop();
  }
}

let stQueue = new StackQueue();
console.log('out' ,stQueue.deleteHead());
console.log('in 1', stQueue.appendTail(1));
console.log('out', stQueue.deleteHead(), '\n');

console.log('in 2', stQueue.appendTail(2));
console.log('out', stQueue.deleteHead());
console.log('in 3', stQueue.appendTail(3));
console.log('in 4', stQueue.appendTail(4), '\n');

console.log('out', stQueue.deleteHead());
console.log('out', stQueue.deleteHead());