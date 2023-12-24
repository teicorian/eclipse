import React from 'react';
import PropTypes from 'prop-types';
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
	...props
}) => {
	const mode = primary
		? 'eclipse-button--primary'
		: 'eclipse-button--secondary';
	const isWarning = warning ? 'eclipse-button--warning' : '';
	const isDeactivated = deactivated ? 'eclipse-button--deactivated' : '';
	return (
		<button
			type='button'
			className={[
				'eclipse-button',
				`eclipse-button--${size}`,
				mode,
				isWarning,
				isDeactivated,
			].join(' ')}
			onClick={onClick}
			{...props}
		>
			{label}
		</button>
	);
};

export default Button;

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	primary: false,
	size: 'medium',
	onClick: undefined,
};
