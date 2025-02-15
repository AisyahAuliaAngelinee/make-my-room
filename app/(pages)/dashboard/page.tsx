import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
	return (
		<div>
			<strong>Dashboard</strong>
			<UserButton />
		</div>
	);
}
