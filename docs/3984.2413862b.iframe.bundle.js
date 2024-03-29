/*! For license information please see 3984.2413862b.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[3984],
	{
		'./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			function _taggedTemplateLiteral(strings, raw) {
				return (
					raw || (raw = strings.slice(0)),
					Object.freeze(
						Object.defineProperties(strings, {
							raw: { value: Object.freeze(raw) },
						}),
					)
				)
			}
			__webpack_require__.d(__webpack_exports__, {
				Z: () => _taggedTemplateLiteral,
			})
		},
		'./node_modules/cross-fetch/dist/browser-ponyfill.js': function (
			module,
			exports,
		) {
			var global = 'undefined' != typeof self ? self : this,
				__self__ = (function () {
					function F() {
						;(this.fetch = !1),
							(this.DOMException = global.DOMException)
					}
					return (F.prototype = global), new F()
				})()
			!(function (self) {
				!(function (exports) {
					var support = {
						searchParams: 'URLSearchParams' in self,
						iterable: 'Symbol' in self && 'iterator' in Symbol,
						blob:
							'FileReader' in self &&
							'Blob' in self &&
							(function () {
								try {
									return new Blob(), !0
								} catch (e) {
									return !1
								}
							})(),
						formData: 'FormData' in self,
						arrayBuffer: 'ArrayBuffer' in self,
					}
					if (support.arrayBuffer)
						var viewClasses = [
								'[object Int8Array]',
								'[object Uint8Array]',
								'[object Uint8ClampedArray]',
								'[object Int16Array]',
								'[object Uint16Array]',
								'[object Int32Array]',
								'[object Uint32Array]',
								'[object Float32Array]',
								'[object Float64Array]',
							],
							isArrayBufferView =
								ArrayBuffer.isView ||
								function (obj) {
									return (
										obj &&
										viewClasses.indexOf(
											Object.prototype.toString.call(obj),
										) > -1
									)
								}
					function normalizeName(name) {
						if (
							('string' != typeof name && (name = String(name)),
							/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name))
						)
							throw new TypeError(
								'Invalid character in header field name',
							)
						return name.toLowerCase()
					}
					function normalizeValue(value) {
						return (
							'string' != typeof value && (value = String(value)),
							value
						)
					}
					function iteratorFor(items) {
						var iterator = {
							next: function () {
								var value = items.shift()
								return { done: void 0 === value, value }
							},
						}
						return (
							support.iterable &&
								(iterator[Symbol.iterator] = function () {
									return iterator
								}),
							iterator
						)
					}
					function Headers(headers) {
						;(this.map = {}),
							headers instanceof Headers
								? headers.forEach(function (value, name) {
										this.append(name, value)
								  }, this)
								: Array.isArray(headers)
								? headers.forEach(function (header) {
										this.append(header[0], header[1])
								  }, this)
								: headers &&
								  Object.getOwnPropertyNames(headers).forEach(
										function (name) {
											this.append(name, headers[name])
										},
										this,
								  )
					}
					function consumed(body) {
						if (body.bodyUsed)
							return Promise.reject(new TypeError('Already read'))
						body.bodyUsed = !0
					}
					function fileReaderReady(reader) {
						return new Promise(function (resolve, reject) {
							;(reader.onload = function () {
								resolve(reader.result)
							}),
								(reader.onerror = function () {
									reject(reader.error)
								})
						})
					}
					function readBlobAsArrayBuffer(blob) {
						var reader = new FileReader(),
							promise = fileReaderReady(reader)
						return reader.readAsArrayBuffer(blob), promise
					}
					function bufferClone(buf) {
						if (buf.slice) return buf.slice(0)
						var view = new Uint8Array(buf.byteLength)
						return view.set(new Uint8Array(buf)), view.buffer
					}
					function Body() {
						return (
							(this.bodyUsed = !1),
							(this._initBody = function (body) {
								;(this._bodyInit = body),
									body
										? 'string' == typeof body
											? (this._bodyText = body)
											: support.blob &&
											  Blob.prototype.isPrototypeOf(body)
											? (this._bodyBlob = body)
											: support.formData &&
											  FormData.prototype.isPrototypeOf(
													body,
											  )
											? (this._bodyFormData = body)
											: support.searchParams &&
											  URLSearchParams.prototype.isPrototypeOf(
													body,
											  )
											? (this._bodyText = body.toString())
											: support.arrayBuffer &&
											  support.blob &&
											  (function isDataView(obj) {
													return (
														obj &&
														DataView.prototype.isPrototypeOf(
															obj,
														)
													)
											  })(body)
											? ((this._bodyArrayBuffer =
													bufferClone(body.buffer)),
											  (this._bodyInit = new Blob([
													this._bodyArrayBuffer,
											  ])))
											: support.arrayBuffer &&
											  (ArrayBuffer.prototype.isPrototypeOf(
													body,
											  ) ||
													isArrayBufferView(body))
											? (this._bodyArrayBuffer =
													bufferClone(body))
											: (this._bodyText = body =
													Object.prototype.toString.call(
														body,
													))
										: (this._bodyText = ''),
									this.headers.get('content-type') ||
										('string' == typeof body
											? this.headers.set(
													'content-type',
													'text/plain;charset=UTF-8',
											  )
											: this._bodyBlob &&
											  this._bodyBlob.type
											? this.headers.set(
													'content-type',
													this._bodyBlob.type,
											  )
											: support.searchParams &&
											  URLSearchParams.prototype.isPrototypeOf(
													body,
											  ) &&
											  this.headers.set(
													'content-type',
													'application/x-www-form-urlencoded;charset=UTF-8',
											  ))
							}),
							support.blob &&
								((this.blob = function () {
									var rejected = consumed(this)
									if (rejected) return rejected
									if (this._bodyBlob)
										return Promise.resolve(this._bodyBlob)
									if (this._bodyArrayBuffer)
										return Promise.resolve(
											new Blob([this._bodyArrayBuffer]),
										)
									if (this._bodyFormData)
										throw new Error(
											'could not read FormData body as blob',
										)
									return Promise.resolve(
										new Blob([this._bodyText]),
									)
								}),
								(this.arrayBuffer = function () {
									return this._bodyArrayBuffer
										? consumed(this) ||
												Promise.resolve(
													this._bodyArrayBuffer,
												)
										: this.blob().then(
												readBlobAsArrayBuffer,
										  )
								})),
							(this.text = function () {
								var rejected = consumed(this)
								if (rejected) return rejected
								if (this._bodyBlob)
									return (function readBlobAsText(blob) {
										var reader = new FileReader(),
											promise = fileReaderReady(reader)
										return reader.readAsText(blob), promise
									})(this._bodyBlob)
								if (this._bodyArrayBuffer)
									return Promise.resolve(
										(function readArrayBufferAsText(buf) {
											for (
												var view = new Uint8Array(buf),
													chars = new Array(
														view.length,
													),
													i = 0;
												i < view.length;
												i++
											)
												chars[i] = String.fromCharCode(
													view[i],
												)
											return chars.join('')
										})(this._bodyArrayBuffer),
									)
								if (this._bodyFormData)
									throw new Error(
										'could not read FormData body as text',
									)
								return Promise.resolve(this._bodyText)
							}),
							support.formData &&
								(this.formData = function () {
									return this.text().then(decode)
								}),
							(this.json = function () {
								return this.text().then(JSON.parse)
							}),
							this
						)
					}
					;(Headers.prototype.append = function (name, value) {
						;(name = normalizeName(name)),
							(value = normalizeValue(value))
						var oldValue = this.map[name]
						this.map[name] = oldValue
							? oldValue + ', ' + value
							: value
					}),
						(Headers.prototype.delete = function (name) {
							delete this.map[normalizeName(name)]
						}),
						(Headers.prototype.get = function (name) {
							return (
								(name = normalizeName(name)),
								this.has(name) ? this.map[name] : null
							)
						}),
						(Headers.prototype.has = function (name) {
							return this.map.hasOwnProperty(normalizeName(name))
						}),
						(Headers.prototype.set = function (name, value) {
							this.map[normalizeName(name)] =
								normalizeValue(value)
						}),
						(Headers.prototype.forEach = function (
							callback,
							thisArg,
						) {
							for (var name in this.map)
								this.map.hasOwnProperty(name) &&
									callback.call(
										thisArg,
										this.map[name],
										name,
										this,
									)
						}),
						(Headers.prototype.keys = function () {
							var items = []
							return (
								this.forEach(function (value, name) {
									items.push(name)
								}),
								iteratorFor(items)
							)
						}),
						(Headers.prototype.values = function () {
							var items = []
							return (
								this.forEach(function (value) {
									items.push(value)
								}),
								iteratorFor(items)
							)
						}),
						(Headers.prototype.entries = function () {
							var items = []
							return (
								this.forEach(function (value, name) {
									items.push([name, value])
								}),
								iteratorFor(items)
							)
						}),
						support.iterable &&
							(Headers.prototype[Symbol.iterator] =
								Headers.prototype.entries)
					var methods = [
						'DELETE',
						'GET',
						'HEAD',
						'OPTIONS',
						'POST',
						'PUT',
					]
					function Request(input, options) {
						var body = (options = options || {}).body
						if (input instanceof Request) {
							if (input.bodyUsed)
								throw new TypeError('Already read')
							;(this.url = input.url),
								(this.credentials = input.credentials),
								options.headers ||
									(this.headers = new Headers(input.headers)),
								(this.method = input.method),
								(this.mode = input.mode),
								(this.signal = input.signal),
								body ||
									null == input._bodyInit ||
									((body = input._bodyInit),
									(input.bodyUsed = !0))
						} else this.url = String(input)
						if (
							((this.credentials =
								options.credentials ||
								this.credentials ||
								'same-origin'),
							(!options.headers && this.headers) ||
								(this.headers = new Headers(options.headers)),
							(this.method = (function normalizeMethod(method) {
								var upcased = method.toUpperCase()
								return methods.indexOf(upcased) > -1
									? upcased
									: method
							})(options.method || this.method || 'GET')),
							(this.mode = options.mode || this.mode || null),
							(this.signal = options.signal || this.signal),
							(this.referrer = null),
							('GET' === this.method || 'HEAD' === this.method) &&
								body)
						)
							throw new TypeError(
								'Body not allowed for GET or HEAD requests',
							)
						this._initBody(body)
					}
					function decode(body) {
						var form = new FormData()
						return (
							body
								.trim()
								.split('&')
								.forEach(function (bytes) {
									if (bytes) {
										var split = bytes.split('='),
											name = split
												.shift()
												.replace(/\+/g, ' '),
											value = split
												.join('=')
												.replace(/\+/g, ' ')
										form.append(
											decodeURIComponent(name),
											decodeURIComponent(value),
										)
									}
								}),
							form
						)
					}
					function Response(bodyInit, options) {
						options || (options = {}),
							(this.type = 'default'),
							(this.status =
								void 0 === options.status
									? 200
									: options.status),
							(this.ok = this.status >= 200 && this.status < 300),
							(this.statusText =
								'statusText' in options
									? options.statusText
									: 'OK'),
							(this.headers = new Headers(options.headers)),
							(this.url = options.url || ''),
							this._initBody(bodyInit)
					}
					;(Request.prototype.clone = function () {
						return new Request(this, { body: this._bodyInit })
					}),
						Body.call(Request.prototype),
						Body.call(Response.prototype),
						(Response.prototype.clone = function () {
							return new Response(this._bodyInit, {
								status: this.status,
								statusText: this.statusText,
								headers: new Headers(this.headers),
								url: this.url,
							})
						}),
						(Response.error = function () {
							var response = new Response(null, {
								status: 0,
								statusText: '',
							})
							return (response.type = 'error'), response
						})
					var redirectStatuses = [301, 302, 303, 307, 308]
					;(Response.redirect = function (url, status) {
						if (-1 === redirectStatuses.indexOf(status))
							throw new RangeError('Invalid status code')
						return new Response(null, {
							status,
							headers: { location: url },
						})
					}),
						(exports.DOMException = self.DOMException)
					try {
						new exports.DOMException()
					} catch (err) {
						;(exports.DOMException = function (message, name) {
							;(this.message = message), (this.name = name)
							var error = Error(message)
							this.stack = error.stack
						}),
							(exports.DOMException.prototype = Object.create(
								Error.prototype,
							)),
							(exports.DOMException.prototype.constructor =
								exports.DOMException)
					}
					function fetch(input, init) {
						return new Promise(function (resolve, reject) {
							var request = new Request(input, init)
							if (request.signal && request.signal.aborted)
								return reject(
									new exports.DOMException(
										'Aborted',
										'AbortError',
									),
								)
							var xhr = new XMLHttpRequest()
							function abortXhr() {
								xhr.abort()
							}
							;(xhr.onload = function () {
								var rawHeaders,
									headers,
									options = {
										status: xhr.status,
										statusText: xhr.statusText,
										headers:
											((rawHeaders =
												xhr.getAllResponseHeaders() ||
												''),
											(headers = new Headers()),
											rawHeaders
												.replace(/\r?\n[\t ]+/g, ' ')
												.split(/\r?\n/)
												.forEach(function (line) {
													var parts = line.split(':'),
														key = parts
															.shift()
															.trim()
													if (key) {
														var value = parts
															.join(':')
															.trim()
														headers.append(
															key,
															value,
														)
													}
												}),
											headers),
									}
								options.url =
									'responseURL' in xhr
										? xhr.responseURL
										: options.headers.get('X-Request-URL')
								var body =
									'response' in xhr
										? xhr.response
										: xhr.responseText
								resolve(new Response(body, options))
							}),
								(xhr.onerror = function () {
									reject(
										new TypeError('Network request failed'),
									)
								}),
								(xhr.ontimeout = function () {
									reject(
										new TypeError('Network request failed'),
									)
								}),
								(xhr.onabort = function () {
									reject(
										new exports.DOMException(
											'Aborted',
											'AbortError',
										),
									)
								}),
								xhr.open(request.method, request.url, !0),
								'include' === request.credentials
									? (xhr.withCredentials = !0)
									: 'omit' === request.credentials &&
									  (xhr.withCredentials = !1),
								'responseType' in xhr &&
									support.blob &&
									(xhr.responseType = 'blob'),
								request.headers.forEach(function (value, name) {
									xhr.setRequestHeader(name, value)
								}),
								request.signal &&
									(request.signal.addEventListener(
										'abort',
										abortXhr,
									),
									(xhr.onreadystatechange = function () {
										4 === xhr.readyState &&
											request.signal.removeEventListener(
												'abort',
												abortXhr,
											)
									})),
								xhr.send(
									void 0 === request._bodyInit
										? null
										: request._bodyInit,
								)
						})
					}
					;(fetch.polyfill = !0),
						self.fetch ||
							((self.fetch = fetch),
							(self.Headers = Headers),
							(self.Request = Request),
							(self.Response = Response)),
						(exports.Headers = Headers),
						(exports.Request = Request),
						(exports.Response = Response),
						(exports.fetch = fetch),
						Object.defineProperty(exports, '__esModule', {
							value: !0,
						})
				})({})
			})(__self__),
				(__self__.fetch.ponyfill = !0),
				delete __self__.fetch.polyfill
			var ctx = __self__
			;((exports = ctx.fetch).default = ctx.fetch),
				(exports.fetch = ctx.fetch),
				(exports.Headers = ctx.Headers),
				(exports.Request = ctx.Request),
				(exports.Response = ctx.Response),
				(module.exports = exports)
		},
		'./node_modules/extract-files/public/ReactNativeFile.js': (module) => {
			'use strict'
			module.exports = function ReactNativeFile(_ref) {
				var uri = _ref.uri,
					name = _ref.name,
					type = _ref.type
				;(this.uri = uri), (this.name = name), (this.type = type)
			}
		},
		'./node_modules/extract-files/public/extractFiles.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__,
		) => {
			'use strict'
			var defaultIsExtractableFile = __webpack_require__(
				'./node_modules/extract-files/public/isExtractableFile.js',
			)
			module.exports = function extractFiles(
				value,
				path,
				isExtractableFile,
			) {
				var clone
				void 0 === path && (path = ''),
					void 0 === isExtractableFile &&
						(isExtractableFile = defaultIsExtractableFile)
				var files = new Map()
				function addFile(paths, file) {
					var storedPaths = files.get(file)
					storedPaths
						? storedPaths.push.apply(storedPaths, paths)
						: files.set(file, paths)
				}
				if (isExtractableFile(value))
					(clone = null), addFile([path], value)
				else {
					var prefix = path ? path + '.' : ''
					if (
						'undefined' != typeof FileList &&
						value instanceof FileList
					)
						clone = Array.prototype.map.call(
							value,
							function (file, i) {
								return addFile(['' + prefix + i], file), null
							},
						)
					else if (Array.isArray(value))
						clone = value.map(function (child, i) {
							var result = extractFiles(
								child,
								'' + prefix + i,
								isExtractableFile,
							)
							return result.files.forEach(addFile), result.clone
						})
					else if (value && value.constructor === Object)
						for (var i in ((clone = {}), value)) {
							var result = extractFiles(
								value[i],
								'' + prefix + i,
								isExtractableFile,
							)
							result.files.forEach(addFile),
								(clone[i] = result.clone)
						}
					else clone = value
				}
				return { clone, files }
			}
		},
		'./node_modules/extract-files/public/isExtractableFile.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__,
		) => {
			'use strict'
			var ReactNativeFile = __webpack_require__(
				'./node_modules/extract-files/public/ReactNativeFile.js',
			)
			module.exports = function isExtractableFile(value) {
				return (
					('undefined' != typeof File && value instanceof File) ||
					('undefined' != typeof Blob && value instanceof Blob) ||
					value instanceof ReactNativeFile
				)
			}
		},
		'./node_modules/form-data/lib/browser.js': (module) => {
			module.exports =
				'object' == typeof self ? self.FormData : window.FormData
		},
		'./node_modules/graphql-request/build/esm/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, {
				g6: () => GraphQLClient,
				Ps: () => gql,
			})
			const defaultJsonSerializer = {
				parse: JSON.parse,
				stringify: JSON.stringify,
			}
			var isExtractableFile = __webpack_require__(
					'./node_modules/extract-files/public/isExtractableFile.js',
				),
				isExtractableFile_default =
					__webpack_require__.n(isExtractableFile),
				extractFiles = __webpack_require__(
					'./node_modules/extract-files/public/extractFiles.js',
				),
				extractFiles_default = __webpack_require__.n(extractFiles),
				browser = __webpack_require__(
					'./node_modules/form-data/lib/browser.js',
				),
				browser_default = __webpack_require__.n(browser)
			const isExtractableFileEnhanced = (value) =>
					isExtractableFile_default()(value) ||
					(null !== value &&
						'object' == typeof value &&
						'function' == typeof value.pipe),
				esm_createRequestBody = (
					query,
					variables,
					operationName,
					jsonSerializer = defaultJsonSerializer,
				) => {
					const { clone, files } = extractFiles_default()(
						{ query, variables, operationName },
						'',
						isExtractableFileEnhanced,
					)
					if (0 === files.size) {
						if (!Array.isArray(query))
							return jsonSerializer.stringify(clone)
						if (void 0 !== variables && !Array.isArray(variables))
							throw new Error(
								'Cannot create request body with given variable type, array expected',
							)
						const payload = query.reduce(
							(accu, currentQuery, index) => (
								accu.push({
									query: currentQuery,
									variables: variables
										? variables[index]
										: void 0,
								}),
								accu
							),
							[],
						)
						return jsonSerializer.stringify(payload)
					}
					const form = new (
						'undefined' == typeof FormData
							? browser_default()
							: FormData
					)()
					form.append('operations', jsonSerializer.stringify(clone))
					const map = {}
					let i = 0
					return (
						files.forEach((paths) => {
							map[++i] = paths
						}),
						form.append('map', jsonSerializer.stringify(map)),
						(i = 0),
						files.forEach((paths, file) => {
							form.append('' + ++i, file)
						}),
						form
					)
				}
			function invariant(condition, message) {
				if (!Boolean(condition))
					throw new Error(
						null != message
							? message
							: 'Unexpected invariant triggered.',
					)
			}
			const LineRegExp = /\r\n|[\n\r]/g
			function getLocation(source, position) {
				let lastLineStart = 0,
					line = 1
				for (const match of source.body.matchAll(LineRegExp)) {
					if (
						('number' == typeof match.index || invariant(!1),
						match.index >= position)
					)
						break
					;(lastLineStart = match.index + match[0].length),
						(line += 1)
				}
				return { line, column: position + 1 - lastLineStart }
			}
			function printSourceLocation(source, sourceLocation) {
				const firstLineColumnOffset = source.locationOffset.column - 1,
					body = ''.padStart(firstLineColumnOffset) + source.body,
					lineIndex = sourceLocation.line - 1,
					lineOffset = source.locationOffset.line - 1,
					lineNum = sourceLocation.line + lineOffset,
					columnOffset =
						1 === sourceLocation.line ? firstLineColumnOffset : 0,
					columnNum = sourceLocation.column + columnOffset,
					locationStr = `${source.name}:${lineNum}:${columnNum}\n`,
					lines = body.split(/\r\n|[\n\r]/g),
					locationLine = lines[lineIndex]
				if (locationLine.length > 120) {
					const subLineIndex = Math.floor(columnNum / 80),
						subLineColumnNum = columnNum % 80,
						subLines = []
					for (let i = 0; i < locationLine.length; i += 80)
						subLines.push(locationLine.slice(i, i + 80))
					return (
						locationStr +
						printPrefixedLines([
							[`${lineNum} |`, subLines[0]],
							...subLines
								.slice(1, subLineIndex + 1)
								.map((subLine) => ['|', subLine]),
							['|', '^'.padStart(subLineColumnNum)],
							['|', subLines[subLineIndex + 1]],
						])
					)
				}
				return (
					locationStr +
					printPrefixedLines([
						[lineNum - 1 + ' |', lines[lineIndex - 1]],
						[`${lineNum} |`, locationLine],
						['|', '^'.padStart(columnNum)],
						[`${lineNum + 1} |`, lines[lineIndex + 1]],
					])
				)
			}
			function printPrefixedLines(lines) {
				const existingLines = lines.filter(
						([_, line]) => void 0 !== line,
					),
					padLen = Math.max(
						...existingLines.map(([prefix]) => prefix.length),
					)
				return existingLines
					.map(
						([prefix, line]) =>
							prefix.padStart(padLen) + (line ? ' ' + line : ''),
					)
					.join('\n')
			}
			class GraphQLError extends Error {
				constructor(message, ...rawArgs) {
					var _this$nodes, _nodeLocations$, _ref
					const {
						nodes,
						source,
						positions,
						path,
						originalError,
						extensions,
					} = (function toNormalizedOptions(args) {
						const firstArg = args[0]
						return null == firstArg ||
							'kind' in firstArg ||
							'length' in firstArg
							? {
									nodes: firstArg,
									source: args[1],
									positions: args[2],
									path: args[3],
									originalError: args[4],
									extensions: args[5],
							  }
							: firstArg
					})(rawArgs)
					super(message),
						(this.name = 'GraphQLError'),
						(this.path = null != path ? path : void 0),
						(this.originalError =
							null != originalError ? originalError : void 0),
						(this.nodes = undefinedIfEmpty(
							Array.isArray(nodes)
								? nodes
								: nodes
								? [nodes]
								: void 0,
						))
					const nodeLocations = undefinedIfEmpty(
						null === (_this$nodes = this.nodes) ||
							void 0 === _this$nodes
							? void 0
							: _this$nodes
									.map((node) => node.loc)
									.filter((loc) => null != loc),
					)
					;(this.source =
						null != source
							? source
							: null == nodeLocations ||
							  null === (_nodeLocations$ = nodeLocations[0]) ||
							  void 0 === _nodeLocations$
							? void 0
							: _nodeLocations$.source),
						(this.positions =
							null != positions
								? positions
								: null == nodeLocations
								? void 0
								: nodeLocations.map((loc) => loc.start)),
						(this.locations =
							positions && source
								? positions.map((pos) =>
										getLocation(source, pos),
								  )
								: null == nodeLocations
								? void 0
								: nodeLocations.map((loc) =>
										getLocation(loc.source, loc.start),
								  ))
					const originalExtensions = (function isObjectLike(value) {
						return 'object' == typeof value && null !== value
					})(
						null == originalError
							? void 0
							: originalError.extensions,
					)
						? null == originalError
							? void 0
							: originalError.extensions
						: void 0
					;(this.extensions =
						null !==
							(_ref =
								null != extensions
									? extensions
									: originalExtensions) && void 0 !== _ref
							? _ref
							: Object.create(null)),
						Object.defineProperties(this, {
							message: { writable: !0, enumerable: !0 },
							name: { enumerable: !1 },
							nodes: { enumerable: !1 },
							source: { enumerable: !1 },
							positions: { enumerable: !1 },
							originalError: { enumerable: !1 },
						}),
						null != originalError && originalError.stack
							? Object.defineProperty(this, 'stack', {
									value: originalError.stack,
									writable: !0,
									configurable: !0,
							  })
							: Error.captureStackTrace
							? Error.captureStackTrace(this, GraphQLError)
							: Object.defineProperty(this, 'stack', {
									value: Error().stack,
									writable: !0,
									configurable: !0,
							  })
				}
				get [Symbol.toStringTag]() {
					return 'GraphQLError'
				}
				toString() {
					let output = this.message
					if (this.nodes)
						for (const node of this.nodes)
							node.loc &&
								(output +=
									'\n\n' +
									printSourceLocation(
										(location = node.loc).source,
										getLocation(
											location.source,
											location.start,
										),
									))
					else if (this.source && this.locations)
						for (const location of this.locations)
							output +=
								'\n\n' +
								printSourceLocation(this.source, location)
					var location
					return output
				}
				toJSON() {
					const formattedError = { message: this.message }
					return (
						null != this.locations &&
							(formattedError.locations = this.locations),
						null != this.path && (formattedError.path = this.path),
						null != this.extensions &&
							Object.keys(this.extensions).length > 0 &&
							(formattedError.extensions = this.extensions),
						formattedError
					)
				}
			}
			function undefinedIfEmpty(array) {
				return void 0 === array || 0 === array.length ? void 0 : array
			}
			function syntaxError(source, position, description) {
				return new GraphQLError(`Syntax Error: ${description}`, {
					source,
					positions: [position],
				})
			}
			class Location {
				constructor(startToken, endToken, source) {
					;(this.start = startToken.start),
						(this.end = endToken.end),
						(this.startToken = startToken),
						(this.endToken = endToken),
						(this.source = source)
				}
				get [Symbol.toStringTag]() {
					return 'Location'
				}
				toJSON() {
					return { start: this.start, end: this.end }
				}
			}
			class Token {
				constructor(kind, start, end, line, column, value) {
					;(this.kind = kind),
						(this.start = start),
						(this.end = end),
						(this.line = line),
						(this.column = column),
						(this.value = value),
						(this.prev = null),
						(this.next = null)
				}
				get [Symbol.toStringTag]() {
					return 'Token'
				}
				toJSON() {
					return {
						kind: this.kind,
						value: this.value,
						line: this.line,
						column: this.column,
					}
				}
			}
			const QueryDocumentKeys = {
					Name: [],
					Document: ['definitions'],
					OperationDefinition: [
						'name',
						'variableDefinitions',
						'directives',
						'selectionSet',
					],
					VariableDefinition: [
						'variable',
						'type',
						'defaultValue',
						'directives',
					],
					Variable: ['name'],
					SelectionSet: ['selections'],
					Field: [
						'alias',
						'name',
						'arguments',
						'directives',
						'selectionSet',
					],
					Argument: ['name', 'value'],
					FragmentSpread: ['name', 'directives'],
					InlineFragment: [
						'typeCondition',
						'directives',
						'selectionSet',
					],
					FragmentDefinition: [
						'name',
						'variableDefinitions',
						'typeCondition',
						'directives',
						'selectionSet',
					],
					IntValue: [],
					FloatValue: [],
					StringValue: [],
					BooleanValue: [],
					NullValue: [],
					EnumValue: [],
					ListValue: ['values'],
					ObjectValue: ['fields'],
					ObjectField: ['name', 'value'],
					Directive: ['name', 'arguments'],
					NamedType: ['name'],
					ListType: ['type'],
					NonNullType: ['type'],
					SchemaDefinition: [
						'description',
						'directives',
						'operationTypes',
					],
					OperationTypeDefinition: ['type'],
					ScalarTypeDefinition: ['description', 'name', 'directives'],
					ObjectTypeDefinition: [
						'description',
						'name',
						'interfaces',
						'directives',
						'fields',
					],
					FieldDefinition: [
						'description',
						'name',
						'arguments',
						'type',
						'directives',
					],
					InputValueDefinition: [
						'description',
						'name',
						'type',
						'defaultValue',
						'directives',
					],
					InterfaceTypeDefinition: [
						'description',
						'name',
						'interfaces',
						'directives',
						'fields',
					],
					UnionTypeDefinition: [
						'description',
						'name',
						'directives',
						'types',
					],
					EnumTypeDefinition: [
						'description',
						'name',
						'directives',
						'values',
					],
					EnumValueDefinition: ['description', 'name', 'directives'],
					InputObjectTypeDefinition: [
						'description',
						'name',
						'directives',
						'fields',
					],
					DirectiveDefinition: [
						'description',
						'name',
						'arguments',
						'locations',
					],
					SchemaExtension: ['directives', 'operationTypes'],
					ScalarTypeExtension: ['name', 'directives'],
					ObjectTypeExtension: [
						'name',
						'interfaces',
						'directives',
						'fields',
					],
					InterfaceTypeExtension: [
						'name',
						'interfaces',
						'directives',
						'fields',
					],
					UnionTypeExtension: ['name', 'directives', 'types'],
					EnumTypeExtension: ['name', 'directives', 'values'],
					InputObjectTypeExtension: ['name', 'directives', 'fields'],
				},
				kindValues = new Set(Object.keys(QueryDocumentKeys))
			function isNode(maybeNode) {
				const maybeKind = null == maybeNode ? void 0 : maybeNode.kind
				return 'string' == typeof maybeKind && kindValues.has(maybeKind)
			}
			var OperationTypeNode,
				DirectiveLocation,
				kinds_Kind,
				tokenKind_TokenKind
			function isWhiteSpace(code) {
				return 9 === code || 32 === code
			}
			function isDigit(code) {
				return code >= 48 && code <= 57
			}
			function isLetter(code) {
				return (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
			}
			function isNameStart(code) {
				return isLetter(code) || 95 === code
			}
			function isNameContinue(code) {
				return isLetter(code) || isDigit(code) || 95 === code
			}
			function dedentBlockStringLines(lines) {
				var _firstNonEmptyLine2
				let commonIndent = Number.MAX_SAFE_INTEGER,
					firstNonEmptyLine = null,
					lastNonEmptyLine = -1
				for (let i = 0; i < lines.length; ++i) {
					var _firstNonEmptyLine
					const line = lines[i],
						indent = leadingWhitespace(line)
					indent !== line.length &&
						((firstNonEmptyLine =
							null !== (_firstNonEmptyLine = firstNonEmptyLine) &&
							void 0 !== _firstNonEmptyLine
								? _firstNonEmptyLine
								: i),
						(lastNonEmptyLine = i),
						0 !== i &&
							indent < commonIndent &&
							(commonIndent = indent))
				}
				return lines
					.map((line, i) =>
						0 === i ? line : line.slice(commonIndent),
					)
					.slice(
						null !== (_firstNonEmptyLine2 = firstNonEmptyLine) &&
							void 0 !== _firstNonEmptyLine2
							? _firstNonEmptyLine2
							: 0,
						lastNonEmptyLine + 1,
					)
			}
			function leadingWhitespace(str) {
				let i = 0
				for (; i < str.length && isWhiteSpace(str.charCodeAt(i)); ) ++i
				return i
			}
			!(function (OperationTypeNode) {
				;(OperationTypeNode.QUERY = 'query'),
					(OperationTypeNode.MUTATION = 'mutation'),
					(OperationTypeNode.SUBSCRIPTION = 'subscription')
			})(OperationTypeNode || (OperationTypeNode = {})),
				(function (DirectiveLocation) {
					;(DirectiveLocation.QUERY = 'QUERY'),
						(DirectiveLocation.MUTATION = 'MUTATION'),
						(DirectiveLocation.SUBSCRIPTION = 'SUBSCRIPTION'),
						(DirectiveLocation.FIELD = 'FIELD'),
						(DirectiveLocation.FRAGMENT_DEFINITION =
							'FRAGMENT_DEFINITION'),
						(DirectiveLocation.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
						(DirectiveLocation.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
						(DirectiveLocation.VARIABLE_DEFINITION =
							'VARIABLE_DEFINITION'),
						(DirectiveLocation.SCHEMA = 'SCHEMA'),
						(DirectiveLocation.SCALAR = 'SCALAR'),
						(DirectiveLocation.OBJECT = 'OBJECT'),
						(DirectiveLocation.FIELD_DEFINITION =
							'FIELD_DEFINITION'),
						(DirectiveLocation.ARGUMENT_DEFINITION =
							'ARGUMENT_DEFINITION'),
						(DirectiveLocation.INTERFACE = 'INTERFACE'),
						(DirectiveLocation.UNION = 'UNION'),
						(DirectiveLocation.ENUM = 'ENUM'),
						(DirectiveLocation.ENUM_VALUE = 'ENUM_VALUE'),
						(DirectiveLocation.INPUT_OBJECT = 'INPUT_OBJECT'),
						(DirectiveLocation.INPUT_FIELD_DEFINITION =
							'INPUT_FIELD_DEFINITION')
				})(DirectiveLocation || (DirectiveLocation = {})),
				(function (Kind) {
					;(Kind.NAME = 'Name'),
						(Kind.DOCUMENT = 'Document'),
						(Kind.OPERATION_DEFINITION = 'OperationDefinition'),
						(Kind.VARIABLE_DEFINITION = 'VariableDefinition'),
						(Kind.SELECTION_SET = 'SelectionSet'),
						(Kind.FIELD = 'Field'),
						(Kind.ARGUMENT = 'Argument'),
						(Kind.FRAGMENT_SPREAD = 'FragmentSpread'),
						(Kind.INLINE_FRAGMENT = 'InlineFragment'),
						(Kind.FRAGMENT_DEFINITION = 'FragmentDefinition'),
						(Kind.VARIABLE = 'Variable'),
						(Kind.INT = 'IntValue'),
						(Kind.FLOAT = 'FloatValue'),
						(Kind.STRING = 'StringValue'),
						(Kind.BOOLEAN = 'BooleanValue'),
						(Kind.NULL = 'NullValue'),
						(Kind.ENUM = 'EnumValue'),
						(Kind.LIST = 'ListValue'),
						(Kind.OBJECT = 'ObjectValue'),
						(Kind.OBJECT_FIELD = 'ObjectField'),
						(Kind.DIRECTIVE = 'Directive'),
						(Kind.NAMED_TYPE = 'NamedType'),
						(Kind.LIST_TYPE = 'ListType'),
						(Kind.NON_NULL_TYPE = 'NonNullType'),
						(Kind.SCHEMA_DEFINITION = 'SchemaDefinition'),
						(Kind.OPERATION_TYPE_DEFINITION =
							'OperationTypeDefinition'),
						(Kind.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
						(Kind.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
						(Kind.FIELD_DEFINITION = 'FieldDefinition'),
						(Kind.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
						(Kind.INTERFACE_TYPE_DEFINITION =
							'InterfaceTypeDefinition'),
						(Kind.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
						(Kind.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
						(Kind.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
						(Kind.INPUT_OBJECT_TYPE_DEFINITION =
							'InputObjectTypeDefinition'),
						(Kind.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
						(Kind.SCHEMA_EXTENSION = 'SchemaExtension'),
						(Kind.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
						(Kind.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
						(Kind.INTERFACE_TYPE_EXTENSION =
							'InterfaceTypeExtension'),
						(Kind.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
						(Kind.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
						(Kind.INPUT_OBJECT_TYPE_EXTENSION =
							'InputObjectTypeExtension')
				})(kinds_Kind || (kinds_Kind = {})),
				(function (TokenKind) {
					;(TokenKind.SOF = '<SOF>'),
						(TokenKind.EOF = '<EOF>'),
						(TokenKind.BANG = '!'),
						(TokenKind.DOLLAR = '$'),
						(TokenKind.AMP = '&'),
						(TokenKind.PAREN_L = '('),
						(TokenKind.PAREN_R = ')'),
						(TokenKind.SPREAD = '...'),
						(TokenKind.COLON = ':'),
						(TokenKind.EQUALS = '='),
						(TokenKind.AT = '@'),
						(TokenKind.BRACKET_L = '['),
						(TokenKind.BRACKET_R = ']'),
						(TokenKind.BRACE_L = '{'),
						(TokenKind.PIPE = '|'),
						(TokenKind.BRACE_R = '}'),
						(TokenKind.NAME = 'Name'),
						(TokenKind.INT = 'Int'),
						(TokenKind.FLOAT = 'Float'),
						(TokenKind.STRING = 'String'),
						(TokenKind.BLOCK_STRING = 'BlockString'),
						(TokenKind.COMMENT = 'Comment')
				})(tokenKind_TokenKind || (tokenKind_TokenKind = {}))
			class Lexer {
				constructor(source) {
					const startOfFileToken = new Token(
						tokenKind_TokenKind.SOF,
						0,
						0,
						0,
						0,
					)
					;(this.source = source),
						(this.lastToken = startOfFileToken),
						(this.token = startOfFileToken),
						(this.line = 1),
						(this.lineStart = 0)
				}
				get [Symbol.toStringTag]() {
					return 'Lexer'
				}
				advance() {
					this.lastToken = this.token
					return (this.token = this.lookahead())
				}
				lookahead() {
					let token = this.token
					if (token.kind !== tokenKind_TokenKind.EOF)
						do {
							if (token.next) token = token.next
							else {
								const nextToken = readNextToken(this, token.end)
								;(token.next = nextToken),
									(nextToken.prev = token),
									(token = nextToken)
							}
						} while (token.kind === tokenKind_TokenKind.COMMENT)
					return token
				}
			}
			function isUnicodeScalarValue(code) {
				return (
					(code >= 0 && code <= 55295) ||
					(code >= 57344 && code <= 1114111)
				)
			}
			function isSupplementaryCodePoint(body, location) {
				return (
					isLeadingSurrogate(body.charCodeAt(location)) &&
					isTrailingSurrogate(body.charCodeAt(location + 1))
				)
			}
			function isLeadingSurrogate(code) {
				return code >= 55296 && code <= 56319
			}
			function isTrailingSurrogate(code) {
				return code >= 56320 && code <= 57343
			}
			function printCodePointAt(lexer, location) {
				const code = lexer.source.body.codePointAt(location)
				if (void 0 === code) return tokenKind_TokenKind.EOF
				if (code >= 32 && code <= 126) {
					const char = String.fromCodePoint(code)
					return '"' === char ? "'\"'" : `"${char}"`
				}
				return 'U+' + code.toString(16).toUpperCase().padStart(4, '0')
			}
			function createToken(lexer, kind, start, end, value) {
				const line = lexer.line,
					col = 1 + start - lexer.lineStart
				return new Token(kind, start, end, line, col, value)
			}
			function readNextToken(lexer, start) {
				const body = lexer.source.body,
					bodyLength = body.length
				let position = start
				for (; position < bodyLength; ) {
					const code = body.charCodeAt(position)
					switch (code) {
						case 65279:
						case 9:
						case 32:
						case 44:
							++position
							continue
						case 10:
							++position,
								++lexer.line,
								(lexer.lineStart = position)
							continue
						case 13:
							10 === body.charCodeAt(position + 1)
								? (position += 2)
								: ++position,
								++lexer.line,
								(lexer.lineStart = position)
							continue
						case 35:
							return readComment(lexer, position)
						case 33:
							return createToken(
								lexer,
								tokenKind_TokenKind.BANG,
								position,
								position + 1,
							)
						case 36:
							return createToken(
								lexer,
								tokenKind_TokenKind.DOLLAR,
								position,
								position + 1,
							)
						case 38:
							return createToken(
								lexer,
								tokenKind_TokenKind.AMP,
								position,
								position + 1,
							)
						case 40:
							return createToken(
								lexer,
								tokenKind_TokenKind.PAREN_L,
								position,
								position + 1,
							)
						case 41:
							return createToken(
								lexer,
								tokenKind_TokenKind.PAREN_R,
								position,
								position + 1,
							)
						case 46:
							if (
								46 === body.charCodeAt(position + 1) &&
								46 === body.charCodeAt(position + 2)
							)
								return createToken(
									lexer,
									tokenKind_TokenKind.SPREAD,
									position,
									position + 3,
								)
							break
						case 58:
							return createToken(
								lexer,
								tokenKind_TokenKind.COLON,
								position,
								position + 1,
							)
						case 61:
							return createToken(
								lexer,
								tokenKind_TokenKind.EQUALS,
								position,
								position + 1,
							)
						case 64:
							return createToken(
								lexer,
								tokenKind_TokenKind.AT,
								position,
								position + 1,
							)
						case 91:
							return createToken(
								lexer,
								tokenKind_TokenKind.BRACKET_L,
								position,
								position + 1,
							)
						case 93:
							return createToken(
								lexer,
								tokenKind_TokenKind.BRACKET_R,
								position,
								position + 1,
							)
						case 123:
							return createToken(
								lexer,
								tokenKind_TokenKind.BRACE_L,
								position,
								position + 1,
							)
						case 124:
							return createToken(
								lexer,
								tokenKind_TokenKind.PIPE,
								position,
								position + 1,
							)
						case 125:
							return createToken(
								lexer,
								tokenKind_TokenKind.BRACE_R,
								position,
								position + 1,
							)
						case 34:
							return 34 === body.charCodeAt(position + 1) &&
								34 === body.charCodeAt(position + 2)
								? readBlockString(lexer, position)
								: readString(lexer, position)
					}
					if (isDigit(code) || 45 === code)
						return readNumber(lexer, position, code)
					if (isNameStart(code)) return readName(lexer, position)
					throw syntaxError(
						lexer.source,
						position,
						39 === code
							? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
							: isUnicodeScalarValue(code) ||
							  isSupplementaryCodePoint(body, position)
							? `Unexpected character: ${printCodePointAt(
									lexer,
									position,
							  )}.`
							: `Invalid character: ${printCodePointAt(
									lexer,
									position,
							  )}.`,
					)
				}
				return createToken(
					lexer,
					tokenKind_TokenKind.EOF,
					bodyLength,
					bodyLength,
				)
			}
			function readComment(lexer, start) {
				const body = lexer.source.body,
					bodyLength = body.length
				let position = start + 1
				for (; position < bodyLength; ) {
					const code = body.charCodeAt(position)
					if (10 === code || 13 === code) break
					if (isUnicodeScalarValue(code)) ++position
					else {
						if (!isSupplementaryCodePoint(body, position)) break
						position += 2
					}
				}
				return createToken(
					lexer,
					tokenKind_TokenKind.COMMENT,
					start,
					position,
					body.slice(start + 1, position),
				)
			}
			function readNumber(lexer, start, firstCode) {
				const body = lexer.source.body
				let position = start,
					code = firstCode,
					isFloat = !1
				if (
					(45 === code && (code = body.charCodeAt(++position)),
					48 === code)
				) {
					if (((code = body.charCodeAt(++position)), isDigit(code)))
						throw syntaxError(
							lexer.source,
							position,
							`Invalid number, unexpected digit after 0: ${printCodePointAt(
								lexer,
								position,
							)}.`,
						)
				} else
					(position = readDigits(lexer, position, code)),
						(code = body.charCodeAt(position))
				if (
					(46 === code &&
						((isFloat = !0),
						(code = body.charCodeAt(++position)),
						(position = readDigits(lexer, position, code)),
						(code = body.charCodeAt(position))),
					(69 !== code && 101 !== code) ||
						((isFloat = !0),
						(code = body.charCodeAt(++position)),
						(43 !== code && 45 !== code) ||
							(code = body.charCodeAt(++position)),
						(position = readDigits(lexer, position, code)),
						(code = body.charCodeAt(position))),
					46 === code || isNameStart(code))
				)
					throw syntaxError(
						lexer.source,
						position,
						`Invalid number, expected digit but got: ${printCodePointAt(
							lexer,
							position,
						)}.`,
					)
				return createToken(
					lexer,
					isFloat
						? tokenKind_TokenKind.FLOAT
						: tokenKind_TokenKind.INT,
					start,
					position,
					body.slice(start, position),
				)
			}
			function readDigits(lexer, start, firstCode) {
				if (!isDigit(firstCode))
					throw syntaxError(
						lexer.source,
						start,
						`Invalid number, expected digit but got: ${printCodePointAt(
							lexer,
							start,
						)}.`,
					)
				const body = lexer.source.body
				let position = start + 1
				for (; isDigit(body.charCodeAt(position)); ) ++position
				return position
			}
			function readString(lexer, start) {
				const body = lexer.source.body,
					bodyLength = body.length
				let position = start + 1,
					chunkStart = position,
					value = ''
				for (; position < bodyLength; ) {
					const code = body.charCodeAt(position)
					if (34 === code)
						return (
							(value += body.slice(chunkStart, position)),
							createToken(
								lexer,
								tokenKind_TokenKind.STRING,
								start,
								position + 1,
								value,
							)
						)
					if (92 !== code) {
						if (10 === code || 13 === code) break
						if (isUnicodeScalarValue(code)) ++position
						else {
							if (!isSupplementaryCodePoint(body, position))
								throw syntaxError(
									lexer.source,
									position,
									`Invalid character within String: ${printCodePointAt(
										lexer,
										position,
									)}.`,
								)
							position += 2
						}
					} else {
						value += body.slice(chunkStart, position)
						const escape =
							117 === body.charCodeAt(position + 1)
								? 123 === body.charCodeAt(position + 2)
									? readEscapedUnicodeVariableWidth(
											lexer,
											position,
									  )
									: readEscapedUnicodeFixedWidth(
											lexer,
											position,
									  )
								: readEscapedCharacter(lexer, position)
						;(value += escape.value),
							(position += escape.size),
							(chunkStart = position)
					}
				}
				throw syntaxError(
					lexer.source,
					position,
					'Unterminated string.',
				)
			}
			function readEscapedUnicodeVariableWidth(lexer, position) {
				const body = lexer.source.body
				let point = 0,
					size = 3
				for (; size < 12; ) {
					const code = body.charCodeAt(position + size++)
					if (125 === code) {
						if (size < 5 || !isUnicodeScalarValue(point)) break
						return { value: String.fromCodePoint(point), size }
					}
					if (
						((point = (point << 4) | readHexDigit(code)), point < 0)
					)
						break
				}
				throw syntaxError(
					lexer.source,
					position,
					`Invalid Unicode escape sequence: "${body.slice(
						position,
						position + size,
					)}".`,
				)
			}
			function readEscapedUnicodeFixedWidth(lexer, position) {
				const body = lexer.source.body,
					code = read16BitHexCode(body, position + 2)
				if (isUnicodeScalarValue(code))
					return { value: String.fromCodePoint(code), size: 6 }
				if (
					isLeadingSurrogate(code) &&
					92 === body.charCodeAt(position + 6) &&
					117 === body.charCodeAt(position + 7)
				) {
					const trailingCode = read16BitHexCode(body, position + 8)
					if (isTrailingSurrogate(trailingCode))
						return {
							value: String.fromCodePoint(code, trailingCode),
							size: 12,
						}
				}
				throw syntaxError(
					lexer.source,
					position,
					`Invalid Unicode escape sequence: "${body.slice(
						position,
						position + 6,
					)}".`,
				)
			}
			function read16BitHexCode(body, position) {
				return (
					(readHexDigit(body.charCodeAt(position)) << 12) |
					(readHexDigit(body.charCodeAt(position + 1)) << 8) |
					(readHexDigit(body.charCodeAt(position + 2)) << 4) |
					readHexDigit(body.charCodeAt(position + 3))
				)
			}
			function readHexDigit(code) {
				return code >= 48 && code <= 57
					? code - 48
					: code >= 65 && code <= 70
					? code - 55
					: code >= 97 && code <= 102
					? code - 87
					: -1
			}
			function readEscapedCharacter(lexer, position) {
				const body = lexer.source.body
				switch (body.charCodeAt(position + 1)) {
					case 34:
						return { value: '"', size: 2 }
					case 92:
						return { value: '\\', size: 2 }
					case 47:
						return { value: '/', size: 2 }
					case 98:
						return { value: '\b', size: 2 }
					case 102:
						return { value: '\f', size: 2 }
					case 110:
						return { value: '\n', size: 2 }
					case 114:
						return { value: '\r', size: 2 }
					case 116:
						return { value: '\t', size: 2 }
				}
				throw syntaxError(
					lexer.source,
					position,
					`Invalid character escape sequence: "${body.slice(
						position,
						position + 2,
					)}".`,
				)
			}
			function readBlockString(lexer, start) {
				const body = lexer.source.body,
					bodyLength = body.length
				let lineStart = lexer.lineStart,
					position = start + 3,
					chunkStart = position,
					currentLine = ''
				const blockLines = []
				for (; position < bodyLength; ) {
					const code = body.charCodeAt(position)
					if (
						34 === code &&
						34 === body.charCodeAt(position + 1) &&
						34 === body.charCodeAt(position + 2)
					) {
						;(currentLine += body.slice(chunkStart, position)),
							blockLines.push(currentLine)
						const token = createToken(
							lexer,
							tokenKind_TokenKind.BLOCK_STRING,
							start,
							position + 3,
							dedentBlockStringLines(blockLines).join('\n'),
						)
						return (
							(lexer.line += blockLines.length - 1),
							(lexer.lineStart = lineStart),
							token
						)
					}
					if (
						92 !== code ||
						34 !== body.charCodeAt(position + 1) ||
						34 !== body.charCodeAt(position + 2) ||
						34 !== body.charCodeAt(position + 3)
					)
						if (10 !== code && 13 !== code)
							if (isUnicodeScalarValue(code)) ++position
							else {
								if (!isSupplementaryCodePoint(body, position))
									throw syntaxError(
										lexer.source,
										position,
										`Invalid character within String: ${printCodePointAt(
											lexer,
											position,
										)}.`,
									)
								position += 2
							}
						else
							(currentLine += body.slice(chunkStart, position)),
								blockLines.push(currentLine),
								13 === code &&
								10 === body.charCodeAt(position + 1)
									? (position += 2)
									: ++position,
								(currentLine = ''),
								(chunkStart = position),
								(lineStart = position)
					else
						(currentLine += body.slice(chunkStart, position)),
							(chunkStart = position + 1),
							(position += 4)
				}
				throw syntaxError(
					lexer.source,
					position,
					'Unterminated string.',
				)
			}
			function readName(lexer, start) {
				const body = lexer.source.body,
					bodyLength = body.length
				let position = start + 1
				for (; position < bodyLength; ) {
					if (!isNameContinue(body.charCodeAt(position))) break
					++position
				}
				return createToken(
					lexer,
					tokenKind_TokenKind.NAME,
					start,
					position,
					body.slice(start, position),
				)
			}
			function devAssert(condition, message) {
				if (!Boolean(condition)) throw new Error(message)
			}
			const MAX_ARRAY_LENGTH = 10,
				MAX_RECURSIVE_DEPTH = 2
			function inspect(value) {
				return formatValue(value, [])
			}
			function formatValue(value, seenValues) {
				switch (typeof value) {
					case 'string':
						return JSON.stringify(value)
					case 'function':
						return value.name
							? `[function ${value.name}]`
							: '[function]'
					case 'object':
						return (function formatObjectValue(
							value,
							previouslySeenValues,
						) {
							if (null === value) return 'null'
							if (previouslySeenValues.includes(value))
								return '[Circular]'
							const seenValues = [...previouslySeenValues, value]
							if (
								(function isJSONable(value) {
									return 'function' == typeof value.toJSON
								})(value)
							) {
								const jsonValue = value.toJSON()
								if (jsonValue !== value)
									return 'string' == typeof jsonValue
										? jsonValue
										: formatValue(jsonValue, seenValues)
							} else if (Array.isArray(value))
								return (function formatArray(
									array,
									seenValues,
								) {
									if (0 === array.length) return '[]'
									if (seenValues.length > MAX_RECURSIVE_DEPTH)
										return '[Array]'
									const len = Math.min(
											MAX_ARRAY_LENGTH,
											array.length,
										),
										remaining = array.length - len,
										items = []
									for (let i = 0; i < len; ++i)
										items.push(
											formatValue(array[i], seenValues),
										)
									1 === remaining
										? items.push('... 1 more item')
										: remaining > 1 &&
										  items.push(
												`... ${remaining} more items`,
										  )
									return '[' + items.join(', ') + ']'
								})(value, seenValues)
							return (function formatObject(object, seenValues) {
								const entries = Object.entries(object)
								if (0 === entries.length) return '{}'
								if (seenValues.length > MAX_RECURSIVE_DEPTH)
									return (
										'[' +
										(function getObjectTag(object) {
											const tag =
												Object.prototype.toString
													.call(object)
													.replace(/^\[object /, '')
													.replace(/]$/, '')
											if (
												'Object' === tag &&
												'function' ==
													typeof object.constructor
											) {
												const name =
													object.constructor.name
												if (
													'string' == typeof name &&
													'' !== name
												)
													return name
											}
											return tag
										})(object) +
										']'
									)
								const properties = entries.map(
									([key, value]) =>
										key +
										': ' +
										formatValue(value, seenValues),
								)
								return '{ ' + properties.join(', ') + ' }'
							})(value, seenValues)
						})(value, seenValues)
					default:
						return String(value)
				}
			}
			const instanceOf = function instanceOf(value, constructor) {
				return value instanceof constructor
			}
			class Source {
				constructor(
					body,
					name = 'GraphQL request',
					locationOffset = { line: 1, column: 1 },
				) {
					'string' == typeof body ||
						devAssert(
							!1,
							`Body must be a string. Received: ${inspect(
								body,
							)}.`,
						),
						(this.body = body),
						(this.name = name),
						(this.locationOffset = locationOffset),
						this.locationOffset.line > 0 ||
							devAssert(
								!1,
								'line in locationOffset is 1-indexed and must be positive.',
							),
						this.locationOffset.column > 0 ||
							devAssert(
								!1,
								'column in locationOffset is 1-indexed and must be positive.',
							)
				}
				get [Symbol.toStringTag]() {
					return 'Source'
				}
			}
			class Parser {
				constructor(source, options = {}) {
					const sourceObj = (function isSource(source) {
						return instanceOf(source, Source)
					})(source)
						? source
						: new Source(source)
					;(this._lexer = new Lexer(sourceObj)),
						(this._options = options),
						(this._tokenCounter = 0)
				}
				parseName() {
					const token = this.expectToken(tokenKind_TokenKind.NAME)
					return this.node(token, {
						kind: kinds_Kind.NAME,
						value: token.value,
					})
				}
				parseDocument() {
					return this.node(this._lexer.token, {
						kind: kinds_Kind.DOCUMENT,
						definitions: this.many(
							tokenKind_TokenKind.SOF,
							this.parseDefinition,
							tokenKind_TokenKind.EOF,
						),
					})
				}
				parseDefinition() {
					if (this.peek(tokenKind_TokenKind.BRACE_L))
						return this.parseOperationDefinition()
					const hasDescription = this.peekDescription(),
						keywordToken = hasDescription
							? this._lexer.lookahead()
							: this._lexer.token
					if (keywordToken.kind === tokenKind_TokenKind.NAME) {
						switch (keywordToken.value) {
							case 'schema':
								return this.parseSchemaDefinition()
							case 'scalar':
								return this.parseScalarTypeDefinition()
							case 'type':
								return this.parseObjectTypeDefinition()
							case 'interface':
								return this.parseInterfaceTypeDefinition()
							case 'union':
								return this.parseUnionTypeDefinition()
							case 'enum':
								return this.parseEnumTypeDefinition()
							case 'input':
								return this.parseInputObjectTypeDefinition()
							case 'directive':
								return this.parseDirectiveDefinition()
						}
						if (hasDescription)
							throw syntaxError(
								this._lexer.source,
								this._lexer.token.start,
								'Unexpected description, descriptions are supported only on type definitions.',
							)
						switch (keywordToken.value) {
							case 'query':
							case 'mutation':
							case 'subscription':
								return this.parseOperationDefinition()
							case 'fragment':
								return this.parseFragmentDefinition()
							case 'extend':
								return this.parseTypeSystemExtension()
						}
					}
					throw this.unexpected(keywordToken)
				}
				parseOperationDefinition() {
					const start = this._lexer.token
					if (this.peek(tokenKind_TokenKind.BRACE_L))
						return this.node(start, {
							kind: kinds_Kind.OPERATION_DEFINITION,
							operation: OperationTypeNode.QUERY,
							name: void 0,
							variableDefinitions: [],
							directives: [],
							selectionSet: this.parseSelectionSet(),
						})
					const operation = this.parseOperationType()
					let name
					return (
						this.peek(tokenKind_TokenKind.NAME) &&
							(name = this.parseName()),
						this.node(start, {
							kind: kinds_Kind.OPERATION_DEFINITION,
							operation,
							name,
							variableDefinitions:
								this.parseVariableDefinitions(),
							directives: this.parseDirectives(!1),
							selectionSet: this.parseSelectionSet(),
						})
					)
				}
				parseOperationType() {
					const operationToken = this.expectToken(
						tokenKind_TokenKind.NAME,
					)
					switch (operationToken.value) {
						case 'query':
							return OperationTypeNode.QUERY
						case 'mutation':
							return OperationTypeNode.MUTATION
						case 'subscription':
							return OperationTypeNode.SUBSCRIPTION
					}
					throw this.unexpected(operationToken)
				}
				parseVariableDefinitions() {
					return this.optionalMany(
						tokenKind_TokenKind.PAREN_L,
						this.parseVariableDefinition,
						tokenKind_TokenKind.PAREN_R,
					)
				}
				parseVariableDefinition() {
					return this.node(this._lexer.token, {
						kind: kinds_Kind.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type:
							(this.expectToken(tokenKind_TokenKind.COLON),
							this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(
							tokenKind_TokenKind.EQUALS,
						)
							? this.parseConstValueLiteral()
							: void 0,
						directives: this.parseConstDirectives(),
					})
				}
				parseVariable() {
					const start = this._lexer.token
					return (
						this.expectToken(tokenKind_TokenKind.DOLLAR),
						this.node(start, {
							kind: kinds_Kind.VARIABLE,
							name: this.parseName(),
						})
					)
				}
				parseSelectionSet() {
					return this.node(this._lexer.token, {
						kind: kinds_Kind.SELECTION_SET,
						selections: this.many(
							tokenKind_TokenKind.BRACE_L,
							this.parseSelection,
							tokenKind_TokenKind.BRACE_R,
						),
					})
				}
				parseSelection() {
					return this.peek(tokenKind_TokenKind.SPREAD)
						? this.parseFragment()
						: this.parseField()
				}
				parseField() {
					const start = this._lexer.token,
						nameOrAlias = this.parseName()
					let alias, name
					return (
						this.expectOptionalToken(tokenKind_TokenKind.COLON)
							? ((alias = nameOrAlias), (name = this.parseName()))
							: (name = nameOrAlias),
						this.node(start, {
							kind: kinds_Kind.FIELD,
							alias,
							name,
							arguments: this.parseArguments(!1),
							directives: this.parseDirectives(!1),
							selectionSet: this.peek(tokenKind_TokenKind.BRACE_L)
								? this.parseSelectionSet()
								: void 0,
						})
					)
				}
				parseArguments(isConst) {
					const item = isConst
						? this.parseConstArgument
						: this.parseArgument
					return this.optionalMany(
						tokenKind_TokenKind.PAREN_L,
						item,
						tokenKind_TokenKind.PAREN_R,
					)
				}
				parseArgument(isConst = !1) {
					const start = this._lexer.token,
						name = this.parseName()
					return (
						this.expectToken(tokenKind_TokenKind.COLON),
						this.node(start, {
							kind: kinds_Kind.ARGUMENT,
							name,
							value: this.parseValueLiteral(isConst),
						})
					)
				}
				parseConstArgument() {
					return this.parseArgument(!0)
				}
				parseFragment() {
					const start = this._lexer.token
					this.expectToken(tokenKind_TokenKind.SPREAD)
					const hasTypeCondition = this.expectOptionalKeyword('on')
					return !hasTypeCondition &&
						this.peek(tokenKind_TokenKind.NAME)
						? this.node(start, {
								kind: kinds_Kind.FRAGMENT_SPREAD,
								name: this.parseFragmentName(),
								directives: this.parseDirectives(!1),
						  })
						: this.node(start, {
								kind: kinds_Kind.INLINE_FRAGMENT,
								typeCondition: hasTypeCondition
									? this.parseNamedType()
									: void 0,
								directives: this.parseDirectives(!1),
								selectionSet: this.parseSelectionSet(),
						  })
				}
				parseFragmentDefinition() {
					const start = this._lexer.token
					return (
						this.expectKeyword('fragment'),
						!0 === this._options.allowLegacyFragmentVariables
							? this.node(start, {
									kind: kinds_Kind.FRAGMENT_DEFINITION,
									name: this.parseFragmentName(),
									variableDefinitions:
										this.parseVariableDefinitions(),
									typeCondition:
										(this.expectKeyword('on'),
										this.parseNamedType()),
									directives: this.parseDirectives(!1),
									selectionSet: this.parseSelectionSet(),
							  })
							: this.node(start, {
									kind: kinds_Kind.FRAGMENT_DEFINITION,
									name: this.parseFragmentName(),
									typeCondition:
										(this.expectKeyword('on'),
										this.parseNamedType()),
									directives: this.parseDirectives(!1),
									selectionSet: this.parseSelectionSet(),
							  })
					)
				}
				parseFragmentName() {
					if ('on' === this._lexer.token.value)
						throw this.unexpected()
					return this.parseName()
				}
				parseValueLiteral(isConst) {
					const token = this._lexer.token
					switch (token.kind) {
						case tokenKind_TokenKind.BRACKET_L:
							return this.parseList(isConst)
						case tokenKind_TokenKind.BRACE_L:
							return this.parseObject(isConst)
						case tokenKind_TokenKind.INT:
							return (
								this.advanceLexer(),
								this.node(token, {
									kind: kinds_Kind.INT,
									value: token.value,
								})
							)
						case tokenKind_TokenKind.FLOAT:
							return (
								this.advanceLexer(),
								this.node(token, {
									kind: kinds_Kind.FLOAT,
									value: token.value,
								})
							)
						case tokenKind_TokenKind.STRING:
						case tokenKind_TokenKind.BLOCK_STRING:
							return this.parseStringLiteral()
						case tokenKind_TokenKind.NAME:
							switch ((this.advanceLexer(), token.value)) {
								case 'true':
									return this.node(token, {
										kind: kinds_Kind.BOOLEAN,
										value: !0,
									})
								case 'false':
									return this.node(token, {
										kind: kinds_Kind.BOOLEAN,
										value: !1,
									})
								case 'null':
									return this.node(token, {
										kind: kinds_Kind.NULL,
									})
								default:
									return this.node(token, {
										kind: kinds_Kind.ENUM,
										value: token.value,
									})
							}
						case tokenKind_TokenKind.DOLLAR:
							if (isConst) {
								if (
									(this.expectToken(
										tokenKind_TokenKind.DOLLAR,
									),
									this._lexer.token.kind ===
										tokenKind_TokenKind.NAME)
								) {
									const varName = this._lexer.token.value
									throw syntaxError(
										this._lexer.source,
										token.start,
										`Unexpected variable "$${varName}" in constant value.`,
									)
								}
								throw this.unexpected(token)
							}
							return this.parseVariable()
						default:
							throw this.unexpected()
					}
				}
				parseConstValueLiteral() {
					return this.parseValueLiteral(!0)
				}
				parseStringLiteral() {
					const token = this._lexer.token
					return (
						this.advanceLexer(),
						this.node(token, {
							kind: kinds_Kind.STRING,
							value: token.value,
							block:
								token.kind === tokenKind_TokenKind.BLOCK_STRING,
						})
					)
				}
				parseList(isConst) {
					return this.node(this._lexer.token, {
						kind: kinds_Kind.LIST,
						values: this.any(
							tokenKind_TokenKind.BRACKET_L,
							() => this.parseValueLiteral(isConst),
							tokenKind_TokenKind.BRACKET_R,
						),
					})
				}
				parseObject(isConst) {
					return this.node(this._lexer.token, {
						kind: kinds_Kind.OBJECT,
						fields: this.any(
							tokenKind_TokenKind.BRACE_L,
							() => this.parseObjectField(isConst),
							tokenKind_TokenKind.BRACE_R,
						),
					})
				}
				parseObjectField(isConst) {
					const start = this._lexer.token,
						name = this.parseName()
					return (
						this.expectToken(tokenKind_TokenKind.COLON),
						this.node(start, {
							kind: kinds_Kind.OBJECT_FIELD,
							name,
							value: this.parseValueLiteral(isConst),
						})
					)
				}
				parseDirectives(isConst) {
					const directives = []
					for (; this.peek(tokenKind_TokenKind.AT); )
						directives.push(this.parseDirective(isConst))
					return directives
				}
				parseConstDirectives() {
					return this.parseDirectives(!0)
				}
				parseDirective(isConst) {
					const start = this._lexer.token
					return (
						this.expectToken(tokenKind_TokenKind.AT),
						this.node(start, {
							kind: kinds_Kind.DIRECTIVE,
							name: this.parseName(),
							arguments: this.parseArguments(isConst),
						})
					)
				}
				parseTypeReference() {
					const start = this._lexer.token
					let type
					if (
						this.expectOptionalToken(tokenKind_TokenKind.BRACKET_L)
					) {
						const innerType = this.parseTypeReference()
						this.expectToken(tokenKind_TokenKind.BRACKET_R),
							(type = this.node(start, {
								kind: kinds_Kind.LIST_TYPE,
								type: innerType,
							}))
					} else type = this.parseNamedType()
					return this.expectOptionalToken(tokenKind_TokenKind.BANG)
						? this.node(start, {
								kind: kinds_Kind.NON_NULL_TYPE,
								type,
						  })
						: type
				}
				parseNamedType() {
					return this.node(this._lexer.token, {
						kind: kinds_Kind.NAMED_TYPE,
						name: this.parseName(),
					})
				}
				peekDescription() {
					return (
						this.peek(tokenKind_TokenKind.STRING) ||
						this.peek(tokenKind_TokenKind.BLOCK_STRING)
					)
				}
				parseDescription() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}
				parseSchemaDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('schema')
					const directives = this.parseConstDirectives(),
						operationTypes = this.many(
							tokenKind_TokenKind.BRACE_L,
							this.parseOperationTypeDefinition,
							tokenKind_TokenKind.BRACE_R,
						)
					return this.node(start, {
						kind: kinds_Kind.SCHEMA_DEFINITION,
						description,
						directives,
						operationTypes,
					})
				}
				parseOperationTypeDefinition() {
					const start = this._lexer.token,
						operation = this.parseOperationType()
					this.expectToken(tokenKind_TokenKind.COLON)
					const type = this.parseNamedType()
					return this.node(start, {
						kind: kinds_Kind.OPERATION_TYPE_DEFINITION,
						operation,
						type,
					})
				}
				parseScalarTypeDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('scalar')
					const name = this.parseName(),
						directives = this.parseConstDirectives()
					return this.node(start, {
						kind: kinds_Kind.SCALAR_TYPE_DEFINITION,
						description,
						name,
						directives,
					})
				}
				parseObjectTypeDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('type')
					const name = this.parseName(),
						interfaces = this.parseImplementsInterfaces(),
						directives = this.parseConstDirectives(),
						fields = this.parseFieldsDefinition()
					return this.node(start, {
						kind: kinds_Kind.OBJECT_TYPE_DEFINITION,
						description,
						name,
						interfaces,
						directives,
						fields,
					})
				}
				parseImplementsInterfaces() {
					return this.expectOptionalKeyword('implements')
						? this.delimitedMany(
								tokenKind_TokenKind.AMP,
								this.parseNamedType,
						  )
						: []
				}
				parseFieldsDefinition() {
					return this.optionalMany(
						tokenKind_TokenKind.BRACE_L,
						this.parseFieldDefinition,
						tokenKind_TokenKind.BRACE_R,
					)
				}
				parseFieldDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription(),
						name = this.parseName(),
						args = this.parseArgumentDefs()
					this.expectToken(tokenKind_TokenKind.COLON)
					const type = this.parseTypeReference(),
						directives = this.parseConstDirectives()
					return this.node(start, {
						kind: kinds_Kind.FIELD_DEFINITION,
						description,
						name,
						arguments: args,
						type,
						directives,
					})
				}
				parseArgumentDefs() {
					return this.optionalMany(
						tokenKind_TokenKind.PAREN_L,
						this.parseInputValueDef,
						tokenKind_TokenKind.PAREN_R,
					)
				}
				parseInputValueDef() {
					const start = this._lexer.token,
						description = this.parseDescription(),
						name = this.parseName()
					this.expectToken(tokenKind_TokenKind.COLON)
					const type = this.parseTypeReference()
					let defaultValue
					this.expectOptionalToken(tokenKind_TokenKind.EQUALS) &&
						(defaultValue = this.parseConstValueLiteral())
					const directives = this.parseConstDirectives()
					return this.node(start, {
						kind: kinds_Kind.INPUT_VALUE_DEFINITION,
						description,
						name,
						type,
						defaultValue,
						directives,
					})
				}
				parseInterfaceTypeDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('interface')
					const name = this.parseName(),
						interfaces = this.parseImplementsInterfaces(),
						directives = this.parseConstDirectives(),
						fields = this.parseFieldsDefinition()
					return this.node(start, {
						kind: kinds_Kind.INTERFACE_TYPE_DEFINITION,
						description,
						name,
						interfaces,
						directives,
						fields,
					})
				}
				parseUnionTypeDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('union')
					const name = this.parseName(),
						directives = this.parseConstDirectives(),
						types = this.parseUnionMemberTypes()
					return this.node(start, {
						kind: kinds_Kind.UNION_TYPE_DEFINITION,
						description,
						name,
						directives,
						types,
					})
				}
				parseUnionMemberTypes() {
					return this.expectOptionalToken(tokenKind_TokenKind.EQUALS)
						? this.delimitedMany(
								tokenKind_TokenKind.PIPE,
								this.parseNamedType,
						  )
						: []
				}
				parseEnumTypeDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('enum')
					const name = this.parseName(),
						directives = this.parseConstDirectives(),
						values = this.parseEnumValuesDefinition()
					return this.node(start, {
						kind: kinds_Kind.ENUM_TYPE_DEFINITION,
						description,
						name,
						directives,
						values,
					})
				}
				parseEnumValuesDefinition() {
					return this.optionalMany(
						tokenKind_TokenKind.BRACE_L,
						this.parseEnumValueDefinition,
						tokenKind_TokenKind.BRACE_R,
					)
				}
				parseEnumValueDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription(),
						name = this.parseEnumValueName(),
						directives = this.parseConstDirectives()
					return this.node(start, {
						kind: kinds_Kind.ENUM_VALUE_DEFINITION,
						description,
						name,
						directives,
					})
				}
				parseEnumValueName() {
					if (
						'true' === this._lexer.token.value ||
						'false' === this._lexer.token.value ||
						'null' === this._lexer.token.value
					)
						throw syntaxError(
							this._lexer.source,
							this._lexer.token.start,
							`${getTokenDesc(
								this._lexer.token,
							)} is reserved and cannot be used for an enum value.`,
						)
					return this.parseName()
				}
				parseInputObjectTypeDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('input')
					const name = this.parseName(),
						directives = this.parseConstDirectives(),
						fields = this.parseInputFieldsDefinition()
					return this.node(start, {
						kind: kinds_Kind.INPUT_OBJECT_TYPE_DEFINITION,
						description,
						name,
						directives,
						fields,
					})
				}
				parseInputFieldsDefinition() {
					return this.optionalMany(
						tokenKind_TokenKind.BRACE_L,
						this.parseInputValueDef,
						tokenKind_TokenKind.BRACE_R,
					)
				}
				parseTypeSystemExtension() {
					const keywordToken = this._lexer.lookahead()
					if (keywordToken.kind === tokenKind_TokenKind.NAME)
						switch (keywordToken.value) {
							case 'schema':
								return this.parseSchemaExtension()
							case 'scalar':
								return this.parseScalarTypeExtension()
							case 'type':
								return this.parseObjectTypeExtension()
							case 'interface':
								return this.parseInterfaceTypeExtension()
							case 'union':
								return this.parseUnionTypeExtension()
							case 'enum':
								return this.parseEnumTypeExtension()
							case 'input':
								return this.parseInputObjectTypeExtension()
						}
					throw this.unexpected(keywordToken)
				}
				parseSchemaExtension() {
					const start = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('schema')
					const directives = this.parseConstDirectives(),
						operationTypes = this.optionalMany(
							tokenKind_TokenKind.BRACE_L,
							this.parseOperationTypeDefinition,
							tokenKind_TokenKind.BRACE_R,
						)
					if (0 === directives.length && 0 === operationTypes.length)
						throw this.unexpected()
					return this.node(start, {
						kind: kinds_Kind.SCHEMA_EXTENSION,
						directives,
						operationTypes,
					})
				}
				parseScalarTypeExtension() {
					const start = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('scalar')
					const name = this.parseName(),
						directives = this.parseConstDirectives()
					if (0 === directives.length) throw this.unexpected()
					return this.node(start, {
						kind: kinds_Kind.SCALAR_TYPE_EXTENSION,
						name,
						directives,
					})
				}
				parseObjectTypeExtension() {
					const start = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('type')
					const name = this.parseName(),
						interfaces = this.parseImplementsInterfaces(),
						directives = this.parseConstDirectives(),
						fields = this.parseFieldsDefinition()
					if (
						0 === interfaces.length &&
						0 === directives.length &&
						0 === fields.length
					)
						throw this.unexpected()
					return this.node(start, {
						kind: kinds_Kind.OBJECT_TYPE_EXTENSION,
						name,
						interfaces,
						directives,
						fields,
					})
				}
				parseInterfaceTypeExtension() {
					const start = this._lexer.token
					this.expectKeyword('extend'),
						this.expectKeyword('interface')
					const name = this.parseName(),
						interfaces = this.parseImplementsInterfaces(),
						directives = this.parseConstDirectives(),
						fields = this.parseFieldsDefinition()
					if (
						0 === interfaces.length &&
						0 === directives.length &&
						0 === fields.length
					)
						throw this.unexpected()
					return this.node(start, {
						kind: kinds_Kind.INTERFACE_TYPE_EXTENSION,
						name,
						interfaces,
						directives,
						fields,
					})
				}
				parseUnionTypeExtension() {
					const start = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('union')
					const name = this.parseName(),
						directives = this.parseConstDirectives(),
						types = this.parseUnionMemberTypes()
					if (0 === directives.length && 0 === types.length)
						throw this.unexpected()
					return this.node(start, {
						kind: kinds_Kind.UNION_TYPE_EXTENSION,
						name,
						directives,
						types,
					})
				}
				parseEnumTypeExtension() {
					const start = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('enum')
					const name = this.parseName(),
						directives = this.parseConstDirectives(),
						values = this.parseEnumValuesDefinition()
					if (0 === directives.length && 0 === values.length)
						throw this.unexpected()
					return this.node(start, {
						kind: kinds_Kind.ENUM_TYPE_EXTENSION,
						name,
						directives,
						values,
					})
				}
				parseInputObjectTypeExtension() {
					const start = this._lexer.token
					this.expectKeyword('extend'), this.expectKeyword('input')
					const name = this.parseName(),
						directives = this.parseConstDirectives(),
						fields = this.parseInputFieldsDefinition()
					if (0 === directives.length && 0 === fields.length)
						throw this.unexpected()
					return this.node(start, {
						kind: kinds_Kind.INPUT_OBJECT_TYPE_EXTENSION,
						name,
						directives,
						fields,
					})
				}
				parseDirectiveDefinition() {
					const start = this._lexer.token,
						description = this.parseDescription()
					this.expectKeyword('directive'),
						this.expectToken(tokenKind_TokenKind.AT)
					const name = this.parseName(),
						args = this.parseArgumentDefs(),
						repeatable = this.expectOptionalKeyword('repeatable')
					this.expectKeyword('on')
					const locations = this.parseDirectiveLocations()
					return this.node(start, {
						kind: kinds_Kind.DIRECTIVE_DEFINITION,
						description,
						name,
						arguments: args,
						repeatable,
						locations,
					})
				}
				parseDirectiveLocations() {
					return this.delimitedMany(
						tokenKind_TokenKind.PIPE,
						this.parseDirectiveLocation,
					)
				}
				parseDirectiveLocation() {
					const start = this._lexer.token,
						name = this.parseName()
					if (
						Object.prototype.hasOwnProperty.call(
							DirectiveLocation,
							name.value,
						)
					)
						return name
					throw this.unexpected(start)
				}
				node(startToken, node) {
					return (
						!0 !== this._options.noLocation &&
							(node.loc = new Location(
								startToken,
								this._lexer.lastToken,
								this._lexer.source,
							)),
						node
					)
				}
				peek(kind) {
					return this._lexer.token.kind === kind
				}
				expectToken(kind) {
					const token = this._lexer.token
					if (token.kind === kind) return this.advanceLexer(), token
					throw syntaxError(
						this._lexer.source,
						token.start,
						`Expected ${getTokenKindDesc(
							kind,
						)}, found ${getTokenDesc(token)}.`,
					)
				}
				expectOptionalToken(kind) {
					return (
						this._lexer.token.kind === kind &&
						(this.advanceLexer(), !0)
					)
				}
				expectKeyword(value) {
					const token = this._lexer.token
					if (
						token.kind !== tokenKind_TokenKind.NAME ||
						token.value !== value
					)
						throw syntaxError(
							this._lexer.source,
							token.start,
							`Expected "${value}", found ${getTokenDesc(
								token,
							)}.`,
						)
					this.advanceLexer()
				}
				expectOptionalKeyword(value) {
					const token = this._lexer.token
					return (
						token.kind === tokenKind_TokenKind.NAME &&
						token.value === value &&
						(this.advanceLexer(), !0)
					)
				}
				unexpected(atToken) {
					const token = null != atToken ? atToken : this._lexer.token
					return syntaxError(
						this._lexer.source,
						token.start,
						`Unexpected ${getTokenDesc(token)}.`,
					)
				}
				any(openKind, parseFn, closeKind) {
					this.expectToken(openKind)
					const nodes = []
					for (; !this.expectOptionalToken(closeKind); )
						nodes.push(parseFn.call(this))
					return nodes
				}
				optionalMany(openKind, parseFn, closeKind) {
					if (this.expectOptionalToken(openKind)) {
						const nodes = []
						do {
							nodes.push(parseFn.call(this))
						} while (!this.expectOptionalToken(closeKind))
						return nodes
					}
					return []
				}
				many(openKind, parseFn, closeKind) {
					this.expectToken(openKind)
					const nodes = []
					do {
						nodes.push(parseFn.call(this))
					} while (!this.expectOptionalToken(closeKind))
					return nodes
				}
				delimitedMany(delimiterKind, parseFn) {
					this.expectOptionalToken(delimiterKind)
					const nodes = []
					do {
						nodes.push(parseFn.call(this))
					} while (this.expectOptionalToken(delimiterKind))
					return nodes
				}
				advanceLexer() {
					const { maxTokens } = this._options,
						token = this._lexer.advance()
					if (
						void 0 !== maxTokens &&
						token.kind !== tokenKind_TokenKind.EOF &&
						(++this._tokenCounter, this._tokenCounter > maxTokens)
					)
						throw syntaxError(
							this._lexer.source,
							token.start,
							`Document contains more that ${maxTokens} tokens. Parsing aborted.`,
						)
				}
			}
			function getTokenDesc(token) {
				const value = token.value
				return (
					getTokenKindDesc(token.kind) +
					(null != value ? ` "${value}"` : '')
				)
			}
			function getTokenKindDesc(kind) {
				return (function isPunctuatorTokenKind(kind) {
					return (
						kind === tokenKind_TokenKind.BANG ||
						kind === tokenKind_TokenKind.DOLLAR ||
						kind === tokenKind_TokenKind.AMP ||
						kind === tokenKind_TokenKind.PAREN_L ||
						kind === tokenKind_TokenKind.PAREN_R ||
						kind === tokenKind_TokenKind.SPREAD ||
						kind === tokenKind_TokenKind.COLON ||
						kind === tokenKind_TokenKind.EQUALS ||
						kind === tokenKind_TokenKind.AT ||
						kind === tokenKind_TokenKind.BRACKET_L ||
						kind === tokenKind_TokenKind.BRACKET_R ||
						kind === tokenKind_TokenKind.BRACE_L ||
						kind === tokenKind_TokenKind.PIPE ||
						kind === tokenKind_TokenKind.BRACE_R
					)
				})(kind)
					? `"${kind}"`
					: kind
			}
			const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g
			function escapedReplacer(str) {
				return escapeSequences[str.charCodeAt(0)]
			}
			const escapeSequences = [
					'\\u0000',
					'\\u0001',
					'\\u0002',
					'\\u0003',
					'\\u0004',
					'\\u0005',
					'\\u0006',
					'\\u0007',
					'\\b',
					'\\t',
					'\\n',
					'\\u000B',
					'\\f',
					'\\r',
					'\\u000E',
					'\\u000F',
					'\\u0010',
					'\\u0011',
					'\\u0012',
					'\\u0013',
					'\\u0014',
					'\\u0015',
					'\\u0016',
					'\\u0017',
					'\\u0018',
					'\\u0019',
					'\\u001A',
					'\\u001B',
					'\\u001C',
					'\\u001D',
					'\\u001E',
					'\\u001F',
					'',
					'',
					'\\"',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'\\\\',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'\\u007F',
					'\\u0080',
					'\\u0081',
					'\\u0082',
					'\\u0083',
					'\\u0084',
					'\\u0085',
					'\\u0086',
					'\\u0087',
					'\\u0088',
					'\\u0089',
					'\\u008A',
					'\\u008B',
					'\\u008C',
					'\\u008D',
					'\\u008E',
					'\\u008F',
					'\\u0090',
					'\\u0091',
					'\\u0092',
					'\\u0093',
					'\\u0094',
					'\\u0095',
					'\\u0096',
					'\\u0097',
					'\\u0098',
					'\\u0099',
					'\\u009A',
					'\\u009B',
					'\\u009C',
					'\\u009D',
					'\\u009E',
					'\\u009F',
				],
				BREAK = Object.freeze({})
			function getEnterLeaveForKind(visitor, kind) {
				const kindVisitor = visitor[kind]
				return 'object' == typeof kindVisitor
					? kindVisitor
					: 'function' == typeof kindVisitor
					? { enter: kindVisitor, leave: void 0 }
					: { enter: visitor.enter, leave: visitor.leave }
			}
			function print(ast) {
				return (function visit(
					root,
					visitor,
					visitorKeys = QueryDocumentKeys,
				) {
					const enterLeaveMap = new Map()
					for (const kind of Object.values(kinds_Kind))
						enterLeaveMap.set(
							kind,
							getEnterLeaveForKind(visitor, kind),
						)
					let stack,
						key,
						parent,
						inArray = Array.isArray(root),
						keys = [root],
						index = -1,
						edits = [],
						node = root
					const path = [],
						ancestors = []
					do {
						index++
						const isLeaving = index === keys.length,
							isEdited = isLeaving && 0 !== edits.length
						if (isLeaving) {
							if (
								((key =
									0 === ancestors.length
										? void 0
										: path[path.length - 1]),
								(node = parent),
								(parent = ancestors.pop()),
								isEdited)
							)
								if (inArray) {
									node = node.slice()
									let editOffset = 0
									for (const [editKey, editValue] of edits) {
										const arrayKey = editKey - editOffset
										null === editValue
											? (node.splice(arrayKey, 1),
											  editOffset++)
											: (node[arrayKey] = editValue)
									}
								} else {
									node = Object.defineProperties(
										{},
										Object.getOwnPropertyDescriptors(node),
									)
									for (const [editKey, editValue] of edits)
										node[editKey] = editValue
								}
							;(index = stack.index),
								(keys = stack.keys),
								(edits = stack.edits),
								(inArray = stack.inArray),
								(stack = stack.prev)
						} else if (parent) {
							if (
								((key = inArray ? index : keys[index]),
								(node = parent[key]),
								null == node)
							)
								continue
							path.push(key)
						}
						let result
						if (!Array.isArray(node)) {
							var _enterLeaveMap$get, _enterLeaveMap$get2
							isNode(node) ||
								devAssert(
									!1,
									`Invalid AST Node: ${inspect(node)}.`,
								)
							const visitFn = isLeaving
								? null ===
										(_enterLeaveMap$get = enterLeaveMap.get(
											node.kind,
										)) || void 0 === _enterLeaveMap$get
									? void 0
									: _enterLeaveMap$get.leave
								: null ===
										(_enterLeaveMap$get2 =
											enterLeaveMap.get(node.kind)) ||
								  void 0 === _enterLeaveMap$get2
								? void 0
								: _enterLeaveMap$get2.enter
							if (
								((result =
									null == visitFn
										? void 0
										: visitFn.call(
												visitor,
												node,
												key,
												parent,
												path,
												ancestors,
										  )),
								result === BREAK)
							)
								break
							if (!1 === result) {
								if (!isLeaving) {
									path.pop()
									continue
								}
							} else if (
								void 0 !== result &&
								(edits.push([key, result]), !isLeaving)
							) {
								if (!isNode(result)) {
									path.pop()
									continue
								}
								node = result
							}
						}
						var _node$kind
						void 0 === result &&
							isEdited &&
							edits.push([key, node]),
							isLeaving
								? path.pop()
								: ((stack = {
										inArray,
										index,
										keys,
										edits,
										prev: stack,
								  }),
								  (inArray = Array.isArray(node)),
								  (keys = inArray
										? node
										: null !==
												(_node$kind =
													visitorKeys[node.kind]) &&
										  void 0 !== _node$kind
										? _node$kind
										: []),
								  (index = -1),
								  (edits = []),
								  parent && ancestors.push(parent),
								  (parent = node))
					} while (void 0 !== stack)
					return 0 !== edits.length
						? edits[edits.length - 1][1]
						: root
				})(ast, printDocASTReducer)
			}
			const printDocASTReducer = {
				Name: { leave: (node) => node.value },
				Variable: { leave: (node) => '$' + node.name },
				Document: { leave: (node) => join(node.definitions, '\n\n') },
				OperationDefinition: {
					leave(node) {
						const varDefs = wrap(
								'(',
								join(node.variableDefinitions, ', '),
								')',
							),
							prefix = join(
								[
									node.operation,
									join([node.name, varDefs]),
									join(node.directives, ' '),
								],
								' ',
							)
						return (
							('query' === prefix ? '' : prefix + ' ') +
							node.selectionSet
						)
					},
				},
				VariableDefinition: {
					leave: ({ variable, type, defaultValue, directives }) =>
						variable +
						': ' +
						type +
						wrap(' = ', defaultValue) +
						wrap(' ', join(directives, ' ')),
				},
				SelectionSet: { leave: ({ selections }) => block(selections) },
				Field: {
					leave({
						alias,
						name,
						arguments: args,
						directives,
						selectionSet,
					}) {
						const prefix = wrap('', alias, ': ') + name
						let argsLine = prefix + wrap('(', join(args, ', '), ')')
						return (
							argsLine.length > 80 &&
								(argsLine =
									prefix +
									wrap(
										'(\n',
										indent(join(args, '\n')),
										'\n)',
									)),
							join(
								[argsLine, join(directives, ' '), selectionSet],
								' ',
							)
						)
					},
				},
				Argument: { leave: ({ name, value }) => name + ': ' + value },
				FragmentSpread: {
					leave: ({ name, directives }) =>
						'...' + name + wrap(' ', join(directives, ' ')),
				},
				InlineFragment: {
					leave: ({ typeCondition, directives, selectionSet }) =>
						join(
							[
								'...',
								wrap('on ', typeCondition),
								join(directives, ' '),
								selectionSet,
							],
							' ',
						),
				},
				FragmentDefinition: {
					leave: ({
						name,
						typeCondition,
						variableDefinitions,
						directives,
						selectionSet,
					}) =>
						`fragment ${name}${wrap(
							'(',
							join(variableDefinitions, ', '),
							')',
						)} on ${typeCondition} ${wrap(
							'',
							join(directives, ' '),
							' ',
						)}` + selectionSet,
				},
				IntValue: { leave: ({ value }) => value },
				FloatValue: { leave: ({ value }) => value },
				StringValue: {
					leave: ({ value, block: isBlockString }) =>
						isBlockString
							? (function printBlockString(value, options) {
									const escapedValue = value.replace(
											/"""/g,
											'\\"""',
										),
										lines =
											escapedValue.split(/\r\n|[\n\r]/g),
										isSingleLine = 1 === lines.length,
										forceLeadingNewLine =
											lines.length > 1 &&
											lines
												.slice(1)
												.every(
													(line) =>
														0 === line.length ||
														isWhiteSpace(
															line.charCodeAt(0),
														),
												),
										hasTrailingTripleQuotes =
											escapedValue.endsWith('\\"""'),
										hasTrailingQuote =
											value.endsWith('"') &&
											!hasTrailingTripleQuotes,
										hasTrailingSlash = value.endsWith('\\'),
										forceTrailingNewline =
											hasTrailingQuote ||
											hasTrailingSlash,
										printAsMultipleLines =
											!(
												null != options &&
												options.minimize
											) &&
											(!isSingleLine ||
												value.length > 70 ||
												forceTrailingNewline ||
												forceLeadingNewLine ||
												hasTrailingTripleQuotes)
									let result = ''
									const skipLeadingNewLine =
										isSingleLine &&
										isWhiteSpace(value.charCodeAt(0))
									return (
										((printAsMultipleLines &&
											!skipLeadingNewLine) ||
											forceLeadingNewLine) &&
											(result += '\n'),
										(result += escapedValue),
										(printAsMultipleLines ||
											forceTrailingNewline) &&
											(result += '\n'),
										'"""' + result + '"""'
									)
							  })(value)
							: (function printString(str) {
									return `"${str.replace(
										escapedRegExp,
										escapedReplacer,
									)}"`
							  })(value),
				},
				BooleanValue: {
					leave: ({ value }) => (value ? 'true' : 'false'),
				},
				NullValue: { leave: () => 'null' },
				EnumValue: { leave: ({ value }) => value },
				ListValue: {
					leave: ({ values }) => '[' + join(values, ', ') + ']',
				},
				ObjectValue: {
					leave: ({ fields }) => '{' + join(fields, ', ') + '}',
				},
				ObjectField: {
					leave: ({ name, value }) => name + ': ' + value,
				},
				Directive: {
					leave: ({ name, arguments: args }) =>
						'@' + name + wrap('(', join(args, ', '), ')'),
				},
				NamedType: { leave: ({ name }) => name },
				ListType: { leave: ({ type }) => '[' + type + ']' },
				NonNullType: { leave: ({ type }) => type + '!' },
				SchemaDefinition: {
					leave: ({ description, directives, operationTypes }) =>
						wrap('', description, '\n') +
						join(
							[
								'schema',
								join(directives, ' '),
								block(operationTypes),
							],
							' ',
						),
				},
				OperationTypeDefinition: {
					leave: ({ operation, type }) => operation + ': ' + type,
				},
				ScalarTypeDefinition: {
					leave: ({ description, name, directives }) =>
						wrap('', description, '\n') +
						join(['scalar', name, join(directives, ' ')], ' '),
				},
				ObjectTypeDefinition: {
					leave: ({
						description,
						name,
						interfaces,
						directives,
						fields,
					}) =>
						wrap('', description, '\n') +
						join(
							[
								'type',
								name,
								wrap('implements ', join(interfaces, ' & ')),
								join(directives, ' '),
								block(fields),
							],
							' ',
						),
				},
				FieldDefinition: {
					leave: ({
						description,
						name,
						arguments: args,
						type,
						directives,
					}) =>
						wrap('', description, '\n') +
						name +
						(hasMultilineItems(args)
							? wrap('(\n', indent(join(args, '\n')), '\n)')
							: wrap('(', join(args, ', '), ')')) +
						': ' +
						type +
						wrap(' ', join(directives, ' ')),
				},
				InputValueDefinition: {
					leave: ({
						description,
						name,
						type,
						defaultValue,
						directives,
					}) =>
						wrap('', description, '\n') +
						join(
							[
								name + ': ' + type,
								wrap('= ', defaultValue),
								join(directives, ' '),
							],
							' ',
						),
				},
				InterfaceTypeDefinition: {
					leave: ({
						description,
						name,
						interfaces,
						directives,
						fields,
					}) =>
						wrap('', description, '\n') +
						join(
							[
								'interface',
								name,
								wrap('implements ', join(interfaces, ' & ')),
								join(directives, ' '),
								block(fields),
							],
							' ',
						),
				},
				UnionTypeDefinition: {
					leave: ({ description, name, directives, types }) =>
						wrap('', description, '\n') +
						join(
							[
								'union',
								name,
								join(directives, ' '),
								wrap('= ', join(types, ' | ')),
							],
							' ',
						),
				},
				EnumTypeDefinition: {
					leave: ({ description, name, directives, values }) =>
						wrap('', description, '\n') +
						join(
							[
								'enum',
								name,
								join(directives, ' '),
								block(values),
							],
							' ',
						),
				},
				EnumValueDefinition: {
					leave: ({ description, name, directives }) =>
						wrap('', description, '\n') +
						join([name, join(directives, ' ')], ' '),
				},
				InputObjectTypeDefinition: {
					leave: ({ description, name, directives, fields }) =>
						wrap('', description, '\n') +
						join(
							[
								'input',
								name,
								join(directives, ' '),
								block(fields),
							],
							' ',
						),
				},
				DirectiveDefinition: {
					leave: ({
						description,
						name,
						arguments: args,
						repeatable,
						locations,
					}) =>
						wrap('', description, '\n') +
						'directive @' +
						name +
						(hasMultilineItems(args)
							? wrap('(\n', indent(join(args, '\n')), '\n)')
							: wrap('(', join(args, ', '), ')')) +
						(repeatable ? ' repeatable' : '') +
						' on ' +
						join(locations, ' | '),
				},
				SchemaExtension: {
					leave: ({ directives, operationTypes }) =>
						join(
							[
								'extend schema',
								join(directives, ' '),
								block(operationTypes),
							],
							' ',
						),
				},
				ScalarTypeExtension: {
					leave: ({ name, directives }) =>
						join(
							['extend scalar', name, join(directives, ' ')],
							' ',
						),
				},
				ObjectTypeExtension: {
					leave: ({ name, interfaces, directives, fields }) =>
						join(
							[
								'extend type',
								name,
								wrap('implements ', join(interfaces, ' & ')),
								join(directives, ' '),
								block(fields),
							],
							' ',
						),
				},
				InterfaceTypeExtension: {
					leave: ({ name, interfaces, directives, fields }) =>
						join(
							[
								'extend interface',
								name,
								wrap('implements ', join(interfaces, ' & ')),
								join(directives, ' '),
								block(fields),
							],
							' ',
						),
				},
				UnionTypeExtension: {
					leave: ({ name, directives, types }) =>
						join(
							[
								'extend union',
								name,
								join(directives, ' '),
								wrap('= ', join(types, ' | ')),
							],
							' ',
						),
				},
				EnumTypeExtension: {
					leave: ({ name, directives, values }) =>
						join(
							[
								'extend enum',
								name,
								join(directives, ' '),
								block(values),
							],
							' ',
						),
				},
				InputObjectTypeExtension: {
					leave: ({ name, directives, fields }) =>
						join(
							[
								'extend input',
								name,
								join(directives, ' '),
								block(fields),
							],
							' ',
						),
				},
			}
			function join(maybeArray, separator = '') {
				var _maybeArray$filter$jo
				return null !==
					(_maybeArray$filter$jo =
						null == maybeArray
							? void 0
							: maybeArray.filter((x) => x).join(separator)) &&
					void 0 !== _maybeArray$filter$jo
					? _maybeArray$filter$jo
					: ''
			}
			function block(array) {
				return wrap('{\n', indent(join(array, '\n')), '\n}')
			}
			function wrap(start, maybeString, end = '') {
				return null != maybeString && '' !== maybeString
					? start + maybeString + end
					: ''
			}
			function indent(str) {
				return wrap('  ', str.replace(/\n/g, '\n  '))
			}
			function hasMultilineItems(maybeArray) {
				var _maybeArray$some
				return (
					null !==
						(_maybeArray$some =
							null == maybeArray
								? void 0
								: maybeArray.some((str) =>
										str.includes('\n'),
								  )) &&
					void 0 !== _maybeArray$some &&
					_maybeArray$some
				)
			}
			const extractOperationName = (document) => {
					let operationName
					const operationDefinitions = document.definitions.filter(
						(definition) =>
							'OperationDefinition' === definition.kind,
					)
					return (
						1 === operationDefinitions.length &&
							(operationName =
								operationDefinitions[0]?.name?.value),
						operationName
					)
				},
				resolveRequestDocument = (document) => {
					if ('string' == typeof document) {
						let operationName
						try {
							const parsedDocument = (function parse(
								source,
								options,
							) {
								return new Parser(
									source,
									options,
								).parseDocument()
							})(document)
							operationName = extractOperationName(parsedDocument)
						} catch (err) {}
						return { query: document, operationName }
					}
					const operationName = extractOperationName(document)
					return { query: print(document), operationName }
				}
			class ClientError extends Error {
				constructor(response, request) {
					super(
						`${ClientError.extractMessage(
							response,
						)}: ${JSON.stringify({ response, request })}`,
					),
						Object.setPrototypeOf(this, ClientError.prototype),
						(this.response = response),
						(this.request = request),
						'function' == typeof Error.captureStackTrace &&
							Error.captureStackTrace(this, ClientError)
				}
				static extractMessage(response) {
					return (
						response.errors?.[0]?.message ??
						`GraphQL Error (Code: ${response.status})`
					)
				}
			}
			var browser_ponyfill = __webpack_require__(
					'./node_modules/cross-fetch/dist/browser-ponyfill.js',
				),
				browser_ponyfill_default =
					__webpack_require__.n(browser_ponyfill)
			const resolveHeaders = (headers) => {
					let oHeaders = {}
					return (
						headers &&
							(('undefined' != typeof Headers &&
								headers instanceof Headers) ||
							(browser_ponyfill &&
								browser_ponyfill.Headers &&
								headers instanceof browser_ponyfill.Headers)
								? (oHeaders = ((headers) => {
										const o = {}
										return (
											headers.forEach((v, k) => {
												o[k] = v
											}),
											o
										)
								  })(headers))
								: Array.isArray(headers)
								? headers.forEach(([name, value]) => {
										name &&
											void 0 !== value &&
											(oHeaders[name] = value)
								  })
								: (oHeaders = headers)),
						oHeaders
					)
				},
				cleanQuery = (str) =>
					str.replace(/([\s,]|#[^\n\r]+)+/g, ' ').trim(),
				createHttpMethodFetcher = (method) => async (params) => {
					const {
							url,
							query,
							variables,
							operationName,
							fetch,
							fetchOptions,
							middleware,
						} = params,
						headers = { ...params.headers }
					let body,
						queryParams = ''
					'POST' === method
						? ((body = esm_createRequestBody(
								query,
								variables,
								operationName,
								fetchOptions.jsonSerializer,
						  )),
						  'string' == typeof body &&
								(headers['Content-Type'] = 'application/json'))
						: (queryParams = ((params) => {
								if (!Array.isArray(params.query)) {
									const params_ = params,
										search = [
											`query=${encodeURIComponent(
												cleanQuery(params_.query),
											)}`,
										]
									return (
										params.variables &&
											search.push(
												`variables=${encodeURIComponent(
													params_.jsonSerializer.stringify(
														params_.variables,
													),
												)}`,
											),
										params_.operationName &&
											search.push(
												`operationName=${encodeURIComponent(
													params_.operationName,
												)}`,
											),
										search.join('&')
									)
								}
								if (
									void 0 !== params.variables &&
									!Array.isArray(params.variables)
								)
									throw new Error(
										'Cannot create query with given variable type, array expected',
									)
								const params_ = params,
									payload = params.query.reduce(
										(acc, currentQuery, index) => (
											acc.push({
												query: cleanQuery(currentQuery),
												variables: params_.variables
													? params_.jsonSerializer.stringify(
															params_.variables[
																index
															],
													  )
													: void 0,
											}),
											acc
										),
										[],
									)
								return `query=${encodeURIComponent(
									params_.jsonSerializer.stringify(payload),
								)}`
						  })({
								query,
								variables,
								operationName,
								jsonSerializer:
									fetchOptions.jsonSerializer ??
									defaultJsonSerializer,
						  }))
					const init = { method, headers, body, ...fetchOptions }
					let urlResolved = url,
						initResolved = init
					if (middleware) {
						const result = await Promise.resolve(
								middleware({
									...init,
									url,
									operationName,
									variables,
								}),
							),
							{ url: urlNew, ...initNew } = result
						;(urlResolved = urlNew), (initResolved = initNew)
					}
					return (
						queryParams &&
							(urlResolved = `${urlResolved}?${queryParams}`),
						await fetch(urlResolved, initResolved)
					)
				}
			class GraphQLClient {
				constructor(url, requestConfig = {}) {
					;(this.url = url),
						(this.requestConfig = requestConfig),
						(this.rawRequest = async (...args) => {
							const [queryOrOptions, variables, requestHeaders] =
									args,
								rawRequestOptions = ((
									queryOrOptions,
									variables,
									requestHeaders,
								) =>
									queryOrOptions.query
										? queryOrOptions
										: {
												query: queryOrOptions,
												variables,
												requestHeaders,
												signal: void 0,
										  })(
									queryOrOptions,
									variables,
									requestHeaders,
								),
								{
									headers,
									fetch = browser_ponyfill_default(),
									method = 'POST',
									requestMiddleware,
									responseMiddleware,
									...fetchOptions
								} = this.requestConfig,
								{ url } = this
							void 0 !== rawRequestOptions.signal &&
								(fetchOptions.signal = rawRequestOptions.signal)
							const { operationName } = resolveRequestDocument(
								rawRequestOptions.query,
							)
							return makeRequest({
								url,
								query: rawRequestOptions.query,
								variables: rawRequestOptions.variables,
								headers: {
									...resolveHeaders(callOrIdentity(headers)),
									...resolveHeaders(
										rawRequestOptions.requestHeaders,
									),
								},
								operationName,
								fetch,
								method,
								fetchOptions,
								middleware: requestMiddleware,
							})
								.then(
									(response) => (
										responseMiddleware &&
											responseMiddleware(response),
										response
									),
								)
								.catch((error) => {
									throw (
										(responseMiddleware &&
											responseMiddleware(error),
										error)
									)
								})
						})
				}
				async request(
					documentOrOptions,
					...variablesAndRequestHeaders
				) {
					const [variables, requestHeaders] =
							variablesAndRequestHeaders,
						requestOptions = ((
							documentOrOptions,
							variables,
							requestHeaders,
						) =>
							documentOrOptions.document
								? documentOrOptions
								: {
										document: documentOrOptions,
										variables,
										requestHeaders,
										signal: void 0,
								  })(
							documentOrOptions,
							variables,
							requestHeaders,
						),
						{
							headers,
							fetch = browser_ponyfill_default(),
							method = 'POST',
							requestMiddleware,
							responseMiddleware,
							...fetchOptions
						} = this.requestConfig,
						{ url } = this
					void 0 !== requestOptions.signal &&
						(fetchOptions.signal = requestOptions.signal)
					const { query, operationName } = resolveRequestDocument(
						requestOptions.document,
					)
					return makeRequest({
						url,
						query,
						variables: requestOptions.variables,
						headers: {
							...resolveHeaders(callOrIdentity(headers)),
							...resolveHeaders(requestOptions.requestHeaders),
						},
						operationName,
						fetch,
						method,
						fetchOptions,
						middleware: requestMiddleware,
					})
						.then(
							(response) => (
								responseMiddleware &&
									responseMiddleware(response),
								response.data
							),
						)
						.catch((error) => {
							throw (
								(responseMiddleware &&
									responseMiddleware(error),
								error)
							)
						})
				}
				batchRequests(documentsOrOptions, requestHeaders) {
					const batchRequestOptions = ((
							documentsOrOptions,
							requestHeaders,
						) =>
							documentsOrOptions.documents
								? documentsOrOptions
								: {
										documents: documentsOrOptions,
										requestHeaders,
										signal: void 0,
								  })(documentsOrOptions, requestHeaders),
						{ headers, ...fetchOptions } = this.requestConfig
					void 0 !== batchRequestOptions.signal &&
						(fetchOptions.signal = batchRequestOptions.signal)
					const queries = batchRequestOptions.documents.map(
							({ document }) =>
								resolveRequestDocument(document).query,
						),
						variables = batchRequestOptions.documents.map(
							({ variables }) => variables,
						)
					return makeRequest({
						url: this.url,
						query: queries,
						variables,
						headers: {
							...resolveHeaders(callOrIdentity(headers)),
							...resolveHeaders(
								batchRequestOptions.requestHeaders,
							),
						},
						operationName: void 0,
						fetch:
							this.requestConfig.fetch ??
							browser_ponyfill_default(),
						method: this.requestConfig.method || 'POST',
						fetchOptions,
						middleware: this.requestConfig.requestMiddleware,
					})
						.then(
							(response) => (
								this.requestConfig.responseMiddleware &&
									this.requestConfig.responseMiddleware(
										response,
									),
								response.data
							),
						)
						.catch((error) => {
							throw (
								(this.requestConfig.responseMiddleware &&
									this.requestConfig.responseMiddleware(
										error,
									),
								error)
							)
						})
				}
				setHeaders(headers) {
					return (this.requestConfig.headers = headers), this
				}
				setHeader(key, value) {
					const { headers } = this.requestConfig
					return (
						headers
							? (headers[key] = value)
							: (this.requestConfig.headers = { [key]: value }),
						this
					)
				}
				setEndpoint(value) {
					return (this.url = value), this
				}
			}
			const makeRequest = async (params) => {
				const { query, variables, fetchOptions } = params,
					fetcher = createHttpMethodFetcher(
						(params.method ?? 'post').toUpperCase(),
					)
				const isBatchingQuery = Array.isArray(params.query),
					response = await fetcher(params),
					result = await getResult(
						response,
						fetchOptions.jsonSerializer ?? defaultJsonSerializer,
					),
					successfullyReceivedData = Array.isArray(result)
						? !result.some(({ data }) => !data)
						: Boolean(result.data),
					successfullyPassedErrorPolicy =
						Array.isArray(result) ||
						!result.errors ||
						(Array.isArray(result.errors) &&
							!result.errors.length) ||
						'all' === fetchOptions.errorPolicy ||
						'ignore' === fetchOptions.errorPolicy
				if (
					response.ok &&
					successfullyPassedErrorPolicy &&
					successfullyReceivedData
				) {
					const { errors, ...rest } = (Array.isArray(result), result),
						data =
							'ignore' === fetchOptions.errorPolicy
								? rest
								: result
					return {
						...(isBatchingQuery ? { data } : data),
						headers: response.headers,
						status: response.status,
					}
				}
				throw new ClientError(
					{
						...('string' == typeof result
							? { error: result }
							: result),
						status: response.status,
						headers: response.headers,
					},
					{ query, variables },
				)
			}
			const getResult = async (response, jsonSerializer) => {
					let contentType
					return (
						response.headers.forEach((value, key) => {
							'content-type' === key.toLowerCase() &&
								(contentType = value)
						}),
						contentType &&
						(contentType
							.toLowerCase()
							.startsWith('application/json') ||
							contentType
								.toLowerCase()
								.startsWith('application/graphql+json') ||
							contentType
								.toLowerCase()
								.startsWith(
									'application/graphql-response+json',
								))
							? jsonSerializer.parse(await response.text())
							: response.text()
					)
				},
				callOrIdentity = (value) =>
					'function' == typeof value ? value() : value,
				gql = (chunks, ...variables) =>
					chunks.reduce(
						(accumulator, chunk, index) =>
							`${accumulator}${chunk}${
								index in variables ? variables[index] : ''
							}`,
						'',
					)
		},
		'./node_modules/swr/dist/index.mjs': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { ZP: () => useSWR })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./node_modules/react/index.js',
			)
			function __awaiter(thisArg, _arguments, P, generator) {
				return new (P || (P = Promise))(function (resolve, reject) {
					function fulfilled(value) {
						try {
							step(generator.next(value))
						} catch (e) {
							reject(e)
						}
					}
					function rejected(value) {
						try {
							step(generator.throw(value))
						} catch (e) {
							reject(e)
						}
					}
					function step(result) {
						result.done
							? resolve(result.value)
							: (function adopt(value) {
									return value instanceof P
										? value
										: new P(function (resolve) {
												resolve(value)
										  })
							  })(result.value).then(fulfilled, rejected)
					}
					step(
						(generator = generator.apply(
							thisArg,
							_arguments || [],
						)).next(),
					)
				})
			}
			function __generator(thisArg, body) {
				var f,
					y,
					t,
					g,
					_ = {
						label: 0,
						sent: function () {
							if (1 & t[0]) throw t[1]
							return t[1]
						},
						trys: [],
						ops: [],
					}
				return (
					(g = { next: verb(0), throw: verb(1), return: verb(2) }),
					'function' == typeof Symbol &&
						(g[Symbol.iterator] = function () {
							return this
						}),
					g
				)
				function verb(n) {
					return function (v) {
						return (function step(op) {
							if (f)
								throw new TypeError(
									'Generator is already executing.',
								)
							for (; _; )
								try {
									if (
										((f = 1),
										y &&
											(t =
												2 & op[0]
													? y.return
													: op[0]
													? y.throw ||
													  ((t = y.return) &&
															t.call(y),
													  0)
													: y.next) &&
											!(t = t.call(y, op[1])).done)
									)
										return t
									switch (
										((y = 0),
										t && (op = [2 & op[0], t.value]),
										op[0])
									) {
										case 0:
										case 1:
											t = op
											break
										case 4:
											return (
												_.label++,
												{ value: op[1], done: !1 }
											)
										case 5:
											_.label++, (y = op[1]), (op = [0])
											continue
										case 7:
											;(op = _.ops.pop()), _.trys.pop()
											continue
										default:
											if (
												!((t = _.trys),
												(t =
													t.length > 0 &&
													t[t.length - 1]) ||
													(6 !== op[0] &&
														2 !== op[0]))
											) {
												_ = 0
												continue
											}
											if (
												3 === op[0] &&
												(!t ||
													(op[1] > t[0] &&
														op[1] < t[3]))
											) {
												_.label = op[1]
												break
											}
											if (6 === op[0] && _.label < t[1]) {
												;(_.label = t[1]), (t = op)
												break
											}
											if (t && _.label < t[2]) {
												;(_.label = t[2]),
													_.ops.push(op)
												break
											}
											t[2] && _.ops.pop(), _.trys.pop()
											continue
									}
									op = body.call(thisArg, _)
								} catch (e) {
									;(op = [6, e]), (y = 0)
								} finally {
									f = t = 0
								}
							if (5 & op[0]) throw op[1]
							return { value: op[0] ? op[1] : void 0, done: !0 }
						})([n, v])
					}
				}
			}
			var hook,
				noop = function () {},
				UNDEFINED = noop(),
				OBJECT = Object,
				isUndefined = function (v) {
					return v === UNDEFINED
				},
				isFunction = function (v) {
					return 'function' == typeof v
				},
				mergeObjects = function (a, b) {
					return OBJECT.assign({}, a, b)
				},
				hasWindow = function () {
					return 'undefined' != typeof window
				},
				table = new WeakMap(),
				counter = 0,
				stableHash = function (arg) {
					var result,
						index,
						type = typeof arg,
						constructor = arg && arg.constructor,
						isDate = constructor == Date
					if (OBJECT(arg) !== arg || isDate || constructor == RegExp)
						result = isDate
							? arg.toJSON()
							: 'symbol' == type
							? arg.toString()
							: 'string' == type
							? JSON.stringify(arg)
							: '' + arg
					else {
						if ((result = table.get(arg))) return result
						if (
							((result = ++counter + '~'),
							table.set(arg, result),
							constructor == Array)
						) {
							for (
								result = '@', index = 0;
								index < arg.length;
								index++
							)
								result += stableHash(arg[index]) + ','
							table.set(arg, result)
						}
						if (constructor == OBJECT) {
							result = '#'
							for (
								var keys = OBJECT.keys(arg).sort();
								!isUndefined((index = keys.pop()));

							)
								isUndefined(arg[index]) ||
									(result +=
										index +
										':' +
										stableHash(arg[index]) +
										',')
							table.set(arg, result)
						}
					}
					return result
				},
				online = !0,
				hasWin = hasWindow(),
				hasDoc = 'undefined' != typeof document,
				onWindowEvent =
					hasWin && window.addEventListener
						? window.addEventListener.bind(window)
						: noop,
				onDocumentEvent = hasDoc
					? document.addEventListener.bind(document)
					: noop,
				offWindowEvent =
					hasWin && window.removeEventListener
						? window.removeEventListener.bind(window)
						: noop,
				offDocumentEvent = hasDoc
					? document.removeEventListener.bind(document)
					: noop,
				preset = {
					isOnline: function () {
						return online
					},
					isVisible: function () {
						var visibilityState = hasDoc && document.visibilityState
						return (
							isUndefined(visibilityState) ||
							'hidden' !== visibilityState
						)
					},
				},
				defaultConfigOptions = {
					initFocus: function (callback) {
						return (
							onDocumentEvent('visibilitychange', callback),
							onWindowEvent('focus', callback),
							function () {
								offDocumentEvent('visibilitychange', callback),
									offWindowEvent('focus', callback)
							}
						)
					},
					initReconnect: function (callback) {
						var onOnline = function () {
								;(online = !0), callback()
							},
							onOffline = function () {
								online = !1
							}
						return (
							onWindowEvent('online', onOnline),
							onWindowEvent('offline', onOffline),
							function () {
								offWindowEvent('online', onOnline),
									offWindowEvent('offline', onOffline)
							}
						)
					},
				},
				IS_SERVER = !hasWindow() || 'Deno' in window,
				rAF = function (f) {
					return hasWindow() &&
						void 0 !== window.requestAnimationFrame
						? window.requestAnimationFrame(f)
						: setTimeout(f, 1)
				},
				useIsomorphicLayoutEffect = IS_SERVER
					? react__WEBPACK_IMPORTED_MODULE_0__.useEffect
					: react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,
				navigatorConnection =
					'undefined' != typeof navigator && navigator.connection,
				slowConnection =
					!IS_SERVER &&
					navigatorConnection &&
					(['slow-2g', '2g'].includes(
						navigatorConnection.effectiveType,
					) ||
						navigatorConnection.saveData),
				serialize = function (key) {
					if (isFunction(key))
						try {
							key = key()
						} catch (err) {
							key = ''
						}
					var args = [].concat(key)
					return [
						(key =
							'string' == typeof key
								? key
								: (Array.isArray(key) ? key.length : key)
								? stableHash(key)
								: ''),
						args,
						key ? '$swr$' + key : '',
					]
				},
				SWRGlobalState = new WeakMap(),
				broadcastState = function (
					cache,
					key,
					data,
					error,
					isValidating,
					revalidate,
					broadcast,
				) {
					void 0 === broadcast && (broadcast = !0)
					var _a = SWRGlobalState.get(cache),
						EVENT_REVALIDATORS = _a[0],
						STATE_UPDATERS = _a[1],
						FETCH = _a[3],
						revalidators = EVENT_REVALIDATORS[key],
						updaters = STATE_UPDATERS[key]
					if (broadcast && updaters)
						for (var i = 0; i < updaters.length; ++i)
							updaters[i](data, error, isValidating)
					return revalidate &&
						(delete FETCH[key], revalidators && revalidators[0])
						? revalidators[0](2).then(function () {
								return cache.get(key)
						  })
						: cache.get(key)
				},
				__timestamp = 0,
				getTimestamp = function () {
					return ++__timestamp
				},
				internalMutate = function () {
					for (var args = [], _i = 0; _i < arguments.length; _i++)
						args[_i] = arguments[_i]
					return __awaiter(void 0, void 0, void 0, function () {
						var cache,
							_key,
							_data,
							_opts,
							options,
							populateCache,
							revalidate,
							rollbackOnError,
							customOptimisticData,
							_a,
							key,
							keyInfo,
							_b,
							MUTATION,
							data,
							error,
							beforeMutationTs,
							hasCustomOptimisticData,
							rollbackData,
							optimisticData,
							res
						return __generator(this, function (_c) {
							switch (_c.label) {
								case 0:
									if (
										((cache = args[0]),
										(_key = args[1]),
										(_data = args[2]),
										(_opts = args[3]),
										(populateCache =
											!!isUndefined(
												(options =
													'boolean' == typeof _opts
														? { revalidate: _opts }
														: _opts || {})
													.populateCache,
											) || options.populateCache),
										(revalidate =
											!1 !== options.revalidate),
										(rollbackOnError =
											!1 !== options.rollbackOnError),
										(customOptimisticData =
											options.optimisticData),
										(_a = serialize(_key)),
										(key = _a[0]),
										(keyInfo = _a[2]),
										!key)
									)
										return [2]
									if (
										((_b = SWRGlobalState.get(cache)),
										(MUTATION = _b[2]),
										args.length < 3)
									)
										return [
											2,
											broadcastState(
												cache,
												key,
												cache.get(key),
												UNDEFINED,
												UNDEFINED,
												revalidate,
												!0,
											),
										]
									if (
										((data = _data),
										(beforeMutationTs = getTimestamp()),
										(MUTATION[key] = [beforeMutationTs, 0]),
										(hasCustomOptimisticData =
											!isUndefined(customOptimisticData)),
										(rollbackData = cache.get(key)),
										hasCustomOptimisticData &&
											((optimisticData = isFunction(
												customOptimisticData,
											)
												? customOptimisticData(
														rollbackData,
												  )
												: customOptimisticData),
											cache.set(key, optimisticData),
											broadcastState(
												cache,
												key,
												optimisticData,
											)),
										isFunction(data))
									)
										try {
											data = data(cache.get(key))
										} catch (err) {
											error = err
										}
									return data && isFunction(data.then)
										? [
												4,
												data.catch(function (err) {
													error = err
												}),
										  ]
										: [3, 2]
								case 1:
									if (
										((data = _c.sent()),
										beforeMutationTs !== MUTATION[key][0])
									) {
										if (error) throw error
										return [2, data]
									}
									error &&
										hasCustomOptimisticData &&
										rollbackOnError &&
										((populateCache = !0),
										(data = rollbackData),
										cache.set(key, rollbackData)),
										(_c.label = 2)
								case 2:
									return (
										populateCache &&
											(error ||
												(isFunction(populateCache) &&
													(data = populateCache(
														data,
														rollbackData,
													)),
												cache.set(key, data)),
											cache.set(
												keyInfo,
												mergeObjects(
													cache.get(keyInfo),
													{ error },
												),
											)),
										(MUTATION[key][1] = getTimestamp()),
										[
											4,
											broadcastState(
												cache,
												key,
												data,
												error,
												UNDEFINED,
												revalidate,
												!!populateCache,
											),
										]
									)
								case 3:
									if (((res = _c.sent()), error)) throw error
									return [2, populateCache ? res : data]
							}
						})
					})
				},
				revalidateAllKeys = function (revalidators, type) {
					for (var key in revalidators)
						revalidators[key][0] && revalidators[key][0](type)
				},
				initCache = function (provider, options) {
					if (!SWRGlobalState.has(provider)) {
						var opts = mergeObjects(defaultConfigOptions, options),
							EVENT_REVALIDATORS = {},
							mutate = internalMutate.bind(UNDEFINED, provider),
							unmount = noop
						if (
							(SWRGlobalState.set(provider, [
								EVENT_REVALIDATORS,
								{},
								{},
								{},
								mutate,
							]),
							!IS_SERVER)
						) {
							var releaseFocus_1 = opts.initFocus(
									setTimeout.bind(
										UNDEFINED,
										revalidateAllKeys.bind(
											UNDEFINED,
											EVENT_REVALIDATORS,
											0,
										),
									),
								),
								releaseReconnect_1 = opts.initReconnect(
									setTimeout.bind(
										UNDEFINED,
										revalidateAllKeys.bind(
											UNDEFINED,
											EVENT_REVALIDATORS,
											1,
										),
									),
								)
							unmount = function () {
								releaseFocus_1 && releaseFocus_1(),
									releaseReconnect_1 && releaseReconnect_1(),
									SWRGlobalState.delete(provider)
							}
						}
						return [provider, mutate, unmount]
					}
					return [provider, SWRGlobalState.get(provider)[4]]
				},
				_a = initCache(new Map()),
				cache = _a[0],
				mutate = _a[1],
				defaultConfig = mergeObjects(
					{
						onLoadingSlow: noop,
						onSuccess: noop,
						onError: noop,
						onErrorRetry: function (
							_,
							__,
							config,
							revalidate,
							opts,
						) {
							var maxRetryCount = config.errorRetryCount,
								currentRetryCount = opts.retryCount,
								timeout =
									~~(
										(Math.random() + 0.5) *
										(1 <<
											(currentRetryCount < 8
												? currentRetryCount
												: 8))
									) * config.errorRetryInterval
							;(!isUndefined(maxRetryCount) &&
								currentRetryCount > maxRetryCount) ||
								setTimeout(revalidate, timeout, opts)
						},
						onDiscarded: noop,
						revalidateOnFocus: !0,
						revalidateOnReconnect: !0,
						revalidateIfStale: !0,
						shouldRetryOnError: !0,
						errorRetryInterval: slowConnection ? 1e4 : 5e3,
						focusThrottleInterval: 5e3,
						dedupingInterval: 2e3,
						loadingTimeout: slowConnection ? 5e3 : 3e3,
						compare: function (currentData, newData) {
							return (
								stableHash(currentData) == stableHash(newData)
							)
						},
						isPaused: function () {
							return !1
						},
						cache,
						mutate,
						fallback: {},
					},
					preset,
				),
				mergeConfigs = function (a, b) {
					var v = mergeObjects(a, b)
					if (b) {
						var u1 = a.use,
							f1 = a.fallback,
							u2 = b.use,
							f2 = b.fallback
						u1 && u2 && (v.use = u1.concat(u2)),
							f1 && f2 && (v.fallback = mergeObjects(f1, f2))
					}
					return v
				},
				SWRConfigContext = (0,
				react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),
				subscribeCallback = function (key, callbacks, callback) {
					var keyedRevalidators =
						callbacks[key] || (callbacks[key] = [])
					return (
						keyedRevalidators.push(callback),
						function () {
							var index = keyedRevalidators.indexOf(callback)
							index >= 0 &&
								((keyedRevalidators[index] =
									keyedRevalidators[
										keyedRevalidators.length - 1
									]),
								keyedRevalidators.pop())
						}
					)
				},
				WITH_DEDUPE = { dedupe: !0 },
				useSWR =
					(OBJECT.defineProperty(
						function (props) {
							var value = props.value,
								extendedConfig = mergeConfigs(
									(0,
									react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
										SWRConfigContext,
									),
									value,
								),
								provider = value && value.provider,
								cacheContext = (0,
								react__WEBPACK_IMPORTED_MODULE_0__.useState)(
									function () {
										return provider
											? initCache(
													provider(
														extendedConfig.cache ||
															cache,
													),
													value,
											  )
											: UNDEFINED
									},
								)[0]
							return (
								cacheContext &&
									((extendedConfig.cache = cacheContext[0]),
									(extendedConfig.mutate = cacheContext[1])),
								useIsomorphicLayoutEffect(function () {
									return cacheContext
										? cacheContext[2]
										: UNDEFINED
								}, []),
								(0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
									SWRConfigContext.Provider,
									mergeObjects(props, {
										value: extendedConfig,
									}),
								)
							)
						},
						'default',
						{ value: defaultConfig },
					),
					(hook = function (_key, fetcher, config) {
						var cache = config.cache,
							compare = config.compare,
							fallbackData = config.fallbackData,
							suspense = config.suspense,
							revalidateOnMount = config.revalidateOnMount,
							refreshInterval = config.refreshInterval,
							refreshWhenHidden = config.refreshWhenHidden,
							refreshWhenOffline = config.refreshWhenOffline,
							_a = SWRGlobalState.get(cache),
							EVENT_REVALIDATORS = _a[0],
							STATE_UPDATERS = _a[1],
							MUTATION = _a[2],
							FETCH = _a[3],
							_b = serialize(_key),
							key = _b[0],
							fnArgs = _b[1],
							keyInfo = _b[2],
							initialMountedRef = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),
							unmountedRef = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),
							keyRef = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key),
							fetcherRef = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fetcher),
							configRef = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config),
							getConfig = function () {
								return configRef.current
							},
							isActive = function () {
								return (
									getConfig().isVisible() &&
									getConfig().isOnline()
								)
							},
							patchFetchInfo = function (info) {
								return cache.set(
									keyInfo,
									mergeObjects(cache.get(keyInfo), info),
								)
							},
							cached = cache.get(key),
							fallback = isUndefined(fallbackData)
								? config.fallback[key]
								: fallbackData,
							data = isUndefined(cached) ? fallback : cached,
							info = cache.get(keyInfo) || {},
							error = info.error,
							isInitialMount = !initialMountedRef.current,
							shouldRevalidate = function () {
								return isInitialMount &&
									!isUndefined(revalidateOnMount)
									? revalidateOnMount
									: !getConfig().isPaused() &&
											(suspense
												? !isUndefined(data) &&
												  config.revalidateIfStale
												: isUndefined(data) ||
												  config.revalidateIfStale)
							},
							isValidating =
								!(!key || !fetcher) &&
								(!!info.isValidating ||
									(isInitialMount && shouldRevalidate())),
							_c = (function (state, unmountedRef) {
								var rerender = (0,
									react__WEBPACK_IMPORTED_MODULE_0__.useState)(
										{},
									)[1],
									stateRef = (0,
									react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
										state,
									),
									stateDependenciesRef = (0,
									react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
										data: !1,
										error: !1,
										isValidating: !1,
									}),
									setState = (0,
									react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
										function (payload) {
											var shouldRerender = !1,
												currentState = stateRef.current
											for (var _ in payload) {
												var k = _
												currentState[k] !==
													payload[k] &&
													((currentState[k] =
														payload[k]),
													stateDependenciesRef
														.current[k] &&
														(shouldRerender = !0))
											}
											shouldRerender &&
												!unmountedRef.current &&
												rerender({})
										},
										[],
									)
								return (
									useIsomorphicLayoutEffect(function () {
										stateRef.current = state
									}),
									[
										stateRef,
										stateDependenciesRef.current,
										setState,
									]
								)
							})({ data, error, isValidating }, unmountedRef),
							stateRef = _c[0],
							stateDependencies = _c[1],
							setState = _c[2],
							revalidate = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
								function (revalidateOpts) {
									return __awaiter(
										void 0,
										void 0,
										void 0,
										function () {
											var currentFetcher,
												newData,
												startAt,
												loading,
												opts,
												shouldStartNewRequest,
												isCurrentKeyMounted,
												cleanupState,
												newState,
												finishRequestAndUpdateState,
												mutationInfo,
												err_1,
												_a
											return __generator(
												this,
												function (_b) {
													switch (_b.label) {
														case 0:
															if (
																((currentFetcher =
																	fetcherRef.current),
																!key ||
																	!currentFetcher ||
																	unmountedRef.current ||
																	getConfig().isPaused())
															)
																return [2, !1]
															;(loading = !0),
																(opts =
																	revalidateOpts ||
																	{}),
																(shouldStartNewRequest =
																	!FETCH[
																		key
																	] ||
																	!opts.dedupe),
																(isCurrentKeyMounted =
																	function () {
																		return (
																			!unmountedRef.current &&
																			key ===
																				keyRef.current &&
																			initialMountedRef.current
																		)
																	}),
																(cleanupState =
																	function () {
																		var requestInfo =
																			FETCH[
																				key
																			]
																		requestInfo &&
																			requestInfo[1] ===
																				startAt &&
																			delete FETCH[
																				key
																			]
																	}),
																(newState = {
																	isValidating:
																		!1,
																}),
																(finishRequestAndUpdateState =
																	function () {
																		patchFetchInfo(
																			{
																				isValidating:
																					!1,
																			},
																		),
																			isCurrentKeyMounted() &&
																				setState(
																					newState,
																				)
																	}),
																patchFetchInfo({
																	isValidating:
																		!0,
																}),
																setState({
																	isValidating:
																		!0,
																}),
																(_b.label = 1)
														case 1:
															return (
																_b.trys.push([
																	1,
																	3,
																	,
																	4,
																]),
																shouldStartNewRequest &&
																	(broadcastState(
																		cache,
																		key,
																		stateRef
																			.current
																			.data,
																		stateRef
																			.current
																			.error,
																		!0,
																	),
																	config.loadingTimeout &&
																		!cache.get(
																			key,
																		) &&
																		setTimeout(
																			function () {
																				loading &&
																					isCurrentKeyMounted() &&
																					getConfig().onLoadingSlow(
																						key,
																						config,
																					)
																			},
																			config.loadingTimeout,
																		),
																	(FETCH[
																		key
																	] = [
																		currentFetcher.apply(
																			void 0,
																			fnArgs,
																		),
																		getTimestamp(),
																	])),
																(_a =
																	FETCH[key]),
																(newData =
																	_a[0]),
																(startAt =
																	_a[1]),
																[4, newData]
															)
														case 2:
															return (
																(newData =
																	_b.sent()),
																shouldStartNewRequest &&
																	setTimeout(
																		cleanupState,
																		config.dedupingInterval,
																	),
																FETCH[key] &&
																FETCH[
																	key
																][1] === startAt
																	? (patchFetchInfo(
																			{
																				error: UNDEFINED,
																			},
																	  ),
																	  (newState.error =
																			UNDEFINED),
																	  (mutationInfo =
																			MUTATION[
																				key
																			]),
																	  !isUndefined(
																			mutationInfo,
																	  ) &&
																	  (startAt <=
																			mutationInfo[0] ||
																			startAt <=
																				mutationInfo[1] ||
																			0 ===
																				mutationInfo[1])
																			? (finishRequestAndUpdateState(),
																			  shouldStartNewRequest &&
																					isCurrentKeyMounted() &&
																					getConfig().onDiscarded(
																						key,
																					),
																			  [
																					2,
																					!1,
																			  ])
																			: (compare(
																					stateRef
																						.current
																						.data,
																					newData,
																			  )
																					? (newState.data =
																							stateRef.current.data)
																					: (newState.data =
																							newData),
																			  compare(
																					cache.get(
																						key,
																					),
																					newData,
																			  ) ||
																					cache.set(
																						key,
																						newData,
																					),
																			  shouldStartNewRequest &&
																					isCurrentKeyMounted() &&
																					getConfig().onSuccess(
																						newData,
																						key,
																						config,
																					),
																			  [
																					3,
																					4,
																			  ]))
																	: (shouldStartNewRequest &&
																			isCurrentKeyMounted() &&
																			getConfig().onDiscarded(
																				key,
																			),
																	  [2, !1])
															)
														case 3:
															return (
																(err_1 =
																	_b.sent()),
																cleanupState(),
																getConfig().isPaused() ||
																	(patchFetchInfo(
																		{
																			error: err_1,
																		},
																	),
																	(newState.error =
																		err_1),
																	shouldStartNewRequest &&
																		isCurrentKeyMounted() &&
																		(getConfig().onError(
																			err_1,
																			key,
																			config,
																		),
																		(('boolean' ==
																			typeof config.shouldRetryOnError &&
																			config.shouldRetryOnError) ||
																			(isFunction(
																				config.shouldRetryOnError,
																			) &&
																				config.shouldRetryOnError(
																					err_1,
																				))) &&
																			isActive() &&
																			getConfig().onErrorRetry(
																				err_1,
																				key,
																				config,
																				revalidate,
																				{
																					retryCount:
																						(opts.retryCount ||
																							0) +
																						1,
																					dedupe: !0,
																				},
																			))),
																[3, 4]
															)
														case 4:
															return (
																(loading = !1),
																finishRequestAndUpdateState(),
																isCurrentKeyMounted() &&
																	shouldStartNewRequest &&
																	broadcastState(
																		cache,
																		key,
																		newState.data,
																		newState.error,
																		!1,
																	),
																[2, !0]
															)
													}
												},
											)
										},
									)
								},
								[key],
							),
							boundMutate = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
								internalMutate.bind(
									UNDEFINED,
									cache,
									function () {
										return keyRef.current
									},
								),
								[],
							)
						if (
							(useIsomorphicLayoutEffect(function () {
								;(fetcherRef.current = fetcher),
									(configRef.current = config)
							}),
							useIsomorphicLayoutEffect(
								function () {
									if (key) {
										var keyChanged = key !== keyRef.current,
											softRevalidate = revalidate.bind(
												UNDEFINED,
												WITH_DEDUPE,
											),
											nextFocusRevalidatedAt = 0,
											unsubUpdate = subscribeCallback(
												key,
												STATE_UPDATERS,
												function (
													updatedData,
													updatedError,
													updatedIsValidating,
												) {
													setState(
														mergeObjects(
															{
																error: updatedError,
																isValidating:
																	updatedIsValidating,
															},
															compare(
																stateRef.current
																	.data,
																updatedData,
															)
																? UNDEFINED
																: {
																		data: updatedData,
																  },
														),
													)
												},
											),
											unsubEvents = subscribeCallback(
												key,
												EVENT_REVALIDATORS,
												function (type) {
													if (0 == type) {
														var now = Date.now()
														getConfig()
															.revalidateOnFocus &&
															now >
																nextFocusRevalidatedAt &&
															isActive() &&
															((nextFocusRevalidatedAt =
																now +
																getConfig()
																	.focusThrottleInterval),
															softRevalidate())
													} else if (1 == type)
														getConfig()
															.revalidateOnReconnect &&
															isActive() &&
															softRevalidate()
													else if (2 == type)
														return revalidate()
												},
											)
										return (
											(unmountedRef.current = !1),
											(keyRef.current = key),
											(initialMountedRef.current = !0),
											keyChanged &&
												setState({
													data,
													error,
													isValidating,
												}),
											shouldRevalidate() &&
												(isUndefined(data) || IS_SERVER
													? softRevalidate()
													: rAF(softRevalidate)),
											function () {
												;(unmountedRef.current = !0),
													unsubUpdate(),
													unsubEvents()
											}
										)
									}
								},
								[key, revalidate],
							),
							useIsomorphicLayoutEffect(
								function () {
									var timer
									function next() {
										var interval = isFunction(
											refreshInterval,
										)
											? refreshInterval(data)
											: refreshInterval
										interval &&
											-1 !== timer &&
											(timer = setTimeout(
												execute,
												interval,
											))
									}
									function execute() {
										stateRef.current.error ||
										(!refreshWhenHidden &&
											!getConfig().isVisible()) ||
										(!refreshWhenOffline &&
											!getConfig().isOnline())
											? next()
											: revalidate(WITH_DEDUPE).then(next)
									}
									return (
										next(),
										function () {
											timer &&
												(clearTimeout(timer),
												(timer = -1))
										}
									)
								},
								[
									refreshInterval,
									refreshWhenHidden,
									refreshWhenOffline,
									revalidate,
								],
							),
							(0,
							react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(
								data,
							),
							suspense && isUndefined(data) && key)
						)
							throw (
								((fetcherRef.current = fetcher),
								(configRef.current = config),
								(unmountedRef.current = !1),
								isUndefined(error)
									? revalidate(WITH_DEDUPE)
									: error)
							)
						return {
							mutate: boundMutate,
							get data() {
								return (stateDependencies.data = !0), data
							},
							get error() {
								return (stateDependencies.error = !0), error
							},
							get isValidating() {
								return (
									(stateDependencies.isValidating = !0),
									isValidating
								)
							},
						}
					}),
					function useSWRArgs() {
						for (var args = [], _i = 0; _i < arguments.length; _i++)
							args[_i] = arguments[_i]
						var fallbackConfig = mergeObjects(
								defaultConfig,
								(0,
								react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
									SWRConfigContext,
								),
							),
							_a = (function (args) {
								return isFunction(args[1])
									? [args[0], args[1], args[2] || {}]
									: [
											args[0],
											null,
											(null === args[1]
												? args[2]
												: args[1]) || {},
									  ]
							})(args),
							key = _a[0],
							fn = _a[1],
							_config = _a[2],
							config = mergeConfigs(fallbackConfig, _config),
							next = hook,
							use = config.use
						if (use)
							for (var i = use.length; i-- > 0; )
								next = use[i](next)
						return next(key, fn || config.fetcher, config)
					})
		},
	},
])
