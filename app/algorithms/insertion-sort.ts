import { Operations } from "./operations";

export class InsertionSort {
	private numbers: number[];
	private operations: Operations;

	constructor(numbers: number[], operations: Operations) {
		this.numbers = numbers;
		this.operations = operations;

		this.execute();
	}

	private swapElements(i: number, j: number) {
		this.operations.createComparisonOperation(i, j);

		this.operations.createAccessOperation(i, this.numbers[j]);
		this.operations.createAccessOperation(j, this.numbers[i]);
		[this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]];
	}

	private sort() {
		for (let i = 0; i < this.numbers.length; i++) {
			let j = i;

			while (j > 0 && this.numbers[j] < this.numbers[j - 1]) {
				this.swapElements(j, j - 1);
				j--;
			}
		}
	}

	private execute() {
		this.sort();
	}

	getOperations() {
		return this.operations;
	}
}
