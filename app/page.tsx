"use client";
import { Box, Container } from "@chakra-ui/react";
import { NavbarComponent } from "./components/navbar.component";

import { SortControlComponent } from "./components/sort-control.component";
import { ChartComponent } from "./components/chart.component";
import { useSort } from "./providers/sort.provider";

export default function Home() {
	const { leftState, rightState } = useSort();

	return (
		<Container>
			<NavbarComponent />

			<SortControlComponent />
			<Box
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<ChartComponent data={leftState} />

				<ChartComponent data={rightState} />
			</Box>
		</Container>
	);
}
