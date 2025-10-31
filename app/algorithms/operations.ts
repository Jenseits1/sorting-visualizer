type Operation = Swap | Comparison | Write;

interface Swap {
	type: "swap";
	left: number;
	right: number;
}

interface Comparison {
	type: "comparison";
	left: number;
	right: number;
}

interface Write {
	type: "write";
	index: number;
	value: number;
}

export class Operations {
	private operations: Operation[];

	constructor() {
		this.operations = [];
	}

	createSwapOperation(left: number, right: number) {
		const operation: Operation = {
			type: "swap",
			left,
			right,
		};

		this.operations.push(operation);
	}

	createComparisonOperation(left: number, right: number) {
		const operation: Operation = {
			type: "comparison",
			left,
			right,
		};

		this.operations.push(operation);
	}

	createWriteOperation(index: number, value: number) {
		const operation: Operation = {
			type: "write",
			index,
			value,
		};

		this.operations.push(operation);
	}

	getOperations() {
		return this.operations;
	}
}
