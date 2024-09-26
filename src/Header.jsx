import React from "react";
import "./App.css";
import Slidebar from "./Slidebar";
import { Slide } from "@mui/material";
function Header(props) {
  function onChange(value) {
    props.maxTimeout(value);
  }
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
      <Slidebar change={onChange} />
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
