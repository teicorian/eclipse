import React from 'react';

const Bars = ({ size, color }) => {
	if (!size) {
		size = 16;
	}
	if (!color) {
		color = '#000';
	}
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={size}
			width={size * 0.88}
			viewBox='0 0 448 512'
		>
			<path
				opacity='1'
				fill={color}
				d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
			/>
		</svg>
	);
};

export default Bars;
