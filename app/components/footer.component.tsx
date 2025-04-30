import { Box, Separator, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface FooterComponentProps {}

export const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
	return (
		<Box as="footer" paddingTop={16} paddingBottom={12}>
			<Separator marginBottom={12} />

			<Text color="fg.muted" marginRight={2}>
				&copy; {new Date().getFullYear()} Built by Washington Bueno
			</Text>
		</Box>
	);
};
