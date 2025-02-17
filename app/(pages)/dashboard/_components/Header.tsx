"use client";

import { UserButton } from "@clerk/nextjs";
import { MdMeetingRoom } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { UserDetailContext } from "@/app/_context/UserDetailContext";

export default function Header() {
	const { userDetail, setUserDetail } = useContext(UserDetailContext);

	return (
		<div className="p-5 shadow-sm flex justify-between items-center">
			<div className="flex items-center gap-2">
				<div className="flex p-1.5 rounded-xl bg-blue-300/60">
					<MdMeetingRoom className="w-[40px] h-[40px] text-blue-700" />
				</div>
				<h2 className="font-bold text-lg">Make My Room</h2>
			</div>

			<div className="flex gap-4 items-center">
				<div className="flex items-center gap-2 p-1 bg-slate-200 px-3 rounded-full">
					<FaStar className="text-orange-400 w-[20px] h-[20px]" />
					<h2>{userDetail?.credits}</h2>
				</div>
				<UserButton />
			</div>
		</div>
	);
}
