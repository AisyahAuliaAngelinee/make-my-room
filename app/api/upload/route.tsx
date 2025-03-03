import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
	auth: process.env.NEXT_PUBLIC_REPLICATE_API_KEY,
});

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function POST(req: NextRequest) {
	const { imageUrl, roomType, designType, additionalReq } = await req.json();
	const prompt = `A ${roomType} with a ${designType} style interior. ${additionalReq}`;

	// Convert image into AI Image
	try {
		// const input = {
		// 	image: imageUrl,
		// 	prompt:
		// 		"A " +
		// 		roomType +
		// 		" with a " +
		// 		designType +
		// 		" style interior " +
		// 		additionalReq,
		// };
		// console.log("input -> ", input);
		// const output = await replicate.run(
		// 	"adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
		// 	{ input }
		// );

		const input = JSON.stringify({
			key: "",
			init_image: imageUrl,
			prompt:
				"A " +
				roomType +
				" with a " +
				designType +
				" style interior " +
				additionalReq,
			negative_prompt: "bad quality",
			seed: 0,
			guidance_scale: 8,
			strength: 0.99,
			num_inference_steps: 51,
			base64: false,
			temp: false,
			webhook: null,
			track_id: null,
		});

		const requestOptions: any = {
			method: "POST",
			headers: myHeaders,
			body: input,
			redirect: "follow",
		};

		const output = await fetch(
			"https://modelslab.com/api/v5/interior",
			requestOptions
		);

		console.log("output -> ", output);
		return NextResponse.json({ result: output });

		// Convert Output URL to Base64 Image
		// Save base64 to Firebase
		// Save all to DB
	} catch (error) {
		return NextResponse.json({ error: error });
	}
}
