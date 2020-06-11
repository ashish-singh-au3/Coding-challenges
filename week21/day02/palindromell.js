class Node{
    constructor(d){
      this.next = null;
      this.data = d;
    }
    
    appendToTail(d){
      let end = new Node(d);
      let n = this;
      
      while(n.next !== null){
        n = n.next;
      }
      n.next = end;
    }
  }
  
  let header = new Node(4);
  header.appendToTail(1);
  header.appendToTail(2);
  header.appendToTail(3);
  header.appendToTail(4);
  
  
  console.log(header);
 
  
  function reverse(node){
    let head = null;  
      
    while(node !== null){
      let n = new Node(node.data);
      n.next = head
      head = n;
      node = node.next;
    }
    return head;
  }
  
  function isPalindrome(head){
    let reversed = reverse(head);
    return equalLists(head, reversed);
  }
  
  function equalLists(l1, l2){
    while(l1 !== null && l2 !== null){
      if(l1.data != l2.data){
        return false;
      }
      l1 = l1.next;
      l2 = l2.next;
    }
    return l1 == null && l2 == null;
  }
  
  function palindromeStacked(node){
    let fast = node;
    let slow = node;
    let stack = [];
    
    while(fast !== null && fast.next !== null){
      stack.push(slow.data);
      slow = slow.next;
      fast = fast.next.next;
    }
 
    if(fast !== null){
      slow = slow.next;
    }
    
    while(slow !== null){
      if(slow.data !== stack.pop()){
        return false;
      }
      slow = slow.next;
    }
    return true;
  }
  
  
  