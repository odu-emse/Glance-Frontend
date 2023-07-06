'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[374],
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
		'./components/common/community/watched_threads/watched_threads.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				U: () => WatchedSidebarList,
				Y: () => WatchedThreads,
			})
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/next/link.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(
						next_link__WEBPACK_IMPORTED_MODULE_1__,
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				WatchedThreads = function WatchedThreads(_ref) {
					var threads = _ref.threads,
						_ref$title = _ref.title,
						title =
							void 0 === _ref$title
								? 'Watched Threads'
								: _ref$title
					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						__jsx(
							'h1',
							{ className: 'font-bold text-2xl py-1' },
							title,
						),
						threads.map(function (thread, threadIndex) {
							return __jsx(
								next_link__WEBPACK_IMPORTED_MODULE_1___default(),
								{
									key: threadIndex,
									href: '/communities/modules/'
										.concat(
											thread.parentLesson.collection
												.module.id,
											'/threads/',
										)
										.concat(thread.id),
									role: 'thread link',
									className:
										'text-blue-800 flex py-1 text-lg',
								},
								thread.parentLesson.collection.module.moduleName
									.length > 30
									? ''.concat(
											thread.parentLesson.collection.module.moduleName.substring(
												0,
												30,
											),
											'...',
									  )
									: thread.parentLesson.collection.module
											.moduleName,
							)
						}),
					)
				},
				WatchedSidebarList = function WatchedSidebarList(_ref2) {
					var title = _ref2.title,
						threads = _ref2.threads
					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						__jsx(
							'h4',
							{ className: 'text-2xl uppercase mb-2.5' },
							title,
						),
						__jsx(
							'div',
							{ className: 'border border-gray-300 px-8 py-6' },
							threads.map(function (thread, threadIndex) {
								return __jsx(
									next_link__WEBPACK_IMPORTED_MODULE_1___default(),
									{
										key: threadIndex,
										href: '/communities/'.concat(thread.id),
									},
									__jsx(
										'span',
										{
											role: 'thread link',
											className:
												'text-blue-800 font-bold flex pb-3 text-lg underline cursor-pointer',
										},
										thread.title.length > 30
											? ''.concat(
													thread.title.substring(
														0,
														30,
													),
													'...',
											  )
											: thread.title,
									),
								)
							}),
						),
					)
				}
			;(WatchedThreads.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'WatchedThreads',
				props: {
					title: {
						defaultValue: {
							value: "'Watched Threads'",
							computed: !1,
						},
						required: !1,
						tsType: { name: 'string' },
						description: '',
					},
					threads: {
						required: !0,
						tsType: {
							name: 'Array',
							elements: [{ name: 'ThreadType' }],
							raw: 'Array<ThreadType>',
						},
						description: '',
					},
				},
			}),
				(WatchedSidebarList.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'WatchedSidebarList',
					props: {
						threads: {
							required: !0,
							tsType: {
								name: 'Array',
								elements: [{ name: 'ThreadType' }],
								raw: 'Array<ThreadType>',
							},
							description: '',
						},
						title: {
							required: !1,
							tsType: { name: 'string' },
							description: '',
						},
					},
				})
			try {
				;(WatchedThreads.displayName = 'WatchedThreads'),
					(WatchedThreads.__docgenInfo = {
						description: '',
						displayName: 'WatchedThreads',
						props: {
							threads: {
								defaultValue: null,
								description: '',
								name: 'threads',
								required: !0,
								type: { name: 'ThreadType[]' },
							},
							title: {
								defaultValue: { value: 'Watched Threads' },
								description: '',
								name: 'title',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/community/watched_threads/watched_threads.tsx#WatchedThreads'
						] = {
							docgenInfo: WatchedThreads.__docgenInfo,
							name: 'WatchedThreads',
							path: 'components/common/community/watched_threads/watched_threads.tsx#WatchedThreads',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			try {
				;(WatchedSidebarList.displayName = 'WatchedSidebarList'),
					(WatchedSidebarList.__docgenInfo = {
						description: '',
						displayName: 'WatchedSidebarList',
						props: {
							threads: {
								defaultValue: null,
								description: '',
								name: 'threads',
								required: !0,
								type: { name: 'ThreadType[]' },
							},
							title: {
								defaultValue: { value: 'Watched Threads' },
								description: '',
								name: 'title',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/community/watched_threads/watched_threads.tsx#WatchedSidebarList'
						] = {
							docgenInfo: WatchedSidebarList.__docgenInfo,
							name: 'WatchedSidebarList',
							path: 'components/common/community/watched_threads/watched_threads.tsx#WatchedSidebarList',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/community/watched_threads_sidebar/watched_threads_sidebar.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Default: () => Default,
						default: () => watched_threads_sidebar_stories,
					})
				var defineProperty = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
					),
					slicedToArray = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
					),
					react = __webpack_require__(
						'./node_modules/react/index.js',
					),
					index_esm = __webpack_require__(
						'./node_modules/react-icons/io/index.esm.js',
					),
					__jsx = react.createElement,
					WatchedThreadSidebar = function WatchedThreadSidebar(_ref) {
						var open = _ref.open,
							handle = _ref.handle,
							children = _ref.children
						return __jsx(
							'aside',
							{
								id: 'sidePanel',
								style: { overflowY: 'visible' },
								className: ''.concat(
									open ? 'flex-none' : 'w-3',
									' border-l border-gray-300 relative h-screen overflow-y-scroll bg-white transition-all p-3 pt-14',
								),
							},
							open && children,
							__jsx(
								'button',
								{
									id: 'closeButton',
									className:
										'absolute bottom-7 -left-4 p-2 rounded-md text-red border bg-blue-500',
									onClick: function onClick() {
										return handle(!open)
									},
								},
								__jsx(
									open ? index_esm.hjJ : index_esm.u1R,
									null,
								),
							),
						)
					}
				;(WatchedThreadSidebar.displayName = 'WatchedThreadSidebar'),
					(WatchedThreadSidebar.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'WatchedThreadSidebar',
					})
				const watched_threads_sidebar = WatchedThreadSidebar
				try {
					;(watchedthreadssidebar.displayName =
						'watchedthreadssidebar'),
						(watchedthreadssidebar.__docgenInfo = {
							description: '',
							displayName: 'watchedthreadssidebar',
							props: {
								open: {
									defaultValue: null,
									description: '',
									name: 'open',
									required: !0,
									type: { name: 'boolean' },
								},
								handle: {
									defaultValue: null,
									description: '',
									name: 'handle',
									required: !0,
									type: { name: '(open: boolean) => void' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/community/watched_threads_sidebar/watched_threads_sidebar.tsx#watchedthreadssidebar'
							] = {
								docgenInfo: watchedthreadssidebar.__docgenInfo,
								name: 'watchedthreadssidebar',
								path: 'components/common/community/watched_threads_sidebar/watched_threads_sidebar.tsx#watchedthreadssidebar',
							})
				} catch (__react_docgen_typescript_loader_error) {}
				var _Default$parameters,
					_Default$parameters2,
					_Default$parameters2$,
					watched_threads = __webpack_require__(
						'./components/common/community/watched_threads/watched_threads.tsx',
					),
					watched_threads_sidebar_stories_jsx = react.createElement
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
				const watched_threads_sidebar_stories = {
					title: 'Common/Community/WatchedThreadsSidebar',
					component: watched_threads_sidebar,
				}
				var Template = function Template() {
					var _React$useState = react.useState(!0),
						_React$useState2 = (0, slicedToArray.Z)(
							_React$useState,
							2,
						),
						open = _React$useState2[0],
						setOpen = _React$useState2[1]
					return watched_threads_sidebar_stories_jsx(
						'div',
						{
							className:
								'overflow-x-hidden max-w-screen relative min-h-screen',
						},
						watched_threads_sidebar_stories_jsx(
							watched_threads_sidebar,
							{ handle: setOpen, open },
							watched_threads_sidebar_stories_jsx(
								watched_threads.U,
								{
									title: 'Watched threads',
									threads: [
										{
											title: 'Is the sky purple or have I just been looking at my computer for too long?',
											id: 'moduleid1',
										},
										{
											title: 'What is the meaning of life?',
											id: 'moduleid2',
										},
										{
											title: 'Why did the engineer cross the road?',
											id: 'moduleid1',
										},
										{
											title: 'This is a test. Test test test',
											id: 'moduleid6',
										},
									],
								},
							),
						),
					)
				}
				Template.displayName = 'Template'
				var Default = Template.bind({})
				Default.parameters = _objectSpread(
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
											"() => {\n  const [open, setOpen] = React.useState(true);\n  return <div className=\"overflow-x-hidden max-w-screen relative min-h-screen\">\n            <WatchedThreadSidebar handle={setOpen} open={open}>\n                <WatchedSidebarList title={'Watched threads'} threads={[{\n        title: 'Is the sky purple or have I just been looking at my computer for too long?',\n        id: 'moduleid1'\n      }, {\n        title: 'What is the meaning of life?',\n        id: 'moduleid2'\n      }, {\n        title: 'Why did the engineer cross the road?',\n        id: 'moduleid1'\n      }, {\n        title: 'This is a test. Test test test',\n        id: 'moduleid6'\n      }]} />\n            </WatchedThreadSidebar>\n        </div>;\n}",
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
				)
			},
	},
])
