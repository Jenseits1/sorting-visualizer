import { FunctionComponent, useEffect } from "react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useSortStore } from "../store/sort.store";

const sizes = createListCollection({
	items: [
		{ label: "Small", value: "50" },
		{ label: "Medium", value: "150" },
		{ label: "Large", value: "300" },
	],
});

interface SelectArraySizeComponentProps {}

export const SelectArraySizeComponent: FunctionComponent<
	SelectArraySizeComponentProps
> = () => {
	const arraySize = useSortStore((state) => state.arraySize);
	const setArraySize = useSortStore((state) => state.setArraySize);
	const handleReset = useSortStore((state) => state.handleReset);
	const disabled = useSortStore((state) => state.started);

	useEffect(() => {
		handleReset();
	}, [arraySize]);

	return (
		<Select.Root
			value={arraySize}
			disabled={disabled}
			onValueChange={(e) => setArraySize(e.value)}
			collection={sizes}
			width="120px"
		>
			<Select.HiddenSelect />
			<Select.Label>Array Size</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder="Select array size" />
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						{sizes.items.map((size) => (
							<Select.Item item={size} key={size.value}>
								{size.label}
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
};
