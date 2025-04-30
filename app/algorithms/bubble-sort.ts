import { Operations } from "./operations";

export class BubbleSort {
	private numbers: number[];
	private operations: Operations;

	constructor(numbers: number[], operations: Operations) {
		this.numbers = numbers;
		this.operations = operations;
	}

	private swapElements(i: number, j: number) {
		this.operations.createAccessOperation(i, this.numbers[j]);
		this.operations.createAccessOperation(j, this.numbers[i]);
		[this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]];
	}

	private sort() {
		let sorted = false;
		let size = this.numbers.length - 1;

		while (!sorted) {
			sorted = true;

			for (let i = 0; i < size; i++) {
				this.operations.createComparisonOperation(i, i + 1);

				if (this.numbers[i] > this.numbers[i + 1]) {
					this.swapElements(i, i + 1);
					sorted = false;
				}
			}

			size--;
		}
	}

	execute() {
		this.sort();
	}
}
