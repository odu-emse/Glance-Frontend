'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[9799],
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
		'./components/common/forms/inputs/select/select.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { P: () => Select })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				Select = function Select(_ref) {
					var options = _ref.options,
						_ref$handle = _ref.handle,
						handle =
							void 0 === _ref$handle
								? function () {
										return null
								  }
								: _ref$handle,
						label = _ref.label,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						_ref$required = _ref.required,
						required = void 0 !== _ref$required && _ref$required,
						name = _ref.name,
						id = _ref.id,
						_ref$multiple = _ref.multiple,
						multiple = void 0 !== _ref$multiple && _ref$multiple,
						_ref$size = _ref.size,
						size = void 0 === _ref$size ? 1 : _ref$size,
						_ref$autoFocus = _ref.autoFocus,
						autoFocus = void 0 !== _ref$autoFocus && _ref$autoFocus
					return __jsx(
						'label',
						{
							className:
								'items-center flex gap-1 mb-2 text-l font-medium text-gray-900',
						},
						label && label,
						__jsx(
							'select',
							{
								className:
									'bg-gray-50 text-gray-900 text-sm w-28 w-fit py-3 border-0 focus:ring-0 ml-1 focus:outline-dashed focus:outline-blue-500 '.concat(
										disabled ? 'cursor-not-allowed' : '',
									),
								onChange: handle,
								disabled,
								required,
								name,
								id,
								multiple,
								size,
								autoFocus,
							},
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
													react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
													null,
													option.icon && option.icon,
													option.label,
											  ),
									)
								}),
						),
					)
				}
			;(Select.displayName = 'Select'),
				(Select.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Select',
					props: {
						handle: {
							defaultValue: { value: '() => null', computed: !1 },
							required: !1,
						},
						disabled: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						required: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						multiple: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						size: {
							defaultValue: { value: '1', computed: !1 },
							required: !1,
						},
						autoFocus: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
					},
				})
			try {
				;(Select.displayName = 'Select'),
					(Select.__docgenInfo = {
						description: '',
						displayName: 'Select',
						props: {
							options: {
								defaultValue: null,
								description:
									'The options to be displayed in the dropdown',
								name: 'options',
								required: !0,
								type: { name: 'string[] | dropdownOption[]' },
							},
							handle: {
								defaultValue: { value: '() => null' },
								description:
									'The function to be called when the select value changes\n@param event\n@returns void',
								name: 'handle',
								required: !1,
								type: {
									name: '(event: ChangeEvent<HTMLSelectElement>) => void',
								},
							},
							label: {
								defaultValue: null,
								description:
									'The displayed label for the dropdown',
								name: 'label',
								required: !1,
								type: { name: 'string' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that a drop-down list should be disabled',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							required: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that the user is required to select a value before submitting the form',
								name: 'required',
								required: !1,
								type: { name: 'boolean' },
							},
							name: {
								defaultValue: null,
								description:
									'The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).',
								name: 'name',
								required: !1,
								type: { name: 'string' },
							},
							id: {
								defaultValue: null,
								description:
									'Specifies a unique id for the drop-down list',
								name: 'id',
								required: !1,
								type: { name: 'string' },
							},
							multiple: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that multiple options can be selected at once',
								name: 'multiple',
								required: !1,
								type: { name: 'boolean' },
							},
							size: {
								defaultValue: { value: '1' },
								description:
									'Defines the number of visible options in a drop-down list',
								name: 'size',
								required: !1,
								type: { name: 'number' },
							},
							autoFocus: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that the drop-down list should automatically get focus when the page loads',
								name: 'autoFocus',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/inputs/select/select.tsx#Select'
						] = {
							docgenInfo: Select.__docgenInfo,
							name: 'Select',
							path: 'components/common/forms/inputs/select/select.tsx#Select',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/forms/inputs/select/select.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					Secondary: () => Secondary,
					Tertiary: () => Tertiary,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				_Secondary$parameters,
				_Secondary$parameters2,
				_Secondary$parameters3,
				_Tertiary$parameters,
				_Tertiary$parameters2,
				_Tertiary$parameters3,
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/common/forms/inputs/select/select.tsx',
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
				title: 'Common/Forms/Inputs/Select',
				component: _select__WEBPACK_IMPORTED_MODULE_2__.P,
			}
			var Template = function Template(args) {
				return __jsx(_select__WEBPACK_IMPORTED_MODULE_2__.P, args)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.storyName = 'Default'),
				(Primary.args = {
					options: ['Relevance', 'Popularity', 'Latest'],
					handle: function handle(event) {
						console.log(event.target.value)
					},
					label: 'Sort by',
					multiple: !1,
					size: 1,
					required: !1,
					disabled: !1,
					name: 'sort',
					id: 'sort-input',
					autoFocus: !1,
				})
			var Secondary = Template.bind({})
			;(Secondary.storyName = 'No label'),
				(Secondary.args = {
					options: [
						'Hot Posts',
						'Controversial',
						'Latest',
						'Top All Time',
					],
				})
			var Tertiary = Template.bind({})
			;(Tertiary.storyName = 'With options as objects'),
				(Tertiary.args = _objectSpread(
					_objectSpread({}, Primary.args),
					{},
					{
						options: [
							{ label: 'Relevance', value: 'relevance' },
							{ label: 'Popularity', value: 'popularity' },
							{ label: 'Latest', value: 'latest' },
						],
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
											'(args: dropdownProps) => {\n  return <Select {...args} />;\n}',
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
				(Secondary.parameters = _objectSpread(
					_objectSpread({}, Secondary.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Secondary$parameters =
										Secondary.parameters) ||
									void 0 === _Secondary$parameters
									? void 0
									: _Secondary$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: dropdownProps) => {\n  return <Select {...args} />;\n}',
									},
									null ===
										(_Secondary$parameters2 =
											Secondary.parameters) ||
										void 0 === _Secondary$parameters2 ||
										null ===
											(_Secondary$parameters3 =
												_Secondary$parameters2.docs) ||
										void 0 === _Secondary$parameters3
										? void 0
										: _Secondary$parameters3.source,
								),
							},
						),
					},
				)),
				(Tertiary.parameters = _objectSpread(
					_objectSpread({}, Tertiary.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Tertiary$parameters =
										Tertiary.parameters) ||
									void 0 === _Tertiary$parameters
									? void 0
									: _Tertiary$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: dropdownProps) => {\n  return <Select {...args} />;\n}',
									},
									null ===
										(_Tertiary$parameters2 =
											Tertiary.parameters) ||
										void 0 === _Tertiary$parameters2 ||
										null ===
											(_Tertiary$parameters3 =
												_Tertiary$parameters2.docs) ||
										void 0 === _Tertiary$parameters3
										? void 0
										: _Tertiary$parameters3.source,
								),
							},
						),
					},
				))
		},
	},
])
