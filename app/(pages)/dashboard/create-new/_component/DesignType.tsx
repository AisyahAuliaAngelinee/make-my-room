"use client";

import Image from "next/image";
import { useState } from "react";

interface Designs {
	name: string;
	image: string;
}

export default function DesignType({
	selectedDesignType,
}: {
	selectedDesignType: (value: string) => void;
}) {
	const Designs = [
		{
			name: "Modern",
			image: "/modern.png",
		},
		{
			name: "Bohemian",
			image: "/bohemian.png",
		},
		{
			name: "Industrial",
			image: "/industrial.png",
		},
		{
			name: "Minimalist",
			image: "/minimalist.png",
		},
		{
			name: "Rustic",
			image: "/rustic.png",
		},
		{
			name: "Traditional",
			image: "/traditional.png",
		},
	];

	const [selectedOption, setSelectedOption] = useState<any>();

	return (
		<div>
			<label className="text-gray-500">Interior Design Type</label>
			<div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{Designs.map((design: Designs, index: number) => (
					<div
						key={index}
						onClick={() => {
							setSelectedOption(design.name);
							selectedDesignType(design.name);
						}}>
						<Image
							src={design.image}
							alt={design.name}
							width={100}
							height={100}
							className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
								design.name === selectedOption &&
								"border-2 border-blue-700 rounded-md p-1"
							}`}
						/>
						<h2>{design.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
}
