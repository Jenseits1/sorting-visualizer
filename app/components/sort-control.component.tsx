import { Box, Button, Separator, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SelectAlgorithmComponent } from "./select-algorithm.component";
import { RiPlayFill, RiResetLeftFill, RiStopFill } from "react-icons/ri";
import { useSortStore } from "../store/sort.store";
import { SizeComponent } from "./size.component";
import { DelayComponent } from "./delay.component";

interface SortControlComponentProps {}

export const SortControlComponent: FunctionComponent<
	SortControlComponentProps
> = () => {
	const handleStart = useSortStore((state) => state.handleStart);
	const handleReset = useSortStore((state) => state.handleReset);
	const handleStop = useSortStore((state) => state.handleStop);
	const started = useSortStore((state) => state.started);

	return (
		<>
			<Box display="flex" alignItems="end" spaceX="4" marginBottom="4">
				<SelectAlgorithmComponent />

				<Button
					disabled={started}
					variant="subtle"
					onClick={handleReset}
				>
					<RiResetLeftFill />
					<Text display={{ base: "none", md: "inline" }}>
						New array
					</Text>
				</Button>

				{started ? (
					<Button variant="subtle" onClick={handleStop}>
						<RiStopFill />
						<Text display={{ base: "none", md: "inline" }}>
							Stop
						</Text>
					</Button>
				) : (
					<Button variant="subtle" onClick={handleStart}>
						<RiPlayFill />

						<Text display={{ base: "none", md: "inline" }}>
							Start
						</Text>
					</Button>
				)}

				<SizeComponent />

				<DelayComponent />
			</Box>

			<Separator />
		</>
	);
};
