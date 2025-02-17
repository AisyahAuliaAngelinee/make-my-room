"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "./_context/UserDetailContext";

type UserDetail = {
	id: number;
	name: string;
	email: string;
	imageUrl: string;
	credits: number;
};

export default function Provider({ children }: { children: React.ReactNode }) {
	const { user } = useUser();

	const [userDetail, setUserDetail] = useState<UserDetail>();

	useEffect(() => {
		user && VerifyUser();
	}, [user]);

	/**
	 * Verify user
	 */
	const VerifyUser = async () => {
		const dataResult = await axios.post("./api/verify-user", {
			user: user,
		});
		setUserDetail(dataResult.data.result);
	};

	return (
		<UserDetailContext.Provider
			value={{
				userDetail,
				setUserDetail,
			}}>
			<div>{children}</div>
		</UserDetailContext.Provider>
	);
}
