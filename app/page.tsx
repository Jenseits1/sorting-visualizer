"use client";
import { Container } from "@chakra-ui/react";

import { SortControlComponent } from "./components/sort-control.component";
import { ChartComponent } from "./components/chart.component";

export default function Home() {
	console.log("");
	return (
		<Container>
			<SortControlComponent />

			<ChartComponent />
		</Container>
	);
}
