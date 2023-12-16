import { create } from '@storybook/theming';

const baseUrl = window.location.origin;

export default create({
	base: 'light',
	brandTitle: 'Eclipse UI',
	brandUrl: baseUrl,
	brandImage: '/logo.svg',
	brandTarget: '_self',
});
