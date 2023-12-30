import React from 'react';
import './Line.css';

const Line = ({ vertical, horizontal, color }) => {
	const direction = [];
	if (vertical) {
		direction.push('vertical');
	}
	if (horizontal) {
		direction.push('horizontal');
	}

	return (
		<div
			className={`line ${direction}`}
			style={{ backgroundColor: color }}
		/>
	);
};

export default Line;
