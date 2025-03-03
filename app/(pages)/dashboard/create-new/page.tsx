"use client";

import { Button } from "@/components/ui/button";
import AdditionalRequirement from "./_component/AdditionalReq";
import DesignType from "./_component/DesignType";
import ImageSelection from "./_component/ImageSelection";
import RoomType from "./_component/RoomType";
import { useState } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";

export default function CreateNew() {
	const [formData, setFormData] = useState<any>([]);

	const onHandleInputChange = (value: any, fieldName: string) => {
		setFormData((prev: any) => ({
			...prev,
			[fieldName]: value,
		}));
	};

	const GenerateAiImage = async () => {
		const rawImageUrl = await SaveRawImageToCloudinary();
		const result = await axios.post("/api/upload", {
			imageUrl: rawImageUrl,
			roomType: formData?.roomType,
			designType: formData?.designType,
			additionalReq: formData?.additionalReq,
		});
		console.log("result => ", result);
	};

	const SaveRawImageToCloudinary = async () => {
		// Save Raw File Image to Cloudinary
		const fileName = Date.now() + "_raw.png";
		const imageRef = ref(storage, "room-redesign" + fileName);

		await uploadBytes(imageRef, formData.image).then(() => {
			console.log("File uploaded...");
		});

		// Uploaded file Image URL
		const downloadUrl = await getDownloadURL(imageRef);
		console.log("downloadUrl -> ", downloadUrl);
		return downloadUrl;
	};

	return (
		<div>
			<h1 className="font-bold text-4xl text-blue-600 text-center">
				Experience design with AI Integrated
			</h1>
			<p className="text-center text-gray-400">
				Step Into the Future of Interior Design with AI-Integrated Innovation
				and Effortless Creativity
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
				{/* Image */}
				<ImageSelection
					selectedImage={(value: any) => onHandleInputChange(value, "image")}
				/>

				{/* Form input */}

				<div>
					{/* Room type */}
					<RoomType
						selectedRoomType={(value: string) =>
							onHandleInputChange(value, "roomType")
						}
					/>

					{/* Design type */}
					<DesignType
						selectedDesignType={(value: string) =>
							onHandleInputChange(value, "designType")
						}
					/>
					{/* Additional Requirement (Optional) */}
					<AdditionalRequirement
						additionalRequirementInput={(value: string) =>
							onHandleInputChange(value, "additionalReq")
						}
					/>

					{/* Button to generate image */}
					<Button className="w-full mt-5" onClick={GenerateAiImage}>
						Generate
					</Button>
					<p className="text-sm text-gray-400 mb-52">
						NOTE: 1 Credit will use to generate your interior design
					</p>
				</div>
			</div>
		</div>
	);
}
