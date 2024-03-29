'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[8919],
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
		'./components/common/version/dynamic_version.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					default: () => dynamic_version_stories,
				})
			var defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js')
			const package_namespaceObject_i8 = '0.3.5'
			var _Default$parameters,
				_Default$parameters2,
				_Default$parameters2$,
				__jsx = react.createElement,
				DynamicVersion = function DynamicVersion(_ref) {
					var backendVersion = _ref.backendVersion,
						isLight = _ref.isLight,
						frontendVersion = package_namespaceObject_i8
					return __jsx(
						'span',
						{
							className:
								'sans font-bold absolute bottom-1 left-3 gap-4 sans text-sm '.concat(
									isLight && 'text-white',
								),
						},
						__jsx(
							'small',
							{ className: 'm-0 p-0' },
							'API Version ',
							backendVersion,
						),
						__jsx('span', { className: 'mx-1' }, '•'),
						__jsx(
							'small',
							{ className: 'm-0 p-0' },
							'FE Version ',
							frontendVersion,
						),
					)
				}
			;(DynamicVersion.displayName = 'DynamicVersion'),
				(DynamicVersion.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'DynamicVersion',
					props: {
						backendVersion: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						isLight: {
							required: !0,
							tsType: { name: 'boolean' },
							description: '',
						},
					},
				})
			try {
				;(DynamicVersion.displayName = 'DynamicVersion'),
					(DynamicVersion.__docgenInfo = {
						description: '',
						displayName: 'DynamicVersion',
						props: {
							backendVersion: {
								defaultValue: null,
								description: '',
								name: 'backendVersion',
								required: !0,
								type: { name: 'string' },
							},
							isLight: {
								defaultValue: null,
								description: '',
								name: 'isLight',
								required: !0,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/version/dynamic_version.tsx#DynamicVersion'
						] = {
							docgenInfo: DynamicVersion.__docgenInfo,
							name: 'DynamicVersion',
							path: 'components/common/version/dynamic_version.tsx#DynamicVersion',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var dynamic_version_stories_jsx = react.createElement
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
			const dynamic_version_stories = {
				title: 'Common/Version/Dynamic Version',
				component: DynamicVersion,
				argTypes: {},
			}
			var Template = function Template(args) {
				return dynamic_version_stories_jsx(DynamicVersion, args)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = { backendVersion: '0.3.0', isLight: !1 }),
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
											'(args: DynamicVersionProps) => <DynamicVersion {...args} />',
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
