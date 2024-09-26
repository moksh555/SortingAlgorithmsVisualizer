import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import mergesortSort from "./mergesortSort.js";
import insertionsortSort from "./insertionsortSort.js";
import heapsortSort from "./heapsortSort.js";
import "./App.css";
function App() {
  const MAX_TIMEOUT = 1;
  var startingArray = [];
  for (let i = 0; i < 300; i++) {
    var value = Math.floor(Math.random() * (600 - 10) + 10);
    startingArray.push(value);
  }

  const [array, setArray] = useState(startingArray);
  function generatingRandomArray() {
    var newArray = [];
    for (let i = 0; i < 300; i++) {
      var value = Math.floor(Math.random() * (600 - 10) + 10);
      newArray.push(value);
    }
    setArray(newArray);
  }

  function closingColor(animations, arraybars) {
    setTimeout(() => {
      for (let j = 0; j < array.length; j++) {
        setTimeout(() => {
          arraybars[j].style.backgroundColor = "purple";
        }, j * 1);
      }
    }, animations.length * MAX_TIMEOUT);
  }

  function sortingMergesort() {
    const animations = mergesortSort(array);
    var arraybars = document.getElementsByClassName("arrayBar");
    for (let i = 0; i < animations.length; i++) {
      const [first, second] = animations[i];
      if (i % 3 !== 2) {
        setTimeout(() => {
          arraybars[first].style.backgroundColor = "red";
          arraybars[second].style.backgroundColor = "red";
        }, i * MAX_TIMEOUT);
      } else {
        const [lastFirst, lastsecond] = animations[i - 1];
        setTimeout(() => {
          arraybars[lastFirst].style.backgroundColor = "aquamarine";
          arraybars[lastsecond].style.backgroundColor = "aquamarine";
          arraybars[first].style.height = `${second}px`;
        }, i * MAX_TIMEOUT);
      }
    }
    closingColor(animations, arraybars);
  }

  function sortingInsertionSort() {
    const animations = insertionsortSort(array);
    const arraybars = document.getElementsByClassName("arrayBar");
    for (let i = 0; i < animations.length; i++) {
      const [first, second] = animations[i];
      if (i % 3 === 0) {
        setTimeout(() => {
          arraybars[first].style.backgroundColor = "red";
          arraybars[second].style.backgroundColor = "red";
        }, i * MAX_TIMEOUT);
      } else if (i % 3 === 1) {
        setTimeout(() => {
          arraybars[first].style.backgroundColor = "aquamarine";
          arraybars[first].style.height = `${second}px`;
        }, i * MAX_TIMEOUT);
      } else {
        setTimeout(() => {
          arraybars[first].style.backgroundColor = "aquamarine";
          arraybars[first].style.height = `${second}px`;
        }, i * MAX_TIMEOUT);
      }
    }
    closingColor(animations, arraybars);
  }

  function sortingHeapSort() {
    const animations = heapsortSort(array);
    const arraybars = document.getElementsByClassName("arrayBar");
    for (let i = 0; i < animations.length; i++) {
      if (i % 3 === 0) {
        const [first, second, third] = animations[i];
        setTimeout(() => {
          arraybars[first].style.backgroundColor = "red";
          arraybars[second].style.backgroundColor = "red";
          arraybars[third].style.backgroundColor = "red";
        }, i * MAX_TIMEOUT);
      } else if (i % 3 === 1) {
        const [lastFirst, lastSecond, lastThird] = animations[i - 1];
        const [first, second] = animations[i];
        setTimeout(() => {
          arraybars[lastFirst].style.backgroundColor = "aquamarine";
          arraybars[lastSecond].style.backgroundColor = "aquamarine";
          arraybars[lastThird].style.backgroundColor = "aquamarine";
          arraybars[first].style.height = `${second}px`;
        }, i * MAX_TIMEOUT);
      } else {
        const [first, second] = animations[i];
        setTimeout(() => {
          arraybars[first].style.backgroundColor = "aquamarine";
          arraybars[first].style.height = `${second}px`;
        }, i * MAX_TIMEOUT);
      }
    }
    closingColor(animations, arraybars);
  }

  return (
    <div className="bigContainer">
      <div>
        <Header
          generate={generatingRandomArray}
          sortingMergesort={sortingMergesort}
          sortingInsertionSort={sortingInsertionSort}
          sortingHeapSort={sortingHeapSort}
        />
      </div>
      <div className="container">
        {array.map((element) => {
          return (
            <div
              className="arrayBar"
              style={{
                backgroundColor: "aquamarine",
                height: `${element}px`,
              }}
            ></div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
