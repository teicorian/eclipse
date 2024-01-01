import React from 'react';

const Chevron = ({ size, left, right, up, down, color }) => {
	if (!size) {
		size = 16;
	}
	if (!color) {
		color = '#000';
	}
	let rotate = 0; // Declare a variable named "rotate" and initialize it with an empty string

	if (left) {
		rotate = 270;
	}
	if (right) {
		rotate = 90;
	}
	if (up) {
		rotate = 0;
	}
	if (down) {
		rotate = 180;
	}
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={size}
			width={size}
			viewBox='0 0 512 512'
			transform={`rotate(${rotate})`}
			style={{ display: 'block' }}
		>
			<path
				opacity='1'
				fill={color}
				d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z'
			/>
		</svg>
	);
};

export default Chevron;
