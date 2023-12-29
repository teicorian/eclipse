import React, { useState } from 'react';
import { Bars, Close } from '../../icons';
import { logger } from '../../utilities/Logger';
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

Header.TopNavigation = ({ children }) => {
	return <div className={'container'}>{children}</div>;
};

Header.Wrap = ({ children }) => {
	return <div className={'wrap'}>{children}</div>;
};

Header.Brand = ({ children }) => {
	return <div className={'brand'}>{children}</div>;
};

Header.Menu = ({ children }) => {
	return <div className={'menu'}>{children}</div>;
};

Header.Main = ({ children }) => {
	return <div className={'main'}>{children}</div>;
};

// Secondary Navigation

Header.SubNavigation = ({ children }) => {
	return (
		<div className={'sub-navigation-container'}>
			<div className={'sub-navigation-main'}>{children}</div>
		</div>
	);
};

// Mobile Menu

Header.Mobile = ({ children }) => {
	return <div className={'mobile-container'}>{children}</div>;
};

Header.MobileBrand = ({ children }) => {
	return <div className={'mobile-brand'}>{children}</div>;
};

Header.MobileMenu = ({ children }) => {
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
			<div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
				{children}
			</div>
		</>
	);
};

export default Header;
