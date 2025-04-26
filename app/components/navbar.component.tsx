import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Container, IconButton } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { RiGithubLine } from "react-icons/ri";
import { LogoComponent } from "./logo.component";

interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	return (
		<Container as="nav" display="flex" justifyContent="space-between">
			<LogoComponent />

			<IconButton
				variant="ghost"
				onClick={() =>
					window.open(
						"https://github.com/washingtonfbueno/sort-no-jutsu",
						"_blank"
					)
				}
			>
				<RiGithubLine />
			</IconButton>
		</Container>
	);
};
