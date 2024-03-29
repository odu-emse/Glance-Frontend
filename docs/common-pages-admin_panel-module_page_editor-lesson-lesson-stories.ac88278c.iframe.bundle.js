'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[5815],
	{
		'./components/common/pages/admin_panel/module_page_editor/lesson/lesson.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.d(__webpack_exports__, {
					F: () => ModuleLesson,
				})
				var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						'./node_modules/react/index.js',
					),
					react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ =
						__webpack_require__(
							'./node_modules/react-icons/bs/index.esm.js',
						),
					__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
					ModuleLesson = function ModuleLesson(_ref) {
						var lessonName = _ref.lessonName,
							lessonId = _ref.lessonId
						return __jsx(
							'div',
							{ className: 'flex items-center' },
							__jsx(
								'span',
								null,
								__jsx(
									react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.hPW,
									{ size: 25 },
								),
							),
							__jsx(
								'div',
								{ className: 'cursor-pointer m-1 text-lg' },
								'Lesson ',
								lessonId,
								' : ',
								lessonName,
							),
						)
					}
				;(ModuleLesson.displayName = 'ModuleLesson'),
					(ModuleLesson.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'ModuleLesson',
						props: {
							lessonName: {
								required: !0,
								tsType: { name: 'string' },
								description: '',
							},
							lessonId: {
								required: !0,
								tsType: { name: 'number' },
								description:
									'string that shows up name of the lesson on Default Card',
							},
						},
					})
				try {
					;(ModuleLesson.displayName = 'ModuleLesson'),
						(ModuleLesson.__docgenInfo = {
							description: '',
							displayName: 'ModuleLesson',
							props: {
								lessonName: {
									defaultValue: null,
									description: '',
									name: 'lessonName',
									required: !0,
									type: { name: 'string' },
								},
								lessonId: {
									defaultValue: null,
									description:
										'string that shows up name of the lesson on Default Card',
									name: 'lessonId',
									required: !0,
									type: { name: 'number' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/pages/admin_panel/module_page_editor/lesson/lesson.tsx#ModuleLesson'
							] = {
								docgenInfo: ModuleLesson.__docgenInfo,
								name: 'ModuleLesson',
								path: 'components/common/pages/admin_panel/module_page_editor/lesson/lesson.tsx#ModuleLesson',
							})
				} catch (__react_docgen_typescript_loader_error) {}
			},
		'./components/common/pages/admin_panel/module_page_editor/lesson/lesson.stories.tsx':
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
					_lesson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
						'./components/common/pages/admin_panel/module_page_editor/lesson/lesson.tsx',
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
					title: 'Common/Pages/Admin Panel/Module Page Editor/Lesson',
					component: _lesson__WEBPACK_IMPORTED_MODULE_2__.F,
					argTypes: {},
				}
				var Template = function Template(args) {
					return __jsx(_lesson__WEBPACK_IMPORTED_MODULE_2__.F, args)
				}
				Template.displayName = 'Template'
				var Default = Template.bind({})
				;(Default.args = {
					lessonName: 'Introduction to Dynamic Web Content',
					lessonId: 1,
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
												'(args: ModuleLessonProps) => <ModuleLesson {...args} />',
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
