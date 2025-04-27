import { Box, Container } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useRef } from "react";
import { useSortStore } from "../store/sort.store";

interface BarsCanvasComponentProps {}

export const BarsCanvasComponent: FunctionComponent<
	BarsCanvasComponentProps
> = () => {
	const numbers = useSortStore((state) => state.numbers);
	const boxRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const gap = 1;

	const renderCanvas = () => {
		const boxWidth = boxRef.current?.offsetWidth!;
		const boxHeight = boxRef.current?.offsetHeight!;

		const numberOfBars = numbers.length;

		const gapSpaceTaken = (numberOfBars - 1) * gap;

		const availableSpace = boxWidth - gapSpaceTaken;

		const barWidth = Math.floor(availableSpace / numberOfBars);

		const canvasWidth = barWidth * numberOfBars + gapSpaceTaken;

		const canvas = canvasRef.current;

		if (!canvas) {
			return;
		}

		canvas.width = canvasWidth;
		canvas.height = boxHeight;

		const ctx = canvas.getContext("2d")!;

		let x = 0;
		let y = 0;

		for (let { number, color } of numbers) {
			const height = number;

			ctx.fillStyle = color;
			ctx.fillRect(x, y, barWidth, height);

			x += barWidth + gap;
		}
	};

	useEffect(() => {
		renderCanvas();
	}, [numbers]);

	return (
		<Container>
			<Box
				height="3xl"
				display="flex"
				justifyContent="center"
				ref={boxRef}
			>
				<canvas ref={canvasRef} />
			</Box>
		</Container>
	);
};
