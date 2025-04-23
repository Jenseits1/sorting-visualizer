import { Box, Button, Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SelectAlgorithmComponent } from "./select-algorithm.component";
import { SelectArraySizeComponent } from "./select-array-size.component";
import { RiArrowDropRightFill } from "react-icons/ri";
import { useSort } from "../providers/sort.provider";

interface SortControlComponentProps {}

export const SortControlComponent: FunctionComponent<
	SortControlComponentProps
> = () => {
	const {
		leftAlgorithm,
		setLeftAlgorithm,
		rightAlgorithm,
		setRightAlgorithm,
		arraySize,
		setArraySize,
		leftState,
		setLeftState,
		rightState,
		setRightState,
	} = useSort();

	const createWorker = () => {
		return new Worker(
			new URL("@/app/workers/sort-worker.ts", import.meta.url),
			{
				type: "module",
			}
		);
	};
	const startDuel = () => {
		const left = createWorker();
		const right = createWorker();

		left.postMessage({ algorithm: leftAlgorithm, arrayState: leftState });
		right.postMessage({
			algorithm: rightAlgorithm,
			arrayState: rightState,
		});

		left.onmessage = (event) => {
			const currentState = event.data;

			setLeftState(currentState);
		};

		right.onmessage = (event) => {
			const currentState = event.data;

			setRightState(currentState);
		};
	};

	return (
		<Container>
			<Box style={{ display: "flex" }}>
				<SelectAlgorithmComponent
					value={leftAlgorithm}
					onValueChange={(e) => setLeftAlgorithm(e.value)}
				/>

				<SelectAlgorithmComponent
					value={rightAlgorithm}
					onValueChange={(e) => setRightAlgorithm(e.value)}
				/>

				<SelectArraySizeComponent
					value={arraySize}
					onValueChange={(e) => setArraySize(e.value)}
				/>

				<Button variant="solid" onClick={startDuel}>
					<RiArrowDropRightFill />
					Start
				</Button>
			</Box>
		</Container>
	);
};
