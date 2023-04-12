import * as React from 'react';

export const Select: React.FC<dropdownProps> = ({
																									options,
																									handle = () => null,
																									label,
																									disabled = false,
	required = false,
																									name,
																									id,
																									autoFocus = false,
																								}) => {
	// if a list of dropdownOptions are passed in as options, find the element with the selected property set to true or use the first element in the array
	const defaultSelectedFromObject = options.filter((option: string | dropdownOption) => typeof option === 'string' ? option : option.selected)[0] || options[0];
	const defaultSelectedFromStrings = options.length > 0 && (typeof options[0] === 'string' ? options[0] : options[0]);
	const [open, setOpen] = React.useState(autoFocus);
	const [selected, setSelected] = React.useState<string | dropdownOption>(defaultSelectedFromObject || defaultSelectedFromStrings);
	return (
			<div className='max-w-md' id={id}>
				<label className={`items-center flex ${label ? 'gap-x-7' : 'gap-0'} font-medium text-gray-900`} title={name}>
					{label && (
						<span className='sans text-royalblue capitalize flex-none font-semibold'>
					{label}
					</span>
					)}
					<select hidden={true} required={required}>
						{options.length > 0 &&
							options.map((option: string | dropdownOption, optionIndex) => (
								<option
									key={optionIndex}
									value={typeof option === 'string' ? option : option.value}
									selected={typeof option === 'string' ? false : option.selected}
								>
									{typeof option === 'string' ? option : option.label}
								</option>
							))}
					</select>
					<div
						className={`w-full p-3 border border-royalblue ${open && 'border-b-0'} focus:ring-0 ml-1 focus:outline-dashed focus:outline-royalblue sans capitalize font-bold text-2xl relative flex-1 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
						onClick={() => {
							if (!disabled) setOpen(!open);
						}}
						aria-expanded={open}
					>
						{/*	if a list of strings are passed in as options, display the first element in the array */}
						{/*	if a list of dropdownOptions are passed in as options, display the first element's label property */}
						{typeof selected === 'string' ? selected : (
							<span className='flex items-center justify-between'>
							{selected.icon}
								<span className='ml-2'>
								{selected.label}
							</span>
						</span>
						)}
						<ul
							className={`${open ? 'block' : 'hidden'} list-none ml-0 absolute top-full left-0 my-0 outline outline-1 outline-royalblue outline-offset-0 w-full px-0 py-1.5 shadow-lg transition-all`}>
							{options.length > 0 &&
								options.map((option: string | dropdownOption, optionIndex) => (
									<li key={optionIndex}
											className='cursor-pointer hover:underline hover:bg-wgray my-0 p-3'
											onClick={(e) => {
												const element = window.getSelection()
												console.log(element)
												setSelected(option);
												handle(e);
												setOpen(false);
											}}
											value={typeof option === 'string' ? option : option.label}
									>
										{typeof option === 'string' ? option : (
											<span className='flex items-center justify-between'>
											{option.icon}
												<span className='ml-2'>{option.label}</span>
										</span>
										)}
									</li>
								))
							}
						</ul>
					</div>
				</label>
			</div>
	);
};

export type dropdownProps = {
	/**
	 * The options to be displayed in the dropdown
	 */
	options: dropdownOption[] | string[]
	/**
	 * The function to be called when the select value changes
	 * @param event
	 * @returns void
	 * @default () => null
	 */
	handle?: (event: React.MouseEvent<HTMLLIElement>) => void
	/**
	 * The displayed label for the dropdown
	 */
	label?: string
	/**
	 * Specifies that a drop-down list should be disabled
	 * @default false
	 */
	disabled?: boolean
	/**
	 * Specifies that the user is required to select a value before submitting the form
	 * @default false
	 */
	required?: boolean
	/**
	 * The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).
	 */
	name?: string
	/**
	 * Specifies a unique id for the drop-down list
	 */
	id?: string
	/**
	 * Specifies that multiple options can be selected at once
	 * @default false
	 * @deprecated
	 */
	multiple?: boolean
	/**
	 * Defines the number of visible options in a drop-down list
	 * @default 1
	 * @deprecated
	 */
	size?: number
	/**
	 * Specifies that the drop-down list should automatically get focus when the page loads
	 * @default false
	 */
	autoFocus?: boolean
}

export type dropdownOption = {
	/**
	 * The programmatically accessible value of the option
	 */
	value: string
	/**
	 * The displayed label of the option
	 */
	label: string
	/**
	 * Optional icon to be displayed in the dropdown before the option
	 */
	icon?: React.ReactElement
	/**
	 * Specifies that an option should be disabled
	 */
	disabled?: boolean
	/**
	 * Specifies that an option should be pre-selected when the page loads
	 */
	selected?: boolean
}
