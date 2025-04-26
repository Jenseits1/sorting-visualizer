import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Icon size="xl" color="red.solid">
				<Image src="./mangekyou.svg" />
			</Icon>

			<Text
				fontSize="xl"
				fontFamily="cursive"
				marginLeft={2}
				fontWeight="bold"
			>
				Sort no Jutsu
			</Text>
		</Box>
	);
};
