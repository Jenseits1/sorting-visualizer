"use client";
import { Container } from "@chakra-ui/react";

import { SortControlComponent } from "./components/sort-control.component";

import { NavbarComponent } from "./components/navbar.component";
import { BarsCanvasComponent } from "./components/bars-canvas.component";

export default function Home() {
	return (
		<Container spaceY="4" paddingY="8">
			<NavbarComponent />

			<SortControlComponent />

			<BarsCanvasComponent />
		</Container>
	);
}
