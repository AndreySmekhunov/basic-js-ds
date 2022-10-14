const { NotImplementedError } = require('../extensions/index.js');



class Stack {
  constructor() {
    this.arr = []
  }
  push(el) {
    this.arr.push(el);
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    
    throw new NotImplementedError('Not implemented');
    return this.arr.pop();
    // remove line with error and write your code here
  }

  peek() {
  
    throw new NotImplementedError('Not implemented');
    return this.arr[this.arr.length - 1]
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
