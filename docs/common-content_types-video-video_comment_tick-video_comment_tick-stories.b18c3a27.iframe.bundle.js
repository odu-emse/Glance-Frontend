'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[8328],
	{
		'./node_modules/@babel/runtime/helpers/esm/defineProperty.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
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
							'@@toPrimitive must return a primitive value.'
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
		'./components/common/content_types/video/video_comment_tick/video_comment_tick.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.d(__webpack_exports__, {
					N: () => VideoCommentTick,
				})
				var __jsx = __webpack_require__(
						'./node_modules/react/index.js'
					).createElement,
					VideoCommentTick = function VideoCommentTick(_ref) {
						var icon = _ref.icon
						return __jsx(
							'div',
							{
								tabIndex: 0,
								className: [
									'bg-blue-500 h-full w-full rounded-full overflow-hidden transition-transform cursor-pointer',
									'hover:scale-[1.5] hover:z-[200]',
									'focus:scale-[1.5] focus:z-[200]',
								].join(' '),
							},
							__jsx('img', {
								src: icon,
								className: ['object-cover w-full h-full'].join(
									' '
								),
							})
						)
					}
				;(VideoCommentTick.displayName = 'VideoCommentTick'),
					(VideoCommentTick.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'VideoCommentTick',
						props: {
							icon: {
								required: !0,
								tsType: { name: 'string' },
								description: '',
							},
						},
					})
				try {
					;(VideoCommentTick.displayName = 'VideoCommentTick'),
						(VideoCommentTick.__docgenInfo = {
							description: '',
							displayName: 'VideoCommentTick',
							props: {
								icon: {
									defaultValue: null,
									description: '',
									name: 'icon',
									required: !0,
									type: { name: 'string' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/content_types/video/video_comment_tick/video_comment_tick.tsx#VideoCommentTick'
							] = {
								docgenInfo: VideoCommentTick.__docgenInfo,
								name: 'VideoCommentTick',
								path: 'components/common/content_types/video/video_comment_tick/video_comment_tick.tsx#VideoCommentTick',
							})
				} catch (__react_docgen_typescript_loader_error) {}
			},
		'./components/common/content_types/video/video_comment_tick/video_comment_tick.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Sample: () => Sample,
						default: () => __WEBPACK_DEFAULT_EXPORT__,
					})
				var _Sample$parameters,
					_Sample$parameters2,
					_Sample$parameters2$d,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
						__webpack_require__(
							'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
						),
					react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						'./node_modules/react/index.js'
					),
					_video_comment_tick__WEBPACK_IMPORTED_MODULE_2__ =
						__webpack_require__(
							'./components/common/content_types/video/video_comment_tick/video_comment_tick.tsx'
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
									sym
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
							? ownKeys(Object(source), !0).forEach(function (
									key
							  ) {
									;(0,
									_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
										target,
										key,
										source[key]
									)
							  })
							: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									target,
									Object.getOwnPropertyDescriptors(source)
							  )
							: ownKeys(Object(source)).forEach(function (key) {
									Object.defineProperty(
										target,
										key,
										Object.getOwnPropertyDescriptor(
											source,
											key
										)
									)
							  })
					}
					return target
				}
				const __WEBPACK_DEFAULT_EXPORT__ = {
					title: 'Common/Content Types/Video Comment Tick',
					component:
						_video_comment_tick__WEBPACK_IMPORTED_MODULE_2__.N,
					argTypes: {},
				}
				var Template = function Template(args) {
					return __jsx(
						_video_comment_tick__WEBPACK_IMPORTED_MODULE_2__.N,
						args
					)
				}
				Template.displayName = 'Template'
				var Sample = Template.bind({})
				;(Sample.args = { icon: 'a' }),
					(Sample.parameters = _objectSpread(
						_objectSpread({}, Sample.parameters),
						{},
						{
							docs: _objectSpread(
								_objectSpread(
									{},
									null ===
										(_Sample$parameters =
											Sample.parameters) ||
										void 0 === _Sample$parameters
										? void 0
										: _Sample$parameters.docs
								),
								{},
								{
									source: _objectSpread(
										{
											originalSource:
												'args => <VideoCommentTick {...args} />',
										},
										null ===
											(_Sample$parameters2 =
												Sample.parameters) ||
											void 0 === _Sample$parameters2 ||
											null ===
												(_Sample$parameters2$d =
													_Sample$parameters2.docs) ||
											void 0 === _Sample$parameters2$d
											? void 0
											: _Sample$parameters2$d.source
									),
								}
							),
						}
					))
			},
	},
])
