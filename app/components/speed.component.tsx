import { FunctionComponent } from "react";
import { Code, Slider } from "@chakra-ui/react";
import { useSortStore } from "../store/sort.store";

interface SpeedComponentProps {}

export const SpeedComponent: FunctionComponent<SpeedComponentProps> = () => {
	const speed = useSortStore((state) => state.speed);
	const setSpeed = useSortStore((state) => state.setSpeed);

	return (
		<Slider.Root
			w="80px"
			value={speed}
			onValueChange={(e) => setSpeed(e.value)}
		>
			<Slider.Label>Speed</Slider.Label>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumbs />
			</Slider.Control>
		</Slider.Root>
	);
};
