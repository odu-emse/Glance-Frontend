'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[2286],
	{
		'./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			function _arrayLikeToArray(arr, len) {
				;(null == len || len > arr.length) && (len = arr.length)
				for (var i = 0, arr2 = new Array(len); i < len; i++)
					arr2[i] = arr[i]
				return arr2
			}
			__webpack_require__.d(__webpack_exports__, {
				Z: () => _arrayLikeToArray,
			})
		},
		'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				Z: () => _slicedToArray,
			})
			var unsupportedIterableToArray = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js',
			)
			function _slicedToArray(arr, i) {
				return (
					(function _arrayWithHoles(arr) {
						if (Array.isArray(arr)) return arr
					})(arr) ||
					(function _iterableToArrayLimit(arr, i) {
						var _i =
							null == arr
								? null
								: ('undefined' != typeof Symbol &&
										arr[Symbol.iterator]) ||
								  arr['@@iterator']
						if (null != _i) {
							var _s,
								_e,
								_x,
								_r,
								_arr = [],
								_n = !0,
								_d = !1
							try {
								if (
									((_x = (_i = _i.call(arr)).next), 0 === i)
								) {
									if (Object(_i) !== _i) return
									_n = !1
								} else
									for (
										;
										!(_n = (_s = _x.call(_i)).done) &&
										(_arr.push(_s.value),
										_arr.length !== i);
										_n = !0
									);
							} catch (err) {
								;(_d = !0), (_e = err)
							} finally {
								try {
									if (
										!_n &&
										null != _i.return &&
										((_r = _i.return()), Object(_r) !== _r)
									)
										return
								} finally {
									if (_d) throw _e
								}
							}
							return _arr
						}
					})(arr, i) ||
					(0, unsupportedIterableToArray.Z)(arr, i) ||
					(function _nonIterableRest() {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					})()
				)
			}
		},
		'./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => _unsupportedIterableToArray,
				})
				var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js',
					)
				function _unsupportedIterableToArray(o, minLen) {
					if (o) {
						if ('string' == typeof o)
							return (0,
							_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
								o,
								minLen,
							)
						var n = Object.prototype.toString.call(o).slice(8, -1)
						return (
							'Object' === n &&
								o.constructor &&
								(n = o.constructor.name),
							'Map' === n || 'Set' === n
								? Array.from(o)
								: 'Arguments' === n ||
								  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
										n,
								  )
								? (0,
								  _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
										o,
										minLen,
								  )
								: void 0
						)
					}
				}
			},
		'./components/common/tabs_panel/tabs_panel.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Course: () => Course,
					default: () => tabs_panel_stories,
				})
			var _Course$parameters,
				_Course$parameters2,
				_Course$parameters2$d,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				slicedToArray = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
				),
				index_esm = __webpack_require__(
					'./node_modules/react-icons/bs/index.esm.js',
				),
				__jsx = react.createElement,
				TabsPanel = function TabsPanel(_ref) {
					var moduleInfo = _ref.moduleInfo,
						_React$useState = react.useState(0),
						_React$useState2 = (0, slicedToArray.Z)(
							_React$useState,
							2,
						),
						index = _React$useState2[0],
						setIndex = _React$useState2[1],
						text = 'text-slate-500 hover:text-slate-800'
					return __jsx(
						'div',
						{
							className:
								'flex shadow-md p-4 text-slate-600 text-sm w-full',
						},
						__jsx(
							'div',
							{
								id: 'side-modules',
								className: 'w-1/4 pt-3 self-start',
							},
							__jsx(
								'ul',
								null,
								moduleInfo.map(function (mod, modIndex) {
									return __jsx(
										'li',
										{
											onClick: function onClick() {
												return setIndex(modIndex)
											},
											className: ''
												.concat(text, ' ')
												.concat(
													index === modIndex
														? 'before:w-7 before:bg-slate-600 text-slate-800'
														: '',
													' before:w-5 before:hidden md:before:block before:bg-slate-500 before:h-1 before:mr-2 flex items-center pt-1 cursor-pointer',
												),
											key: modIndex,
										},
										mod.title,
									)
								}),
							),
						),
						__jsx(
							'div',
							{ id: 'content', className: 'w-3/4 flex flex-col' },
							__jsx(
								'div',
								{ className: 'flex flex-row justify-between' },
								__jsx(
									'div',
									{ className: 'flex-[3] ' },
									__jsx('p', null, 'Type'),
									__jsx('hr', null),
								),
								__jsx(
									'div',
									{ className: 'flex-1' },
									__jsx('p', null, 'Average'),
									__jsx('hr', null),
								),
								__jsx(
									'div',
									{ className: 'flex-1 ' },
									__jsx('p', null, 'Action'),
									__jsx('hr', null),
								),
							),
							__jsx(
								'div',
								null,
								__jsx(
									'div',
									{ id: 'assignment-type' },
									__jsx(
										'ul',
										{ className: 'pt-1' },
										moduleInfo[index].assignment.map(
											function (value, valueIndex) {
												return __jsx(
													'li',
													{
														className: 'pt-1.5',
														key: valueIndex,
													},
													__jsx(
														'div',
														{
															className:
																'flex flex-row justify-between',
														},
														__jsx(
															'div',
															{
																className:
																	'flex-[3]',
															},
															__jsx(
																'span',
																null,
																value.type,
															),
														),
														__jsx(
															'div',
															{
																className:
																	'flex-1',
															},
															__jsx(
																'span',
																null,
																value.average,
																'%',
															),
														),
														__jsx(
															'div',
															{
																className:
																	'flex-1',
															},
															__jsx(
																'span',
																null,
																__jsx(
																	'button',
																	{
																		className:
																			''
																				.concat(
																					'pt-1.5',
																					' ',
																				)
																				.concat(
																					text,
																				),
																	},
																	__jsx(
																		index_esm.y_S,
																		null,
																	),
																),
															),
														),
													),
												)
											},
										),
									),
								),
							),
						),
					)
				}
			;(TabsPanel.displayName = 'TabsPanel'),
				(TabsPanel.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'TabsPanel',
					props: {
						moduleInfo: {
							required: !0,
							tsType: {
								name: 'Array',
								elements: [
									{
										name: 'signature',
										type: 'object',
										raw: '{\n\ttitle: string\n\tassignment: AssignmentPropType[]\n}',
										signature: {
											properties: [
												{
													key: 'title',
													value: {
														name: 'string',
														required: !0,
													},
												},
												{
													key: 'assignment',
													value: {
														name: 'Array',
														elements: [
															{
																name: 'signature',
																type: 'object',
																raw: '{\n\ttype: string\n\taverage: number\n}',
																signature: {
																	properties:
																		[
																			{
																				key: 'type',
																				value: {
																					name: 'string',
																					required:
																						!0,
																				},
																			},
																			{
																				key: 'average',
																				value: {
																					name: 'number',
																					required:
																						!0,
																				},
																			},
																		],
																},
															},
														],
														raw: 'AssignmentPropType[]',
														required: !0,
													},
												},
											],
										},
									},
								],
								raw: 'ModuleInfo[]',
							},
							description: '',
						},
					},
				})
			try {
				;(TabsPanel.displayName = 'TabsPanel'),
					(TabsPanel.__docgenInfo = {
						description: '',
						displayName: 'TabsPanel',
						props: {
							moduleInfo: {
								defaultValue: null,
								description: '',
								name: 'moduleInfo',
								required: !0,
								type: { name: 'ModuleInfo[]' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/tabs_panel/tabs_panel.tsx#TabsPanel'
						] = {
							docgenInfo: TabsPanel.__docgenInfo,
							name: 'TabsPanel',
							path: 'components/common/tabs_panel/tabs_panel.tsx#TabsPanel',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var tabs_panel_stories_jsx = react.createElement
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
			const tabs_panel_stories = {
				title: 'Common/TabsPanel',
				component: TabsPanel,
			}
			var Template = function Template(args) {
				return tabs_panel_stories_jsx(
					'div',
					{ className: 'w-2/4 mx-auto' },
					tabs_panel_stories_jsx(TabsPanel, args),
				)
			}
			Template.displayName = 'Template'
			var Course = Template.bind({})
			;(Course.args = {
				moduleInfo: [
					{
						title: 'ENMA 600',
						assignment: [
							{ type: 'Assignment Type 1', average: 78 },
							{ type: 'Assignment Type 2', average: 94 },
							{ type: 'Assignment Type 3', average: 62 },
						],
					},
					{
						title: 'ENMA 601',
						assignment: [
							{ type: 'Assignment Type 6444', average: 45 },
							{ type: 'Assignment Type 2', average: 67 },
							{ type: 'Assignment Type 3', average: 87 },
						],
					},
					{
						title: 'ENMA 602',
						assignment: [
							{ type: 'Assignment Type 1', average: 61 },
							{ type: 'Assignment Type 2', average: 100 },
							{ type: 'Assignment Type 3', average: 45 },
						],
					},
					{
						title: 'ENMA 603',
						assignment: [
							{ type: 'Assignment Type 1', average: 76 },
							{ type: 'Assignment Type 2', average: 23 },
							{ type: 'Assignment Type 3', average: 65 },
							{ type: 'Assignment Type 4', average: 34 },
						],
					},
				],
			}),
				(Course.parameters = _objectSpread(
					_objectSpread({}, Course.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Course$parameters = Course.parameters) ||
									void 0 === _Course$parameters
									? void 0
									: _Course$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'args => {\n  return <div className="w-2/4 mx-auto">\n            <TabsPanel {...args} />\n        </div>;\n}',
									},
									null ===
										(_Course$parameters2 =
											Course.parameters) ||
										void 0 === _Course$parameters2 ||
										null ===
											(_Course$parameters2$d =
												_Course$parameters2.docs) ||
										void 0 === _Course$parameters2$d
										? void 0
										: _Course$parameters2$d.source,
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
