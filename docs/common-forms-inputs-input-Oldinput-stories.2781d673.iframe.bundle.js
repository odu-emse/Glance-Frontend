'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[1577],
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
		'./node_modules/@babel/runtime/helpers/esm/extends.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
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
											key,
										) && (target[key] = source[key])
								}
								return target
						  }),
					_extends.apply(this, arguments)
				)
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => _extends })
		},
		'./components/common/forms/inputs/input/Oldinput.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Descriptive: () => Descriptive,
					Disabled: () => Disabled,
					Email: () => Email,
					ErrorState: () => ErrorState,
					ErrorStateWithDescription: () => ErrorStateWithDescription,
					Search: () => Search,
					default: () => Oldinput_stories,
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
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				esm_extends = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/extends.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				index_esm = __webpack_require__(
					'./node_modules/react-icons/bi/index.esm.js',
				),
				__jsx = react.createElement,
				Input = function Input(_ref) {
					var label = _ref.label,
						name = _ref.name,
						role = _ref.role,
						_onChange = _ref.onChange,
						description = _ref.description,
						_ref$required = _ref.required,
						required = void 0 !== _ref$required && _ref$required,
						type = _ref.type,
						ariaLabel = _ref.ariaLabel,
						defaultValue = _ref.defaultValue,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						_ref$error = _ref.error,
						error = void 0 !== _ref$error && _ref$error,
						options = _ref.options,
						_ref$placeholder = _ref.placeholder,
						placeholder =
							void 0 === _ref$placeholder
								? 'Enter here'
								: _ref$placeholder,
						_ref$className = _ref.className,
						className =
							void 0 === _ref$className ? '' : _ref$className,
						_ref$icon = _ref.icon,
						icon = void 0 !== _ref$icon && _ref$icon,
						classes = [
							className,
							'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-none focus:ring-0 peer',
							className.includes('border')
								? ''
								: 'border-0 border-b-2',
							error
								? 'border-red-500 dark:border-red-400 focus:border-red-600 dark:focus:border-red-500'
								: 'dark:focus:border-blue-500 focus:border-blue-600 dark:border-gray-600 border-gray-300',
							disabled ? 'cursor-not-allowed' : '',
						].join(' ')
					return __jsx(
						react.Fragment,
						null,
						__jsx(
							'div',
							{ className: 'relative z-0 w-full group' },
							__jsx('input', {
								type,
								name,
								id: name,
								placeholder,
								role,
								'aria-label': ariaLabel,
								className: classes,
								required,
								defaultValue,
								onChange: function onChange(event) {
									return _onChange(event.target.value)
								},
								disabled,
							}),
							options &&
								options.map(function (option, optionIndex) {
									return __jsx(
										'option',
										{
											key: optionIndex,
											value:
												'string' == typeof option
													? option
													: option.value,
											selected:
												'string' != typeof option &&
												option.selected,
											disabled:
												'string' != typeof option &&
												option.disabled,
										},
										'string' == typeof option
											? option
											: __jsx(
													react.Fragment,
													null,
													option.icon && option.icon,
													option.label,
											  ),
									)
								}),
							__jsx(
								'label',
								{
									htmlFor: name,
									className:
										'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '.concat(
											error
												? 'peer-focus:dark:text-red-500 peer-focus:text-red-600'
												: 'peer-focus:dark:text-blue-500 peer-focus:text-blue-600',
										),
								},
								label,
							),
							'search' === type &&
								icon &&
								__jsx(
									'button',
									{
										type: 'submit',
										className:
											'absolute right-0 top-0 bottom-0 px-3 py-2.5 text-gray-500 dark:text-gray-400 focus:ring-blue-600 dark:focus:ring-blue-500 focus:outline-none',
									},
									__jsx(
										'span',
										{ className: 'sr-only' },
										'Search',
									),
									__jsx(index_esm.Goc, { size: 24 }),
								),
							description &&
								__jsx(
									'p',
									{
										id: 'helper-text-explanation',
										className: 'mt-2 text-sm '.concat(
											error
												? 'text-red-600 dark:text-red-500'
												: 'text-gray-500 dark:text-gray-400',
										),
									},
									description,
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
					icon: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'The icon boolean is used to determine weather or not to render the search icon on the input element.',
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
							raw: "| 'text'\n| 'email'\n| 'password'\n| 'search'\n| 'url'\n| 'tel'\n| 'number'\n| 'file'",
							elements: [
								{ name: 'literal', value: "'text'" },
								{ name: 'literal', value: "'email'" },
								{ name: 'literal', value: "'password'" },
								{ name: 'literal', value: "'search'" },
								{ name: 'literal', value: "'url'" },
								{ name: 'literal', value: "'tel'" },
								{ name: 'literal', value: "'number'" },
								{ name: 'literal', value: "'file'" },
							],
						},
						description:
							'The input type determines the way browsers conduct their validation and on a device by device basis it can change the keyboard behavior for the user.',
					},
					defaultValue: {
						required: !1,
						tsType: { name: 'string' },
						description:
							'The default value of the input. This is used to set the value of the input when the page is first loaded.',
					},
					ariaLabel: {
						required: !1,
						tsType: { name: 'string' },
						description:
							"The aria-label attribute is used to provide a label for the input element. This is used to provide additional context to the user, under the input element. This is just supplementary information, so its visual hierarchy should not interfere with the input element's.",
					},
					options: {
						required: !1,
						tsType: {
							name: 'union',
							raw: 'dropdownOption[] | string[]',
							elements: [
								{
									name: 'Array',
									elements: [{ name: 'dropdownOption' }],
									raw: 'dropdownOption[]',
								},
								{
									name: 'Array',
									elements: [{ name: 'string' }],
									raw: 'string[]',
								},
							],
						},
						description: '',
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
									],
								},
							},
							defaultValue: {
								defaultValue: null,
								description:
									'The default value of the input. This is used to set the value of the input when the page is first loaded.',
								name: 'defaultValue',
								required: !1,
								type: { name: 'string' },
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
							options: {
								defaultValue: null,
								description: '',
								name: 'options',
								required: !1,
								type: { name: 'string[] | dropdownOption[]' },
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
							icon: {
								defaultValue: { value: 'false' },
								description:
									'The icon boolean is used to determine weather or not to render the search icon on the input element.',
								name: 'icon',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/inputs/input/Oldinput.tsx#Input'
						] = {
							docgenInfo: Input.__docgenInfo,
							name: 'Input',
							path: 'components/common/forms/inputs/input/Oldinput.tsx#Input',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var Oldinput_stories_jsx = react.createElement
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
			const Oldinput_stories = {
				title: 'Common/Forms/Inputs/Old_Input',
				component: Input,
				argTypes: {
					onChange: { control: !1 },
					role: { control: 'text' },
					description: { control: !1 },
				},
			}
			var Template = function Template(args) {
				var _args$defaultValue,
					value = (0, react.useState)(
						null !== (_args$defaultValue = args.defaultValue) &&
							void 0 !== _args$defaultValue
							? _args$defaultValue
							: '',
					)[0],
					_useState2 = (0, react.useState)([]),
					options = _useState2[0],
					setOptions = _useState2[1]
				return Oldinput_stories_jsx(
					Input,
					(0, esm_extends.Z)({}, args, {
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
									  },
							)
						},
						options,
						defaultValue: value,
					}),
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
					description: Oldinput_stories_jsx(
						react.Fragment,
						null,
						'For more information on how your data is stored and accessed throughout the application, please visit our',
						' ',
						Oldinput_stories_jsx(
							'a',
							{
								href: '#',
								className:
									'font-medium text-blue-600 hover:underline dark:text-blue-500',
							},
							'Privacy Policy',
						),
						'.',
					),
				},
			)
			var Disabled = Template.bind({})
			Disabled.args = _objectSpread(
				_objectSpread({}, Email.args),
				{},
				{ disabled: !0 },
			)
			var ErrorState = Template.bind({})
			ErrorState.args = _objectSpread(
				_objectSpread({}, Email.args),
				{},
				{ error: !0 },
			)
			var ErrorStateWithDescription = Template.bind({})
			ErrorStateWithDescription.args = _objectSpread(
				_objectSpread({}, Email.args),
				{},
				{
					error: !0,
					description:
						'The error occurred while we were processing your request. Please try again and contact your system administrator if this issue persists.',
				},
			)
			var Search = Template.bind({})
			;(Search.args = {
				label: 'Search',
				name: 'floating_search',
				role: 'search',
				type: 'search',
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
									: _Default$parameters.docs,
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
										: _Default$parameters2$.source,
								),
							},
						),
					},
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
									: _Email$parameters.docs,
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
										: _Email$parameters2$do.source,
								),
							},
						),
					},
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
									: _Descriptive$paramete.docs,
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
										: _Descriptive$paramete3.source,
								),
							},
						),
					},
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
									: _Disabled$parameters.docs,
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
										: _Disabled$parameters3.source,
								),
							},
						),
					},
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
									: _ErrorState$parameter.docs,
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
										: _ErrorState$parameter3.source,
								),
							},
						),
					},
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
									: _ErrorStateWithDescri.docs,
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
										: _ErrorStateWithDescri3.source,
								),
							},
						),
					},
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
									: _Search$parameters.docs,
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
										: _Search$parameters2$d.source,
								),
							},
						),
					},
				))
		},
		'./node_modules/react-icons/lib/esm/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				w_: () => GenIcon,
				Pd: () => IconContext,
			})
			var react = __webpack_require__('./node_modules/react/index.js'),
				DefaultContext = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0,
				},
				IconContext =
					react.createContext && react.createContext(DefaultContext),
				__assign = function () {
					return (
						(__assign =
							Object.assign ||
							function (t) {
								for (
									var s, i = 1, n = arguments.length;
									i < n;
									i++
								)
									for (var p in (s = arguments[i]))
										Object.prototype.hasOwnProperty.call(
											s,
											p,
										) && (t[p] = s[p])
								return t
							}),
						__assign.apply(this, arguments)
					)
				},
				__rest = function (s, e) {
					var t = {}
					for (var p in s)
						Object.prototype.hasOwnProperty.call(s, p) &&
							e.indexOf(p) < 0 &&
							(t[p] = s[p])
					if (
						null != s &&
						'function' == typeof Object.getOwnPropertySymbols
					) {
						var i = 0
						for (
							p = Object.getOwnPropertySymbols(s);
							i < p.length;
							i++
						)
							e.indexOf(p[i]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(
									s,
									p[i],
								) &&
								(t[p[i]] = s[p[i]])
					}
					return t
				}
			function Tree2Element(tree) {
				return (
					tree &&
					tree.map(function (node, i) {
						return react.createElement(
							node.tag,
							__assign({ key: i }, node.attr),
							Tree2Element(node.child),
						)
					})
				)
			}
			function GenIcon(data) {
				return function (props) {
					return react.createElement(
						IconBase,
						__assign({ attr: __assign({}, data.attr) }, props),
						Tree2Element(data.child),
					)
				}
			}
			function IconBase(props) {
				var elem = function (conf) {
					var className,
						attr = props.attr,
						size = props.size,
						title = props.title,
						svgProps = __rest(props, ['attr', 'size', 'title']),
						computedSize = size || conf.size || '1em'
					return (
						conf.className && (className = conf.className),
						props.className &&
							(className =
								(className ? className + ' ' : '') +
								props.className),
						react.createElement(
							'svg',
							__assign(
								{
									stroke: 'currentColor',
									fill: 'currentColor',
									strokeWidth: '0',
								},
								conf.attr,
								attr,
								svgProps,
								{
									className,
									style: __assign(
										__assign(
											{
												color:
													props.color || conf.color,
											},
											conf.style,
										),
										props.style,
									),
									height: computedSize,
									width: computedSize,
									xmlns: 'http://www.w3.org/2000/svg',
								},
							),
							title && react.createElement('title', null, title),
							props.children,
						)
					)
				}
				return void 0 !== IconContext
					? react.createElement(
							IconContext.Consumer,
							null,
							function (conf) {
								return elem(conf)
							},
					  )
					: elem(DefaultContext)
			}
		},
	},
])
