// import { NextRequest, NextResponse } from "next/server";
// import cloudinary from "cloudinary";
// import multer from "multer";
// import { writeFile, unlink } from "fs/promises";
// import path from "path";

import { NextRequest, NextResponse } from "next/server";

// // Konfigurasi Cloudinary
// cloudinary.v2.config({
// 	cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
// 	api_key: process.env.NEXT_PUBLIC_CLOUD_API_KEY,
// 	api_secret: process.env.NEXT_PUBLIC_CLOUD_API_SECRET_KEY,
// });

// // Setup multer untuk menyimpan file sementara
// const upload = multer({ dest: "/tmp" });

// // Fungsi untuk menangani upload dengan Multer
// const uploadMiddleware = upload.single("file");

// export async function POST(req: NextRequest) {
// 	try {
// 		const formData = await req.formData();
// 		const file = formData.get("file") as File;

// 		if (!file) {
// 			return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
// 		}

// 		// Simpan file sementara di server
// 		const tempPath = path.join("/tmp", file.name);
// 		const fileBuffer = Buffer.from(await file.arrayBuffer());
// 		await writeFile(tempPath, fileBuffer);

// 		// Upload file ke Cloudinary
// 		const result = await cloudinary.v2.uploader.upload(tempPath, {
// 			folder: "uploads", // Folder dalam Cloudinary
// 		});

// 		// Hapus file sementara dari server
// 		await unlink(tempPath);

// 		return NextResponse.json({ success: true, url: result.secure_url });
// 	} catch (error) {
// 		return NextResponse.json(
// 			{ error: "Upload to Cloudinary failed", details: error },
// 			{ status: 500 }
// 		);
// 	}
// }

export async function POST(req: NextRequest) {
	return NextResponse.json({ result: "Hello" });
}
