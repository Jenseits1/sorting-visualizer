import { Box, IconButton } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { RiGithubLine } from "react-icons/ri";
import { LogoComponent } from "./logo.component";

interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	return (
		<Box display="flex" justifyContent="space-between">
			<LogoComponent />

			<IconButton
				variant="ghost"
				onClick={() =>
					window.open(
						"https://github.com/Jenseits1/sorting-visualizer",
						"_blank"
					)
				}
			>
				<RiGithubLine />
			</IconButton>
		</Box>
	);
};
