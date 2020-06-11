var minDepth = function(root) {
    if (!root) return 0;
    var min = 9999;
    search(root, 1);
 
    function search(root, level) {
      if (root) {
        if (!root.left && !root.right) {
          if (min > level) min = level;
        }
        search(root.left, level + 1);
        search(root.right, level + 1);
      }
    }
 
    return min;
  }