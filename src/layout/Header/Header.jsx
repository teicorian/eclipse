import React, { useState } from 'react';
import './Header.css';

import { Bars } from '../../icons';

const Header = ({ children, ...props }) => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className={'navigation'} {...props}>
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
	return (
		<div className={'main'}>
			{children}
			<Bars />
		</div>
	);
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

Header.MobileButton = ({ children }) => {
	return <div className={'mobile-button'}>{children}</div>;
};

Header.MobileMenu = ({ children }) => {
	return <div className={'mobile-menu'}>{children}</div>;
};

export default Header;
