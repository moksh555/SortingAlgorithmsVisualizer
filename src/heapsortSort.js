import React from "react";

function heapSort(array) {
  const animations = [];
  heapsortHelper(array, animations);
  return animations;
}

function heapsortHelper(array, animations) {
  var N = array.length;

  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(array, N, i, animations);
  }

  for (let i = N - 1; i > 0; i--) {
    animations.push([0, i, i]);
    animations.push([0, array[i]]);
    animations.push([i, array[0]]);
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapify(array, i, 0, animations);
  }
}

function heapify(array, N, i, animations) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  animations.push([l, r, largest]);
  if (l < N && array[l] > array[largest]) {
    largest = l;
  }
  if (r < N && array[r] > array[largest]) {
    largest = r;
  }

  if (largest != i) {
    var swap = array[i];
    animations.push([i, array[largest]]);
    animations.push([largest, swap]);
    array[i] = array[largest];
    array[largest] = swap;
    heapify(array, N, largest, animations);
  } else {
    animations.push([i, array[i]]);
    animations.push([largest, array[largest]]);
  }
}

export default heapSort;
