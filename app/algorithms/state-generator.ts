import { BubbleSort } from "./bubble-sort";
import { InsertionSort } from "./insertion-sort";
import { MergeSort } from "./merge-sort";
import { Operations } from "./operations";
import { QuickSort } from "./quick-sort";
import { SelectionSort } from "./selection-sort";

export type SortArrayState = {
	type: "comparison" | "access";
	numbers: SortableNumber[];
};

export type SortableNumber = {
	number: number;
	color: string;
};

export class StateGenerator {
	private numbers: SortableNumber[];
	private algorithm: string;
	private operations: Operations;

	constructor(numbers: SortableNumber[], algorithm: string[]) {
		this.numbers = [...numbers];
		this.algorithm = algorithm[0];
		this.operations = new Operations();
	}

	private chooseAlgorithm() {
		switch (this.algorithm) {
			case "merge-sort":
				return MergeSort;
			case "quick-sort":
				return QuickSort;
			case "insertion-sort":
				return InsertionSort;
			case "selection-sort":
				return SelectionSort;
			case "bubble-sort":
				return BubbleSort;
			default:
				return;
		}
	}

	private getOperations() {
		const numbers = this.numbers.map(({ number }) => number);
		const algorithm = this.chooseAlgorithm();

		if (!algorithm) {
			return [];
		}

		new algorithm(numbers, this.operations).execute();

		return this.operations.getOperations();
	}

	public generateStates() {
		const operations = this.getOperations();

		const numbers = [...this.numbers];
		const states: SortArrayState[] = [];

		let frequency = 0;

		for (const operation of operations) {
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

			states.push({
				type: operation.type,
				numbers: newNumbers,
			});
		}

		return states;
	}
}
