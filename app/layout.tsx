import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
	title: "Make my room",
	description: "Make my room | Generated by create next app",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={outfit.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
