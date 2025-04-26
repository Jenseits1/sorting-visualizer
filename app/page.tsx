"use client";
import { Container } from "@chakra-ui/react";

import { SortControlComponent } from "./components/sort-control.component";
import { ChartComponent } from "./components/chart.component";
import { NavbarComponent } from "./components/navbar.component";

export default function Home() {
	return (
		<Container spaceY="4" paddingY="8">
			<NavbarComponent />

			<SortControlComponent />

			<ChartComponent />
		</Container>
	);
}
