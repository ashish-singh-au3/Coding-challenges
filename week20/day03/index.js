function levelOrderSuccessor(node) {
    if (!node) {
      return null;
    }
  
    if (node.right) {
      return leftMostChild(node.right);
    } else {
      var currentNode = node;

      var parentNode = currentNode.parent;
  
     
      while (parentNode && parentNode.left !== currentNode) {
        currentNode = parentNode;
        parentNode = parentNode.parent;
      }
  
      return parentNode;
    }
  }
  
  function leftMostChild(node) {
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node;
  }