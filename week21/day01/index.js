class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
    midElement(element) { 
    var current = this.head; 
    var prev = null; 
  
    
    while (current != null) { 
        if (current.element === element) { 
            if (prev == null) { 
                this.head = current.next; 
            } else { 
                prev.next = current.next; 
            } 
            this.size--; 
            return current.element; 
        } 
        prev = current; 
        current = current.next; 
    } 
    return -1; 
}
    
}
var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.printList();
console.log(ll.size_of_list());
console.log("mid value " + ll.midElement([1,2,3,4,5]));
