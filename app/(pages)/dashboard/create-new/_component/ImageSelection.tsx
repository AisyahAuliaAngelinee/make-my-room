export default function ImageSelection() {
	return (
		<div>
			<label>Select Image of your room</label>
			<div>
				<input
					type="file"
					accept="image/*"
					id="upload-image"
					name="upload-image"
				/>
			</div>
		</div>
	);
}
