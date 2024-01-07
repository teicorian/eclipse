import React from 'react';
import './PFP.css';

const PFP = ({ firstName, lastName, src, size, onClick, ...props }) => {
	if (!size) {
		size = 2;
	}

	const icon = {};
	if (firstName && lastName) {
		icon.asset = `${firstName[0]}${lastName[0]}`;
	}

	if (src) {
		icon.asset = (
			<img
				src={src}
				style={{ width: `${size}rem`, height: `${size}rem` }}
			/>
		);
	}

	return (
		<div
			className={'pfp'}
			role='button'
			tabIndex='0'
			onClick={onClick}
			style={{
				width: `${size}rem`,
				height: `${size}rem`,
				fontSize: `${size * 0.5}rem`,
			}}
			{...props}
		>
			{icon.asset}
		</div>
	);
};

export default PFP;
