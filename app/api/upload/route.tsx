import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { imageUrl, roomType, designType, additionalReq } = await req.json();

	// Convert image into AI Image
	// Convert Output URL to Base64 Image
	// Save base64 to Firebase
	// Save all to DB
	return NextResponse.json({ result: "Hello" });
}
