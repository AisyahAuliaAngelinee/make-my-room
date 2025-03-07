import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EmptyState() {
	return (
		<div className="flex items-center justify-center mt-10 flex-col">
			<Image
				src={"/empty-room.png"}
				alt="empty-room"
				width={200}
				height={200}
			/>
			<h2 className="font-medium text-lg text-slate-800">
				Create New Design for your room
			</h2>
			<Link href={"/dashboard/create-new"}>
				<Button className="mt-5">+ Redesign Room</Button>
			</Link>
		</div>
	);
}
