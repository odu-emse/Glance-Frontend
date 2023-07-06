'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[1267],
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
		'./components/common/forms/inputs/text_area/text_area.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { K: () => TextArea })
			var react = __webpack_require__('./node_modules/react/index.js')
			const use_autosize_text_area = function useAutosizeTextArea(
				textAreaRef,
				value,
			) {
				;(0, react.useEffect)(
					function () {
						if (textAreaRef) {
							textAreaRef.style.height = '0px'
							var scrollHeight = textAreaRef.scrollHeight
							textAreaRef.style.height = scrollHeight + 'px'
						}
					},
					[textAreaRef, value],
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
												disabled ? 'opacity-50' : '',
											),
									}),
							),
							value.length === maxLength &&
								__jsx(
									'span',
									{
										className:
											'text-xs px-2 bg-gray-100 ml-auto mr-0 block w-fit',
									},
									'Maximum characters: ',
									maxLength,
								),
						),
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
		'./components/common/forms/inputs/text_area/text_area.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Disabled: () => Disabled,
					MaxLength: () => MaxLength,
					Primary: () => Primary,
					WithLabel: () => WithLabel,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				_Disabled$parameters,
				_Disabled$parameters2,
				_Disabled$parameters3,
				_WithLabel$parameters,
				_WithLabel$parameters2,
				_WithLabel$parameters3,
				_MaxLength$parameters,
				_MaxLength$parameters2,
				_MaxLength$parameters3,
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
					),
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/extends.js',
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				_text_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/common/forms/inputs/text_area/text_area.tsx',
				),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
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
								;(0,
								_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
									target,
									key,
									source[key],
								)
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Common/Forms/Inputs/Text Area',
				component: _text_area__WEBPACK_IMPORTED_MODULE_2__.K,
				argTypes: {
					handle: { action: 'handle' },
					value: { control: 'text' },
					id: { control: 'text' },
					role: { control: 'text' },
					name: { control: 'text' },
					rows: { control: 'range' },
					placeholder: { control: 'text' },
					disabled: { control: 'boolean' },
					maxLength: { control: 'range' },
					required: { control: 'boolean' },
					readOnly: { control: 'boolean' },
					wrap: { control: 'text' },
					autofocus: { control: 'boolean' },
				},
			}
			var Template = function Template(args) {
				var _useState = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
					value = _useState[0],
					setValue = _useState[1]
				return __jsx(
					_text_area__WEBPACK_IMPORTED_MODULE_2__.K,
					(0,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
						{},
						args,
						{
							value,
							handle: function handleChange(evt) {
								var _evt$target
								setValue(
									null === (_evt$target = evt.target) ||
										void 0 === _evt$target
										? void 0
										: _evt$target.value,
								)
							},
						},
					),
				)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.storyName = 'Default'),
				(Primary.args = {
					value: 'This is a default value text for the text area component.',
					id: 'text-area',
					role: 'textbox',
					name: 'text-area',
					rows: 2,
					placeholder:
						'This is a placeholder text for the text area component.',
					disabled: !1,
					maxLength: 1e3,
					required: !1,
					readOnly: !1,
					wrap: 'soft',
					autofocus: !1,
				})
			var Disabled = Template.bind({})
			;(Disabled.storyName = 'Disabled TextArea'),
				(Disabled.args = _objectSpread(
					_objectSpread({}, Primary.args),
					{},
					{ disabled: !0 },
				))
			var WithLabel = Template.bind({})
			;(WithLabel.storyName = 'TextArea with a label on the top'),
				(WithLabel.args = _objectSpread(
					_objectSpread({}, Primary.args),
					{},
					{ label: 'Basic Text Area' },
				))
			var MaxLength = Template.bind({})
			;(MaxLength.storyName = 'Specific Max Length'),
				(MaxLength.args = _objectSpread(
					_objectSpread({}, Primary.args),
					{},
					{
						maxLength: 10,
						value: 'This is a default value text for the text area component.',
					},
				)),
				(Primary.parameters = _objectSpread(
					_objectSpread({}, Primary.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Primary$parameters =
										Primary.parameters) ||
									void 0 === _Primary$parameters
									? void 0
									: _Primary$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: TextAreaProps) => {\n  const [value, setValue] = useState('');\n  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {\n    setValue(evt.target?.value);\n  };\n  return <TextArea {...args} value={value} handle={handleChange} />;\n}",
									},
									null ===
										(_Primary$parameters2 =
											Primary.parameters) ||
										void 0 === _Primary$parameters2 ||
										null ===
											(_Primary$parameters2$ =
												_Primary$parameters2.docs) ||
										void 0 === _Primary$parameters2$
										? void 0
										: _Primary$parameters2$.source,
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
											"(args: TextAreaProps) => {\n  const [value, setValue] = useState('');\n  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {\n    setValue(evt.target?.value);\n  };\n  return <TextArea {...args} value={value} handle={handleChange} />;\n}",
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
				(WithLabel.parameters = _objectSpread(
					_objectSpread({}, WithLabel.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_WithLabel$parameters =
										WithLabel.parameters) ||
									void 0 === _WithLabel$parameters
									? void 0
									: _WithLabel$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: TextAreaProps) => {\n  const [value, setValue] = useState('');\n  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {\n    setValue(evt.target?.value);\n  };\n  return <TextArea {...args} value={value} handle={handleChange} />;\n}",
									},
									null ===
										(_WithLabel$parameters2 =
											WithLabel.parameters) ||
										void 0 === _WithLabel$parameters2 ||
										null ===
											(_WithLabel$parameters3 =
												_WithLabel$parameters2.docs) ||
										void 0 === _WithLabel$parameters3
										? void 0
										: _WithLabel$parameters3.source,
								),
							},
						),
					},
				)),
				(MaxLength.parameters = _objectSpread(
					_objectSpread({}, MaxLength.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_MaxLength$parameters =
										MaxLength.parameters) ||
									void 0 === _MaxLength$parameters
									? void 0
									: _MaxLength$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											"(args: TextAreaProps) => {\n  const [value, setValue] = useState('');\n  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {\n    setValue(evt.target?.value);\n  };\n  return <TextArea {...args} value={value} handle={handleChange} />;\n}",
									},
									null ===
										(_MaxLength$parameters2 =
											MaxLength.parameters) ||
										void 0 === _MaxLength$parameters2 ||
										null ===
											(_MaxLength$parameters3 =
												_MaxLength$parameters2.docs) ||
										void 0 === _MaxLength$parameters3
										? void 0
										: _MaxLength$parameters3.source,
								),
							},
						),
					},
				))
		},
	},
])
