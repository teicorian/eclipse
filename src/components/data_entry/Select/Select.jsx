import React, { useState, useRef } from 'react';
import { Error, Warning, Done, Chevron } from '../../icons';
import './Select.css';

const Select = ({ id, name, label, value, options, required, left, right, onChange, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(value || null);
	const selectContainerRef = useRef(null);

	// Map right icons
	const iconComponents = {
		error: Error,
		warning: Warning,
		done: Done,
		chevron: Chevron,
	};
	const Icon = iconComponents[right];

	// Toggle dropdown open/close
	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	// Handle option selection
	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onChange) {
			onChange(option.value);
		}
	};

	// Close dropdown when clicking outside
	const handleClickOutside = (event) => {
		if (selectContainerRef.current && !selectContainerRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};
	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className='select' ref={selectContainerRef}>
			{label && (
				<div className='select-label'>
					<label htmlFor={id}>{label}</label>
				</div>
			)}
			<div className={`select-container ${isOpen ? 'focused' : ''}`} onClick={toggleDropdown} {...props}>
				{left && <div className='input-left'>{left}</div>}
				<div className='select-display'>
					{selectedOption ? (
						selectedOption.label
					) : (
						<span className='select-placeholder'>Select an option</span>
					)}
				</div>
				<div className='toggle-icon'>
					<Chevron up={isOpen} down={!isOpen} />
				</div>
				{right && (
					<div className='select-icon'>
						<Icon />
					</div>
				)}
			</div>
			{isOpen && (
				<div className='custom-select-options'>
					{options.map((option) => (
						<div key={option.value} className='custom-select-option' onClick={() => handleSelect(option)}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
