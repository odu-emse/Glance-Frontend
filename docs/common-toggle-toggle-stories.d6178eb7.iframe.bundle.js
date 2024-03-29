'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[2812],
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
		'./components/common/toggle/toggle.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					default: () => toggle_stories,
				})
			var _Default$parameters,
				_Default$parameters2,
				_Default$parameters2$,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				__jsx = react.createElement,
				ToggleSwitch = function ToggleSwitch(_ref) {
					var label = _ref.label,
						variant = _ref.variant,
						_ref$checked = _ref.checked,
						checked = void 0 !== _ref$checked && _ref$checked,
						size = _ref.size,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						_useState = (0, react.useState)(checked),
						isChecked = _useState[0],
						setIsChecked = _useState[1],
						handleToggleSwitch = function handleToggleSwitch() {
							disabled || setIsChecked(!isChecked)
						},
						switchSize =
							'base' === size
								? 'w-16'
								: 'small' === size
								? 'w-12'
								: 'w-20',
						switchTranslateX =
							'base' === size
								? 'translate-x-6'
								: 'large' === size
								? 'translate-x-10'
								: 'translate-x-4',
						switchVariant =
							'primary' === variant
								? 'bg-green-400'
								: 'secondary' === variant
								? 'bg-blue-400'
								: 'bg-red-400',
						switchBorderColor =
							'primary' === variant
								? 'border-green-300'
								: 'secondary' === variant
								? 'border-blue-300'
								: 'border-red-300',
						switchSlider = 'small' === size ? 'w-4 h-4' : 'w-6 h-6',
						switchDisabled = !0 === disabled ? '' : 'cursor-pointer'
					return __jsx(
						'div',
						{ className: 'flex items-center' },
						__jsx('input', {
							type: 'checkbox',
							className: 'sr-only',
							checked: isChecked,
							onChange: handleToggleSwitch,
							disabled,
						}),
						__jsx(
							'div',
							{
								className: ''
									.concat(
										switchSize,
										' p-1 rounded-full overflow-hidden ',
									)
									.concat(switchDisabled, ' border-4 ')
									.concat(
										isChecked
											? ''
													.concat(switchVariant, ' ')
													.concat(switchBorderColor)
											: 'bg-gray-300',
									),
								onClick: handleToggleSwitch,
							},
							__jsx(
								'span',
								{
									className:
										'mt-0.5 text-sm font-bold absolute place-content-center select-none '
											.concat(
												isChecked
													? 'text-white translate-x-0'
													: 'base' === size
													? 'translate-x-6 text-gray-500'
													: 'translate-x-9 text-gray-500',
												' ',
											)
											.concat(
												'small' === size
													? 'hidden'
													: '',
											),
								},
								isChecked ? 'ON' : 'OFF',
							),
							__jsx('div', {
								className: 'transition '
									.concat(
										switchSlider,
										' bg-white rounded-full transform ',
									)
									.concat(
										isChecked
											? switchTranslateX
											: 'translate-x-0',
									),
							}),
						),
						__jsx(
							'p',
							{
								className: ''.concat(
									'' === label ? '' : 'ml-1',
									' select-none',
								),
							},
							label,
						),
					)
				}
			;(ToggleSwitch.displayName = 'ToggleSwitch'),
				(ToggleSwitch.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'ToggleSwitch',
					props: {
						checked: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						disabled: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
					},
				})
			try {
				;(ToggleSwitch.displayName = 'ToggleSwitch'),
					(ToggleSwitch.__docgenInfo = {
						description: '',
						displayName: 'ToggleSwitch',
						props: {
							label: {
								defaultValue: null,
								description:
									'A string that captions for the toggle switch',
								name: 'label',
								required: !1,
								type: { name: 'string' },
							},
							variant: {
								defaultValue: null,
								description:
									'An enum that specifies how the color theme of the toggle switch',
								name: 'variant',
								required: !0,
								type: {
									name: 'enum',
									value: [
										{ value: '"primary"' },
										{ value: '"secondary"' },
										{ value: '"tertiary"' },
									],
								},
							},
							checked: {
								defaultValue: { value: 'false' },
								description:
									'A boolean determines whether the toggle switch is checked or not',
								name: 'checked',
								required: !1,
								type: { name: 'boolean' },
							},
							size: {
								defaultValue: null,
								description:
									'An enum that specifies the size of the toggle switch',
								name: 'size',
								required: !0,
								type: {
									name: 'enum',
									value: [
										{ value: '"small"' },
										{ value: '"base"' },
										{ value: '"large"' },
									],
								},
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'A boolean makes the toggle switch not mutable, focusable',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/toggle/toggle.tsx#ToggleSwitch'
						] = {
							docgenInfo: ToggleSwitch.__docgenInfo,
							name: 'ToggleSwitch',
							path: 'components/common/toggle/toggle.tsx#ToggleSwitch',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var toggle_stories_jsx = react.createElement
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
			const toggle_stories = {
				title: 'common/Toggle Switch',
				component: ToggleSwitch,
				argTypes: {
					checked: {
						type: 'boolean',
						control: 'boolean',
						defaultValue: !1,
					},
				},
			}
			var Template = function Template(args) {
				return toggle_stories_jsx(ToggleSwitch, args)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {
				label: 'name',
				variant: 'primary',
				checked: !1,
				size: 'large',
				disabled: !0,
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
											'(args: any) => {\n  // const disabled = false;\n  return <ToggleSwitch {...args} />;\n}',
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
