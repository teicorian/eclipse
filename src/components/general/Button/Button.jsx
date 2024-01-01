import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({
	primary,
	warning,
	deactivated,
	size,
	label,
	onClick,
	to,
	...props
}) => {
	if (!size) {
		size = 'medium';
	}
	const mode = primary
		? 'eclipse-button--primary'
		: 'eclipse-button--secondary';
	const isWarning = warning ? 'eclipse-button--warning' : '';
	const isDeactivated = deactivated ? 'eclipse-button--deactivated' : '';

	const wrapperClassName = [
		'eclipse-button',
		`eclipse-button--${size}`,
		mode,
		isWarning,
		isDeactivated,
	].join(' ');

	return (
		<div className={wrapperClassName} {...props}>
			{onClick ? (
				<button type='button' onClick={onClick}>
					{label}
				</button>
			) : to ? (
				<Link to={to} className={'link'}>
					{label}
				</Link>
			) : (
				// Render a regular button if neither onClick nor to is present
				<button type='button'>{label}</button>
			)}
		</div>
	);
};

export default Button;
