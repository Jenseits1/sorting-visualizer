import { Operations } from "./operations";

export class InsertionSort {
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
			let j = i;

			while (j > 0) {
				this.operations.createComparisonOperation(j, j - 1);

				if (this.numbers[j] > this.numbers[j - 1]) {
					break;
				}

				this.swapElements(j, j - 1);
				j--;
			}
		}
	}

	execute() {
		this.sort();
	}
}
