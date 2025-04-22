"use client";
import { FunctionComponent } from "react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

const sizes = createListCollection({
	items: [
		{ label: "25", value: "25" },
		{ label: "100", value: "100" },
		{ label: "500", value: "500" },
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
			size="sm"
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
