import { Box, Button, Container } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { SelectAlgorithmComponent } from "./select-algorithm.component";
import { SelectArraySizeComponent } from "./select-array-size.component";
import { RiPlayFill, RiResetLeftFill, RiStopFill } from "react-icons/ri";
import { useSort } from "../providers/sort.provider";
import { StateGenerator } from "../algorithms/state-generator";

interface SortControlComponentProps {}

export const SortControlComponent: FunctionComponent<
	SortControlComponentProps
> = () => {
	const {
		algorithm,
		setAlgorithm,
		arraySize,
		setArraySize,
		handleStart,
		handleReset,
		handleStop,
		startedRef,
	} = useSort();

	return (
		<Container paddingY="8">
			<Box style={{ display: "flex", alignItems: "end" }} spaceX="4">
				<SelectAlgorithmComponent
					value={algorithm}
					onValueChange={(e) => setAlgorithm(e.value)}
				/>

				<SelectArraySizeComponent
					value={arraySize}
					onValueChange={(e) => setArraySize(e.value)}
				/>

				<Button
					disabled={startedRef.current}
					variant="ghost"
					onClick={handleStart}
				>
					<RiPlayFill />
					Start
				</Button>

				<Button
					disabled={startedRef.current}
					variant="ghost"
					onClick={handleReset}
				>
					<RiResetLeftFill />
					Reset
				</Button>

				<Button variant="ghost" onClick={handleStop}>
					<RiStopFill />
					Stop
				</Button>
			</Box>
		</Container>
	);
};
