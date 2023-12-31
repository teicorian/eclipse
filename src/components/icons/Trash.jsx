import React from 'react';

const Trash = ({ size, color }) => {
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
			width={size * 0.8}
			viewBox='0 0 448 512'
		>
			<path
				opacity='1'
				fill={color}
				d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'
			/>
		</svg>
	);
};

export default Trash;
