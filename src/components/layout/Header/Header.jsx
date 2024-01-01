import React, { useState, useEffect, useRef } from 'react';
import { Bars, Close } from '../../icons';
import './Header.css';

const Header = ({ border, children, ...props }) => {
	const style = [];
	if (!border) {
		style.border = 'none';
	}

	return (
		<div className={'navigation'} style={style} {...props}>
			{children}
		</div>
	);
};

// Primary Navigation

Header.TopNavigation = ({ fixed, children, ...props }) => {
	return (
		<div className={`container ${fixed ? 'fixed' : ''}`} {...props}>
			{children}
		</div>
	);
};

Header.Wrap = ({ children, ...props }) => {
	return (
		<div className={'wrap'} {...props}>
			{children}
		</div>
	);
};

Header.Brand = ({ children, ...props }) => {
	return (
		<div className={'brand'} {...props}>
			{children}
		</div>
	);
};

Header.Menu = ({ children, ...props }) => {
	return (
		<div className={'menu'} {...props}>
			{children}
		</div>
	);
};

Header.Main = ({ children, ...props }) => {
	return (
		<div className={'main'} {...props}>
			{children}
		</div>
	);
};

// Secondary Navigation

Header.SubNavigation = ({ children, ...props }) => {
	const subNavigationRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);
	const [scrollPadding, setScrollPadding] = useState(0);

	const updateContainerHeight = () => {
		const subNavigationRect =
			subNavigationRef.current.getBoundingClientRect();
		const subNavigationTop = subNavigationRect.top || 0;
		const subNavigationHeight = subNavigationRect.height || 0;
		const computedStyle = window.getComputedStyle(subNavigationRef.current);
		const marginTop = computedStyle.getPropertyValue('margin-top');
		const marginValue = parseFloat(marginTop);

		setScrollPadding(subNavigationRect.height + marginValue);

		setIsSticky(subNavigationTop <= 0);
		if (window.scrollY - subNavigationHeight - marginValue <= 0) {
			setIsSticky(false);
		}
	};

	useEffect(() => {
		updateContainerHeight();

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', updateContainerHeight);
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', updateContainerHeight);
			}
		};
	}, []);

	return (
		<>
			<div
				className={`sub-navigation-container ${
					isSticky ? 'sticky' : ''
				}`}
				{...props}
				ref={subNavigationRef}
			>
				<div className={'sub-navigation-main'}>{children}</div>
			</div>
			{isSticky && (
				<div style={{ marginBottom: `${scrollPadding}px` }}></div>
			)}
		</>
	);
};

// Mobile Menu

Header.Mobile = ({ border, children, ...props }) => {
	return (
		<div
			className={`mobile-container ${border ? 'border' : ''}`}
			{...props}
		>
			{children}
		</div>
	);
};

Header.MobileBrand = ({ children, ...props }) => {
	return (
		<div className={'mobile-brand'} {...props}>
			{children}
		</div>
	);
};

Header.MobileMenu = ({ children, ...props }) => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		console.log('Toggle menu');
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<div className={'mobile-button'} onClick={toggleMobileMenu}>
				{isMobileMenuOpen ? <Close size={20} /> : <Bars size={20} />}
			</div>
			<div
				className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
				{...props}
			>
				{children}
			</div>
		</>
	);
};

export default Header;
