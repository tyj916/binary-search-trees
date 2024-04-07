import { mergeSort } from "./mergesort.js";

export { Tree };

function Node(data = null, left = null, right = null) {
  return {
    data,
    left,
    right,
  }
}

function Tree(array) {
  const sortedArray = mergeSort(array);
  const cleanArray = removeDuplicate(sortedArray);
  const root = buildTree(cleanArray);

  function buildTree(array = []) {
    if (array.length == 0) return null;

    const mid = Math.floor(array.length / 2);
    const node = Node(array[mid]);
    node.left = buildTree(array.slice(0, mid));
    node.right = buildTree(array.slice(mid + 1));
    return node;
  }

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return {
    root,
    prettyPrint,
  }
}

function removeDuplicate(array) {
  const newArray = [];
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}
