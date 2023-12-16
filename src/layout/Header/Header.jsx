import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../general/Button/Button';
import './Header.css';

const Header = ({ left, right, center }) => {
	const Container = [];
	if (left) {
		Container.push(<Header.Left key='left' />);
	}
	if (right) {
		Container.push(<Header.Right key='right' />);
	}
	if (center) {
		Container.push(<Header.Center key='center' />);
	}
	return <div className={'header'}>{Container}</div>;
};

Header.Left = () => {
	return <div className={'header-left'}>Left</div>;
};

Header.Right = () => {
	return <div className={'header-right'}>Right</div>;
};

Header.Center = () => {
	return <div className={'header-center'}>Center</div>;
};

export default Header;

Header.propTypes = {
	left: PropTypes.elementType,
	right: PropTypes.elementType,
	center: PropTypes.elementType,
};

Header.defaultProps = {
	left: Header.Left,
	right: Header.Right,
	center: Header.Center,
};
