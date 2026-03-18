# Sorting Algorithms Visualizer

An interactive web application that animates three classic sorting algorithms in real time. Built with React 18 and Vite, it renders a bar chart of 300 randomly generated values and visually steps through each comparison and swap as the algorithm runs. A speed slider lets you control how fast the animations play.

Live Demo: https://mokshvaghasia.com/SortingAlgorithmsVisualizer/

## Key Features

- **Three Sorting Algorithms** - Merge Sort, Insertion Sort, and Heap Sort are each implemented from scratch and return an animations array that drives the visualization
- **Real-time Bar Chart Animation** - 300 vertical bars represent the array; comparison pairs turn red, swapped values update in height, and sorted bars turn aquamarine as the algorithm progresses
- **Adjustable Animation Speed** - A MUI Slider (range 1-20) controls the setTimeout delay between animation frames in real time
- **Random Array Generation** - A "Generate New Array" button resets the visualization with a fresh set of 300 random values between 10 and 500
- **Algorithm-specific Color Coding** - Comparison bars highlight red, then transition to aquamarine after each swap; on completion the full array sweeps to purple to signal sort completion
- **Component-based Architecture** - Header handles controls and algorithm selection; Footer displays credits; Slidebar encapsulates the speed control

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 18, Vite |
| UI Components | MUI (Material UI v6) - Slider, Typography, Box |
| Styling | Custom CSS (App.css, Slidebar.css) |
| Algorithms | Merge Sort, Insertion Sort, Heap Sort (custom JS implementations) |
| Linting | ESLint with react-hooks and react-refresh plugins |

## Sorting Algorithm Implementations

| Algorithm | File | Approach |
|---|---|---|
| Merge Sort | src/mergesortSort.js | Recursive divide-and-conquer with auxiliary array; O(n log n) |
| Insertion Sort | src/insertionsortSort.js | In-place iterative; O(n^2) worst case |
| Heap Sort | src/heapsortSort.js | Max-heap with recursive heapify; O(n log n) |

## Setup and Installation

Prerequisites: Node.js 18+ and npm.

1. Clone the repository:
   ```bash
   git clone https://github.com/moksh555/SortingAlgorithmsVisualizer.git
   cd SortingAlgorithmsVisualizer
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
```

## Usage

1. Click **Generate New Array** to create a new random dataset
2. Adjust the **Speed** slider to set the animation pace (1 = slowest, 20 = fastest)
3. Click **Merge Sort**, **Insertion Sort**, or **Heap Sort** to start the visualization
4. Watch the bars animate through comparisons (red) and swaps (aquamarine) until all bars turn purple
