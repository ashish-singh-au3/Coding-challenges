function LinkedList () {
    this.head = null;
}
​
LinkedList.prototype.reverseLinkedList = function () {
​
  if (!this.head || !this.head.next) {
    console.log('No duplicate');
    return;
  }
  
  var p1 = null;
  var p2 = this.head;
  var p3;
​
  while (p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
​
  this.head = p1;
}
​
var L1 = new LinkedList();
​
L1.reverseLinkedList();
console.log(L1);
​
var L2 = new LinkedList();
L2.insertNodeAtTail(5);
​
L2.reverseLinkedList();
console.log(L2);
​
 
var L3 = new LinkedList();
L3.insertNodeAtTail(5);
L3.insertNodeAtTail(6);
​
L3.reverseLinkedList();
console.log(L3);
​
​
var L4 = new LinkedList();
var testData = [5,6,7,8,5];
testData.forEach(el => L4.insertNodeAtTail(el));
​
L4.reverseLinkedList();
console.log(L4);