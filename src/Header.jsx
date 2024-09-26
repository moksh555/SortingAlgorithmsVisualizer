import React from "react";
import "./App.css";

function Header(props) {
  return (
    <div className="header">
      <button
        className="generateButton"
        onClick={() => {
          props.generate();
        }}
      >
        Generate Array
      </button>
      <div class="slidecontainer">
        <label>Time</label>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          id="myRange"
        />
      </div>
      <div className="rightButtons">
        <button
          onClick={() => {
            props.sortingMergesort();
          }}
        >
          Merge Sort
        </button>
        <button
          onClick={() => {
            props.sortingInsertionSort();
          }}
        >
          Insertion Sort
        </button>
        <button
          onClick={() => {
            props.sortingHeapSort();
          }}
        >
          Heap Sort
        </button>
      </div>
    </div>
  );
}

export default Header;
