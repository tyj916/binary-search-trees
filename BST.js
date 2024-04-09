import { mergeSort } from "./mergesort.js";

export { Tree };

function Node(data = null, left = null, right = null) {
  return {
    data,
    left,
    right,
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

function Tree(array = []) {
  const sortedArray = mergeSort(array);
  const cleanArray = removeDuplicate(sortedArray);
  let root = buildTree(cleanArray);

  function buildTree(array) {
    if (array.length == 0) return null;

    const mid = Math.floor(array.length / 2);
    let node = Node(array[mid]);
    node.left = buildTree(array.slice(0, mid));
    node.right = buildTree(array.slice(mid + 1));
    return node;
  }

  function toString() {
    prettyPrint(root);
  }

  function insert(value) {
    if (root == null) {
      root = Node(value);
      return;
    }

    let tmp = root;
    let parent = null;
    while (tmp) {
      parent = tmp;

      if (tmp.data > value) {
        tmp = tmp.left;
      } else if (tmp.data < value) {
        tmp = tmp.right;
      } else {
        return;
      }
    }

    if (parent.data > value) {
      parent.left = Node(value);
    } else {
      parent.right = Node(value);
    }
  }

  function find(value) {
    let tmp = root;
    
    while (tmp) {
      if (tmp.data === value) return tmp;

      if (tmp.data > value) {
        tmp = tmp.left;
      }
      if (tmp.data < value) {
        tmp = tmp.right;
      }
    }

    return null;
  }

  function deleteNode(node, value) {
    if (node == null) return node;

    if (node.data > value) {
      node.left = deleteNode(node.left, value);
      return node;
    }
    if (node.data < value) {
      node.right = deleteNode(node.right, value);
      return node;
    }

    // found target node, start removing
    // if target has no child
    if (node.left == null && node.right == null) {
      node = null;
      return node;
    }

    // if target has one child
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }

    // if target has both children 
    let parent = node;
    let child = node.right;
    while (child.left) {
      parent = child;
      child = parent.left;
    }

    if (parent !== node) {
      parent.left = child.right;
    } else {
      parent.right = child.right;
    }

    node.data = child.data;

    return node;
  }

  function deleteItem(value) {
    if (root == null) return;

    deleteNode(root, value);
  }

  function levelOrder(callback) {
    if (root == null) return [];

    const queue = [root];
    const array = [];

    while (queue.length > 0) {
      const node = queue.shift();

      if (callback && typeof callback == 'function') {
        callback(node);
      } else {
        array.push(node.data);
      }

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    if (!callback || typeof callback !== 'function') return array;
  }

  function levelOrderTraversal(queue, callback, array = []) {
    if (queue.length == 0) return;

    const node = queue.shift();
    if (callback && typeof callback == 'function') {
      callback(node);
    } else {
      array.push(node.data);
    }

    if (node.left != null) {
      queue.push(node.left);
    }
    if (node.right != null) {
      queue.push(node.right);
    }

    levelOrderTraversal(queue, callback, array);
    return array;
  }

  function levelOrderRecursion(callback) {
    if (root == null) return [];

    const array = levelOrderTraversal([root], callback);
    if (!callback || typeof callback !== 'function') return array;
  }

  function inOrderTraversal(node, callback, array = []) {
    if (node == null) return [];

    inOrderTraversal(node.left, callback, array);

    if (callback && typeof callback == 'function') {
      callback(node);
    } else {
      array.push(node.data);
    }

    inOrderTraversal(node.right, callback, array);

    return array;
  }

  function inOrder(callback) {
    return inOrderTraversal(root, callback);
  }

  function preOrderTraversal(node, callback, array = []) {
    if (node == null) return [];

    if (callback && typeof callback == 'function') {
      callback(node);
    } else {
      array.push(node.data);
    }

    preOrderTraversal(node.left, callback, array);
    preOrderTraversal(node.right, callback, array);

    return array;
  }

  function preOrder(callback) {
    return preOrderTraversal(root, callback);
  }

  function postOrderTraversal(node, callback, array = []) {
    if (node == null) return [];

    postOrderTraversal(node.left, callback, array);
    postOrderTraversal(node.right, callback, array);

    if (callback && typeof callback == 'function') {
      callback(node);
    } else {
      array.push(node.data);
    }

    return array;
  }

  function postOrder(callback) {
    return postOrderTraversal(root, callback);
  }

  return {
    root,
    toString,
    insert,
    find,
    deleteItem,
    levelOrder,
    levelOrderRecursion,
    inOrder,
    preOrder,
    postOrder,
  }
}
