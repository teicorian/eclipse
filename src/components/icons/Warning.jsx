import React from 'react';

const Warning = ({ size, color }) => {
	if (!size) {
		size = 18;
	}
	if (!color) {
		color = '#F17E2B';
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
				d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'
			/>
		</svg>
	);
};

export default Warning;
