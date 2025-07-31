"use client";
import { Container, Theme } from "@chakra-ui/react";

import { SortControlComponent } from "./components/sort-control.component";

import { NavbarComponent } from "./components/navbar.component";
import { BarsCanvasComponent } from "./components/bars-canvas.component";
import { ProgressBarComponent } from "./components/progress-bar.component";

export default function Home() {
	return (
		<Container h="svh" spaceY="4" paddingY="8">
			<NavbarComponent />

			<SortControlComponent />

			<ProgressBarComponent />

			<BarsCanvasComponent />
		</Container>
	);
}
