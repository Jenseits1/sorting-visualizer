import { Box, Button, Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SelectAlgorithmComponent } from "./select-algorithm.component";
import { SelectArraySizeComponent } from "./select-array-size.component";
import { RiPlayFill, RiResetLeftFill, RiStopFill } from "react-icons/ri";
import { useSortStore } from "../store/sort.store";

interface SortControlComponentProps {}

export const SortControlComponent: FunctionComponent<
	SortControlComponentProps
> = () => {
	const handleStart = useSortStore((state) => state.handleStart);
	const handleReset = useSortStore((state) => state.handleReset);
	const handleStop = useSortStore((state) => state.handleStop);

	return (
		<Container paddingY="8">
			<Box style={{ display: "flex", alignItems: "end" }} spaceX="4">
				<SelectAlgorithmComponent />

				<SelectArraySizeComponent />

				<Button variant="ghost" onClick={handleReset}>
					<RiResetLeftFill />
					New Array
				</Button>

				<Button variant="ghost" onClick={handleStart}>
					<RiPlayFill />
					Start
				</Button>

				<Button variant="ghost" onClick={handleStop}>
					<RiStopFill />
					Stop
				</Button>
			</Box>
		</Container>
	);
};
