import { MergeSort } from "./merge-sort";

export type ArrayState = {
	number: number;
}[];

export class StateGenerator {
	private arrayState: ArrayState;
	private algorithm: string;

	constructor(arrayState: ArrayState, algorithm: string[]) {
		this.arrayState = arrayState;
		this.algorithm = algorithm[0];
	}

	private selectAlgorithm(): SortAlgorithm {
		const numbers = this.arrayState.map(({ number }) => number);

		switch (this.algorithm) {
			case "merge-sort":
				return new MergeSort(numbers);
			default:
				throw new Error("unknown sorting algorithm type");
		}
	}

	public getStates() {
		const algorithm = this.selectAlgorithm();
		const operations = algorithm.getOperations();

		const currState: ArrayState = [...this.arrayState];
		const states: ArrayState[] = [];

		for (let [index, number] of operations) {
			currState[index] = { number };
			states.push([...currState]);
		}

		return states;
	}
}
