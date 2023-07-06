;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[3943],
	{
		'./components/common/button/button.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
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
		'./components/pages/errors/request_failed/request_failed.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					default: () => request_failed_stories,
				})
			var defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				button_button = __webpack_require__(
					'./components/common/button/button.tsx',
				),
				next_router = __webpack_require__(
					'./node_modules/next/router.js',
				),
				__jsx = react.createElement,
				RequestFailed = function RequestFailed(_ref) {
					var title = _ref.title,
						subtitle = _ref.subtitle,
						router = (0, next_router.useRouter)()
					return __jsx(
						'div',
						{
							className:
								'flex flex-col gap-2 justify-center items-center stdcontainer h-screen',
						},
						__jsx('h1', { className: 'text-2xl font-bold' }, title),
						__jsx(
							'h3',
							{ className: 'text-lg font-semibold' },
							subtitle,
						),
						__jsx(
							button_button.z,
							{
								className: 'underline text-blue-500',
								onClick: function onClick() {
									return router.reload()
								},
							},
							'Try again',
						),
					)
				}
			;(RequestFailed.displayName = 'RequestFailed'),
				(RequestFailed.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'RequestFailed',
					props: {
						title: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						subtitle: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
					},
				})
			const request_failed = RequestFailed
			try {
				;(requestfailed.displayName = 'requestfailed'),
					(requestfailed.__docgenInfo = {
						description: '',
						displayName: 'requestfailed',
						props: {
							title: {
								defaultValue: null,
								description: '',
								name: 'title',
								required: !0,
								type: { name: 'string' },
							},
							subtitle: {
								defaultValue: null,
								description: '',
								name: 'subtitle',
								required: !0,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/pages/errors/request_failed/request_failed.tsx#requestfailed'
						] = {
							docgenInfo: requestfailed.__docgenInfo,
							name: 'requestfailed',
							path: 'components/pages/errors/request_failed/request_failed.tsx#requestfailed',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				request_failed_stories_jsx = react.createElement
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
			const request_failed_stories = {
				title: 'Pages/Errors/Request Failed',
				component: request_failed,
				argTypes: {
					title: { control: { type: 'text' } },
					subtitle: { control: { type: 'text' } },
				},
			}
			var Template = function Template(args) {
				return request_failed_stories_jsx(request_failed, args)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.storyName = 'Default'),
				(Primary.args = {
					title: 'Error',
					subtitle: 'Could not retrieve user information!',
				}),
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
											'(args: RequestFailedProps) => {\n  return <RequestFailed {...args} />;\n}',
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
		'./node_modules/next/dist/client/router.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			'use strict'
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				Object.defineProperty(exports, 'Router', {
					enumerable: !0,
					get: function () {
						return _router.default
					},
				}),
				Object.defineProperty(exports, 'withRouter', {
					enumerable: !0,
					get: function () {
						return _withRouter.default
					},
				}),
				(exports.useRouter = function useRouter() {
					return _react.default.useContext(
						_routerContext.RouterContext,
					)
				}),
				(exports.createRouter = function createRouter(...args) {
					return (
						(singletonRouter.router = new _router.default(...args)),
						singletonRouter.readyCallbacks.forEach((cb) => cb()),
						(singletonRouter.readyCallbacks = []),
						singletonRouter.router
					)
				}),
				(exports.makePublicRouterInstance =
					function makePublicRouterInstance(router) {
						const scopedRouter = router,
							instance = {}
						for (const property of urlPropertyFields)
							'object' != typeof scopedRouter[property]
								? (instance[property] = scopedRouter[property])
								: (instance[property] = Object.assign(
										Array.isArray(scopedRouter[property])
											? []
											: {},
										scopedRouter[property],
								  ))
						return (
							(instance.events = _router.default.events),
							coreMethodFields.forEach((field) => {
								instance[field] = (...args) =>
									scopedRouter[field](...args)
							}),
							instance
						)
					}),
				(exports.default = void 0)
			var _interop_require_default = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_default.js',
				).Z,
				_react = _interop_require_default(
					__webpack_require__('./node_modules/react/index.js'),
				),
				_router = _interop_require_default(
					__webpack_require__(
						'./node_modules/next/dist/shared/lib/router/router.js',
					),
				),
				_routerContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router-context.js',
				),
				_isError = _interop_require_default(
					__webpack_require__(
						'./node_modules/next/dist/lib/is-error.js',
					),
				),
				_withRouter = _interop_require_default(
					__webpack_require__(
						'./node_modules/next/dist/client/with-router.js',
					),
				)
			const singletonRouter = {
					router: null,
					readyCallbacks: [],
					ready(cb) {
						if (this.router) return cb()
						'undefined' != typeof window &&
							this.readyCallbacks.push(cb)
					},
				},
				urlPropertyFields = [
					'pathname',
					'route',
					'query',
					'asPath',
					'components',
					'isFallback',
					'basePath',
					'locale',
					'locales',
					'defaultLocale',
					'isReady',
					'isPreview',
					'isLocaleDomain',
					'domainLocales',
				],
				coreMethodFields = [
					'push',
					'replace',
					'reload',
					'back',
					'prefetch',
					'beforePopState',
				]
			function getRouter() {
				if (!singletonRouter.router) {
					throw new Error(
						'No router instance found.\nYou should only use "next/router" on the client side of your app.\n',
					)
				}
				return singletonRouter.router
			}
			Object.defineProperty(singletonRouter, 'events', {
				get: () => _router.default.events,
			}),
				urlPropertyFields.forEach((field) => {
					Object.defineProperty(singletonRouter, field, {
						get: () => getRouter()[field],
					})
				}),
				coreMethodFields.forEach((field) => {
					singletonRouter[field] = (...args) =>
						getRouter()[field](...args)
				}),
				[
					'routeChangeStart',
					'beforeHistoryChange',
					'routeChangeComplete',
					'routeChangeError',
					'hashChangeStart',
					'hashChangeComplete',
				].forEach((event) => {
					singletonRouter.ready(() => {
						_router.default.events.on(event, (...args) => {
							const eventField = `on${event
									.charAt(0)
									.toUpperCase()}${event.substring(1)}`,
								_singletonRouter = singletonRouter
							if (_singletonRouter[eventField])
								try {
									_singletonRouter[eventField](...args)
								} catch (err) {
									console.error(
										`Error when running the Router event: ${eventField}`,
									),
										console.error(
											_isError.default(err)
												? `${err.message}\n${err.stack}`
												: err + '',
										)
								}
						})
					})
				})
			var _default = singletonRouter
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
		'./node_modules/next/dist/client/with-router.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			'use strict'
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = function withRouter(ComposedComponent) {
					function WithRouterWrapper(props) {
						return _react.default.createElement(
							ComposedComponent,
							Object.assign(
								{ router: _router.useRouter() },
								props,
							),
						)
					}
					;(WithRouterWrapper.getInitialProps =
						ComposedComponent.getInitialProps),
						(WithRouterWrapper.origGetInitialProps =
							ComposedComponent.origGetInitialProps),
						!1
					return WithRouterWrapper
				})
			var _react = (0,
				__webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_default.js',
				).Z)(__webpack_require__('./node_modules/react/index.js')),
				_router = __webpack_require__(
					'./node_modules/next/dist/client/router.js',
				)
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
		'./node_modules/next/router.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__,
		) => {
			module.exports = __webpack_require__(
				'./node_modules/next/dist/client/router.js',
			)
		},
	},
])
