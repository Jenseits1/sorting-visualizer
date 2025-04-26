"use client";
import { create } from "zustand";
import { ArrayState, StateGenerator } from "../algorithms/state-generator";

interface SortState {
	arraySize?: string[];
	setArraySize: (arraySize: string[]) => void;

	algorithm?: string[];
	setAlgorithm: (algorithm: string[]) => void;

	arrayState: ArrayState;
	setArrayState: (arrayState: ArrayState) => void;

	started: boolean;

	handleStart: () => Promise<void>;
	handleStop: () => void;
	handleReset: () => void;
}

export const useSortStore = create<SortState>((set, get) => {
	return {
		arraySize: ["25"],
		setArraySize: (arraySize) => set({ arraySize }),

		algorithm: ["merge-sort"],
		setAlgorithm: (algorithm) => set({ algorithm }),

		arrayState: [],
		setArrayState: (arrayState) => set({ arrayState }),

		started: false,

		handleReset: () => {
			const sizeStr = get().arraySize?.[0];
			if (!sizeStr) return;

			const size = parseFloat(sizeStr);

			const arr = Array.from({ length: size }, () => ({
				number: Math.floor(Math.random() * size * 5),
			}));

			set({ arrayState: arr });
		},

		handleStart: async () => {
			set({ started: true });

			const generator = new StateGenerator(
				get().arrayState,
				get().algorithm!
			);
			const states = generator.generateStates();

			for (const arrayState of states) {
				const started = get().started;

				if (started) {
					set({ arrayState });
					await new Promise((res) => setTimeout(res, 5));
				}
			}

			set({ started: false });
		},

		handleStop: () => {
			set({ started: false });

			const arrayState = get().arrayState.map(
				({ number, highlighted }) => {
					return { number, highlighted: false };
				}
			);

			set({ arrayState });
		},
	};
});
