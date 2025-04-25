"use client";
import { FunctionComponent } from "react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

const sizes = createListCollection({
	items: [
		{ label: "Small", value: "10" },
		{ label: "Medium", value: "20" },
		{ label: "Large", value: "40" },
	],
});

interface SelectArraySizeComponentProps {
	value?: string[];
	onValueChange: (e: any) => void;
}

export const SelectArraySizeComponent: FunctionComponent<
	SelectArraySizeComponentProps
> = ({ value, onValueChange }) => {
	return (
		<Select.Root
			value={value}
			onValueChange={onValueChange}
			collection={sizes}
			width="150px"
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
