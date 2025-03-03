import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function AdditionalRequirement({
	additionalRequirementInput,
}: {
	additionalRequirementInput: (value: string) => void;
}) {
	return (
		<div className="mt-5">
			<label className="text-gray-400">
				Additional Requirements (Optional)
			</label>
			<Textarea
				className="mt-2"
				onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
					additionalRequirementInput(event.target.value)
				}
			/>
		</div>
	);
}
