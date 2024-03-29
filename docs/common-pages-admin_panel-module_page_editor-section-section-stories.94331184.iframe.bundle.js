'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[8824],
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
		'./components/common/pages/admin_panel/module_page_editor/section/section.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.d(__webpack_exports__, {
					q: () => ModuleSection,
				})
				var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						'./node_modules/react/index.js',
					),
					react_icons_rx__WEBPACK_IMPORTED_MODULE_1__ =
						__webpack_require__(
							'./node_modules/react-icons/rx/index.esm.js',
						),
					__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
					ModuleSection = function ModuleSection(_ref) {
						var sectionName = _ref.sectionName,
							sectionId = _ref.sectionId,
							_useState = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
							isClicked = _useState[0],
							setIsClicked = _useState[1]
						return __jsx(
							'div',
							{ className: 'text-lg flex items-center' },
							__jsx(
								'span',
								null,
								__jsx(
									isClicked
										? react_icons_rx__WEBPACK_IMPORTED_MODULE_1__.jX5
										: react_icons_rx__WEBPACK_IMPORTED_MODULE_1__.h2L,
									{ size: 25 },
								),
							),
							__jsx(
								'div',
								{
									className: 'cursor-pointer select-none',
									onClick: function onClick() {
										return setIsClicked(!isClicked)
									},
									key: sectionId,
								},
								sectionName,
							),
						)
					}
				;(ModuleSection.displayName = 'ModuleSection'),
					(ModuleSection.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'ModuleSection',
						props: {
							sectionName: {
								required: !0,
								tsType: { name: 'string' },
								description: '',
							},
							sectionId: {
								required: !0,
								tsType: { name: 'number' },
								description:
									'string that shows up name of the secion on Default Card',
							},
						},
					})
				try {
					;(ModuleSection.displayName = 'ModuleSection'),
						(ModuleSection.__docgenInfo = {
							description: '',
							displayName: 'ModuleSection',
							props: {
								sectionName: {
									defaultValue: null,
									description: '',
									name: 'sectionName',
									required: !0,
									type: { name: 'string' },
								},
								sectionId: {
									defaultValue: null,
									description:
										'string that shows up name of the secion on Default Card',
									name: 'sectionId',
									required: !0,
									type: { name: 'number' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/pages/admin_panel/module_page_editor/section/section.tsx#ModuleSection'
							] = {
								docgenInfo: ModuleSection.__docgenInfo,
								name: 'ModuleSection',
								path: 'components/common/pages/admin_panel/module_page_editor/section/section.tsx#ModuleSection',
							})
				} catch (__react_docgen_typescript_loader_error) {}
			},
		'./components/common/pages/admin_panel/module_page_editor/section/section.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Default: () => Default,
						default: () => __WEBPACK_DEFAULT_EXPORT__,
					})
				var _Default$parameters,
					_Default$parameters2,
					_Default$parameters2$,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
						__webpack_require__(
							'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
						),
					react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						'./node_modules/react/index.js',
					),
					_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
						'./components/common/pages/admin_panel/module_page_editor/section/section.tsx',
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
									sym,
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
							? ownKeys(Object(source), !0).forEach(
									function (key) {
										;(0,
										_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
											target,
											key,
											source[key],
										)
									},
							  )
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
					title: 'Common/Pages/Admin Panel/Module Page Editor/Section',
					component: _section__WEBPACK_IMPORTED_MODULE_2__.q,
					argTypes: {},
				}
				var Template = function Template(args) {
					return __jsx(_section__WEBPACK_IMPORTED_MODULE_2__.q, args)
				}
				Template.displayName = 'Template'
				var Default = Template.bind({})
				;(Default.args = { sectionName: 'Section 1', sectionId: 1 }),
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
												'(args: ModuleSectionProps) => <ModuleSection {...args} />',
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
