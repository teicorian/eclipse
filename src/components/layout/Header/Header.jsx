import React, { useState, useEffect, useRef } from 'react';
import { Bars, Close } from '../../icons';
import './Header.css';

const Header = ({ border, children, ...props }) => {
	const style = [];
	if (border) {
		style.borderBottomWidth = '1px';
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

Header.SubNavigation = ({ fixed, children, ...props }) => {
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
				} ${fixed ? 'fixed' : ''}`}
				{...props}
				ref={subNavigationRef}
			>
				<div className={`sub-navigation-main ${fixed ? 'fixed' : ''}`}>
					{children}
				</div>
			</div>
			{isSticky && (
				<div style={{ marginBottom: `${scrollPadding}px` }}></div>
			)}
		</>
	);
};

// Mobile Menu

Header.Mobile = ({ children, ...props }) => {
	return (
		<div className={'mobile-container'} {...props}>
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
	const [scrollPadding, setScrollPadding] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setMenuOpen(!menuOpen);
		const navigationElement = document.querySelector('.navigation');
		if (navigationElement) {
			const navigationHeight = navigationElement.offsetHeight;
			const windowHeight = window.innerHeight;
			setScrollPadding(windowHeight - navigationHeight);
		}
	};

	return (
		<>
			<div
				className={`mobile-button ${menuOpen ? 'toggled' : ''}`}
				onClick={toggleMobileMenu}
			>
				{menuOpen ? <Close size={20} /> : <Bars size={20} />}
			</div>
			<div
				className={`mobile-menu ${menuOpen ? 'toggled' : ''}`}
				style={{ height: `${scrollPadding}px` }}
				{...props}
				onClick={toggleMobileMenu}
			>
				{children}
			</div>
		</>
	);
};

export default Header;
