'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[7090],
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
		'./components/pages/login/login.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					default: () => login_stories,
				})
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				button_button = __webpack_require__(
					'./components/common/button/button.tsx',
				),
				next_auth_react = __webpack_require__(
					'./node_modules/next-auth/react/index.js',
				),
				__jsx = react.createElement
			function Login() {
				var session = (0, next_auth_react.useSession)().data
				return session
					? __jsx(
							react.Fragment,
							null,
							'Signed in as ',
							session.user.email,
							' ',
							__jsx('br', null),
							__jsx(
								button_button.z,
								{
									onClick: function onClick() {
										return (0, next_auth_react.signOut)()
									},
								},
								'Sign Out',
							),
					  )
					: __jsx(
							react.Fragment,
							null,
							'Not signed in ',
							__jsx('br', null),
							__jsx(
								button_button.z,
								{
									onClick: function onClick() {
										return (0, next_auth_react.signIn)()
									},
								},
								'Sign in',
							),
					  )
			}
			Login.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'Login',
			}
			var login_stories_jsx = react.createElement
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
			const login_stories = {
				title: 'Pages/Login/Login',
				component: Login,
				argTypes: {},
			}
			var Template = function Template(args) {
				return login_stories_jsx(
					next_auth_react.SessionProvider,
					null,
					login_stories_jsx(Login, null),
				)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.storyName = 'Default'),
				(Primary.args = {}),
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
											'(args: any) => <SessionProvider>\n        <Login />\n    </SessionProvider>',
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
				))
		},
	},
])
