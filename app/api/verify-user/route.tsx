import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { user } = await req.json();

	/**
	 * Validate the authentication
	 */
	try {
		// If User is already exist
		const isUserExist = await db
			.select()
			.from(Users)
			.where(eq(Users.email, user?.primaryEmailAddress.emailAddress));

		// if User is not exist
		if (isUserExist?.length === 0) {
			const isInsertUser = await db
				.insert(Users)
				.values({
					name: user?.fullName,
					email: user?.primaryEmailAddress.emailAddress,
					imageUrl: user?.imageUrl,
				})
				.returning({
					id: Users.id,
					name: Users.name,
					email: Users.email,
					imageUrl: Users.imageUrl,
					credits: Users.credits,
				});

			return NextResponse.json({ result: isInsertUser[0] });
		}
		return NextResponse.json({ result: isUserExist[0] });
	} catch (error: any) {
		// console.log("error -> ", error);
		return NextResponse.json({ error: error });
	}
}
