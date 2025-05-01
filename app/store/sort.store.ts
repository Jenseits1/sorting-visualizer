import { create } from "zustand";
import { SortableNumber, StateGenerator } from "../algorithms/state-generator";
import { playAnimationSound } from "../utils/play-animation-sound";

interface SortState {
	delay: number[];
	setDelay: (speed: number[]) => void;

	size: number[];
	setSize: (size: number[]) => void;

	algorithm?: string[];
	setAlgorithm: (algorithm: string[]) => void;

	numbers: SortableNumber[];
	setNumbers: (numbers: SortableNumber[]) => void;

	progress: number;
	maxProgress: number;

	started: boolean;
	muted: boolean;
	setMuted: (muted: boolean) => void;

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

		delay: [500],
		setDelay: (delay) => set({ delay }),

		numbers: [],
		setNumbers: (numbers) => set({ numbers }),

		progress: 0,
		maxProgress: 0,

		started: false,
		muted: false,
		setMuted: (muted) => set({ muted }),

		handleReset: () => {
			const size = get().size[0];

			const numbers: SortableNumber[] = Array.from(
				{ length: size },
				() => ({
					number: Math.random(),
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

			for (const { type, frequency, numbers } of states) {
				if (!get().started) break;

				set({ numbers });

				if (type == "comparison" && !get().muted) {
					playAnimationSound(frequency);
				}

				const progress = get().progress + 1;
				set({ progress });

				const ms = get().delay[0];

				await new Promise((resolve) => setTimeout(resolve, ms));
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
