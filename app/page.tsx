"use client";
import { Container } from "@chakra-ui/react";

import { SortControlComponent } from "./components/sort-control.component";
import { ChartComponent } from "./components/chart.component";

export default function Home() {
	return (
		<Container>
			<SortControlComponent />

			<ChartComponent />
		</Container>
	);
}
