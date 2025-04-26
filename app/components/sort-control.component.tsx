import {
	Box,
	Button,
	Container,
	IconButton,
	Separator,
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
		<Container paddingY="8">
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="end"
				marginBottom="4"
			>
				<Box display="flex" alignItems="end" spaceX="4">
					<SelectAlgorithmComponent />

					<SelectArraySizeComponent />

					<Button
						disabled={disabled}
						variant="ghost"
						onClick={handleReset}
					>
						<RiResetLeftFill />
						New Array
					</Button>

					<Button
						disabled={disabled}
						variant="ghost"
						onClick={handleStart}
					>
						<RiPlayFill />
						Start
					</Button>

					<Button
						disabled={!disabled}
						variant="ghost"
						onClick={handleStop}
					>
						<RiStopFill />
						Stop
					</Button>
				</Box>

				<Box>
					<IconButton
						variant="ghost"
						onClick={() =>
							window.open(
								"https://github.com/washingtonfbueno/resume-json",
								"_blank"
							)
						}
					>
						<RiGithubLine />
					</IconButton>

					<ColorModeButton />
				</Box>
			</Box>

			<Separator />
		</Container>
	);
};
