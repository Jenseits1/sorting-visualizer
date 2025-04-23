import { StateGenerator } from "../algorithms/state-generator";

self.onmessage = async (event) => {
	const { algorithm, arrayState } = event.data;
	const stateGenerator = new StateGenerator(arrayState, algorithm);
	const states = stateGenerator.generateStates();

	for (let state of states) {
		await new Promise((resolve) => setTimeout(resolve, 50));
		postMessage(state);
	}
};
