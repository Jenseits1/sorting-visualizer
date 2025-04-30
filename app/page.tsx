"use client";
import { Container } from "@chakra-ui/react";

import { SortControlComponent } from "./components/sort-control.component";

import { NavbarComponent } from "./components/navbar.component";
import { BarsCanvasComponent } from "./components/bars-canvas.component";
import { ProgressBarComponent } from "./components/progress-bar.component";
import { FooterComponent } from "./components/footer.component";

export default function Home() {
	return (
		<Container spaceY="4" paddingY="8">
			<NavbarComponent />

			<SortControlComponent />

			<ProgressBarComponent />

			<BarsCanvasComponent />

			<FooterComponent />
		</Container>
	);
}
