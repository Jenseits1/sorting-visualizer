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

		let index = right;

		while (this.temporary.length > 0) {
			const value = this.temporary.pop()!;

			this.numbers[index] = value;

			this.operations.createWriteOperation(index, value);
			index--;
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
