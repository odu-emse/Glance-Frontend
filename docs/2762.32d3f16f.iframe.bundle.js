;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[2762],
	{
		'./components/common/forms/inputs/input/input.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { I: () => Input })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				Input = function Input(_ref) {
					var label = _ref.label,
						name = _ref.name,
						role = _ref.role,
						_onChange = _ref.onChange,
						_ref$required = _ref.required,
						required = void 0 !== _ref$required && _ref$required,
						type = _ref.type,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						description = _ref.description,
						_ref$error = _ref.error,
						error = void 0 !== _ref$error && _ref$error,
						_ref$placeholder = _ref.placeholder,
						placeholder =
							void 0 === _ref$placeholder
								? 'Enter here'
								: _ref$placeholder,
						_ref$className = _ref.className,
						className =
							void 0 === _ref$className ? '' : _ref$className,
						length = _ref.length,
						content = _ref.content,
						min = _ref.min,
						max = _ref.max,
						value = _ref.value,
						_ref$checked = _ref.checked,
						checked = void 0 !== _ref$checked && _ref$checked,
						_useState = (0,
						react__WEBPACK_IMPORTED_MODULE_0__.useState)(checked),
						isChecked = _useState[0],
						setIsChecked = _useState[1],
						inputShape =
							'radio' === type ? 'rounded-full' : 'rounded-sm',
						handleInputChange = function handleInputChange() {
							disabled || setIsChecked(!isChecked)
						},
						classes = [
							className,
							'block appearance-none focus:outline-none focus:ring-0 peer',
							error
								? 'border-red-500 focus:border-red-600'
								: 'border-wgray',
							disabled
								? 'cursor-not-allowed'
								: 'focus:border-royalblue hover:border-royalblue',
							length
								? ''.concat(
										'short' === length
											? 'w-1/6'
											: 'normal' === length
											? 'w-1/3'
											: 'long' === length
											? 'w-1/2'
											: 'w-full'
								  )
								: '',
							'radio' === type || 'checkbox' === type
								? 'sr-only'
								: 'border-2',
							'range' === type ? 'h-1 cursor-ew-resize' : '',
						].join(' ')
					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						__jsx(
							'div',
							{
								className: ' '.concat(
									'radio' === type || 'checkbox' === type
										? 'flex items-center'
										: ''
								),
							},
							label &&
								__jsx(
									'h2',
									{ className: 'font-medium mb-1' },
									__jsx(
										'label',
										{ htmlFor: name },
										' ',
										label.toUpperCase()
									)
								),
							__jsx('input', {
								type,
								name,
								id: name,
								placeholder,
								role,
								'aria-label': type,
								className: classes,
								checked: isChecked,
								required,
								disabled,
								min: 'range' === type ? min : void 0,
								max: 'range' === type ? max : void 0,
								value: 'range' === type ? value : void 0,
								onChange: function onChange(event) {
									;('checkbox' !== type &&
										'radio' !== type) ||
										handleInputChange(),
										_onChange(event.target.value)
								},
							}),
							'radio' === type || 'checkbox' === type
								? __jsx(
										'div',
										{
											className:
												'flex items-center w-4 h-4 '
													.concat(
														inputShape,
														' border '
													)
													.concat(
														disabled
															? ''
															: 'cursor-pointer',
														' '
													)
													.concat(
														isChecked
															? 'bg-white border-royalblue'
															: 'bg-white border-wgray'
													),
											onClick: handleInputChange,
										},
										isChecked &&
											__jsx('div', {
												className:
													'w-3 h-3 mx-auto my-auto bg-royalblue '.concat(
														'radio' === type
															? 'rounded-full'
															: 'rounded'
													),
											})
								  )
								: null,
							'radio' === type || 'checkbox' === type
								? __jsx('label', { className: 'ml-1' }, content)
								: null,
							description &&
								__jsx(
									'p',
									{
										id: 'helper-text-explanation',
										className: 'my-0 '.concat(
											error ? 'text-red-600' : ''
										),
									},
									error
										? 'Wrong '.concat(type)
										: 'This is a test message'
								)
						)
					)
				}
			Input.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'Input',
				props: {
					required: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'The required attribute is used to indicate weather the input element is required or not.',
					},
					disabled: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'The disabled attribute is used to indicate weather the input element is disabled or not.',
					},
					error: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'The error value is used to render different styles of the input element based on the current error state that is passed in as a parameter.',
					},
					placeholder: {
						defaultValue: { value: "'Enter here'", computed: !1 },
						required: !1,
						tsType: { name: 'string' },
						description:
							'The placeholder value is used to provide a placeholder for the input element. This is used to provide additional context to the user, under the input element.',
					},
					className: {
						defaultValue: { value: "''", computed: !1 },
						required: !1,
						tsType: { name: 'string' },
						description:
							'The className value is used to provide a custom class name to the input element.',
					},
					checked: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'A boolean determines whether the input box is checked or not',
					},
					label: {
						required: !0,
						tsType: { name: 'string' },
						description:
							'The label for the input. This will be the floating element that is displayed above the input.',
					},
					name: {
						required: !0,
						tsType: { name: 'string' },
						description:
							'The name of the input. This is used to identify the input when it is submitted. This value is also used by the label element to identify the `htmlFor` attribute.',
					},
					role: {
						required: !1,
						tsType: { name: 'string' },
						description:
							'The role attribute on the input allows the browser to gather knowledge about the purpose of the input. This improves accessibility, device adaptation, and cross browser synchronicity.',
					},
					onChange: {
						required: !0,
						tsType: {
							name: 'signature',
							type: 'function',
							raw: '(e: string) => void',
							signature: {
								arguments: [
									{ name: 'e', type: { name: 'string' } },
								],
								return: { name: 'void' },
							},
						},
						description:
							'The on Change event handler for the input. This is used to update the value of the input.\n@param value The value of the input event.',
					},
					description: {
						required: !1,
						tsType: {
							name: 'union',
							raw: 'string | React.ReactNode | React.ReactElement',
							elements: [
								{ name: 'string' },
								{
									name: 'ReactReactNode',
									raw: 'React.ReactNode',
								},
								{
									name: 'ReactReactElement',
									raw: 'React.ReactElement',
								},
							],
						},
						description:
							"The description value is used to give users additional information about the either the input or the error that happened. This is used to provide additional context to the user, under the input element. This is just supplementary information, so it's visual hierarchy should not interfere with the input element's.",
					},
					type: {
						required: !0,
						tsType: {
							name: 'union',
							raw: "| 'text'\n| 'email'\n| 'password'\n| 'search'\n| 'url'\n| 'tel'\n| 'number'\n| 'file'\n| 'radio'\n| 'checkbox'\n| 'range'",
							elements: [
								{ name: 'literal', value: "'text'" },
								{ name: 'literal', value: "'email'" },
								{ name: 'literal', value: "'password'" },
								{ name: 'literal', value: "'search'" },
								{ name: 'literal', value: "'url'" },
								{ name: 'literal', value: "'tel'" },
								{ name: 'literal', value: "'number'" },
								{ name: 'literal', value: "'file'" },
								{ name: 'literal', value: "'radio'" },
								{ name: 'literal', value: "'checkbox'" },
								{ name: 'literal', value: "'range'" },
							],
						},
						description:
							'The input type determines the way browsers conduct their validation and on a device by device basis it can change the keyboard behavior for the user.',
					},
					ariaLabel: {
						required: !1,
						tsType: { name: 'string' },
						description:
							"The aria-label attribute is used to provide a label for the input element. This is used to provide additional context to the user, under the input element. This is just supplementary information, so its visual hierarchy should not interfere with the input element's.",
					},
					length: {
						required: !0,
						tsType: {
							name: 'union',
							raw: "'short' | 'normal' | 'long' | 'full'",
							elements: [
								{ name: 'literal', value: "'short'" },
								{ name: 'literal', value: "'normal'" },
								{ name: 'literal', value: "'long'" },
								{ name: 'literal', value: "'full'" },
							],
						},
						description:
							'An enum that specifies the length of the input field',
					},
					content: {
						required: !1,
						tsType: { name: 'string' },
						description: 'Content string for radio input',
					},
					min: {
						required: !1,
						tsType: { name: 'number' },
						description:
							'The `min` attribute is used to specify the minimum value for a range slider',
					},
					max: {
						required: !1,
						tsType: { name: 'number' },
						description:
							'The `max` attribute is used to specify the maximum value for a range slider',
					},
					value: {
						required: !1,
						tsType: { name: 'number' },
						description:
							'The `value` attribute is used to define the initial value of a range slider',
					},
				},
			}
			try {
				;(Input.displayName = 'Input'),
					(Input.__docgenInfo = {
						description: '',
						displayName: 'Input',
						props: {
							label: {
								defaultValue: null,
								description:
									'The label for the input. This will be the floating element that is displayed above the input.',
								name: 'label',
								required: !0,
								type: { name: 'string' },
							},
							name: {
								defaultValue: null,
								description:
									'The name of the input. This is used to identify the input when it is submitted. This value is also used by the label element to identify the `htmlFor` attribute.',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							role: {
								defaultValue: null,
								description:
									'The role attribute on the input allows the browser to gather knowledge about the purpose of the input. This improves accessibility, device adaptation, and cross browser synchronicity.',
								name: 'role',
								required: !1,
								type: { name: 'string' },
							},
							onChange: {
								defaultValue: null,
								description:
									'The on Change event handler for the input. This is used to update the value of the input.\n@param value The value of the input event.',
								name: 'onChange',
								required: !0,
								type: { name: '(e: string) => void' },
							},
							description: {
								defaultValue: null,
								description:
									"The description value is used to give users additional information about the either the input or the error that happened. This is used to provide additional context to the user, under the input element. This is just supplementary information, so it's visual hierarchy should not interfere with the input element's.",
								name: 'description',
								required: !1,
								type: {
									name: 'ReactElement<any, string | JSXElementConstructor<any>> | ReactNode',
								},
							},
							required: {
								defaultValue: { value: 'false' },
								description:
									'The required attribute is used to indicate weather the input element is required or not.',
								name: 'required',
								required: !1,
								type: { name: 'boolean' },
							},
							type: {
								defaultValue: null,
								description:
									'The input type determines the way browsers conduct their validation and on a device by device basis it can change the keyboard behavior for the user.',
								name: 'type',
								required: !0,
								type: {
									name: 'enum',
									value: [
										{ value: '"number"' },
										{ value: '"text"' },
										{ value: '"url"' },
										{ value: '"email"' },
										{ value: '"password"' },
										{ value: '"search"' },
										{ value: '"tel"' },
										{ value: '"file"' },
										{ value: '"radio"' },
										{ value: '"checkbox"' },
										{ value: '"range"' },
									],
								},
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'The disabled attribute is used to indicate weather the input element is disabled or not.',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							error: {
								defaultValue: { value: 'false' },
								description:
									'The error value is used to render different styles of the input element based on the current error state that is passed in as a parameter.',
								name: 'error',
								required: !1,
								type: { name: 'boolean' },
							},
							ariaLabel: {
								defaultValue: null,
								description:
									"The aria-label attribute is used to provide a label for the input element. This is used to provide additional context to the user, under the input element. This is just supplementary information, so its visual hierarchy should not interfere with the input element's.",
								name: 'ariaLabel',
								required: !1,
								type: { name: 'string' },
							},
							placeholder: {
								defaultValue: { value: 'Enter here' },
								description:
									'The placeholder value is used to provide a placeholder for the input element. This is used to provide additional context to the user, under the input element.',
								name: 'placeholder',
								required: !1,
								type: { name: 'string' },
							},
							className: {
								defaultValue: { value: '' },
								description:
									'The className value is used to provide a custom class name to the input element.',
								name: 'className',
								required: !1,
								type: { name: 'string' },
							},
							length: {
								defaultValue: null,
								description:
									'An enum that specifies the length of the input field',
								name: 'length',
								required: !0,
								type: {
									name: 'enum',
									value: [
										{ value: '"short"' },
										{ value: '"normal"' },
										{ value: '"long"' },
										{ value: '"full"' },
									],
								},
							},
							content: {
								defaultValue: null,
								description: 'Content string for radio input',
								name: 'content',
								required: !1,
								type: { name: 'string' },
							},
							checked: {
								defaultValue: { value: 'false' },
								description:
									'A boolean determines whether the input box is checked or not',
								name: 'checked',
								required: !1,
								type: { name: 'boolean' },
							},
							min: {
								defaultValue: null,
								description:
									'The `min` attribute is used to specify the minimum value for a range slider',
								name: 'min',
								required: !1,
								type: { name: 'number' },
							},
							max: {
								defaultValue: null,
								description:
									'The `max` attribute is used to specify the maximum value for a range slider',
								name: 'max',
								required: !1,
								type: { name: 'number' },
							},
							value: {
								defaultValue: null,
								description:
									'The `value` attribute is used to define the initial value of a range slider',
								name: 'value',
								required: !1,
								type: { name: 'number' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/inputs/input/input.tsx#Input'
						] = {
							docgenInfo: Input.__docgenInfo,
							name: 'Input',
							path: 'components/common/forms/inputs/input/input.tsx#Input',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/forms/inputs/text_area/text_area.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { K: () => TextArea })
			var react = __webpack_require__('./node_modules/react/index.js')
			const use_autosize_text_area = function useAutosizeTextArea(
				textAreaRef,
				value
			) {
				;(0, react.useEffect)(
					function () {
						if (textAreaRef) {
							textAreaRef.style.height = '0px'
							var scrollHeight = textAreaRef.scrollHeight
							textAreaRef.style.height = scrollHeight + 'px'
						}
					},
					[textAreaRef, value]
				)
			}
			var __jsx = react.createElement,
				TextArea = function TextArea(_ref) {
					var _ref$handle = _ref.handle,
						handle =
							void 0 === _ref$handle
								? function () {
										return null
								  }
								: _ref$handle,
						_ref$value = _ref.value,
						value = void 0 === _ref$value ? '' : _ref$value,
						_ref$id = _ref.id,
						id = void 0 === _ref$id ? 'text-area' : _ref$id,
						_ref$role = _ref.role,
						role = void 0 === _ref$role ? 'textbox' : _ref$role,
						_ref$name = _ref.name,
						name = void 0 === _ref$name ? 'text-area' : _ref$name,
						_ref$rows = _ref.rows,
						rows = void 0 === _ref$rows ? 2 : _ref$rows,
						_ref$placeholder = _ref.placeholder,
						placeholder =
							void 0 === _ref$placeholder ? '' : _ref$placeholder,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						_ref$maxLength = _ref.maxLength,
						maxLength =
							void 0 === _ref$maxLength ? 1e3 : _ref$maxLength,
						_ref$required = _ref.required,
						required = void 0 !== _ref$required && _ref$required,
						_ref$readOnly = _ref.readOnly,
						readOnly = void 0 !== _ref$readOnly && _ref$readOnly,
						_ref$wrap = _ref.wrap,
						wrap = void 0 === _ref$wrap ? 'soft' : _ref$wrap,
						_ref$autofocus = _ref.autofocus,
						autofocus = void 0 !== _ref$autofocus && _ref$autofocus,
						_ref$label = _ref.label,
						label = void 0 === _ref$label ? '' : _ref$label,
						_ref$defaultValue = (_ref.onChange, _ref.defaultValue),
						defaultValue =
							void 0 === _ref$defaultValue
								? ''
								: _ref$defaultValue,
						_ref$className = _ref.className,
						className =
							void 0 === _ref$className ? '' : _ref$className,
						_ref$icon = _ref.icon,
						icon = void 0 === _ref$icon || _ref$icon,
						textAreaRef = (0, react.useRef)(null)
					use_autosize_text_area(textAreaRef.current, value)
					var classes = [
						className,
						'w-full bg-white placeholder:italic border border-2 border-wgray shadow-md focus:outline-none focus:ring-0 peer rounded-sm py-2 pl-3 pr-10 disabled:opacity-50 disabled:cursor-not-allowed',
						value.length === maxLength
							? 'border-red-400 focus:border-red-500 hover:border-red-400'
							: 'focus:border-royalblue',
						disabled || value.length === maxLength
							? ''
							: 'hover:border-royalblue',
					].join(' ')
					return __jsx(
						'div',
						null,
						__jsx(
							'label',
							{ htmlFor: id, className: '' },
							label && __jsx('h2', null, label.toUpperCase()),
							__jsx(
								'div',
								{ className: 'relative' },
								__jsx('textarea', {
									id,
									defaultValue,
									onChange: handle,
									ref: textAreaRef,
									rows,
									name,
									role,
									placeholder,
									disabled,
									maxLength,
									required,
									readOnly,
									wrap,
									autoFocus: autofocus,
									className: classes,
								}),
								icon &&
									__jsx('span', {
										className:
											'absolute right-2 bottom-2 flex items-center '.concat(
												disabled ? 'opacity-50' : ''
											),
									})
							),
							value.length === maxLength &&
								__jsx(
									'span',
									{
										className:
											'text-xs px-2 bg-gray-100 ml-auto mr-0 block w-fit',
									},
									'Maximum characters: ',
									maxLength
								)
						)
					)
				}
			;(TextArea.displayName = 'TextArea'),
				(TextArea.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'TextArea',
					props: {
						handle: {
							defaultValue: { value: '() => null', computed: !1 },
							required: !1,
						},
						value: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						id: {
							defaultValue: {
								value: "'text-area'",
								computed: !1,
							},
							required: !1,
						},
						role: {
							defaultValue: { value: "'textbox'", computed: !1 },
							required: !1,
						},
						name: {
							defaultValue: {
								value: "'text-area'",
								computed: !1,
							},
							required: !1,
						},
						rows: {
							defaultValue: { value: '2', computed: !1 },
							required: !1,
						},
						placeholder: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						disabled: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						maxLength: {
							defaultValue: { value: '1000', computed: !1 },
							required: !1,
						},
						required: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						readOnly: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						wrap: {
							defaultValue: { value: "'soft'", computed: !1 },
							required: !1,
						},
						autofocus: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						label: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						defaultValue: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						className: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						icon: {
							defaultValue: { value: 'true', computed: !1 },
							required: !1,
						},
					},
				})
			try {
				;(TextArea.displayName = 'TextArea'),
					(TextArea.__docgenInfo = {
						description: '',
						displayName: 'TextArea',
						props: {
							handle: {
								defaultValue: { value: '() => null' },
								description:
									'A event handler that changes the value of the text area element',
								name: 'handle',
								required: !1,
								type: {
									name: '(evt: ChangeEvent<HTMLTextAreaElement>) => void',
								},
							},
							value: {
								defaultValue: { value: '' },
								description:
									'A default string value which will be displayed in the element on page load',
								name: 'value',
								required: !1,
								type: { name: 'string' },
							},
							id: {
								defaultValue: { value: 'text-area' },
								description:
									'A string defines an identifier which must be unique in the whole document',
								name: 'id',
								required: !1,
								type: { name: 'string' },
							},
							role: {
								defaultValue: { value: 'textbox' },
								description:
									'A string defines an explicit role for the text area element for use by assistive technologies',
								name: 'role',
								required: !1,
								type: { name: 'string' },
							},
							name: {
								defaultValue: { value: 'text-area' },
								description:
									'A string defines the name of the text area element',
								name: 'name',
								required: !1,
								type: { name: 'string' },
							},
							rows: {
								defaultValue: { value: '2' },
								description:
									'A number defines the number of rows in a text area',
								name: 'rows',
								required: !1,
								type: { name: 'number' },
							},
							placeholder: {
								defaultValue: { value: '' },
								description:
									'A string that provides a hint to the user of what can be entered in the text field',
								name: 'placeholder',
								required: !1,
								type: { name: 'string' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'A boolean makes the text area not mutable, focusable, or even submitted with the form',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							maxLength: {
								defaultValue: { value: '1000' },
								description:
									'A number determines the maximum characters allowed for user input inside the text area',
								name: 'maxLength',
								required: !1,
								type: { name: 'number' },
							},
							required: {
								defaultValue: { value: 'false' },
								description:
									'A boolean indicates that the user must specify a value for the input before the owning form can be submitted',
								name: 'required',
								required: !1,
								type: { name: 'boolean' },
							},
							readOnly: {
								defaultValue: { value: 'false' },
								description:
									'A Boolean makes the element not mutable, meaning the user can not edit the control',
								name: 'readOnly',
								required: !1,
								type: { name: 'boolean' },
							},
							wrap: {
								defaultValue: { value: 'soft' },
								description:
									'An enum that specifies how the text in a text area is to be wrapped when submitted in a form',
								name: 'wrap',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"soft"' },
										{ value: '"hard"' },
									],
								},
							},
							autofocus: {
								defaultValue: { value: 'false' },
								description:
									'A boolean that determines whether the text area element should be focused on page load',
								name: 'autofocus',
								required: !1,
								type: { name: 'boolean' },
							},
							label: {
								defaultValue: { value: '' },
								description:
									'A string that represents a caption for the text area',
								name: 'label',
								required: !1,
								type: { name: 'string' },
							},
							defaultValue: {
								defaultValue: { value: '' },
								description:
									'A string that represents a default value for the text area',
								name: 'defaultValue',
								required: !1,
								type: { name: 'string' },
							},
							className: {
								defaultValue: { value: '' },
								description:
									'A string that represents a class name for the text area',
								name: 'className',
								required: !1,
								type: { name: 'string' },
							},
							icon: {
								defaultValue: { value: 'true' },
								description:
									'A boolean that determines whether the text area should have an icon inside of it or not shown at all',
								name: 'icon',
								required: !1,
								type: { name: 'boolean' },
							},
							onChange: {
								defaultValue: null,
								description:
									'The on Change event handler for the input. This is used to update the value of the input.\n@param value The value of the input event for the textarea.',
								name: 'onChange',
								required: !0,
								type: { name: '(e: string) => void' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/inputs/text_area/text_area.tsx#TextArea'
						] = {
							docgenInfo: TextArea.__docgenInfo,
							name: 'TextArea',
							path: 'components/common/forms/inputs/text_area/text_area.tsx#TextArea',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/user/editable_field.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, {
				Z: () => __WEBPACK_DEFAULT_EXPORT__,
			})
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				_common_forms_inputs_input_input__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./components/common/forms/inputs/input/input.tsx'
					),
				_common_forms_inputs_text_area_text_area__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./components/common/forms/inputs/text_area/text_area.tsx'
					),
				react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						'./node_modules/react-icons/fa/index.esm.js'
					),
				next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/next/link.js'
				),
				next_link__WEBPACK_IMPORTED_MODULE_3___default =
					__webpack_require__.n(
						next_link__WEBPACK_IMPORTED_MODULE_3__
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
			function EditableField(_ref) {
				var type = _ref.type,
					isEditing = _ref.isEditing,
					inputDetails = _ref.inputDetails,
					header = _ref.header,
					_ref$platform = _ref.platform,
					platform = void 0 === _ref$platform ? null : _ref$platform,
					_ref$headerURL = _ref.headerURL,
					headerURL =
						void 0 === _ref$headerURL ? null : _ref$headerURL,
					_ref$isHeader = _ref.isHeader,
					isHeader = void 0 === _ref$isHeader || _ref$isHeader
				if ('text' === type) {
					var details = inputDetails
					return isEditing
						? __jsx(
								_common_forms_inputs_input_input__WEBPACK_IMPORTED_MODULE_1__.I,
								{
									type: details.type,
									placeholder: details.placeholder,
									defaultValue: details.defaultValue,
									label: details.label || null,
									name: details.name,
									onChange: details.onChange,
									className: details.className,
								}
						  )
						: details.defaultValue &&
						  void 0 !== details.defaultValue
						? __jsx(
								'div',
								{ className: 'flex gap-3 items-center ml-3' },
								headerURL
									? __jsx(
											next_link__WEBPACK_IMPORTED_MODULE_3___default(),
											{ href: headerURL },
											__jsx(
												'a',
												{
													className:
														'cursor-pointer flex gap-3 items-center no-underline',
													target: '_blank',
												},
												__jsx(IconSwitch, { platform }),
												__jsx(
													'h4',
													{
														className:
															'my-1 sans text-royalblue',
													},
													header
												)
											)
									  )
									: __jsx(
											react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
											null,
											__jsx(IconSwitch, { platform }),
											isHeader
												? __jsx(
														'h4',
														{
															className:
																'my-1 sans text-black uppercase',
														},
														header
												  )
												: __jsx(
														'p',
														{
															className:
																'my-1 sans text-black font-normal',
														},
														header
												  )
									  )
						  )
						: null
				}
				if ('area' === type) {
					var _details = inputDetails
					return isEditing
						? __jsx(
								_common_forms_inputs_text_area_text_area__WEBPACK_IMPORTED_MODULE_2__.K,
								{
									placeholder: _details.placeholder,
									defaultValue: _details.defaultValue,
									label: _details.label || null,
									name: _details.name,
									handle: _details.handle,
									className: _details.className,
								}
						  )
						: _details.defaultValue &&
						  void 0 !== _details.defaultValue
						? __jsx(
								'p',
								{ className: 'my-3.5 sans ml-3' },
								_details.defaultValue
						  )
						: null
				}
			}
			var IconSwitch = function IconSwitch(_ref2) {
				switch (_ref2.platform) {
					case 'facebook':
						return __jsx(
							react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.Am9,
							null
						)
					case 'github':
						return __jsx(
							react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.hJX,
							null
						)
					case 'linkedin':
						return __jsx(
							react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.ltd,
							null
						)
					case 'twitter':
						return __jsx(
							react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.fWC,
							null
						)
					case 'url':
						return __jsx(
							react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.gjK,
							null
						)
					default:
						return null
				}
			}
			EditableField.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'EditableField',
				props: {
					platform: {
						defaultValue: { value: 'null', computed: !1 },
						required: !1,
						tsType: { name: 'string' },
						description: '',
					},
					headerURL: {
						defaultValue: { value: 'null', computed: !1 },
						required: !1,
						tsType: {
							name: 'union',
							raw: 'string | null',
							elements: [{ name: 'string' }, { name: 'null' }],
						},
						description: 'The url to link the header to',
					},
					isHeader: {
						defaultValue: { value: 'true', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'determines whether the text displayed will be uppercase with a h4 tag or lowercase with a p tag',
					},
					type: {
						required: !0,
						tsType: {
							name: 'union',
							raw: "'text' | 'area'",
							elements: [
								{ name: 'literal', value: "'text'" },
								{ name: 'literal', value: "'area'" },
							],
						},
						description: 'The type of input field to display',
					},
					inputDetails: {
						required: !0,
						tsType: {
							name: 'union',
							raw: 'TextAreaProps | InputProps',
							elements: [
								{ name: 'TextAreaProps' },
								{ name: 'InputProps' },
							],
						},
						description: 'The details of the input field',
					},
					isEditing: {
						required: !0,
						tsType: { name: 'boolean' },
						description: 'Whether the field is in edit mode',
					},
					header: {
						required: !1,
						tsType: {
							name: 'union',
							raw: 'string | null',
							elements: [{ name: 'string' }, { name: 'null' }],
						},
						description:
							'The header to display when not in edit mode',
					},
				},
			}
			const __WEBPACK_DEFAULT_EXPORT__ = EditableField
			try {
				;(EditableField.displayName = 'EditableField'),
					(EditableField.__docgenInfo = {
						description: '',
						displayName: 'EditableField',
						props: {
							type: {
								defaultValue: null,
								description:
									'The type of input field to display',
								name: 'type',
								required: !0,
								type: {
									name: 'enum',
									value: [
										{ value: '"text"' },
										{ value: '"area"' },
									],
								},
							},
							inputDetails: {
								defaultValue: null,
								description: 'The details of the input field',
								name: 'inputDetails',
								required: !0,
								type: { name: 'TextAreaProps | InputProps' },
							},
							isEditing: {
								defaultValue: null,
								description:
									'Whether the field is in edit mode',
								name: 'isEditing',
								required: !0,
								type: { name: 'boolean' },
							},
							header: {
								defaultValue: null,
								description:
									'The header to display when not in edit mode',
								name: 'header',
								required: !1,
								type: { name: 'string' },
							},
							platform: {
								defaultValue: { value: 'null' },
								description: '',
								name: 'platform',
								required: !1,
								type: { name: 'string' },
							},
							headerURL: {
								defaultValue: { value: 'null' },
								description: 'The url to link the header to',
								name: 'headerURL',
								required: !1,
								type: { name: 'string' },
							},
							isHeader: {
								defaultValue: { value: 'true' },
								description:
									'determines whether the text displayed will be uppercase with a h4 tag or lowercase with a p tag',
								name: 'isHeader',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/user/editable_field.tsx#EditableField'
						] = {
							docgenInfo: EditableField.__docgenInfo,
							name: 'EditableField',
							path: 'components/common/user/editable_field.tsx#EditableField',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./node_modules/next/dist/client/get-domain-locale.js': (
			module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var process = __webpack_require__(
				'./node_modules/process/browser.js'
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getDomainLocale = function getDomainLocale(
					path,
					locale,
					locales,
					domainLocales
				) {
					if (process.env.__NEXT_I18N_SUPPORT) {
						const normalizeLocalePath = __webpack_require__(
								'./node_modules/next/dist/client/normalize-locale-path.js'
							).normalizeLocalePath,
							detectDomainLocale = __webpack_require__(
								'./node_modules/next/dist/client/detect-domain-locale.js'
							).detectDomainLocale,
							target =
								locale ||
								normalizeLocalePath(path, locales)
									.detectedLocale,
							domain = detectDomainLocale(
								domainLocales,
								void 0,
								target
							)
						if (domain) {
							const proto = `http${domain.http ? '' : 's'}://`,
								finalLocale =
									target === domain.defaultLocale
										? ''
										: `/${target}`
							return `${proto}${domain.domain}${basePath}${finalLocale}${path}`
						}
						return !1
					}
					return !1
				})
			const basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
			;('function' == typeof exports.default ||
				('object' == typeof exports.default &&
					null !== exports.default)) &&
				void 0 === exports.default.__esModule &&
				(Object.defineProperty(exports.default, '__esModule', {
					value: !0,
				}),
				Object.assign(exports.default, exports),
				(module.exports = exports.default))
		},
		'./node_modules/next/dist/client/link.js': (
			module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = void 0)
			var _interop_require_default = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_default.js'
				).Z,
				_object_without_properties_loose = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_object_without_properties_loose.js'
				).Z,
				_react = _interop_require_default(
					__webpack_require__('./node_modules/react/index.js')
				),
				_router = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/router.js'
				),
				_addLocale = __webpack_require__(
					'./node_modules/next/dist/client/add-locale.js'
				),
				_routerContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router-context.js'
				),
				_appRouterContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/app-router-context.js'
				),
				_useIntersection = __webpack_require__(
					'./node_modules/next/dist/client/use-intersection.js'
				),
				_getDomainLocale = __webpack_require__(
					'./node_modules/next/dist/client/get-domain-locale.js'
				),
				_addBasePath = __webpack_require__(
					'./node_modules/next/dist/client/add-base-path.js'
				)
			const hasUseTransition = void 0 !== _react.default.useTransition,
				prefetched = {}
			function prefetch(router, href, as, options) {
				if ('undefined' == typeof window || !router) return
				if (!_router.isLocalURL(href)) return
				router.prefetch(href, as, options).catch((err) => {
					0
				})
				const curLocale =
					options && void 0 !== options.locale
						? options.locale
						: router && router.locale
				prefetched[
					href + '%' + as + (curLocale ? '%' + curLocale : '')
				] = !0
			}
			var _default = _react.default.forwardRef(function LinkComponent(
				props,
				forwardedRef
			) {
				let children
				const {
						href: hrefProp,
						as: asProp,
						children: childrenProp,
						prefetch: prefetchProp,
						passHref,
						replace,
						soft,
						shallow,
						scroll,
						locale,
						onClick,
						onMouseEnter,
						onTouchStart,
						legacyBehavior = !0 !== Boolean(void 0),
					} = props,
					restProps = _object_without_properties_loose(props, [
						'href',
						'as',
						'children',
						'prefetch',
						'passHref',
						'replace',
						'soft',
						'shallow',
						'scroll',
						'locale',
						'onClick',
						'onMouseEnter',
						'onTouchStart',
						'legacyBehavior',
					])
				;(children = childrenProp),
					!legacyBehavior ||
						('string' != typeof children &&
							'number' != typeof children) ||
						(children = _react.default.createElement(
							'a',
							null,
							children
						))
				const p = !1 !== prefetchProp,
					[, startTransition] = hasUseTransition
						? _react.default.useTransition()
						: []
				let router = _react.default.useContext(
					_routerContext.RouterContext
				)
				const appRouter = _react.default.useContext(
					_appRouterContext.AppRouterContext
				)
				appRouter && (router = appRouter)
				const { href, as } = _react.default.useMemo(() => {
						const [resolvedHref, resolvedAs] = _router.resolveHref(
							router,
							hrefProp,
							!0
						)
						return {
							href: resolvedHref,
							as: asProp
								? _router.resolveHref(router, asProp)
								: resolvedAs || resolvedHref,
						}
					}, [router, hrefProp, asProp]),
					previousHref = _react.default.useRef(href),
					previousAs = _react.default.useRef(as)
				let child
				legacyBehavior &&
					(child = _react.default.Children.only(children))
				const childRef = legacyBehavior
						? child && 'object' == typeof child && child.ref
						: forwardedRef,
					[setIntersectionRef, isVisible, resetVisible] =
						_useIntersection.useIntersection({
							rootMargin: '200px',
						}),
					setRef = _react.default.useCallback(
						(el) => {
							;(previousAs.current === as &&
								previousHref.current === href) ||
								(resetVisible(),
								(previousAs.current = as),
								(previousHref.current = href)),
								setIntersectionRef(el),
								childRef &&
									('function' == typeof childRef
										? childRef(el)
										: 'object' == typeof childRef &&
										  (childRef.current = el))
						},
						[as, childRef, href, resetVisible, setIntersectionRef]
					)
				_react.default.useEffect(() => {
					const shouldPrefetch =
							isVisible && p && _router.isLocalURL(href),
						curLocale =
							void 0 !== locale
								? locale
								: router && router.locale,
						isPrefetched =
							prefetched[
								href +
									'%' +
									as +
									(curLocale ? '%' + curLocale : '')
							]
					shouldPrefetch &&
						!isPrefetched &&
						prefetch(router, href, as, { locale: curLocale })
				}, [as, href, isVisible, locale, p, router])
				const childProps = {
					ref: setRef,
					onClick: (e) => {
						legacyBehavior ||
							'function' != typeof onClick ||
							onClick(e),
							legacyBehavior &&
								child.props &&
								'function' == typeof child.props.onClick &&
								child.props.onClick(e),
							e.defaultPrevented ||
								(function linkClicked(
									e,
									router,
									href,
									as,
									replace,
									soft,
									shallow,
									scroll,
									locale,
									startTransition
								) {
									const { nodeName } = e.currentTarget
									if (
										'A' === nodeName.toUpperCase() &&
										((function isModifiedEvent(event) {
											const { target } =
												event.currentTarget
											return (
												(target &&
													'_self' !== target) ||
												event.metaKey ||
												event.ctrlKey ||
												event.shiftKey ||
												event.altKey ||
												(event.nativeEvent &&
													2 ===
														event.nativeEvent.which)
											)
										})(e) ||
											!_router.isLocalURL(href))
									)
										return
									e.preventDefault()
									const navigate = () => {
										'softPush' in router &&
										'softReplace' in router
											? router[
													soft
														? replace
															? 'softReplace'
															: 'softPush'
														: replace
														? 'replace'
														: 'push'
											  ](href)
											: router[
													replace ? 'replace' : 'push'
											  ](href, as, {
													shallow,
													locale,
													scroll,
											  })
									}
									startTransition
										? startTransition(navigate)
										: navigate()
								})(
									e,
									router,
									href,
									as,
									replace,
									soft,
									shallow,
									scroll,
									locale,
									appRouter ? startTransition : void 0
								)
					},
					onMouseEnter: (e) => {
						legacyBehavior ||
							'function' != typeof onMouseEnter ||
							onMouseEnter(e),
							legacyBehavior &&
								child.props &&
								'function' == typeof child.props.onMouseEnter &&
								child.props.onMouseEnter(e),
							_router.isLocalURL(href) &&
								prefetch(router, href, as, { priority: !0 })
					},
					onTouchStart: (e) => {
						legacyBehavior ||
							'function' != typeof onTouchStart ||
							onTouchStart(e),
							legacyBehavior &&
								child.props &&
								'function' == typeof child.props.onTouchStart &&
								child.props.onTouchStart(e),
							_router.isLocalURL(href) &&
								prefetch(router, href, as, { priority: !0 })
					},
				}
				if (
					!legacyBehavior ||
					passHref ||
					('a' === child.type && !('href' in child.props))
				) {
					const curLocale =
							void 0 !== locale
								? locale
								: router && router.locale,
						localeDomain =
							router &&
							router.isLocaleDomain &&
							_getDomainLocale.getDomainLocale(
								as,
								curLocale,
								router.locales,
								router.domainLocales
							)
					childProps.href =
						localeDomain ||
						_addBasePath.addBasePath(
							_addLocale.addLocale(
								as,
								curLocale,
								router && router.defaultLocale
							)
						)
				}
				return legacyBehavior
					? _react.default.cloneElement(child, childProps)
					: _react.default.createElement(
							'a',
							Object.assign({}, restProps, childProps),
							children
					  )
			})
			;(exports.default = _default),
				('function' == typeof exports.default ||
					('object' == typeof exports.default &&
						null !== exports.default)) &&
					void 0 === exports.default.__esModule &&
					(Object.defineProperty(exports.default, '__esModule', {
						value: !0,
					}),
					Object.assign(exports.default, exports),
					(module.exports = exports.default))
		},
		'./node_modules/next/dist/client/normalize-locale-path.js': (
			module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var process = __webpack_require__(
				'./node_modules/process/browser.js'
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.normalizeLocalePath = void 0)
			;(exports.normalizeLocalePath = (pathname, locales) =>
				process.env.__NEXT_I18N_SUPPORT
					? __webpack_require__(
							'./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js'
					  ).normalizeLocalePath(pathname, locales)
					: { pathname, detectedLocale: void 0 }),
				('function' == typeof exports.default ||
					('object' == typeof exports.default &&
						null !== exports.default)) &&
					void 0 === exports.default.__esModule &&
					(Object.defineProperty(exports.default, '__esModule', {
						value: !0,
					}),
					Object.assign(exports.default, exports),
					(module.exports = exports.default))
		},
		'./node_modules/next/link.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			module.exports = __webpack_require__(
				'./node_modules/next/dist/client/link.js'
			)
		},
	},
])
