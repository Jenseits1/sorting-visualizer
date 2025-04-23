"use client";
import {
	useContext,
	useEffect,
	useState,
	FunctionComponent,
	createContext,
} from "react";
import { ArrayState } from "../algorithms/state-generator";

interface SortContextType {
	arraySize: string[] | undefined;
	setArraySize: any;
	leftAlgorithm: string[] | undefined;
	setLeftAlgorithm: any;
	rightAlgorithm: string[] | undefined;
	setRightAlgorithm: any;
	leftState: ArrayState;
	setLeftState: any;
	rightState: ArrayState;
	setRightState: any;
	reset: () => void;
}

interface SortProviderProps {
	children: React.ReactNode;
}

const SortContext = createContext<SortContextType | null>(null);

export const SortProvider: FunctionComponent<SortProviderProps> = ({
	children,
}) => {
	const [arraySize, setArraySize] = useState<string[]>();
	const [leftAlgorithm, setLeftAlgorithm] = useState<string[]>();
	const [rightAlgorithm, setRightAlgorithm] = useState<string[]>();
	const [leftState, setLeftState] = useState<ArrayState>([]);
	const [rightState, setRightState] = useState<ArrayState>([]);

	const reset = () => {
		if (!arraySize) return;

		const size = parseFloat(arraySize[0]);
		const arr = [...Array(size)].map(() => ({
			number: Math.floor(Math.random() * size),
		}));

		setLeftState([...arr]);
		setRightState([...arr]);
	};

	useEffect(() => {
		reset();
	}, [arraySize]);

	return (
		<SortContext.Provider
			value={{
				arraySize,
				setArraySize,
				leftAlgorithm,
				setLeftAlgorithm,
				rightAlgorithm,
				setRightAlgorithm,
				leftState,
				setLeftState,
				rightState,
				setRightState,
				reset,
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
