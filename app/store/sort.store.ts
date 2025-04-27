import { create } from "zustand";
import { SortableNumber, StateGenerator } from "../algorithms/state-generator";

interface SortState {
	arraySize?: string[];
	setArraySize: (arraySize: string[]) => void;

	algorithm?: string[];
	setAlgorithm: (algorithm: string[]) => void;

	numbers: SortableNumber[];
	setNumbers: (numbers: SortableNumber[]) => void;

	speed: number[];
	setSpeed: (speed: number[]) => void;

	started: boolean;

	handleStart: () => Promise<void>;
	handleStop: () => void;
	handleReset: () => void;
}

export const useSortStore = create<SortState>((set, get) => {
	return {
		arraySize: ["50"],
		setArraySize: (arraySize) => set({ arraySize }),

		algorithm: ["merge-sort"],
		setAlgorithm: (algorithm) => set({ algorithm }),

		speed: [100],
		setSpeed: (speed) => set({ speed }),

		numbers: [],
		setNumbers: (numbers) => set({ numbers }),

		started: false,

		handleReset: () => {
			const sizeStr = get().arraySize?.[0];
			if (!sizeStr) return;

			const size = parseFloat(sizeStr);

			const numbers: SortableNumber[] = Array.from(
				{ length: size },
				() => ({
					number: Math.ceil(Math.random() * size * 2),
					color: "red",
				})
			);

			set({ numbers });
		},

		handleStart: async () => {
			set({ started: true });

			const generator = new StateGenerator(
				get().numbers,
				get().algorithm!
			);

			const states = generator.generateStates();

			for (const { type, numbers } of states) {
				const started = get().started;

				if (started) {
					set({ numbers });
					await new Promise((resolve) =>
						setTimeout(resolve, 100 - get().speed[0] + 1)
					);
				}
			}

			get().handleStop();
		},

		handleStop: () => {
			set({ started: false });

			const numbers: SortableNumber[] = get().numbers.map(
				({ number }) => {
					return { number, color: "red" };
				}
			)!;

			set({ numbers });
		},
	};
});
