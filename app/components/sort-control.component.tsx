import { Box, Button, Separator, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SelectAlgorithmComponent } from "./select-algorithm.component";
import { RiPlayFill, RiResetLeftFill, RiStopFill } from "react-icons/ri";
import { useSortStore } from "../store/sort.store";
import { SpeedComponent } from "./speed.component";
import { SizeComponent } from "./size.component";

interface SortControlComponentProps {}

export const SortControlComponent: FunctionComponent<
	SortControlComponentProps
> = () => {
	const handleStart = useSortStore((state) => state.handleStart);
	const handleReset = useSortStore((state) => state.handleReset);
	const handleStop = useSortStore((state) => state.handleStop);
	const disabled = useSortStore((state) => state.started);

	return (
		<>
			<Box display="flex" alignItems="end" spaceX="4" marginBottom="4">
				<SelectAlgorithmComponent />

				<Button
					disabled={disabled}
					variant="subtle"
					onClick={handleReset}
				>
					<RiResetLeftFill />
					<Text display={{ base: "none", md: "inline" }}>
						New array
					</Text>
				</Button>

				<Button
					disabled={disabled}
					variant="subtle"
					onClick={handleStart}
				>
					<RiPlayFill />

					<Text display={{ base: "none", md: "inline" }}>Start</Text>
				</Button>

				<Button
					disabled={!disabled}
					variant="subtle"
					onClick={handleStop}
				>
					<RiStopFill />
					<Text display={{ base: "none", md: "inline" }}>Stop</Text>
				</Button>

				<SizeComponent />

				<SpeedComponent />
			</Box>

			<Separator />
		</>
	);
};
