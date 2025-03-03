import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function RoomType({
	selectedRoomType,
}: {
	selectedRoomType: (value: string) => void;
}) {
	return (
		<div>
			<label className="text-slate-400">
				Select Room Type <sup className="text-red-500">*</sup>
			</label>
			<Select onValueChange={(value: string) => selectedRoomType(value)}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Room type" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="living-room">Living room</SelectItem>
					<SelectItem value="bedroom">Bedroom</SelectItem>
					<SelectItem value="kitchen">Kitchen</SelectItem>
					<SelectItem value="office">Office</SelectItem>
					<SelectItem value="bathroom">Bathroom</SelectItem>
					<SelectItem value="garage">Garage</SelectItem>
					<SelectItem value="garden">Garden</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
