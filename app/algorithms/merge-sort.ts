export class MergeSort implements SortAlgorithm {
	private numbers: number[];
	private temporary: number[];
	private operations: number[][];

	constructor(numbers: number[]) {
		this.numbers = numbers;
		this.temporary = [];
		this.operations = [];

		this.execute();
	}

	private merge(left: number, mid: number, right: number) {
		let i = left;
		let j = mid + 1;

		while (i <= mid && j <= right) {
			if (this.numbers[i] < this.numbers[j]) {
				this.temporary.push(this.numbers[i]);
				i++;
			} else {
				this.temporary.push(this.numbers[j]);
				j++;
			}
		}

		while (i <= mid) {
			this.temporary.push(this.numbers[i]);
			i++;
		}

		while (j <= right) {
			this.temporary.push(this.numbers[j]);
			j++;
		}

		let curr = right;

		while (this.temporary.length > 0) {
			const number = this.temporary.pop()!;
			this.numbers[curr] = number;
			this.saveOperation(curr, number);
			curr--;
		}
	}

	private saveOperation(index: number, number: number) {
		this.operations.push([index, number]);
	}

	private sort(left: number, right: number) {
		if (left == right) {
			return;
		}

		let mid = Math.floor((left + right) / 2);

		this.sort(left, mid);
		this.sort(mid + 1, right);

		this.merge(left, mid, right);
	}

	private execute() {
		this.sort(0, this.numbers.length - 1);
	}

	getOperations() {
		return this.operations;
	}
}
