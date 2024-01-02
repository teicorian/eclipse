import React from 'react';
import { Link } from 'react-router-dom';
import PFP from '../PFP/PFP';
import './User.css';

const User = ({
	left,
	right,
	size,
	firstName,
	lastName,
	src,
	email,
	onClick,
	to,
	...props
}) => {
	const order = {};
	const justify = {};
	if (left) {
		order.pfp = 1;
		order.user = 2;
		justify.pfp = 'flex-start';
		justify.user = 'flex-end';
	}
	if (right) {
		order.pfp = 2;
		order.user = 1;
		justify.pfp = 'flex-end';
		justify.user = 'flex-start';
	}
	if (!size) {
		size = 2;
	}
	const name = `${firstName} ${lastName}`;
	return (
		<Link className={'user-card'} {...props} onClick={onClick} to={to}>
			<div
				className={'user-card-pfp'}
				style={{ order: order.pfp, justifyContent: justify.pfp }}
			>
				<PFP
					firstName={firstName}
					lastName={lastName}
					src={src}
					size={size}
				/>
			</div>
			<div
				className={'user-card-user'}
				style={{ order: order.user, justifyContent: justify.user }}
			>
				<div
					className={'user-card-name'}
					style={{
						fontSize: `${size * 0.5}rem`,
						margin: `0 ${size * 0.4}rem`,
						lineHeight: `${size * 0.5}rem`,
					}}
				>
					{name}
				</div>
				{email ? (
					<div
						className={'user-card-email'}
						style={{
							fontSize: `${size * 0.35}rem`,
							margin: `0 ${size * 0.4}rem`,
							lineHeight: `${size * 0.3}rem`,
							marginTop: `${size * 0.2}rem`,
						}}
					>
						{email}
					</div>
				) : (
					''
				)}
			</div>
		</Link>
	);
};

export default User;
