import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { LiveProvider, LivePreview } from 'react-live';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import '../../code-theme.css';
import '../../table.css';
import ComponentsLayout from '../ComponentsLayout';
import Card from '../../../components/surfaces/Card/Card';
import Spacer from '../../../components/layout/Spacer/Spacer';
import Button from '../../../components/general/Button/Button';
import CodeCard from '../../helpers/card.code';

const ButtonPage = () => {
	const handleClick = () => {
		console.log('Button clicked!');
	};
	const scope = { Button };
	const primary = "<Button label='Button' primary />";
	const secondary = "<Button label='Button' />";
	const link = "<Button label='Button' to={''} />";
	const small = "<Button label='Button' size='small' />";
	const large = "<Button label='Button' size='large' />";
	const deactivated = "<Button label='Button' deactivated />";
	const warning = "<Button label='Button' warning />";

	return (
		<ComponentsLayout>
			<p>A button can be a form submission or a link to a new page.</p>
			<Spacer h={2} />
			<h2>Primary</h2>
			<Spacer h={1} />
			A button with primary importance.
			<Spacer h={1} />
			<CodeCard code={primary} scope={{ Button }} language='jsx' />
			<h2>Secondary</h2>
			<Spacer h={1} />
			A button with secondary importance.
			<Spacer h={1} />
			<CodeCard code={secondary} scope={{ Button }} language='jsx' />
			<h2>Link</h2>
			<Spacer h={1} />
			A button can be a link.
			<Spacer h={1} />
			<CodeCard code={link} scope={{ Button }} language='jsx' />
			<h2>Small</h2>
			<Spacer h={1} />
			A button can be small.
			<Spacer h={1} />
			<CodeCard code={small} scope={{ Button }} language='jsx' />
			<h2>Large</h2>
			<Spacer h={1} />
			A button can be large.
			<Spacer h={1} />
			<CodeCard code={large} scope={{ Button }} language='jsx' />
			<h2>Deactivated</h2>
			<Spacer h={1} />
			A button can be deactivated.
			<Spacer h={1} />
			<CodeCard code={deactivated} scope={{ Button }} language='jsx' />
			<h2>Warning</h2>
			<Spacer h={1} />
			A button can be a warning.
			<Spacer h={1} />
			<CodeCard code={warning} scope={{ Button }} language='jsx' />
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

export default ButtonPage;
