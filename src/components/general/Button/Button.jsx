import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({
	key,
	primary,
	warning,
	deactivated,
	size,
	label,
	onClick,
	to,
	type,
	...props
}) => {
	if (!size) {
		size = 'medium';
	}
	if (!type) {
		type = 'submit';
	}
	if (to) {
		to = `/${to}`;
	}
	if (!key) key = label;
	const mode = primary
		? 'eclipse-button--primary'
		: warning
		? 'eclipse-button--warning'
		: deactivated
		? 'eclipse-button--deactivated'
		: 'eclipse-button--secondary';

	const wrapperClassName = [
		'eclipse-button',
		`eclipse-button--${size}`,
		mode,
	].join(' ');

	return (
		<>
			{to ? (
				<Link to={to} className={wrapperClassName} {...props}>
					{label}
				</Link>
			) : (
				<button
					className={wrapperClassName}
					type={type}
					onClick={onClick}
					{...props}
				>
					{label}
				</button>
			)}
		</>
	);
};

export default Button;
