import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../general/Button/Button';
import Logo from '../../brand/Logo/Logo';
import NavLink from '../../navigation/NavLink/NavLink';
import Spacer from '../../layout/Spacer/Spacer';
import './Header.css';

const Header = ({ wrap, main, ...props }) => {
	const Container = [];
	if (wrap) {
		Container.push(<Header.Wrap content={wrap} key='wrap' />);
	}
	if (main) {
		Container.push(<Header.Main content={main} key='main' />);
	}

	return (
		<div className={'navigation'} {...props}>
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
			<Spacer w={8} />
			<NavLink to='/' label='Home' currentPath='/' />
			<NavLink to='/services' label='Services' />
			<NavLink to='/about' label='About' />
			<NavLink to='/contact' label='Contact' />
		</>
	),
	main: (
		<>
			<Button label='Log In' size='small' />
			<Button label='Sign Up' size='small' />
		</>
	),
};
