"use client";
import { Box, Button, Container } from "@chakra-ui/react";
import { NavbarComponent } from "./components/navbar.component";
import { ChartComponent } from "./components/chart.component";
import { useEffect, useState } from "react";
import { SelectAlgorithmComponent } from "./components/select-algorithm.component";
import { SelectArraySizeComponent } from "./components/select-array-size.component";
import { RiArrowDropRightFill } from "react-icons/ri";
import { ArrayState, StateGenerator } from "./algorithms/state-generator";

export default function Home() {
	const [arraySize, setArraySize] = useState();
	const [leftAlgorithm, setLeftAlgorithm] = useState<string[]>();

	const [leftArray, setLeftArray] = useState<ArrayState>([]);
	const [rightArray, setRightArray] = useState<ArrayState>([]);

	const handleStart = async () => {
		if (!leftAlgorithm) {
			return;
		}

		const statesGenerator = new StateGenerator(leftArray, leftAlgorithm);

		const states = statesGenerator.getStates();

		for (const state of states) {
			setLeftArray(state);
			await new Promise((resolve) => setTimeout(resolve, 50));
		}
	};

	useEffect(() => {
		if (!arraySize) {
			return;
		}

		const size = parseFloat(arraySize[0]);
		const arr = [...Array(size)].map(() => {
			const number = Math.floor(Math.random() * size * 10);
			return { number };
		});

		setLeftArray([...arr]);
		setRightArray([...arr]);
	}, [arraySize]);

	return (
		<Container>
			<NavbarComponent />

			<SelectAlgorithmComponent
				value={leftAlgorithm}
				onValueChange={(e) => setLeftAlgorithm(e.value)}
			/>

			<SelectArraySizeComponent
				value={arraySize}
				onValueChange={(e) => setArraySize(e.value)}
			/>

			<Button variant="solid" onClick={handleStart}>
				<RiArrowDropRightFill />
				Start
			</Button>

			<Box
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				{leftArray && <ChartComponent data={leftArray} />}

				{rightArray && <ChartComponent data={rightArray} />}
			</Box>
		</Container>
	);
}
