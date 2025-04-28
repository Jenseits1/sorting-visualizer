import { create } from "zustand";
import { SortableNumber, StateGenerator } from "../algorithms/state-generator";

interface SortState {
	speed: number[];
	setSpeed: (speed: number[]) => void;

	size?: number[];
	setSize: (size: number[]) => void;

	algorithm?: string[];
	setAlgorithm: (algorithm: string[]) => void;

	numbers: SortableNumber[];
	setNumbers: (numbers: SortableNumber[]) => void;

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

		speed: [50],
		setSpeed: (speed) => set({ speed }),

		numbers: [],
		setNumbers: (numbers) => set({ numbers }),

		progress: 0,
		maxProgress: 0,

		started: false,

		handleReset: () => {
			const size = get().size?.[0]!;

			const numbers: SortableNumber[] = Array.from(
				{ length: size },
				() => ({
					number: Math.ceil(Math.random() * 700),
					color: "#B22222",
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

			set({ progress: 0 });
			set({ maxProgress: states.length });

			for (const { type, numbers } of states) {
				const started = get().started;

				if (started) {
					set({ numbers });

					const progress = get().progress + 1;
					set({ progress });

					const ms = 300 / get().speed[0];

					await new Promise((resolve) => setTimeout(resolve, ms));
				}
			}

			get().handleStop();
		},

		handleStop: () => {
			set({ started: false });

			const numbers: SortableNumber[] = get().numbers.map(
				({ number }) => {
					return { number, color: "#B22222" };
				}
			)!;

			set({ numbers });
		},
	};
});
