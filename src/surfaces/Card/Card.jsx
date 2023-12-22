// NavLink.js

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ header, body, footer, ...props }) => {
	const content = [];
	if (header) {
		content.push(<div className={'card-header'}>{header}</div>);
	}
	if (body) {
		content.push(
			<div className={'card-body'} {...props}>
				{body}
			</div>
		);
	}
	if (footer) {
		const footerStyle = [];
		if (footer.style === 'deactivated') {
			footerStyle.push('deactivated');
		}
		if (footer.style === 'warning') {
			footerStyle.push('warning');
		}
		content.push(
			<div className={`card-footer ${footerStyle ? footerStyle : ''}`}>
				{footer.content}
			</div>
		);
	}
	return (
		<div className={`card`} {...props}>
			<div className={`card-wrap`}>{content}</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	header: PropTypes.string,
	body: PropTypes.string,
	footer: PropTypes.string,
};
