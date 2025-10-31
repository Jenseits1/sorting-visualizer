import { create } from "zustand";
import { StateGenerator, StateNumber } from "../algorithms/state-generator";

interface SortState {
	delay: number[];
	setDelay: (speed: number[]) => void;

	size: number[];
	setSize: (size: number[]) => void;

	algorithm?: string[];
	setAlgorithm: (algorithm: string[]) => void;

	numbers: StateNumber[];
	setNumbers: (numbers: StateNumber[]) => void;

	progress: number;
	maxProgress: number;

	started: boolean;

	handleStart: () => Promise<void>;
	handleStop: () => void;
	handleReset: () => void;
}

export const useSortStore = create<SortState>((set, get) => {
	return {
		size: [10],
		setSize: (size) => set({ size }),

		algorithm: ["merge-sort"],
		setAlgorithm: (algorithm) => set({ algorithm }),

		delay: [10],
		setDelay: (delay) => set({ delay }),

		numbers: [],
		setNumbers: (numbers) => set({ numbers }),

		progress: 0,
		maxProgress: 0,

		started: false,

		handleReset: () => {
			const size = get().size[0];

			const numbers: StateNumber[] = Array.from({ length: size }, () => ({
				number: Math.random(),
				color: "#B22222",
			}));

			set({ numbers });
		},

		handleStart: async () => {
			set({ started: true });

			const generator = new StateGenerator(
				get().numbers,
				get().algorithm!
			);

			const states = generator.generateStates();

			set({ progress: 0 });
			set({ maxProgress: states.length });

			for (const state of states) {
				if (!get().started) break;

				set({ numbers: state });

				const progress = get().progress + 1;
				set({ progress });

				const ms = get().delay[0];

				await new Promise((resolve) => setTimeout(resolve, ms));
			}

			get().handleStop();
		},

		handleStop: () => {
			set({ started: false });

			const numbers: StateNumber[] = get().numbers.map(({ number }) => {
				return { number, color: "#B22222" };
			})!;

			set({ numbers });
		},
	};
});
