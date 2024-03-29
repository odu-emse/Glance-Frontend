'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[8567],
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
		'./components/common/pages/sidebar/sidebar_lessons/sidebar_lessons.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Default: () => Default,
						default: () => sidebar_lessons_stories,
					})
				var _Default$parameters,
					_Default$parameters2,
					_Default$parameters2$,
					defineProperty = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
					),
					esm_extends = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/extends.js',
					),
					slicedToArray = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
					),
					react = __webpack_require__(
						'./node_modules/react/index.js',
					),
					next_link = __webpack_require__(
						'./node_modules/next/link.js',
					),
					link_default = __webpack_require__.n(next_link),
					index_esm = __webpack_require__(
						'./node_modules/react-icons/io/index.esm.js',
					),
					__jsx = react.createElement,
					SidebarLessons = function SidebarLessons(_ref) {
						var open = _ref.open,
							handle = _ref.handle,
							data = _ref.data,
							property = _ref.property,
							url = _ref.url,
							currentModule = _ref.currentModule
						return __jsx(
							'div',
							{ className: 'relative' },
							__jsx(
								'aside',
								{
									id: 'sidePanel',
									className: 'absolute '.concat(
										open ? 'right-0' : '-right-full',
										' top-0 h-screen w-72 bg-white transition-all drop-shadow-lg p-0',
									),
								},
								__jsx(
									'div',
									{ className: 'ml-8 mt-10' },
									__jsx(
										'h6',
										{
											className: 'font-inter my-4',
											style: {
												fontWeight: 400,
												fontSize: '16px',
											},
										},
										'COLLECTION OVERVIEW',
									),
									data.map(function (item, index) {
										return __jsx(
											'div',
											{
												key: index,
												className:
													'font-lora flex my-3',
												style: {
													fontWeight: 700,
													fontSize: '16px',
												},
											},
											__jsx(
												link_default(),
												{
													href: '/modules/'.concat(
														item[url],
														'/view',
													),
													role: 'lesson link',
												},
												__jsx(
													'a',
													{
														className:
															'font-lora '.concat(
																currentModule ===
																	item.id
																	? 'text-royalblue'
																	: 'text-black',
															),
													},
													''.concat(item[property]),
												),
											),
										)
									}),
								),
								__jsx(
									'button',
									{
										id: 'closeButton',
										className:
											'absolute bottom-7 -left-4 p-2 rounded-md text-red border bg-royalblue',
										onClick: function onClick() {
											return handle(!open)
										},
										'aria-label': 'closeButton',
									},
									__jsx(
										open ? index_esm.hjJ : index_esm.u1R,
										{ color: 'white' },
									),
								),
							),
							__jsx('div', {
								className: 'w-[200px] pointer-events-none',
							}),
						)
					}
				;(SidebarLessons.displayName = 'SidebarLessons'),
					(SidebarLessons.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'SidebarLessons',
						props: {
							handle: {
								required: !0,
								tsType: {
									name: 'signature',
									type: 'function',
									raw: '(open: boolean) => void',
									signature: {
										arguments: [
											{
												name: 'open',
												type: { name: 'boolean' },
											},
										],
										return: { name: 'void' },
									},
								},
								description: '',
							},
							open: {
								required: !0,
								tsType: { name: 'boolean' },
								description: '',
							},
							currentModule: {
								required: !0,
								tsType: { name: 'string' },
								description: '',
							},
							data: {
								required: !0,
								tsType: {
									name: 'Array',
									elements: [{ name: 'Module' }],
									raw: 'Module[]',
								},
								description: '',
							},
							property: {
								required: !0,
								tsType: { name: 'unknown' },
								description: '',
							},
							url: {
								required: !0,
								tsType: { name: 'unknown' },
								description: '',
							},
						},
					})
				try {
					;(SidebarLessons.displayName = 'SidebarLessons'),
						(SidebarLessons.__docgenInfo = {
							description: '',
							displayName: 'SidebarLessons',
							props: {
								handle: {
									defaultValue: null,
									description: '',
									name: 'handle',
									required: !0,
									type: { name: '(open: boolean) => void' },
								},
								open: {
									defaultValue: null,
									description: '',
									name: 'open',
									required: !0,
									type: { name: 'boolean' },
								},
								currentModule: {
									defaultValue: null,
									description: '',
									name: 'currentModule',
									required: !0,
									type: { name: 'string' },
								},
								data: {
									defaultValue: null,
									description: '',
									name: 'data',
									required: !0,
									type: { name: 'Module[]' },
								},
								property: {
									defaultValue: null,
									description: '',
									name: 'property',
									required: !0,
									type: {
										name: 'enum',
										value: [
											{ value: '"number"' },
											{ value: '"name"' },
											{ value: '"id"' },
											{ value: '"threads"' },
											{ value: '"prefix"' },
											{ value: '"content"' },
											{ value: '"collections"' },
											{ value: '"collectionIDs"' },
											{ value: '"position"' },
											{ value: '"quizzes"' },
											{ value: '"moduleProgress"' },
											{ value: '"objectives"' },
											{ value: '"hours"' },
											{ value: '"description"' },
											{ value: '"instructor"' },
											{ value: '"instructorID"' },
										],
									},
								},
								url: {
									defaultValue: null,
									description: '',
									name: 'url',
									required: !0,
									type: {
										name: 'enum',
										value: [
											{ value: '"number"' },
											{ value: '"name"' },
											{ value: '"id"' },
											{ value: '"threads"' },
											{ value: '"prefix"' },
											{ value: '"content"' },
											{ value: '"collections"' },
											{ value: '"collectionIDs"' },
											{ value: '"position"' },
											{ value: '"quizzes"' },
											{ value: '"moduleProgress"' },
											{ value: '"objectives"' },
											{ value: '"hours"' },
											{ value: '"description"' },
											{ value: '"instructor"' },
											{ value: '"instructorID"' },
										],
									},
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/pages/sidebar/sidebar_lessons/sidebar_lessons.tsx#SidebarLessons'
							] = {
								docgenInfo: SidebarLessons.__docgenInfo,
								name: 'SidebarLessons',
								path: 'components/common/pages/sidebar/sidebar_lessons/sidebar_lessons.tsx#SidebarLessons',
							})
				} catch (__react_docgen_typescript_loader_error) {}
				var sidebar_lessons_stories_jsx = react.createElement
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
										;(0, defineProperty.Z)(
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
				const sidebar_lessons_stories = {
					title: 'Common/Sidebar/Sidebar',
					component: SidebarLessons,
					argTypes: {},
				}
				var Template = function Template(args) {
					var _React$useState = react.useState(!0),
						_React$useState2 = (0, slicedToArray.Z)(
							_React$useState,
							2,
						),
						open = _React$useState2[0],
						setOpen = _React$useState2[1]
					return sidebar_lessons_stories_jsx(
						'div',
						{
							className:
								'overflow-x-hidden max-w-screen relative min-h-screen',
						},
						sidebar_lessons_stories_jsx(
							'button',
							{
								onClick: function onClick() {
									return setOpen(!open)
								},
							},
							open ? 'Close panel' : 'Open panel',
						),
						sidebar_lessons_stories_jsx(
							SidebarLessons,
							(0, esm_extends.Z)({}, args, {
								handle: setOpen,
								open,
							}),
						),
					)
				}
				Template.displayName = 'Template'
				var Default = Template.bind({})
				;(Default.args = {}),
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
												"(args: SidebarLessonsProps) => {\n  const [open, setOpen] = React.useState(true);\n  return <div className=\"overflow-x-hidden max-w-screen relative min-h-screen\">\n            <button onClick={() => setOpen(!open)}>\n                {open ? 'Close panel' : 'Open panel'}\n            </button>\n            <SidebarLessons {...args} handle={setOpen} open={open} />\n        </div>;\n}",
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
