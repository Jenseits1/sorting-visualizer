import { InsertionSort } from "./insertion-sort";
import { MergeSort } from "./merge-sort";
import { Operations } from "./operations";
import { QuickSort } from "./quick-sort";

export type ArrayState = {
	number: number;
	highlighted?: boolean;
}[];

export class StateGenerator {
	private arrayState: ArrayState;
	private algorithm: string;
	private operations: Operations;

	constructor(arrayState: ArrayState, algorithm: string[]) {
		this.arrayState = arrayState;
		this.algorithm = algorithm[0];
		this.operations = new Operations();
	}

	private processOperations() {
		const numbers = this.arrayState.map(({ number }) => number);

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

		const currState: ArrayState = [...this.arrayState];
		const states: ArrayState[] = [];

		for (let operation of this.operations.getOperations()) {
			if (operation.type == "access") {
				currState[operation.index].number = operation.number;
			}

			const newState = currState.map(({ number, highlighted }) => {
				return { number, highlighted };
			});

			if (operation.type == "comparison") {
				newState[operation.leftIndex].highlighted = true;
				newState[operation.rightIndex].highlighted = true;
			}

			states.push(newState);
		}

		return states;
	}
}
