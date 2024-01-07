import React from 'react';

const Done = ({ size, color }) => {
	if (!size) {
		size = 18;
	}
	if (!color) {
		color = '#1C984C';
	}
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={size}
			width={size}
			viewBox='0 0 512 512'
		>
			<path
				opacity='1'
				fill={color}
				d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
			/>
		</svg>
	);
};

export default Done;
