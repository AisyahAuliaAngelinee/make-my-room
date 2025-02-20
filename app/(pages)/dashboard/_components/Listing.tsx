"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import EmptyState from "./EmptyState";

export default function Listing() {
	const { user } = useUser();

	const [userRoomList, setUserRoomList] = useState<any[]>([]);

	return (
		<div>
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-3xl">Welcome, {user?.fullName}</h1>
				<Button>+ Redesign Room</Button>
			</div>

			{/* Empty State */}
			{userRoomList?.length === 0 ? <EmptyState /> : <div>{/* Listing */}</div>}
		</div>
	);
}
