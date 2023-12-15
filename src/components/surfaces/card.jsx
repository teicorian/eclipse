import React from 'react';
import '../../styles';

const Card = ({ children, ...props }) => {
	return (
		<div className={'card'} styles={props.styles}>
			{children}
		</div>
	);
};

Card.Header = ({ children, style }) => {
	// Remove the unnecessary destructuring of props.title
	return (
		<div className={'card-header'} style={style}>
			{children}
		</div>
	);
};

Card.Body = ({ children, style }) => {
	return (
		<div className={'card-body'} style={style}>
			{children}
		</div>
	);
};

Card.Context = ({ children, style }) => {
	// Remove the unnecessary destructuring of props.title
	return (
		<div className={'card-body-context'} style={style}>
			{children}
		</div>
	);
};

Card.Content = ({ children, style, horizontal, center }) => {
	const inlineStyle = {};
	if (horizontal) {
		inlineStyle.flexDirection = 'column';
	}
	if (center) {
		inlineStyle.alignItems = 'center';
		inlineStyle.justifyContent = 'center';
	}
	return (
		<div
			className={'card-body-content'}
			style={{ ...inlineStyle, ...style }}
		>
			{children}
		</div>
	);
};

Card.Footer = ({ children, style, disabled }) => {
	if (disabled) {
		return (
			<div className={'card-footer disabled'} style={style}>
				{children}
			</div>
		);
	} else {
		return (
			<div className={'card-footer'} style={style}>
				{children}
			</div>
		);
	}
};

export default Card;
