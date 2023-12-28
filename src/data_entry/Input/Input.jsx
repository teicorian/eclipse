// NavLink.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Eye, EyeSlash } from '../../icons';
import './Input.css';

const Input = ({
	id,
	name,
	type,
	label,
	placeholder,
	autoComplete,
	value,
	required,
	minLength,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handleButtonClick = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	return (
		<div className={`input ${isFocused ? 'focused' : ''}`} {...props}>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				name={name}
				type={isPasswordVisible ? 'text' : type}
				placeholder={placeholder}
				autoComplete={autoComplete}
				value={value}
				required={required ? 'true' : 'false'}
				minLength={minLength}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			{type === 'password' && (
				<div className={'icon'} onClick={handleButtonClick}>
					{isPasswordVisible ? <EyeSlash /> : <Eye />}
				</div>
			)}
		</div>
	);
};

export default Input;

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	autoComplete: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	required: PropTypes.bool,
};
