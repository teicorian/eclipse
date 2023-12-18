import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../general/Button/Button';
import { Logo } from '../../brand/Logo/Logo';
import './Header.css';

const Header = ({ wrap, main }) => {
	const Container = [];
	if (wrap) {
		Container.push(<Header.Wrap content={wrap} key='left' />);
	}
	if (main) {
		Container.push(<Header.Main content={main} key='right' />);
	}

	return (
		<div className={'navigation'}>
			<div className={'container'}>{Container}</div>
		</div>
	);
};

Header.Wrap = ({ content }) => {
	return <div className={'wrap'}>{content}</div>;
};

Header.Main = ({ content }) => {
	return <div className={'main'}>{content}</div>;
};

export default Header;

Header.propTypes = {
	wrap: PropTypes.element,
	main: PropTypes.element,
};

Header.defaultProps = {
	wrap: (
		<>
			<Logo />
			<div>Hello</div> <div>Hello</div>
		</>
	),
	main: <div>Main</div>,
};
