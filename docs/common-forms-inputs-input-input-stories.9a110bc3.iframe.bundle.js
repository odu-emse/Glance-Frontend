'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[8961],
	{
		'./node_modules/@babel/runtime/helpers/esm/defineProperty.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
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
							'@@toPrimitive must return a primitive value.'
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
		'./node_modules/@babel/runtime/helpers/esm/extends.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			function _extends() {
				return (
					(_extends = Object.assign
						? Object.assign.bind()
						: function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i]
									for (var key in source)
										Object.prototype.hasOwnProperty.call(
											source,
											key
										) && (target[key] = source[key])
								}
								return target
						  }),
					_extends.apply(this, arguments)
				)
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => _extends })
		},
		'./components/common/forms/inputs/input/input.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
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
		'./components/common/forms/inputs/input/input.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Checkbox: () => Checkbox,
					Default: () => Default,
					Descriptive: () => Descriptive,
					Disabled: () => Disabled,
					Email: () => Email,
					ErrorState: () => ErrorState,
					ErrorStateWithDescription: () => ErrorStateWithDescription,
					NumericalInput: () => NumericalInput,
					Radio: () => Radio,
					RangeSlider: () => RangeSlider,
					Search: () => Search,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			var _Default$parameters,
				_Default$parameters2,
				_Default$parameters2$,
				_Email$parameters,
				_Email$parameters2,
				_Email$parameters2$do,
				_Descriptive$paramete,
				_Descriptive$paramete2,
				_Descriptive$paramete3,
				_Disabled$parameters,
				_Disabled$parameters2,
				_Disabled$parameters3,
				_ErrorState$parameter,
				_ErrorState$parameter2,
				_ErrorState$parameter3,
				_ErrorStateWithDescri,
				_ErrorStateWithDescri2,
				_ErrorStateWithDescri3,
				_Search$parameters,
				_Search$parameters2,
				_Search$parameters2$d,
				_Radio$parameters,
				_Radio$parameters2,
				_Radio$parameters2$do,
				_Checkbox$parameters,
				_Checkbox$parameters2,
				_Checkbox$parameters3,
				_NumericalInput$param,
				_NumericalInput$param2,
				_NumericalInput$param3,
				_RangeSlider$paramete,
				_RangeSlider$paramete2,
				_RangeSlider$paramete3,
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
					),
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/extends.js'
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/common/forms/inputs/input/input.tsx'
				),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
			function ownKeys(object, enumerableOnly) {
				var keys = Object.keys(object)
				if (Object.getOwnPropertySymbols) {
					var symbols = Object.getOwnPropertySymbols(object)
					enumerableOnly &&
						(symbols = symbols.filter(function (sym) {
							return Object.getOwnPropertyDescriptor(
								object,
								sym
							).enumerable
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
								;(0,
								_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target, key, source[key])
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
						  )
						: ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								)
						  })
				}
				return target
			}
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Common/Forms/Inputs/Inputs',
				component: _input__WEBPACK_IMPORTED_MODULE_2__.I,
				argTypes: {
					onChange: { control: !1 },
					role: { control: 'text' },
					description: { control: !1 },
				},
			}
			var Template = function Template(args) {
				var _args$defaultValue,
					value = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
						null !== (_args$defaultValue = args.defaultValue) &&
							void 0 !== _args$defaultValue
							? _args$defaultValue
							: ''
					)[0],
					_useState2 = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
					options = _useState2[0],
					setOptions = _useState2[1]
				return __jsx(
					_input__WEBPACK_IMPORTED_MODULE_2__.I,
					(0,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
						{},
						args,
						{
							onChange: function onChange(value) {
								var isVisable = value.length > 0
								setOptions(
									isVisable
										? function (prev) {
												return [
													'result1',
													'result2',
													'result3',
													'result4',
												]
										  }
										: function (prev) {
												return []
										  }
								)
							},
							options,
							defaultValue: value,
						}
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = {
				label: 'Label',
				name: 'text-input',
				type: 'text',
				ariaLabel: 'Text input field',
			}
			var Email = Template.bind({})
			Email.args = {
				label: 'Email address',
				name: 'email',
				role: 'input',
				type: 'email',
			}
			var Descriptive = Template.bind({})
			Descriptive.args = _objectSpread(
				_objectSpread({}, Email.args),
				{},
				{
					description: __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						'For more information on how your data is stored and accessed throughout the application, please visit our',
						' ',
						__jsx(
							'a',
							{
								href: '#',
								className:
									'font-medium text-blue-600 hover:underline dark:text-blue-500',
							},
							'Privacy Policy'
						),
						'.'
					),
				}
			)
			var Disabled = Template.bind({})
			Disabled.args = _objectSpread(
				_objectSpread({}, Email.args),
				{},
				{ disabled: !0 }
			)
			var ErrorState = Template.bind({})
			ErrorState.args = _objectSpread(
				_objectSpread({}, Email.args),
				{},
				{ error: !0 }
			)
			var ErrorStateWithDescription = Template.bind({})
			ErrorStateWithDescription.args = _objectSpread(
				_objectSpread({}, Email.args),
				{},
				{
					error: !0,
					description:
						'The error occurred while we were processing your request. Please try again and contact your system administrator if this issue persists.',
				}
			)
			var Search = Template.bind({})
			Search.args = {
				label: 'Search',
				name: 'floating_search',
				role: 'search',
				type: 'search',
			}
			var Radio = Template.bind({})
			Radio.args = { type: 'radio', name: 'radio', content: 'Choice1' }
			var Checkbox = Template.bind({})
			Checkbox.args = {
				type: 'checkbox',
				name: 'checkbox',
				content: 'Choice1',
			}
			var NumericalInput = Template.bind({})
			NumericalInput.args = {
				type: 'number',
				label: 'Type in your age',
				name: 'number',
			}
			var RangeSlider = Template.bind({})
			;(RangeSlider.args = {
				type: 'range',
				name: 'range',
				min: 10,
				max: 50,
			}),
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
									: _Default$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
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
										: _Default$parameters2$.source
								),
							}
						),
					}
				)),
				(Email.parameters = _objectSpread(
					_objectSpread({}, Email.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Email$parameters = Email.parameters) ||
									void 0 === _Email$parameters
									? void 0
									: _Email$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_Email$parameters2 =
											Email.parameters) ||
										void 0 === _Email$parameters2 ||
										null ===
											(_Email$parameters2$do =
												_Email$parameters2.docs) ||
										void 0 === _Email$parameters2$do
										? void 0
										: _Email$parameters2$do.source
								),
							}
						),
					}
				)),
				(Descriptive.parameters = _objectSpread(
					_objectSpread({}, Descriptive.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Descriptive$paramete =
										Descriptive.parameters) ||
									void 0 === _Descriptive$paramete
									? void 0
									: _Descriptive$paramete.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_Descriptive$paramete2 =
											Descriptive.parameters) ||
										void 0 === _Descriptive$paramete2 ||
										null ===
											(_Descriptive$paramete3 =
												_Descriptive$paramete2.docs) ||
										void 0 === _Descriptive$paramete3
										? void 0
										: _Descriptive$paramete3.source
								),
							}
						),
					}
				)),
				(Disabled.parameters = _objectSpread(
					_objectSpread({}, Disabled.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Disabled$parameters =
										Disabled.parameters) ||
									void 0 === _Disabled$parameters
									? void 0
									: _Disabled$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_Disabled$parameters2 =
											Disabled.parameters) ||
										void 0 === _Disabled$parameters2 ||
										null ===
											(_Disabled$parameters3 =
												_Disabled$parameters2.docs) ||
										void 0 === _Disabled$parameters3
										? void 0
										: _Disabled$parameters3.source
								),
							}
						),
					}
				)),
				(ErrorState.parameters = _objectSpread(
					_objectSpread({}, ErrorState.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_ErrorState$parameter =
										ErrorState.parameters) ||
									void 0 === _ErrorState$parameter
									? void 0
									: _ErrorState$parameter.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_ErrorState$parameter2 =
											ErrorState.parameters) ||
										void 0 === _ErrorState$parameter2 ||
										null ===
											(_ErrorState$parameter3 =
												_ErrorState$parameter2.docs) ||
										void 0 === _ErrorState$parameter3
										? void 0
										: _ErrorState$parameter3.source
								),
							}
						),
					}
				)),
				(ErrorStateWithDescription.parameters = _objectSpread(
					_objectSpread({}, ErrorStateWithDescription.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_ErrorStateWithDescri =
										ErrorStateWithDescription.parameters) ||
									void 0 === _ErrorStateWithDescri
									? void 0
									: _ErrorStateWithDescri.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_ErrorStateWithDescri2 =
											ErrorStateWithDescription.parameters) ||
										void 0 === _ErrorStateWithDescri2 ||
										null ===
											(_ErrorStateWithDescri3 =
												_ErrorStateWithDescri2.docs) ||
										void 0 === _ErrorStateWithDescri3
										? void 0
										: _ErrorStateWithDescri3.source
								),
							}
						),
					}
				)),
				(Search.parameters = _objectSpread(
					_objectSpread({}, Search.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Search$parameters = Search.parameters) ||
									void 0 === _Search$parameters
									? void 0
									: _Search$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_Search$parameters2 =
											Search.parameters) ||
										void 0 === _Search$parameters2 ||
										null ===
											(_Search$parameters2$d =
												_Search$parameters2.docs) ||
										void 0 === _Search$parameters2$d
										? void 0
										: _Search$parameters2$d.source
								),
							}
						),
					}
				)),
				(Radio.parameters = _objectSpread(
					_objectSpread({}, Radio.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Radio$parameters = Radio.parameters) ||
									void 0 === _Radio$parameters
									? void 0
									: _Radio$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_Radio$parameters2 =
											Radio.parameters) ||
										void 0 === _Radio$parameters2 ||
										null ===
											(_Radio$parameters2$do =
												_Radio$parameters2.docs) ||
										void 0 === _Radio$parameters2$do
										? void 0
										: _Radio$parameters2$do.source
								),
							}
						),
					}
				)),
				(Checkbox.parameters = _objectSpread(
					_objectSpread({}, Checkbox.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Checkbox$parameters =
										Checkbox.parameters) ||
									void 0 === _Checkbox$parameters
									? void 0
									: _Checkbox$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_Checkbox$parameters2 =
											Checkbox.parameters) ||
										void 0 === _Checkbox$parameters2 ||
										null ===
											(_Checkbox$parameters3 =
												_Checkbox$parameters2.docs) ||
										void 0 === _Checkbox$parameters3
										? void 0
										: _Checkbox$parameters3.source
								),
							}
						),
					}
				)),
				(NumericalInput.parameters = _objectSpread(
					_objectSpread({}, NumericalInput.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_NumericalInput$param =
										NumericalInput.parameters) ||
									void 0 === _NumericalInput$param
									? void 0
									: _NumericalInput$param.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_NumericalInput$param2 =
											NumericalInput.parameters) ||
										void 0 === _NumericalInput$param2 ||
										null ===
											(_NumericalInput$param3 =
												_NumericalInput$param2.docs) ||
										void 0 === _NumericalInput$param3
										? void 0
										: _NumericalInput$param3.source
								),
							}
						),
					}
				)),
				(RangeSlider.parameters = _objectSpread(
					_objectSpread({}, RangeSlider.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_RangeSlider$paramete =
										RangeSlider.parameters) ||
									void 0 === _RangeSlider$paramete
									? void 0
									: _RangeSlider$paramete.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: InputProps) => {\n  const [value] = useState(args.defaultValue ?? '');\n  const [options, setOptions] = useState([]);\n  return <Input {...args} onChange={value => {\n    const isVisable = value.length > 0;\n    if (isVisable) {\n      setOptions(prev => ['result1', 'result2', 'result3', 'result4']);\n    } else {\n      setOptions(prev => []);\n    }\n  }} options={options} defaultValue={value} />;\n}",
									},
									null ===
										(_RangeSlider$paramete2 =
											RangeSlider.parameters) ||
										void 0 === _RangeSlider$paramete2 ||
										null ===
											(_RangeSlider$paramete3 =
												_RangeSlider$paramete2.docs) ||
										void 0 === _RangeSlider$paramete3
										? void 0
										: _RangeSlider$paramete3.source
								),
							}
						),
					}
				))
		},
	},
])
