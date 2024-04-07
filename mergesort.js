#!/usr/bin/env node

export { mergeSort };

function merge(leftArray, rightArray) {
  const mergeArray = [];
  let leftCount = 0;
  let rightCount = 0;

  while (leftCount < leftArray.length && rightCount < rightArray.length) {
    if (leftArray[leftCount] < rightArray[rightCount]) {
      mergeArray.push(leftArray[leftCount]);
      leftCount++;
    } else {
      mergeArray.push(rightArray[rightCount]);
      rightCount++;
    }
  }

  for (; leftCount < leftArray.length; leftCount++) {
    mergeArray.push(leftArray[leftCount]);
  }

  for (; rightCount < rightArray.length; rightCount++) {
    mergeArray.push(rightArray[rightCount]);
  }

  return mergeArray;
}

function mergeSort(array) {
  if (array.length > 1) {
    let mid = Math.round(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
  } else {
    return array;
  }
}
