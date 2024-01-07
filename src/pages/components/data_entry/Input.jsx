import React, { useState } from 'react';
import '../../table.css';
import ComponentsLayout from '../ComponentsLayout';
import { Card, Spacer, Input } from '../../../components';
import CodeCard from '../../helpers/card.code';

const InputPage = () => {
	const handleClick = () => {
		console.log('Button clicked!');
	};
	const [debugPassword, setDebugPassword] = useState('');
	const handleChange = (event) => {
		const newPassword = event.target.value;
		setDebugPassword(newPassword);
	};
	const general = "<Input placeholder='General input...' />";
	const password =
		"<Input type='password' placeholder='Password input...' />";
	const left =
		"<Input left={'teicor.com/'} placeholder='Left modified input...' />";
	const right =
		"<Input right={'done'} placeholder='Right modified input...' />";

	return (
		<ComponentsLayout>
			<p>A button can be a form submission or a link to a new page.</p>
			<Spacer h={2} />
			<h2>General</h2>
			<Spacer h={1} />
			A general input field.
			<Spacer h={1} />
			<CodeCard code={general} scope={{ Input }} language='jsx' />
			<h2>Password</h2>
			<Spacer h={1} />
			A password input field.
			<Spacer h={1} />
			<CodeCard code={password} scope={{ Input }} language='jsx' />
			<h2>Left modified</h2>
			<Spacer h={1} />
			An input field with assets on the left side.
			<Spacer h={1} />
			<CodeCard code={left} scope={{ Input }} language='jsx' />
			<h2>Right modified</h2>
			<Spacer h={1} />
			An input field with assets on the right side.
			<Spacer h={1} />
			<CodeCard code={right} scope={{ Input }} language='jsx' />
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

export default InputPage;
