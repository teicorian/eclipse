import React, { useState } from 'react';
import '../../table.css';
import ComponentsLayout from '../ComponentsLayout';
import { Card, Spacer, User } from '../../../components';
import CodeCard from '../../helpers/card.code';

const UserPage = () => {
	const user = {
		firstName: 'TJ',
		lastName: 'Bredemeyer',
		email: 'tj@teicor.com',
		src: 'https://assets-dev.teicor.com/users/0646193b6f9f4e5b9420e07532532935/pfp_f923ff1979c04d839c450d1bf7adfe30',
	};

	const primary = `<User firstName='${user.firstName}' lastName='${user.lastName}' />`;

	const withEmail = `<User firstName='${user.firstName}' lastName='${user.lastName}' email='tj@teicor.com' />`;

	const pfpRight = `<User firstName='${user.firstName}' lastName='${user.lastName}' right />`;

	const withImage = `<User firstName='${user.firstName}' lastName='${user.lastName}' src={'${user.src}'} />`;

	const large = `<User firstName='${user.firstName}' lastName='${user.lastName}' src={'${user.src}'} size={4} />`;

	const small = `<User firstName='${user.firstName}' lastName='${user.lastName}' src={'${user.src}'} size={1.5} />`;

	const team = `<User name='Teicor' />`;

	return (
		<ComponentsLayout>
			<p>A button can be a form submission or a link to a new page.</p>
			<Spacer h={2} />
			<h2>Primary</h2>
			<Spacer h={1} />
			A standard User with no image.
			<Spacer h={1} />
			<CodeCard code={primary} scope={{ User }} language='jsx' />
			<h2>With Email</h2>
			<Spacer h={1} />
			A User with email.
			<Spacer h={1} />
			<CodeCard code={withEmail} scope={{ User }} language='jsx' />
			<h2>User Aligned Right</h2>
			<Spacer h={1} />
			A User with PFP aligned right.
			<Spacer h={1} />
			<CodeCard code={pfpRight} scope={{ User }} language='jsx' />
			<h2>With Image</h2>
			<Spacer h={1} />
			A User with an image.
			<Spacer h={1} />
			<CodeCard code={withImage} scope={{ User }} language='jsx' />
			<h2>Large User</h2>
			<Spacer h={1} />
			A User with size large.
			<Spacer h={1} />
			<CodeCard code={large} scope={{ User }} language='jsx' />
			<h2>Small User</h2>
			<Spacer h={1} />
			A User with size small.
			<Spacer h={1} />
			<CodeCard code={small} scope={{ User }} language='jsx' />
			<h2>Team Card</h2>
			<Spacer h={1} />
			A team card.
			<Spacer h={1} />
			<CodeCard code={team} scope={{ User }} language='jsx' />
			<h2>APIs</h2>
			<Spacer h={1} />
			<Card>
				<Card.Body>
					<h3 className={'api-h3'}>`Button`</h3>
					<div className='table-container'>
						<table>
							<thead className={'table-header'}>
								<tr>
									<th>Attribute</th>
									<th>Description</th>
									<th>Type</th>
									<th className='col-wrap'>
										Accepted Values
									</th>
									<th>Default</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										label
										<span className='required'>
											&nbsp;(required)
										</span>
									</td>
									<td>button text</td>
									<td className={'styled'}>`string`</td>
									<td className={'col-wrap'}>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>primary</td>
									<td>primary mode</td>
									<td className={'styled'}>`boolean`</td>
									<td className={'col-wrap'}>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>deactivated</td>
									<td>deactivated mode</td>
									<td className={'styled'}>`boolean`</td>
									<td className={'col-wrap'}>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>warning</td>
									<td>warning mode</td>
									<td className={'styled'}>`boolean`</td>
									<td className={'col-wrap'}>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>size</td>
									<td>define size</td>
									<td className={'styled'}>`string`</td>
									<td className={'col-wrap styled'}>
										<span
											style={{
												color: '#fda069',
												background: '#f9f9f9',
												padding: '7px',
												borderRadius: '4px',
											}}
										>
											ButtonSizes
										</span>
									</td>
									<td className={'styled'}>'medium'</td>
								</tr>
								<tr>
									<td>onClick</td>
									<td>define click action</td>
									<td className={'styled'}>`ReactNode`</td>
									<td className={'col-wrap'}>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>to</td>
									<td>define link path</td>
									<td className={'styled'}>`string`</td>
									<td className={'col-wrap'}>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>type</td>
									<td>define button type</td>
									<td className={'styled'}>`string`</td>
									<td className={'col-wrap'}>
										<span
											style={{
												color: '#fda069',
												background: '#f9f9f9',
												padding: '7px',
												borderRadius: '4px',
											}}
										>
											ButtonTypes
										</span>
									</td>
									<td className={'styled'}>'submit'</td>
								</tr>
								<tr>
									<td>...</td>
									<td>native props</td>
									<td className={'styled'}>
										`ButtonHTMLAttributes`
									</td>
									<td className={'col-wrap styled'}>
										'id', 'className', ...
									</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h3 className={'api-h3'}>`Button.Size`</h3>
					<div className={'table-types'}>
						<span style={{ color: '#a569f9' }}>size </span>
						<span style={{ color: '#fda069' }}>ButtonSizes </span>=
						<ul>
							<li>| small</li>
							<li>| medium</li>
							<li>| large</li>
						</ul>
					</div>
					<h3 className={'api-h3'}>`Button.Type`</h3>
					<div className={'table-types'}>
						<span style={{ color: '#a569f9' }}>type </span>
						<span style={{ color: '#fda069' }}>ButtonTypes </span>=
						<ul>
							<li>| button</li>
							<li>| submit</li>
							<li>| reset</li>
						</ul>
					</div>
				</Card.Body>
			</Card>
			<Spacer h={6} />
		</ComponentsLayout>
	);
};

export default UserPage;
