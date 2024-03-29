;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[6655],
	{
		'./node_modules/next/dist/client/get-domain-locale.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			'use strict'
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getDomainLocale = function getDomainLocale(
					path,
					locale,
					locales,
					domainLocales,
				) {
					if (process.env.__NEXT_I18N_SUPPORT) {
						const normalizeLocalePath = __webpack_require__(
								'./node_modules/next/dist/client/normalize-locale-path.js',
							).normalizeLocalePath,
							detectDomainLocale = __webpack_require__(
								'./node_modules/next/dist/client/detect-domain-locale.js',
							).detectDomainLocale,
							target =
								locale ||
								normalizeLocalePath(path, locales)
									.detectedLocale,
							domain = detectDomainLocale(
								domainLocales,
								void 0,
								target,
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
			__webpack_require__,
		) => {
			'use strict'
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = void 0)
			var _interop_require_default = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_default.js',
				).Z,
				_object_without_properties_loose = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_object_without_properties_loose.js',
				).Z,
				_react = _interop_require_default(
					__webpack_require__('./node_modules/react/index.js'),
				),
				_router = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/router.js',
				),
				_addLocale = __webpack_require__(
					'./node_modules/next/dist/client/add-locale.js',
				),
				_routerContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router-context.js',
				),
				_appRouterContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/app-router-context.js',
				),
				_useIntersection = __webpack_require__(
					'./node_modules/next/dist/client/use-intersection.js',
				),
				_getDomainLocale = __webpack_require__(
					'./node_modules/next/dist/client/get-domain-locale.js',
				),
				_addBasePath = __webpack_require__(
					'./node_modules/next/dist/client/add-base-path.js',
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
			var _default = _react.default.forwardRef(
				function LinkComponent(props, forwardedRef) {
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
								children,
							))
					const p = !1 !== prefetchProp,
						[, startTransition] = hasUseTransition
							? _react.default.useTransition()
							: []
					let router = _react.default.useContext(
						_routerContext.RouterContext,
					)
					const appRouter = _react.default.useContext(
						_appRouterContext.AppRouterContext,
					)
					appRouter && (router = appRouter)
					const { href, as } = _react.default.useMemo(() => {
							const [resolvedHref, resolvedAs] =
								_router.resolveHref(router, hrefProp, !0)
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
							[
								as,
								childRef,
								href,
								resetVisible,
								setIntersectionRef,
							],
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
										startTransition,
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
															event.nativeEvent
																.which)
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
														replace
															? 'replace'
															: 'push'
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
										appRouter ? startTransition : void 0,
									)
						},
						onMouseEnter: (e) => {
							legacyBehavior ||
								'function' != typeof onMouseEnter ||
								onMouseEnter(e),
								legacyBehavior &&
									child.props &&
									'function' ==
										typeof child.props.onMouseEnter &&
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
									'function' ==
										typeof child.props.onTouchStart &&
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
									router.domainLocales,
								)
						childProps.href =
							localeDomain ||
							_addBasePath.addBasePath(
								_addLocale.addLocale(
									as,
									curLocale,
									router && router.defaultLocale,
								),
							)
					}
					return legacyBehavior
						? _react.default.cloneElement(child, childProps)
						: _react.default.createElement(
								'a',
								Object.assign({}, restProps, childProps),
								children,
						  )
				},
			)
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
			__webpack_require__,
		) => {
			'use strict'
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.normalizeLocalePath = void 0)
			;(exports.normalizeLocalePath = (pathname, locales) =>
				process.env.__NEXT_I18N_SUPPORT
					? __webpack_require__(
							'./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js',
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
			__webpack_require__,
		) => {
			module.exports = __webpack_require__(
				'./node_modules/next/dist/client/link.js',
			)
		},
		'./node_modules/react-icons/io/index.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, {
				hjJ: () => IoIosArrowForward,
				u1R: () => IoIosArrowBack,
			})
			var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./node_modules/react-icons/lib/esm/index.js',
			)
			function IoIosArrowBack(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { viewBox: '0 0 512 512' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z',
							},
						},
					],
				})(props)
			}
			function IoIosArrowForward(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { viewBox: '0 0 512 512' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z',
							},
						},
					],
				})(props)
			}
		},
		'./node_modules/react-icons/lib/esm/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
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
