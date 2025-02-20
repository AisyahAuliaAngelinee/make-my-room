"use client";

import ImageSelection from "./_component/ImageSelection";

export default function CreateNew() {
	const onHandleInputChange = (value: any, fieldName: string) => {};

	return (
		<div>
			<h1 className="font-bold text-4xl text-blue-600 text-center">
				Experience design with AI Integrated
			</h1>
			<p className="text-center text-gray-400">
				Step Into the Future of Interior Design with AI-Integrated Innovation
				and Effortless Creativity
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10">
				{/* Image */}
				<ImageSelection
					selectedImage={(value: any) => onHandleInputChange(value, "image")}
				/>

				{/* Form input */}
			</div>
		</div>
	);
}
