import { Tree } from "./BST.js";

// Driver script
(function () {
  const array = [];
  for (let i = 0; i < Math.floor(Math.random() * 90 + 10); i++) {
    array.push(Math.round(Math.random() * 100));
  }

  const tree = Tree(array);
  console.log('Is the tree balanced?');
  console.log(tree.isBalanced());
  console.log('Level order print:');
  console.log(tree.levelOrder());
  console.log('Pre order print:');
  console.log(tree.preOrder());
  console.log('Post order print:');
  console.log(tree.postOrder());
  console.log('In order print:');
  console.log(tree.inOrder());
  console.log('Adding some elements to unbalance the tree...')
  for (let i = 0; i < 10; i++) {
    tree.insert(Math.round(Math.random() * 100 + 100));
  }
  console.log('Is the tree balanced now?');
  console.log(tree.isBalanced());
  console.log('Now balance the tree.');
  console.log('Balancing tree...')
  tree.rebalance();
  console.log('Is the tree balanced now?');
  console.log(tree.isBalanced());
  console.log('Level order print:');
  console.log(tree.levelOrder());
  console.log('Pre order print:');
  console.log(tree.preOrder());
  console.log('Post order print:');
  console.log(tree.postOrder());
  console.log('In order print:');
  console.log(tree.inOrder());
})();

/** Test script

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
console.log(tree.preOrder());
console.log(tree.postOrder());
tree.insert(29);
tree.insert(31);
tree.insert(32);
tree.insert(33);
tree.insert(34);
tree.toString();
console.log(tree.height(tree.find(134)));
console.log(tree.depth(tree.find(34)));
console.log(tree.isBalanced());
console.log('balancing...');
tree.rebalance();
console.log(tree.isBalanced());
tree.toString();

 */
