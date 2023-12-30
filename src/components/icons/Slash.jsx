import React from 'react';

const Close = ({ size, color }) => {
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
			width={size}
			viewBox='0 0 16 16'
		>
			<path
				opacity='1'
				fill={color}
				d='M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z'
			/>
		</svg>
	);
};

export default Close;
