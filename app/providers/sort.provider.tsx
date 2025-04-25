"use client";
import {
	useContext,
	useState,
	FunctionComponent,
	createContext,
	useEffect,
	useRef,
	RefObject,
} from "react";
import { ArrayState, StateGenerator } from "../algorithms/state-generator";

interface SortContextType {
	arraySize: string[] | undefined;
	setArraySize: any;
	algorithm: string[] | undefined;
	setAlgorithm: any;
	arrayState: ArrayState;
	setArrayState: any;
	handleStop: () => void;
	handleStart: () => void;
	handleReset: () => void;
	startedRef: RefObject<boolean>;
}

interface SortProviderProps {
	children: React.ReactNode;
}

const SortContext = createContext<SortContextType | null>(null);

export const SortProvider: FunctionComponent<SortProviderProps> = ({
	children,
}) => {
	const [arraySize, setArraySize] = useState<string[]>();
	const [algorithm, setAlgorithm] = useState<string[]>(["merge-sort"]);
	const [arrayState, setArrayState] = useState<ArrayState>([]);
	const [started, setStarted] = useState(false);
	const startedRef = useRef(started);

	const handleReset = () => {
		if (!arraySize) return;

		const size = parseFloat(arraySize[0]);
		const arr = [...Array(size)].map(() => ({
			number: Math.floor(Math.random() * size * 5),
		}));

		setArrayState([...arr]);
	};

	const handleStart = async () => {
		setStarted(true);

		const stateGenerator = new StateGenerator(arrayState, algorithm!);
		const states = stateGenerator.generateStates();

		for (let state of states) {
			if (!startedRef.current) {
				break;
			}

			setArrayState(state);
			await new Promise((resolve) => setTimeout(resolve, 50));
		}
	};

	const handleStop = () => setStarted(false);

	useEffect(() => {
		handleReset();
	}, [arraySize]);

	useEffect(() => {
		startedRef.current = started;
	}, [started]);

	return (
		<SortContext.Provider
			value={{
				arraySize,
				setArraySize,
				algorithm,
				setAlgorithm,
				arrayState,
				setArrayState,
				handleReset,
				handleStart,
				handleStop,
				startedRef,
			}}
		>
			{children}
		</SortContext.Provider>
	);
};

export const useSort = () => {
	const context = useContext(SortContext);

	if (!context) {
		throw new Error("useSortContext must be used within a SortProvider");
	}
	return context;
};
