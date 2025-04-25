"use client";
import { FunctionComponent } from "react";

import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis } from "recharts";
import { Box, Container } from "@chakra-ui/react";
import { useSort } from "../providers/sort.provider";

interface ChartComponentProps {}

export const ChartComponent: FunctionComponent<ChartComponentProps> = () => {
	const { arrayState } = useSort();

	const chart = useChart({
		data: arrayState,
	});

	return (
		<Container>
			<Chart.Root maxH="md" chart={chart}>
				<BarChart barCategoryGap="1" data={chart.data}>
					<XAxis
						tickLine={false}
						dataKey={chart.key("number")}
						stroke={chart.color("border")}
					/>

					<Bar isAnimationActive={true} dataKey={chart.key("number")}>
						{chart.data.map(({ highlighted }, index) => (
							<Cell
								key={index}
								fill={chart.color(
									highlighted
										? "pink.focusRing"
										: "pink.emphasized"
								)}
							/>
						))}
					</Bar>
				</BarChart>
			</Chart.Root>
		</Container>
	);
};
