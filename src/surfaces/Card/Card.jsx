// NavLink.js

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ type, children, ...props }) => {
	return (
		<div className={`card ${type ? type : ''}`} {...props}>
			{children}
		</div>
	);
};

Card.Header = ({ children, ...props }) => {
	return (
		<div className={'card-header'} {...props}>
			{children}
		</div>
	);
};

Card.Body = ({ row, children, ...props }) => {
	return (
		<div className={`card-body ${row ? 'row' : ''}`} {...props}>
			{children}
		</div>
	);
};

Card.Footer = ({ children, ...props }) => {
	return (
		<div className={`card-footer`} {...props}>
			{children}
		</div>
	);
};

Card.FooterButton = ({ children, ...props }) => {
	return (
		<div className={'card-footer'} {...props}>
			<div className={'with-button'}>{children}</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	type: PropTypes.string,
};
