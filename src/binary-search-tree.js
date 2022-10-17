const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  consructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
  root() {
    if (this.data == null) return null;
    return this
  }

  add(x) {
    if (this.data == null) { this.data = x; return}
      let cur = this;
      let el = new BinarySearchTree();
      el.data = x;
  
      while (true) {
        if (! cur) { cur = el; return }
        if (x < cur.data) 
            if (cur.left) cur = cur.left  
            else {cur.left = el; return}
        else if (cur.right) cur = cur.right
            else cur.right = el; return;     
      }
  }


  has(x) {
    
    let cur = this;
    let left;
    let right;
    let data;
    while (true) {
      if (x == cur.data) return true;
        left = cur.left;
        right = cur.right;
        data = cur.data;
        if (x < data) {
          if (left) cur = cur.left
          else return false;
          }
        if (x > data) {
          if (right) cur = cur.right
          else return false;
        }
        }
  }

  find(x) {
    let cur = this;
    let left;
    let right;
    let data;
    while (true) {
      if (x == cur.data) return cur;
        left = cur.left;
        right = cur.right;
        data = cur.data;
        if (x < data) {
          if (left) cur = cur.left
          else return null;
          }
        if (x > data) {
          if (right) cur = cur.right
          else return null;
        }
        }
  }

  remove(x) {
   let cur = this.find(x)
   cur = null;
  }

  min() {
    let cur = this;
    while (cur.left) cur = cur.left;
    return cur.data;
  }

  max() {
    let cur = this;
    while (cur.right) cur = cur.right;
    return cur.data;
  }
}

module.exports = {
  BinarySearchTree
};