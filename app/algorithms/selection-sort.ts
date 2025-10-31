import { Operations } from "./operations";

export class SelectionSort {
	private numbers: number[];
	private operations: Operations;

	constructor(numbers: number[], operations: Operations) {
		this.numbers = numbers;
		this.operations = operations;
	}

	private swapElements(i: number, j: number) {
		this.operations.createSwapOperation(i, j);

		[this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]];
	}

	private sort() {
		for (let i = 0; i < this.numbers.length; i++) {
			let smallestIndex = i;

			for (let j = i + 1; j < this.numbers.length; j++) {
				this.operations.createComparisonOperation(i, j);

				if (this.numbers[j] < this.numbers[smallestIndex]) {
					smallestIndex = j;
				}
			}

			this.swapElements(i, smallestIndex);
		}
	}

	execute() {
		this.sort();
	}
}
