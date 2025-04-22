"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	return (
		<Container as="nav">
			<ColorModeButton />
		</Container>
	);
};
