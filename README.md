# Sort no Jutsu ⚡️ - Sorting Visualizer App 📊

Sort no Jutsu is a powerful and interactive sorting visualizer app that allows you to explore various sorting algorithms and see them in action! With real-time control and optimized animation, it provides an engaging way to understand how algorithms sort data. Whether you're a beginner or an advanced learner, this tool is perfect for visualizing the inner workings of sorting algorithms like Merge Sort, Quick Sort, and more. 💡

## ✨ Features ✨

- **Multiple Sorting Algorithms 🧠:**
    - Visualize popular sorting algorithms: **Merge Sort**, **Quick Sort**, **Selection Sort**, and more!
- **Real-time Speed Control ⚡️:**
    - Adjust the speed of the algorithm visualization in real-time to better understand each step.
- **Dynamic Array Size Control 📏:**
    - Choose the size of the array to sort, from small to large datasets, for more accurate visualizations.
- **Start/Stop Controls ⏸️:**
    - Pause and resume the visualization at any time to examine specific steps or slow down the process for a deeper understanding.
- **Randomized Array Generation 🔀:**
    - Generate a new randomized array with the click of a button to see the algorithm work on different datasets.
- **Optimized Canvas Animation 🖼️:**
    - The visualization is highly optimized, delivering smooth animations and ensuring up to 200+ frames per second.
- **Progress Bar 📊:**
    - A progress bar displays the current progress of the algorithm, helping you track how far along the sorting process is.

## 🛠️ Technologies Used 🛠️

- **HTML5 Canvas 🎨:** For rendering high-performance animations of sorting algorithms.
- **JavaScript 📝:** Core language used to implement sorting algorithms and animation controls.
- **CSS3 🌈:** For creating a clean and responsive UI with smooth transitions and controls.
- **Web APIs 🔌:** For handling user interactions and real-time updates of the sorting visualization.

## 🚀 Getting Started 🚀

### 📋 Prerequisites 📋

- A modern web browser (Chrome, Firefox, Safari, etc.) 🌐

### ⬇️ Installation ⬇️

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2. Open the `index.html` file in your browser.

### 🏃 Running the Application 🏃

1. Open the project folder and open the `index.html` file in your browser.
2. Enjoy exploring different sorting algorithms with real-time speed control, randomized arrays, and optimized visualizations!

## 📝 Code Example 📝

Here’s a basic structure of the sorting algorithm:

```javascript
import { Operations } from "./operations";

export class MergeSort {
	private numbers: number[];
	private temporary: number[];
	private operations: Operations;

	constructor(numbers: number[], operations: Operations) {
		this.numbers = numbers;
		this.temporary = [];
		this.operations = operations;
	}

	private merge(left: number, mid: number, right: number) {
		let i = left;
		let j = mid + 1;

		while (i <= mid && j <= right) {
			this.operations.createComparisonOperation(i, j);

			if (this.numbers[i] < this.numbers[j]) {
				this.temporary.push(this.numbers[i]);
				i++;
			} else {
				this.temporary.push(this.numbers[j]);
				j++;
			}
		}

		while (i <= mid) {
			this.operations.createComparisonOperation(i, i);
			this.temporary.push(this.numbers[i]);
			i++;
		}

		while (j <= right) {
			this.operations.createComparisonOperation(j, j);
			this.temporary.push(this.numbers[j]);
			j++;
		}

		let curr = right;

		while (this.temporary.length > 0) {
			const number = this.temporary.pop()!;
			this.numbers[curr] = number;
			this.operations.createAccessOperation(curr, number);
			curr--;
		}
	}

	private sort(left: number, right: number) {
		if (left == right) {
			return;
		}

		const mid = Math.floor((left + right) / 2);

		this.sort(left, mid);
		this.sort(mid + 1, right);

		this.merge(left, mid, right);
	}

	execute() {
		this.sort(0, this.numbers.length - 1);
	}
}
```
