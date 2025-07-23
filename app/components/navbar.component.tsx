import { Box, IconButton } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { RiGithubLine, RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import { LogoComponent } from "./logo.component";
import { useSortStore } from "../store/sort.store";

interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	const muted = useSortStore((state) => state.muted);
	const setMuted = useSortStore((state) => state.setMuted);

	return (
		<Box display="flex" justifyContent="space-between">
			<LogoComponent />

			<Box>
				<IconButton
					variant="ghost"
					onClick={() => (muted ? setMuted(false) : setMuted(true))}
				>
					{muted ? <RiVolumeMuteFill /> : <RiVolumeUpFill />}
				</IconButton>

				<IconButton
					variant="ghost"
					onClick={() =>
						window.open(
							"https://jenseits1.github.io/sort-no-jutsu/",
							"_blank"
						)
					}
				>
					<RiGithubLine />
				</IconButton>
			</Box>
		</Box>
	);
};
