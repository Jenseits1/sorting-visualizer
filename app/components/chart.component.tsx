"use client";
import { FunctionComponent } from "react";

import { Chart, useChart } from "@chakra-ui/charts";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts";
import { Container } from "@chakra-ui/react";

interface ChartComponentProps {
	data: { number: number }[];
}

export const ChartComponent: FunctionComponent<ChartComponentProps> = ({
	data,
}) => {
	const chart = useChart({
		data,
		series: [{ name: "number", color: "blue.emphasized" }],
	});

	return (
		<Container>
			<Chart.Root maxH="xl" chart={chart}>
				<BarChart data={chart.data}>
					{data.length < 50 && (
						<XAxis
							dataKey={chart.key("number")}
							tickFormatter={(value) => value}
						/>
					)}

					{chart.series.map((item) => (
						<Bar
							isAnimationActive={true}
							key={item.name}
							dataKey={chart.key(item.name)}
							fill={chart.color(item.color)}
						/>
					))}
				</BarChart>
			</Chart.Root>
		</Container>
	);
};
