import { create } from '@storybook/theming/create';

const baseUrl = window.location.origin;

export default create({
	base: 'light',
	brandTitle: 'Eclipse UI',
	brandUrl: baseUrl,
	brandImage: 'https://echo-ui.com/logo.svg',
	brandTarget: '_self',
});
