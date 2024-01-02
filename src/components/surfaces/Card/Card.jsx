// NavLink.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Spacer from '../../layout/Spacer/Spacer';
import { Chevron, Copy, Check } from '../../icons';
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

Card.Body = ({ row, centered, children, ...props }) => {
	return (
		<div
			className={`${centered ? 'card-body-centered' : 'card-body'} 
				${row ? 'row' : ''}`}
			{...props}
		>
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

Card.CodeEditor = ({ copy, children, ...props }) => {
	const [isToggled, setIsToggled] = useState(false);
	const handleToggle = () => {
		setIsToggled(!isToggled);
	};
	const [isCopied, setIsCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(copy);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};
	return (
		<>
			<div
				className={`card-footer ${isToggled ? 'toggled' : ''}`}
				{...props}
			>
				<div className={'code-editor'}>
					<div
						className={`code-editor-toggle ${
							isToggled ? 'toggled' : ''
						}`}
						onClick={handleToggle}
					>
						<p className='code-editor-chevron'>
							<Chevron right size={11} />
						</p>
						<Spacer w={0.5} />
						<p>Code Editor</p>
					</div>
					<div
						className={`editor-copy ${isToggled ? 'toggled' : ''}`}
						onClick={handleCopy}
					>
						{isCopied ? <Check size={16} /> : <Copy size={16} />}
					</div>
				</div>
			</div>
			<div className={`code-container ${isToggled ? 'toggled' : ''}`}>
				{children}
			</div>
		</>
	);
};

export default Card;
