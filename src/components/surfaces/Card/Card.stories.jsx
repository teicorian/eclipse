import React from 'react';
import Card from './Card';
import Button from '../../general/Button/Button';
import Input from '../../data_entry/Input/Input';
import Spacer from '../../layout/Spacer/Spacer';

export default {
	title: 'Surfaces/Card',
	component: Card,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [],
};

export const Primary = (args) => (
	<Card {...args} type={args.type}>
		<Card.Header>Header</Card.Header>
		<Card.Body>
			<Input />
			<Spacer h={1} />
			<Input type='password' minLength={8} />
		</Card.Body>
		<Card.Footer>Footer</Card.Footer>
	</Card>
);
Primary.args = {};

export const PrimaryButton = (args) => (
	<Card {...args} type={args.type}>
		<Card.Header>Header</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.FooterButton>
			<p>Footer</p>
			<Button label='Save' primary />
		</Card.FooterButton>
	</Card>
);
PrimaryButton.args = {};

export const Deactivated = (args) => (
	<Card {...args} type={args.type}>
		<Card.Header>Header</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer>Footer</Card.Footer>
	</Card>
);
Deactivated.args = { type: 'deactivated' };

export const DeactivatedButton = (args) => (
	<Card {...args} type={args.type}>
		<Card.Header>Header</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.FooterButton>
			<p>Footer</p>
			<Button label='Save' deactivated />
		</Card.FooterButton>
	</Card>
);
DeactivatedButton.args = { type: 'deactivated' };

export const Warning = (args) => (
	<Card {...args} type={args.type}>
		<Card.Header>Header</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.Footer>Footer</Card.Footer>
	</Card>
);
Warning.args = { type: 'warning' };

export const WarningButton = (args) => (
	<Card {...args} type={args.type}>
		<Card.Header>Header</Card.Header>
		<Card.Body>Body</Card.Body>
		<Card.FooterButton>
			<p>Footer</p>
			<Button label='Delete' warning />
		</Card.FooterButton>
	</Card>
);
WarningButton.args = { type: 'warning' };
