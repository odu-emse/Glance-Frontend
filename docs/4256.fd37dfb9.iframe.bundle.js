'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[4256],
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
		'./node_modules/next/dist/client/add-base-path.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.addBasePath = function addBasePath(path, required) {
					if (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required)
						return path
					return _normalizeTrailingSlash.normalizePathTrailingSlash(
						_addPathPrefix.addPathPrefix(path, basePath),
					)
				})
			var _addPathPrefix = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js',
				),
				_normalizeTrailingSlash = __webpack_require__(
					'./node_modules/next/dist/client/normalize-trailing-slash.js',
				)
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
		'./node_modules/next/dist/client/add-locale.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.addLocale = void 0)
			var _normalizeTrailingSlash = __webpack_require__(
				'./node_modules/next/dist/client/normalize-trailing-slash.js',
			)
			;(exports.addLocale = (path, ...args) =>
				process.env.__NEXT_I18N_SUPPORT
					? _normalizeTrailingSlash.normalizePathTrailingSlash(
							__webpack_require__(
								'./node_modules/next/dist/shared/lib/router/utils/add-locale.js',
							).addLocale(path, ...args),
					  )
					: path),
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
		'./node_modules/next/dist/client/detect-domain-locale.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.detectDomainLocale = void 0)
			;(exports.detectDomainLocale = (...args) => {
				if (process.env.__NEXT_I18N_SUPPORT)
					return __webpack_require__(
						'./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js',
					).D(...args)
			}),
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
		'./node_modules/next/dist/client/has-base-path.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.hasBasePath = function hasBasePath(path) {
					return _pathHasPrefix.pathHasPrefix(path, basePath)
				})
			var _pathHasPrefix = __webpack_require__(
				'./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js',
			)
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
		'./node_modules/next/dist/client/remove-base-path.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.removeBasePath = function removeBasePath(path) {
					if (
						process.env.__NEXT_MANUAL_CLIENT_BASE_PATH &&
						!_hasBasePath.hasBasePath(path)
					)
						return path
					;(path = path.slice(basePath.length)).startsWith('/') ||
						(path = `/${path}`)
					return path
				})
			var _hasBasePath = __webpack_require__(
				'./node_modules/next/dist/client/has-base-path.js',
			)
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
		'./node_modules/next/dist/client/remove-locale.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.removeLocale = function removeLocale(path, locale) {
					if (process.env.__NEXT_I18N_SUPPORT) {
						const { pathname } = _parsePath.parsePath(path),
							pathLower = pathname.toLowerCase(),
							localeLower =
								null == locale ? void 0 : locale.toLowerCase()
						return locale &&
							(pathLower.startsWith(`/${localeLower}/`) ||
								pathLower === `/${localeLower}`)
							? `${
									pathname.length === locale.length + 1
										? '/'
										: ''
							  }${path.slice(locale.length + 1)}`
							: path
					}
					return path
				})
			var _parsePath = __webpack_require__(
				'./node_modules/next/dist/shared/lib/router/utils/parse-path.js',
			)
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
		'./node_modules/next/dist/client/route-loader.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.markAssetError = markAssetError),
				(exports.isAssetError = function isAssetError(err) {
					return err && ASSET_LOAD_ERROR in err
				}),
				(exports.getClientBuildManifest = getClientBuildManifest),
				(exports.createRouteLoader = function createRouteLoader(
					assetPrefix,
				) {
					const entrypoints = new Map(),
						loadedScripts = new Map(),
						styleSheets = new Map(),
						routes = new Map()
					function maybeExecuteScript(src) {
						{
							let prom = loadedScripts.get(src.toString())
							return (
								prom ||
								(document.querySelector(`script[src^="${src}"]`)
									? Promise.resolve()
									: (loadedScripts.set(
											src.toString(),
											(prom = (function appendScript(
												src,
												script,
											) {
												return new Promise(
													(resolve, reject) => {
														;((script =
															document.createElement(
																'script',
															)).onload =
															resolve),
															(script.onerror =
																() =>
																	reject(
																		markAssetError(
																			new Error(
																				`Failed to load script: ${src}`,
																			),
																		),
																	)),
															(script.crossOrigin =
																process.env.__NEXT_CROSS_ORIGIN),
															(script.src = src),
															document.body.appendChild(
																script,
															)
													},
												)
											})(src)),
									  ),
									  prom))
							)
						}
					}
					function fetchStyleSheet(href) {
						let prom = styleSheets.get(href)
						return (
							prom ||
							(styleSheets.set(
								href,
								(prom = fetch(href)
									.then((res) => {
										if (!res.ok)
											throw new Error(
												`Failed to load stylesheet: ${href}`,
											)
										return res.text().then((text) => ({
											href,
											content: text,
										}))
									})
									.catch((err) => {
										throw markAssetError(err)
									})),
							),
							prom)
						)
					}
					return {
						whenEntrypoint: (route) =>
							withFuture(route, entrypoints),
						onEntrypoint(route, execute) {
							;(execute
								? Promise.resolve()
										.then(() => execute())
										.then(
											(exports) => ({
												component:
													(exports &&
														exports.default) ||
													exports,
												exports,
											}),
											(err) => ({ error: err }),
										)
								: Promise.resolve(void 0)
							).then((input) => {
								const old = entrypoints.get(route)
								old && 'resolve' in old
									? input &&
									  (entrypoints.set(route, input),
									  old.resolve(input))
									: (input
											? entrypoints.set(route, input)
											: entrypoints.delete(route),
									  routes.delete(route))
							})
						},
						loadRoute(route, prefetch) {
							return withFuture(route, routes, () =>
								resolvePromiseWithTimeout(
									getFilesForRoute(assetPrefix, route)
										.then(({ scripts, css }) =>
											Promise.all([
												entrypoints.has(route)
													? []
													: Promise.all(
															scripts.map(
																maybeExecuteScript,
															),
													  ),
												Promise.all(
													css.map(fetchStyleSheet),
												),
											]),
										)
										.then((res) =>
											this.whenEntrypoint(route).then(
												(entrypoint) => ({
													entrypoint,
													styles: res[1],
												}),
											),
										),
									MS_MAX_IDLE_DELAY,
									markAssetError(
										new Error(
											`Route did not complete loading: ${route}`,
										),
									),
								)
									.then(({ entrypoint, styles }) => {
										const res = Object.assign(
											{ styles },
											entrypoint,
										)
										return 'error' in entrypoint
											? entrypoint
											: res
									})
									.catch((err) => {
										if (prefetch) throw err
										return { error: err }
									})
									.finally(() => {}),
							)
						},
						prefetch(route) {
							let cn
							return (cn = navigator.connection) &&
								(cn.saveData || /2g/.test(cn.effectiveType))
								? Promise.resolve()
								: getFilesForRoute(assetPrefix, route)
										.then((output) =>
											Promise.all(
												canPrefetch
													? output.scripts.map(
															(script) =>
																(function prefetchViaDom(
																	href,
																	as,
																	link,
																) {
																	return new Promise(
																		(
																			res,
																			rej,
																		) => {
																			const selector = `\n      link[rel="prefetch"][href^="${href}"],\n      link[rel="preload"][href^="${href}"],\n      script[src^="${href}"]`
																			if (
																				document.querySelector(
																					selector,
																				)
																			)
																				return res()
																			;(link =
																				document.createElement(
																					'link',
																				)),
																				as &&
																					(link.as =
																						as),
																				(link.rel =
																					'prefetch'),
																				(link.crossOrigin =
																					process.env.__NEXT_CROSS_ORIGIN),
																				(link.onload =
																					res),
																				(link.onerror =
																					rej),
																				(link.href =
																					href),
																				document.head.appendChild(
																					link,
																				)
																		},
																	)
																})(
																	script.toString(),
																	'script',
																),
													  )
													: [],
											),
										)
										.then(() => {
											_requestIdleCallback.requestIdleCallback(
												() =>
													this.loadRoute(
														route,
														!0,
													).catch(() => {}),
											)
										})
										.catch(() => {})
						},
					}
				})
			;(0,
			__webpack_require__(
				'./node_modules/@swc/helpers/lib/_interop_require_default.js',
			).Z)(
				__webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js',
				),
			)
			var _trustedTypes = __webpack_require__(
					'./node_modules/next/dist/client/trusted-types.js',
				),
				_requestIdleCallback = __webpack_require__(
					'./node_modules/next/dist/client/request-idle-callback.js',
				)
			const MS_MAX_IDLE_DELAY = 3800
			function withFuture(key, map, generator) {
				let resolver,
					entry = map.get(key)
				if (entry)
					return 'future' in entry
						? entry.future
						: Promise.resolve(entry)
				const prom = new Promise((resolve) => {
					resolver = resolve
				})
				return (
					map.set(key, (entry = { resolve: resolver, future: prom })),
					generator
						? generator()
								.then((value) => (resolver(value), value))
								.catch((err) => {
									throw (map.delete(key), err)
								})
						: prom
				)
			}
			const canPrefetch = (function hasPrefetch(link) {
				try {
					return (
						(link = document.createElement('link')),
						(!!window.MSInputMethodContext &&
							!!document.documentMode) ||
							link.relList.supports('prefetch')
					)
				} catch (e) {
					return !1
				}
			})()
			const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR')
			function markAssetError(err) {
				return Object.defineProperty(err, ASSET_LOAD_ERROR, {})
			}
			function resolvePromiseWithTimeout(p, ms, err) {
				return new Promise((resolve, reject) => {
					let cancelled = !1
					p
						.then((r) => {
							;(cancelled = !0), resolve(r)
						})
						.catch(reject),
						_requestIdleCallback.requestIdleCallback(() =>
							setTimeout(() => {
								cancelled || reject(err)
							}, ms),
						)
				})
			}
			function getClientBuildManifest() {
				if (self.__BUILD_MANIFEST)
					return Promise.resolve(self.__BUILD_MANIFEST)
				return resolvePromiseWithTimeout(
					new Promise((resolve) => {
						const cb = self.__BUILD_MANIFEST_CB
						self.__BUILD_MANIFEST_CB = () => {
							resolve(self.__BUILD_MANIFEST), cb && cb()
						}
					}),
					MS_MAX_IDLE_DELAY,
					markAssetError(
						new Error('Failed to load client build manifest'),
					),
				)
			}
			function getFilesForRoute(assetPrefix, route) {
				return getClientBuildManifest().then((manifest) => {
					if (!(route in manifest))
						throw markAssetError(
							new Error(`Failed to lookup route: ${route}`),
						)
					const allFiles = manifest[route].map(
						(entry) => assetPrefix + '/_next/' + encodeURI(entry),
					)
					return {
						scripts: allFiles
							.filter((v) => v.endsWith('.js'))
							.map((v) =>
								_trustedTypes.__unsafeCreateTrustedScriptURL(v),
							),
						css: allFiles.filter((v) => v.endsWith('.css')),
					}
				})
			}
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
		'./node_modules/next/dist/client/script.js': (
			module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.handleClientScriptLoad = handleClientScriptLoad),
				(exports.initScriptLoader = function initScriptLoader(
					scriptLoaderItems,
				) {
					scriptLoaderItems.forEach(handleClientScriptLoad),
						(function addBeforeInteractiveToCache() {
							;[
								...document.querySelectorAll(
									'[data-nscript="beforeInteractive"]',
								),
								...document.querySelectorAll(
									'[data-nscript="beforePageRender"]',
								),
							].forEach((script) => {
								const cacheKey =
									script.id || script.getAttribute('src')
								LoadCache.add(cacheKey)
							})
						})()
				}),
				(exports.default = void 0)
			var _extends = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_extends.js',
				).Z,
				_interop_require_wildcard = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_wildcard.js',
				).Z,
				_object_without_properties_loose = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_object_without_properties_loose.js',
				).Z,
				_react = _interop_require_wildcard(
					__webpack_require__('./node_modules/react/index.js'),
				),
				_headManagerContext = __webpack_require__(
					'./node_modules/next/dist/shared/lib/head-manager-context.js',
				),
				_headManager = __webpack_require__(
					'./node_modules/next/dist/client/head-manager.js',
				),
				_requestIdleCallback = __webpack_require__(
					'./node_modules/next/dist/client/request-idle-callback.js',
				)
			const ScriptCache = new Map(),
				LoadCache = new Set(),
				ignoreProps = [
					'onLoad',
					'onReady',
					'dangerouslySetInnerHTML',
					'children',
					'onError',
					'strategy',
				],
				loadScript = (props) => {
					const {
							src,
							id,
							onLoad = () => {},
							onReady = null,
							dangerouslySetInnerHTML,
							children = '',
							strategy = 'afterInteractive',
							onError,
						} = props,
						cacheKey = id || src
					if (cacheKey && LoadCache.has(cacheKey)) return
					if (ScriptCache.has(src))
						return (
							LoadCache.add(cacheKey),
							void ScriptCache.get(src).then(onLoad, onError)
						)
					const el = document.createElement('script'),
						loadPromise = new Promise((resolve, reject) => {
							el.addEventListener('load', function (e) {
								resolve(),
									onLoad && onLoad.call(this, e),
									onReady && onReady()
							}),
								el.addEventListener('error', function (e) {
									reject(e)
								})
						}).catch(function (e) {
							onError && onError(e)
						})
					src && ScriptCache.set(src, loadPromise),
						LoadCache.add(cacheKey),
						dangerouslySetInnerHTML
							? (el.innerHTML =
									dangerouslySetInnerHTML.__html || '')
							: children
							? (el.textContent =
									'string' == typeof children
										? children
										: Array.isArray(children)
										? children.join('')
										: '')
							: src && (el.src = src)
					for (const [k, value] of Object.entries(props)) {
						if (void 0 === value || ignoreProps.includes(k))
							continue
						const attr =
							_headManager.DOMAttributeNames[k] || k.toLowerCase()
						el.setAttribute(attr, value)
					}
					'worker' === strategy &&
						el.setAttribute('type', 'text/partytown'),
						el.setAttribute('data-nscript', strategy),
						document.body.appendChild(el)
				}
			function handleClientScriptLoad(props) {
				const { strategy = 'afterInteractive' } = props
				'lazyOnload' === strategy
					? window.addEventListener('load', () => {
							_requestIdleCallback.requestIdleCallback(() =>
								loadScript(props),
							)
					  })
					: loadScript(props)
			}
			var _default = function Script(props) {
				const {
						id,
						src = '',
						onLoad = () => {},
						onReady = null,
						strategy = 'afterInteractive',
						onError,
					} = props,
					restProps = _object_without_properties_loose(props, [
						'id',
						'src',
						'onLoad',
						'onReady',
						'strategy',
						'onError',
					]),
					{ updateScripts, scripts, getIsSsr } = _react.useContext(
						_headManagerContext.HeadManagerContext,
					)
				return (
					_react.useEffect(() => {
						const cacheKey = id || src
						onReady &&
							cacheKey &&
							LoadCache.has(cacheKey) &&
							onReady()
					}, [onReady, id, src]),
					_react.useEffect(() => {
						'afterInteractive' === strategy
							? loadScript(props)
							: 'lazyOnload' === strategy &&
							  (function loadLazyScript(props) {
									'complete' === document.readyState
										? _requestIdleCallback.requestIdleCallback(
												() => loadScript(props),
										  )
										: window.addEventListener(
												'load',
												() => {
													_requestIdleCallback.requestIdleCallback(
														() => loadScript(props),
													)
												},
										  )
							  })(props)
					}, [props, strategy]),
					('beforeInteractive' !== strategy &&
						'worker' !== strategy) ||
						(updateScripts
							? ((scripts[strategy] = (
									scripts[strategy] || []
							  ).concat([
									_extends(
										{ id, src, onLoad, onReady, onError },
										restProps,
									),
							  ])),
							  updateScripts(scripts))
							: getIsSsr && getIsSsr()
							? LoadCache.add(id || src)
							: getIsSsr && !getIsSsr() && loadScript(props)),
					null
				)
			}
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
		'./node_modules/next/dist/client/trusted-types.js': (
			module,
			exports,
		) => {
			let policy
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.__unsafeCreateTrustedScriptURL =
					function __unsafeCreateTrustedScriptURL(url) {
						var ref
						return (
							(null ==
							(ref = (function getPolicy() {
								var ref
								void 0 === policy &&
									'undefined' != typeof window &&
									(policy =
										(null == (ref = window.trustedTypes)
											? void 0
											: ref.createPolicy('nextjs', {
													createHTML: (input) =>
														input,
													createScript: (input) =>
														input,
													createScriptURL: (input) =>
														input,
											  })) || null)
								return policy
							})())
								? void 0
								: ref.createScriptURL(url)) || url
						)
					}),
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
		'./node_modules/next/dist/compiled/path-to-regexp/index.js': (
			__unused_webpack_module,
			exports,
		) => {
			function parse(str, options) {
				void 0 === options && (options = {})
				for (
					var tokens = (function lexer(str) {
							for (var tokens = [], i = 0; i < str.length; ) {
								var char = str[i]
								if (
									'*' !== char &&
									'+' !== char &&
									'?' !== char
								)
									if ('\\' !== char)
										if ('{' !== char)
											if ('}' !== char)
												if (':' !== char)
													if ('(' !== char)
														tokens.push({
															type: 'CHAR',
															index: i,
															value: str[i++],
														})
													else {
														var count = 1,
															pattern = ''
														if (
															'?' ===
															str[(j = i + 1)]
														)
															throw new TypeError(
																'Pattern cannot start with "?" at ' +
																	j,
															)
														for (; j < str.length; )
															if (
																'\\' !== str[j]
															) {
																if (
																	')' ===
																	str[j]
																) {
																	if (
																		0 ==
																		--count
																	) {
																		j++
																		break
																	}
																} else if (
																	'(' ===
																		str[
																			j
																		] &&
																	(count++,
																	'?' !==
																		str[
																			j +
																				1
																		])
																)
																	throw new TypeError(
																		'Capturing groups are not allowed at ' +
																			j,
																	)
																pattern +=
																	str[j++]
															} else
																pattern +=
																	str[j++] +
																	str[j++]
														if (count)
															throw new TypeError(
																'Unbalanced pattern at ' +
																	i,
															)
														if (!pattern)
															throw new TypeError(
																'Missing pattern at ' +
																	i,
															)
														tokens.push({
															type: 'PATTERN',
															index: i,
															value: pattern,
														}),
															(i = j)
													}
												else {
													for (
														var name = '',
															j = i + 1;
														j < str.length;

													) {
														var code =
															str.charCodeAt(j)
														if (
															!(
																(code >= 48 &&
																	code <=
																		57) ||
																(code >= 65 &&
																	code <=
																		90) ||
																(code >= 97 &&
																	code <=
																		122) ||
																95 === code
															)
														)
															break
														name += str[j++]
													}
													if (!name)
														throw new TypeError(
															'Missing parameter name at ' +
																i,
														)
													tokens.push({
														type: 'NAME',
														index: i,
														value: name,
													}),
														(i = j)
												}
											else
												tokens.push({
													type: 'CLOSE',
													index: i,
													value: str[i++],
												})
										else
											tokens.push({
												type: 'OPEN',
												index: i,
												value: str[i++],
											})
									else
										tokens.push({
											type: 'ESCAPED_CHAR',
											index: i++,
											value: str[i++],
										})
								else
									tokens.push({
										type: 'MODIFIER',
										index: i,
										value: str[i++],
									})
							}
							return (
								tokens.push({
									type: 'END',
									index: i,
									value: '',
								}),
								tokens
							)
						})(str),
						_a = options.prefixes,
						prefixes = void 0 === _a ? './' : _a,
						defaultPattern =
							'[^' +
							escapeString(options.delimiter || '/#?') +
							']+?',
						result = [],
						key = 0,
						i = 0,
						path = '',
						tryConsume = function (type) {
							if (i < tokens.length && tokens[i].type === type)
								return tokens[i++].value
						},
						mustConsume = function (type) {
							var value = tryConsume(type)
							if (void 0 !== value) return value
							var _a = tokens[i],
								nextType = _a.type,
								index = _a.index
							throw new TypeError(
								'Unexpected ' +
									nextType +
									' at ' +
									index +
									', expected ' +
									type,
							)
						},
						consumeText = function () {
							for (
								var value, result = '';
								(value =
									tryConsume('CHAR') ||
									tryConsume('ESCAPED_CHAR'));

							)
								result += value
							return result
						};
					i < tokens.length;

				) {
					var char = tryConsume('CHAR'),
						name = tryConsume('NAME'),
						pattern = tryConsume('PATTERN')
					if (name || pattern) {
						var prefix = char || ''
						;-1 === prefixes.indexOf(prefix) &&
							((path += prefix), (prefix = '')),
							path && (result.push(path), (path = '')),
							result.push({
								name: name || key++,
								prefix,
								suffix: '',
								pattern: pattern || defaultPattern,
								modifier: tryConsume('MODIFIER') || '',
							})
					} else {
						var value = char || tryConsume('ESCAPED_CHAR')
						if (value) path += value
						else if (
							(path && (result.push(path), (path = '')),
							tryConsume('OPEN'))
						) {
							prefix = consumeText()
							var name_1 = tryConsume('NAME') || '',
								pattern_1 = tryConsume('PATTERN') || '',
								suffix = consumeText()
							mustConsume('CLOSE'),
								result.push({
									name: name_1 || (pattern_1 ? key++ : ''),
									pattern:
										name_1 && !pattern_1
											? defaultPattern
											: pattern_1,
									prefix,
									suffix,
									modifier: tryConsume('MODIFIER') || '',
								})
						} else mustConsume('END')
					}
				}
				return result
			}
			function tokensToFunction(tokens, options) {
				void 0 === options && (options = {})
				var reFlags = flags(options),
					_a = options.encode,
					encode =
						void 0 === _a
							? function (x) {
									return x
							  }
							: _a,
					_b = options.validate,
					validate = void 0 === _b || _b,
					matches = tokens.map(function (token) {
						if ('object' == typeof token)
							return new RegExp(
								'^(?:' + token.pattern + ')$',
								reFlags,
							)
					})
				return function (data) {
					for (var path = '', i = 0; i < tokens.length; i++) {
						var token = tokens[i]
						if ('string' != typeof token) {
							var value = data ? data[token.name] : void 0,
								optional =
									'?' === token.modifier ||
									'*' === token.modifier,
								repeat =
									'*' === token.modifier ||
									'+' === token.modifier
							if (Array.isArray(value)) {
								if (!repeat)
									throw new TypeError(
										'Expected "' +
											token.name +
											'" to not repeat, but got an array',
									)
								if (0 === value.length) {
									if (optional) continue
									throw new TypeError(
										'Expected "' +
											token.name +
											'" to not be empty',
									)
								}
								for (var j = 0; j < value.length; j++) {
									var segment = encode(value[j], token)
									if (validate && !matches[i].test(segment))
										throw new TypeError(
											'Expected all "' +
												token.name +
												'" to match "' +
												token.pattern +
												'", but got "' +
												segment +
												'"',
										)
									path +=
										token.prefix + segment + token.suffix
								}
							} else if (
								'string' != typeof value &&
								'number' != typeof value
							) {
								if (!optional) {
									var typeOfMessage = repeat
										? 'an array'
										: 'a string'
									throw new TypeError(
										'Expected "' +
											token.name +
											'" to be ' +
											typeOfMessage,
									)
								}
							} else {
								segment = encode(String(value), token)
								if (validate && !matches[i].test(segment))
									throw new TypeError(
										'Expected "' +
											token.name +
											'" to match "' +
											token.pattern +
											'", but got "' +
											segment +
											'"',
									)
								path += token.prefix + segment + token.suffix
							}
						} else path += token
					}
					return path
				}
			}
			function regexpToFunction(re, keys, options) {
				void 0 === options && (options = {})
				var _a = options.decode,
					decode =
						void 0 === _a
							? function (x) {
									return x
							  }
							: _a
				return function (pathname) {
					var m = re.exec(pathname)
					if (!m) return !1
					for (
						var path = m[0],
							index = m.index,
							params = Object.create(null),
							_loop_1 = function (i) {
								if (void 0 === m[i]) return 'continue'
								var key = keys[i - 1]
								'*' === key.modifier || '+' === key.modifier
									? (params[key.name] = m[i]
											.split(key.prefix + key.suffix)
											.map(function (value) {
												return decode(value, key)
											}))
									: (params[key.name] = decode(m[i], key))
							},
							i = 1;
						i < m.length;
						i++
					)
						_loop_1(i)
					return { path, index, params }
				}
			}
			function escapeString(str) {
				return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
			}
			function flags(options) {
				return options && options.sensitive ? '' : 'i'
			}
			function tokensToRegexp(tokens, keys, options) {
				void 0 === options && (options = {})
				for (
					var _a = options.strict,
						strict = void 0 !== _a && _a,
						_b = options.start,
						start = void 0 === _b || _b,
						_c = options.end,
						end = void 0 === _c || _c,
						_d = options.encode,
						encode =
							void 0 === _d
								? function (x) {
										return x
								  }
								: _d,
						endsWith =
							'[' + escapeString(options.endsWith || '') + ']|$',
						delimiter =
							'[' +
							escapeString(options.delimiter || '/#?') +
							']',
						route = start ? '^' : '',
						_i = 0,
						tokens_1 = tokens;
					_i < tokens_1.length;
					_i++
				) {
					var token = tokens_1[_i]
					if ('string' == typeof token)
						route += escapeString(encode(token))
					else {
						var prefix = escapeString(encode(token.prefix)),
							suffix = escapeString(encode(token.suffix))
						if (token.pattern)
							if ((keys && keys.push(token), prefix || suffix))
								if (
									'+' === token.modifier ||
									'*' === token.modifier
								) {
									var mod = '*' === token.modifier ? '?' : ''
									route +=
										'(?:' +
										prefix +
										'((?:' +
										token.pattern +
										')(?:' +
										suffix +
										prefix +
										'(?:' +
										token.pattern +
										'))*)' +
										suffix +
										')' +
										mod
								} else
									route +=
										'(?:' +
										prefix +
										'(' +
										token.pattern +
										')' +
										suffix +
										')' +
										token.modifier
							else
								route +=
									'(' + token.pattern + ')' + token.modifier
						else
							route +=
								'(?:' + prefix + suffix + ')' + token.modifier
					}
				}
				if (end)
					strict || (route += delimiter + '?'),
						(route += options.endsWith
							? '(?=' + endsWith + ')'
							: '$')
				else {
					var endToken = tokens[tokens.length - 1],
						isEndDelimited =
							'string' == typeof endToken
								? delimiter.indexOf(
										endToken[endToken.length - 1],
								  ) > -1
								: void 0 === endToken
					strict ||
						(route += '(?:' + delimiter + '(?=' + endsWith + '))?'),
						isEndDelimited ||
							(route += '(?=' + delimiter + '|' + endsWith + ')')
				}
				return new RegExp(route, flags(options))
			}
			function pathToRegexp(path, keys, options) {
				return path instanceof RegExp
					? (function regexpToRegexp(path, keys) {
							if (!keys) return path
							var groups = path.source.match(/\((?!\?)/g)
							if (groups)
								for (var i = 0; i < groups.length; i++)
									keys.push({
										name: i,
										prefix: '',
										suffix: '',
										modifier: '',
										pattern: '',
									})
							return path
					  })(path, keys)
					: Array.isArray(path)
					? (function arrayToRegexp(paths, keys, options) {
							var parts = paths.map(function (path) {
								return pathToRegexp(path, keys, options).source
							})
							return new RegExp(
								'(?:' + parts.join('|') + ')',
								flags(options),
							)
					  })(path, keys, options)
					: (function stringToRegexp(path, keys, options) {
							return tokensToRegexp(
								parse(path, options),
								keys,
								options,
							)
					  })(path, keys, options)
			}
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.parse = parse),
				(exports.compile = function compile(str, options) {
					return tokensToFunction(parse(str, options), options)
				}),
				(exports.tokensToFunction = tokensToFunction),
				(exports.match = function match(str, options) {
					var keys = []
					return regexpToFunction(
						pathToRegexp(str, keys, options),
						keys,
						options,
					)
				}),
				(exports.regexpToFunction = regexpToFunction),
				(exports.tokensToRegexp = tokensToRegexp),
				(exports.pathToRegexp = pathToRegexp)
		},
		'./node_modules/next/dist/lib/is-error.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = isError),
				(exports.getProperError = function getProperError(err) {
					if (isError(err)) return err
					0
					return new Error(
						_isPlainObject.isPlainObject(err)
							? JSON.stringify(err)
							: err + '',
					)
				})
			var _isPlainObject = __webpack_require__(
				'./node_modules/next/dist/shared/lib/is-plain-object.js',
			)
			function isError(err) {
				return (
					'object' == typeof err &&
					null !== err &&
					'name' in err &&
					'message' in err
				)
			}
		},
		'./node_modules/next/dist/shared/lib/escape-regexp.js': (
			__unused_webpack_module,
			exports,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.escapeStringRegexp = function escapeStringRegexp(str) {
					if (reHasRegExp.test(str))
						return str.replace(reReplaceRegExp, '\\$&')
					return str
				})
			const reHasRegExp = /[|\\{}()[\]^$+*?.-]/,
				reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g
		},
		'./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js': (
			__unused_webpack_module,
			exports,
		) => {
			exports.D = function detectDomainLocale(
				domainItems,
				hostname,
				detectedLocale,
			) {
				let domainItem
				if (domainItems) {
					detectedLocale &&
						(detectedLocale = detectedLocale.toLowerCase())
					for (const item of domainItems) {
						var ref, ref1
						if (
							hostname ===
								(null == (ref = item.domain)
									? void 0
									: ref.split(':')[0].toLowerCase()) ||
							detectedLocale ===
								item.defaultLocale.toLowerCase() ||
							(null == (ref1 = item.locales)
								? void 0
								: ref1.some(
										(locale) =>
											locale.toLowerCase() ===
											detectedLocale,
								  ))
						) {
							domainItem = item
							break
						}
					}
				}
				return domainItem
			}
		},
		'./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js': (
			__unused_webpack_module,
			exports,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.normalizeLocalePath = function normalizeLocalePath(
					pathname,
					locales,
				) {
					let detectedLocale
					const pathnameParts = pathname.split('/')
					return (
						(locales || []).some(
							(locale) =>
								!(
									!pathnameParts[1] ||
									pathnameParts[1].toLowerCase() !==
										locale.toLowerCase()
								) &&
								((detectedLocale = locale),
								pathnameParts.splice(1, 1),
								(pathname = pathnameParts.join('/') || '/'),
								!0),
						),
						{ pathname, detectedLocale }
					)
				})
		},
		'./node_modules/next/dist/shared/lib/is-plain-object.js': (
			__unused_webpack_module,
			exports,
		) => {
			function getObjectClassLabel(value) {
				return Object.prototype.toString.call(value)
			}
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getObjectClassLabel = getObjectClassLabel),
				(exports.isPlainObject = function isPlainObject(value) {
					if ('[object Object]' !== getObjectClassLabel(value))
						return !1
					const prototype = Object.getPrototypeOf(value)
					return (
						null === prototype ||
						prototype.hasOwnProperty('isPrototypeOf')
					)
				})
		},
		'./node_modules/next/dist/shared/lib/mitt.js': (
			__unused_webpack_module,
			exports,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = function mitt() {
					const all = Object.create(null)
					return {
						on(type, handler) {
							;(all[type] || (all[type] = [])).push(handler)
						},
						off(type, handler) {
							all[type] &&
								all[type].splice(
									all[type].indexOf(handler) >>> 0,
									1,
								)
						},
						emit(type, ...evts) {
							;(all[type] || []).slice().map((handler) => {
								handler(...evts)
							})
						},
					}
				})
		},
		'./node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js':
			(__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.denormalizePagePath = function denormalizePagePath(
						page,
					) {
						let _page = _normalizePathSep.normalizePathSep(page)
						return _page.startsWith('/index/') &&
							!_utils.isDynamicRoute(_page)
							? _page.slice(6)
							: '/index' !== _page
							? _page
							: '/'
					})
				var _utils = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/index.js',
					),
					_normalizePathSep = __webpack_require__(
						'./node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js',
					)
			},
		'./node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js': (
			__unused_webpack_module,
			exports,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.normalizePathSep = function normalizePathSep(path) {
					return path.replace(/\\/g, '/')
				})
		},
		'./node_modules/next/dist/shared/lib/router/router.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			var process = __webpack_require__(
				'./node_modules/process/browser.js',
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.isLocalURL = isLocalURL),
				(exports.interpolateAs = interpolateAs),
				(exports.resolveHref = resolveHref),
				(exports.createKey = createKey),
				(exports.default = void 0)
			var _async_to_generator = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_async_to_generator.js',
				).Z,
				_extends = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_extends.js',
				).Z,
				_interop_require_default = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_default.js',
				).Z,
				_interop_require_wildcard = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_interop_require_wildcard.js',
				).Z,
				_normalizeTrailingSlash = __webpack_require__(
					'./node_modules/next/dist/client/normalize-trailing-slash.js',
				),
				_removeTrailingSlash = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js',
				),
				_routeLoader = __webpack_require__(
					'./node_modules/next/dist/client/route-loader.js',
				),
				_script = __webpack_require__(
					'./node_modules/next/dist/client/script.js',
				),
				_isError = _interop_require_wildcard(
					__webpack_require__(
						'./node_modules/next/dist/lib/is-error.js',
					),
				),
				_denormalizePagePath = __webpack_require__(
					'./node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js',
				),
				_normalizeLocalePath = __webpack_require__(
					'./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js',
				),
				_mitt = _interop_require_default(
					__webpack_require__(
						'./node_modules/next/dist/shared/lib/mitt.js',
					),
				),
				_utils = __webpack_require__(
					'./node_modules/next/dist/shared/lib/utils.js',
				),
				_isDynamic = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js',
				),
				_parseRelativeUrl = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js',
				),
				_querystring = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/querystring.js',
				),
				_resolveRewrites = _interop_require_default(
					__webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js',
					),
				),
				_routeMatcher = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/route-matcher.js',
				),
				_routeRegex = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/route-regex.js',
				),
				_formatUrl = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/format-url.js',
				),
				_detectDomainLocale = __webpack_require__(
					'./node_modules/next/dist/client/detect-domain-locale.js',
				),
				_parsePath = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/parse-path.js',
				),
				_addLocale = __webpack_require__(
					'./node_modules/next/dist/client/add-locale.js',
				),
				_removeLocale = __webpack_require__(
					'./node_modules/next/dist/client/remove-locale.js',
				),
				_removeBasePath = __webpack_require__(
					'./node_modules/next/dist/client/remove-base-path.js',
				),
				_addBasePath = __webpack_require__(
					'./node_modules/next/dist/client/add-base-path.js',
				),
				_hasBasePath = __webpack_require__(
					'./node_modules/next/dist/client/has-base-path.js',
				),
				_getNextPathnameInfo = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js',
				),
				_formatNextPathnameInfo = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js',
				),
				_compareStates = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/compare-states.js',
				)
			function buildCancellationError() {
				return Object.assign(new Error('Route Cancelled'), {
					cancelled: !0,
				})
			}
			function isLocalURL(url) {
				if (!_utils.isAbsoluteUrl(url)) return !0
				try {
					const locationOrigin = _utils.getLocationOrigin(),
						resolved = new URL(url, locationOrigin)
					return (
						resolved.origin === locationOrigin &&
						_hasBasePath.hasBasePath(resolved.pathname)
					)
				} catch (_) {
					return !1
				}
			}
			function interpolateAs(route, asPathname, query) {
				let interpolatedRoute = ''
				const dynamicRegex = _routeRegex.getRouteRegex(route),
					dynamicGroups = dynamicRegex.groups,
					dynamicMatches =
						(asPathname !== route
							? _routeMatcher.getRouteMatcher(dynamicRegex)(
									asPathname,
							  )
							: '') || query
				interpolatedRoute = route
				const params = Object.keys(dynamicGroups)
				return (
					params.every((param) => {
						let value = dynamicMatches[param] || ''
						const { repeat, optional } = dynamicGroups[param]
						let replaced = `[${repeat ? '...' : ''}${param}]`
						return (
							optional &&
								(replaced = `${value ? '' : '/'}[${replaced}]`),
							repeat &&
								!Array.isArray(value) &&
								(value = [value]),
							(optional || param in dynamicMatches) &&
								(interpolatedRoute =
									interpolatedRoute.replace(
										replaced,
										repeat
											? value
													.map((segment) =>
														encodeURIComponent(
															segment,
														),
													)
													.join('/')
											: encodeURIComponent(value),
									) || '/')
						)
					}) || (interpolatedRoute = ''),
					{ params, result: interpolatedRoute }
				)
			}
			function omit(object, keys) {
				const omitted = {}
				return (
					Object.keys(object).forEach((key) => {
						keys.includes(key) || (omitted[key] = object[key])
					}),
					omitted
				)
			}
			function resolveHref(router, href, resolveAs) {
				let base,
					urlAsString =
						'string' == typeof href
							? href
							: _formatUrl.formatWithValidation(href)
				const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//),
					urlAsStringNoProto = urlProtoMatch
						? urlAsString.slice(urlProtoMatch[0].length)
						: urlAsString
				if (
					(urlAsStringNoProto.split('?')[0] || '').match(/(\/\/|\\)/)
				) {
					console.error(
						`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`,
					)
					const normalizedUrl =
						_utils.normalizeRepeatedSlashes(urlAsStringNoProto)
					urlAsString =
						(urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl
				}
				if (!isLocalURL(urlAsString))
					return resolveAs ? [urlAsString] : urlAsString
				try {
					base = new URL(
						urlAsString.startsWith('#')
							? router.asPath
							: router.pathname,
						'http://n',
					)
				} catch (_) {
					base = new URL('/', 'http://n')
				}
				try {
					const finalUrl = new URL(urlAsString, base)
					finalUrl.pathname =
						_normalizeTrailingSlash.normalizePathTrailingSlash(
							finalUrl.pathname,
						)
					let interpolatedAs = ''
					if (
						_isDynamic.isDynamicRoute(finalUrl.pathname) &&
						finalUrl.searchParams &&
						resolveAs
					) {
						const query = _querystring.searchParamsToUrlQuery(
								finalUrl.searchParams,
							),
							{ result, params } = interpolateAs(
								finalUrl.pathname,
								finalUrl.pathname,
								query,
							)
						result &&
							(interpolatedAs = _formatUrl.formatWithValidation({
								pathname: result,
								hash: finalUrl.hash,
								query: omit(query, params),
							}))
					}
					const resolvedHref =
						finalUrl.origin === base.origin
							? finalUrl.href.slice(finalUrl.origin.length)
							: finalUrl.href
					return resolveAs
						? [resolvedHref, interpolatedAs || resolvedHref]
						: resolvedHref
				} catch (_1) {
					return resolveAs ? [urlAsString] : urlAsString
				}
			}
			function stripOrigin(url) {
				const origin = _utils.getLocationOrigin()
				return url.startsWith(origin)
					? url.substring(origin.length)
					: url
			}
			function prepareUrlAs(router, url, as) {
				let [resolvedHref, resolvedAs] = resolveHref(router, url, !0)
				const origin = _utils.getLocationOrigin(),
					hrefHadOrigin = resolvedHref.startsWith(origin),
					asHadOrigin = resolvedAs && resolvedAs.startsWith(origin)
				;(resolvedHref = stripOrigin(resolvedHref)),
					(resolvedAs = resolvedAs
						? stripOrigin(resolvedAs)
						: resolvedAs)
				const preparedUrl = hrefHadOrigin
						? resolvedHref
						: _addBasePath.addBasePath(resolvedHref),
					preparedAs = as
						? stripOrigin(resolveHref(router, as))
						: resolvedAs || resolvedHref
				return {
					url: preparedUrl,
					as: asHadOrigin
						? preparedAs
						: _addBasePath.addBasePath(preparedAs),
				}
			}
			function resolveDynamicRoute(pathname, pages) {
				const cleanPathname = _removeTrailingSlash.removeTrailingSlash(
					_denormalizePagePath.denormalizePagePath(pathname),
				)
				return '/404' === cleanPathname || '/_error' === cleanPathname
					? pathname
					: (pages.includes(cleanPathname) ||
							pages.some((page) => {
								if (
									_isDynamic.isDynamicRoute(page) &&
									_routeRegex
										.getRouteRegex(page)
										.re.test(cleanPathname)
								)
									return (pathname = page), !0
							}),
					  _removeTrailingSlash.removeTrailingSlash(pathname))
			}
			const manualScrollRestoration =
					process.env.__NEXT_SCROLL_RESTORATION &&
					'undefined' != typeof window &&
					'scrollRestoration' in window.history &&
					!!(function () {
						try {
							let v = '__next'
							return (
								sessionStorage.setItem(v, v),
								sessionStorage.removeItem(v),
								!0
							)
						} catch (n) {}
					})(),
				SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND')
			function fetchRetry(url, attempts, options) {
				return fetch(url, {
					credentials: 'same-origin',
					method: options.method || 'GET',
					headers: Object.assign({}, options.headers, {
						'x-nextjs-data': '1',
					}),
				}).then((response) =>
					!response.ok && attempts > 1 && response.status >= 500
						? fetchRetry(url, attempts - 1, options)
						: response,
				)
			}
			const backgroundCache = {}
			function fetchNextData({
				dataHref,
				inflightCache,
				isPrefetch,
				hasMiddleware,
				isServerRender,
				parseJSON,
				persistCache,
				isBackground,
				unstable_skipClientCache,
			}) {
				const { href: cacheKey } = new URL(
					dataHref,
					window.location.href,
				)
				var ref1
				const getData = (params) =>
					fetchRetry(dataHref, isServerRender ? 3 : 1, {
						headers: isPrefetch ? { purpose: 'prefetch' } : {},
						method:
							null !=
							(ref1 = null == params ? void 0 : params.method)
								? ref1
								: 'GET',
					})
						.then((response) =>
							response.ok &&
							'HEAD' === (null == params ? void 0 : params.method)
								? { dataHref, response, text: '', json: {} }
								: response.text().then((text) => {
										if (!response.ok) {
											if (
												hasMiddleware &&
												[301, 302, 307, 308].includes(
													response.status,
												)
											)
												return {
													dataHref,
													response,
													text,
													json: {},
												}
											var ref
											if (
												!hasMiddleware &&
												404 === response.status
											)
												if (
													null ==
													(ref =
														tryToParseAsJSON(text))
														? void 0
														: ref.notFound
												)
													return {
														dataHref,
														json: {
															notFound:
																SSG_DATA_NOT_FOUND,
														},
														response,
														text,
													}
											const error = new Error(
												'Failed to load static props',
											)
											throw (
												(isServerRender ||
													_routeLoader.markAssetError(
														error,
													),
												error)
											)
										}
										return {
											dataHref,
											json: parseJSON
												? tryToParseAsJSON(text)
												: null,
											response,
											text,
										}
								  }),
						)
						.then(
							(data) => (
								(persistCache &&
									'no-cache' !==
										data.response.headers.get(
											'x-middleware-cache',
										)) ||
									delete inflightCache[cacheKey],
								data
							),
						)
						.catch((err) => {
							throw (delete inflightCache[cacheKey], err)
						})
				return unstable_skipClientCache && persistCache
					? getData({}).then(
							(data) => (
								(inflightCache[cacheKey] =
									Promise.resolve(data)),
								data
							),
					  )
					: void 0 !== inflightCache[cacheKey]
					? inflightCache[cacheKey]
					: (inflightCache[cacheKey] = getData(
							isBackground ? { method: 'HEAD' } : {},
					  ))
			}
			function tryToParseAsJSON(text) {
				try {
					return JSON.parse(text)
				} catch (error) {
					return null
				}
			}
			function createKey() {
				return Math.random().toString(36).slice(2, 10)
			}
			function handleHardNavigation({ url, router }) {
				if (
					url ===
					_addBasePath.addBasePath(
						_addLocale.addLocale(router.asPath, router.locale),
					)
				)
					throw new Error(
						`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`,
					)
				window.location.href = url
			}
			const getCancelledHandler = ({ route, router }) => {
				let cancelled = !1
				const cancel = (router.clc = () => {
					cancelled = !0
				})
				return () => {
					if (cancelled) {
						const error = new Error(
							`Abort fetching component for route: "${route}"`,
						)
						throw ((error.cancelled = !0), error)
					}
					cancel === router.clc && (router.clc = null)
				}
			}
			class Router {
				reload() {
					window.location.reload()
				}
				back() {
					window.history.back()
				}
				push(url, as, options = {}) {
					if (
						process.env.__NEXT_SCROLL_RESTORATION &&
						manualScrollRestoration
					)
						try {
							sessionStorage.setItem(
								'__next_scroll_' + this._key,
								JSON.stringify({
									x: self.pageXOffset,
									y: self.pageYOffset,
								}),
							)
						} catch (e) {}
					return (
						({ url, as } = prepareUrlAs(this, url, as)),
						this.change('pushState', url, as, options)
					)
				}
				replace(url, as, options = {}) {
					return (
						({ url, as } = prepareUrlAs(this, url, as)),
						this.change('replaceState', url, as, options)
					)
				}
				change(method, url, as, options, forcedScroll) {
					var _this = this
					return _async_to_generator(function* () {
						if (!isLocalURL(url))
							return (
								handleHardNavigation({ url, router: _this }), !1
							)
						const isQueryUpdating = options._h,
							shouldResolveHref =
								isQueryUpdating ||
								options._shouldResolveHref ||
								_parsePath.parsePath(url).pathname ===
									_parsePath.parsePath(as).pathname,
							nextState = _extends({}, _this.state),
							readyStateChange = !0 !== _this.isReady
						_this.isReady = !0
						const isSsr = _this.isSsr
						if (
							(isQueryUpdating || (_this.isSsr = !1),
							isQueryUpdating && _this.clc)
						)
							return !1
						const prevLocale = nextState.locale
						if (process.env.__NEXT_I18N_SUPPORT) {
							;(nextState.locale =
								!1 === options.locale
									? _this.defaultLocale
									: options.locale || nextState.locale),
								void 0 === options.locale &&
									(options.locale = nextState.locale)
							const parsedAs = _parseRelativeUrl.parseRelativeUrl(
									_hasBasePath.hasBasePath(as)
										? _removeBasePath.removeBasePath(as)
										: as,
								),
								localePathResult =
									_normalizeLocalePath.normalizeLocalePath(
										parsedAs.pathname,
										_this.locales,
									)
							localePathResult.detectedLocale &&
								((nextState.locale =
									localePathResult.detectedLocale),
								(parsedAs.pathname = _addBasePath.addBasePath(
									parsedAs.pathname,
								)),
								(as =
									_formatUrl.formatWithValidation(parsedAs)),
								(url = _addBasePath.addBasePath(
									_normalizeLocalePath.normalizeLocalePath(
										_hasBasePath.hasBasePath(url)
											? _removeBasePath.removeBasePath(
													url,
											  )
											: url,
										_this.locales,
									).pathname,
								)))
							let didNavigate = !1
							var ref
							if (process.env.__NEXT_I18N_SUPPORT)
								(null == (ref = _this.locales)
									? void 0
									: ref.includes(nextState.locale)) ||
									((parsedAs.pathname = _addLocale.addLocale(
										parsedAs.pathname,
										nextState.locale,
									)),
									handleHardNavigation({
										url: _formatUrl.formatWithValidation(
											parsedAs,
										),
										router: _this,
									}),
									(didNavigate = !0))
							const detectedDomain =
								_detectDomainLocale.detectDomainLocale(
									_this.domainLocales,
									void 0,
									nextState.locale,
								)
							if (
								process.env.__NEXT_I18N_SUPPORT &&
								!didNavigate &&
								detectedDomain &&
								_this.isLocaleDomain &&
								self.location.hostname !== detectedDomain.domain
							) {
								const asNoBasePath =
									_removeBasePath.removeBasePath(as)
								handleHardNavigation({
									url: `http${
										detectedDomain.http ? '' : 's'
									}://${
										detectedDomain.domain
									}${_addBasePath.addBasePath(
										`${
											nextState.locale ===
											detectedDomain.defaultLocale
												? ''
												: `/${nextState.locale}`
										}${
											'/' === asNoBasePath
												? ''
												: asNoBasePath
										}` || '/',
									)}`,
									router: _this,
								}),
									(didNavigate = !0)
							}
							if (didNavigate) return new Promise(() => {})
						}
						_utils.ST && performance.mark('routeChange')
						const { shallow = !1, scroll = !0 } = options,
							routeProps = { shallow }
						_this._inFlightRoute &&
							_this.clc &&
							(isSsr ||
								Router.events.emit(
									'routeChangeError',
									buildCancellationError(),
									_this._inFlightRoute,
									routeProps,
								),
							_this.clc(),
							(_this.clc = null)),
							(as = _addBasePath.addBasePath(
								_addLocale.addLocale(
									_hasBasePath.hasBasePath(as)
										? _removeBasePath.removeBasePath(as)
										: as,
									options.locale,
									_this.defaultLocale,
								),
							))
						const cleanedAs = _removeLocale.removeLocale(
							_hasBasePath.hasBasePath(as)
								? _removeBasePath.removeBasePath(as)
								: as,
							nextState.locale,
						)
						_this._inFlightRoute = as
						const localeChange = prevLocale !== nextState.locale
						if (
							!isQueryUpdating &&
							_this.onlyAHashChange(cleanedAs) &&
							!localeChange
						) {
							;(nextState.asPath = cleanedAs),
								Router.events.emit(
									'hashChangeStart',
									as,
									routeProps,
								),
								_this.changeState(
									method,
									url,
									as,
									_extends({}, options, { scroll: !1 }),
								),
								scroll && _this.scrollToHash(cleanedAs)
							try {
								yield _this.set(
									nextState,
									_this.components[nextState.route],
									null,
								)
							} catch (err) {
								throw (
									(_isError.default(err) &&
										err.cancelled &&
										Router.events.emit(
											'routeChangeError',
											err,
											cleanedAs,
											routeProps,
										),
									err)
								)
							}
							return (
								Router.events.emit(
									'hashChangeComplete',
									as,
									routeProps,
								),
								!0
							)
						}
						let pages,
							rewrites,
							parsed = _parseRelativeUrl.parseRelativeUrl(url),
							{ pathname, query } = parsed
						try {
							;[pages, { __rewrites: rewrites }] =
								yield Promise.all([
									_this.pageLoader.getPageList(),
									_routeLoader.getClientBuildManifest(),
									_this.pageLoader.getMiddleware(),
								])
						} catch (err) {
							return (
								handleHardNavigation({
									url: as,
									router: _this,
								}),
								!1
							)
						}
						_this.urlIsNew(cleanedAs) ||
							localeChange ||
							(method = 'replaceState')
						let resolvedAs = as
						pathname = pathname
							? _removeTrailingSlash.removeTrailingSlash(
									_removeBasePath.removeBasePath(pathname),
							  )
							: pathname
						const isMiddlewareMatch = yield matchesMiddleware({
							asPath: as,
							locale: nextState.locale,
							router: _this,
						})
						if (
							(options.shallow &&
								isMiddlewareMatch &&
								(pathname = _this.pathname),
							shouldResolveHref && '/_error' !== pathname)
						)
							if (
								((options._shouldResolveHref = !0),
								process.env.__NEXT_HAS_REWRITES &&
									as.startsWith('/'))
							) {
								const rewritesResult = _resolveRewrites.default(
									_addBasePath.addBasePath(
										_addLocale.addLocale(
											cleanedAs,
											nextState.locale,
										),
										!0,
									),
									pages,
									rewrites,
									query,
									(p) => resolveDynamicRoute(p, pages),
									_this.locales,
								)
								if (rewritesResult.externalDest)
									return (
										handleHardNavigation({
											url: as,
											router: _this,
										}),
										!0
									)
								isMiddlewareMatch ||
									(resolvedAs = rewritesResult.asPath),
									rewritesResult.matchedPage &&
										rewritesResult.resolvedHref &&
										((pathname =
											rewritesResult.resolvedHref),
										(parsed.pathname =
											_addBasePath.addBasePath(pathname)),
										isMiddlewareMatch ||
											(url =
												_formatUrl.formatWithValidation(
													parsed,
												)))
							} else
								(parsed.pathname = resolveDynamicRoute(
									pathname,
									pages,
								)),
									parsed.pathname !== pathname &&
										((pathname = parsed.pathname),
										(parsed.pathname =
											_addBasePath.addBasePath(pathname)),
										isMiddlewareMatch ||
											(url =
												_formatUrl.formatWithValidation(
													parsed,
												)))
						if (!isLocalURL(as))
							return (
								handleHardNavigation({
									url: as,
									router: _this,
								}),
								!1
							)
						resolvedAs = _removeLocale.removeLocale(
							_removeBasePath.removeBasePath(resolvedAs),
							nextState.locale,
						)
						let route =
								_removeTrailingSlash.removeTrailingSlash(
									pathname,
								),
							routeMatch = !1
						if (_isDynamic.isDynamicRoute(route)) {
							const parsedAs =
									_parseRelativeUrl.parseRelativeUrl(
										resolvedAs,
									),
								asPathname = parsedAs.pathname,
								routeRegex = _routeRegex.getRouteRegex(route)
							routeMatch =
								_routeMatcher.getRouteMatcher(routeRegex)(
									asPathname,
								)
							const shouldInterpolate = route === asPathname,
								interpolatedAs = shouldInterpolate
									? interpolateAs(route, asPathname, query)
									: {}
							if (
								!routeMatch ||
								(shouldInterpolate && !interpolatedAs.result)
							) {
								const missingParams = Object.keys(
									routeRegex.groups,
								).filter((param) => !query[param])
								if (
									missingParams.length > 0 &&
									!isMiddlewareMatch
								)
									throw new Error(
										(shouldInterpolate
											? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(
													', ',
											  )}) to be interpolated properly. `
											: `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) +
											'Read more: https://nextjs.org/docs/messages/' +
											(shouldInterpolate
												? 'href-interpolation-failed'
												: 'incompatible-href-as'),
									)
							} else
								shouldInterpolate
									? (as = _formatUrl.formatWithValidation(
											Object.assign({}, parsedAs, {
												pathname: interpolatedAs.result,
												query: omit(
													query,
													interpolatedAs.params,
												),
											}),
									  ))
									: Object.assign(query, routeMatch)
						}
						isQueryUpdating ||
							Router.events.emit(
								'routeChangeStart',
								as,
								routeProps,
							)
						try {
							var ref2, ref3
							let routeInfo = yield _this.getRouteInfo({
								route,
								pathname,
								query,
								as,
								resolvedAs,
								routeProps,
								locale: nextState.locale,
								isPreview: nextState.isPreview,
								hasMiddleware: isMiddlewareMatch,
							})
							if (
								'route' in routeInfo &&
								isMiddlewareMatch &&
								((pathname = routeInfo.route || route),
								(route = pathname),
								routeProps.shallow ||
									(query = Object.assign(
										{},
										routeInfo.query || {},
										query,
									)),
								routeMatch &&
									pathname !== parsed.pathname &&
									Object.keys(routeMatch).forEach((key) => {
										routeMatch &&
											query[key] === routeMatch[key] &&
											delete query[key]
									}),
								_isDynamic.isDynamicRoute(pathname))
							) {
								let rewriteAs =
									!routeProps.shallow && routeInfo.resolvedAs
										? routeInfo.resolvedAs
										: _addBasePath.addBasePath(
												_addLocale.addLocale(
													new URL(as, location.href)
														.pathname,
													nextState.locale,
												),
												!0,
										  )
								if (
									(_hasBasePath.hasBasePath(rewriteAs) &&
										(rewriteAs =
											_removeBasePath.removeBasePath(
												rewriteAs,
											)),
									process.env.__NEXT_I18N_SUPPORT)
								) {
									const localeResult =
										_normalizeLocalePath.normalizeLocalePath(
											rewriteAs,
											_this.locales,
										)
									;(nextState.locale =
										localeResult.detectedLocale ||
										nextState.locale),
										(rewriteAs = localeResult.pathname)
								}
								const routeRegex =
										_routeRegex.getRouteRegex(pathname),
									curRouteMatch =
										_routeMatcher.getRouteMatcher(
											routeRegex,
										)(rewriteAs)
								curRouteMatch &&
									Object.assign(query, curRouteMatch)
							}
							if ('type' in routeInfo)
								return 'redirect-internal' === routeInfo.type
									? _this.change(
											method,
											routeInfo.newUrl,
											routeInfo.newAs,
											options,
									  )
									: (handleHardNavigation({
											url: routeInfo.destination,
											router: _this,
									  }),
									  new Promise(() => {}))
							let { error, props, __N_SSG, __N_SSP } = routeInfo
							const component = routeInfo.Component
							if (component && component.unstable_scriptLoader) {
								;[]
									.concat(component.unstable_scriptLoader())
									.forEach((script) => {
										_script.handleClientScriptLoad(
											script.props,
										)
									})
							}
							if ((__N_SSG || __N_SSP) && props) {
								if (
									props.pageProps &&
									props.pageProps.__N_REDIRECT
								) {
									options.locale = !1
									const destination =
										props.pageProps.__N_REDIRECT
									if (
										destination.startsWith('/') &&
										!1 !==
											props.pageProps
												.__N_REDIRECT_BASE_PATH
									) {
										const parsedHref =
											_parseRelativeUrl.parseRelativeUrl(
												destination,
											)
										parsedHref.pathname =
											resolveDynamicRoute(
												parsedHref.pathname,
												pages,
											)
										const { url: newUrl, as: newAs } =
											prepareUrlAs(
												_this,
												destination,
												destination,
											)
										return _this.change(
											method,
											newUrl,
											newAs,
											options,
										)
									}
									return (
										handleHardNavigation({
											url: destination,
											router: _this,
										}),
										new Promise(() => {})
									)
								}
								if (
									((nextState.isPreview =
										!!props.__N_PREVIEW),
									props.notFound === SSG_DATA_NOT_FOUND)
								) {
									let notFoundRoute
									try {
										yield _this.fetchComponent('/404'),
											(notFoundRoute = '/404')
									} catch (_) {
										notFoundRoute = '/_error'
									}
									if (
										((routeInfo = yield _this.getRouteInfo({
											route: notFoundRoute,
											pathname: notFoundRoute,
											query,
											as,
											resolvedAs,
											routeProps: { shallow: !1 },
											locale: nextState.locale,
											isPreview: nextState.isPreview,
										})),
										'type' in routeInfo)
									)
										throw new Error(
											'Unexpected middleware effect on /404',
										)
								}
							}
							var _route
							Router.events.emit(
								'beforeHistoryChange',
								as,
								routeProps,
							),
								_this.changeState(method, url, as, options),
								isQueryUpdating &&
									'/_error' === pathname &&
									500 ===
										(null ==
											(ref2 = self.__NEXT_DATA__.props) ||
										null == (ref3 = ref2.pageProps)
											? void 0
											: ref3.statusCode) &&
									(null == props
										? void 0
										: props.pageProps) &&
									(props.pageProps.statusCode = 500)
							const isValidShallowRoute =
								options.shallow &&
								nextState.route ===
									(null != (_route = routeInfo.route)
										? _route
										: route)
							var _scroll
							const shouldScroll =
									null != (_scroll = options.scroll)
										? _scroll
										: !options._h && !isValidShallowRoute,
								resetScroll = shouldScroll
									? { x: 0, y: 0 }
									: null,
								upcomingRouterState = _extends({}, nextState, {
									route,
									pathname,
									query,
									asPath: cleanedAs,
									isFallback: !1,
								}),
								upcomingScrollState =
									null != forcedScroll
										? forcedScroll
										: resetScroll
							if (
								!(
									options._h &&
									!upcomingScrollState &&
									!readyStateChange &&
									!localeChange &&
									_compareStates.compareRouterStates(
										upcomingRouterState,
										_this.state,
									)
								)
							) {
								if (
									(yield _this
										.set(
											upcomingRouterState,
											routeInfo,
											upcomingScrollState,
										)
										.catch((e) => {
											if (!e.cancelled) throw e
											error = error || e
										}),
									error)
								)
									throw (
										(isQueryUpdating ||
											Router.events.emit(
												'routeChangeError',
												error,
												cleanedAs,
												routeProps,
											),
										error)
									)
								process.env.__NEXT_I18N_SUPPORT &&
									nextState.locale &&
									(document.documentElement.lang =
										nextState.locale),
									isQueryUpdating ||
										Router.events.emit(
											'routeChangeComplete',
											as,
											routeProps,
										)
								shouldScroll &&
									/#.+$/.test(as) &&
									_this.scrollToHash(as)
							}
							return !0
						} catch (err1) {
							if (_isError.default(err1) && err1.cancelled)
								return !1
							throw err1
						}
					})()
				}
				changeState(method, url, as, options = {}) {
					;('pushState' === method && _utils.getURL() === as) ||
						((this._shallow = options.shallow),
						window.history[method](
							{
								url,
								as,
								options,
								__N: !0,
								key: (this._key =
									'pushState' !== method
										? this._key
										: createKey()),
							},
							'',
							as,
						))
				}
				handleRouteInfoError(
					err,
					pathname,
					query,
					as,
					routeProps,
					loadErrorFail,
				) {
					var _this = this
					return _async_to_generator(function* () {
						if ((console.error(err), err.cancelled)) throw err
						if (_routeLoader.isAssetError(err) || loadErrorFail)
							throw (
								(Router.events.emit(
									'routeChangeError',
									err,
									as,
									routeProps,
								),
								handleHardNavigation({
									url: as,
									router: _this,
								}),
								buildCancellationError())
							)
						try {
							let props
							const { page: Component, styleSheets } =
									yield _this.fetchComponent('/_error'),
								routeInfo = {
									props,
									Component,
									styleSheets,
									err,
									error: err,
								}
							if (!routeInfo.props)
								try {
									routeInfo.props =
										yield _this.getInitialProps(Component, {
											err,
											pathname,
											query,
										})
								} catch (gipErr) {
									console.error(
										'Error in error page `getInitialProps`: ',
										gipErr,
									),
										(routeInfo.props = {})
								}
							return routeInfo
						} catch (routeInfoErr) {
							return _this.handleRouteInfoError(
								_isError.default(routeInfoErr)
									? routeInfoErr
									: new Error(routeInfoErr + ''),
								pathname,
								query,
								as,
								routeProps,
								!0,
							)
						}
					})()
				}
				getRouteInfo({
					route: requestedRoute,
					pathname,
					query,
					as,
					resolvedAs,
					routeProps,
					locale,
					hasMiddleware,
					isPreview,
					unstable_skipClientCache,
				}) {
					var _this = this
					return _async_to_generator(function* () {
						let route = requestedRoute
						try {
							var ref, ref4, ref5
							const handleCancelled = getCancelledHandler({
								route,
								router: _this,
							})
							let existingInfo = _this.components[route]
							if (
								routeProps.shallow &&
								existingInfo &&
								_this.route === route
							)
								return existingInfo
							hasMiddleware && (existingInfo = void 0)
							let cachedRouteInfo =
								existingInfo && !('initial' in existingInfo)
									? existingInfo
									: void 0
							const fetchNextDataParams = {
									dataHref: _this.pageLoader.getDataHref({
										href: _formatUrl.formatWithValidation({
											pathname,
											query,
										}),
										skipInterpolation: !0,
										asPath: resolvedAs,
										locale,
									}),
									hasMiddleware: !0,
									isServerRender: _this.isSsr,
									parseJSON: !0,
									inflightCache: _this.sdc,
									persistCache: !isPreview,
									isPrefetch: !1,
									unstable_skipClientCache,
								},
								data = yield withMiddlewareEffects({
									fetchData: () =>
										fetchNextData(fetchNextDataParams),
									asPath: resolvedAs,
									locale,
									router: _this,
								})
							if (
								(handleCancelled(),
								'redirect-internal' ===
									(null == data || null == (ref = data.effect)
										? void 0
										: ref.type) ||
									'redirect-external' ===
										(null == data ||
										null == (ref4 = data.effect)
											? void 0
											: ref4.type))
							)
								return data.effect
							if (
								'rewrite' ===
									(null == data ||
									null == (ref5 = data.effect)
										? void 0
										: ref5.type) &&
								((route =
									_removeTrailingSlash.removeTrailingSlash(
										data.effect.resolvedHref,
									)),
								(pathname = data.effect.resolvedHref),
								(query = _extends(
									{},
									query,
									data.effect.parsedAs.query,
								)),
								(resolvedAs = _removeBasePath.removeBasePath(
									_normalizeLocalePath.normalizeLocalePath(
										data.effect.parsedAs.pathname,
										_this.locales,
									).pathname,
								)),
								(existingInfo = _this.components[route]),
								routeProps.shallow &&
									existingInfo &&
									_this.route === route &&
									!hasMiddleware)
							)
								return _extends({}, existingInfo, { route })
							if ('/api' === route || route.startsWith('/api/'))
								return (
									handleHardNavigation({
										url: as,
										router: _this,
									}),
									new Promise(() => {})
								)
							const routeInfo =
								cachedRouteInfo ||
								(yield _this
									.fetchComponent(route)
									.then((res) => ({
										Component: res.page,
										styleSheets: res.styleSheets,
										__N_SSG: res.mod.__N_SSG,
										__N_SSP: res.mod.__N_SSP,
										__N_RSC: !!res.mod.__next_rsc__,
									})))
							0
							const useStreamedFlightData =
									routeInfo.__N_RSC && routeInfo.__N_SSP,
								shouldFetchData =
									routeInfo.__N_SSG ||
									routeInfo.__N_SSP ||
									routeInfo.__N_RSC,
								{ props } = yield _this._getData(
									_async_to_generator(function* () {
										if (
											shouldFetchData &&
											!useStreamedFlightData
										) {
											const { json } = (
												null == data
													? void 0
													: data.json
											)
												? data
												: yield fetchNextData({
														dataHref:
															_this.pageLoader.getDataHref(
																{
																	href: _formatUrl.formatWithValidation(
																		{
																			pathname,
																			query,
																		},
																	),
																	asPath: resolvedAs,
																	locale,
																},
															),
														isServerRender:
															_this.isSsr,
														parseJSON: !0,
														inflightCache:
															_this.sdc,
														persistCache:
															!isPreview,
														isPrefetch: !1,
														unstable_skipClientCache,
												  })
											return { props: json || {} }
										}
										return {
											headers: {},
											props: yield _this.getInitialProps(
												routeInfo.Component,
												{
													pathname,
													query,
													asPath: as,
													locale,
													locales: _this.locales,
													defaultLocale:
														_this.defaultLocale,
												},
											),
										}
									}),
								)
							if (
								routeInfo.__N_SSP &&
								fetchNextDataParams.dataHref
							) {
								const cacheKey = new URL(
									fetchNextDataParams.dataHref,
									window.location.href,
								).href
								delete _this.sdc[cacheKey]
							}
							let flightInfo
							return (
								!_this.isPreview &&
									routeInfo.__N_SSG &&
									fetchNextData(
										Object.assign({}, fetchNextDataParams, {
											isBackground: !0,
											persistCache: !1,
											inflightCache: backgroundCache,
										}),
									).catch(() => {}),
								routeInfo.__N_RSC &&
									(flightInfo = {
										__flight__: useStreamedFlightData
											? (yield _this._getData(() =>
													_this._getFlightData(
														_formatUrl.formatWithValidation(
															{
																query: _extends(
																	{},
																	query,
																	{
																		__flight__:
																			'1',
																	},
																),
																pathname:
																	_isDynamic.isDynamicRoute(
																		route,
																	)
																		? interpolateAs(
																				pathname,
																				_parseRelativeUrl.parseRelativeUrl(
																					resolvedAs,
																				)
																					.pathname,
																				query,
																		  )
																				.result
																		: pathname,
															},
														),
													),
											  )).data
											: props.__flight__,
									}),
								(props.pageProps = Object.assign(
									{},
									props.pageProps,
									flightInfo,
								)),
								(routeInfo.props = props),
								(routeInfo.route = route),
								(routeInfo.query = query),
								(routeInfo.resolvedAs = resolvedAs),
								(_this.components[route] = routeInfo),
								routeInfo
							)
						} catch (err) {
							return _this.handleRouteInfoError(
								_isError.getProperError(err),
								pathname,
								query,
								as,
								routeProps,
							)
						}
					})()
				}
				set(state, data, resetScroll) {
					return (
						(this.state = state),
						this.sub(
							data,
							this.components['/_app'].Component,
							resetScroll,
						)
					)
				}
				beforePopState(cb) {
					this._bps = cb
				}
				onlyAHashChange(as) {
					if (!this.asPath) return !1
					const [oldUrlNoHash, oldHash] = this.asPath.split('#'),
						[newUrlNoHash, newHash] = as.split('#')
					return (
						!(
							!newHash ||
							oldUrlNoHash !== newUrlNoHash ||
							oldHash !== newHash
						) ||
						(oldUrlNoHash === newUrlNoHash && oldHash !== newHash)
					)
				}
				scrollToHash(as) {
					const [, hash = ''] = as.split('#')
					if ('' === hash || 'top' === hash)
						return void window.scrollTo(0, 0)
					const rawHash = decodeURIComponent(hash),
						idEl = document.getElementById(rawHash)
					if (idEl) return void idEl.scrollIntoView()
					const nameEl = document.getElementsByName(rawHash)[0]
					nameEl && nameEl.scrollIntoView()
				}
				urlIsNew(asPath) {
					return this.asPath !== asPath
				}
				prefetch(url, asPath = url, options = {}) {
					var _this = this
					return _async_to_generator(function* () {
						let parsed = _parseRelativeUrl.parseRelativeUrl(url),
							{ pathname, query } = parsed
						if (
							process.env.__NEXT_I18N_SUPPORT &&
							!1 === options.locale
						) {
							;(pathname =
								_normalizeLocalePath.normalizeLocalePath(
									pathname,
									_this.locales,
								).pathname),
								(parsed.pathname = pathname),
								(url = _formatUrl.formatWithValidation(parsed))
							let parsedAs =
								_parseRelativeUrl.parseRelativeUrl(asPath)
							const localePathResult =
								_normalizeLocalePath.normalizeLocalePath(
									parsedAs.pathname,
									_this.locales,
								)
							;(parsedAs.pathname = localePathResult.pathname),
								(options.locale =
									localePathResult.detectedLocale ||
									_this.defaultLocale),
								(asPath =
									_formatUrl.formatWithValidation(parsedAs))
						}
						const pages = yield _this.pageLoader.getPageList()
						let resolvedAs = asPath
						const locale =
								void 0 !== options.locale
									? options.locale || void 0
									: _this.locale,
							isMiddlewareMatch = yield matchesMiddleware({
								asPath,
								locale,
								router: _this,
							})
						if (
							process.env.__NEXT_HAS_REWRITES &&
							asPath.startsWith('/')
						) {
							let rewrites
							;({ __rewrites: rewrites } =
								yield _routeLoader.getClientBuildManifest())
							const rewritesResult = _resolveRewrites.default(
								_addBasePath.addBasePath(
									_addLocale.addLocale(asPath, _this.locale),
									!0,
								),
								pages,
								rewrites,
								parsed.query,
								(p) => resolveDynamicRoute(p, pages),
								_this.locales,
							)
							if (rewritesResult.externalDest) return
							;(resolvedAs = _removeLocale.removeLocale(
								_removeBasePath.removeBasePath(
									rewritesResult.asPath,
								),
								_this.locale,
							)),
								rewritesResult.matchedPage &&
									rewritesResult.resolvedHref &&
									((pathname = rewritesResult.resolvedHref),
									(parsed.pathname = pathname),
									isMiddlewareMatch ||
										(url =
											_formatUrl.formatWithValidation(
												parsed,
											)))
						}
						;(parsed.pathname = resolveDynamicRoute(
							parsed.pathname,
							pages,
						)),
							_isDynamic.isDynamicRoute(parsed.pathname) &&
								((pathname = parsed.pathname),
								(parsed.pathname = pathname),
								Object.assign(
									query,
									_routeMatcher.getRouteMatcher(
										_routeRegex.getRouteRegex(
											parsed.pathname,
										),
									)(_parsePath.parsePath(asPath).pathname) ||
										{},
								),
								isMiddlewareMatch ||
									(url =
										_formatUrl.formatWithValidation(
											parsed,
										)))
						const data = yield withMiddlewareEffects({
							fetchData: () =>
								fetchNextData({
									dataHref: _this.pageLoader.getDataHref({
										href: _formatUrl.formatWithValidation({
											pathname,
											query,
										}),
										skipInterpolation: !0,
										asPath: resolvedAs,
										locale,
									}),
									hasMiddleware: !0,
									isServerRender: _this.isSsr,
									parseJSON: !0,
									inflightCache: _this.sdc,
									persistCache: !_this.isPreview,
									isPrefetch: !0,
								}),
							asPath,
							locale,
							router: _this,
						})
						if (
							('rewrite' ===
								(null == data ? void 0 : data.effect.type) &&
								((parsed.pathname = data.effect.resolvedHref),
								(pathname = data.effect.resolvedHref),
								(query = _extends(
									{},
									query,
									data.effect.parsedAs.query,
								)),
								(resolvedAs = data.effect.parsedAs.pathname),
								(url =
									_formatUrl.formatWithValidation(parsed))),
							'redirect-external' ===
								(null == data ? void 0 : data.effect.type))
						)
							return
						const route =
							_removeTrailingSlash.removeTrailingSlash(pathname)
						yield Promise.all([
							_this.pageLoader._isSsg(route).then(
								(isSsg) =>
									!!isSsg &&
									fetchNextData({
										dataHref:
											(null == data
												? void 0
												: data.dataHref) ||
											_this.pageLoader.getDataHref({
												href: url,
												asPath: resolvedAs,
												locale,
											}),
										isServerRender: !1,
										parseJSON: !0,
										inflightCache: _this.sdc,
										persistCache: !_this.isPreview,
										isPrefetch: !0,
										unstable_skipClientCache:
											options.unstable_skipClientCache ||
											(options.priority &&
												!!process.env
													.__NEXT_OPTIMISTIC_CLIENT_CACHE),
									}).then(() => !1),
							),
							_this.pageLoader[
								options.priority ? 'loadPage' : 'prefetch'
							](route),
						])
					})()
				}
				fetchComponent(route) {
					var _this = this
					return _async_to_generator(function* () {
						const handleCancelled = getCancelledHandler({
							route,
							router: _this,
						})
						try {
							const componentResult =
								yield _this.pageLoader.loadPage(route)
							return handleCancelled(), componentResult
						} catch (err) {
							throw (handleCancelled(), err)
						}
					})()
				}
				_getData(fn) {
					let cancelled = !1
					const cancel = () => {
						cancelled = !0
					}
					return (
						(this.clc = cancel),
						fn().then((data) => {
							if (
								(cancel === this.clc && (this.clc = null),
								cancelled)
							) {
								const err = new Error(
									'Loading initial props cancelled',
								)
								throw ((err.cancelled = !0), err)
							}
							return data
						})
					)
				}
				_getFlightData(dataHref) {
					return fetchNextData({
						dataHref,
						isServerRender: !0,
						parseJSON: !1,
						inflightCache: this.sdc,
						persistCache: !1,
						isPrefetch: !1,
					}).then(({ text }) => ({ data: text }))
				}
				getInitialProps(Component, ctx) {
					const { Component: App } = this.components['/_app'],
						AppTree = this._wrapApp(App)
					return (
						(ctx.AppTree = AppTree),
						_utils.loadGetInitialProps(App, {
							AppTree,
							Component,
							router: this,
							ctx,
						})
					)
				}
				get route() {
					return this.state.route
				}
				get pathname() {
					return this.state.pathname
				}
				get query() {
					return this.state.query
				}
				get asPath() {
					return this.state.asPath
				}
				get locale() {
					return this.state.locale
				}
				get isFallback() {
					return this.state.isFallback
				}
				get isPreview() {
					return this.state.isPreview
				}
				constructor(
					pathname1,
					query1,
					as1,
					{
						initialProps,
						pageLoader,
						App,
						wrapApp,
						Component,
						err,
						subscription,
						isFallback,
						locale,
						locales,
						defaultLocale,
						domainLocales,
						isPreview,
						isRsc,
					},
				) {
					;(this.sdc = {}),
						(this.isFirstPopStateEvent = !0),
						(this._key = createKey()),
						(this.onPopState = (e) => {
							const { isFirstPopStateEvent } = this
							this.isFirstPopStateEvent = !1
							const state = e.state
							if (!state) {
								const { pathname, query } = this
								return void this.changeState(
									'replaceState',
									_formatUrl.formatWithValidation({
										pathname:
											_addBasePath.addBasePath(pathname),
										query,
									}),
									_utils.getURL(),
								)
							}
							if (state.__NA) return void window.location.reload()
							if (!state.__N) return
							if (
								isFirstPopStateEvent &&
								this.locale === state.options.locale &&
								state.as === this.asPath
							)
								return
							let forcedScroll
							const { url, as, options, key } = state
							if (
								process.env.__NEXT_SCROLL_RESTORATION &&
								manualScrollRestoration &&
								this._key !== key
							) {
								try {
									sessionStorage.setItem(
										'__next_scroll_' + this._key,
										JSON.stringify({
											x: self.pageXOffset,
											y: self.pageYOffset,
										}),
									)
								} catch (e) {}
								try {
									const v = sessionStorage.getItem(
										'__next_scroll_' + key,
									)
									forcedScroll = JSON.parse(v)
								} catch (e1) {
									forcedScroll = { x: 0, y: 0 }
								}
							}
							this._key = key
							const { pathname } =
								_parseRelativeUrl.parseRelativeUrl(url)
							;(this.isSsr &&
								as === _addBasePath.addBasePath(this.asPath) &&
								pathname ===
									_addBasePath.addBasePath(this.pathname)) ||
								(this._bps && !this._bps(state)) ||
								this.change(
									'replaceState',
									url,
									as,
									Object.assign({}, options, {
										shallow:
											options.shallow && this._shallow,
										locale:
											options.locale ||
											this.defaultLocale,
										_h: 0,
									}),
									forcedScroll,
								)
						})
					const route =
						_removeTrailingSlash.removeTrailingSlash(pathname1)
					;(this.components = {}),
						'/_error' !== pathname1 &&
							(this.components[route] = {
								Component,
								initial: !0,
								props: initialProps,
								err,
								__N_SSG: initialProps && initialProps.__N_SSG,
								__N_SSP: initialProps && initialProps.__N_SSP,
								__N_RSC: !!isRsc,
							}),
						(this.components['/_app'] = {
							Component: App,
							styleSheets: [],
						}),
						(this.events = Router.events),
						(this.pageLoader = pageLoader)
					const autoExportDynamic =
						_isDynamic.isDynamicRoute(pathname1) &&
						self.__NEXT_DATA__.autoExport
					if (
						((this.basePath =
							process.env.__NEXT_ROUTER_BASEPATH || ''),
						(this.sub = subscription),
						(this.clc = null),
						(this._wrapApp = wrapApp),
						(this.isSsr = !0),
						(this.isLocaleDomain = !1),
						(this.isReady = !(
							!(
								self.__NEXT_DATA__.gssp ||
								self.__NEXT_DATA__.gip ||
								(self.__NEXT_DATA__.appGip &&
									!self.__NEXT_DATA__.gsp)
							) &&
							(autoExportDynamic ||
								self.location.search ||
								process.env.__NEXT_HAS_REWRITES)
						)),
						process.env.__NEXT_I18N_SUPPORT &&
							((this.locales = locales),
							(this.defaultLocale = defaultLocale),
							(this.domainLocales = domainLocales),
							(this.isLocaleDomain =
								!!_detectDomainLocale.detectDomainLocale(
									domainLocales,
									self.location.hostname,
								))),
						(this.state = {
							route,
							pathname: pathname1,
							query: query1,
							asPath: autoExportDynamic ? pathname1 : as1,
							isPreview: !!isPreview,
							locale: process.env.__NEXT_I18N_SUPPORT
								? locale
								: void 0,
							isFallback,
						}),
						(this._initialMatchesMiddlewarePromise =
							Promise.resolve(!1)),
						'undefined' != typeof window)
					) {
						if (!as1.startsWith('//')) {
							const options = { locale },
								asPath = _utils.getURL()
							this._initialMatchesMiddlewarePromise =
								matchesMiddleware({
									router: this,
									locale,
									asPath,
								}).then(
									(matches) => (
										(options._shouldResolveHref =
											as1 !== pathname1),
										this.changeState(
											'replaceState',
											matches
												? asPath
												: _formatUrl.formatWithValidation(
														{
															pathname:
																_addBasePath.addBasePath(
																	pathname1,
																),
															query: query1,
														},
												  ),
											asPath,
											options,
										),
										matches
									),
								)
						}
						window.addEventListener('popstate', this.onPopState),
							process.env.__NEXT_SCROLL_RESTORATION &&
								manualScrollRestoration &&
								(window.history.scrollRestoration = 'manual')
					}
				}
			}
			function matchesMiddleware(options) {
				return Promise.resolve(
					options.router.pageLoader.getMiddleware(),
				).then((middleware) => {
					const { pathname: asPathname } = _parsePath.parsePath(
							options.asPath,
						),
						cleanedAs = _hasBasePath.hasBasePath(asPathname)
							? _removeBasePath.removeBasePath(asPathname)
							: asPathname,
						regex =
							null == middleware ? void 0 : middleware.location
					return (
						!!regex &&
						new RegExp(regex).test(
							_addLocale.addLocale(cleanedAs, options.locale),
						)
					)
				})
			}
			function withMiddlewareEffects(options) {
				return matchesMiddleware(options).then((matches) =>
					matches && options.fetchData
						? options
								.fetchData()
								.then((data) =>
									(function getMiddlewareData(
										source,
										response,
										options,
									) {
										const nextConfig = {
												basePath:
													options.router.basePath,
												i18n: {
													locales:
														options.router.locales,
												},
												trailingSlash: Boolean(
													process.env
														.__NEXT_TRAILING_SLASH,
												),
											},
											rewriteHeader =
												response.headers.get(
													'x-nextjs-rewrite',
												)
										let rewriteTarget =
											rewriteHeader ||
											response.headers.get(
												'x-nextjs-matched-path',
											)
										const matchedPath =
											response.headers.get(
												'x-matched-path',
											)
										!matchedPath ||
											rewriteTarget ||
											matchedPath.includes(
												'__next_data_catchall',
											) ||
											matchedPath.includes('/_error') ||
											matchedPath.includes('/404') ||
											(rewriteTarget = matchedPath)
										if (rewriteTarget) {
											if (rewriteTarget.startsWith('/')) {
												const parsedRewriteTarget =
														_parseRelativeUrl.parseRelativeUrl(
															rewriteTarget,
														),
													pathnameInfo =
														_getNextPathnameInfo.getNextPathnameInfo(
															parsedRewriteTarget.pathname,
															{
																nextConfig,
																parseData: !0,
															},
														)
												let fsPathname =
													_removeTrailingSlash.removeTrailingSlash(
														pathnameInfo.pathname,
													)
												return Promise.all([
													options.router.pageLoader.getPageList(),
													_routeLoader.getClientBuildManifest(),
												]).then(
													([
														pages,
														{
															__rewrites:
																rewrites,
														},
													]) => {
														let as =
															_addLocale.addLocale(
																pathnameInfo.pathname,
																pathnameInfo.locale,
															)
														if (
															_isDynamic.isDynamicRoute(
																as,
															) ||
															(!rewriteHeader &&
																pages.includes(
																	_normalizeLocalePath.normalizeLocalePath(
																		_removeBasePath.removeBasePath(
																			as,
																		),
																		options
																			.router
																			.locales,
																	).pathname,
																))
														) {
															const parsedSource =
																_getNextPathnameInfo.getNextPathnameInfo(
																	_parseRelativeUrl.parseRelativeUrl(
																		source,
																	).pathname,
																	{
																		parseData:
																			!0,
																	},
																)
															;(as =
																_addBasePath.addBasePath(
																	parsedSource.pathname,
																)),
																(parsedRewriteTarget.pathname =
																	as)
														}
														if (
															process.env
																.__NEXT_HAS_REWRITES
														) {
															const result =
																_resolveRewrites.default(
																	as,
																	pages,
																	rewrites,
																	parsedRewriteTarget.query,
																	(path) =>
																		resolveDynamicRoute(
																			path,
																			pages,
																		),
																	options
																		.router
																		.locales,
																)
															result.matchedPage &&
																((parsedRewriteTarget.pathname =
																	result.parsedAs.pathname),
																(as =
																	parsedRewriteTarget.pathname),
																Object.assign(
																	parsedRewriteTarget.query,
																	result
																		.parsedAs
																		.query,
																))
														} else if (
															!pages.includes(
																fsPathname,
															)
														) {
															const resolvedPathname =
																resolveDynamicRoute(
																	fsPathname,
																	pages,
																)
															resolvedPathname !==
																fsPathname &&
																(fsPathname =
																	resolvedPathname)
														}
														const resolvedHref =
															pages.includes(
																fsPathname,
															)
																? fsPathname
																: resolveDynamicRoute(
																		_normalizeLocalePath.normalizeLocalePath(
																			_removeBasePath.removeBasePath(
																				parsedRewriteTarget.pathname,
																			),
																			options
																				.router
																				.locales,
																		)
																			.pathname,
																		pages,
																  )
														if (
															_isDynamic.isDynamicRoute(
																resolvedHref,
															)
														) {
															const matches =
																_routeMatcher.getRouteMatcher(
																	_routeRegex.getRouteRegex(
																		resolvedHref,
																	),
																)(as)
															Object.assign(
																parsedRewriteTarget.query,
																matches || {},
															)
														}
														return {
															type: 'rewrite',
															parsedAs:
																parsedRewriteTarget,
															resolvedHref,
														}
													},
												)
											}
											const src =
													_parsePath.parsePath(
														source,
													),
												pathname =
													_formatNextPathnameInfo.formatNextPathnameInfo(
														_extends(
															{},
															_getNextPathnameInfo.getNextPathnameInfo(
																src.pathname,
																{
																	nextConfig,
																	parseData:
																		!0,
																},
															),
															{
																defaultLocale:
																	options
																		.router
																		.defaultLocale,
																buildId: '',
															},
														),
													)
											return Promise.resolve({
												type: 'redirect-external',
												destination: `${pathname}${src.query}${src.hash}`,
											})
										}
										const redirectTarget =
											response.headers.get(
												'x-nextjs-redirect',
											)
										if (redirectTarget) {
											if (
												redirectTarget.startsWith('/')
											) {
												const src =
														_parsePath.parsePath(
															redirectTarget,
														),
													pathname =
														_formatNextPathnameInfo.formatNextPathnameInfo(
															_extends(
																{},
																_getNextPathnameInfo.getNextPathnameInfo(
																	src.pathname,
																	{
																		nextConfig,
																		parseData:
																			!0,
																	},
																),
																{
																	defaultLocale:
																		options
																			.router
																			.defaultLocale,
																	buildId: '',
																},
															),
														)
												return Promise.resolve({
													type: 'redirect-internal',
													newAs: `${pathname}${src.query}${src.hash}`,
													newUrl: `${pathname}${src.query}${src.hash}`,
												})
											}
											return Promise.resolve({
												type: 'redirect-external',
												destination: redirectTarget,
											})
										}
										return Promise.resolve({ type: 'next' })
									})(
										data.dataHref,
										data.response,
										options,
									).then((effect) => ({
										dataHref: data.dataHref,
										json: data.json,
										response: data.response,
										text: data.text,
										effect,
									})),
								)
								.catch((_err) => null)
						: null,
				)
			}
			;(Router.events = _mitt.default()), (exports.default = Router)
		},
		'./node_modules/next/dist/shared/lib/router/utils/add-locale.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.addLocale = function addLocale(
					path,
					locale,
					defaultLocale,
					ignorePrefix,
				) {
					if (
						locale &&
						locale !== defaultLocale &&
						(ignorePrefix ||
							(!_pathHasPrefix.pathHasPrefix(
								path.toLowerCase(),
								`/${locale.toLowerCase()}`,
							) &&
								!_pathHasPrefix.pathHasPrefix(
									path.toLowerCase(),
									'/api',
								)))
					)
						return _addPathPrefix.addPathPrefix(path, `/${locale}`)
					return path
				})
			var _addPathPrefix = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js',
				),
				_pathHasPrefix = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js',
				)
		},
		'./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.addPathPrefix = function addPathPrefix(path, prefix) {
					if (!path.startsWith('/') || !prefix) return path
					const { pathname, query, hash } = _parsePath.parsePath(path)
					return `${prefix}${pathname}${query}${hash}`
				})
			var _parsePath = __webpack_require__(
				'./node_modules/next/dist/shared/lib/router/utils/parse-path.js',
			)
		},
		'./node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.addPathSuffix = function addPathSuffix(path, suffix) {
					if (!path.startsWith('/') || !suffix) return path
					const { pathname, query, hash } = _parsePath.parsePath(path)
					return `${pathname}${suffix}${query}${hash}`
				})
			var _parsePath = __webpack_require__(
				'./node_modules/next/dist/shared/lib/router/utils/parse-path.js',
			)
		},
		'./node_modules/next/dist/shared/lib/router/utils/compare-states.js': (
			__unused_webpack_module,
			exports,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.compareRouterStates = function compareRouterStates(
					a,
					b,
				) {
					const stateKeys = Object.keys(a)
					if (stateKeys.length !== Object.keys(b).length) return !1
					for (let i = stateKeys.length; i--; ) {
						const key = stateKeys[i]
						if ('query' === key) {
							const queryKeys = Object.keys(a.query)
							if (
								queryKeys.length !== Object.keys(b.query).length
							)
								return !1
							for (let j = queryKeys.length; j--; ) {
								const queryKey = queryKeys[j]
								if (
									!b.query.hasOwnProperty(queryKey) ||
									a.query[queryKey] !== b.query[queryKey]
								)
									return !1
							}
						} else if (!b.hasOwnProperty(key) || a[key] !== b[key])
							return !1
					}
					return !0
				})
		},
		'./node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js':
			(__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.formatNextPathnameInfo =
						function formatNextPathnameInfo(info) {
							let pathname = _addLocale.addLocale(
								info.pathname,
								info.locale,
								info.buildId ? void 0 : info.defaultLocale,
								info.ignorePrefix,
							)
							info.buildId &&
								(pathname = _addPathSuffix.addPathSuffix(
									_addPathPrefix.addPathPrefix(
										pathname,
										`/_next/data/${info.buildId}`,
									),
									'/' === info.pathname
										? 'index.json'
										: '.json',
								))
							return (
								(pathname = _addPathPrefix.addPathPrefix(
									pathname,
									info.basePath,
								)),
								info.trailingSlash
									? info.buildId || pathname.endsWith('/')
										? pathname
										: _addPathSuffix.addPathSuffix(
												pathname,
												'/',
										  )
									: _removeTrailingSlash.removeTrailingSlash(
											pathname,
									  )
							)
						})
				var _removeTrailingSlash = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js',
					),
					_addPathPrefix = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js',
					),
					_addPathSuffix = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js',
					),
					_addLocale = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/add-locale.js',
					)
			},
		'./node_modules/next/dist/shared/lib/router/utils/format-url.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.formatUrl = formatUrl),
				(exports.formatWithValidation = function formatWithValidation(
					url,
				) {
					0
					return formatUrl(url)
				}),
				(exports.urlObjectKeys = void 0)
			var querystring = (0,
			__webpack_require__(
				'./node_modules/@swc/helpers/lib/_interop_require_wildcard.js',
			).Z)(
				__webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/querystring.js',
				),
			)
			const slashedProtocols = /https?|ftp|gopher|file/
			function formatUrl(urlObj) {
				let { auth, hostname } = urlObj,
					protocol = urlObj.protocol || '',
					pathname = urlObj.pathname || '',
					hash = urlObj.hash || '',
					query = urlObj.query || '',
					host = !1
				;(auth = auth
					? encodeURIComponent(auth).replace(/%3A/i, ':') + '@'
					: ''),
					urlObj.host
						? (host = auth + urlObj.host)
						: hostname &&
						  ((host =
								auth +
								(~hostname.indexOf(':')
									? `[${hostname}]`
									: hostname)),
						  urlObj.port && (host += ':' + urlObj.port)),
					query &&
						'object' == typeof query &&
						(query = String(
							querystring.urlQueryToSearchParams(query),
						))
				let search = urlObj.search || (query && `?${query}`) || ''
				return (
					protocol && !protocol.endsWith(':') && (protocol += ':'),
					urlObj.slashes ||
					((!protocol || slashedProtocols.test(protocol)) &&
						!1 !== host)
						? ((host = '//' + (host || '')),
						  pathname &&
								'/' !== pathname[0] &&
								(pathname = '/' + pathname))
						: host || (host = ''),
					hash && '#' !== hash[0] && (hash = '#' + hash),
					search && '?' !== search[0] && (search = '?' + search),
					(pathname = pathname.replace(/[?#]/g, encodeURIComponent)),
					(search = search.replace('#', '%23')),
					`${protocol}${host}${pathname}${search}${hash}`
				)
			}
			exports.urlObjectKeys = [
				'auth',
				'hash',
				'host',
				'hostname',
				'href',
				'path',
				'pathname',
				'port',
				'protocol',
				'query',
				'search',
				'slashes',
			]
		},
		'./node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js':
			(__unused_webpack_module, exports) => {
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.default = function getAssetPathFromRoute(
						route,
						ext = '',
					) {
						return (
							('/' === route
								? '/index'
								: /^\/index(\/|$)/.test(route)
								? `/index${route}`
								: `${route}`) + ext
						)
					})
			},
		'./node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js':
			(__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.getNextPathnameInfo = function getNextPathnameInfo(
						pathname,
						options,
					) {
						var _nextConfig
						const { basePath, i18n, trailingSlash } =
								null != (_nextConfig = options.nextConfig)
									? _nextConfig
									: {},
							info = {
								pathname,
								trailingSlash:
									'/' !== pathname
										? pathname.endsWith('/')
										: trailingSlash,
							}
						basePath &&
							_pathHasPrefix.pathHasPrefix(
								info.pathname,
								basePath,
							) &&
							((info.pathname =
								_removePathPrefix.removePathPrefix(
									info.pathname,
									basePath,
								)),
							(info.basePath = basePath))
						if (
							!0 === options.parseData &&
							info.pathname.startsWith('/_next/data/') &&
							info.pathname.endsWith('.json')
						) {
							const paths = info.pathname
									.replace(/^\/_next\/data\//, '')
									.replace(/\.json$/, '')
									.split('/'),
								buildId = paths[0]
							;(info.pathname =
								'index' !== paths[1]
									? `/${paths.slice(1).join('/')}`
									: '/'),
								(info.buildId = buildId)
						}
						if (i18n) {
							const pathLocale =
								_normalizeLocalePath.normalizeLocalePath(
									info.pathname,
									i18n.locales,
								)
							;(info.locale =
								null == pathLocale
									? void 0
									: pathLocale.detectedLocale),
								(info.pathname =
									(null == pathLocale
										? void 0
										: pathLocale.pathname) || info.pathname)
						}
						return info
					})
				var _normalizeLocalePath = __webpack_require__(
						'./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js',
					),
					_removePathPrefix = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js',
					),
					_pathHasPrefix = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js',
					)
			},
		'./node_modules/next/dist/shared/lib/router/utils/index.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				Object.defineProperty(exports, 'getSortedRoutes', {
					enumerable: !0,
					get: function () {
						return _sortedRoutes.getSortedRoutes
					},
				}),
				Object.defineProperty(exports, 'isDynamicRoute', {
					enumerable: !0,
					get: function () {
						return _isDynamic.isDynamicRoute
					},
				})
			var _sortedRoutes = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/sorted-routes.js',
				),
				_isDynamic = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js',
				)
		},
		'./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js': (
			__unused_webpack_module,
			exports,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.isDynamicRoute = function isDynamicRoute(route) {
					return TEST_ROUTE.test(route)
				})
			const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/
		},
		'./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js':
			(__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.parseRelativeUrl = function parseRelativeUrl(
						url,
						base,
					) {
						const globalBase = new URL(
								'undefined' == typeof window
									? 'http://n'
									: _utils.getLocationOrigin(),
							),
							resolvedBase = base
								? new URL(base, globalBase)
								: url.startsWith('.')
								? new URL(
										'undefined' == typeof window
											? 'http://n'
											: window.location.href,
								  )
								: globalBase,
							{
								pathname,
								searchParams,
								search,
								hash,
								href,
								origin,
							} = new URL(url, resolvedBase)
						if (origin !== globalBase.origin)
							throw new Error(
								`invariant: invalid relative URL, router received ${url}`,
							)
						return {
							pathname,
							query: _querystring.searchParamsToUrlQuery(
								searchParams,
							),
							search,
							hash,
							href: href.slice(globalBase.origin.length),
						}
					})
				var _utils = __webpack_require__(
						'./node_modules/next/dist/shared/lib/utils.js',
					),
					_querystring = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/querystring.js',
					)
			},
		'./node_modules/next/dist/shared/lib/router/utils/parse-url.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.parseUrl = function parseUrl(url) {
					if (url.startsWith('/'))
						return _parseRelativeUrl.parseRelativeUrl(url)
					const parsedURL = new URL(url)
					return {
						hash: parsedURL.hash,
						hostname: parsedURL.hostname,
						href: parsedURL.href,
						pathname: parsedURL.pathname,
						port: parsedURL.port,
						protocol: parsedURL.protocol,
						query: _querystring.searchParamsToUrlQuery(
							parsedURL.searchParams,
						),
						search: parsedURL.search,
					}
				})
			var _querystring = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/querystring.js',
				),
				_parseRelativeUrl = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js',
				)
		},
		'./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.pathHasPrefix = function pathHasPrefix(path, prefix) {
					if ('string' != typeof path) return !1
					const { pathname } = _parsePath.parsePath(path)
					return (
						pathname === prefix || pathname.startsWith(prefix + '/')
					)
				})
			var _parsePath = __webpack_require__(
				'./node_modules/next/dist/shared/lib/router/utils/parse-path.js',
			)
		},
		'./node_modules/next/dist/shared/lib/router/utils/path-match.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getPathMatch = function getPathMatch(path, options) {
					const keys = [],
						regexp = _pathToRegexp.pathToRegexp(path, keys, {
							delimiter: '/',
							sensitive: !1,
							strict: null == options ? void 0 : options.strict,
						}),
						matcher = _pathToRegexp.regexpToFunction(
							(null == options ? void 0 : options.regexModifier)
								? new RegExp(
										options.regexModifier(regexp.source),
										regexp.flags,
								  )
								: regexp,
							keys,
						)
					return (pathname, params) => {
						const res = null != pathname && matcher(pathname)
						if (!res) return !1
						if (
							null == options
								? void 0
								: options.removeUnnamedParams
						)
							for (const key of keys)
								'number' == typeof key.name &&
									delete res.params[key.name]
						return _extends({}, params, res.params)
					}
				})
			var _extends = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_extends.js',
				).Z,
				_pathToRegexp = __webpack_require__(
					'./node_modules/next/dist/compiled/path-to-regexp/index.js',
				)
		},
		'./node_modules/next/dist/shared/lib/router/utils/prepare-destination.js':
			(__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.matchHas = function matchHas(req, has, query) {
						const params = {}
						if (
							has.every((hasItem) => {
								let value,
									key = hasItem.key
								switch (hasItem.type) {
									case 'header':
										;(key = key.toLowerCase()),
											(value = req.headers[key])
										break
									case 'cookie':
										value = req.cookies[hasItem.key]
										break
									case 'query':
										value = query[key]
										break
									case 'host': {
										const { host } =
											(null == req
												? void 0
												: req.headers) || {}
										value =
											null == host
												? void 0
												: host
														.split(':')[0]
														.toLowerCase()
										break
									}
								}
								if (!hasItem.value && value)
									return (
										(params[
											(function getSafeParamName(
												paramName,
											) {
												let newParamName = ''
												for (
													let i = 0;
													i < paramName.length;
													i++
												) {
													const charCode =
														paramName.charCodeAt(i)
													;((charCode > 64 &&
														charCode < 91) ||
														(charCode > 96 &&
															charCode < 123)) &&
														(newParamName +=
															paramName[i])
												}
												return newParamName
											})(key)
										] = value),
										!0
									)
								if (value) {
									const matcher = new RegExp(
											`^${hasItem.value}$`,
										),
										matches = Array.isArray(value)
											? value.slice(-1)[0].match(matcher)
											: value.match(matcher)
									if (matches)
										return (
											Array.isArray(matches) &&
												(matches.groups
													? Object.keys(
															matches.groups,
													  ).forEach((groupKey) => {
															params[groupKey] =
																matches.groups[
																	groupKey
																]
													  })
													: 'host' === hasItem.type &&
													  matches[0] &&
													  (params.host =
															matches[0])),
											!0
										)
								}
								return !1
							})
						)
							return params
						return !1
					}),
					(exports.compileNonPath = compileNonPath),
					(exports.prepareDestination = function prepareDestination(
						args,
					) {
						const query = Object.assign({}, args.query)
						delete query.__nextLocale,
							delete query.__nextDefaultLocale,
							delete query.__nextDataReq
						let escapedDestination = args.destination
						for (const param of Object.keys(
							_extends({}, args.params, query),
						))
							(segmentName = param),
								(escapedDestination =
									escapedDestination.replace(
										new RegExp(
											`:${_escapeRegexp.escapeStringRegexp(
												segmentName,
											)}`,
											'g',
										),
										`__ESC_COLON_${segmentName}`,
									))
						var segmentName
						const parsedDestination =
								_parseUrl.parseUrl(escapedDestination),
							destQuery = parsedDestination.query,
							destPath = unescapeSegments(
								`${parsedDestination.pathname}${
									parsedDestination.hash || ''
								}`,
							),
							destHostname = unescapeSegments(
								parsedDestination.hostname || '',
							),
							destPathParamKeys = [],
							destHostnameParamKeys = []
						_pathToRegexp.pathToRegexp(destPath, destPathParamKeys),
							_pathToRegexp.pathToRegexp(
								destHostname,
								destHostnameParamKeys,
							)
						const destParams = []
						destPathParamKeys.forEach((key) =>
							destParams.push(key.name),
						),
							destHostnameParamKeys.forEach((key) =>
								destParams.push(key.name),
							)
						const destPathCompiler = _pathToRegexp.compile(
								destPath,
								{ validate: !1 },
							),
							destHostnameCompiler = _pathToRegexp.compile(
								destHostname,
								{ validate: !1 },
							)
						for (const [key1, strOrArray] of Object.entries(
							destQuery,
						))
							Array.isArray(strOrArray)
								? (destQuery[key1] = strOrArray.map((value) =>
										compileNonPath(
											unescapeSegments(value),
											args.params,
										),
								  ))
								: (destQuery[key1] = compileNonPath(
										unescapeSegments(strOrArray),
										args.params,
								  ))
						let newUrl,
							paramKeys = Object.keys(args.params).filter(
								(name) => 'nextInternalLocale' !== name,
							)
						if (
							args.appendParamsToQuery &&
							!paramKeys.some((key) => destParams.includes(key))
						)
							for (const key of paramKeys)
								key in destQuery ||
									(destQuery[key] = args.params[key])
						try {
							newUrl = destPathCompiler(args.params)
							const [pathname, hash] = newUrl.split('#')
							;(parsedDestination.hostname = destHostnameCompiler(
								args.params,
							)),
								(parsedDestination.pathname = pathname),
								(parsedDestination.hash = `${hash ? '#' : ''}${
									hash || ''
								}`),
								delete parsedDestination.search
						} catch (err) {
							if (
								err.message.match(
									/Expected .*? to not repeat, but got an array/,
								)
							)
								throw new Error(
									'To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match',
								)
							throw err
						}
						return (
							(parsedDestination.query = _extends(
								{},
								query,
								parsedDestination.query,
							)),
							{ newUrl, destQuery, parsedDestination }
						)
					})
				var _extends = __webpack_require__(
						'./node_modules/@swc/helpers/lib/_extends.js',
					).Z,
					_pathToRegexp = __webpack_require__(
						'./node_modules/next/dist/compiled/path-to-regexp/index.js',
					),
					_escapeRegexp = __webpack_require__(
						'./node_modules/next/dist/shared/lib/escape-regexp.js',
					),
					_parseUrl = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/parse-url.js',
					)
				function compileNonPath(value, params) {
					if (!value.includes(':')) return value
					for (const key of Object.keys(params))
						value.includes(`:${key}`) &&
							(value = value
								.replace(
									new RegExp(`:${key}\\*`, 'g'),
									`:${key}--ESCAPED_PARAM_ASTERISKS`,
								)
								.replace(
									new RegExp(`:${key}\\?`, 'g'),
									`:${key}--ESCAPED_PARAM_QUESTION`,
								)
								.replace(
									new RegExp(`:${key}\\+`, 'g'),
									`:${key}--ESCAPED_PARAM_PLUS`,
								)
								.replace(
									new RegExp(`:${key}(?!\\w)`, 'g'),
									`--ESCAPED_PARAM_COLON${key}`,
								))
					return (
						(value = value
							.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1')
							.replace(/--ESCAPED_PARAM_PLUS/g, '+')
							.replace(/--ESCAPED_PARAM_COLON/g, ':')
							.replace(/--ESCAPED_PARAM_QUESTION/g, '?')
							.replace(/--ESCAPED_PARAM_ASTERISKS/g, '*')),
						_pathToRegexp
							.compile(`/${value}`, { validate: !1 })(params)
							.slice(1)
					)
				}
				function unescapeSegments(str) {
					return str.replace(/__ESC_COLON_/gi, ':')
				}
			},
		'./node_modules/next/dist/shared/lib/router/utils/querystring.js': (
			__unused_webpack_module,
			exports,
		) => {
			function stringifyUrlQueryParam(param) {
				return 'string' == typeof param ||
					('number' == typeof param && !isNaN(param)) ||
					'boolean' == typeof param
					? String(param)
					: ''
			}
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.searchParamsToUrlQuery =
					function searchParamsToUrlQuery(searchParams) {
						const query = {}
						return (
							searchParams.forEach((value, key) => {
								void 0 === query[key]
									? (query[key] = value)
									: Array.isArray(query[key])
									? query[key].push(value)
									: (query[key] = [query[key], value])
							}),
							query
						)
					}),
				(exports.urlQueryToSearchParams =
					function urlQueryToSearchParams(urlQuery) {
						const result = new URLSearchParams()
						return (
							Object.entries(urlQuery).forEach(([key, value]) => {
								Array.isArray(value)
									? value.forEach((item) =>
											result.append(
												key,
												stringifyUrlQueryParam(item),
											),
									  )
									: result.set(
											key,
											stringifyUrlQueryParam(value),
									  )
							}),
							result
						)
					}),
				(exports.assign = function assign(target, ...searchParamsList) {
					return (
						searchParamsList.forEach((searchParams) => {
							Array.from(searchParams.keys()).forEach((key) =>
								target.delete(key),
							),
								searchParams.forEach((value, key) =>
									target.append(key, value),
								)
						}),
						target
					)
				})
		},
		'./node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js':
			(__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.removePathPrefix = function removePathPrefix(
						path,
						prefix,
					) {
						if (_pathHasPrefix.pathHasPrefix(path, prefix)) {
							const withoutPrefix = path.slice(prefix.length)
							return withoutPrefix.startsWith('/')
								? withoutPrefix
								: `/${withoutPrefix}`
						}
						return path
					})
				var _pathHasPrefix = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js',
				)
			},
		'./node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js':
			(__unused_webpack_module, exports, __webpack_require__) => {
				var process = __webpack_require__(
					'./node_modules/process/browser.js',
				)
				Object.defineProperty(exports, '__esModule', { value: !0 }),
					(exports.default = function resolveRewrites(
						asPath,
						pages,
						rewrites,
						query,
						resolveHref,
						locales,
					) {
						let resolvedHref,
							matchedPage = !1,
							externalDest = !1,
							parsedAs =
								_parseRelativeUrl.parseRelativeUrl(asPath),
							fsPathname =
								_removeTrailingSlash.removeTrailingSlash(
									_normalizeLocalePath.normalizeLocalePath(
										_removeBasePath.removeBasePath(
											parsedAs.pathname,
										),
										locales,
									).pathname,
								)
						const handleRewrite = (rewrite) => {
							let params = _pathMatch.getPathMatch(
								rewrite.source +
									(process.env.__NEXT_TRAILING_SLASH
										? '(/)?'
										: ''),
								{ removeUnnamedParams: !0, strict: !0 },
							)(parsedAs.pathname)
							if (rewrite.has && params) {
								const hasParams = _prepareDestination.matchHas(
									{
										headers: {
											host: document.location.hostname,
										},
										cookies: document.cookie
											.split('; ')
											.reduce((acc, item) => {
												const [key, ...value] =
													item.split('=')
												return (
													(acc[key] =
														value.join('=')),
													acc
												)
											}, {}),
									},
									rewrite.has,
									parsedAs.query,
								)
								hasParams
									? Object.assign(params, hasParams)
									: (params = !1)
							}
							if (params) {
								if (!rewrite.destination)
									return (externalDest = !0), !0
								const destRes =
									_prepareDestination.prepareDestination({
										appendParamsToQuery: !0,
										destination: rewrite.destination,
										params,
										query,
									})
								if (
									((parsedAs = destRes.parsedDestination),
									(asPath = destRes.newUrl),
									Object.assign(
										query,
										destRes.parsedDestination.query,
									),
									(fsPathname =
										_removeTrailingSlash.removeTrailingSlash(
											_normalizeLocalePath.normalizeLocalePath(
												_removeBasePath.removeBasePath(
													asPath,
												),
												locales,
											).pathname,
										)),
									pages.includes(fsPathname))
								)
									return (
										(matchedPage = !0),
										(resolvedHref = fsPathname),
										!0
									)
								if (
									((resolvedHref = resolveHref(fsPathname)),
									resolvedHref !== asPath &&
										pages.includes(resolvedHref))
								)
									return (matchedPage = !0), !0
							}
						}
						let finished = !1
						for (let i = 0; i < rewrites.beforeFiles.length; i++)
							handleRewrite(rewrites.beforeFiles[i])
						if (
							((matchedPage = pages.includes(fsPathname)),
							!matchedPage)
						) {
							if (!finished)
								for (
									let i = 0;
									i < rewrites.afterFiles.length;
									i++
								)
									if (handleRewrite(rewrites.afterFiles[i])) {
										finished = !0
										break
									}
							if (
								(finished ||
									((resolvedHref = resolveHref(fsPathname)),
									(matchedPage =
										pages.includes(resolvedHref)),
									(finished = matchedPage)),
								!finished)
							)
								for (
									let i = 0;
									i < rewrites.fallback.length;
									i++
								)
									if (handleRewrite(rewrites.fallback[i])) {
										finished = !0
										break
									}
						}
						return {
							asPath,
							parsedAs,
							matchedPage,
							resolvedHref,
							externalDest,
						}
					})
				var _pathMatch = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/path-match.js',
					),
					_prepareDestination = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/prepare-destination.js',
					),
					_removeTrailingSlash = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js',
					),
					_normalizeLocalePath = __webpack_require__(
						'./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js',
					),
					_removeBasePath = __webpack_require__(
						'./node_modules/next/dist/client/remove-base-path.js',
					),
					_parseRelativeUrl = __webpack_require__(
						'./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js',
					)
			},
		'./node_modules/next/dist/shared/lib/router/utils/route-matcher.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getRouteMatcher = function getRouteMatcher({
					re,
					groups,
				}) {
					return (pathname) => {
						const routeMatch = re.exec(pathname)
						if (!routeMatch) return !1
						const decode = (param) => {
								try {
									return decodeURIComponent(param)
								} catch (_) {
									throw new _utils.DecodeError(
										'failed to decode param',
									)
								}
							},
							params = {}
						return (
							Object.keys(groups).forEach((slugName) => {
								const g = groups[slugName],
									m = routeMatch[g.pos]
								void 0 !== m &&
									(params[slugName] = ~m.indexOf('/')
										? m
												.split('/')
												.map((entry) => decode(entry))
										: g.repeat
										? [decode(m)]
										: decode(m))
							}),
							params
						)
					}
				})
			var _utils = __webpack_require__(
				'./node_modules/next/dist/shared/lib/utils.js',
			)
		},
		'./node_modules/next/dist/shared/lib/router/utils/route-regex.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getRouteRegex = getRouteRegex),
				(exports.getNamedRouteRegex = function getNamedRouteRegex(
					normalizedRoute,
				) {
					const result = getNamedParametrizedRoute(normalizedRoute)
					return _extends({}, getRouteRegex(normalizedRoute), {
						namedRegex: `^${result.namedParameterizedRoute}(?:/)?$`,
						routeKeys: result.routeKeys,
					})
				}),
				(exports.getMiddlewareRegex = function getMiddlewareRegex(
					normalizedRoute,
					options,
				) {
					const { parameterizedRoute, groups } =
							getParametrizedRoute(normalizedRoute),
						{ catchAll = !0 } = null != options ? options : {}
					if ('/' === parameterizedRoute) {
						return {
							groups: {},
							re: new RegExp(`^/${catchAll ? '.*' : ''}$`),
						}
					}
					return {
						groups,
						re: new RegExp(
							`^${parameterizedRoute}${
								catchAll ? '(?:(/.*)?)' : ''
							}$`,
						),
					}
				}),
				(exports.getNamedMiddlewareRegex =
					function getNamedMiddlewareRegex(normalizedRoute, options) {
						const { parameterizedRoute } =
								getParametrizedRoute(normalizedRoute),
							{ catchAll = !0 } = options
						if ('/' === parameterizedRoute) {
							return { namedRegex: `^/${catchAll ? '.*' : ''}$` }
						}
						const { namedParameterizedRoute } =
							getNamedParametrizedRoute(normalizedRoute)
						return {
							namedRegex: `^${namedParameterizedRoute}${
								catchAll ? '(?:(/.*)?)' : ''
							}$`,
						}
					})
			var _extends = __webpack_require__(
					'./node_modules/@swc/helpers/lib/_extends.js',
				).Z,
				_escapeRegexp = __webpack_require__(
					'./node_modules/next/dist/shared/lib/escape-regexp.js',
				),
				_removeTrailingSlash = __webpack_require__(
					'./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js',
				)
			function getRouteRegex(normalizedRoute) {
				const { parameterizedRoute, groups } =
					getParametrizedRoute(normalizedRoute)
				return {
					re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
					groups,
				}
			}
			function getParametrizedRoute(route) {
				const segments = _removeTrailingSlash
						.removeTrailingSlash(route)
						.slice(1)
						.split('/'),
					groups = {}
				let groupIndex = 1
				return {
					parameterizedRoute: segments
						.map((segment) => {
							if (
								segment.startsWith('[') &&
								segment.endsWith(']')
							) {
								const { key, optional, repeat } =
									parseParameter(segment.slice(1, -1))
								return (
									(groups[key] = {
										pos: groupIndex++,
										repeat,
										optional,
									}),
									repeat
										? optional
											? '(?:/(.+?))?'
											: '/(.+?)'
										: '/([^/]+?)'
								)
							}
							return `/${_escapeRegexp.escapeStringRegexp(
								segment,
							)}`
						})
						.join(''),
					groups,
				}
			}
			function getNamedParametrizedRoute(route) {
				const segments = _removeTrailingSlash
						.removeTrailingSlash(route)
						.slice(1)
						.split('/'),
					getSafeRouteKey = (function buildGetSafeRouteKey() {
						let routeKeyCharCode = 97,
							routeKeyCharLength = 1
						return () => {
							let routeKey = ''
							for (let i = 0; i < routeKeyCharLength; i++)
								(routeKey +=
									String.fromCharCode(routeKeyCharCode)),
									routeKeyCharCode++,
									routeKeyCharCode > 122 &&
										(routeKeyCharLength++,
										(routeKeyCharCode = 97))
							return routeKey
						}
					})(),
					routeKeys = {}
				return {
					namedParameterizedRoute: segments
						.map((segment) => {
							if (
								segment.startsWith('[') &&
								segment.endsWith(']')
							) {
								const { key, optional, repeat } =
									parseParameter(segment.slice(1, -1))
								let cleanedKey = key.replace(/\W/g, ''),
									invalidKey = !1
								return (
									(0 === cleanedKey.length ||
										cleanedKey.length > 30) &&
										(invalidKey = !0),
									isNaN(parseInt(cleanedKey.slice(0, 1))) ||
										(invalidKey = !0),
									invalidKey &&
										(cleanedKey = getSafeRouteKey()),
									(routeKeys[cleanedKey] = key),
									repeat
										? optional
											? `(?:/(?<${cleanedKey}>.+?))?`
											: `/(?<${cleanedKey}>.+?)`
										: `/(?<${cleanedKey}>[^/]+?)`
								)
							}
							return `/${_escapeRegexp.escapeStringRegexp(
								segment,
							)}`
						})
						.join(''),
					routeKeys,
				}
			}
			function parseParameter(param) {
				const optional = param.startsWith('[') && param.endsWith(']')
				optional && (param = param.slice(1, -1))
				const repeat = param.startsWith('...')
				return (
					repeat && (param = param.slice(3)),
					{ key: param, repeat, optional }
				)
			}
		},
		'./node_modules/next/dist/shared/lib/router/utils/sorted-routes.js': (
			__unused_webpack_module,
			exports,
		) => {
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.getSortedRoutes = function getSortedRoutes(
					normalizedPages,
				) {
					const root = new UrlNode()
					return (
						normalizedPages.forEach((pagePath) =>
							root.insert(pagePath),
						),
						root.smoosh()
					)
				})
			class UrlNode {
				insert(urlPath) {
					this._insert(urlPath.split('/').filter(Boolean), [], !1)
				}
				smoosh() {
					return this._smoosh()
				}
				_smoosh(prefix = '/') {
					const childrenPaths = [...this.children.keys()].sort()
					null !== this.slugName &&
						childrenPaths.splice(childrenPaths.indexOf('[]'), 1),
						null !== this.restSlugName &&
							childrenPaths.splice(
								childrenPaths.indexOf('[...]'),
								1,
							),
						null !== this.optionalRestSlugName &&
							childrenPaths.splice(
								childrenPaths.indexOf('[[...]]'),
								1,
							)
					const routes = childrenPaths
						.map((c) =>
							this.children.get(c)._smoosh(`${prefix}${c}/`),
						)
						.reduce((prev, curr) => [...prev, ...curr], [])
					if (
						(null !== this.slugName &&
							routes.push(
								...this.children
									.get('[]')
									._smoosh(`${prefix}[${this.slugName}]/`),
							),
						!this.placeholder)
					) {
						const r = '/' === prefix ? '/' : prefix.slice(0, -1)
						if (null != this.optionalRestSlugName)
							throw new Error(
								`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`,
							)
						routes.unshift(r)
					}
					return (
						null !== this.restSlugName &&
							routes.push(
								...this.children
									.get('[...]')
									._smoosh(
										`${prefix}[...${this.restSlugName}]/`,
									),
							),
						null !== this.optionalRestSlugName &&
							routes.push(
								...this.children
									.get('[[...]]')
									._smoosh(
										`${prefix}[[...${this.optionalRestSlugName}]]/`,
									),
							),
						routes
					)
				}
				_insert(urlPaths, slugNames, isCatchAll) {
					if (0 === urlPaths.length)
						return void (this.placeholder = !1)
					if (isCatchAll)
						throw new Error(
							'Catch-all must be the last part of the URL.',
						)
					let nextSegment = urlPaths[0]
					if (
						nextSegment.startsWith('[') &&
						nextSegment.endsWith(']')
					) {
						let segmentName = nextSegment.slice(1, -1),
							isOptional = !1
						if (
							(segmentName.startsWith('[') &&
								segmentName.endsWith(']') &&
								((segmentName = segmentName.slice(1, -1)),
								(isOptional = !0)),
							segmentName.startsWith('...') &&
								((segmentName = segmentName.substring(3)),
								(isCatchAll = !0)),
							segmentName.startsWith('[') ||
								segmentName.endsWith(']'))
						)
							throw new Error(
								`Segment names may not start or end with extra brackets ('${segmentName}').`,
							)
						if (segmentName.startsWith('.'))
							throw new Error(
								`Segment names may not start with erroneous periods ('${segmentName}').`,
							)
						function handleSlug(previousSlug, nextSlug) {
							if (
								null !== previousSlug &&
								previousSlug !== nextSlug
							)
								throw new Error(
									`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`,
								)
							slugNames.forEach((slug) => {
								if (slug === nextSlug)
									throw new Error(
										`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`,
									)
								if (
									slug.replace(/\W/g, '') ===
									nextSegment.replace(/\W/g, '')
								)
									throw new Error(
										`You cannot have the slug names "${slug}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`,
									)
							}),
								slugNames.push(nextSlug)
						}
						if (isCatchAll)
							if (isOptional) {
								if (null != this.restSlugName)
									throw new Error(
										`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`,
									)
								handleSlug(
									this.optionalRestSlugName,
									segmentName,
								),
									(this.optionalRestSlugName = segmentName),
									(nextSegment = '[[...]]')
							} else {
								if (null != this.optionalRestSlugName)
									throw new Error(
										`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`,
									)
								handleSlug(this.restSlugName, segmentName),
									(this.restSlugName = segmentName),
									(nextSegment = '[...]')
							}
						else {
							if (isOptional)
								throw new Error(
									`Optional route parameters are not yet supported ("${urlPaths[0]}").`,
								)
							handleSlug(this.slugName, segmentName),
								(this.slugName = segmentName),
								(nextSegment = '[]')
						}
					}
					this.children.has(nextSegment) ||
						this.children.set(nextSegment, new UrlNode()),
						this.children
							.get(nextSegment)
							._insert(urlPaths.slice(1), slugNames, isCatchAll)
				}
				constructor() {
					;(this.placeholder = !0),
						(this.children = new Map()),
						(this.slugName = null),
						(this.restSlugName = null),
						(this.optionalRestSlugName = null)
				}
			}
		},
	},
])
