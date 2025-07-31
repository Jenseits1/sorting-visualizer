import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { HiChartBar } from "react-icons/hi";

interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Icon size="xl" color="red.solid">
				<Image src="./bar-chart.svg" alt="bar-chart" />
			</Icon>

			<Text
				fontSize="xl"
				fontFamily="cursive"
				marginLeft={2}
				fontWeight="bold"
			>
				Sorting Visualizer
			</Text>
		</Box>
	);
};
