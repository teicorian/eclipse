import React from 'react';

const Check = ({ size, color }) => {
	if (!size) {
		size = 18;
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
				d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
			/>
		</svg>
	);
};

export default Check;
