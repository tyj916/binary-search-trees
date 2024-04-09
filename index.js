import { Tree } from "./BST.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = Tree(array);
tree.insert(15);
tree.deleteItem(8);
console.log(tree.find(7));
tree.levelOrderRecursion((node) => {
  node.data *= 2;
});
console.log(tree.levelOrder());
console.log(tree.levelOrderRecursion());
tree.toString();
console.log(tree.inOrder());