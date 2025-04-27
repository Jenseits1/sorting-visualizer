import { InsertionSort } from "./insertion-sort";
import { MergeSort } from "./merge-sort";
import { Operations } from "./operations";
import { QuickSort } from "./quick-sort";

export type SortArrayState = {
	type: "comparison" | "access" | null;
	numbers: SortableNumber[];
};

export type SortableNumber = {
	number: number;
	color: "red" | "white";
};

export class StateGenerator {
	private numbers: SortableNumber[];
	private algorithm: string;
	private operations: Operations;

	constructor(numbers: SortableNumber[], algorithm: string[]) {
		this.numbers = numbers;
		this.algorithm = algorithm[0];
		this.operations = new Operations();
	}

	private processOperations() {
		const numbers = this.numbers.map(({ number }) => number);

		switch (this.algorithm) {
			case "merge-sort":
				return new MergeSort(numbers, this.operations);
			case "quick-sort":
				return new QuickSort(numbers, this.operations);
			case "insertion-sort":
				return new InsertionSort(numbers, this.operations);
			default:
				return;
		}
	}

	public generateStates() {
		this.processOperations();

		const numbers = [...this.numbers];
		const states: SortArrayState[] = [];

		for (let operation of this.operations.getOperations()) {
			if (operation.type == "access") {
				numbers[operation.index].number = operation.number;
			}

			const newNumbers: SortableNumber[] = numbers.map(
				({ number, color }) => {
					return { number, color };
				}
			);

			if (operation.type == "comparison") {
				newNumbers[operation.leftIndex].color = "white";
				newNumbers[operation.rightIndex].color = "white";
			}

			states.push({ type: operation.type, numbers: newNumbers });
		}

		return states;
	}
}
