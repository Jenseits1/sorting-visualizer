import { BubbleSort } from "./bubble-sort";
import { InsertionSort } from "./insertion-sort";
import { MergeSort } from "./merge-sort";
import { Operations } from "./operations";
import { QuickSort } from "./quick-sort";
import { SelectionSort } from "./selection-sort";

export type StateNumber = {
	number: number;
	color: string;
};

export class StateGenerator {
	private numbers: StateNumber[];
	private algorithm: string;
	private operations: Operations;

	constructor(numbers: StateNumber[], algorithm: string[]) {
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
		const states: StateNumber[][] = [];

		for (const operation of operations) {
			if (operation.type == "swap") {
				[numbers[operation.left], numbers[operation.right]] = [
					numbers[operation.right],
					numbers[operation.left],
				];
			}

			if (operation.type == "write") {
				numbers[operation.index].number = operation.value;
			}

			const newNumbers: StateNumber[] = numbers.map(
				({ number, color }) => {
					return { number, color };
				}
			);

			if (operation.type == "comparison") {
				newNumbers[operation.left].color = "white";
				newNumbers[operation.right].color = "white";
			}

			states.push(newNumbers);
		}

		return states;
	}
}
