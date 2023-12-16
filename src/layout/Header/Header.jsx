import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../general/Button/Button';
import './Header.css';

const Header = ({ left, center, right }) => {
	const Container = [];
	if (left) {
		Container.push(<Header.Left content={left} key='left' />);
	}
	if (center) {
		Container.push(<Header.Center content={center} key='center' />);
	}
	if (right) {
		Container.push(<Header.Right content={right} key='right' />);
	}

	return (
		<div className={'container'}>
			<div className={'header'}>{Container}</div>
		</div>
	);
};

Header.Left = ({ content }) => {
	return <div className={'header-left'}>{content}</div>;
};

Header.Center = ({ content }) => {
	return <div className={'header-center'}>{content}</div>;
};

Header.Right = ({ content }) => {
	return <div className={'header-right'}>{content}</div>;
};

export default Header;

Header.propTypes = {
	left: PropTypes.string,
	center: PropTypes.string,
	right: PropTypes.string,
};

Header.defaultProps = {
	left: 'Left',
	center: 'Center',
	right: 'Right',
};
