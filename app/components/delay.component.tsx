import { FunctionComponent } from "react";
import { Slider } from "@chakra-ui/react";
import { useSortStore } from "../store/sort.store";

interface DelayComponentProps {}

const marks = [
	{ value: 5, label: "5ms" },

	{ value: 500, label: "500ms" },
];

export const DelayComponent: FunctionComponent<DelayComponentProps> = () => {
	const delay = useSortStore((state) => state.delay);
	const setDelay = useSortStore((state) => state.setDelay);

	return (
		<Slider.Root
			w="120px"
			min={5}
			max={500}
			value={delay}
			onValueChange={(e) => setDelay(e.value)}
		>
			<Slider.Label>Delay</Slider.Label>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>

				<Slider.Thumbs />

				<Slider.Marks marks={marks} />
			</Slider.Control>
		</Slider.Root>
	);
};
