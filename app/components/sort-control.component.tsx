import {
	Box,
	Button,
	Container,
	IconButton,
	Separator,
	Show,
	Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { SelectAlgorithmComponent } from "./select-algorithm.component";
import { SelectArraySizeComponent } from "./select-array-size.component";
import {
	RiGithubLine,
	RiPlayFill,
	RiResetLeftFill,
	RiStopFill,
} from "react-icons/ri";
import { useSortStore } from "../store/sort.store";
import { ColorModeButton } from "@/components/ui/color-mode";

interface SortControlComponentProps {}

export const SortControlComponent: FunctionComponent<
	SortControlComponentProps
> = () => {
	const handleStart = useSortStore((state) => state.handleStart);
	const handleReset = useSortStore((state) => state.handleReset);
	const handleStop = useSortStore((state) => state.handleStop);
	const disabled = useSortStore((state) => state.started);

	return (
		<Container>
			<Box display="flex" alignItems="end" spaceX="2" marginBottom="4">
				<SelectAlgorithmComponent />

				<SelectArraySizeComponent />

				<Button
					disabled={disabled}
					variant="ghost"
					onClick={handleReset}
				>
					<RiResetLeftFill />
					<Text display={{ base: "none", md: "inline" }}>
						New array
					</Text>
				</Button>

				<Button
					disabled={disabled}
					variant="ghost"
					onClick={handleStart}
				>
					<RiPlayFill />

					<Text display={{ base: "none", md: "inline" }}>Start</Text>
				</Button>

				<Button
					disabled={!disabled}
					variant="ghost"
					onClick={handleStop}
				>
					<RiStopFill />
					<Text display={{ base: "none", md: "inline" }}>Stop</Text>
				</Button>
			</Box>

			<Separator />
		</Container>
	);
};
