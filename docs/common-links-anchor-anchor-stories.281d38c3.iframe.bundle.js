'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[625],
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
		'./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				function _objectWithoutProperties(source, excluded) {
					if (null == source) return {}
					var key,
						i,
						target = (function _objectWithoutPropertiesLoose(
							source,
							excluded,
						) {
							if (null == source) return {}
							var key,
								i,
								target = {},
								sourceKeys = Object.keys(source)
							for (i = 0; i < sourceKeys.length; i++)
								(key = sourceKeys[i]),
									excluded.indexOf(key) >= 0 ||
										(target[key] = source[key])
							return target
						})(source, excluded)
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys =
							Object.getOwnPropertySymbols(source)
						for (i = 0; i < sourceSymbolKeys.length; i++)
							(key = sourceSymbolKeys[i]),
								excluded.indexOf(key) >= 0 ||
									(Object.prototype.propertyIsEnumerable.call(
										source,
										key,
									) &&
										(target[key] = source[key]))
					}
					return target
				}
				__webpack_require__.d(__webpack_exports__, {
					Z: () => _objectWithoutProperties,
				})
			},
		'./components/common/links/anchor/anchor.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					default: () => anchor_stories,
				})
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				esm_extends = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/extends.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				objectWithoutProperties = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
				),
				_excluded = [
					'path',
					'children',
					'className',
					'role',
					'open',
					'onClick',
					'id',
					'icon',
				],
				__jsx = react.createElement,
				Anchor = function Anchor(_ref) {
					var _ref$path = _ref.path,
						path = void 0 === _ref$path ? '' : _ref$path,
						children = _ref.children,
						_ref$className = _ref.className,
						className =
							void 0 === _ref$className ? '' : _ref$className,
						_ref$role = _ref.role,
						role = void 0 === _ref$role ? '' : _ref$role,
						open = _ref.open,
						_ref$onClick = _ref.onClick,
						onClick =
							void 0 === _ref$onClick
								? function () {}
								: _ref$onClick,
						_ref$id = _ref.id,
						id = void 0 === _ref$id ? '' : _ref$id,
						icon = _ref.icon,
						rest = (0, objectWithoutProperties.Z)(_ref, _excluded),
						classes = [
							'underline',
							className && className,
							'tooltip-parent' === role &&
								!open &&
								'flex items-center justify-center py-4',
							open &&
								'tooltip-parent' === role &&
								'justify-start text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest list-none no-underline',
						]
							.filter(Boolean)
							.join(' ')
					return __jsx(
						'a',
						(0, esm_extends.Z)(
							{ href: path, className: classes, onClick, id },
							rest,
						),
						icon && open
							? __jsx(
									'span',
									{ className: 'flex gap-2 items-center' },
									__jsx(
										'span',
										{ className: 'opacity-50' },
										icon,
									),
									children,
							  )
							: children,
					)
				}
			;(Anchor.displayName = 'Anchor'),
				(Anchor.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Anchor',
					props: {
						path: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
							tsType: { name: 'string' },
							description:
								'Indicates the path upon clicking on the link',
						},
						className: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
							tsType: { name: 'string' },
							description:
								'A descriptive label for the className',
						},
						role: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
							tsType: { name: 'string' },
							description:
								"Indicates role of the anchor element, upon which styling changes based on user's selection",
						},
						onClick: {
							defaultValue: {
								value: '() => undefined',
								computed: !1,
							},
							required: !1,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '(e?: React.MouseEvent<HTMLAnchorElement>) => void',
								signature: {
									arguments: [
										{
											name: 'e',
											type: {
												name: 'ReactMouseEvent',
												raw: 'React.MouseEvent<HTMLAnchorElement>',
												elements: [
													{
														name: 'HTMLAnchorElement',
													},
												],
											},
										},
									],
									return: { name: 'void' },
								},
							},
							description: '',
						},
						id: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
							tsType: { name: 'string' },
							description: 'Indicates id as string',
						},
						children: {
							required: !0,
							tsType: {
								name: 'ReactReactNode',
								raw: 'React.ReactNode',
							},
							description: '',
						},
						open: {
							required: !1,
							tsType: { name: 'boolean' },
							description:
								'A Boolean that decides the styling of anchor tag',
						},
						icon: {
							required: !1,
							tsType: {
								name: 'ReactReactNode',
								raw: 'React.ReactNode',
							},
							description: '',
						},
					},
				})
			try {
				;(Anchor.displayName = 'Anchor'),
					(Anchor.__docgenInfo = {
						description: '',
						displayName: 'Anchor',
						props: {
							path: {
								defaultValue: { value: '' },
								description:
									'Indicates the path upon clicking on the link',
								name: 'path',
								required: !1,
								type: { name: 'string' },
							},
							className: {
								defaultValue: { value: '' },
								description:
									'A descriptive label for the className',
								name: 'className',
								required: !1,
								type: { name: 'string' },
							},
							role: {
								defaultValue: { value: '' },
								description:
									"Indicates role of the anchor element, upon which styling changes based on user's selection",
								name: 'role',
								required: !1,
								type: { name: 'string' },
							},
							open: {
								defaultValue: null,
								description:
									'A Boolean that decides the styling of anchor tag',
								name: 'open',
								required: !1,
								type: { name: 'boolean' },
							},
							onClick: {
								defaultValue: { value: '() => undefined' },
								description: '',
								name: 'onClick',
								required: !1,
								type: {
									name: '(e?: MouseEvent<HTMLAnchorElement, MouseEvent>) => void',
								},
							},
							id: {
								defaultValue: { value: '' },
								description: 'Indicates id as string',
								name: 'id',
								required: !1,
								type: { name: 'string' },
							},
							icon: {
								defaultValue: null,
								description: '',
								name: 'icon',
								required: !1,
								type: { name: 'ReactNode' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/links/anchor/anchor.tsx#Anchor'
						] = {
							docgenInfo: Anchor.__docgenInfo,
							name: 'Anchor',
							path: 'components/common/links/anchor/anchor.tsx#Anchor',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var anchor_stories_jsx = react.createElement
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
			const anchor_stories = {
				title: 'Common/Links/Anchor',
				component: Anchor,
				argTypes: {
					path: {
						type: 'string',
						control: 'text',
						defaultValue: '/',
					},
					role: {
						type: 'string',
						control: { type: 'select' },
						options: ['tooltip-parent', 'menuitem'],
					},
				},
			}
			var Template = function Template(args) {
				return anchor_stories_jsx(
					Anchor,
					(0, esm_extends.Z)({}, args, {
						onClick: function onClick() {
							alert(
								'Your click was handled! This is an example of a custom onClick function. You can also infer the click event from the onClick prop, and access event details.',
							)
						},
					}),
					'Link to resource',
				)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			Primary.parameters = _objectSpread(
				_objectSpread({}, Primary.parameters),
				{},
				{
					docs: _objectSpread(
						_objectSpread(
							{},
							null ===
								(_Primary$parameters = Primary.parameters) ||
								void 0 === _Primary$parameters
								? void 0
								: _Primary$parameters.docs,
						),
						{},
						{
							source: _objectSpread(
								{
									originalSource:
										"(args: AnchorProps) => <Anchor {...args} onClick={() => {\n  alert('Your click was handled! This is an example of a custom onClick function. You can also infer the click event from the onClick prop, and access event details.');\n}}>\n        Link to resource\n    </Anchor>",
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
			)
		},
	},
])
