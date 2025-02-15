"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import axios from "axios";

export default function Provider({ children }: { children: React.ReactNode }) {
	const { user } = useUser();

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
		console.log("dataResult -> ", dataResult.data);
	};

	return <div>{children}</div>;
}
