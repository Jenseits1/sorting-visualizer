"use client";
import { Box, Button, Container } from "@chakra-ui/react";
import { NavbarComponent } from "./components/navbar.component";
import { ChartComponent } from "./components/chart.component";
import { useEffect, useState } from "react";
import { SelectAlgorithmComponent } from "./components/select-algorithm.component";
import { SelectArraySizeComponent } from "./components/select-array-size.component";
import {
	RiArrowDropRightFill,
	RiArrowRightFill,
	RiArrowRightLine,
	RiFlag2Fill,
	RiFlagFill,
} from "react-icons/ri";
import { MergeSort } from "./algorithms/merge-sort";

interface IData {
	number: number;
}

export default function Home() {
	const [teamA, setTeamA] = useState<IData[]>([]);
	const [algorithm, setAlgorithm] = useState();
	const [arraySize, setArraySize] = useState(["100"]);

	useEffect(() => {
		let size = parseFloat(arraySize[0]);

		const data = [...Array(size)].map(() => {
			return { number: Math.floor(Math.random() * (size * 10)) };
		});

		setTeamA(data);
	}, []);

	const handleStart = async () => {
		const numbers = teamA?.map(({ number }) => number);

		const sorted = new MergeSort([...numbers]);
		const operations = sorted.getOperations();

		for (let [index, number] of operations) {
			numbers[index] = number;

			await new Promise((resolve) => setTimeout(resolve, 10));

			setTeamA(
				numbers.map((number) => {
					return { number };
				})
			);
		}
	};

	return (
		<Container>
			<NavbarComponent />

			<SelectAlgorithmComponent
				value={algorithm}
				onValueChange={(e) => setAlgorithm(e.value)}
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
				{teamA && <ChartComponent data={teamA} />}
			</Box>
		</Container>
	);
}
