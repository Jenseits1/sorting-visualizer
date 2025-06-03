"use client";
import { Box, Container } from "@chakra-ui/react";

import { SortControlComponent } from "./components/sort-control.component";

import { NavbarComponent } from "./components/navbar.component";
import { BarsCanvasComponent } from "./components/bars-canvas.component";
import { ProgressBarComponent } from "./components/progress-bar.component";
import { FooterComponent } from "./components/footer.component";

export default function Home() {
	return (
		<Container
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			h="svh"
		>
			<Box spaceY="4" paddingY="8">
				<NavbarComponent />

				<SortControlComponent />

				<ProgressBarComponent />

				<BarsCanvasComponent />
			</Box>

			<FooterComponent />
		</Container>
	);
}
