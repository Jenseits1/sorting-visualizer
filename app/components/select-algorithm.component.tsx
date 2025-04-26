"use client";
import { FunctionComponent } from "react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useSortStore } from "../store/sort.store";

const algorithms = createListCollection({
	items: [
		{ label: "Merge Sort", value: "merge-sort" },
		{ label: "Quick Sort", value: "quick-sort" },
		{ label: "Bubble Sort", value: "bubble-sort" },
	],
});

interface SelectAlgorithmComponentProps {}

export const SelectAlgorithmComponent: FunctionComponent<
	SelectAlgorithmComponentProps
> = () => {
	const algorithm = useSortStore((state) => state.algorithm);
	const setAlgorithm = useSortStore((state) => state.setAlgorithm);
	const disabled = useSortStore((state) => state.started);

	return (
		<Select.Root
			disabled={disabled}
			value={algorithm}
			onValueChange={(e) => setAlgorithm(e.value)}
			collection={algorithms}
			width="150px"
		>
			<Select.HiddenSelect />
			<Select.Label>Algorithm</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder="Select algorithm" />
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						{algorithms.items.map((algorithm) => (
							<Select.Item item={algorithm} key={algorithm.value}>
								{algorithm.label}
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
};
