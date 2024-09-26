import React from "react";

function insertionSort(array) {
  const animations = [];
  insertionSorthelper(array, animations);
  return animations;
}

function insertionSorthelper(array, animations) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      animations.push([j, i]);
      animations.push([j + 1, array[j]]);
      animations.push([j, key]);
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
}

export default insertionSort;
