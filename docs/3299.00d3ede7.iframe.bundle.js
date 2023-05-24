/*! For license information please see 3299.00d3ede7.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[3299],
	{
		'./node_modules/@babel/runtime/helpers/arrayLikeToArray.js': (
			module
		) => {
			;(module.exports = function _arrayLikeToArray(arr, len) {
				;(null == len || len > arr.length) && (len = arr.length)
				for (var i = 0, arr2 = new Array(len); i < len; i++)
					arr2[i] = arr[i]
				return arr2
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/arrayWithHoles.js': (module) => {
			;(module.exports = function _arrayWithHoles(arr) {
				if (Array.isArray(arr)) return arr
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/assertThisInitialized.js': (
			module
		) => {
			;(module.exports = function _assertThisInitialized(self) {
				if (void 0 === self)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					)
				return self
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/asyncToGenerator.js': (
			module
		) => {
			function asyncGeneratorStep(
				gen,
				resolve,
				reject,
				_next,
				_throw,
				key,
				arg
			) {
				try {
					var info = gen[key](arg),
						value = info.value
				} catch (error) {
					return void reject(error)
				}
				info.done
					? resolve(value)
					: Promise.resolve(value).then(_next, _throw)
			}
			;(module.exports = function _asyncToGenerator(fn) {
				return function () {
					var self = this,
						args = arguments
					return new Promise(function (resolve, reject) {
						var gen = fn.apply(self, args)
						function _next(value) {
							asyncGeneratorStep(
								gen,
								resolve,
								reject,
								_next,
								_throw,
								'next',
								value
							)
						}
						function _throw(err) {
							asyncGeneratorStep(
								gen,
								resolve,
								reject,
								_next,
								_throw,
								'throw',
								err
							)
						}
						_next(void 0)
					})
				}
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/classCallCheck.js': (module) => {
			;(module.exports = function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor))
					throw new TypeError('Cannot call a class as a function')
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/construct.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var setPrototypeOf = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/setPrototypeOf.js'
				),
				isNativeReflectConstruct = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js'
				)
			function _construct(Parent, args, Class) {
				return (
					isNativeReflectConstruct()
						? ((module.exports = _construct =
								Reflect.construct.bind()),
						  (module.exports.__esModule = !0),
						  (module.exports.default = module.exports))
						: ((module.exports = _construct =
								function _construct(Parent, args, Class) {
									var a = [null]
									a.push.apply(a, args)
									var instance = new (Function.bind.apply(
										Parent,
										a
									))()
									return (
										Class &&
											setPrototypeOf(
												instance,
												Class.prototype
											),
										instance
									)
								}),
						  (module.exports.__esModule = !0),
						  (module.exports.default = module.exports)),
					_construct.apply(null, arguments)
				)
			}
			;(module.exports = _construct),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/createClass.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var toPropertyKey = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/toPropertyKey.js'
			)
			function _defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i]
					;(descriptor.enumerable = descriptor.enumerable || !1),
						(descriptor.configurable = !0),
						'value' in descriptor && (descriptor.writable = !0),
						Object.defineProperty(
							target,
							toPropertyKey(descriptor.key),
							descriptor
						)
				}
			}
			;(module.exports = function _createClass(
				Constructor,
				protoProps,
				staticProps
			) {
				return (
					protoProps &&
						_defineProperties(Constructor.prototype, protoProps),
					staticProps && _defineProperties(Constructor, staticProps),
					Object.defineProperty(Constructor, 'prototype', {
						writable: !1,
					}),
					Constructor
				)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/defineProperty.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var toPropertyKey = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/toPropertyKey.js'
			)
			;(module.exports = function _defineProperty(obj, key, value) {
				return (
					(key = toPropertyKey(key)) in obj
						? Object.defineProperty(obj, key, {
								value,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (obj[key] = value),
					obj
				)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/getPrototypeOf.js': (module) => {
			function _getPrototypeOf(o) {
				return (
					(module.exports = _getPrototypeOf =
						Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function _getPrototypeOf(o) {
									return (
										o.__proto__ || Object.getPrototypeOf(o)
									)
							  }),
					(module.exports.__esModule = !0),
					(module.exports.default = module.exports),
					_getPrototypeOf(o)
				)
			}
			;(module.exports = _getPrototypeOf),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/inherits.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var setPrototypeOf = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/setPrototypeOf.js'
			)
			;(module.exports = function _inherits(subClass, superClass) {
				if ('function' != typeof superClass && null !== superClass)
					throw new TypeError(
						'Super expression must either be null or a function'
					)
				;(subClass.prototype = Object.create(
					superClass && superClass.prototype,
					{
						constructor: {
							value: subClass,
							writable: !0,
							configurable: !0,
						},
					}
				)),
					Object.defineProperty(subClass, 'prototype', {
						writable: !1,
					}),
					superClass && setPrototypeOf(subClass, superClass)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/interopRequireDefault.js': (
			module
		) => {
			;(module.exports = function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj }
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/isNativeFunction.js': (
			module
		) => {
			;(module.exports = function _isNativeFunction(fn) {
				return (
					-1 !== Function.toString.call(fn).indexOf('[native code]')
				)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js': (
			module
		) => {
			;(module.exports = function _isNativeReflectConstruct() {
				if ('undefined' == typeof Reflect || !Reflect.construct)
					return !1
				if (Reflect.construct.sham) return !1
				if ('function' == typeof Proxy) return !0
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					)
				} catch (e) {
					return !1
				}
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js': (
			module
		) => {
			;(module.exports = function _iterableToArrayLimit(arr, i) {
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
						if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
							if (Object(_i) !== _i) return
							_n = !1
						} else
							for (
								;
								!(_n = (_s = _x.call(_i)).done) &&
								(_arr.push(_s.value), _arr.length !== i);
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
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/nonIterableRest.js': (
			module
		) => {
			;(module.exports = function _nonIterableRest() {
				throw new TypeError(
					'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var _typeof = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/typeof.js'
				).default,
				assertThisInitialized = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/assertThisInitialized.js'
				)
			;(module.exports = function _possibleConstructorReturn(self, call) {
				if (
					call &&
					('object' === _typeof(call) || 'function' == typeof call)
				)
					return call
				if (void 0 !== call)
					throw new TypeError(
						'Derived constructors may only return object or undefined'
					)
				return assertThisInitialized(self)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/setPrototypeOf.js': (module) => {
			function _setPrototypeOf(o, p) {
				return (
					(module.exports = _setPrototypeOf =
						Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function _setPrototypeOf(o, p) {
									return (o.__proto__ = p), o
							  }),
					(module.exports.__esModule = !0),
					(module.exports.default = module.exports),
					_setPrototypeOf(o, p)
				)
			}
			;(module.exports = _setPrototypeOf),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/slicedToArray.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var arrayWithHoles = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/arrayWithHoles.js'
				),
				iterableToArrayLimit = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js'
				),
				unsupportedIterableToArray = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js'
				),
				nonIterableRest = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/nonIterableRest.js'
				)
			;(module.exports = function _slicedToArray(arr, i) {
				return (
					arrayWithHoles(arr) ||
					iterableToArrayLimit(arr, i) ||
					unsupportedIterableToArray(arr, i) ||
					nonIterableRest()
				)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/toPrimitive.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var _typeof = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/typeof.js'
			).default
			;(module.exports = function _toPrimitive(input, hint) {
				if ('object' !== _typeof(input) || null === input) return input
				var prim = input[Symbol.toPrimitive]
				if (void 0 !== prim) {
					var res = prim.call(input, hint || 'default')
					if ('object' !== _typeof(res)) return res
					throw new TypeError(
						'@@toPrimitive must return a primitive value.'
					)
				}
				return ('string' === hint ? String : Number)(input)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/toPropertyKey.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var _typeof = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/typeof.js'
				).default,
				toPrimitive = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/toPrimitive.js'
				)
			;(module.exports = function _toPropertyKey(arg) {
				var key = toPrimitive(arg, 'string')
				return 'symbol' === _typeof(key) ? key : String(key)
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var arrayLikeToArray = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/arrayLikeToArray.js'
			)
			;(module.exports = function _unsupportedIterableToArray(o, minLen) {
				if (o) {
					if ('string' == typeof o) return arrayLikeToArray(o, minLen)
					var n = Object.prototype.toString.call(o).slice(8, -1)
					return (
						'Object' === n &&
							o.constructor &&
							(n = o.constructor.name),
						'Map' === n || 'Set' === n
							? Array.from(o)
							: 'Arguments' === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? arrayLikeToArray(o, minLen)
							: void 0
					)
				}
			}),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/@babel/runtime/helpers/wrapNativeSuper.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var getPrototypeOf = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/getPrototypeOf.js'
				),
				setPrototypeOf = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/setPrototypeOf.js'
				),
				isNativeFunction = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/isNativeFunction.js'
				),
				construct = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/construct.js'
				)
			function _wrapNativeSuper(Class) {
				var _cache = 'function' == typeof Map ? new Map() : void 0
				return (
					(module.exports = _wrapNativeSuper =
						function _wrapNativeSuper(Class) {
							if (null === Class || !isNativeFunction(Class))
								return Class
							if ('function' != typeof Class)
								throw new TypeError(
									'Super expression must either be null or a function'
								)
							if (void 0 !== _cache) {
								if (_cache.has(Class)) return _cache.get(Class)
								_cache.set(Class, Wrapper)
							}
							function Wrapper() {
								return construct(
									Class,
									arguments,
									getPrototypeOf(this).constructor
								)
							}
							return (
								(Wrapper.prototype = Object.create(
									Class.prototype,
									{
										constructor: {
											value: Wrapper,
											enumerable: !1,
											writable: !0,
											configurable: !0,
										},
									}
								)),
								setPrototypeOf(Wrapper, Class)
							)
						}),
					(module.exports.__esModule = !0),
					(module.exports.default = module.exports),
					_wrapNativeSuper(Class)
				)
			}
			;(module.exports = _wrapNativeSuper),
				(module.exports.__esModule = !0),
				(module.exports.default = module.exports)
		},
		'./node_modules/next-auth/client/_utils.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var _interopRequireDefault = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/interopRequireDefault.js'
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.BroadcastChannel = function BroadcastChannel() {
					var name =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: 'nextauth.message'
					return {
						receive: function receive(onReceive) {
							var handler = function handler(event) {
								var _event$newValue
								if (event.key === name) {
									var message = JSON.parse(
										null !==
											(_event$newValue =
												event.newValue) &&
											void 0 !== _event$newValue
											? _event$newValue
											: '{}'
									)
									'session' ===
										(null == message
											? void 0
											: message.event) &&
										null != message &&
										message.data &&
										onReceive(message)
								}
							}
							return (
								window.addEventListener('storage', handler),
								function () {
									return window.removeEventListener(
										'storage',
										handler
									)
								}
							)
						},
						post: function post(message) {
							if ('undefined' != typeof window)
								try {
									localStorage.setItem(
										name,
										JSON.stringify(
											_objectSpread(
												_objectSpread({}, message),
												{},
												{ timestamp: now() }
											)
										)
									)
								} catch (_unused) {}
						},
					}
				}),
				(exports.apiBaseUrl = apiBaseUrl),
				(exports.fetchData = function fetchData(_x, _x2, _x3) {
					return _fetchData.apply(this, arguments)
				}),
				(exports.now = now)
			var _regenerator = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/regenerator/index.js'
					)
				),
				_defineProperty2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/defineProperty.js'
					)
				),
				_asyncToGenerator2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/asyncToGenerator.js'
					)
				)
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
						? ownKeys(Object(source), !0).forEach(function (key) {
								;(0,
								_defineProperty2.default)(target, key, source[key])
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
									Object.getOwnPropertyDescriptor(source, key)
								)
						  })
				}
				return target
			}
			function _fetchData() {
				return (
					(_fetchData = (0, _asyncToGenerator2.default)(
						_regenerator.default.mark(function _callee(
							path,
							__NEXTAUTH,
							logger
						) {
							var _ref,
								ctx,
								_ref$req,
								req,
								url,
								_req$headers,
								options,
								res,
								data,
								_args = arguments
							return _regenerator.default.wrap(
								function _callee$(_context) {
									for (;;)
										switch (
											(_context.prev = _context.next)
										) {
											case 0:
												return (
													(ctx = (_ref =
														_args.length > 3 &&
														void 0 !== _args[3]
															? _args[3]
															: {}).ctx),
													(_ref$req = _ref.req),
													(req =
														void 0 === _ref$req
															? null == ctx
																? void 0
																: ctx.req
															: _ref$req),
													(url = ''
														.concat(
															apiBaseUrl(
																__NEXTAUTH
															),
															'/'
														)
														.concat(path)),
													(_context.prev = 2),
													(options = {
														headers: _objectSpread(
															{
																'Content-Type':
																	'application/json',
															},
															null != req &&
																null !==
																	(_req$headers =
																		req.headers) &&
																void 0 !==
																	_req$headers &&
																_req$headers.cookie
																? {
																		cookie: req
																			.headers
																			.cookie,
																  }
																: {}
														),
													}),
													null != req &&
														req.body &&
														((options.body =
															JSON.stringify(
																req.body
															)),
														(options.method =
															'POST')),
													(_context.next = 7),
													fetch(url, options)
												)
											case 7:
												return (
													(res = _context.sent),
													(_context.next = 10),
													res.json()
												)
											case 10:
												if (
													((data = _context.sent),
													res.ok)
												) {
													_context.next = 13
													break
												}
												throw data
											case 13:
												return _context.abrupt(
													'return',
													Object.keys(data).length > 0
														? data
														: null
												)
											case 16:
												return (
													(_context.prev = 16),
													(_context.t0 =
														_context.catch(2)),
													logger.error(
														'CLIENT_FETCH_ERROR',
														{
															error: _context.t0,
															url,
														}
													),
													_context.abrupt(
														'return',
														null
													)
												)
											case 20:
											case 'end':
												return _context.stop()
										}
								},
								_callee,
								null,
								[[2, 16]]
							)
						})
					)),
					_fetchData.apply(this, arguments)
				)
			}
			function apiBaseUrl(__NEXTAUTH) {
				return 'undefined' == typeof window
					? ''
							.concat(__NEXTAUTH.baseUrlServer)
							.concat(__NEXTAUTH.basePathServer)
					: __NEXTAUTH.basePath
			}
			function now() {
				return Math.floor(Date.now() / 1e3)
			}
		},
		'./node_modules/next-auth/core/errors.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var _interopRequireDefault = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/interopRequireDefault.js'
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.UnsupportedStrategy =
					exports.UnknownError =
					exports.OAuthCallbackError =
					exports.MissingSecret =
					exports.MissingAuthorize =
					exports.MissingAdapterMethods =
					exports.MissingAdapter =
					exports.MissingAPIRoute =
					exports.InvalidCallbackUrl =
					exports.AccountNotLinkedError =
						void 0),
				(exports.adapterErrorHandler = function adapterErrorHandler(
					adapter,
					logger
				) {
					if (!adapter) return
					return Object.keys(adapter).reduce(function (acc, name) {
						return (
							(acc[name] = (0, _asyncToGenerator2.default)(
								_regenerator.default.mark(function _callee2() {
									var _len10,
										args,
										_key10,
										method,
										e,
										_args2 = arguments
									return _regenerator.default.wrap(
										function _callee2$(_context2) {
											for (;;)
												switch (
													(_context2.prev =
														_context2.next)
												) {
													case 0:
														for (
															_context2.prev = 0,
																_len10 =
																	_args2.length,
																args =
																	new Array(
																		_len10
																	),
																_key10 = 0;
															_key10 < _len10;
															_key10++
														)
															args[_key10] =
																_args2[_key10]
														return (
															logger.debug(
																'adapter_'.concat(
																	name
																),
																{ args }
															),
															(method =
																adapter[name]),
															(_context2.next = 6),
															method.apply(
																void 0,
																args
															)
														)
													case 6:
														return _context2.abrupt(
															'return',
															_context2.sent
														)
													case 9:
														throw (
															((_context2.prev = 9),
															(_context2.t0 =
																_context2.catch(
																	0
																)),
															logger.error(
																'adapter_error_'.concat(
																	name
																),
																_context2.t0
															),
															((e =
																new UnknownError(
																	_context2.t0
																)).name =
																''.concat(
																	capitalize(
																		name
																	),
																	'Error'
																)),
															e)
														)
													case 15:
													case 'end':
														return _context2.stop()
												}
										},
										_callee2,
										null,
										[[0, 9]]
									)
								})
							)),
							acc
						)
					}, {})
				}),
				(exports.capitalize = capitalize),
				(exports.eventsErrorHandler = function eventsErrorHandler(
					methods,
					logger
				) {
					return Object.keys(methods).reduce(function (acc, name) {
						return (
							(acc[name] = (0, _asyncToGenerator2.default)(
								_regenerator.default.mark(function _callee() {
									var method,
										_args = arguments
									return _regenerator.default.wrap(
										function _callee$(_context) {
											for (;;)
												switch (
													(_context.prev =
														_context.next)
												) {
													case 0:
														return (
															(_context.prev = 0),
															(method =
																methods[name]),
															(_context.next = 4),
															method.apply(
																void 0,
																_args
															)
														)
													case 4:
														return _context.abrupt(
															'return',
															_context.sent
														)
													case 7:
														;(_context.prev = 7),
															(_context.t0 =
																_context.catch(
																	0
																)),
															logger.error(
																''.concat(
																	upperSnake(
																		name
																	),
																	'_EVENT_ERROR'
																),
																_context.t0
															)
													case 10:
													case 'end':
														return _context.stop()
												}
										},
										_callee,
										null,
										[[0, 7]]
									)
								})
							)),
							acc
						)
					}, {})
				}),
				(exports.upperSnake = upperSnake)
			var _regenerator = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/regenerator/index.js'
					)
				),
				_asyncToGenerator2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/asyncToGenerator.js'
					)
				),
				_assertThisInitialized2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/assertThisInitialized.js'
					)
				),
				_defineProperty2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/defineProperty.js'
					)
				),
				_classCallCheck2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/classCallCheck.js'
					)
				),
				_createClass2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/createClass.js'
					)
				),
				_inherits2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/inherits.js'
					)
				),
				_possibleConstructorReturn2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js'
					)
				),
				_getPrototypeOf2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/getPrototypeOf.js'
					)
				)
			function _createSuper(Derived) {
				var hasNativeReflectConstruct =
					(function _isNativeReflectConstruct() {
						if ('undefined' == typeof Reflect || !Reflect.construct)
							return !1
						if (Reflect.construct.sham) return !1
						if ('function' == typeof Proxy) return !0
						try {
							return (
								Boolean.prototype.valueOf.call(
									Reflect.construct(
										Boolean,
										[],
										function () {}
									)
								),
								!0
							)
						} catch (e) {
							return !1
						}
					})()
				return function _createSuperInternal() {
					var result,
						Super = (0, _getPrototypeOf2.default)(Derived)
					if (hasNativeReflectConstruct) {
						var NewTarget = (0, _getPrototypeOf2.default)(
							this
						).constructor
						result = Reflect.construct(Super, arguments, NewTarget)
					} else result = Super.apply(this, arguments)
					return (0, _possibleConstructorReturn2.default)(
						this,
						result
					)
				}
			}
			var UnknownError = (function (_Error) {
				;(0, _inherits2.default)(UnknownError, _Error)
				var _super = _createSuper(UnknownError)
				function UnknownError(error) {
					var _message, _this
					return (
						(0, _classCallCheck2.default)(this, UnknownError),
						((_this = _super.call(
							this,
							null !==
								(_message =
									null == error ? void 0 : error.message) &&
								void 0 !== _message
								? _message
								: error
						)).name = 'UnknownError'),
						(_this.code = error.code),
						error instanceof Error && (_this.stack = error.stack),
						_this
					)
				}
				return (
					(0, _createClass2.default)(UnknownError, [
						{
							key: 'toJSON',
							value: function toJSON() {
								return {
									name: this.name,
									message: this.message,
									stack: this.stack,
								}
							},
						},
					]),
					UnknownError
				)
			})(
				(0,
				_interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/wrapNativeSuper.js'
					)
				).default)(Error)
			)
			exports.UnknownError = UnknownError
			var OAuthCallbackError = (function (_UnknownError) {
				;(0, _inherits2.default)(OAuthCallbackError, _UnknownError)
				var _super2 = _createSuper(OAuthCallbackError)
				function OAuthCallbackError() {
					var _this2
					;(0, _classCallCheck2.default)(this, OAuthCallbackError)
					for (
						var _len = arguments.length,
							args = new Array(_len),
							_key = 0;
						_key < _len;
						_key++
					)
						args[_key] = arguments[_key]
					return (
						(_this2 = _super2.call.apply(
							_super2,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this2),
							'name',
							'OAuthCallbackError'
						),
						_this2
					)
				}
				return (0, _createClass2.default)(OAuthCallbackError)
			})(UnknownError)
			exports.OAuthCallbackError = OAuthCallbackError
			var AccountNotLinkedError = (function (_UnknownError2) {
				;(0, _inherits2.default)(AccountNotLinkedError, _UnknownError2)
				var _super3 = _createSuper(AccountNotLinkedError)
				function AccountNotLinkedError() {
					var _this3
					;(0, _classCallCheck2.default)(this, AccountNotLinkedError)
					for (
						var _len2 = arguments.length,
							args = new Array(_len2),
							_key2 = 0;
						_key2 < _len2;
						_key2++
					)
						args[_key2] = arguments[_key2]
					return (
						(_this3 = _super3.call.apply(
							_super3,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this3),
							'name',
							'AccountNotLinkedError'
						),
						_this3
					)
				}
				return (0, _createClass2.default)(AccountNotLinkedError)
			})(UnknownError)
			exports.AccountNotLinkedError = AccountNotLinkedError
			var MissingAPIRoute = (function (_UnknownError3) {
				;(0, _inherits2.default)(MissingAPIRoute, _UnknownError3)
				var _super4 = _createSuper(MissingAPIRoute)
				function MissingAPIRoute() {
					var _this4
					;(0, _classCallCheck2.default)(this, MissingAPIRoute)
					for (
						var _len3 = arguments.length,
							args = new Array(_len3),
							_key3 = 0;
						_key3 < _len3;
						_key3++
					)
						args[_key3] = arguments[_key3]
					return (
						(_this4 = _super4.call.apply(
							_super4,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this4),
							'name',
							'MissingAPIRouteError'
						),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this4),
							'code',
							'MISSING_NEXTAUTH_API_ROUTE_ERROR'
						),
						_this4
					)
				}
				return (0, _createClass2.default)(MissingAPIRoute)
			})(UnknownError)
			exports.MissingAPIRoute = MissingAPIRoute
			var MissingSecret = (function (_UnknownError4) {
				;(0, _inherits2.default)(MissingSecret, _UnknownError4)
				var _super5 = _createSuper(MissingSecret)
				function MissingSecret() {
					var _this5
					;(0, _classCallCheck2.default)(this, MissingSecret)
					for (
						var _len4 = arguments.length,
							args = new Array(_len4),
							_key4 = 0;
						_key4 < _len4;
						_key4++
					)
						args[_key4] = arguments[_key4]
					return (
						(_this5 = _super5.call.apply(
							_super5,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this5),
							'name',
							'MissingSecretError'
						),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this5),
							'code',
							'NO_SECRET'
						),
						_this5
					)
				}
				return (0, _createClass2.default)(MissingSecret)
			})(UnknownError)
			exports.MissingSecret = MissingSecret
			var MissingAuthorize = (function (_UnknownError5) {
				;(0, _inherits2.default)(MissingAuthorize, _UnknownError5)
				var _super6 = _createSuper(MissingAuthorize)
				function MissingAuthorize() {
					var _this6
					;(0, _classCallCheck2.default)(this, MissingAuthorize)
					for (
						var _len5 = arguments.length,
							args = new Array(_len5),
							_key5 = 0;
						_key5 < _len5;
						_key5++
					)
						args[_key5] = arguments[_key5]
					return (
						(_this6 = _super6.call.apply(
							_super6,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this6),
							'name',
							'MissingAuthorizeError'
						),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this6),
							'code',
							'CALLBACK_CREDENTIALS_HANDLER_ERROR'
						),
						_this6
					)
				}
				return (0, _createClass2.default)(MissingAuthorize)
			})(UnknownError)
			exports.MissingAuthorize = MissingAuthorize
			var MissingAdapter = (function (_UnknownError6) {
				;(0, _inherits2.default)(MissingAdapter, _UnknownError6)
				var _super7 = _createSuper(MissingAdapter)
				function MissingAdapter() {
					var _this7
					;(0, _classCallCheck2.default)(this, MissingAdapter)
					for (
						var _len6 = arguments.length,
							args = new Array(_len6),
							_key6 = 0;
						_key6 < _len6;
						_key6++
					)
						args[_key6] = arguments[_key6]
					return (
						(_this7 = _super7.call.apply(
							_super7,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this7),
							'name',
							'MissingAdapterError'
						),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this7),
							'code',
							'EMAIL_REQUIRES_ADAPTER_ERROR'
						),
						_this7
					)
				}
				return (0, _createClass2.default)(MissingAdapter)
			})(UnknownError)
			exports.MissingAdapter = MissingAdapter
			var MissingAdapterMethods = (function (_UnknownError7) {
				;(0, _inherits2.default)(MissingAdapterMethods, _UnknownError7)
				var _super8 = _createSuper(MissingAdapterMethods)
				function MissingAdapterMethods() {
					var _this8
					;(0, _classCallCheck2.default)(this, MissingAdapterMethods)
					for (
						var _len7 = arguments.length,
							args = new Array(_len7),
							_key7 = 0;
						_key7 < _len7;
						_key7++
					)
						args[_key7] = arguments[_key7]
					return (
						(_this8 = _super8.call.apply(
							_super8,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this8),
							'name',
							'MissingAdapterMethodsError'
						),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this8),
							'code',
							'MISSING_ADAPTER_METHODS_ERROR'
						),
						_this8
					)
				}
				return (0, _createClass2.default)(MissingAdapterMethods)
			})(UnknownError)
			exports.MissingAdapterMethods = MissingAdapterMethods
			var UnsupportedStrategy = (function (_UnknownError8) {
				;(0, _inherits2.default)(UnsupportedStrategy, _UnknownError8)
				var _super9 = _createSuper(UnsupportedStrategy)
				function UnsupportedStrategy() {
					var _this9
					;(0, _classCallCheck2.default)(this, UnsupportedStrategy)
					for (
						var _len8 = arguments.length,
							args = new Array(_len8),
							_key8 = 0;
						_key8 < _len8;
						_key8++
					)
						args[_key8] = arguments[_key8]
					return (
						(_this9 = _super9.call.apply(
							_super9,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this9),
							'name',
							'UnsupportedStrategyError'
						),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this9),
							'code',
							'CALLBACK_CREDENTIALS_JWT_ERROR'
						),
						_this9
					)
				}
				return (0, _createClass2.default)(UnsupportedStrategy)
			})(UnknownError)
			exports.UnsupportedStrategy = UnsupportedStrategy
			var InvalidCallbackUrl = (function (_UnknownError9) {
				;(0, _inherits2.default)(InvalidCallbackUrl, _UnknownError9)
				var _super10 = _createSuper(InvalidCallbackUrl)
				function InvalidCallbackUrl() {
					var _this10
					;(0, _classCallCheck2.default)(this, InvalidCallbackUrl)
					for (
						var _len9 = arguments.length,
							args = new Array(_len9),
							_key9 = 0;
						_key9 < _len9;
						_key9++
					)
						args[_key9] = arguments[_key9]
					return (
						(_this10 = _super10.call.apply(
							_super10,
							[this].concat(args)
						)),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this10),
							'name',
							'InvalidCallbackUrl'
						),
						(0, _defineProperty2.default)(
							(0, _assertThisInitialized2.default)(_this10),
							'code',
							'INVALID_CALLBACK_URL_ERROR'
						),
						_this10
					)
				}
				return (0, _createClass2.default)(InvalidCallbackUrl)
			})(UnknownError)
			function upperSnake(s) {
				return s.replace(/([A-Z])/g, '_$1').toUpperCase()
			}
			function capitalize(s) {
				return ''.concat(s[0].toUpperCase()).concat(s.slice(1))
			}
			exports.InvalidCallbackUrl = InvalidCallbackUrl
		},
		'./node_modules/next-auth/react/index.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var process = __webpack_require__(
					'./node_modules/process/browser.js'
				),
				_interopRequireDefault = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/interopRequireDefault.js'
				),
				_typeof = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/typeof.js'
				)
			Object.defineProperty(exports, '__esModule', { value: !0 })
			var _exportNames = {
				SessionContext: !0,
				useSession: !0,
				getSession: !0,
				getCsrfToken: !0,
				getProviders: !0,
				signIn: !0,
				signOut: !0,
				SessionProvider: !0,
			}
			;(exports.SessionContext = void 0),
				(exports.SessionProvider = function SessionProvider(props) {
					if (!SessionContext)
						throw new Error(
							'React Context is unavailable in Server Components'
						)
					var children = props.children,
						basePath = props.basePath,
						refetchInterval = props.refetchInterval,
						refetchWhenOffline = props.refetchWhenOffline
					basePath && (__NEXTAUTH.basePath = basePath)
					var hasInitialSession = void 0 !== props.session
					__NEXTAUTH._lastSync = hasInitialSession
						? (0, _utils.now)()
						: 0
					var _React$useState3 = React.useState(function () {
							return (
								hasInitialSession &&
									(__NEXTAUTH._session = props.session),
								props.session
							)
						}),
						_React$useState4 = (0, _slicedToArray2.default)(
							_React$useState3,
							2
						),
						session = _React$useState4[0],
						setSession = _React$useState4[1],
						_React$useState5 = React.useState(!hasInitialSession),
						_React$useState6 = (0, _slicedToArray2.default)(
							_React$useState5,
							2
						),
						loading = _React$useState6[0],
						setLoading = _React$useState6[1]
					React.useEffect(function () {
						return (
							(__NEXTAUTH._getSession = (0,
							_asyncToGenerator2.default)(
								_regenerator.default.mark(function _callee() {
									var event,
										storageEvent,
										_args = arguments
									return _regenerator.default.wrap(
										function _callee$(_context) {
											for (;;)
												switch (
													(_context.prev =
														_context.next)
												) {
													case 0:
														if (
															((event = (
																_args.length >
																	0 &&
																void 0 !==
																	_args[0]
																	? _args[0]
																	: {}
															).event),
															(_context.prev = 1),
															!(storageEvent =
																'storage' ===
																event) &&
																void 0 !==
																	__NEXTAUTH._session)
														) {
															_context.next = 10
															break
														}
														return (
															(__NEXTAUTH._lastSync =
																(0,
																_utils.now)()),
															(_context.next = 7),
															getSession({
																broadcast:
																	!storageEvent,
															})
														)
													case 7:
														return (
															(__NEXTAUTH._session =
																_context.sent),
															setSession(
																__NEXTAUTH._session
															),
															_context.abrupt(
																'return'
															)
														)
													case 10:
														if (
															event &&
															null !==
																__NEXTAUTH._session &&
															!(
																(0,
																_utils.now)() <
																__NEXTAUTH._lastSync
															)
														) {
															_context.next = 12
															break
														}
														return _context.abrupt(
															'return'
														)
													case 12:
														return (
															(__NEXTAUTH._lastSync =
																(0,
																_utils.now)()),
															(_context.next = 15),
															getSession()
														)
													case 15:
														;(__NEXTAUTH._session =
															_context.sent),
															setSession(
																__NEXTAUTH._session
															),
															(_context.next = 22)
														break
													case 19:
														;(_context.prev = 19),
															(_context.t0 =
																_context.catch(
																	1
																)),
															logger.error(
																'CLIENT_SESSION_ERROR',
																_context.t0
															)
													case 22:
														return (
															(_context.prev = 22),
															setLoading(!1),
															_context.finish(22)
														)
													case 25:
													case 'end':
														return _context.stop()
												}
										},
										_callee,
										null,
										[[1, 19, 22, 25]]
									)
								})
							)),
							__NEXTAUTH._getSession(),
							function () {
								;(__NEXTAUTH._lastSync = 0),
									(__NEXTAUTH._session = void 0),
									(__NEXTAUTH._getSession = function () {})
							}
						)
					}, []),
						React.useEffect(function () {
							var unsubscribe = broadcast.receive(function () {
								return __NEXTAUTH._getSession({
									event: 'storage',
								})
							})
							return function () {
								return unsubscribe()
							}
						}, []),
						React.useEffect(
							function () {
								var _props$refetchOnWindo =
										props.refetchOnWindowFocus,
									refetchOnWindowFocus =
										void 0 === _props$refetchOnWindo ||
										_props$refetchOnWindo,
									visibilityHandler =
										function visibilityHandler() {
											refetchOnWindowFocus &&
												'visible' ===
													document.visibilityState &&
												__NEXTAUTH._getSession({
													event: 'visibilitychange',
												})
										}
								return (
									document.addEventListener(
										'visibilitychange',
										visibilityHandler,
										!1
									),
									function () {
										return document.removeEventListener(
											'visibilitychange',
											visibilityHandler,
											!1
										)
									}
								)
							},
							[props.refetchOnWindowFocus]
						)
					var isOnline = (function useOnline() {
							var _React$useState = React.useState(
									'undefined' != typeof navigator &&
										navigator.onLine
								),
								_React$useState2 = (0, _slicedToArray2.default)(
									_React$useState,
									2
								),
								isOnline = _React$useState2[0],
								setIsOnline = _React$useState2[1],
								setOnline = function setOnline() {
									return setIsOnline(!0)
								},
								setOffline = function setOffline() {
									return setIsOnline(!1)
								}
							return (
								React.useEffect(function () {
									return (
										window.addEventListener(
											'online',
											setOnline
										),
										window.addEventListener(
											'offline',
											setOffline
										),
										function () {
											window.removeEventListener(
												'online',
												setOnline
											),
												window.removeEventListener(
													'offline',
													setOffline
												)
										}
									)
								}, []),
								isOnline
							)
						})(),
						shouldRefetch = !1 !== refetchWhenOffline || isOnline
					React.useEffect(
						function () {
							if (refetchInterval && shouldRefetch) {
								var refetchIntervalTimer = setInterval(
									function () {
										__NEXTAUTH._session &&
											__NEXTAUTH._getSession({
												event: 'poll',
											})
									},
									1e3 * refetchInterval
								)
								return function () {
									return clearInterval(refetchIntervalTimer)
								}
							}
						},
						[refetchInterval, shouldRefetch]
					)
					var value = React.useMemo(
						function () {
							return {
								data: session,
								status: loading
									? 'loading'
									: session
									? 'authenticated'
									: 'unauthenticated',
								update: function update(data) {
									return (0, _asyncToGenerator2.default)(
										_regenerator.default.mark(
											function _callee2() {
												var newSession
												return _regenerator.default.wrap(
													function _callee2$(
														_context2
													) {
														for (;;)
															switch (
																(_context2.prev =
																	_context2.next)
															) {
																case 0:
																	if (
																		!loading &&
																		session
																	) {
																		_context2.next = 2
																		break
																	}
																	return _context2.abrupt(
																		'return'
																	)
																case 2:
																	return (
																		setLoading(
																			!0
																		),
																		(_context2.t0 =
																			_utils.fetchData),
																		(_context2.t1 =
																			__NEXTAUTH),
																		(_context2.t2 =
																			logger),
																		(_context2.next = 8),
																		getCsrfToken()
																	)
																case 8:
																	return (
																		(_context2.t3 =
																			_context2.sent),
																		(_context2.t4 =
																			data),
																		(_context2.t5 =
																			{
																				csrfToken:
																					_context2.t3,
																				data: _context2.t4,
																			}),
																		(_context2.t6 =
																			{
																				body: _context2.t5,
																			}),
																		(_context2.t7 =
																			{
																				req: _context2.t6,
																			}),
																		(_context2.next = 15),
																		(0,
																		_context2.t0)(
																			'session',
																			_context2.t1,
																			_context2.t2,
																			_context2.t7
																		)
																	)
																case 15:
																	return (
																		(newSession =
																			_context2.sent),
																		setLoading(
																			!1
																		),
																		newSession &&
																			(setSession(
																				newSession
																			),
																			broadcast.post(
																				{
																					event: 'session',
																					data: {
																						trigger:
																							'getSession',
																					},
																				}
																			)),
																		_context2.abrupt(
																			'return',
																			newSession
																		)
																	)
																case 19:
																case 'end':
																	return _context2.stop()
															}
													},
													_callee2
												)
											}
										)
									)()
								},
							}
						},
						[session, loading]
					)
					return (0, _jsxRuntime.jsx)(SessionContext.Provider, {
						value,
						children,
					})
				}),
				(exports.getCsrfToken = getCsrfToken),
				(exports.getProviders = getProviders),
				(exports.getSession = getSession),
				(exports.signIn = function signIn(_x3, _x4, _x5) {
					return _signIn.apply(this, arguments)
				}),
				(exports.signOut = function signOut(_x6) {
					return _signOut.apply(this, arguments)
				}),
				(exports.useSession = function useSession(options) {
					if (!SessionContext)
						throw new Error(
							'React Context is unavailable in Server Components'
						)
					var value = React.useContext(SessionContext)
					0
					var _ref2 = null != options ? options : {},
						required = _ref2.required,
						onUnauthenticated = _ref2.onUnauthenticated,
						requiredAndNotLoading =
							required && 'unauthenticated' === value.status
					if (
						(React.useEffect(
							function () {
								if (requiredAndNotLoading) {
									var url = '/api/auth/signin?'.concat(
										new URLSearchParams({
											error: 'SessionRequired',
											callbackUrl: window.location.href,
										})
									)
									onUnauthenticated
										? onUnauthenticated()
										: (window.location.href = url)
								}
							},
							[requiredAndNotLoading, onUnauthenticated]
						),
						requiredAndNotLoading)
					)
						return {
							data: value.data,
							update: value.update,
							status: 'loading',
						}
					return value
				})
			var _process$env$NEXTAUTH,
				_ref,
				_process$env$NEXTAUTH2,
				_process$env$NEXTAUTH3,
				_React$createContext,
				_regenerator = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/regenerator/index.js'
					)
				),
				_defineProperty2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/defineProperty.js'
					)
				),
				_asyncToGenerator2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/asyncToGenerator.js'
					)
				),
				_slicedToArray2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/slicedToArray.js'
					)
				),
				React = _interopRequireWildcard(
					__webpack_require__('./node_modules/react/index.js')
				),
				_logger2 = _interopRequireWildcard(
					__webpack_require__(
						'./node_modules/next-auth/utils/logger.js'
					)
				),
				_parseUrl = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/next-auth/utils/parse-url.js'
					)
				),
				_utils = __webpack_require__(
					'./node_modules/next-auth/client/_utils.js'
				),
				_jsxRuntime = __webpack_require__(
					'./node_modules/react/jsx-runtime.js'
				),
				_types = __webpack_require__(
					'./node_modules/next-auth/react/types.js'
				)
			function _getRequireWildcardCache(nodeInterop) {
				if ('function' != typeof WeakMap) return null
				var cacheBabelInterop = new WeakMap(),
					cacheNodeInterop = new WeakMap()
				return (_getRequireWildcardCache =
					function _getRequireWildcardCache(nodeInterop) {
						return nodeInterop
							? cacheNodeInterop
							: cacheBabelInterop
					})(nodeInterop)
			}
			function _interopRequireWildcard(obj, nodeInterop) {
				if (!nodeInterop && obj && obj.__esModule) return obj
				if (
					null === obj ||
					('object' !== _typeof(obj) && 'function' != typeof obj)
				)
					return { default: obj }
				var cache = _getRequireWildcardCache(nodeInterop)
				if (cache && cache.has(obj)) return cache.get(obj)
				var newObj = {},
					hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor
				for (var key in obj)
					if (
						'default' !== key &&
						Object.prototype.hasOwnProperty.call(obj, key)
					) {
						var desc = hasPropertyDescriptor
							? Object.getOwnPropertyDescriptor(obj, key)
							: null
						desc && (desc.get || desc.set)
							? Object.defineProperty(newObj, key, desc)
							: (newObj[key] = obj[key])
					}
				return (
					(newObj.default = obj),
					cache && cache.set(obj, newObj),
					newObj
				)
			}
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
						? ownKeys(Object(source), !0).forEach(function (key) {
								;(0,
								_defineProperty2.default)(target, key, source[key])
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
									Object.getOwnPropertyDescriptor(source, key)
								)
						  })
				}
				return target
			}
			Object.keys(_types).forEach(function (key) {
				'default' !== key &&
					'__esModule' !== key &&
					(Object.prototype.hasOwnProperty.call(_exportNames, key) ||
						(key in exports && exports[key] === _types[key]) ||
						Object.defineProperty(exports, key, {
							enumerable: !0,
							get: function get() {
								return _types[key]
							},
						}))
			})
			var __NEXTAUTH = {
					baseUrl: (0, _parseUrl.default)(
						null !==
							(_process$env$NEXTAUTH =
								process.env.NEXTAUTH_URL) &&
							void 0 !== _process$env$NEXTAUTH
							? _process$env$NEXTAUTH
							: process.env.VERCEL_URL
					).origin,
					basePath: (0, _parseUrl.default)(process.env.NEXTAUTH_URL)
						.path,
					baseUrlServer: (0, _parseUrl.default)(
						null !==
							(_ref =
								null !==
									(_process$env$NEXTAUTH2 =
										process.env.NEXTAUTH_URL_INTERNAL) &&
								void 0 !== _process$env$NEXTAUTH2
									? _process$env$NEXTAUTH2
									: process.env.NEXTAUTH_URL) &&
							void 0 !== _ref
							? _ref
							: process.env.VERCEL_URL
					).origin,
					basePathServer: (0, _parseUrl.default)(
						null !==
							(_process$env$NEXTAUTH3 =
								process.env.NEXTAUTH_URL_INTERNAL) &&
							void 0 !== _process$env$NEXTAUTH3
							? _process$env$NEXTAUTH3
							: process.env.NEXTAUTH_URL
					).path,
					_lastSync: 0,
					_session: void 0,
					_getSession: function _getSession() {},
				},
				broadcast = (0, _utils.BroadcastChannel)(),
				logger = (0, _logger2.proxyLogger)(
					_logger2.default,
					__NEXTAUTH.basePath
				)
			var SessionContext =
				null === (_React$createContext = React.createContext) ||
				void 0 === _React$createContext
					? void 0
					: _React$createContext.call(React, void 0)
			function getSession(_x) {
				return _getSession2.apply(this, arguments)
			}
			function _getSession2() {
				return (_getSession2 = (0, _asyncToGenerator2.default)(
					_regenerator.default.mark(function _callee3(params) {
						var _params$broadcast, session
						return _regenerator.default.wrap(function _callee3$(
							_context3
						) {
							for (;;)
								switch ((_context3.prev = _context3.next)) {
									case 0:
										return (
											(_context3.next = 2),
											(0, _utils.fetchData)(
												'session',
												__NEXTAUTH,
												logger,
												params
											)
										)
									case 2:
										return (
											(session = _context3.sent),
											(null ===
												(_params$broadcast =
													null == params
														? void 0
														: params.broadcast) ||
												void 0 === _params$broadcast ||
												_params$broadcast) &&
												broadcast.post({
													event: 'session',
													data: {
														trigger: 'getSession',
													},
												}),
											_context3.abrupt('return', session)
										)
									case 5:
									case 'end':
										return _context3.stop()
								}
						},
						_callee3)
					})
				)).apply(this, arguments)
			}
			function getCsrfToken(_x2) {
				return _getCsrfToken.apply(this, arguments)
			}
			function _getCsrfToken() {
				return (_getCsrfToken = (0, _asyncToGenerator2.default)(
					_regenerator.default.mark(function _callee4(params) {
						var response
						return _regenerator.default.wrap(function _callee4$(
							_context4
						) {
							for (;;)
								switch ((_context4.prev = _context4.next)) {
									case 0:
										return (
											(_context4.next = 2),
											(0, _utils.fetchData)(
												'csrf',
												__NEXTAUTH,
												logger,
												params
											)
										)
									case 2:
										return (
											(response = _context4.sent),
											_context4.abrupt(
												'return',
												null == response
													? void 0
													: response.csrfToken
											)
										)
									case 4:
									case 'end':
										return _context4.stop()
								}
						},
						_callee4)
					})
				)).apply(this, arguments)
			}
			function getProviders() {
				return _getProviders.apply(this, arguments)
			}
			function _getProviders() {
				return (_getProviders = (0, _asyncToGenerator2.default)(
					_regenerator.default.mark(function _callee5() {
						return _regenerator.default.wrap(function _callee5$(
							_context5
						) {
							for (;;)
								switch ((_context5.prev = _context5.next)) {
									case 0:
										return (
											(_context5.next = 2),
											(0, _utils.fetchData)(
												'providers',
												__NEXTAUTH,
												logger
											)
										)
									case 2:
										return _context5.abrupt(
											'return',
											_context5.sent
										)
									case 3:
									case 'end':
										return _context5.stop()
								}
						},
						_callee5)
					})
				)).apply(this, arguments)
			}
			function _signIn() {
				return (_signIn = (0, _asyncToGenerator2.default)(
					_regenerator.default.mark(function _callee6(
						provider,
						options,
						authorizationParams
					) {
						var _ref5,
							_ref5$callbackUrl,
							callbackUrl,
							_ref5$redirect,
							redirect,
							baseUrl,
							providers,
							isCredentials,
							isEmail,
							isSupportingReturn,
							signInUrl,
							_signInUrl,
							res,
							data,
							_data$url,
							url,
							error
						return _regenerator.default.wrap(function _callee6$(
							_context6
						) {
							for (;;)
								switch ((_context6.prev = _context6.next)) {
									case 0:
										return (
											(_ref5$callbackUrl = (_ref5 =
												null != options ? options : {})
												.callbackUrl),
											(callbackUrl =
												void 0 === _ref5$callbackUrl
													? window.location.href
													: _ref5$callbackUrl),
											(_ref5$redirect = _ref5.redirect),
											(redirect =
												void 0 === _ref5$redirect ||
												_ref5$redirect),
											(baseUrl = (0, _utils.apiBaseUrl)(
												__NEXTAUTH
											)),
											(_context6.next = 4),
											getProviders()
										)
									case 4:
										if ((providers = _context6.sent)) {
											_context6.next = 8
											break
										}
										return (
											(window.location.href = ''.concat(
												baseUrl,
												'/error'
											)),
											_context6.abrupt('return')
										)
									case 8:
										if (provider && provider in providers) {
											_context6.next = 11
											break
										}
										return (
											(window.location.href = ''
												.concat(baseUrl, '/signin?')
												.concat(
													new URLSearchParams({
														callbackUrl,
													})
												)),
											_context6.abrupt('return')
										)
									case 11:
										return (
											(isCredentials =
												'credentials' ===
												providers[provider].type),
											(isEmail =
												'email' ===
												providers[provider].type),
											(isSupportingReturn =
												isCredentials || isEmail),
											(signInUrl = ''
												.concat(baseUrl, '/')
												.concat(
													isCredentials
														? 'callback'
														: 'signin',
													'/'
												)
												.concat(provider)),
											(_signInUrl = ''
												.concat(signInUrl, '?')
												.concat(
													new URLSearchParams(
														authorizationParams
													)
												)),
											(_context6.t0 = fetch),
											(_context6.t1 = _signInUrl),
											(_context6.t2 = {
												'Content-Type':
													'application/x-www-form-urlencoded',
											}),
											(_context6.t3 = URLSearchParams),
											(_context6.t4 = _objectSpread),
											(_context6.t5 = _objectSpread(
												{},
												options
											)),
											(_context6.t6 = {}),
											(_context6.next = 25),
											getCsrfToken()
										)
									case 25:
										return (
											(_context6.t7 = _context6.sent),
											(_context6.t8 = callbackUrl),
											(_context6.t9 = {
												csrfToken: _context6.t7,
												callbackUrl: _context6.t8,
												json: !0,
											}),
											(_context6.t10 = (0, _context6.t4)(
												_context6.t5,
												_context6.t6,
												_context6.t9
											)),
											(_context6.t11 = new _context6.t3(
												_context6.t10
											)),
											(_context6.t12 = {
												method: 'post',
												headers: _context6.t2,
												body: _context6.t11,
											}),
											(_context6.next = 33),
											(0, _context6.t0)(
												_context6.t1,
												_context6.t12
											)
										)
									case 33:
										return (
											(res = _context6.sent),
											(_context6.next = 36),
											res.json()
										)
									case 36:
										if (
											((data = _context6.sent),
											!redirect && isSupportingReturn)
										) {
											_context6.next = 42
											break
										}
										return (
											(url =
												null !==
													(_data$url = data.url) &&
												void 0 !== _data$url
													? _data$url
													: callbackUrl),
											(window.location.href = url),
											url.includes('#') &&
												window.location.reload(),
											_context6.abrupt('return')
										)
									case 42:
										if (
											((error = new URL(
												data.url
											).searchParams.get('error')),
											!res.ok)
										) {
											_context6.next = 46
											break
										}
										return (
											(_context6.next = 46),
											__NEXTAUTH._getSession({
												event: 'storage',
											})
										)
									case 46:
										return _context6.abrupt('return', {
											error,
											status: res.status,
											ok: res.ok,
											url: error ? null : data.url,
										})
									case 47:
									case 'end':
										return _context6.stop()
								}
						},
						_callee6)
					})
				)).apply(this, arguments)
			}
			function _signOut() {
				return (_signOut = (0, _asyncToGenerator2.default)(
					_regenerator.default.mark(function _callee7(options) {
						var _options$redirect,
							_ref6$callbackUrl,
							callbackUrl,
							baseUrl,
							fetchOptions,
							res,
							data,
							_data$url2,
							url
						return _regenerator.default.wrap(function _callee7$(
							_context7
						) {
							for (;;)
								switch ((_context7.prev = _context7.next)) {
									case 0:
										return (
											(_ref6$callbackUrl = (
												null != options ? options : {}
											).callbackUrl),
											(callbackUrl =
												void 0 === _ref6$callbackUrl
													? window.location.href
													: _ref6$callbackUrl),
											(baseUrl = (0, _utils.apiBaseUrl)(
												__NEXTAUTH
											)),
											(_context7.t0 = {
												'Content-Type':
													'application/x-www-form-urlencoded',
											}),
											(_context7.t1 = URLSearchParams),
											(_context7.next = 6),
											getCsrfToken()
										)
									case 6:
										return (
											(_context7.t2 = _context7.sent),
											(_context7.t3 = callbackUrl),
											(_context7.t4 = {
												csrfToken: _context7.t2,
												callbackUrl: _context7.t3,
												json: !0,
											}),
											(_context7.t5 = new _context7.t1(
												_context7.t4
											)),
											(fetchOptions = {
												method: 'post',
												headers: _context7.t0,
												body: _context7.t5,
											}),
											(_context7.next = 13),
											fetch(
												''.concat(baseUrl, '/signout'),
												fetchOptions
											)
										)
									case 13:
										return (
											(res = _context7.sent),
											(_context7.next = 16),
											res.json()
										)
									case 16:
										if (
											((data = _context7.sent),
											broadcast.post({
												event: 'session',
												data: { trigger: 'signout' },
											}),
											null !==
												(_options$redirect =
													null == options
														? void 0
														: options.redirect) &&
												void 0 !== _options$redirect &&
												!_options$redirect)
										) {
											_context7.next = 23
											break
										}
										return (
											(url =
												null !==
													(_data$url2 = data.url) &&
												void 0 !== _data$url2
													? _data$url2
													: callbackUrl),
											(window.location.href = url),
											url.includes('#') &&
												window.location.reload(),
											_context7.abrupt('return')
										)
									case 23:
										return (
											(_context7.next = 25),
											__NEXTAUTH._getSession({
												event: 'storage',
											})
										)
									case 25:
										return _context7.abrupt('return', data)
									case 26:
									case 'end':
										return _context7.stop()
								}
						},
						_callee7)
					})
				)).apply(this, arguments)
			}
			exports.SessionContext = SessionContext
		},
		'./node_modules/next-auth/react/types.js': (
			__unused_webpack_module,
			exports
		) => {
			'use strict'
			Object.defineProperty(exports, '__esModule', { value: !0 })
		},
		'./node_modules/next-auth/utils/logger.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var _interopRequireDefault = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/interopRequireDefault.js'
			)
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = void 0),
				(exports.proxyLogger = function proxyLogger() {
					var logger =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: _logger,
						basePath = arguments.length > 1 ? arguments[1] : void 0
					try {
						if ('undefined' == typeof window) return logger
						var clientLogger = {},
							_loop = function _loop(level) {
								clientLogger[level] = function (
									code,
									metadata
								) {
									_logger[level](code, metadata),
										'error' === level &&
											(metadata = formatError(metadata)),
										(metadata.client = !0)
									var url = ''.concat(basePath, '/_log'),
										body = new URLSearchParams(
											(function _objectSpread(target) {
												for (
													var i = 1;
													i < arguments.length;
													i++
												) {
													var source =
														null != arguments[i]
															? arguments[i]
															: {}
													i % 2
														? ownKeys(
																Object(source),
																!0
														  ).forEach(function (
																key
														  ) {
																;(0,
																_defineProperty2.default)(
																	target,
																	key,
																	source[key]
																)
														  })
														: Object.getOwnPropertyDescriptors
														? Object.defineProperties(
																target,
																Object.getOwnPropertyDescriptors(
																	source
																)
														  )
														: ownKeys(
																Object(source)
														  ).forEach(function (
																key
														  ) {
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
											})({ level, code }, metadata)
										)
									return navigator.sendBeacon
										? navigator.sendBeacon(url, body)
										: fetch(url, {
												method: 'POST',
												body,
												keepalive: !0,
										  })
								}
							}
						for (var level in logger) _loop(level)
						return clientLogger
					} catch (_unused) {
						return _logger
					}
				}),
				(exports.setLogger = function setLogger() {
					var newLogger =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {}
					;(arguments.length > 1 ? arguments[1] : void 0) ||
						(_logger.debug = function () {})
					newLogger.error && (_logger.error = newLogger.error)
					newLogger.warn && (_logger.warn = newLogger.warn)
					newLogger.debug && (_logger.debug = newLogger.debug)
				})
			var _defineProperty2 = _interopRequireDefault(
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/defineProperty.js'
					)
				),
				_errors = __webpack_require__(
					'./node_modules/next-auth/core/errors.js'
				)
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
			function formatError(o) {
				if (o instanceof Error && !(o instanceof _errors.UnknownError))
					return { message: o.message, stack: o.stack, name: o.name }
				var _o$message
				;(function hasErrorProperty(x) {
					return !(null == x || !x.error)
				})(o) &&
					((o.error = formatError(o.error)),
					(o.message =
						null !== (_o$message = o.message) &&
						void 0 !== _o$message
							? _o$message
							: o.error.message))
				return o
			}
			var _logger = {
				error: function error(code, metadata) {
					;(metadata = formatError(metadata)),
						console.error(
							'[next-auth][error]['.concat(code, ']'),
							'\nhttps://next-auth.js.org/errors#'.concat(
								code.toLowerCase()
							),
							metadata.message,
							metadata
						)
				},
				warn: function warn(code) {
					console.warn(
						'[next-auth][warn]['.concat(code, ']'),
						'\nhttps://next-auth.js.org/warnings#'.concat(
							code.toLowerCase()
						)
					)
				},
				debug: function debug(code, metadata) {
					console.log(
						'[next-auth][debug]['.concat(code, ']'),
						metadata
					)
				},
			}
			var _default = _logger
			exports.default = _default
		},
		'./node_modules/next-auth/utils/parse-url.js': (
			__unused_webpack_module,
			exports
		) => {
			'use strict'
			Object.defineProperty(exports, '__esModule', { value: !0 }),
				(exports.default = function parseUrl(url) {
					var _url2
					const defaultUrl = new URL('http://localhost:3000/api/auth')
					url && !url.startsWith('http') && (url = `https://${url}`)
					const _url = new URL(
							null !== (_url2 = url) && void 0 !== _url2
								? _url2
								: defaultUrl
						),
						path = (
							'/' === _url.pathname
								? defaultUrl.pathname
								: _url.pathname
						).replace(/\/$/, ''),
						base = `${_url.origin}${path}`
					return {
						origin: _url.origin,
						host: _url.host,
						path,
						base,
						toString: () => base,
					}
				})
		},
		'./node_modules/react/cjs/react-jsx-runtime.production.min.js': (
			__unused_webpack_module,
			exports,
			__webpack_require__
		) => {
			'use strict'
			var f = __webpack_require__('./node_modules/react/index.js'),
				k = Symbol.for('react.element'),
				l = Symbol.for('react.fragment'),
				m = Object.prototype.hasOwnProperty,
				n =
					f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
						.ReactCurrentOwner,
				p = { key: !0, ref: !0, __self: !0, __source: !0 }
			function q(c, a, g) {
				var b,
					d = {},
					e = null,
					h = null
				for (b in (void 0 !== g && (e = '' + g),
				void 0 !== a.key && (e = '' + a.key),
				void 0 !== a.ref && (h = a.ref),
				a))
					m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b])
				if (c && c.defaultProps)
					for (b in (a = c.defaultProps))
						void 0 === d[b] && (d[b] = a[b])
				return {
					$$typeof: k,
					type: c,
					key: e,
					ref: h,
					props: d,
					_owner: n.current,
				}
			}
			;(exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q)
		},
		'./node_modules/react/jsx-runtime.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			'use strict'
			module.exports = __webpack_require__(
				'./node_modules/react/cjs/react-jsx-runtime.production.min.js'
			)
		},
	},
])
