const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class Queue {
//   // constructor() {
//   //   this.top = null
//   // }
  

//   getUnderlyingList() {
//     return this
//   }

//   enqueue(x) {
//     let el = new ListNode;
//     el.value = x;
//     el.next = this.next;
//     this.next = el
//   }

//   dequeue() {
//     if (this.next == null) return undefined;
//   let cur = this; 

//    while (true) {
//      if (cur.next.next == null) 
//      {
//        let result = cur.next.value;
//        cur.next = null;
//        return result;
//      }
//      else cur = cur.next;
//    }
//   }
 
// }




class Queue {
  constructor() {
    this.next = null
  }
  

  getUnderlyingList() {
    return this.next
  }

  enqueue(x) {
  let cur = this;
    while (cur.next !=null) {
      cur = cur.next;
    }

    
    cur.next = new ListNode(x);
  }

  dequeue() {
  if (this.next == null) return undefined;
  let result = this.next.value;
  this.next = this.next.next;
  return result  
    
  }
 
}

module.exports = {
  Queue
};
