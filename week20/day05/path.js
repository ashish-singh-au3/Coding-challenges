const Deque = require("collections/deque");

class treeNode{
    constructor(){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function findPath(currentNode , sum ,currentPath, allPaths){
    if(currentNode === null)
    return;
    currentPath.push(currentNode.val);

    if(currentNode.val === sum && currentNode.left === null && currentNode.right === null){
        allPaths.push(currentPath.toArray());
    }
    else{
        findPath(currentNode.left, sum-currentNode.val,currentPath,allPaths);

        findPath(currentNode.right, sum-currentNode.val,currentPath,allPaths);
    }
    currentPath.pop();
}

function findP(root,sum){
    let allPaths = [];
    findPath(root,sum,new Deque(), allPaths);
    return allPaths;
}
const root = new treeNode(12);
root.left = new treeNode(5);
root.right = new treeNode(7);
root.left.left = new treeNode(3);
root.right.left = new treeNode(1);
root.right.right = new treeNode(2);

let result = findP(root,20);
console.log(result);