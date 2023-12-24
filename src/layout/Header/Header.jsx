import React from 'react';
import './Header.css';

const Header = ({ children, ...props }) => {
	return (
		<div className={'navigation'} {...props}>
			{children}
		</div>
	);
};

Header.TopNavigation = ({ children }) => {
	return <div className={'container'}>{children}</div>;
};

Header.Wrap = ({ children }) => {
	return <div className={'wrap'}>{children}</div>;
};

Header.Main = ({ children }) => {
	return <div className={'main'}>{children}</div>;
};

Header.SubNavigation = ({ children }) => {
	return (
		<div className={'sub-navigation-container'}>
			<div className={'sub-navigation-main'}>{children}</div>
		</div>
	);
};

export default Header;
