import { Operations } from "./operations";

export class QuickSort {
	private numbers: number[];
	private operations: Operations;

	constructor(numbers: number[], operations: Operations) {
		this.numbers = numbers;
		this.operations = operations;
	}

	private getPivot(left: number, right: number) {
		const mid = Math.floor((left + right) / 2);
		this.swapElements(mid, right);

		return right;
	}

	private swapElements(i: number, j: number) {
		this.operations.createSwapOperation(i, j);

		[this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]];
	}

	private selectElements(left: number, right: number) {
		const pivot = this.getPivot(left, right);

		let curr = left;

		for (let i = left; i < right + 1; i++) {
			this.operations.createComparisonOperation(i, pivot);

			if (this.numbers[i] < this.numbers[pivot]) {
				this.swapElements(i, curr);

				curr++;
			}
		}

		this.swapElements(pivot, curr);

		return curr;
	}

	private sort(left: number, right: number) {
		if (left >= right) {
			return;
		}

		const mid = this.selectElements(left, right);

		this.sort(left, mid - 1);
		this.sort(mid + 1, right);
	}

	execute() {
		this.sort(0, this.numbers.length - 1);
	}
}
