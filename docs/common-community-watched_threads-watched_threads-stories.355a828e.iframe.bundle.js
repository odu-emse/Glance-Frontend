;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[4780],
	{
		'./components/common/community/watched_threads/watched_threads.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, {
				U: () => WatchedSidebarList,
				Y: () => WatchedThreads,
			})
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/next/link.js'
				),
				next_link__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(
						next_link__WEBPACK_IMPORTED_MODULE_1__
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
							title
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
											'/threads/'
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
												30
											),
											'...'
									  )
									: thread.parentLesson.collection.module
											.moduleName
							)
						})
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
							title
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
														30
													),
													'...'
											  )
											: thread.title
									)
								)
							})
						)
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
		'./components/common/community/watched_threads/watched_threads.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict'
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
							'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
						),
					react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						'./node_modules/react/index.js'
					),
					_watched_threads__WEBPACK_IMPORTED_MODULE_2__ =
						__webpack_require__(
							'./components/common/community/watched_threads/watched_threads.tsx'
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
					title: 'Common/Community/WatchedThreads',
					component: _watched_threads__WEBPACK_IMPORTED_MODULE_2__.Y,
					argTypes: {},
				}
				var Template = function Template(args) {
					return __jsx(
						_watched_threads__WEBPACK_IMPORTED_MODULE_2__.Y,
						args
					)
				}
				Template.displayName = 'Template'
				var Default = Template.bind({})
				;(Default.args = {
					threads: [
						{
							module_name:
								'Is the sky purple or have I just been looking at my computer for too long?',
							module_id: 'moduleid1',
							thread_id: 'threadid1',
						},
						{
							module_name: 'What is the meaning of life?',
							module_id: 'moduleid2',
							thread_id: 'threadid4',
						},
						{
							module_name: 'Why did the engineer cross the road?',
							module_id: 'moduleid1',
							thread_id: 'threadid2',
						},
						{
							module_name: 'This is a test. Test test test',
							module_id: 'moduleid6',
							thread_id: 'threadid1',
						},
					],
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
										: _Default$parameters.docs
								),
								{},
								{
									source: _objectSpread(
										{
											originalSource:
												'(args: any) => <WatchedThreads {...args} />',
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
											: _Default$parameters2$.source
									),
								}
							),
						}
					))
			},
		'./node_modules/next/dist/client/get-domain-locale.js': (
			module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var process = __webpack_require__(
				'./node_modules/process/browser.js'
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getDomainLocale = function getDomainLocale(
					path,
					locale,
					locales,
					domainLocales
				) {
					if (process.env.__NEXT_I18N_SUPPORT) {
						const normalizeLocalePath = __webpack_require__(
								'./node_modules/next/dist/client/normalize-locale-path.js'
							).normalizeLocalePath,
							detectDomainLocale = __webpack_require__(
								'./node_modules/next/dist/client/detect-domain-locale.js'
							).detectDomainLocale,
							target =
								locale ||
								normalizeLocalePath(path, locales)
									.detectedLocale,
							domain = detectDomainLocale(
								domainLocales,
								void 0,
								target
							)
						if (domain) {
							const proto = `http${domain.http ? '' : 's'}://`,
								finalLocale =
									target === domain.defaultLocale
										? ''
										: `/${target}`
							return `${proto}${domain.domain}${basePath}${finalLocale}${path}`
						}
						return !1
					}
					return !1
				})
			const basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
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
		'./node_modules/next/dist/client/link.js': (
			module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = void 0)
			var _interop_require_default = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_default.js'
				).Z,
				_object_without_properties_loose = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_object_without_properties_loose.js'
				).Z,
				_react = _interop_require_default(
					__webpack_require__('./node_modules/react/index.js')
				),
				_router = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/router.js'
				),
				_addLocale = __webpack_require__(
					'./node_modules/next/dist/client/add-locale.js'
				),
				_routerContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router-context.js'
				),
				_appRouterContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/app-router-context.js'
				),
				_useIntersection = __webpack_require__(
					'./node_modules/next/dist/client/use-intersection.js'
				),
				_getDomainLocale = __webpack_require__(
					'./node_modules/next/dist/client/get-domain-locale.js'
				),
				_addBasePath = __webpack_require__(
					'./node_modules/next/dist/client/add-base-path.js'
				)
			const hasUseTransition = void 0 !== _react.default.useTransition,
				prefetched = {}
			function prefetch(router, href, as, options) {
				if ('undefined' == typeof window || !router) return
				if (!_router.isLocalURL(href)) return
				router.prefetch(href, as, options).catch((err) => {
					0
				})
				const curLocale =
					options && void 0 !== options.locale
						? options.locale
						: router && router.locale
				prefetched[
					href + '%' + as + (curLocale ? '%' + curLocale : '')
				] = !0
			}
			var _default = _react.default.forwardRef(function LinkComponent(
				props,
				forwardedRef
			) {
				let children
				const {
						href: hrefProp,
						as: asProp,
						children: childrenProp,
						prefetch: prefetchProp,
						passHref,
						replace,
						soft,
						shallow,
						scroll,
						locale,
						onClick,
						onMouseEnter,
						onTouchStart,
						legacyBehavior = !0 !== Boolean(void 0),
					} = props,
					restProps = _object_without_properties_loose(props, [
						'href',
						'as',
						'children',
						'prefetch',
						'passHref',
						'replace',
						'soft',
						'shallow',
						'scroll',
						'locale',
						'onClick',
						'onMouseEnter',
						'onTouchStart',
						'legacyBehavior',
					])
				;(children = childrenProp),
					!legacyBehavior ||
						('string' != typeof children &&
							'number' != typeof children) ||
						(children = _react.default.createElement(
							'a',
							null,
							children
						))
				const p = !1 !== prefetchProp,
					[, startTransition] = hasUseTransition
						? _react.default.useTransition()
						: []
				let router = _react.default.useContext(
					_routerContext.RouterContext
				)
				const appRouter = _react.default.useContext(
					_appRouterContext.AppRouterContext
				)
				appRouter && (router = appRouter)
				const { href, as } = _react.default.useMemo(() => {
						const [resolvedHref, resolvedAs] = _router.resolveHref(
							router,
							hrefProp,
							!0
						)
						return {
							href: resolvedHref,
							as: asProp
								? _router.resolveHref(router, asProp)
								: resolvedAs || resolvedHref,
						}
					}, [router, hrefProp, asProp]),
					previousHref = _react.default.useRef(href),
					previousAs = _react.default.useRef(as)
				let child
				legacyBehavior &&
					(child = _react.default.Children.only(children))
				const childRef = legacyBehavior
						? child && 'object' == typeof child && child.ref
						: forwardedRef,
					[setIntersectionRef, isVisible, resetVisible] =
						_useIntersection.useIntersection({
							rootMargin: '200px',
						}),
					setRef = _react.default.useCallback(
						(el) => {
							;(previousAs.current === as &&
								previousHref.current === href) ||
								(resetVisible(),
								(previousAs.current = as),
								(previousHref.current = href)),
								setIntersectionRef(el),
								childRef &&
									('function' == typeof childRef
										? childRef(el)
										: 'object' == typeof childRef &&
										  (childRef.current = el))
						},
						[as, childRef, href, resetVisible, setIntersectionRef]
					)
				_react.default.useEffect(() => {
					const shouldPrefetch =
							isVisible && p && _router.isLocalURL(href),
						curLocale =
							void 0 !== locale
								? locale
								: router && router.locale,
						isPrefetched =
							prefetched[
								href +
									'%' +
									as +
									(curLocale ? '%' + curLocale : '')
							]
					shouldPrefetch &&
						!isPrefetched &&
						prefetch(router, href, as, { locale: curLocale })
				}, [as, href, isVisible, locale, p, router])
				const childProps = {
					ref: setRef,
					onClick: (e) => {
						legacyBehavior ||
							'function' != typeof onClick ||
							onClick(e),
							legacyBehavior &&
								child.props &&
								'function' == typeof child.props.onClick &&
								child.props.onClick(e),
							e.defaultPrevented ||
								(function linkClicked(
									e,
									router,
									href,
									as,
									replace,
									soft,
									shallow,
									scroll,
									locale,
									startTransition
								) {
									const { nodeName } = e.currentTarget
									if (
										'A' === nodeName.toUpperCase() &&
										((function isModifiedEvent(event) {
											const { target } =
												event.currentTarget
											return (
												(target &&
													'_self' !== target) ||
												event.metaKey ||
												event.ctrlKey ||
												event.shiftKey ||
												event.altKey ||
												(event.nativeEvent &&
													2 ===
														event.nativeEvent.which)
											)
										})(e) ||
											!_router.isLocalURL(href))
									)
										return
									e.preventDefault()
									const navigate = () => {
										'softPush' in router &&
										'softReplace' in router
											? router[
													soft
														? replace
															? 'softReplace'
															: 'softPush'
														: replace
														? 'replace'
														: 'push'
											  ](href)
											: router[
													replace ? 'replace' : 'push'
											  ](href, as, {
													shallow,
													locale,
													scroll,
											  })
									}
									startTransition
										? startTransition(navigate)
										: navigate()
								})(
									e,
									router,
									href,
									as,
									replace,
									soft,
									shallow,
									scroll,
									locale,
									appRouter ? startTransition : void 0
								)
					},
					onMouseEnter: (e) => {
						legacyBehavior ||
							'function' != typeof onMouseEnter ||
							onMouseEnter(e),
							legacyBehavior &&
								child.props &&
								'function' == typeof child.props.onMouseEnter &&
								child.props.onMouseEnter(e),
							_router.isLocalURL(href) &&
								prefetch(router, href, as, { priority: !0 })
					},
					onTouchStart: (e) => {
						legacyBehavior ||
							'function' != typeof onTouchStart ||
							onTouchStart(e),
							legacyBehavior &&
								child.props &&
								'function' == typeof child.props.onTouchStart &&
								child.props.onTouchStart(e),
							_router.isLocalURL(href) &&
								prefetch(router, href, as, { priority: !0 })
					},
				}
				if (
					!legacyBehavior ||
					passHref ||
					('a' === child.type && !('href' in child.props))
				) {
					const curLocale =
							void 0 !== locale
								? locale
								: router && router.locale,
						localeDomain =
							router &&
							router.isLocaleDomain &&
							_getDomainLocale.getDomainLocale(
								as,
								curLocale,
								router.locales,
								router.domainLocales
							)
					childProps.href =
						localeDomain ||
						_addBasePath.addBasePath(
							_addLocale.addLocale(
								as,
								curLocale,
								router && router.defaultLocale
							)
						)
				}
				return legacyBehavior
					? _react.default.cloneElement(child, childProps)
					: _react.default.createElement(
							'a',
							Object.assign({}, restProps, childProps),
							children
					  )
			})
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
		'./node_modules/next/dist/client/normalize-locale-path.js': (
			module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var process = __webpack_require__(
				'./node_modules/process/browser.js'
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.normalizeLocalePath = void 0)
			;(exports.normalizeLocalePath = (pathname, locales) =>
				process.env.__NEXT_I18N_SUPPORT
					? __webpack_require__(
							'./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js'
					  ).normalizeLocalePath(pathname, locales)
					: { pathname, detectedLocale: void 0 }),
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
		'./node_modules/next/link.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			module.exports = __webpack_require__(
				'./node_modules/next/dist/client/link.js'
			)
		},
	},
])
