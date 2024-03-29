'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[5505],
	{
		'./node_modules/@babel/runtime/helpers/esm/defineProperty.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			function _typeof(obj) {
				return (
					(_typeof =
						'function' == typeof Symbol &&
						'symbol' == typeof Symbol.iterator
							? function (obj) {
									return typeof obj
							  }
							: function (obj) {
									return obj &&
										'function' == typeof Symbol &&
										obj.constructor === Symbol &&
										obj !== Symbol.prototype
										? 'symbol'
										: typeof obj
							  }),
					_typeof(obj)
				)
			}
			function _toPropertyKey(arg) {
				var key = (function _toPrimitive(input, hint) {
					if ('object' !== _typeof(input) || null === input)
						return input
					var prim = input[Symbol.toPrimitive]
					if (void 0 !== prim) {
						var res = prim.call(input, hint || 'default')
						if ('object' !== _typeof(res)) return res
						throw new TypeError(
							'@@toPrimitive must return a primitive value.',
						)
					}
					return ('string' === hint ? String : Number)(input)
				})(arg, 'string')
				return 'symbol' === _typeof(key) ? key : String(key)
			}
			function _defineProperty(obj, key, value) {
				return (
					(key = _toPropertyKey(key)) in obj
						? Object.defineProperty(obj, key, {
								value,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (obj[key] = value),
					obj
				)
			}
			__webpack_require__.d(__webpack_exports__, {
				Z: () => _defineProperty,
			})
		},
		'./components/common/button/button.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { z: () => Button })
			var _instructure_ui__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@instructure/ui-buttons/es/Button/index.js',
					),
				prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/prop-types/index.js',
				),
				__jsx = __webpack_require__(
					'./node_modules/react/index.js',
				).createElement,
				Button = function Button(_ref) {
					var _ref$variant = _ref.variant,
						variant =
							void 0 === _ref$variant ? 'primary' : _ref$variant,
						_ref$size = _ref.size,
						size = void 0 === _ref$size ? 'medium' : _ref$size,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						children = _ref.children,
						onClick = _ref.onClick
					return __jsx(
						_instructure_ui__WEBPACK_IMPORTED_MODULE_1__.z,
						{
							color: variant,
							disabled,
							onClick,
							margin: 'small',
							size,
						},
						children,
					)
				}
			;(Button.displayName = 'Button'),
				(Button.propTypes = {
					variant: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([
						'primary',
						'secondary',
					]),
					size: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([
						'small',
						'medium',
						'large',
					]),
					children: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType(
						[
							prop_types__WEBPACK_IMPORTED_MODULE_2__.node,
							prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
							prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
						],
					),
					onClick: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
					disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
				}),
				(Button.defaultProps = {
					variant: 'primary',
					size: 'medium',
					onClick: void 0,
					children: 'Click Here',
					disabled: !1,
					type: 'button',
				}),
				(Button.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Button',
					props: {
						variant: {
							defaultValue: { value: "'primary'", computed: !1 },
							required: !1,
							tsType: {
								name: 'union',
								raw: "'primary' | 'secondary'",
								elements: [
									{ name: 'literal', value: "'primary'" },
									{ name: 'literal', value: "'secondary'" },
								],
							},
							description:
								'A boolean that determines whether the button is the principal call/action on the page',
							type: {
								name: 'enum',
								value: [
									{ value: "'primary'", computed: !1 },
									{ value: "'secondary'", computed: !1 },
								],
							},
						},
						size: {
							defaultValue: { value: "'medium'", computed: !1 },
							required: !1,
							tsType: {
								name: 'union',
								raw: "'small' | 'medium' | 'large'",
								elements: [
									{ name: 'literal', value: "'small'" },
									{ name: 'literal', value: "'medium'" },
									{ name: 'literal', value: "'large'" },
								],
							},
							description:
								"An enum that defines the button's size",
							type: {
								name: 'enum',
								value: [
									{ value: "'small'", computed: !1 },
									{ value: "'medium'", computed: !1 },
									{ value: "'large'", computed: !1 },
								],
							},
						},
						disabled: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
							tsType: { name: 'boolean' },
							description:
								'A boolean that determines whether the button representing a disabled state',
							type: { name: 'bool' },
						},
						onClick: {
							defaultValue: { value: 'undefined', computed: !0 },
							required: !1,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '() => void',
								signature: {
									arguments: [],
									return: { name: 'void' },
								},
							},
							description:
								"A onclick event that executes a JavaScript's function when the button gets clicked",
							type: { name: 'func' },
						},
						children: {
							defaultValue: {
								value: "'Click Here'",
								computed: !1,
							},
							required: !1,
							tsType: {
								name: 'union',
								raw: 'React.ReactNode | string | number',
								elements: [
									{
										name: 'ReactReactNode',
										raw: 'React.ReactNode',
									},
									{ name: 'string' },
									{ name: 'number' },
								],
							},
							description:
								'The JSX contnet to be displayed within the button',
							type: {
								name: 'union',
								value: [
									{ name: 'node' },
									{ name: 'string' },
									{ name: 'number' },
								],
							},
						},
						type: {
							defaultValue: { value: "'button'", computed: !1 },
							required: !1,
							tsType: {
								name: 'union',
								raw: "'button' | 'submit' | 'reset'",
								elements: [
									{ name: 'literal', value: "'button'" },
									{ name: 'literal', value: "'submit'" },
									{ name: 'literal', value: "'reset'" },
								],
							},
							description:
								"An enum that defines the button's type",
						},
						className: {
							required: !1,
							tsType: { name: 'string' },
							description:
								"Indicates the className - based on selection of a property named 'size', className is atlered",
						},
					},
				})
			try {
				;(Button.displayName = 'Button'),
					(Button.__docgenInfo = {
						description: '',
						displayName: 'Button',
						props: {
							variant: {
								defaultValue: { value: 'primary' },
								description:
									'A boolean that determines whether the button is the principal call/action on the page',
								name: 'variant',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"primary"' },
										{ value: '"secondary"' },
									],
								},
							},
							size: {
								defaultValue: { value: 'medium' },
								description:
									"An enum that defines the button's size",
								name: 'size',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"small"' },
										{ value: '"large"' },
										{ value: '"medium"' },
									],
								},
							},
							type: {
								defaultValue: { value: 'button' },
								description:
									"An enum that defines the button's type",
								name: 'type',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"button"' },
										{ value: '"submit"' },
										{ value: '"reset"' },
									],
								},
							},
							children: {
								defaultValue: { value: 'Click Here' },
								description:
									'The JSX contnet to be displayed within the button',
								name: 'children',
								required: !1,
								type: { name: 'ReactNode' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'A boolean that determines whether the button representing a disabled state',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							onClick: {
								defaultValue: { value: 'undefined' },
								description:
									"A onclick event that executes a JavaScript's function when the button gets clicked",
								name: 'onClick',
								required: !1,
								type: { name: '() => void' },
							},
							className: {
								defaultValue: null,
								description:
									"Indicates the className - based on selection of a property named 'size', className is atlered",
								name: 'className',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/button/button.tsx#Button'
						] = {
							docgenInfo: Button.__docgenInfo,
							name: 'Button',
							path: 'components/common/button/button.tsx#Button',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/forms/inputs/input/input.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { I: () => Input })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
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
											: 'w-full',
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
										: '',
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
										label.toUpperCase(),
									),
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
														' border ',
													)
													.concat(
														disabled
															? ''
															: 'cursor-pointer',
														' ',
													)
													.concat(
														isChecked
															? 'bg-white border-royalblue'
															: 'bg-white border-wgray',
													),
											onClick: handleInputChange,
										},
										isChecked &&
											__jsx('div', {
												className:
													'w-3 h-3 mx-auto my-auto bg-royalblue '.concat(
														'radio' === type
															? 'rounded-full'
															: 'rounded',
													),
											}),
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
											error ? 'text-red-600' : '',
										),
									},
									error
										? 'Wrong '.concat(type)
										: 'This is a test message',
								),
						),
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
		'./components/common/forms/form/form.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					default: () => form_stories,
				})
			var defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				slicedToArray = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				button_button = __webpack_require__(
					'./components/common/button/button.tsx',
				),
				__jsx = react.createElement,
				Form = function Form(_ref) {
					var children = _ref.children,
						_ref$allowPrevious = _ref.allowPrevious,
						allowPrevious =
							void 0 !== _ref$allowPrevious && _ref$allowPrevious,
						_ref$previousLabel = _ref.previousLabel,
						previousLabel =
							void 0 === _ref$previousLabel
								? ''
								: _ref$previousLabel,
						_ref$proceedLabel = _ref.proceedLabel,
						proceedLabel =
							void 0 === _ref$proceedLabel
								? 'Submit'
								: _ref$proceedLabel
					return __jsx(
						'form',
						{ className: '' },
						children,
						__jsx(
							'div',
							{ className: 'flex justify-between items-center' },
							allowPrevious &&
								__jsx(
									button_button.z,
									{ type: 'reset', variant: 'secondary' },
									previousLabel,
								),
							__jsx(
								button_button.z,
								{ type: 'submit', variant: 'primary' },
								proceedLabel,
							),
						),
					)
				}
			;(Form.displayName = 'Form'),
				(Form.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Form',
					props: {
						allowPrevious: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
							tsType: { name: 'boolean' },
							description:
								'A boolean that decides weather to show or hide a reset button.',
						},
						previousLabel: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
							tsType: { name: 'string' },
							description:
								'A descriptive label for the previous / back button.',
						},
						proceedLabel: {
							defaultValue: { value: "'Submit'", computed: !1 },
							required: !1,
							tsType: { name: 'string' },
							description:
								'A descriptive label for the submit / next button.',
						},
						children: {
							required: !0,
							tsType: {
								name: 'union',
								raw: 'React.ReactNode | React.ReactNode[]',
								elements: [
									{
										name: 'ReactReactNode',
										raw: 'React.ReactNode',
									},
									{
										name: 'Array',
										elements: [
											{
												name: 'ReactReactNode',
												raw: 'React.ReactNode',
											},
										],
										raw: 'React.ReactNode[]',
									},
								],
							},
							description: '',
						},
					},
				})
			try {
				;(Form.displayName = 'Form'),
					(Form.__docgenInfo = {
						description: '',
						displayName: 'Form',
						props: {
							allowPrevious: {
								defaultValue: { value: 'false' },
								description:
									'A boolean that decides weather to show or hide a reset button.',
								name: 'allowPrevious',
								required: !1,
								type: { name: 'boolean' },
							},
							previousLabel: {
								defaultValue: { value: '' },
								description:
									'A descriptive label for the previous / back button.',
								name: 'previousLabel',
								required: !1,
								type: { name: 'string' },
							},
							proceedLabel: {
								defaultValue: { value: 'Submit' },
								description:
									'A descriptive label for the submit / next button.',
								name: 'proceedLabel',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/form/form.tsx#Form'
						] = {
							docgenInfo: Form.__docgenInfo,
							name: 'Form',
							path: 'components/common/forms/form/form.tsx#Form',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var _Default$parameters,
				_Default$parameters2,
				_Default$parameters2$,
				input = __webpack_require__(
					'./components/common/forms/inputs/input/input.tsx',
				),
				form_stories_jsx = react.createElement
			function ownKeys(object, enumerableOnly) {
				var keys = Object.keys(object)
				if (Object.getOwnPropertySymbols) {
					var symbols = Object.getOwnPropertySymbols(object)
					enumerableOnly &&
						(symbols = symbols.filter(function (sym) {
							return Object.getOwnPropertyDescriptor(object, sym)
								.enumerable
						})),
						keys.push.apply(keys, symbols)
				}
				return keys
			}
			function _objectSpread(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = null != arguments[i] ? arguments[i] : {}
					i % 2
						? ownKeys(Object(source), !0).forEach(function (key) {
								;(0, defineProperty.Z)(target, key, source[key])
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source),
						  )
						: ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(
										source,
										key,
									),
								)
						  })
				}
				return target
			}
			const form_stories = {
				title: 'Common/Forms/Form',
				component: Form,
				args: {},
				argTypes: {},
			}
			var Template = function Template(args) {
				var _React$useState = react.useState({
						firstName: '',
						lastName: '',
						email: '',
						password: '',
						passwordConfirmation: '',
					}),
					_React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
					formData = _React$useState2[0],
					setFormData = _React$useState2[1]
				return form_stories_jsx(
					Form,
					args,
					form_stories_jsx(
						'div',
						{ className: 'flex justify-between gap-5' },
						form_stories_jsx(input.I, {
							label: 'First Name',
							name: 'firstName',
							type: 'text',
							onChange: function onChange(s) {
								setFormData(
									_objectSpread(
										_objectSpread({}, formData),
										{},
										{ firstName: s },
									),
								)
							},
							defaultValue: formData.firstName,
							options: [],
						}),
						form_stories_jsx(input.I, {
							label: 'Last Name',
							name: 'lastName',
							type: 'text',
							onChange: function onChange(s) {
								setFormData(
									_objectSpread(
										_objectSpread({}, formData),
										{},
										{ lastName: s },
									),
								)
							},
							defaultValue: formData.lastName,
							options: [],
						}),
					),
					form_stories_jsx(input.I, {
						label: 'Email',
						name: 'email',
						type: 'email',
						onChange: function onChange(s) {
							setFormData(
								_objectSpread(
									_objectSpread({}, formData),
									{},
									{ email: s },
								),
							)
						},
						defaultValue: formData.email,
						options: [],
					}),
					form_stories_jsx(
						'div',
						{ className: 'flex justify-between gap-5' },
						form_stories_jsx(input.I, {
							label: 'Password',
							name: 'password',
							type: 'password',
							onChange: function onChange(s) {
								setFormData(
									_objectSpread(
										_objectSpread({}, formData),
										{},
										{ password: s },
									),
								)
							},
							defaultValue: formData.password,
							options: [],
						}),
						form_stories_jsx(input.I, {
							label: 'Password Confirmation',
							name: 'passwordConfirmation',
							type: 'password',
							onChange: function onChange(s) {
								setFormData(
									_objectSpread(
										_objectSpread({}, formData),
										{},
										{ passwordConfirmation: s },
									),
								)
							},
							defaultValue: formData.passwordConfirmation,
							options: [],
						}),
					),
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = _objectSpread(
					_objectSpread({}, Default.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Default$parameters =
										Default.parameters) ||
									void 0 === _Default$parameters
									? void 0
									: _Default$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'args => {\n  const [formData, setFormData] = React.useState({\n    firstName: \'\',\n    lastName: \'\',\n    email: \'\',\n    password: \'\',\n    passwordConfirmation: \'\'\n  });\n  return <Form {...args}>\n            <div className="flex justify-between gap-5">\n                <Input label="First Name" name="firstName" type="text" onChange={s => {\n        setFormData({\n          ...formData,\n          firstName: s\n        });\n      }} defaultValue={formData.firstName} options={[]} />\n                <Input label="Last Name" name="lastName" type="text" onChange={s => {\n        setFormData({\n          ...formData,\n          lastName: s\n        });\n      }} defaultValue={formData.lastName} options={[]} />\n            </div>\n            <Input label="Email" name="email" type="email" onChange={s => {\n      setFormData({\n        ...formData,\n        email: s\n      });\n    }} defaultValue={formData.email} options={[]} />\n            <div className="flex justify-between gap-5">\n                <Input label="Password" name="password" type="password" onChange={s => {\n        setFormData({\n          ...formData,\n          password: s\n        });\n      }} defaultValue={formData.password} options={[]} />\n                <Input label="Password Confirmation" name="passwordConfirmation" type="password" onChange={s => {\n        setFormData({\n          ...formData,\n          passwordConfirmation: s\n        });\n      }} defaultValue={formData.passwordConfirmation} options={[]} />\n            </div>\n        </Form>;\n}',
									},
									null ===
										(_Default$parameters2 =
											Default.parameters) ||
										void 0 === _Default$parameters2 ||
										null ===
											(_Default$parameters2$ =
												_Default$parameters2.docs) ||
										void 0 === _Default$parameters2$
										? void 0
										: _Default$parameters2$.source,
								),
							},
						),
					},
				))
		},
	},
])
