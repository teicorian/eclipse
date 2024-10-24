// NavLink.js

import React, { useState } from 'react';
import { Eye, EyeSlash, Error, Warning, Done } from '../../icons';
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
	left,
	right,
	onChange,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handleButtonClick = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const iconComponents = {
		error: Error,
		warning: Warning,
		done: Done,
	};

	const Icon = iconComponents[right];

	return (
		<div className={`input ${isFocused ? 'focused' : ''}`} {...props}>
			{label && <label htmlFor={id}>{label}</label>}
			{left && (
				<div className={`input-left ${isFocused ? 'focused' : ''}`}>
					{left}
				</div>
			)}
			<input
				id={id}
				name={name}
				type={isPasswordVisible ? 'text' : type}
				placeholder={placeholder}
				autoComplete={autoComplete}
				value={value}
				required={required ? true : undefined}
				minLength={minLength}
				onChange={onChange}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			{type === 'password' && (
				<div className={'icon'} onClick={handleButtonClick}>
					{isPasswordVisible ? <EyeSlash /> : <Eye />}
				</div>
			)}
			{right && (
				<div className={`input-right ${isFocused ? 'focused' : ''}`}>
					{right && <Icon />}
				</div>
			)}
		</div>
	);
};

export default Input;
