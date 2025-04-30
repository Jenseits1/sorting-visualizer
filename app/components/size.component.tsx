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
	}, [size, handleReset]);

	return (
		<Slider.Root
			value={size}
			w="80px"
			min={10}
			max={400}
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
