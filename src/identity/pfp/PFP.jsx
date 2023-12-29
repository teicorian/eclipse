import React from 'react';
import './PFP.css';

const PFP = ({ firstName, lastName, src }) => {
	const icon = {};
	if (firstName && lastName) {
		icon.asset = `${firstName[0]}${lastName[0]}`;
	}

	if (src) {
		icon.asset = <img src={src} />;
	}

	return <div className={'pfp'}>{icon.asset}</div>;
};

export default PFP;
