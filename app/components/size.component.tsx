import { FunctionComponent, useEffect } from "react";
import { Slider } from "@chakra-ui/react";
import { useSortStore } from "../store/sort.store";

interface SizeComponentProps {}

export const SizeComponent: FunctionComponent<SizeComponentProps> = () => {
	const size = useSortStore((state) => state.size);
	const setSize = useSortStore((state) => state.setSize);
	const handleReset = useSortStore((state) => state.handleReset);
	const disabled = useSortStore((state) => state.started);

	useEffect(() => {
		handleReset();
	}, [size]);

	return (
		<Slider.Root
			w="80px"
			value={size}
			min={10}
			max={300}
			disabled={disabled}
			onValueChange={(e) => setSize(e.value)}
		>
			<Slider.Label>Size</Slider.Label>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumbs />
			</Slider.Control>
		</Slider.Root>
	);
};
