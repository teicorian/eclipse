import React, { useState } from 'react';
import ComponentsLayout from '../ComponentsLayout';
import { Card, Spacer, Select } from '../../../components';
import CodeCard from '../../helpers/card.code';
import '../../table.css';

const SelectPage = () => {
	const [selectedOption, setSelectedOption] = useState('');
	const handleSelectChange = (event) => setSelectedOption(event.target.value);

	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3Option 3Option 3Option 3Option 3' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	];

	const generalCode = `<Select options={options} placeholder="Select an option..." />`;
	const leftIconCode = `<Select options={options} left={<span>Prefix</span>} placeholder="With left prefix" />`;
	const rightIconCode = `<Select options={options} right="done" placeholder="With right icon" />`;
	const fullExampleCode = `<Select options={options} left={<span>Prefix</span>} right="done" placeholder="Full example" />`;

	return (
		<ComponentsLayout>
			<h1>Select Component</h1>
			<p>The `Select` component allows users to select an option from a dropdown list.</p>
			<Spacer h={2} />

			<h2>General Select</h2>
			<Spacer h={1} />
			<p>A basic select with placeholder text.</p>
			<Select
				options={options}
				placeholder='Select an option...'
				value={selectedOption}
				onChange={handleSelectChange}
			/>
			<Spacer h={1} />
			<CodeCard code={generalCode} scope={{ Select, options }} language='jsx' />

			<h2>Select with Left Prefix</h2>
			<Spacer h={1} />
			<p>A select component with an element on the left side (e.g., prefix text or icon).</p>
			<Select
				options={options}
				left={<span>Prefix</span>}
				placeholder='With left prefix'
				value={selectedOption}
				onChange={handleSelectChange}
			/>
			<Spacer h={1} />
			<CodeCard code={leftIconCode} scope={{ Select, options }} language='jsx' />

			<h2>Select with Right Icon</h2>
			<Spacer h={1} />
			<p>A select component with an icon or indicator on the right side.</p>
			<Select
				options={options}
				right='done'
				placeholder='With right icon'
				value={selectedOption}
				onChange={handleSelectChange}
			/>
			<Spacer h={1} />
			<CodeCard code={rightIconCode} scope={{ Select, options }} language='jsx' />

			<h2>Full Example</h2>
			<Spacer h={1} />
			<p>A select component with both left and right elements.</p>
			<Select
				options={options}
				left={<span>Prefix</span>}
				right='done'
				placeholder='Full example'
				value={selectedOption}
				onChange={handleSelectChange}
			/>
			<Spacer h={1} />
			<CodeCard code={fullExampleCode} scope={{ Select, options }} language='jsx' />

			<h2>API</h2>
			<Spacer h={1} />
			<Card>
				<Card.Body>
					<h3 className='api-h3'>`Select` Component</h3>
					<div className='table-container'>
						<table>
							<thead className='table-header'>
								<tr>
									<th>Attribute</th>
									<th>Description</th>
									<th>Type</th>
									<th>Accepted Values</th>
									<th>Default</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>options</td>
									<td>Array of options for the select dropdown</td>
									<td className='styled'>array</td>
									<td>Array of objects with value and label</td>
									<td>[]</td>
								</tr>
								<tr>
									<td>placeholder</td>
									<td>Placeholder text displayed when no option is selected</td>
									<td className='styled'>string</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>left</td>
									<td>Left element, such as an icon or text</td>
									<td className='styled'>ReactNode</td>
									<td>Icon or string</td>
									<td>-</td>
								</tr>
								<tr>
									<td>right</td>
									<td>Right element, such as an icon or status indicator</td>
									<td className='styled'>ReactNode</td>
									<td>Icon or string (e.g., "done", "error")</td>
									<td>-</td>
								</tr>
								<tr>
									<td>onChange</td>
									<td>Function called when the selected option changes</td>
									<td className='styled'>function</td>
									<td>Function(event)</td>
									<td>-</td>
								</tr>
								<tr>
									<td>value</td>
									<td>The currently selected option's value</td>
									<td className='styled'>string | number</td>
									<td>-</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Card.Body>
			</Card>
			<Spacer h={6} />
		</ComponentsLayout>
	);
};

export default SelectPage;
