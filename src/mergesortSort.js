import React from "react";

function mergesort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxillaryArray = array.slice();
  mergesorthelper(array, 0, array.length - 1, auxillaryArray, animations);
  return animations;
}

function mergesorthelper(
  originalArray,
  startIdx,
  endIdx,
  auxillaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleidx = Math.floor((startIdx + endIdx) / 2);
  mergesorthelper(
    auxillaryArray,
    startIdx,
    middleidx,
    originalArray,
    animations
  );
  mergesorthelper(
    auxillaryArray,
    middleidx + 1,
    endIdx,
    originalArray,
    animations
  );
  doMergeSort(
    originalArray,
    startIdx,
    middleidx,
    endIdx,
    auxillaryArray,
    animations
  );
}

function doMergeSort(
  originalArray,
  startIdx,
  middleidx,
  endIdx,
  auxillaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleidx + 1;
  while (i <= middleidx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);

    if (auxillaryArray[i] <= auxillaryArray[j]) {
      animations.push([k, auxillaryArray[i]]);
      originalArray[k++] = auxillaryArray[i++];
    } else {
      animations.push([k, auxillaryArray[j]]);
      originalArray[k++] = auxillaryArray[j++];
    }
  }

  while (i <= middleidx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxillaryArray[i]]);
    originalArray[k++] = auxillaryArray[i++];
  }

  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxillaryArray[j]]);
    originalArray[k++] = auxillaryArray[j++];
  }
}

export default mergesort;
