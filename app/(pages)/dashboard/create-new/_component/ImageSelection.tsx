"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";

export default function ImageSelection({
	selectedImage,
}: {
	selectedImage: (imgUrl: any) => void;
}) {
	const [file, setFile] = useState<any>();

	const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFile(event.target.files?.[0]);
		selectedImage(event.target.files?.[0]);
	};

	return (
		<div>
			<label>Select Image of your room</label>
			<div className="mt-3">
				<label htmlFor="upload-image">
					<div
						className={`border rounded-xl border-dotted flex justify-center border-blue-500 cursor-pointer hover:shadow-lg ${
							file ? "p-0 bg-white" : "p-28 bg-blue-50"
						}`}>
						{!file ? (
							<RiUploadCloud2Fill className="w-[70px] h-[70px] text-blue-500" />
						) : (
							<Image
								src={URL.createObjectURL(file)}
								alt="image"
								width={300}
								height={300}
								className="w-[300px] h-[300px] object-contain"
							/>
						)}
					</div>
				</label>
				<input
					type="file"
					accept="image/*"
					id="upload-image"
					name="upload-image"
					style={{ display: "none" }}
					onChange={onFileSelected}
				/>
			</div>
		</div>
	);
}
