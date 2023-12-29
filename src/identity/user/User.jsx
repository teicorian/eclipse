import React from 'react';
import PFP from '../pfp/PFP';
import './User.css';

const User = ({
	left,
	right,
	firstName,
	lastName,
	src,
	email,
	onClick,
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
	return (
		<div className={'user-card'} {...props} onClick={onClick}>
			<div
				className={'user-card-pfp'}
				style={{ order: order.pfp, justifyContent: justify.pfp }}
			>
				<PFP firstName={firstName} lastName={lastName} src={src} />
			</div>
			<div
				className={'user-card-user'}
				style={{ order: order.user, justifyContent: justify.user }}
			>
				<div className={'user-card-name'}>
					{firstName} {lastName}
				</div>
				<div className={'user-card-email'}>{email}</div>
			</div>
		</div>
	);
};

export default User;
