import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'eclipse';
import './header.css';

function Header() {
	const navigate = useNavigate();

	const navigateTo = (path) => {
		navigate(path);
	};

	return (
		<div className={'header'}>
			<div className={'wrapper'}>
				<div className={'top-navigation-wrap'}>
					<a href='/'>
						<img src='/tlogo.svg' alt='amethyst logo' />
					</a>
					<img src='/logo.svg' alt='amethyst logo' />
				</div>
				<div className={'top-navigation-main'}>
					<div className={'main-nav'}></div>
					<div className={'header-search'}></div>
					<div className={'theme-switcher-menu'}></div>
					<div className={'auth-container'}>
						<li>
							<Button
								onClick={() => navigateTo('/login/')}
								label={'Log In'}
							/>
						</li>
						<li>
							<Button
								primary
								onClick={() => navigateTo('/register/')}
								label={'Sign Up'}
							/>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
