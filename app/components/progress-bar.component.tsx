"use client";
import { FunctionComponent, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useSortStore } from "../store/sort.store";

interface ProgressBarComponentProps {}

export const ProgressBarComponent: FunctionComponent<
	ProgressBarComponentProps
> = () => {
	const progress = useSortStore((state) => state.progress);
	const maxProgress = useSortStore((state) => state.maxProgress);
	const started = useSortStore((state) => state.started);

	const boxRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const renderCanvas = () => {
		const width = boxRef.current?.offsetWidth!;
		const height = boxRef.current?.offsetHeight!;

		const x = 0;
		const y = 0;

		const canvas = canvasRef.current;

		if (!canvas) {
			return;
		}

		canvas.width = width;
		canvas.height = height;
		canvas.style.backgroundColor = "#18181b";

		const ctx = canvas.getContext("2d")!;

		const currentProgress = (progress / maxProgress) * width;

		ctx.fillStyle = "#B22222";
		ctx?.fillRect(x, y, currentProgress, height);
	};

	useEffect(() => {
		renderCanvas();
	}, [progress, renderCanvas]);

	return (
		<Box height="1" ref={boxRef}>
			<canvas hidden={!started} ref={canvasRef} />
		</Box>
	);
};
