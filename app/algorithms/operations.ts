type Operation = AccessOperation | ComparisonOperation;

interface AccessOperation {
	type: "access";
	index: number;
	number: number;
}

interface ComparisonOperation {
	type: "comparison";
	leftIndex: number;
	rightIndex: number;
}

export class Operations {
	private operations: Operation[];

	constructor() {
		this.operations = [];
	}

	createAccessOperation(index: number, number: number) {
		const operation: Operation = {
			type: "access",
			index,
			number,
		};

		this.operations.push(operation);
	}

	createComparisonOperation(leftIndex: number, rightIndex: number) {
		const operation: Operation = {
			type: "comparison",
			leftIndex,
			rightIndex,
		};

		this.operations.push(operation);
	}

	getOperations() {
		return this.operations;
	}
}
