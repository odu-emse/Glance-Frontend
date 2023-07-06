/*! For license information please see 5357.f0070085.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[5357],
	{
		'./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
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
		'./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				'use strict'
				function _objectWithoutProperties(source, excluded) {
					if (null == source) return {}
					var key,
						i,
						target = (function _objectWithoutPropertiesLoose(
							source,
							excluded,
						) {
							if (null == source) return {}
							var key,
								i,
								target = {},
								sourceKeys = Object.keys(source)
							for (i = 0; i < sourceKeys.length; i++)
								(key = sourceKeys[i]),
									excluded.indexOf(key) >= 0 ||
										(target[key] = source[key])
							return target
						})(source, excluded)
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys =
							Object.getOwnPropertySymbols(source)
						for (i = 0; i < sourceSymbolKeys.length; i++)
							(key = sourceSymbolKeys[i]),
								excluded.indexOf(key) >= 0 ||
									(Object.prototype.propertyIsEnumerable.call(
										source,
										key,
									) &&
										(target[key] = source[key]))
					}
					return target
				}
				__webpack_require__.d(__webpack_exports__, {
					Z: () => _objectWithoutProperties,
				})
			},
		'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
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
				'use strict'
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
		'./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				'use strict'
				var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
				__webpack_require__.d(__webpack_exports__, {
					L: () => useInsertionEffectAlwaysWithSyncFallback,
					j: () => useInsertionEffectWithLayoutFallback,
				})
				var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						'./node_modules/react/index.js',
					),
					useInsertionEffect =
						!!(
							react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
							(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
								__webpack_require__.t(
									react__WEBPACK_IMPORTED_MODULE_0__,
									2,
								))
						).useInsertionEffect &&
						(
							react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
							(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
								__webpack_require__.t(
									react__WEBPACK_IMPORTED_MODULE_0__,
									2,
								))
						).useInsertionEffect,
					useInsertionEffectAlwaysWithSyncFallback =
						useInsertionEffect ||
						function syncFallback(create) {
							return create()
						},
					useInsertionEffectWithLayoutFallback =
						useInsertionEffect ||
						react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
			},
		'./node_modules/@instructure/ui-buttons/es/Button/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { z: () => Button })
			var objectWithoutProperties = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
				),
				react = __webpack_require__('./node_modules/react/index.js')
			function decorator(decorate) {
				return function () {
					for (
						var _len = arguments.length,
							args = new Array(_len),
							_key = 0;
						_key < _len;
						_key++
					)
						args[_key] = arguments[_key]
					return (ComposedComponent) => {
						if ('function' == typeof decorate) {
							const displayName =
									ComposedComponent.displayName ||
									ComposedComponent.name,
								DecoratedComponent = decorate(
									ComposedComponent,
									...args,
								)
							return (
								(DecoratedComponent.displayName = displayName),
								DecoratedComponent
							)
						}
						return ComposedComponent
					}
				}
			}
			var react_dom = __webpack_require__(
				'./node_modules/react-dom/index.js',
			)
			const isReactNodeWithRef = (el) => !!el && void 0 !== el.ref,
				isRefObject = (obj) => !!obj && void 0 !== obj.current
			function findDOMNode(el) {
				const node = 'function' == typeof el ? el() : el
				if (node === document) return document.documentElement
				if (
					node instanceof Element ||
					node === window ||
					(node && void 0 !== node.nodeType)
				)
					return node
				if (node) {
					const reactNode = node
					if (isReactNodeWithRef(reactNode)) {
						const refElement = isRefObject(reactNode.ref)
							? reactNode.ref.current
							: reactNode.ref
						return refElement instanceof HTMLElement
							? refElement
							: findDOMNode(refElement)
					}
					reactNode.constructor.componentId
						? reactNode.constructor.componentId
						: reactNode.constructor.name
					return react_dom.findDOMNode(node)
				}
			}
			const testable = __webpack_require__(
				'./node_modules/process/browser.js',
			).env.ALWAYS_APPEND_UI_TESTABLE_LOCATORS
				? decorator((ComposedComponent) => {
						const locator = {
								attribute: 'data-cid',
								value:
									ComposedComponent.displayName ||
									ComposedComponent.name,
							},
							selector = `[${locator.attribute}~="${locator.value}"]`
						class TestableComponent extends ComposedComponent {
							constructor() {
								super(...arguments),
									(this._testableUnmounted = void 0),
									(this._locatorTimeout = void 0)
							}
							componentDidMount() {
								;(this._testableUnmounted = !1),
									super.componentDidMount &&
										super.componentDidMount(),
									this.appendLocatorAttribute()
							}
							componentDidUpdate(prevProps, prevState, snapshot) {
								super.componentDidUpdate &&
									super.componentDidUpdate(
										prevProps,
										prevState,
										snapshot,
									),
									this.appendLocatorAttribute()
							}
							componentWillUnmount() {
								;(this._testableUnmounted = !0),
									super.componentWillUnmount &&
										super.componentWillUnmount(),
									this._locatorTimeout &&
										clearTimeout(this._locatorTimeout)
							}
							appendLocatorAttribute() {
								this._locatorTimeout = setTimeout(() => {
									let node
									if (!this._testableUnmounted) {
										try {
											node =
												this.DOMNode ||
												findDOMNode(this)
										} catch (e) {}
										if (node) {
											const attribute = node.getAttribute(
													locator.attribute,
												),
												values =
													'string' == typeof attribute
														? attribute.split(/\s+/)
														: []
											values.includes(locator.value) ||
												values.push(locator.value),
												node.setAttribute(
													locator.attribute,
													values.join(' '),
												)
										}
									}
								})
							}
						}
						return (
							(TestableComponent.selector = selector),
							TestableComponent
						)
				  })
				: () => (Component) => Component
			function getInteraction() {
				let _ref =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: {},
					_ref$props = _ref.props,
					props = void 0 === _ref$props ? {} : _ref$props,
					_ref$interactionTypes = _ref.interactionTypes,
					interactionTypes =
						void 0 === _ref$interactionTypes
							? ['disabled', 'readonly']
							: _ref$interactionTypes
				const interaction = props.interaction,
					disabled = props.disabled,
					readOnly = props.readOnly
				return (
					interaction ||
					(interactionTypes.includes('disabled') && disabled
						? 'disabled'
						: interactionTypes.includes('readonly') && readOnly
						? 'readonly'
						: 'enabled')
				)
			}
			function memoize(fn) {
				var cache = Object.create(null)
				return function (arg) {
					return (
						void 0 === cache[arg] && (cache[arg] = fn(arg)),
						cache[arg]
					)
				}
			}
			var reactPropsRegex =
					/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
				isPropValid = memoize(function (prop) {
					return (
						reactPropsRegex.test(prop) ||
						(111 === prop.charCodeAt(0) &&
							110 === prop.charCodeAt(1) &&
							prop.charCodeAt(2) < 91)
					)
				})
			function passthroughProps(props) {
				const validProps = {}
				return (
					Object.keys(props)
						.filter(
							(propName) =>
								isPropValid(propName) &&
								'style' !== propName &&
								'className' !== propName &&
								'children' !== propName &&
								'styles' !== propName &&
								'makeStyles' !== propName &&
								'deterministicId' !== propName,
						)
						.forEach((propName) => {
							validProps[propName] = props[propName]
						}),
					validProps
				)
			}
			var slicedToArray = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
				),
				hoist_non_react_statics_cjs = __webpack_require__(
					'./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js',
				),
				hoist_non_react_statics_cjs_default = __webpack_require__.n(
					hoist_non_react_statics_cjs,
				),
				fast_deep_equal = __webpack_require__(
					'./node_modules/fast-deep-equal/index.js',
				),
				fast_deep_equal_default = __webpack_require__.n(fast_deep_equal)
			__webpack_require__('./node_modules/process/browser.js')
			const error = function (condition, message) {
					for (
						var _len3 = arguments.length,
							args = new Array(_len3 > 2 ? _len3 - 2 : 0),
							_key3 = 2;
						_key3 < _len3;
						_key3++
					)
						args[_key3 - 2] = arguments[_key3]
				},
				warn = function (condition, message) {
					for (
						var _len4 = arguments.length,
							args = new Array(_len4 > 2 ? _len4 - 2 : 0),
							_key4 = 2;
						_key4 < _len4;
						_key4++
					)
						args[_key4 - 2] = arguments[_key4]
				},
				getComponentThemeOverride = (
					theme,
					displayName,
					componentId,
					props,
					componentTheme,
				) => {
					const name = displayName,
						id = componentId,
						themeOverride = props.themeOverride,
						componentOverrides = theme.componentOverrides
					let overridesFromTheme = {},
						overrideFromComponent = {}
					return (
						componentOverrides &&
							(overridesFromTheme =
								(name && componentOverrides[name]) ||
								(id && componentOverrides[id]) ||
								{}),
						themeOverride &&
							(overrideFromComponent =
								'function' == typeof themeOverride
									? themeOverride(componentTheme || {}, theme)
									: themeOverride),
						{ ...overridesFromTheme, ...overrideFromComponent }
					)
				}
			var StyleSheet = (function () {
					function StyleSheet(options) {
						var _this = this
						;(this._insertTag = function (tag) {
							var before
							;(before =
								0 === _this.tags.length
									? _this.insertionPoint
										? _this.insertionPoint.nextSibling
										: _this.prepend
										? _this.container.firstChild
										: _this.before
									: _this.tags[_this.tags.length - 1]
											.nextSibling),
								_this.container.insertBefore(tag, before),
								_this.tags.push(tag)
						}),
							(this.isSpeedy =
								void 0 === options.speedy || options.speedy),
							(this.tags = []),
							(this.ctr = 0),
							(this.nonce = options.nonce),
							(this.key = options.key),
							(this.container = options.container),
							(this.prepend = options.prepend),
							(this.insertionPoint = options.insertionPoint),
							(this.before = null)
					}
					var _proto = StyleSheet.prototype
					return (
						(_proto.hydrate = function hydrate(nodes) {
							nodes.forEach(this._insertTag)
						}),
						(_proto.insert = function insert(rule) {
							this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
								this._insertTag(
									(function createStyleElement(options) {
										var tag =
											document.createElement('style')
										return (
											tag.setAttribute(
												'data-emotion',
												options.key,
											),
											void 0 !== options.nonce &&
												tag.setAttribute(
													'nonce',
													options.nonce,
												),
											tag.appendChild(
												document.createTextNode(''),
											),
											tag.setAttribute('data-s', ''),
											tag
										)
									})(this),
								)
							var tag = this.tags[this.tags.length - 1]
							if (this.isSpeedy) {
								var sheet = (function sheetForTag(tag) {
									if (tag.sheet) return tag.sheet
									for (
										var i = 0;
										i < document.styleSheets.length;
										i++
									)
										if (
											document.styleSheets[i]
												.ownerNode === tag
										)
											return document.styleSheets[i]
								})(tag)
								try {
									sheet.insertRule(
										rule,
										sheet.cssRules.length,
									)
								} catch (e) {
									0
								}
							} else
								tag.appendChild(document.createTextNode(rule))
							this.ctr++
						}),
						(_proto.flush = function flush() {
							this.tags.forEach(function (tag) {
								return (
									tag.parentNode &&
									tag.parentNode.removeChild(tag)
								)
							}),
								(this.tags = []),
								(this.ctr = 0)
						}),
						StyleSheet
					)
				})(),
				abs = Math.abs,
				Utility_from = String.fromCharCode,
				Utility_assign = Object.assign
			function trim(value) {
				return value.trim()
			}
			function Utility_replace(value, pattern, replacement) {
				return value.replace(pattern, replacement)
			}
			function indexof(value, search) {
				return value.indexOf(search)
			}
			function Utility_charat(value, index) {
				return 0 | value.charCodeAt(index)
			}
			function Utility_substr(value, begin, end) {
				return value.slice(begin, end)
			}
			function Utility_strlen(value) {
				return value.length
			}
			function Utility_sizeof(value) {
				return value.length
			}
			function Utility_append(value, array) {
				return array.push(value), value
			}
			var line = 1,
				column = 1,
				Tokenizer_length = 0,
				position = 0,
				character = 0,
				characters = ''
			function node(value, root, parent, type, props, children, length) {
				return {
					value,
					root,
					parent,
					type,
					props,
					children,
					line,
					column,
					length,
					return: '',
				}
			}
			function Tokenizer_copy(root, props) {
				return Utility_assign(
					node('', null, null, '', null, null, 0),
					root,
					{ length: -root.length },
					props,
				)
			}
			function prev() {
				return (
					(character =
						position > 0
							? Utility_charat(characters, --position)
							: 0),
					column--,
					10 === character && ((column = 1), line--),
					character
				)
			}
			function next() {
				return (
					(character =
						position < Tokenizer_length
							? Utility_charat(characters, position++)
							: 0),
					column++,
					10 === character && ((column = 1), line++),
					character
				)
			}
			function peek() {
				return Utility_charat(characters, position)
			}
			function caret() {
				return position
			}
			function slice(begin, end) {
				return Utility_substr(characters, begin, end)
			}
			function token(type) {
				switch (type) {
					case 0:
					case 9:
					case 10:
					case 13:
					case 32:
						return 5
					case 33:
					case 43:
					case 44:
					case 47:
					case 62:
					case 64:
					case 126:
					case 59:
					case 123:
					case 125:
						return 4
					case 58:
						return 3
					case 34:
					case 39:
					case 40:
					case 91:
						return 2
					case 41:
					case 93:
						return 1
				}
				return 0
			}
			function alloc(value) {
				return (
					(line = column = 1),
					(Tokenizer_length = Utility_strlen((characters = value))),
					(position = 0),
					[]
				)
			}
			function dealloc(value) {
				return (characters = ''), value
			}
			function delimit(type) {
				return trim(
					slice(
						position - 1,
						delimiter(
							91 === type
								? type + 2
								: 40 === type
								? type + 1
								: type,
						),
					),
				)
			}
			function whitespace(type) {
				for (; (character = peek()) && character < 33; ) next()
				return token(type) > 2 || token(character) > 3 ? '' : ' '
			}
			function escaping(index, count) {
				for (
					;
					--count &&
					next() &&
					!(
						character < 48 ||
						character > 102 ||
						(character > 57 && character < 65) ||
						(character > 70 && character < 97)
					);

				);
				return slice(
					index,
					caret() + (count < 6 && 32 == peek() && 32 == next()),
				)
			}
			function delimiter(type) {
				for (; next(); )
					switch (character) {
						case type:
							return position
						case 34:
						case 39:
							34 !== type && 39 !== type && delimiter(character)
							break
						case 40:
							41 === type && delimiter(type)
							break
						case 92:
							next()
					}
				return position
			}
			function commenter(type, index) {
				for (
					;
					next() &&
					type + character !== 57 &&
					(type + character !== 84 || 47 !== peek());

				);
				return (
					'/*' +
					slice(index, position - 1) +
					'*' +
					Utility_from(47 === type ? type : next())
				)
			}
			function identifier(index) {
				for (; !token(peek()); ) next()
				return slice(index, position)
			}
			var Enum_MS = '-ms-',
				Enum_MOZ = '-moz-',
				Enum_WEBKIT = '-webkit-',
				COMMENT = 'comm',
				Enum_RULESET = 'rule',
				Enum_DECLARATION = 'decl'
			function Serializer_serialize(children, callback) {
				for (
					var output = '', length = Utility_sizeof(children), i = 0;
					i < length;
					i++
				)
					output += callback(children[i], i, children, callback) || ''
				return output
			}
			function stringify(element, index, children, callback) {
				switch (element.type) {
					case '@layer':
						if (element.children.length) break
					case '@import':
					case Enum_DECLARATION:
						return (element.return =
							element.return || element.value)
					case COMMENT:
						return ''
					case '@keyframes':
						return (element.return =
							element.value +
							'{' +
							Serializer_serialize(element.children, callback) +
							'}')
					case Enum_RULESET:
						element.value = element.props.join(',')
				}
				return Utility_strlen(
					(children = Serializer_serialize(
						element.children,
						callback,
					)),
				)
					? (element.return = element.value + '{' + children + '}')
					: ''
			}
			function compile(value) {
				return dealloc(
					parse(
						'',
						null,
						null,
						null,
						[''],
						(value = alloc(value)),
						0,
						[0],
						value,
					),
				)
			}
			function parse(
				value,
				root,
				parent,
				rule,
				rules,
				rulesets,
				pseudo,
				points,
				declarations,
			) {
				for (
					var index = 0,
						offset = 0,
						length = pseudo,
						atrule = 0,
						property = 0,
						previous = 0,
						variable = 1,
						scanning = 1,
						ampersand = 1,
						character = 0,
						type = '',
						props = rules,
						children = rulesets,
						reference = rule,
						characters = type;
					scanning;

				)
					switch (((previous = character), (character = next()))) {
						case 40:
							if (
								108 != previous &&
								58 == Utility_charat(characters, length - 1)
							) {
								;-1 !=
									indexof(
										(characters += Utility_replace(
											delimit(character),
											'&',
											'&\f',
										)),
										'&\f',
									) && (ampersand = -1)
								break
							}
						case 34:
						case 39:
						case 91:
							characters += delimit(character)
							break
						case 9:
						case 10:
						case 13:
						case 32:
							characters += whitespace(previous)
							break
						case 92:
							characters += escaping(caret() - 1, 7)
							continue
						case 47:
							switch (peek()) {
								case 42:
								case 47:
									Utility_append(
										comment(
											commenter(next(), caret()),
											root,
											parent,
										),
										declarations,
									)
									break
								default:
									characters += '/'
							}
							break
						case 123 * variable:
							points[index++] =
								Utility_strlen(characters) * ampersand
						case 125 * variable:
						case 59:
						case 0:
							switch (character) {
								case 0:
								case 125:
									scanning = 0
								case 59 + offset:
									;-1 == ampersand &&
										(characters = Utility_replace(
											characters,
											/\f/g,
											'',
										)),
										property > 0 &&
											Utility_strlen(characters) -
												length &&
											Utility_append(
												property > 32
													? declaration(
															characters + ';',
															rule,
															parent,
															length - 1,
													  )
													: declaration(
															Utility_replace(
																characters,
																' ',
																'',
															) + ';',
															rule,
															parent,
															length - 2,
													  ),
												declarations,
											)
									break
								case 59:
									characters += ';'
								default:
									if (
										(Utility_append(
											(reference = ruleset(
												characters,
												root,
												parent,
												index,
												offset,
												rules,
												points,
												type,
												(props = []),
												(children = []),
												length,
											)),
											rulesets,
										),
										123 === character)
									)
										if (0 === offset)
											parse(
												characters,
												root,
												reference,
												reference,
												props,
												rulesets,
												length,
												points,
												children,
											)
										else
											switch (
												99 === atrule &&
												110 ===
													Utility_charat(
														characters,
														3,
													)
													? 100
													: atrule
											) {
												case 100:
												case 108:
												case 109:
												case 115:
													parse(
														value,
														reference,
														reference,
														rule &&
															Utility_append(
																ruleset(
																	value,
																	reference,
																	reference,
																	0,
																	0,
																	rules,
																	points,
																	type,
																	rules,
																	(props =
																		[]),
																	length,
																),
																children,
															),
														rules,
														children,
														length,
														points,
														rule ? props : children,
													)
													break
												default:
													parse(
														characters,
														reference,
														reference,
														reference,
														[''],
														children,
														0,
														points,
														children,
													)
											}
							}
							;(index = offset = property = 0),
								(variable = ampersand = 1),
								(type = characters = ''),
								(length = pseudo)
							break
						case 58:
							;(length = 1 + Utility_strlen(characters)),
								(property = previous)
						default:
							if (variable < 1)
								if (123 == character) --variable
								else if (
									125 == character &&
									0 == variable++ &&
									125 == prev()
								)
									continue
							switch (
								((characters += Utility_from(character)),
								character * variable)
							) {
								case 38:
									ampersand =
										offset > 0
											? 1
											: ((characters += '\f'), -1)
									break
								case 44:
									;(points[index++] =
										(Utility_strlen(characters) - 1) *
										ampersand),
										(ampersand = 1)
									break
								case 64:
									45 === peek() &&
										(characters += delimit(next())),
										(atrule = peek()),
										(offset = length =
											Utility_strlen(
												(type = characters +=
													identifier(caret())),
											)),
										character++
									break
								case 45:
									45 === previous &&
										2 == Utility_strlen(characters) &&
										(variable = 0)
							}
					}
				return rulesets
			}
			function ruleset(
				value,
				root,
				parent,
				index,
				offset,
				rules,
				points,
				type,
				props,
				children,
				length,
			) {
				for (
					var post = offset - 1,
						rule = 0 === offset ? rules : [''],
						size = Utility_sizeof(rule),
						i = 0,
						j = 0,
						k = 0;
					i < index;
					++i
				)
					for (
						var x = 0,
							y = Utility_substr(
								value,
								post + 1,
								(post = abs((j = points[i]))),
							),
							z = value;
						x < size;
						++x
					)
						(z = trim(
							j > 0
								? rule[x] + ' ' + y
								: Utility_replace(y, /&\f/g, rule[x]),
						)) && (props[k++] = z)
				return node(
					value,
					root,
					parent,
					0 === offset ? Enum_RULESET : type,
					props,
					children,
					length,
				)
			}
			function comment(value, root, parent) {
				return node(
					value,
					root,
					parent,
					COMMENT,
					Utility_from(
						(function Tokenizer_char() {
							return character
						})(),
					),
					Utility_substr(value, 2, -2),
					0,
				)
			}
			function declaration(value, root, parent, length) {
				return node(
					value,
					root,
					parent,
					Enum_DECLARATION,
					Utility_substr(value, 0, length),
					Utility_substr(value, length + 1, -1),
					length,
				)
			}
			var identifierWithPointTracking =
					function identifierWithPointTracking(begin, points, index) {
						for (
							var previous = 0, character = 0;
							(previous = character),
								(character = peek()),
								38 === previous &&
									12 === character &&
									(points[index] = 1),
								!token(character);

						)
							next()
						return slice(begin, position)
					},
				getRules = function getRules(value, points) {
					return dealloc(
						(function toRules(parsed, points) {
							var index = -1,
								character = 44
							do {
								switch (token(character)) {
									case 0:
										38 === character &&
											12 === peek() &&
											(points[index] = 1),
											(parsed[index] +=
												identifierWithPointTracking(
													position - 1,
													points,
													index,
												))
										break
									case 2:
										parsed[index] += delimit(character)
										break
									case 4:
										if (44 === character) {
											;(parsed[++index] =
												58 === peek() ? '&\f' : ''),
												(points[index] =
													parsed[index].length)
											break
										}
									default:
										parsed[index] += Utility_from(character)
								}
							} while ((character = next()))
							return parsed
						})(alloc(value), points),
					)
				},
				fixedElements = new WeakMap(),
				compat = function compat(element) {
					if (
						'rule' === element.type &&
						element.parent &&
						!(element.length < 1)
					) {
						for (
							var value = element.value,
								parent = element.parent,
								isImplicitRule =
									element.column === parent.column &&
									element.line === parent.line;
							'rule' !== parent.type;

						)
							if (!(parent = parent.parent)) return
						if (
							(1 !== element.props.length ||
								58 === value.charCodeAt(0) ||
								fixedElements.get(parent)) &&
							!isImplicitRule
						) {
							fixedElements.set(element, !0)
							for (
								var points = [],
									rules = getRules(value, points),
									parentRules = parent.props,
									i = 0,
									k = 0;
								i < rules.length;
								i++
							)
								for (
									var j = 0;
									j < parentRules.length;
									j++, k++
								)
									element.props[k] = points[i]
										? rules[i].replace(
												/&\f/g,
												parentRules[j],
										  )
										: parentRules[j] + ' ' + rules[i]
						}
					}
				},
				removeLabel = function removeLabel(element) {
					if ('decl' === element.type) {
						var value = element.value
						108 === value.charCodeAt(0) &&
							98 === value.charCodeAt(2) &&
							((element.return = ''), (element.value = ''))
					}
				}
			function emotion_cache_browser_esm_prefix(value, length) {
				switch (
					(function hash(value, length) {
						return 45 ^ Utility_charat(value, 0)
							? (((((((length << 2) ^ Utility_charat(value, 0)) <<
									2) ^
									Utility_charat(value, 1)) <<
									2) ^
									Utility_charat(value, 2)) <<
									2) ^
									Utility_charat(value, 3)
							: 0
					})(value, length)
				) {
					case 5103:
						return Enum_WEBKIT + 'print-' + value + value
					case 5737:
					case 4201:
					case 3177:
					case 3433:
					case 1641:
					case 4457:
					case 2921:
					case 5572:
					case 6356:
					case 5844:
					case 3191:
					case 6645:
					case 3005:
					case 6391:
					case 5879:
					case 5623:
					case 6135:
					case 4599:
					case 4855:
					case 4215:
					case 6389:
					case 5109:
					case 5365:
					case 5621:
					case 3829:
						return Enum_WEBKIT + value + value
					case 5349:
					case 4246:
					case 4810:
					case 6968:
					case 2756:
						return (
							Enum_WEBKIT +
							value +
							Enum_MOZ +
							value +
							Enum_MS +
							value +
							value
						)
					case 6828:
					case 4268:
						return Enum_WEBKIT + value + Enum_MS + value + value
					case 6165:
						return (
							Enum_WEBKIT +
							value +
							Enum_MS +
							'flex-' +
							value +
							value
						)
					case 5187:
						return (
							Enum_WEBKIT +
							value +
							Utility_replace(
								value,
								/(\w+).+(:[^]+)/,
								Enum_WEBKIT +
									'box-$1$2' +
									Enum_MS +
									'flex-$1$2',
							) +
							value
						)
					case 5443:
						return (
							Enum_WEBKIT +
							value +
							Enum_MS +
							'flex-item-' +
							Utility_replace(value, /flex-|-self/, '') +
							value
						)
					case 4675:
						return (
							Enum_WEBKIT +
							value +
							Enum_MS +
							'flex-line-pack' +
							Utility_replace(
								value,
								/align-content|flex-|-self/,
								'',
							) +
							value
						)
					case 5548:
						return (
							Enum_WEBKIT +
							value +
							Enum_MS +
							Utility_replace(value, 'shrink', 'negative') +
							value
						)
					case 5292:
						return (
							Enum_WEBKIT +
							value +
							Enum_MS +
							Utility_replace(value, 'basis', 'preferred-size') +
							value
						)
					case 6060:
						return (
							Enum_WEBKIT +
							'box-' +
							Utility_replace(value, '-grow', '') +
							Enum_WEBKIT +
							value +
							Enum_MS +
							Utility_replace(value, 'grow', 'positive') +
							value
						)
					case 4554:
						return (
							Enum_WEBKIT +
							Utility_replace(
								value,
								/([^-])(transform)/g,
								'$1' + Enum_WEBKIT + '$2',
							) +
							value
						)
					case 6187:
						return (
							Utility_replace(
								Utility_replace(
									Utility_replace(
										value,
										/(zoom-|grab)/,
										Enum_WEBKIT + '$1',
									),
									/(image-set)/,
									Enum_WEBKIT + '$1',
								),
								value,
								'',
							) + value
						)
					case 5495:
					case 3959:
						return Utility_replace(
							value,
							/(image-set\([^]*)/,
							Enum_WEBKIT + '$1$`$1',
						)
					case 4968:
						return (
							Utility_replace(
								Utility_replace(
									value,
									/(.+:)(flex-)?(.*)/,
									Enum_WEBKIT +
										'box-pack:$3' +
										Enum_MS +
										'flex-pack:$3',
								),
								/s.+-b[^;]+/,
								'justify',
							) +
							Enum_WEBKIT +
							value +
							value
						)
					case 4095:
					case 3583:
					case 4068:
					case 2532:
						return (
							Utility_replace(
								value,
								/(.+)-inline(.+)/,
								Enum_WEBKIT + '$1$2',
							) + value
						)
					case 8116:
					case 7059:
					case 5753:
					case 5535:
					case 5445:
					case 5701:
					case 4933:
					case 4677:
					case 5533:
					case 5789:
					case 5021:
					case 4765:
						if (Utility_strlen(value) - 1 - length > 6)
							switch (Utility_charat(value, length + 1)) {
								case 109:
									if (
										45 !== Utility_charat(value, length + 4)
									)
										break
								case 102:
									return (
										Utility_replace(
											value,
											/(.+:)(.+)-([^]+)/,
											'$1' +
												Enum_WEBKIT +
												'$2-$3$1' +
												Enum_MOZ +
												(108 ==
												Utility_charat(
													value,
													length + 3,
												)
													? '$3'
													: '$2-$3'),
										) + value
									)
								case 115:
									return ~indexof(value, 'stretch')
										? emotion_cache_browser_esm_prefix(
												Utility_replace(
													value,
													'stretch',
													'fill-available',
												),
												length,
										  ) + value
										: value
							}
						break
					case 4949:
						if (115 !== Utility_charat(value, length + 1)) break
					case 6444:
						switch (
							Utility_charat(
								value,
								Utility_strlen(value) -
									3 -
									(~indexof(value, '!important') && 10),
							)
						) {
							case 107:
								return (
									Utility_replace(
										value,
										':',
										':' + Enum_WEBKIT,
									) + value
								)
							case 101:
								return (
									Utility_replace(
										value,
										/(.+:)([^;!]+)(;|!.+)?/,
										'$1' +
											Enum_WEBKIT +
											(45 === Utility_charat(value, 14)
												? 'inline-'
												: '') +
											'box$3$1' +
											Enum_WEBKIT +
											'$2$3$1' +
											Enum_MS +
											'$2box$3',
									) + value
								)
						}
						break
					case 5936:
						switch (Utility_charat(value, length + 11)) {
							case 114:
								return (
									Enum_WEBKIT +
									value +
									Enum_MS +
									Utility_replace(
										value,
										/[svh]\w+-[tblr]{2}/,
										'tb',
									) +
									value
								)
							case 108:
								return (
									Enum_WEBKIT +
									value +
									Enum_MS +
									Utility_replace(
										value,
										/[svh]\w+-[tblr]{2}/,
										'tb-rl',
									) +
									value
								)
							case 45:
								return (
									Enum_WEBKIT +
									value +
									Enum_MS +
									Utility_replace(
										value,
										/[svh]\w+-[tblr]{2}/,
										'lr',
									) +
									value
								)
						}
						return Enum_WEBKIT + value + Enum_MS + value + value
				}
				return value
			}
			var defaultStylisPlugins = [
					function prefixer(element, index, children, callback) {
						if (element.length > -1 && !element.return)
							switch (element.type) {
								case Enum_DECLARATION:
									element.return =
										emotion_cache_browser_esm_prefix(
											element.value,
											element.length,
										)
									break
								case '@keyframes':
									return Serializer_serialize(
										[
											Tokenizer_copy(element, {
												value: Utility_replace(
													element.value,
													'@',
													'@' + Enum_WEBKIT,
												),
											}),
										],
										callback,
									)
								case Enum_RULESET:
									if (element.length)
										return (function Utility_combine(
											array,
											callback,
										) {
											return array.map(callback).join('')
										})(element.props, function (value) {
											switch (
												(function Utility_match(
													value,
													pattern,
												) {
													return (value =
														pattern.exec(value))
														? value[0]
														: value
												})(
													value,
													/(::plac\w+|:read-\w+)/,
												)
											) {
												case ':read-only':
												case ':read-write':
													return Serializer_serialize(
														[
															Tokenizer_copy(
																element,
																{
																	props: [
																		Utility_replace(
																			value,
																			/:(read-\w+)/,
																			':' +
																				Enum_MOZ +
																				'$1',
																		),
																	],
																},
															),
														],
														callback,
													)
												case '::placeholder':
													return Serializer_serialize(
														[
															Tokenizer_copy(
																element,
																{
																	props: [
																		Utility_replace(
																			value,
																			/:(plac\w+)/,
																			':' +
																				Enum_WEBKIT +
																				'input-$1',
																		),
																	],
																},
															),
															Tokenizer_copy(
																element,
																{
																	props: [
																		Utility_replace(
																			value,
																			/:(plac\w+)/,
																			':' +
																				Enum_MOZ +
																				'$1',
																		),
																	],
																},
															),
															Tokenizer_copy(
																element,
																{
																	props: [
																		Utility_replace(
																			value,
																			/:(plac\w+)/,
																			Enum_MS +
																				'input-$1',
																		),
																	],
																},
															),
														],
														callback,
													)
											}
											return ''
										})
							}
					},
				],
				createCache = function createCache(options) {
					var key = options.key
					if ('css' === key) {
						var ssrStyles = document.querySelectorAll(
							'style[data-emotion]:not([data-s])',
						)
						Array.prototype.forEach.call(
							ssrStyles,
							function (node) {
								;-1 !==
									node
										.getAttribute('data-emotion')
										.indexOf(' ') &&
									(document.head.appendChild(node),
									node.setAttribute('data-s', ''))
							},
						)
					}
					var stylisPlugins =
						options.stylisPlugins || defaultStylisPlugins
					var container,
						_insert,
						inserted = {},
						nodesToHydrate = []
					;(container = options.container || document.head),
						Array.prototype.forEach.call(
							document.querySelectorAll(
								'style[data-emotion^="' + key + ' "]',
							),
							function (node) {
								for (
									var attrib = node
											.getAttribute('data-emotion')
											.split(' '),
										i = 1;
									i < attrib.length;
									i++
								)
									inserted[attrib[i]] = !0
								nodesToHydrate.push(node)
							},
						)
					var currentSheet,
						callback,
						finalizingPlugins = [
							stringify,
							((callback = function (rule) {
								currentSheet.insert(rule)
							}),
							function (element) {
								element.root ||
									((element = element.return) &&
										callback(element))
							}),
						],
						serializer = (function middleware(collection) {
							var length = Utility_sizeof(collection)
							return function (
								element,
								index,
								children,
								callback,
							) {
								for (var output = '', i = 0; i < length; i++)
									output +=
										collection[i](
											element,
											index,
											children,
											callback,
										) || ''
								return output
							}
						})(
							[compat, removeLabel].concat(
								stylisPlugins,
								finalizingPlugins,
							),
						)
					_insert = function insert(
						selector,
						serialized,
						sheet,
						shouldCache,
					) {
						;(currentSheet = sheet),
							(function stylis(styles) {
								Serializer_serialize(
									compile(styles),
									serializer,
								)
							})(
								selector
									? selector + '{' + serialized.styles + '}'
									: serialized.styles,
							),
							shouldCache &&
								(cache.inserted[serialized.name] = !0)
					}
					var cache = {
						key,
						sheet: new StyleSheet({
							key,
							container,
							nonce: options.nonce,
							speedy: options.speedy,
							prepend: options.prepend,
							insertionPoint: options.insertionPoint,
						}),
						nonce: options.nonce,
						inserted,
						registered: {},
						insert: _insert,
					}
					return cache.sheet.hydrate(nodesToHydrate), cache
				}
			var emotion_utils_browser_esm_registerStyles =
				function registerStyles(cache, serialized, isStringTag) {
					var className = cache.key + '-' + serialized.name
					!1 === isStringTag &&
						void 0 === cache.registered[className] &&
						(cache.registered[className] = serialized.styles)
				}
			var unitlessKeys = {
					animationIterationCount: 1,
					aspectRatio: 1,
					borderImageOutset: 1,
					borderImageSlice: 1,
					borderImageWidth: 1,
					boxFlex: 1,
					boxFlexGroup: 1,
					boxOrdinalGroup: 1,
					columnCount: 1,
					columns: 1,
					flex: 1,
					flexGrow: 1,
					flexPositive: 1,
					flexShrink: 1,
					flexNegative: 1,
					flexOrder: 1,
					gridRow: 1,
					gridRowEnd: 1,
					gridRowSpan: 1,
					gridRowStart: 1,
					gridColumn: 1,
					gridColumnEnd: 1,
					gridColumnSpan: 1,
					gridColumnStart: 1,
					msGridRow: 1,
					msGridRowSpan: 1,
					msGridColumn: 1,
					msGridColumnSpan: 1,
					fontWeight: 1,
					lineHeight: 1,
					opacity: 1,
					order: 1,
					orphans: 1,
					tabSize: 1,
					widows: 1,
					zIndex: 1,
					zoom: 1,
					WebkitLineClamp: 1,
					fillOpacity: 1,
					floodOpacity: 1,
					stopOpacity: 1,
					strokeDasharray: 1,
					strokeDashoffset: 1,
					strokeMiterlimit: 1,
					strokeOpacity: 1,
					strokeWidth: 1,
				},
				hyphenateRegex = /[A-Z]|^ms/g,
				animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
				isCustomProperty = function isCustomProperty(property) {
					return 45 === property.charCodeAt(1)
				},
				isProcessableValue = function isProcessableValue(value) {
					return null != value && 'boolean' != typeof value
				},
				processStyleName = memoize(function (styleName) {
					return isCustomProperty(styleName)
						? styleName
						: styleName.replace(hyphenateRegex, '-$&').toLowerCase()
				}),
				processStyleValue = function processStyleValue(key, value) {
					switch (key) {
						case 'animation':
						case 'animationName':
							if ('string' == typeof value)
								return value.replace(
									animationRegex,
									function (match, p1, p2) {
										return (
											(cursor = {
												name: p1,
												styles: p2,
												next: cursor,
											}),
											p1
										)
									},
								)
					}
					return 1 === unitlessKeys[key] ||
						isCustomProperty(key) ||
						'number' != typeof value ||
						0 === value
						? value
						: value + 'px'
				}
			function handleInterpolation(
				mergedProps,
				registered,
				interpolation,
			) {
				if (null == interpolation) return ''
				if (void 0 !== interpolation.__emotion_styles)
					return interpolation
				switch (typeof interpolation) {
					case 'boolean':
						return ''
					case 'object':
						if (1 === interpolation.anim)
							return (
								(cursor = {
									name: interpolation.name,
									styles: interpolation.styles,
									next: cursor,
								}),
								interpolation.name
							)
						if (void 0 !== interpolation.styles) {
							var next = interpolation.next
							if (void 0 !== next)
								for (; void 0 !== next; )
									(cursor = {
										name: next.name,
										styles: next.styles,
										next: cursor,
									}),
										(next = next.next)
							return interpolation.styles + ';'
						}
						return (function createStringFromObject(
							mergedProps,
							registered,
							obj,
						) {
							var string = ''
							if (Array.isArray(obj))
								for (var i = 0; i < obj.length; i++)
									string +=
										handleInterpolation(
											mergedProps,
											registered,
											obj[i],
										) + ';'
							else
								for (var _key in obj) {
									var value = obj[_key]
									if ('object' != typeof value)
										null != registered &&
										void 0 !== registered[value]
											? (string +=
													_key +
													'{' +
													registered[value] +
													'}')
											: isProcessableValue(value) &&
											  (string +=
													processStyleName(_key) +
													':' +
													processStyleValue(
														_key,
														value,
													) +
													';')
									else if (
										!Array.isArray(value) ||
										'string' != typeof value[0] ||
										(null != registered &&
											void 0 !== registered[value[0]])
									) {
										var interpolated = handleInterpolation(
											mergedProps,
											registered,
											value,
										)
										switch (_key) {
											case 'animation':
											case 'animationName':
												string +=
													processStyleName(_key) +
													':' +
													interpolated +
													';'
												break
											default:
												string +=
													_key +
													'{' +
													interpolated +
													'}'
										}
									} else
										for (
											var _i = 0;
											_i < value.length;
											_i++
										)
											isProcessableValue(value[_i]) &&
												(string +=
													processStyleName(_key) +
													':' +
													processStyleValue(
														_key,
														value[_i],
													) +
													';')
								}
							return string
						})(mergedProps, registered, interpolation)
					case 'function':
						if (void 0 !== mergedProps) {
							var previousCursor = cursor,
								result = interpolation(mergedProps)
							return (
								(cursor = previousCursor),
								handleInterpolation(
									mergedProps,
									registered,
									result,
								)
							)
						}
				}
				if (null == registered) return interpolation
				var cached = registered[interpolation]
				return void 0 !== cached ? cached : interpolation
			}
			var cursor,
				labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g
			var emotion_use_insertion_effect_with_fallbacks_browser_esm =
					__webpack_require__(
						'./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js',
					),
				emotion_element_c39617d8_browser_esm_hasOwnProperty = {}
					.hasOwnProperty,
				EmotionCacheContext = react.createContext(
					'undefined' != typeof HTMLElement
						? createCache({ key: 'css' })
						: null,
				)
			EmotionCacheContext.Provider
			var emotion_element_c39617d8_browser_esm_withEmotionCache =
				function withEmotionCache(func) {
					return (0, react.forwardRef)(function (props, ref) {
						var cache = (0, react.useContext)(EmotionCacheContext)
						return func(props, cache, ref)
					})
				}
			var emotion_element_c39617d8_browser_esm_ThemeContext =
				react.createContext({})
			var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
				Insertion = function Insertion(_ref) {
					var cache = _ref.cache,
						serialized = _ref.serialized,
						isStringTag = _ref.isStringTag
					return (
						emotion_utils_browser_esm_registerStyles(
							cache,
							serialized,
							isStringTag,
						),
						(0,
						emotion_use_insertion_effect_with_fallbacks_browser_esm.L)(
							function () {
								return (function insertStyles(
									cache,
									serialized,
									isStringTag,
								) {
									emotion_utils_browser_esm_registerStyles(
										cache,
										serialized,
										isStringTag,
									)
									var className =
										cache.key + '-' + serialized.name
									if (
										void 0 ===
										cache.inserted[serialized.name]
									) {
										var current = serialized
										do {
											cache.insert(
												serialized === current
													? '.' + className
													: '',
												current,
												cache.sheet,
												!0,
											),
												(current = current.next)
										} while (void 0 !== current)
									}
								})(cache, serialized, isStringTag)
							},
						),
						null
					)
				},
				Emotion = emotion_element_c39617d8_browser_esm_withEmotionCache(
					function (props, cache, ref) {
						var cssProp = props.css
						'string' == typeof cssProp &&
							void 0 !== cache.registered[cssProp] &&
							(cssProp = cache.registered[cssProp])
						var WrappedComponent = props[typePropName],
							registeredStyles = [cssProp],
							className = ''
						'string' == typeof props.className
							? (className =
									(function emotion_utils_browser_esm_getRegisteredStyles(
										registered,
										registeredStyles,
										classNames,
									) {
										var rawClassName = ''
										return (
											classNames
												.split(' ')
												.forEach(function (className) {
													void 0 !==
													registered[className]
														? registeredStyles.push(
																registered[
																	className
																] + ';',
														  )
														: (rawClassName +=
																className + ' ')
												}),
											rawClassName
										)
									})(
										cache.registered,
										registeredStyles,
										props.className,
									))
							: null != props.className &&
							  (className = props.className + ' ')
						var serialized = (function serializeStyles(
							args,
							registered,
							mergedProps,
						) {
							if (
								1 === args.length &&
								'object' == typeof args[0] &&
								null !== args[0] &&
								void 0 !== args[0].styles
							)
								return args[0]
							var stringMode = !0,
								styles = ''
							cursor = void 0
							var strings = args[0]
							null == strings || void 0 === strings.raw
								? ((stringMode = !1),
								  (styles += handleInterpolation(
										mergedProps,
										registered,
										strings,
								  )))
								: (styles += strings[0])
							for (var i = 1; i < args.length; i++)
								(styles += handleInterpolation(
									mergedProps,
									registered,
									args[i],
								)),
									stringMode && (styles += strings[i])
							labelPattern.lastIndex = 0
							for (
								var match, identifierName = '';
								null !== (match = labelPattern.exec(styles));

							)
								identifierName += '-' + match[1]
							var name =
								(function murmur2(str) {
									for (
										var k, h = 0, i = 0, len = str.length;
										len >= 4;
										++i, len -= 4
									)
										(k =
											1540483477 *
												(65535 &
													(k =
														(255 &
															str.charCodeAt(i)) |
														((255 &
															str.charCodeAt(
																++i,
															)) <<
															8) |
														((255 &
															str.charCodeAt(
																++i,
															)) <<
															16) |
														((255 &
															str.charCodeAt(
																++i,
															)) <<
															24))) +
											((59797 * (k >>> 16)) << 16)),
											(h =
												(1540483477 *
													(65535 & (k ^= k >>> 24)) +
													((59797 * (k >>> 16)) <<
														16)) ^
												(1540483477 * (65535 & h) +
													((59797 * (h >>> 16)) <<
														16)))
									switch (len) {
										case 3:
											h ^=
												(255 & str.charCodeAt(i + 2)) <<
												16
										case 2:
											h ^=
												(255 & str.charCodeAt(i + 1)) <<
												8
										case 1:
											h =
												1540483477 *
													(65535 &
														(h ^=
															255 &
															str.charCodeAt(
																i,
															))) +
												((59797 * (h >>> 16)) << 16)
									}
									return (
										((h =
											1540483477 *
												(65535 & (h ^= h >>> 13)) +
											((59797 * (h >>> 16)) << 16)) ^
											(h >>> 15)) >>>
										0
									).toString(36)
								})(styles) + identifierName
							return { name, styles, next: cursor }
						})(
							registeredStyles,
							void 0,
							react.useContext(
								emotion_element_c39617d8_browser_esm_ThemeContext,
							),
						)
						className += cache.key + '-' + serialized.name
						var newProps = {}
						for (var key in props)
							emotion_element_c39617d8_browser_esm_hasOwnProperty.call(
								props,
								key,
							) &&
								'css' !== key &&
								key !== typePropName &&
								(newProps[key] = props[key])
						return (
							(newProps.ref = ref),
							(newProps.className = className),
							react.createElement(
								react.Fragment,
								null,
								react.createElement(Insertion, {
									cache,
									serialized,
									isStringTag:
										'string' == typeof WrappedComponent,
								}),
								react.createElement(WrappedComponent, newProps),
							)
						)
					},
				)
			var Emotion$1 = Emotion
			const borders = Object.freeze({
				radiusSmall: '0.125rem',
				radiusMedium: '0.25rem',
				radiusLarge: '0.5rem',
				widthSmall: '0.0625rem',
				widthMedium: '0.125rem',
				widthLarge: '0.25rem',
				style: 'solid',
			})
			function functionalColors(colors) {
				const text = {
						textDarkest: colors.licorice,
						textDark: colors.ash,
						textLight: colors.porcelain,
						textLightest: colors.white,
						textBrand: colors.brand,
						textLink: colors.link,
						textAlert: colors.barney,
						textInfo: colors.brand,
						textSuccess: colors.shamrock,
						textDanger: colors.crimson,
						textWarning: colors.fire,
					},
					background = {
						backgroundDarkest: colors.licorice,
						backgroundDark: colors.ash,
						backgroundMedium: colors.tiara,
						backgroundLight: colors.porcelain,
						backgroundLightest: colors.white,
						backgroundBrand: colors.brand,
						backgroundBrandSecondary: colors.oxford,
						backgroundAlert: colors.barney,
						backgroundInfo: colors.brand,
						backgroundSuccess: colors.shamrock,
						backgroundDanger: colors.crimson,
						backgroundWarning: colors.fire,
					},
					border = {
						borderLightest: colors.white,
						borderLight: colors.porcelain,
						borderMedium: colors.tiara,
						borderDark: colors.ash,
						borderDarkest: colors.licorice,
						borderBrand: colors.brand,
						borderAlert: colors.barney,
						borderInfo: colors.brand,
						borderSuccess: colors.shamrock,
						borderDanger: colors.crimson,
						borderWarning: colors.fire,
						borderDebug: colors.crimson,
					}
				return {
					...colors,
					...text,
					...background,
					...border,
					values: colors,
					text,
					background,
					border,
				}
			}
			const colors = Object.freeze(
					functionalColors({
						brand: '#0374B5',
						link: '#0374B5',
						electric: '#0374B5',
						shamrock: '#0B874B',
						barney: '#BF32A4',
						crimson: '#E0061F',
						fire: '#FC5E13',
						licorice: '#2D3B45',
						oxford: '#394B58',
						ash: '#6B7780',
						slate: '#8B969E',
						tiara: '#C7CDD1',
						porcelain: '#F5F5F5',
						white: '#FFFFFF',
					}),
				),
				transitions = Object.freeze({
					duration: '300ms',
					timing: 'ease-in-out',
				}),
				typography = Object.freeze({
					fontFamily:
						'LatoWeb, Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
					fontFamilyMonospace:
						'Menlo, Consolas, Monaco, "Andale Mono", monospace',
					fontSizeXSmall: '0.75rem',
					fontSizeSmall: '0.875rem',
					fontSizeMedium: '1rem',
					fontSizeLarge: '1.375rem',
					fontSizeXLarge: '1.75rem',
					fontSizeXXLarge: '2.375rem',
					fontWeightLight: 300,
					fontWeightNormal: 400,
					fontWeightBold: 700,
					lineHeight: 1.5,
					lineHeightFit: 1.125,
					lineHeightCondensed: 1.25,
					lineHeightDouble: 2,
					letterSpacingNormal: 0,
					letterSpacingCondensed: '-0.0625rem',
					letterSpacingExpanded: '0.0625rem',
				}),
				spacing = Object.freeze({
					xxxSmall: '0.125rem',
					xxSmall: '0.375rem',
					xSmall: '0.5rem',
					small: '0.75rem',
					medium: '1.5rem',
					large: '2.25rem',
					xLarge: '3rem',
					xxLarge: '3.75rem',
				}),
				forms_forms = Object.freeze({
					inputHeightSmall: '1.75rem',
					inputHeightMedium: '2.375rem',
					inputHeightLarge: '3rem',
				}),
				values_xxSmall = 8,
				values_xSmall = 16,
				values_small = 30,
				values_medium = 48,
				values_large = 62,
				values_xLarge = 75,
				breakpoints = Object.freeze({
					xxSmall: `${values_xxSmall}em`,
					xSmall: `${values_xSmall}em`,
					small: `${values_small}em`,
					medium: `${values_medium}em`,
					large: `${values_large}em`,
					xLarge: `${values_xLarge}em`,
					maxWidth: values_large - 0.0625 + 'em',
				}),
				media = Object.freeze({
					mediumMin: `min-width: ${breakpoints.medium}`,
					largeMin: `min-width: ${breakpoints.large}`,
					xLargeMin: `min-width: ${breakpoints.xLarge}`,
				}),
				shadows_values = [
					'0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)',
					'0 0.1875rem 0.375rem rgba(0, 0, 0, 0.1), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16)',
					'0 0.375rem 0.4375rem rgba(0, 0, 0, 0.1), 0 0.625rem 1.75rem rgba(0, 0, 0, 0.25)',
				],
				shadows = Object.freeze({
					depth1: shadows_values[0],
					depth2: shadows_values[1],
					depth3: shadows_values[2],
					resting: shadows_values[0],
					above: shadows_values[1],
					topmost: shadows_values[2],
				}),
				stacking = Object.freeze({
					topmost: 9999,
					above: 1,
					below: -1,
					deepest: -9999,
				}),
				canvas = {
					colors,
					borders,
					transitions,
					typography,
					spacing,
					forms: forms_forms,
					media,
					breakpoints,
					shadows,
					stacking,
				}
			function mergeDeep() {
				let target = {}
				for (
					var _len = arguments.length,
						args = new Array(_len),
						_key = 0;
					_key < _len;
					_key++
				)
					args[_key] = arguments[_key]
				return (
					args.forEach((arg) => {
						target = mergeSourceIntoTarget(target, arg)
					}),
					target
				)
			}
			function mergeSourceIntoTarget(target, source) {
				if (isObject(source)) {
					const keys = [
							...Object.keys(source),
							...Object.getOwnPropertySymbols(source),
						],
						merged = { ...target }
					return (
						keys.forEach((key) => {
							isObject(target[key]) && isObject(source[key])
								? (merged[key] = mergeSourceIntoTarget(
										target[key],
										source[key],
								  ))
								: isArray(source[key]) && isArray(target[key])
								? (merged[key] = [
										...new Set([
											...target[key],
											...source[key],
										]),
								  ])
								: isArray(target[key])
								? (merged[key] = [
										...new Set([
											...target[key],
											source[key],
										]),
								  ])
								: (merged[key] = source[key])
						}),
						merged
					)
				}
				return { ...target }
			}
			function isObject(item) {
				return (
					item &&
					('object' == typeof item || 'function' == typeof item) &&
					!Array.isArray(item)
				)
			}
			function isArray(item) {
				return Array.isArray(item)
			}
			const baseThemeProps = [
					'borders',
					'breakpoints',
					'colors',
					'forms',
					'media',
					'shadows',
					'spacing',
					'stacking',
					'transitions',
					'typography',
				],
				isBaseTheme = (theme) => {
					if (Array.isArray(theme) || 'function' == typeof theme)
						throw new Error()
					try {
						return (
							'key' in theme &&
							baseThemeProps.every((prop) => prop in theme)
						)
					} catch {
						throw new Error()
					}
				},
				_excluded = ['key', 'description'],
				_excluded2 = ['key', 'description', 'use'],
				DEFAULT_THEME_KEY = '@@themeRegistryDefaultTheme',
				GLOBAL_THEME_REGISTRY = '__GLOBAL_THEME_REGISTRY__'
			function makeRegistry() {
				return { currentThemeKey: null, themes: {}, registered: [] }
			}
			function getRegistry() {
				return globalThis[GLOBAL_THEME_REGISTRY]
			}
			function setRegistry(registry) {
				globalThis[GLOBAL_THEME_REGISTRY] = registry
			}
			function clearRegistry() {
				setRegistry({
					currentThemeKey: null,
					themes: {},
					registered: [],
				})
			}
			function makeTheme(theme) {
				const key = theme.key,
					description = theme.description,
					rest = (0, objectWithoutProperties.Z)(theme, _excluded),
					wrappedTheme = {
						key,
						description,
						...rest,
						use(arg) {
							!(function activateTheme(themeKey, overrides) {
								const registry = getRegistry(),
									theme = registry.themes[themeKey]
								theme ||
									(themeKey !== DEFAULT_THEME_KEY &&
										error(
											theme,
											`[theme-registry] Could not find theme: '${themeKey}' in the registry.`,
										)),
									(registry.currentThemeKey = themeKey)
								const themeWithOverrides = mergeDeep(
									theme,
									overrides,
								)
								return (
									(registry.themes[themeKey] =
										themeWithOverrides),
									themeWithOverrides
								)
							})(
								key,
								(null == arg ? void 0 : arg.overrides) || {},
							)
						},
					}
				return new Proxy(wrappedTheme, {
					get(target, property) {
						target.key, target.description, target.use
						const variables = (0, objectWithoutProperties.Z)(
							target,
							_excluded2,
						)
						return 'variables' === property
							? variables
							: Reflect.get(target, property)
					},
				})
			}
			globalThis[GLOBAL_THEME_REGISTRY]
				? (error(
						!1,
						"[theme-registry] A theme registry has already been initialized. Ensure that you are importing only one copy of '@instructure/theme-registry'.",
				  ),
				  setRegistry(
						(function validateRegistry(registry) {
							const defaultRegistry = makeRegistry()
							if (void 0 === registry) return defaultRegistry
							let valid = !0
							return (
								Object.keys(defaultRegistry).forEach((key) => {
									void 0 === registry[key] && (valid = !1)
								}),
								error(
									valid,
									'[theme-registry] Invalid global theme registry!',
								),
								registry
							)
						})(globalThis[GLOBAL_THEME_REGISTRY]),
				  ))
				: clearRegistry()
			const ThemeRegistry = {
					getRegistry,
					clearRegistry,
					setRegistry,
					registerTheme: function registerTheme(theme) {
						const registry = getRegistry()
						if (theme.key && registry.themes[theme.key])
							return registry.themes[theme.key]
						{
							if (!isBaseTheme(theme))
								throw (
									(error(
										!1,
										"[theme-registry] The theme provided to 'registerTheme' is not a valid theme object!\nFor it to be valid some properties have to be present, check out https://instructure.design/#canvas as a reference.",
									),
									new Error())
								)
							const registeredTheme = makeTheme(theme)
							return (
								(registry.themes[registeredTheme.key] =
									registeredTheme),
								registry.registered.push(registeredTheme.key),
								registeredTheme
							)
						}
					},
					getCurrentTheme: function getCurrentTheme() {
						const registry = getRegistry(),
							currentThemeKey = registry.currentThemeKey
						if (currentThemeKey)
							return registry.themes[currentThemeKey]
					},
				},
				es_colors = canvas.colors,
				brandVariables = {
					'ic-brand-primary': es_colors.textBrand,
					'ic-brand-font-color-dark': es_colors.textDarkest,
					'ic-link-color': es_colors.textLink,
					'ic-link-decoration': 'none',
					'ic-brand-button--primary-bgd': es_colors.backgroundBrand,
					'ic-brand-button--primary-text': es_colors.textLightest,
					'ic-brand-button--secondary-bgd':
						es_colors.backgroundDarkest,
					'ic-brand-button--secondary-text': es_colors.textLightest,
					'ic-brand-global-nav-bgd':
						es_colors.backgroundBrandSecondary,
					'ic-global-nav-link-hover': es_colors.backgroundDarkest,
					'ic-brand-global-nav-ic-icon-svg-fill':
						es_colors.textLightest,
					'ic-brand-global-nav-ic-icon-svg-fill--active':
						es_colors.textBrand,
					'ic-brand-global-nav-menu-item__text-color':
						es_colors.textLightest,
					'ic-brand-global-nav-menu-item__text-color--active':
						es_colors.textBrand,
				},
				__theme = { key: 'canvas', ...canvas, ...brandVariables },
				es_theme = ThemeRegistry.registerTheme(__theme),
				isEmpty_hasOwnProperty = Object.prototype.hasOwnProperty
			function isEmpty(obj) {
				if ('object' != typeof obj) return !0
				for (const key in obj)
					if (isEmpty_hasOwnProperty.call(obj, key)) return !1
				return !0
			}
			const useTheme_useTheme = () => {
					let theme = (function useTheme() {
						return react.useContext(
							emotion_element_c39617d8_browser_esm_ThemeContext,
						)
					})()
					if (isEmpty(theme)) {
						const globalTheme = ThemeRegistry.getCurrentTheme()
						if (globalTheme) return globalTheme
						0, (theme = es_theme)
					}
					return theme
				},
				defaultValues = { styles: {}, makeStyles: () => {} },
				withStyle = decorator(
					(
						ComposedComponent,
						generateStyle,
						generateComponentTheme,
					) => {
						const displayName =
								ComposedComponent.displayName ||
								ComposedComponent.name,
							WithStyle = (0, react.forwardRef)((props, ref) => {
								const theme = useTheme_useTheme()
								props.styles &&
									warn(
										!1,
										`Manually passing the "styles" property is not allowed on the ${displayName} component. Using the default styles calculated by the @withStyle decorator instead.\n`,
										props.styles,
									),
									props.makeStyles &&
										warn(
											!1,
											`Manually passing the "makeStyles" property is not allowed on the ${displayName} component. Styles are calculated by the @withStyle decorator.`,
										)
								const componentProps = {
									...ComposedComponent.defaultProps,
									...props,
									...defaultValues,
								}
								let componentTheme =
									'function' == typeof generateComponentTheme
										? generateComponentTheme(theme)
										: {}
								const themeOverride = getComponentThemeOverride(
									theme,
									displayName,
									ComposedComponent.componentId,
									componentProps,
									componentTheme,
								)
								componentTheme = {
									...componentTheme,
									...themeOverride,
								}
								const _useState = (0, react.useState)(
										generateStyle
											? generateStyle(
													componentTheme,
													componentProps,
													{},
											  )
											: {},
									),
									_useState2 = (0, slicedToArray.Z)(
										_useState,
										2,
									),
									styles = _useState2[0],
									setStyles = _useState2[1]
								return react.createElement(
									ComposedComponent,
									Object.assign({ ref }, props, {
										makeStyles: (extraArgs) => {
											const calculatedStyles =
												generateStyle(
													componentTheme,
													componentProps,
													extraArgs,
												)
											fast_deep_equal_default()(
												calculatedStyles,
												styles,
											) || setStyles(calculatedStyles)
										},
										styles,
										themeOverride,
									}),
								)
							})
						return (
							hoist_non_react_statics_cjs_default()(
								WithStyle,
								ComposedComponent,
							),
							(WithStyle.propTypes = ComposedComponent.propTypes),
							(WithStyle.defaultProps =
								ComposedComponent.defaultProps),
							(WithStyle.allowedProps =
								ComposedComponent.allowedProps),
							(WithStyle.generateComponentTheme =
								generateComponentTheme),
							(ComposedComponent.defaultProps = {
								...ComposedComponent.defaultProps,
								makeStyles: defaultValues.makeStyles,
								styles: defaultValues.styles,
							}),
							WithStyle
						)
					},
				)
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
			var trimLeft = /^\s+/,
				trimRight = /\s+$/
			function tinycolor(color, opts) {
				if (
					((opts = opts || {}),
					(color = color || '') instanceof tinycolor)
				)
					return color
				if (!(this instanceof tinycolor))
					return new tinycolor(color, opts)
				var rgb = (function inputToRGB(color) {
					var rgb = { r: 0, g: 0, b: 0 },
						a = 1,
						s = null,
						v = null,
						l = null,
						ok = !1,
						format = !1
					'string' == typeof color &&
						(color = (function stringInputToObject(color) {
							color = color
								.replace(trimLeft, '')
								.replace(trimRight, '')
								.toLowerCase()
							var match,
								named = !1
							if (names[color])
								(color = names[color]), (named = !0)
							else if ('transparent' == color)
								return {
									r: 0,
									g: 0,
									b: 0,
									a: 0,
									format: 'name',
								}
							if ((match = matchers.rgb.exec(color)))
								return { r: match[1], g: match[2], b: match[3] }
							if ((match = matchers.rgba.exec(color)))
								return {
									r: match[1],
									g: match[2],
									b: match[3],
									a: match[4],
								}
							if ((match = matchers.hsl.exec(color)))
								return { h: match[1], s: match[2], l: match[3] }
							if ((match = matchers.hsla.exec(color)))
								return {
									h: match[1],
									s: match[2],
									l: match[3],
									a: match[4],
								}
							if ((match = matchers.hsv.exec(color)))
								return { h: match[1], s: match[2], v: match[3] }
							if ((match = matchers.hsva.exec(color)))
								return {
									h: match[1],
									s: match[2],
									v: match[3],
									a: match[4],
								}
							if ((match = matchers.hex8.exec(color)))
								return {
									r: parseIntFromHex(match[1]),
									g: parseIntFromHex(match[2]),
									b: parseIntFromHex(match[3]),
									a: convertHexToDecimal(match[4]),
									format: named ? 'name' : 'hex8',
								}
							if ((match = matchers.hex6.exec(color)))
								return {
									r: parseIntFromHex(match[1]),
									g: parseIntFromHex(match[2]),
									b: parseIntFromHex(match[3]),
									format: named ? 'name' : 'hex',
								}
							if ((match = matchers.hex4.exec(color)))
								return {
									r: parseIntFromHex(
										match[1] + '' + match[1],
									),
									g: parseIntFromHex(
										match[2] + '' + match[2],
									),
									b: parseIntFromHex(
										match[3] + '' + match[3],
									),
									a: convertHexToDecimal(
										match[4] + '' + match[4],
									),
									format: named ? 'name' : 'hex8',
								}
							if ((match = matchers.hex3.exec(color)))
								return {
									r: parseIntFromHex(
										match[1] + '' + match[1],
									),
									g: parseIntFromHex(
										match[2] + '' + match[2],
									),
									b: parseIntFromHex(
										match[3] + '' + match[3],
									),
									format: named ? 'name' : 'hex',
								}
							return !1
						})(color))
					'object' == _typeof(color) &&
						(isValidCSSUnit(color.r) &&
						isValidCSSUnit(color.g) &&
						isValidCSSUnit(color.b)
							? ((rgb = (function rgbToRgb(r, g, b) {
									return {
										r: 255 * bound01(r, 255),
										g: 255 * bound01(g, 255),
										b: 255 * bound01(b, 255),
									}
							  })(color.r, color.g, color.b)),
							  (ok = !0),
							  (format =
									'%' === String(color.r).substr(-1)
										? 'prgb'
										: 'rgb'))
							: isValidCSSUnit(color.h) &&
							  isValidCSSUnit(color.s) &&
							  isValidCSSUnit(color.v)
							? ((s = convertToPercentage(color.s)),
							  (v = convertToPercentage(color.v)),
							  (rgb = (function hsvToRgb(h, s, v) {
									;(h = 6 * bound01(h, 360)),
										(s = bound01(s, 100)),
										(v = bound01(v, 100))
									var i = Math.floor(h),
										f = h - i,
										p = v * (1 - s),
										q = v * (1 - f * s),
										t = v * (1 - (1 - f) * s),
										mod = i % 6,
										r = [v, q, p, p, t, v][mod],
										g = [t, v, v, q, p, p][mod],
										b = [p, p, t, v, v, q][mod]
									return {
										r: 255 * r,
										g: 255 * g,
										b: 255 * b,
									}
							  })(color.h, s, v)),
							  (ok = !0),
							  (format = 'hsv'))
							: isValidCSSUnit(color.h) &&
							  isValidCSSUnit(color.s) &&
							  isValidCSSUnit(color.l) &&
							  ((s = convertToPercentage(color.s)),
							  (l = convertToPercentage(color.l)),
							  (rgb = (function hslToRgb(h, s, l) {
									var r, g, b
									function hue2rgb(p, q, t) {
										return (
											t < 0 && (t += 1),
											t > 1 && (t -= 1),
											t < 1 / 6
												? p + 6 * (q - p) * t
												: t < 0.5
												? q
												: t < 2 / 3
												? p + (q - p) * (2 / 3 - t) * 6
												: p
										)
									}
									if (
										((h = bound01(h, 360)),
										(s = bound01(s, 100)),
										(l = bound01(l, 100)),
										0 === s)
									)
										r = g = b = l
									else {
										var q =
												l < 0.5
													? l * (1 + s)
													: l + s - l * s,
											p = 2 * l - q
										;(r = hue2rgb(p, q, h + 1 / 3)),
											(g = hue2rgb(p, q, h)),
											(b = hue2rgb(p, q, h - 1 / 3))
									}
									return {
										r: 255 * r,
										g: 255 * g,
										b: 255 * b,
									}
							  })(color.h, s, l)),
							  (ok = !0),
							  (format = 'hsl')),
						color.hasOwnProperty('a') && (a = color.a))
					return (
						(a = boundAlpha(a)),
						{
							ok,
							format: color.format || format,
							r: Math.min(255, Math.max(rgb.r, 0)),
							g: Math.min(255, Math.max(rgb.g, 0)),
							b: Math.min(255, Math.max(rgb.b, 0)),
							a,
						}
					)
				})(color)
				;(this._originalInput = color),
					(this._r = rgb.r),
					(this._g = rgb.g),
					(this._b = rgb.b),
					(this._a = rgb.a),
					(this._roundA = Math.round(100 * this._a) / 100),
					(this._format = opts.format || rgb.format),
					(this._gradientType = opts.gradientType),
					this._r < 1 && (this._r = Math.round(this._r)),
					this._g < 1 && (this._g = Math.round(this._g)),
					this._b < 1 && (this._b = Math.round(this._b)),
					(this._ok = rgb.ok)
			}
			function rgbToHsl(r, g, b) {
				;(r = bound01(r, 255)),
					(g = bound01(g, 255)),
					(b = bound01(b, 255))
				var h,
					s,
					max = Math.max(r, g, b),
					min = Math.min(r, g, b),
					l = (max + min) / 2
				if (max == min) h = s = 0
				else {
					var d = max - min
					switch (
						((s = l > 0.5 ? d / (2 - max - min) : d / (max + min)),
						max)
					) {
						case r:
							h = (g - b) / d + (g < b ? 6 : 0)
							break
						case g:
							h = (b - r) / d + 2
							break
						case b:
							h = (r - g) / d + 4
					}
					h /= 6
				}
				return { h, s, l }
			}
			function rgbToHsv(r, g, b) {
				;(r = bound01(r, 255)),
					(g = bound01(g, 255)),
					(b = bound01(b, 255))
				var h,
					s,
					max = Math.max(r, g, b),
					min = Math.min(r, g, b),
					v = max,
					d = max - min
				if (((s = 0 === max ? 0 : d / max), max == min)) h = 0
				else {
					switch (max) {
						case r:
							h = (g - b) / d + (g < b ? 6 : 0)
							break
						case g:
							h = (b - r) / d + 2
							break
						case b:
							h = (r - g) / d + 4
					}
					h /= 6
				}
				return { h, s, v }
			}
			function rgbToHex(r, g, b, allow3Char) {
				var hex = [
					pad2(Math.round(r).toString(16)),
					pad2(Math.round(g).toString(16)),
					pad2(Math.round(b).toString(16)),
				]
				return allow3Char &&
					hex[0].charAt(0) == hex[0].charAt(1) &&
					hex[1].charAt(0) == hex[1].charAt(1) &&
					hex[2].charAt(0) == hex[2].charAt(1)
					? hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0)
					: hex.join('')
			}
			function rgbaToArgbHex(r, g, b, a) {
				return [
					pad2(convertDecimalToHex(a)),
					pad2(Math.round(r).toString(16)),
					pad2(Math.round(g).toString(16)),
					pad2(Math.round(b).toString(16)),
				].join('')
			}
			function _desaturate(color, amount) {
				amount = 0 === amount ? 0 : amount || 10
				var hsl = tinycolor(color).toHsl()
				return (
					(hsl.s -= amount / 100),
					(hsl.s = clamp01(hsl.s)),
					tinycolor(hsl)
				)
			}
			function _saturate(color, amount) {
				amount = 0 === amount ? 0 : amount || 10
				var hsl = tinycolor(color).toHsl()
				return (
					(hsl.s += amount / 100),
					(hsl.s = clamp01(hsl.s)),
					tinycolor(hsl)
				)
			}
			function _greyscale(color) {
				return tinycolor(color).desaturate(100)
			}
			function _lighten(color, amount) {
				amount = 0 === amount ? 0 : amount || 10
				var hsl = tinycolor(color).toHsl()
				return (
					(hsl.l += amount / 100),
					(hsl.l = clamp01(hsl.l)),
					tinycolor(hsl)
				)
			}
			function _brighten(color, amount) {
				amount = 0 === amount ? 0 : amount || 10
				var rgb = tinycolor(color).toRgb()
				return (
					(rgb.r = Math.max(
						0,
						Math.min(
							255,
							rgb.r - Math.round((-amount / 100) * 255),
						),
					)),
					(rgb.g = Math.max(
						0,
						Math.min(
							255,
							rgb.g - Math.round((-amount / 100) * 255),
						),
					)),
					(rgb.b = Math.max(
						0,
						Math.min(
							255,
							rgb.b - Math.round((-amount / 100) * 255),
						),
					)),
					tinycolor(rgb)
				)
			}
			function _darken(color, amount) {
				amount = 0 === amount ? 0 : amount || 10
				var hsl = tinycolor(color).toHsl()
				return (
					(hsl.l -= amount / 100),
					(hsl.l = clamp01(hsl.l)),
					tinycolor(hsl)
				)
			}
			function _spin(color, amount) {
				var hsl = tinycolor(color).toHsl(),
					hue = (hsl.h + amount) % 360
				return (hsl.h = hue < 0 ? 360 + hue : hue), tinycolor(hsl)
			}
			function _complement(color) {
				var hsl = tinycolor(color).toHsl()
				return (hsl.h = (hsl.h + 180) % 360), tinycolor(hsl)
			}
			function polyad(color, number) {
				if (isNaN(number) || number <= 0)
					throw new Error(
						'Argument to polyad must be a positive number',
					)
				for (
					var hsl = tinycolor(color).toHsl(),
						result = [tinycolor(color)],
						step = 360 / number,
						i = 1;
					i < number;
					i++
				)
					result.push(
						tinycolor({
							h: (hsl.h + i * step) % 360,
							s: hsl.s,
							l: hsl.l,
						}),
					)
				return result
			}
			function _splitcomplement(color) {
				var hsl = tinycolor(color).toHsl(),
					h = hsl.h
				return [
					tinycolor(color),
					tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
				]
			}
			function _analogous(color, results, slices) {
				;(results = results || 6), (slices = slices || 30)
				var hsl = tinycolor(color).toHsl(),
					part = 360 / slices,
					ret = [tinycolor(color)]
				for (
					hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360;
					--results;

				)
					(hsl.h = (hsl.h + part) % 360), ret.push(tinycolor(hsl))
				return ret
			}
			function _monochromatic(color, results) {
				results = results || 6
				for (
					var hsv = tinycolor(color).toHsv(),
						h = hsv.h,
						s = hsv.s,
						v = hsv.v,
						ret = [],
						modification = 1 / results;
					results--;

				)
					ret.push(tinycolor({ h, s, v })),
						(v = (v + modification) % 1)
				return ret
			}
			;(tinycolor.prototype = {
				isDark: function isDark() {
					return this.getBrightness() < 128
				},
				isLight: function isLight() {
					return !this.isDark()
				},
				isValid: function isValid() {
					return this._ok
				},
				getOriginalInput: function getOriginalInput() {
					return this._originalInput
				},
				getFormat: function getFormat() {
					return this._format
				},
				getAlpha: function getAlpha() {
					return this._a
				},
				getBrightness: function getBrightness() {
					var rgb = this.toRgb()
					return (299 * rgb.r + 587 * rgb.g + 114 * rgb.b) / 1e3
				},
				getLuminance: function getLuminance() {
					var RsRGB,
						GsRGB,
						BsRGB,
						rgb = this.toRgb()
					return (
						(RsRGB = rgb.r / 255),
						(GsRGB = rgb.g / 255),
						(BsRGB = rgb.b / 255),
						0.2126 *
							(RsRGB <= 0.03928
								? RsRGB / 12.92
								: Math.pow((RsRGB + 0.055) / 1.055, 2.4)) +
							0.7152 *
								(GsRGB <= 0.03928
									? GsRGB / 12.92
									: Math.pow((GsRGB + 0.055) / 1.055, 2.4)) +
							0.0722 *
								(BsRGB <= 0.03928
									? BsRGB / 12.92
									: Math.pow((BsRGB + 0.055) / 1.055, 2.4))
					)
				},
				setAlpha: function setAlpha(value) {
					return (
						(this._a = boundAlpha(value)),
						(this._roundA = Math.round(100 * this._a) / 100),
						this
					)
				},
				toHsv: function toHsv() {
					var hsv = rgbToHsv(this._r, this._g, this._b)
					return { h: 360 * hsv.h, s: hsv.s, v: hsv.v, a: this._a }
				},
				toHsvString: function toHsvString() {
					var hsv = rgbToHsv(this._r, this._g, this._b),
						h = Math.round(360 * hsv.h),
						s = Math.round(100 * hsv.s),
						v = Math.round(100 * hsv.v)
					return 1 == this._a
						? 'hsv(' + h + ', ' + s + '%, ' + v + '%)'
						: 'hsva(' +
								h +
								', ' +
								s +
								'%, ' +
								v +
								'%, ' +
								this._roundA +
								')'
				},
				toHsl: function toHsl() {
					var hsl = rgbToHsl(this._r, this._g, this._b)
					return { h: 360 * hsl.h, s: hsl.s, l: hsl.l, a: this._a }
				},
				toHslString: function toHslString() {
					var hsl = rgbToHsl(this._r, this._g, this._b),
						h = Math.round(360 * hsl.h),
						s = Math.round(100 * hsl.s),
						l = Math.round(100 * hsl.l)
					return 1 == this._a
						? 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
						: 'hsla(' +
								h +
								', ' +
								s +
								'%, ' +
								l +
								'%, ' +
								this._roundA +
								')'
				},
				toHex: function toHex(allow3Char) {
					return rgbToHex(this._r, this._g, this._b, allow3Char)
				},
				toHexString: function toHexString(allow3Char) {
					return '#' + this.toHex(allow3Char)
				},
				toHex8: function toHex8(allow4Char) {
					return (function rgbaToHex(r, g, b, a, allow4Char) {
						var hex = [
							pad2(Math.round(r).toString(16)),
							pad2(Math.round(g).toString(16)),
							pad2(Math.round(b).toString(16)),
							pad2(convertDecimalToHex(a)),
						]
						if (
							allow4Char &&
							hex[0].charAt(0) == hex[0].charAt(1) &&
							hex[1].charAt(0) == hex[1].charAt(1) &&
							hex[2].charAt(0) == hex[2].charAt(1) &&
							hex[3].charAt(0) == hex[3].charAt(1)
						)
							return (
								hex[0].charAt(0) +
								hex[1].charAt(0) +
								hex[2].charAt(0) +
								hex[3].charAt(0)
							)
						return hex.join('')
					})(this._r, this._g, this._b, this._a, allow4Char)
				},
				toHex8String: function toHex8String(allow4Char) {
					return '#' + this.toHex8(allow4Char)
				},
				toRgb: function toRgb() {
					return {
						r: Math.round(this._r),
						g: Math.round(this._g),
						b: Math.round(this._b),
						a: this._a,
					}
				},
				toRgbString: function toRgbString() {
					return 1 == this._a
						? 'rgb(' +
								Math.round(this._r) +
								', ' +
								Math.round(this._g) +
								', ' +
								Math.round(this._b) +
								')'
						: 'rgba(' +
								Math.round(this._r) +
								', ' +
								Math.round(this._g) +
								', ' +
								Math.round(this._b) +
								', ' +
								this._roundA +
								')'
				},
				toPercentageRgb: function toPercentageRgb() {
					return {
						r: Math.round(100 * bound01(this._r, 255)) + '%',
						g: Math.round(100 * bound01(this._g, 255)) + '%',
						b: Math.round(100 * bound01(this._b, 255)) + '%',
						a: this._a,
					}
				},
				toPercentageRgbString: function toPercentageRgbString() {
					return 1 == this._a
						? 'rgb(' +
								Math.round(100 * bound01(this._r, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._g, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._b, 255)) +
								'%)'
						: 'rgba(' +
								Math.round(100 * bound01(this._r, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._g, 255)) +
								'%, ' +
								Math.round(100 * bound01(this._b, 255)) +
								'%, ' +
								this._roundA +
								')'
				},
				toName: function toName() {
					return 0 === this._a
						? 'transparent'
						: !(this._a < 1) &&
								(hexNames[
									rgbToHex(this._r, this._g, this._b, !0)
								] ||
									!1)
				},
				toFilter: function toFilter(secondColor) {
					var hex8String =
							'#' +
							rgbaToArgbHex(this._r, this._g, this._b, this._a),
						secondHex8String = hex8String,
						gradientType = this._gradientType
							? 'GradientType = 1, '
							: ''
					if (secondColor) {
						var s = tinycolor(secondColor)
						secondHex8String =
							'#' + rgbaToArgbHex(s._r, s._g, s._b, s._a)
					}
					return (
						'progid:DXImageTransform.Microsoft.gradient(' +
						gradientType +
						'startColorstr=' +
						hex8String +
						',endColorstr=' +
						secondHex8String +
						')'
					)
				},
				toString: function toString(format) {
					var formatSet = !!format
					format = format || this._format
					var formattedString = !1,
						hasAlpha = this._a < 1 && this._a >= 0
					return formatSet ||
						!hasAlpha ||
						('hex' !== format &&
							'hex6' !== format &&
							'hex3' !== format &&
							'hex4' !== format &&
							'hex8' !== format &&
							'name' !== format)
						? ('rgb' === format &&
								(formattedString = this.toRgbString()),
						  'prgb' === format &&
								(formattedString =
									this.toPercentageRgbString()),
						  ('hex' !== format && 'hex6' !== format) ||
								(formattedString = this.toHexString()),
						  'hex3' === format &&
								(formattedString = this.toHexString(!0)),
						  'hex4' === format &&
								(formattedString = this.toHex8String(!0)),
						  'hex8' === format &&
								(formattedString = this.toHex8String()),
						  'name' === format &&
								(formattedString = this.toName()),
						  'hsl' === format &&
								(formattedString = this.toHslString()),
						  'hsv' === format &&
								(formattedString = this.toHsvString()),
						  formattedString || this.toHexString())
						: 'name' === format && 0 === this._a
						? this.toName()
						: this.toRgbString()
				},
				clone: function clone() {
					return tinycolor(this.toString())
				},
				_applyModification: function _applyModification(fn, args) {
					var color = fn.apply(
						null,
						[this].concat([].slice.call(args)),
					)
					return (
						(this._r = color._r),
						(this._g = color._g),
						(this._b = color._b),
						this.setAlpha(color._a),
						this
					)
				},
				lighten: function lighten() {
					return this._applyModification(_lighten, arguments)
				},
				brighten: function brighten() {
					return this._applyModification(_brighten, arguments)
				},
				darken: function darken() {
					return this._applyModification(_darken, arguments)
				},
				desaturate: function desaturate() {
					return this._applyModification(_desaturate, arguments)
				},
				saturate: function saturate() {
					return this._applyModification(_saturate, arguments)
				},
				greyscale: function greyscale() {
					return this._applyModification(_greyscale, arguments)
				},
				spin: function spin() {
					return this._applyModification(_spin, arguments)
				},
				_applyCombination: function _applyCombination(fn, args) {
					return fn.apply(null, [this].concat([].slice.call(args)))
				},
				analogous: function analogous() {
					return this._applyCombination(_analogous, arguments)
				},
				complement: function complement() {
					return this._applyCombination(_complement, arguments)
				},
				monochromatic: function monochromatic() {
					return this._applyCombination(_monochromatic, arguments)
				},
				splitcomplement: function splitcomplement() {
					return this._applyCombination(_splitcomplement, arguments)
				},
				triad: function triad() {
					return this._applyCombination(polyad, [3])
				},
				tetrad: function tetrad() {
					return this._applyCombination(polyad, [4])
				},
			}),
				(tinycolor.fromRatio = function (color, opts) {
					if ('object' == _typeof(color)) {
						var newColor = {}
						for (var i in color)
							color.hasOwnProperty(i) &&
								(newColor[i] =
									'a' === i
										? color[i]
										: convertToPercentage(color[i]))
						color = newColor
					}
					return tinycolor(color, opts)
				}),
				(tinycolor.equals = function (color1, color2) {
					return (
						!(!color1 || !color2) &&
						tinycolor(color1).toRgbString() ==
							tinycolor(color2).toRgbString()
					)
				}),
				(tinycolor.random = function () {
					return tinycolor.fromRatio({
						r: Math.random(),
						g: Math.random(),
						b: Math.random(),
					})
				}),
				(tinycolor.mix = function (color1, color2, amount) {
					amount = 0 === amount ? 0 : amount || 50
					var rgb1 = tinycolor(color1).toRgb(),
						rgb2 = tinycolor(color2).toRgb(),
						p = amount / 100
					return tinycolor({
						r: (rgb2.r - rgb1.r) * p + rgb1.r,
						g: (rgb2.g - rgb1.g) * p + rgb1.g,
						b: (rgb2.b - rgb1.b) * p + rgb1.b,
						a: (rgb2.a - rgb1.a) * p + rgb1.a,
					})
				}),
				(tinycolor.readability = function (color1, color2) {
					var c1 = tinycolor(color1),
						c2 = tinycolor(color2)
					return (
						(Math.max(c1.getLuminance(), c2.getLuminance()) +
							0.05) /
						(Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05)
					)
				}),
				(tinycolor.isReadable = function (color1, color2, wcag2) {
					var wcag2Parms,
						out,
						readability = tinycolor.readability(color1, color2)
					switch (
						((out = !1),
						(wcag2Parms = (function validateWCAG2Parms(parms) {
							var level, size
							;(level = (
								(parms = parms || {
									level: 'AA',
									size: 'small',
								}).level || 'AA'
							).toUpperCase()),
								(size = (parms.size || 'small').toLowerCase()),
								'AA' !== level &&
									'AAA' !== level &&
									(level = 'AA')
							'small' !== size &&
								'large' !== size &&
								(size = 'small')
							return { level, size }
						})(wcag2)).level + wcag2Parms.size)
					) {
						case 'AAsmall':
						case 'AAAlarge':
							out = readability >= 4.5
							break
						case 'AAlarge':
							out = readability >= 3
							break
						case 'AAAsmall':
							out = readability >= 7
					}
					return out
				}),
				(tinycolor.mostReadable = function (
					baseColor,
					colorList,
					args,
				) {
					var readability,
						includeFallbackColors,
						level,
						size,
						bestColor = null,
						bestScore = 0
					;(includeFallbackColors = (args = args || {})
						.includeFallbackColors),
						(level = args.level),
						(size = args.size)
					for (var i = 0; i < colorList.length; i++)
						(readability = tinycolor.readability(
							baseColor,
							colorList[i],
						)) > bestScore &&
							((bestScore = readability),
							(bestColor = tinycolor(colorList[i])))
					return tinycolor.isReadable(baseColor, bestColor, {
						level,
						size,
					}) || !includeFallbackColors
						? bestColor
						: ((args.includeFallbackColors = !1),
						  tinycolor.mostReadable(
								baseColor,
								['#fff', '#000'],
								args,
						  ))
				})
			var names = (tinycolor.names = {
					aliceblue: 'f0f8ff',
					antiquewhite: 'faebd7',
					aqua: '0ff',
					aquamarine: '7fffd4',
					azure: 'f0ffff',
					beige: 'f5f5dc',
					bisque: 'ffe4c4',
					black: '000',
					blanchedalmond: 'ffebcd',
					blue: '00f',
					blueviolet: '8a2be2',
					brown: 'a52a2a',
					burlywood: 'deb887',
					burntsienna: 'ea7e5d',
					cadetblue: '5f9ea0',
					chartreuse: '7fff00',
					chocolate: 'd2691e',
					coral: 'ff7f50',
					cornflowerblue: '6495ed',
					cornsilk: 'fff8dc',
					crimson: 'dc143c',
					cyan: '0ff',
					darkblue: '00008b',
					darkcyan: '008b8b',
					darkgoldenrod: 'b8860b',
					darkgray: 'a9a9a9',
					darkgreen: '006400',
					darkgrey: 'a9a9a9',
					darkkhaki: 'bdb76b',
					darkmagenta: '8b008b',
					darkolivegreen: '556b2f',
					darkorange: 'ff8c00',
					darkorchid: '9932cc',
					darkred: '8b0000',
					darksalmon: 'e9967a',
					darkseagreen: '8fbc8f',
					darkslateblue: '483d8b',
					darkslategray: '2f4f4f',
					darkslategrey: '2f4f4f',
					darkturquoise: '00ced1',
					darkviolet: '9400d3',
					deeppink: 'ff1493',
					deepskyblue: '00bfff',
					dimgray: '696969',
					dimgrey: '696969',
					dodgerblue: '1e90ff',
					firebrick: 'b22222',
					floralwhite: 'fffaf0',
					forestgreen: '228b22',
					fuchsia: 'f0f',
					gainsboro: 'dcdcdc',
					ghostwhite: 'f8f8ff',
					gold: 'ffd700',
					goldenrod: 'daa520',
					gray: '808080',
					green: '008000',
					greenyellow: 'adff2f',
					grey: '808080',
					honeydew: 'f0fff0',
					hotpink: 'ff69b4',
					indianred: 'cd5c5c',
					indigo: '4b0082',
					ivory: 'fffff0',
					khaki: 'f0e68c',
					lavender: 'e6e6fa',
					lavenderblush: 'fff0f5',
					lawngreen: '7cfc00',
					lemonchiffon: 'fffacd',
					lightblue: 'add8e6',
					lightcoral: 'f08080',
					lightcyan: 'e0ffff',
					lightgoldenrodyellow: 'fafad2',
					lightgray: 'd3d3d3',
					lightgreen: '90ee90',
					lightgrey: 'd3d3d3',
					lightpink: 'ffb6c1',
					lightsalmon: 'ffa07a',
					lightseagreen: '20b2aa',
					lightskyblue: '87cefa',
					lightslategray: '789',
					lightslategrey: '789',
					lightsteelblue: 'b0c4de',
					lightyellow: 'ffffe0',
					lime: '0f0',
					limegreen: '32cd32',
					linen: 'faf0e6',
					magenta: 'f0f',
					maroon: '800000',
					mediumaquamarine: '66cdaa',
					mediumblue: '0000cd',
					mediumorchid: 'ba55d3',
					mediumpurple: '9370db',
					mediumseagreen: '3cb371',
					mediumslateblue: '7b68ee',
					mediumspringgreen: '00fa9a',
					mediumturquoise: '48d1cc',
					mediumvioletred: 'c71585',
					midnightblue: '191970',
					mintcream: 'f5fffa',
					mistyrose: 'ffe4e1',
					moccasin: 'ffe4b5',
					navajowhite: 'ffdead',
					navy: '000080',
					oldlace: 'fdf5e6',
					olive: '808000',
					olivedrab: '6b8e23',
					orange: 'ffa500',
					orangered: 'ff4500',
					orchid: 'da70d6',
					palegoldenrod: 'eee8aa',
					palegreen: '98fb98',
					paleturquoise: 'afeeee',
					palevioletred: 'db7093',
					papayawhip: 'ffefd5',
					peachpuff: 'ffdab9',
					peru: 'cd853f',
					pink: 'ffc0cb',
					plum: 'dda0dd',
					powderblue: 'b0e0e6',
					purple: '800080',
					rebeccapurple: '663399',
					red: 'f00',
					rosybrown: 'bc8f8f',
					royalblue: '4169e1',
					saddlebrown: '8b4513',
					salmon: 'fa8072',
					sandybrown: 'f4a460',
					seagreen: '2e8b57',
					seashell: 'fff5ee',
					sienna: 'a0522d',
					silver: 'c0c0c0',
					skyblue: '87ceeb',
					slateblue: '6a5acd',
					slategray: '708090',
					slategrey: '708090',
					snow: 'fffafa',
					springgreen: '00ff7f',
					steelblue: '4682b4',
					tan: 'd2b48c',
					teal: '008080',
					thistle: 'd8bfd8',
					tomato: 'ff6347',
					turquoise: '40e0d0',
					violet: 'ee82ee',
					wheat: 'f5deb3',
					white: 'fff',
					whitesmoke: 'f5f5f5',
					yellow: 'ff0',
					yellowgreen: '9acd32',
				}),
				hexNames = (tinycolor.hexNames = (function flip(o) {
					var flipped = {}
					for (var i in o) o.hasOwnProperty(i) && (flipped[o[i]] = i)
					return flipped
				})(names))
			function boundAlpha(a) {
				return (
					(a = parseFloat(a)),
					(isNaN(a) || a < 0 || a > 1) && (a = 1),
					a
				)
			}
			function bound01(n, max) {
				;(function isOnePointZero(n) {
					return (
						'string' == typeof n &&
						-1 != n.indexOf('.') &&
						1 === parseFloat(n)
					)
				})(n) && (n = '100%')
				var processPercent = (function isPercentage(n) {
					return 'string' == typeof n && -1 != n.indexOf('%')
				})(n)
				return (
					(n = Math.min(max, Math.max(0, parseFloat(n)))),
					processPercent && (n = parseInt(n * max, 10) / 100),
					Math.abs(n - max) < 1e-6 ? 1 : (n % max) / parseFloat(max)
				)
			}
			function clamp01(val) {
				return Math.min(1, Math.max(0, val))
			}
			function parseIntFromHex(val) {
				return parseInt(val, 16)
			}
			function pad2(c) {
				return 1 == c.length ? '0' + c : '' + c
			}
			function convertToPercentage(n) {
				return n <= 1 && (n = 100 * n + '%'), n
			}
			function convertDecimalToHex(d) {
				return Math.round(255 * parseFloat(d)).toString(16)
			}
			function convertHexToDecimal(h) {
				return parseIntFromHex(h) / 255
			}
			var CSS_UNIT,
				PERMISSIVE_MATCH3,
				PERMISSIVE_MATCH4,
				matchers =
					((PERMISSIVE_MATCH3 =
						'[\\s|\\(]+(' +
						(CSS_UNIT =
							'(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
						')[,|\\s]+(' +
						CSS_UNIT +
						')[,|\\s]+(' +
						CSS_UNIT +
						')\\s*\\)?'),
					(PERMISSIVE_MATCH4 =
						'[\\s|\\(]+(' +
						CSS_UNIT +
						')[,|\\s]+(' +
						CSS_UNIT +
						')[,|\\s]+(' +
						CSS_UNIT +
						')[,|\\s]+(' +
						CSS_UNIT +
						')\\s*\\)?'),
					{
						CSS_UNIT: new RegExp(CSS_UNIT),
						rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
						rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
						hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
						hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
						hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
						hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
						hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
						hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
						hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
						hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
					})
			function isValidCSSUnit(color) {
				return !!matchers.CSS_UNIT.exec(color)
			}
			function darken(color, percent) {
				return tinycolor(color).darken(percent).toRgbString()
			}
			function alpha(color, percent) {
				return tinycolor(color)
					.setAlpha(percent / 100)
					.toRgbString()
			}
			const activeShadow = 'inset 0 0 0.1875rem 0.0625rem',
				generateButtonThemeVars = (_ref) => {
					let style = _ref.style,
						textColor = _ref.textColor,
						ghostTextColor = _ref.ghostTextColor,
						backgroundColor = _ref.backgroundColor,
						borderColor = _ref.borderColor,
						_ref$ghostBorderColor = _ref.ghostBorderColor,
						ghostBorderColor =
							void 0 === _ref$ghostBorderColor
								? borderColor
								: _ref$ghostBorderColor
					return {
						[`${style}Color`]: textColor,
						[`${style}BorderColor`]: darken(borderColor, 10),
						[`${style}Background`]: backgroundColor,
						[`${style}HoverBackground`]: darken(
							backgroundColor,
							10,
						),
						[`${style}ActiveBackground`]: darken(
							backgroundColor,
							10,
						),
						[`${style}ActiveBoxShadow`]: `${activeShadow} ${darken(
							borderColor,
							20,
						)}`,
						[`${style}GhostColor`]: ghostTextColor,
						[`${style}GhostBorderColor`]: ghostBorderColor,
						[`${style}GhostBackground`]: 'transparent',
						[`${style}GhostHoverBackground`]: alpha(
							ghostTextColor,
							10,
						),
						[`${style}GhostActiveBackground`]: 'transparent',
						[`${style}GhostActiveBoxShadow`]: `${activeShadow} ${alpha(
							ghostBorderColor,
							28,
						)}`,
					}
				},
				theme = (theme) => {
					const borders = theme.borders,
						colors = theme.colors,
						forms = theme.forms,
						spacing = theme.spacing,
						typography = theme.typography,
						themeName = theme.key,
						themeSpecificStyle = {
							canvas: {
								...generateButtonThemeVars({
									style: 'primary',
									backgroundColor:
										theme['ic-brand-button--primary-bgd'],
									borderColor:
										theme['ic-brand-button--primary-bgd'],
									textColor:
										theme['ic-brand-button--primary-text'],
									ghostTextColor:
										theme['ic-brand-button--primary-bgd'],
								}),
								primaryGhostHoverBackground: alpha(
									theme['ic-brand-button--primary-bgd'],
									10,
								),
							},
							'canvas-high-contrast': {
								secondaryBorderColor:
									null == colors
										? void 0
										: colors.borderMedium,
								primaryInverseBorderColor:
									null == colors
										? void 0
										: colors.borderMedium,
							},
							instructure: {
								borderRadius: '999em',
								smallPaddingTop: '0.5rem',
								smallPaddingBottom: '0.4375rem',
								mediumPaddingTop: '0.75rem',
								mediumPaddingBottom: '0.75rem',
								largePaddingTop: '1rem',
								largePaddingBottom: '1rem',
								largeFontSize: '1.125rem',
							},
						}
					return {
						...{
							transform: 'none',
							hoverTransform: 'none',
							fontFamily:
								null == typography
									? void 0
									: typography.fontFamily,
							fontWeight:
								null == typography
									? void 0
									: typography.fontWeightNormal,
							textTransform: 'none',
							letterSpacing: 'normal',
							borderRadius:
								null == borders ? void 0 : borders.radiusMedium,
							borderStyle:
								null == borders ? void 0 : borders.style,
							borderWidth:
								null == borders ? void 0 : borders.widthSmall,
							smallHeight:
								null == forms ? void 0 : forms.inputHeightSmall,
							smallFontSize:
								null == typography
									? void 0
									: typography.fontSizeSmall,
							smallPaddingHorizontal:
								null == spacing ? void 0 : spacing.xSmall,
							smallPaddingTop: '0.375rem',
							smallPaddingBottom: '0.3125rem',
							mediumHeight:
								null == forms
									? void 0
									: forms.inputHeightMedium,
							mediumFontSize:
								null == typography
									? void 0
									: typography.fontSizeMedium,
							mediumPaddingHorizontal:
								null == spacing ? void 0 : spacing.small,
							mediumPaddingTop: '0.5625rem',
							mediumPaddingBottom: '0.5625rem',
							largeHeight:
								null == forms ? void 0 : forms.inputHeightLarge,
							largeFontSize:
								null == typography
									? void 0
									: typography.fontSizeLarge,
							largePaddingHorizontal:
								null == spacing ? void 0 : spacing.medium,
							largePaddingTop: '0.6875rem',
							largePaddingBottom: '0.6875rem',
							lineHeight:
								null == typography
									? void 0
									: typography.lineHeightFit,
							iconSizeSmall: '1rem',
							iconSizeMedium: '1.25rem',
							iconSizeLarge: '1.625rem',
							iconTextGap: spacing.xSmall,
							iconTextGapCondensed: spacing.xxSmall,
							...generateButtonThemeVars({
								style: 'primary',
								backgroundColor:
									null == colors
										? void 0
										: colors.backgroundBrand,
								borderColor:
									null == colors
										? void 0
										: colors.borderBrand,
								textColor:
									null == colors
										? void 0
										: colors.textLightest,
								ghostTextColor:
									null == colors ? void 0 : colors.textBrand,
							}),
							...generateButtonThemeVars({
								style: 'secondary',
								backgroundColor:
									null == colors
										? void 0
										: colors.backgroundLight,
								borderColor:
									null == colors
										? void 0
										: colors.borderLight,
								ghostBorderColor:
									null == colors
										? void 0
										: colors.borderDarkest,
								textColor:
									null == colors
										? void 0
										: colors.textDarkest,
								ghostTextColor:
									null == colors
										? void 0
										: colors.textDarkest,
							}),
							...generateButtonThemeVars({
								style: 'success',
								backgroundColor:
									null == colors
										? void 0
										: colors.backgroundSuccess,
								borderColor:
									null == colors
										? void 0
										: colors.borderSuccess,
								textColor:
									null == colors
										? void 0
										: colors.textLightest,
								ghostTextColor:
									null == colors
										? void 0
										: colors.textSuccess,
							}),
							...generateButtonThemeVars({
								style: 'danger',
								backgroundColor:
									null == colors
										? void 0
										: colors.backgroundDanger,
								borderColor:
									null == colors
										? void 0
										: colors.borderDanger,
								textColor:
									null == colors
										? void 0
										: colors.textLightest,
								ghostTextColor:
									null == colors ? void 0 : colors.textDanger,
							}),
							...generateButtonThemeVars({
								style: 'primaryInverse',
								backgroundColor:
									null == colors
										? void 0
										: colors.backgroundLightest,
								borderColor:
									null == colors
										? void 0
										: colors.borderLightest,
								textColor:
									null == colors
										? void 0
										: colors.textDarkest,
								ghostTextColor:
									null == colors
										? void 0
										: colors.textLightest,
							}),
							primaryInverseBorderColor: darken(
								null == colors ? void 0 : colors.borderLight,
								10,
							),
							primaryInverseHoverBackground: darken(
								null == colors
									? void 0
									: colors.backgroundLightest,
								5,
							),
							primaryInverseActiveBackground:
								null == colors
									? void 0
									: colors.backgroundLightest,
							primaryInverseActiveBoxShadow: `${activeShadow} ${darken(
								null == colors ? void 0 : colors.borderLightest,
								25,
							)}`,
							successGhostHoverBackground: alpha(
								null == colors ? void 0 : colors.textSuccess,
								1,
							),
						},
						...themeSpecificStyle[themeName],
					}
				}
			var keycode = __webpack_require__(
					'./node_modules/keycode/index.js',
				),
				keycode_default = __webpack_require__.n(keycode)
			function getElementType(Component, props, getDefault) {
				var _Component$defaultPro, _Component$defaultPro2
				return props.as &&
					props.as !==
						(null ===
							(_Component$defaultPro = Component.defaultProps) ||
						void 0 === _Component$defaultPro
							? void 0
							: _Component$defaultPro.as)
					? props.as
					: 'function' == typeof getDefault
					? getDefault()
					: props.href
					? 'a'
					: props.to
					? (warn(
							!props.as,
							`[${Component.displayName}] \`as\` prop should be provided when using \`to\``,
					  ),
					  'a')
					: 'function' == typeof props.onClick
					? 'button'
					: (null ===
							(_Component$defaultPro2 = Component.defaultProps) ||
					  void 0 === _Component$defaultPro2
							? void 0
							: _Component$defaultPro2.as) || 'span'
			}
			function callRenderProp(value) {
				let props =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {}
				return 'function' == typeof value
					? value.prototype && value.prototype.isReactComponent
						? react.createElement(value, props)
						: value(props)
					: value
			}
			function isDefinedCustomElement(el) {
				return Boolean(
					el.tagName.includes('-') &&
						customElements.get(el.tagName.toLowerCase()),
				)
			}
			function getActiveElement(doc) {
				const activeElement = (doc || document).activeElement
				return activeElement && isDefinedCustomElement(activeElement)
					? activeElement.shadowRoot.activeElement
					: activeElement
			}
			function isActiveElement(el) {
				const node = el && findDOMNode(el)
				return !!node && getActiveElement() === node
			}
			function getDisplayName(ReactComponent) {
				return 'string' == typeof ReactComponent
					? ReactComponent
					: ReactComponent.displayName || ReactComponent.name
			}
			function matchComponentTypes(componentInstance) {
				let types =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: []
				if (componentInstance && componentInstance.type) {
					return (
						types
							.map((type) => getDisplayName(type))
							.indexOf(getDisplayName(componentInstance.type)) >=
						0
					)
				}
				return !1
			}
			var jsx = function jsx(type, props) {
				var args = arguments
				if (
					null == props ||
					!emotion_element_c39617d8_browser_esm_hasOwnProperty.call(
						props,
						'css',
					)
				)
					return react.createElement.apply(void 0, args)
				var argsLength = args.length,
					createElementArgArray = new Array(argsLength)
				;(createElementArgArray[0] = Emotion$1),
					(createElementArgArray[1] = (function createEmotionProps(
						type,
						props,
					) {
						var newProps = {}
						for (var key in props)
							emotion_element_c39617d8_browser_esm_hasOwnProperty.call(
								props,
								key,
							) && (newProps[key] = props[key])
						return (newProps[typePropName] = type), newProps
					})(type, props))
				for (var i = 2; i < argsLength; i++)
					createElementArgArray[i] = args[i]
				return react.createElement.apply(null, createElementArgArray)
			}
			const styles = () => ({
				screenReaderContent: {
					label: 'screenReaderContent',
					width: '0.0625rem',
					height: '0.0625rem',
					margin: '-0.0625rem',
					padding: 0,
					position: 'absolute',
					top: 0,
					insetInlineStart: 0,
					overflow: 'hidden',
					clip: 'rect(0 0 0 0)',
					border: 0,
				},
			})
			var prop_types = __webpack_require__(
					'./node_modules/prop-types/index.js',
				),
				prop_types_default = __webpack_require__.n(prop_types)
			const propTypes = {
					as: prop_types_default().elementType,
					children: prop_types_default().node,
					elementRef: prop_types_default().func,
				},
				ScreenReaderContent_excluded = ['children', 'styles']
			var _class, _class2
			let ScreenReaderContent =
				withStyle(
					styles,
					null,
				)(
					((_class2 = class ScreenReaderContent extends (
						react.Component
					) {
						constructor() {
							super(...arguments),
								(this.ref = null),
								(this.handleRef = (el) => {
									const elementRef = this.props.elementRef
									;(this.ref = el),
										'function' == typeof elementRef &&
											elementRef(el)
								})
						}
						componentDidMount() {
							var _this$props$makeStyle, _this$props
							null ===
								(_this$props$makeStyle = (_this$props =
									this.props).makeStyles) ||
								void 0 === _this$props$makeStyle ||
								_this$props$makeStyle.call(_this$props)
						}
						componentDidUpdate() {
							var _this$props$makeStyle2, _this$props2
							null ===
								(_this$props$makeStyle2 = (_this$props2 =
									this.props).makeStyles) ||
								void 0 === _this$props$makeStyle2 ||
								_this$props$makeStyle2.call(_this$props2)
						}
						render() {
							const _this$props3 = this.props,
								children = _this$props3.children,
								styles = _this$props3.styles,
								props = (0, objectWithoutProperties.Z)(
									_this$props3,
									ScreenReaderContent_excluded,
								),
								ElementType = getElementType(
									ScreenReaderContent,
									props,
								)
							return jsx(
								ElementType,
								Object.assign({}, passthroughProps(props), {
									css:
										null == styles
											? void 0
											: styles.screenReaderContent,
									ref: this.handleRef,
								}),
								children,
							)
						}
					}),
					(_class2.displayName = 'ScreenReaderContent'),
					(_class2.componentId = 'ScreenReaderContent'),
					(_class2.propTypes = propTypes),
					(_class2.allowedProps = ['as', 'children', 'elementRef']),
					(_class2.defaultProps = { as: 'span', children: null }),
					(_class = _class2)),
				) || _class
			function hasVisibleChildren(children) {
				let visible = !1
				return (
					react.Children.forEach(children, (child) => {
						child &&
							!matchComponentTypes(child, [
								ScreenReaderContent,
							]) &&
							(visible = !0)
					}),
					visible
				)
			}
			const canUseDOM = !(
				'undefined' == typeof window ||
				!window.document ||
				!window.document.createElement
			)
			function ownerDocument(el) {
				const node = el && findDOMNode(el)
				let ownerDocument
				return (
					node &&
						'ownerDocument' in node &&
						(ownerDocument = node.ownerDocument),
					ownerDocument || document
				)
			}
			function ownerWindow(el) {
				const doc = ownerDocument(el && findDOMNode(el))
				return doc && doc.defaultView
			}
			function getComputedStyle(el, pseudoElt) {
				let style = {}
				if (canUseDOM) {
					const node = el && findDOMNode(el)
					if (node) {
						const window = ownerWindow(el)
						style =
							null !== window
								? window.getComputedStyle(node, pseudoElt)
								: {}
					}
				}
				return style
			}
			let defaultDir, dirAttribute, observer
			function getTextDirection(element) {
				if (canUseDOM)
					return void 0 === element ||
						element === document.documentElement
						? (() => {
								if (defaultDir) return defaultDir
								if (canUseDOM) {
									const htmlEl = document.documentElement
									return (
										(dirAttribute =
											htmlEl.getAttribute('dir')),
										(defaultDir =
											dirAttribute ||
											getComputedStyle(htmlEl).direction),
										observer ||
											((observer = new MutationObserver(
												() => {
													const attr =
														htmlEl.getAttribute(
															'dir',
														)
													attr &&
														attr !== dirAttribute &&
														(dirAttribute =
															defaultDir =
																attr)
												},
											)),
											observer.observe(htmlEl, {
												attributes: !0,
											})),
										defaultDir
									)
								}
						  })()
						: element.getAttribute('dir') ||
								getComputedStyle(element).direction
			}
			const TextDirectionContext = (0, react.createContext)(
					getTextDirection() || 'ltr',
				),
				DIRECTION = { ltr: 'ltr', rtl: 'rtl' },
				bidirectional_excluded = ['forwardedRef'],
				bidirectional = decorator((ComposedComponent) => {
					class BidirectionalComponent extends react.Component {
						render() {
							const _this$props = this.props,
								forwardedRef = _this$props.forwardedRef,
								rest = (0, objectWithoutProperties.Z)(
									_this$props,
									bidirectional_excluded,
								)
							return react.createElement(
								TextDirectionContext.Consumer,
								null,
								(dir) =>
									react.createElement(
										ComposedComponent,
										Object.assign(
											{ ref: forwardedRef, dir },
											rest,
										),
									),
							)
						}
					}
					BidirectionalComponent.displayName =
						'BidirectionalComponent'
					const BidirectionalForwardingRef = (0, react.forwardRef)(
						(props, ref) =>
							react.createElement(
								BidirectionalComponent,
								Object.assign({}, props, { forwardedRef: ref }),
							),
					)
					return (
						hoist_non_react_statics_cjs_default()(
							BidirectionalForwardingRef,
							ComposedComponent,
						),
						(BidirectionalForwardingRef.defaultProps =
							ComposedComponent.defaultProps),
						(BidirectionalForwardingRef.propTypes =
							ComposedComponent.propTypes),
						(BidirectionalForwardingRef.allowedProps =
							ComposedComponent.allowedProps),
						BidirectionalForwardingRef
					)
				})
			bidirectional.DIRECTION = DIRECTION
			const textDirectionContextConsumer = bidirectional
			function omitProps(props, propsToOmit, exclude) {
				const propKeys = Array.isArray(propsToOmit)
						? propsToOmit
						: Object.keys(propsToOmit || {}),
					keysToOmit = exclude ? propKeys.concat(exclude) : propKeys
				return omit(props, keysToOmit)
			}
			const omitProps_hasOwnProperty = Object.prototype.hasOwnProperty,
				omit = (originalObject, keysToOmit) => {
					const newObject = {}
					for (const key in originalObject)
						'theme' !== key &&
							'children' !== key &&
							'className' !== key &&
							'style' !== key &&
							'styles' !== key &&
							'makeStyles' !== key &&
							'themeOverride' !== key &&
							'deterministicId' !== key &&
							!keysToOmit.includes(key) &&
							omitProps_hasOwnProperty.call(
								originalObject,
								key,
							) &&
							(newObject[key] = originalObject[key])
					return newObject
				}
			function camelize(str) {
				return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
			}
			function getShorthandPropValue(
				componentName,
				componentTheme,
				propValue,
				propName,
			) {
				if ('string' == typeof propValue && !isEmpty(componentTheme))
					return propValue
						.split(' ')
						.map((shortHandValue) => {
							if (
								'auto' === shortHandValue ||
								'0' === shortHandValue
							)
								return shortHandValue
							if ('none' === shortHandValue) return '0'
							if ('circle' === shortHandValue) return '100%'
							if ('pill' === shortHandValue) return '999em'
							const themeVariableName = camelize(
									`${propName}-${shortHandValue}`,
								),
								themeVariableValue =
									componentTheme[themeVariableName]
							return (
								error(
									void 0 !== themeVariableValue,
									`[${componentName}] '${themeVariableName}' is an invalid '${propName}' value.`,
								),
								themeVariableValue || '0'
							)
						})
						.join(' ')
						.trim()
			}
			function mirrorShorthandEdges(values) {
				if ('string' != typeof values) return
				const valuesArr = values.split(' ')
				if (4 === valuesArr.length) {
					var _ref = [valuesArr[3], valuesArr[1]]
					;(valuesArr[1] = _ref[0]), (valuesArr[3] = _ref[1])
				}
				return valuesArr.join(' ')
			}
			function mirrorShorthandCorners(values) {
				if ('string' != typeof values) return
				const valuesArr = values.split(' ')
				if (2 === valuesArr.length) {
					var _ref2 = [valuesArr[1], valuesArr[0]]
					;(valuesArr[0] = _ref2[0]), (valuesArr[1] = _ref2[1])
				}
				if (
					(3 === valuesArr.length && valuesArr.push(valuesArr[1]),
					4 === valuesArr.length)
				) {
					var _ref3 = [
						valuesArr[1],
						valuesArr[0],
						valuesArr[3],
						valuesArr[2],
					]
					;(valuesArr[0] = _ref3[0]),
						(valuesArr[1] = _ref3[1]),
						(valuesArr[2] = _ref3[2]),
						(valuesArr[3] = _ref3[3])
				}
				return valuesArr.join(' ')
			}
			function pickProps(props, propTypesOrAllowedPropList, include) {
				const propKeys = Array.isArray(propTypesOrAllowedPropList)
					? propTypesOrAllowedPropList
					: Object.keys(propTypesOrAllowedPropList || {})
				return (function pick(obj, keys) {
					const res = {},
						len = keys.length
					let key,
						idx = -1
					for (; ++idx < len; )
						(key = keys[idx]), key in obj && (res[key] = obj[key])
					return res
				})(props, include ? propKeys.concat(include) : propKeys)
			}
			const getStyleProps = (_ref4) => {
					let cursor = _ref4.cursor
					const whitelisted = pickProps(_ref4.style || {}, {}, [
						'top',
						'left',
						'position',
						'display',
						'transform',
						'overflow',
						'minWidth',
						'minHeight',
						'filter',
						'flexBasis',
						'backgroundImage',
						'pointerEvents',
					])
					return cursor && (whitelisted.cursor = cursor), whitelisted
				},
				withBorder = (props) => {
					const borderWidth = props.borderWidth
					return (
						borderWidth &&
						'0' !== borderWidth &&
						'none' !== borderWidth
					)
				},
				getFocusStyles = (props, componentTheme) => {
					const focusColor = props.focusColor,
						focusPosition = props.focusPosition,
						position = props.position,
						shouldAnimateFocus = props.shouldAnimateFocus,
						borderRadius = props.borderRadius,
						focusOutline = ((props) => {
							const position = props.position,
								display = props.display,
								focusPosition = props.focusPosition,
								shouldDisplayFocusOutline =
									props.withFocusOutline
							return (
								void 0 === shouldDisplayFocusOutline ||
									(shouldDisplayFocusOutline &&
										(error(
											'inline' === display ||
												'relative' === position,
											'[View] the focus outline will only show if the `position` prop is `relative`.',
										),
										error(
											'inline' !== display ||
												'inset' === focusPosition,
											'[View] when display is set to `inline` the focus outline will only show if `focusPosition` is set to `inset`.',
										))),
								shouldDisplayFocusOutline
							)
						})(props),
						shouldUseBrowserFocus = void 0 === focusOutline,
						focusPositionVariants = {
							offset: {
								top: `calc(${componentTheme.focusOutlineOffset} * -1)`,
								left: `calc(${componentTheme.focusOutlineOffset} * -1)`,
								right: `calc(${componentTheme.focusOutlineOffset} * -1)`,
								bottom: `calc(${componentTheme.focusOutlineOffset}* -1)`,
							},
							inset: {
								top: `calc(${componentTheme.focusOutlineInset} * -1)`,
								left: `calc(${componentTheme.focusOutlineInset} * -1)`,
								right: `calc(${componentTheme.focusOutlineInset} * -1)`,
								bottom: `calc(${componentTheme.focusOutlineInset} * -1)`,
							},
						},
						focusColorVariants = {
							info: componentTheme.focusColorInfo,
							inverse: componentTheme.focusColorInverse,
							success: componentTheme.focusColorSuccess,
							danger: componentTheme.focusColorDanger,
						}
					if ('relative' === position) {
						const focusRingRadius = ((borderRadius) => {
								const initialValue = (borderRadius || '')
									.trim()
									.split(' ')[0]
								if (
									((initialValue, input) =>
										'string' == typeof input &&
										input
											.trim()
											.split(' ')
											.every(
												(value) =>
													initialValue === value,
											))(initialValue, borderRadius)
								) {
									const capitalize = (str) =>
										`${str
											.charAt(0)
											.toUpperCase()}${str.slice(1)}`
									if (
										['small', 'medium', 'large'].includes(
											initialValue,
										)
									)
										return `focusRing--radius${capitalize(
											initialValue,
										)}`
									if (
										['circle', 'pill'].includes(
											initialValue,
										)
									)
										return 'focusRing--radiusInherit'
								}
								return 'focusRing--radiusNone'
							})(borderRadius),
							focusRingVariants = {
								'focusRing--radiusInherit': 'inherit',
								'focusRing--radiusNone': 0,
							},
							borderRadiusByOffset = {
								offset: {
									'focusRing--radiusSmall': {
										borderRadius: `calc(${componentTheme.borderRadiusSmall} + (${componentTheme.focusOutlineOffset} - ${componentTheme.focusOutlineWidth}))`,
									},
									'focusRing--radiusMedium': {
										borderRadius: `calc(${componentTheme.borderRadiusMedium} + (${componentTheme.focusOutlineOffset} - ${componentTheme.focusOutlineWidth}))`,
									},
									'focusRing--radiusLarge': {
										borderRadius: `calc(${componentTheme.borderRadiusLarge} + (${componentTheme.focusOutlineOffset} -  ${componentTheme.focusOutlineWidth}))`,
									},
								},
								inset: {
									'focusRing--radiusSmall': {
										borderRadius: `calc(${componentTheme.borderRadiusSmall} - (${componentTheme.focusOutlineInset} + ${componentTheme.focusOutlineWidth}))`,
									},
									'focusRing--radiusMedium': {
										borderRadius: `calc(${componentTheme.borderRadiusMedium} - (${componentTheme.focusOutlineInset} + ${componentTheme.focusOutlineWidth}))`,
									},
									'focusRing--radiusLarge': {
										borderRadius: `calc(${componentTheme.borderRadiusLarge} - (${componentTheme.focusOutlineInset} + ${componentTheme.focusOutlineWidth}))`,
									},
								},
							}
						return {
							'&::before': {
								pointerEvents: 'none',
								content: '""',
								position: 'absolute',
								borderStyle: componentTheme.focusOutlineStyle,
								borderWidth: componentTheme.focusOutlineWidth,
								borderColor: focusColorVariants[focusColor],
								opacity: 0,
								borderRadius:
									focusRingVariants[focusRingRadius],
								...borderRadiusByOffset[focusPosition][
									focusRingRadius
								],
								...focusPositionVariants[focusPosition],
								...(shouldAnimateFocus
									? {
											transition: 'all 0.2s',
											transform: 'scale(0.95)',
									  }
									: {}),
								...(focusOutline
									? { opacity: 1, transform: 'scale(1)' }
									: {}),
							},
							'&:focus': {
								outline: 'none',
								'&::before': {
									...(shouldUseBrowserFocus
										? { opacity: 1, transform: 'scale(1)' }
										: {}),
								},
							},
						}
					}
					return {
						'&::before': { borderStyle: 'none' },
						outlineStyle: 'none',
						outlineColor: focusColorVariants[focusColor],
						...(focusOutline
							? {
									outlineWidth:
										componentTheme.focusOutlineWidth,
									outlineStyle:
										componentTheme.focusOutlineStyle,
							  }
							: {}),
						'&:focus': {
							...(shouldUseBrowserFocus
								? {
										outlineWidth:
											componentTheme.focusOutlineWidth,
										outlineStyle:
											componentTheme.focusOutlineStyle,
								  }
								: {}),
						},
					}
				},
				View_styles = (componentTheme, props) => {
					const borderRadius = props.borderRadius,
						borderWidth = props.borderWidth,
						margin = props.margin,
						padding = props.padding,
						position = props.position,
						display = props.display,
						focusPosition = props.focusPosition,
						textAlign = props.textAlign,
						borderColor = props.borderColor,
						background = props.background,
						stacking = props.stacking,
						shadow = props.shadow,
						overflowY = props.overflowY,
						overflowX = props.overflowX,
						insetBlockEnd = props.insetBlockEnd,
						insetBlockStart = props.insetBlockStart,
						insetInlineEnd = props.insetInlineEnd,
						insetInlineStart = props.insetInlineStart,
						width = props.width,
						height = props.height,
						minWidth = props.minWidth,
						minHeight = props.minHeight,
						maxWidth = props.maxWidth,
						maxHeight = props.maxHeight,
						withVisualDebug = props.withVisualDebug,
						dir = props.dir,
						borderStyle = ((_ref) => {
							let borderRadius = _ref.borderRadius,
								borderWidth = _ref.borderWidth,
								dir = _ref.dir,
								theme = _ref.theme
							const isRtlDirection = dir === DIRECTION.rtl
							return {
								borderRadius: getShorthandPropValue(
									'View',
									theme,
									isRtlDirection
										? mirrorShorthandCorners(borderRadius)
										: borderRadius,
									'borderRadius',
								),
								borderWidth: getShorthandPropValue(
									'View',
									theme,
									isRtlDirection
										? mirrorShorthandEdges(borderWidth)
										: borderWidth,
									'borderWidth',
								),
							}
						})({
							theme: componentTheme,
							borderRadius,
							borderWidth,
							dir,
						}),
						spacingStyle = ((_ref2) => {
							let margin = _ref2.margin,
								padding = _ref2.padding,
								dir = _ref2.dir,
								theme = _ref2.theme
							const isRtlDirection = dir === DIRECTION.rtl
							return {
								margin: getShorthandPropValue(
									'View',
									theme,
									isRtlDirection
										? mirrorShorthandEdges(margin)
										: margin,
									'margin',
								),
								padding: getShorthandPropValue(
									'View',
									theme,
									isRtlDirection
										? mirrorShorthandEdges(padding)
										: padding,
									'padding',
								),
							}
						})({ margin, padding, theme: componentTheme, dir }),
						offsetStyle = ((_ref3) => {
							let insetBlockStart = _ref3.insetBlockStart,
								insetBlockEnd = _ref3.insetBlockEnd,
								insetInlineStart = _ref3.insetInlineStart,
								insetInlineEnd = _ref3.insetInlineEnd
							const isRtlDirection = _ref3.dir === DIRECTION.rtl
							return {
								top: insetBlockStart,
								insetBlockStart,
								bottom: insetBlockEnd,
								insetBlockEnd,
								left: isRtlDirection
									? insetInlineEnd
									: insetInlineStart,
								right: isRtlDirection
									? insetInlineStart
									: insetInlineEnd,
							}
						})({
							dir,
							insetBlockEnd,
							insetBlockStart,
							insetInlineEnd,
							insetInlineStart,
						}),
						shouldUseFocusStyles =
							'relative' === position ||
							('inline' === display && 'inset' === focusPosition),
						borderColorVariants = {
							transparent: {
								borderColor:
									componentTheme.borderColorTransparent,
							},
							primary: {
								borderColor: componentTheme.borderColorPrimary,
							},
							secondary: {
								borderColor:
									componentTheme.borderColorSecondary,
							},
							brand: {
								borderColor: componentTheme.borderColorBrand,
							},
							info: {
								borderColor: componentTheme.borderColorInfo,
							},
							success: {
								borderColor: componentTheme.borderColorSuccess,
							},
							warning: {
								borderColor: componentTheme.borderColorWarning,
							},
							alert: {
								borderColor: componentTheme.borderColorAlert,
							},
							danger: {
								borderColor: componentTheme.borderColorDanger,
							},
						},
						backgroundColorVariants = {
							transparent: {
								color: componentTheme.color,
								background: 'none',
							},
							primary: {
								color: componentTheme.color,
								background: componentTheme.backgroundPrimary,
							},
							secondary: {
								color: componentTheme.color,
								background: componentTheme.backgroundSecondary,
							},
							'primary-inverse': {
								color: componentTheme.colorPrimaryInverse,
								background:
									componentTheme.backgroundPrimaryInverse,
							},
							brand: {
								color: componentTheme.colorPrimaryInverse,
								background: componentTheme.backgroundBrand,
							},
							info: {
								color: componentTheme.colorPrimaryInverse,
								background: componentTheme.backgroundInfo,
							},
							alert: {
								color: componentTheme.colorPrimaryInverse,
								background: componentTheme.backgroundAlert,
							},
							success: {
								color: componentTheme.colorPrimaryInverse,
								background: componentTheme.backgroundSuccess,
							},
							danger: {
								color: componentTheme.colorPrimaryInverse,
								background: componentTheme.backgroundDanger,
							},
							warning: {
								color: componentTheme.colorPrimaryInverse,
								background: componentTheme.backgroundWarning,
							},
						},
						stackingVariants = {
							topmost: { zIndex: componentTheme.stackingTopmost },
							above: { zIndex: componentTheme.stackingAbove },
							resting: {},
							below: { zIndex: componentTheme.stackingBelow },
							deepest: { zIndex: componentTheme.stackingDeepest },
						},
						shadowVariants = {
							topmost: {
								boxShadow: componentTheme.shadowTopmost,
							},
							resting: {
								boxShadow: componentTheme.shadowResting,
							},
							above: { boxShadow: componentTheme.shadowAbove },
							none: {},
						},
						focusStyles = getFocusStyles(props, componentTheme)
					return {
						view: {
							label: 'view',
							boxSizing: 'border-box',
							fontFamily: componentTheme.fontFamily,
							maxWidth: '100%',
							overflow: 'visible',
							...{
								inline: {
									label: 'view--inline',
									display: 'inline',
								},
								block: {
									label: 'view--block',
									display: 'block',
								},
								'inline-block': {
									label: 'view--inlineBlock',
									display: 'inline-block',
									verticalAlign: 'middle',
								},
								flex: { label: 'view--flex', display: 'flex' },
								'inline-flex': {
									label: 'view--inlineFlex',
									display: 'inline-flex',
									verticalAlign: 'middle',
								},
								auto: {},
							}[display],
							...(background &&
								backgroundColorVariants[background]),
							...(stacking && stackingVariants[stacking]),
							...(shadow && shadowVariants[shadow]),
							...(textAlign &&
								{
									start: { textAlign: 'start' },
									center: { textAlign: 'center' },
									end: { textAlign: 'end' },
								}[textAlign]),
							overflowX:
								overflowX && 'visible' !== overflowX
									? overflowX
									: '',
							overflowY:
								overflowY && 'visible' !== overflowY
									? overflowY
									: '',
							position: 'static' !== position ? position : '',
							...(withVisualDebug
								? {
										outline: `0.0625rem dashed ${componentTheme.debugOutlineColor}`,
								  }
								: {}),
							...(withBorder(props)
								? {
										borderStyle: componentTheme.borderStyle,
										...borderColorVariants[borderColor],
								  }
								: {}),
							...(shouldUseFocusStyles ? focusStyles : {}),
						},
						inlineStyles: {
							'&&&&&&&&&&': {
								...spacingStyle,
								...borderStyle,
								...offsetStyle,
								width,
								height,
								minWidth,
								minHeight,
								maxWidth,
								maxHeight,
								...getStyleProps(props),
							},
						},
					}
				}
			function makeThemeVars(prefix, vars) {
				const themeVars = {}
				return (
					Object.keys(vars).forEach((variable) => {
						themeVars[camelize(`${prefix}-${String(variable)}`)] =
							vars[variable]
					}),
					themeVars
				)
			}
			const View_theme = (theme) => {
					const colors = theme.colors,
						typography = theme.typography,
						borders = theme.borders,
						breakpoints = theme.breakpoints,
						spacing = theme.spacing,
						shadows = theme.shadows,
						stacking = theme.stacking,
						themeName = theme.key,
						themeSpecificStyle = {
							canvas: {
								color: theme['ic-brand-font-color-dark'],
								focusColorInfo: theme['ic-brand-primary'],
								backgroundBrand: theme['ic-brand-primary'],
								backgroundInfo: theme['ic-brand-primary'],
								borderColorBrand: theme['ic-brand-primary'],
								borderColorInfo: theme['ic-brand-primary'],
							},
						}
					return {
						...{
							fontFamily:
								null == typography
									? void 0
									: typography.fontFamily,
							color: null == colors ? void 0 : colors.textDarkest,
							colorPrimaryInverse:
								null == colors ? void 0 : colors.textLightest,
							borderColorPrimary:
								null == colors ? void 0 : colors.borderMedium,
							borderColorSecondary:
								null == colors ? void 0 : colors.borderDark,
							borderColorSuccess:
								null == colors ? void 0 : colors.borderSuccess,
							borderColorBrand:
								null == colors ? void 0 : colors.borderBrand,
							borderColorInfo:
								null == colors ? void 0 : colors.borderInfo,
							borderColorAlert:
								null == colors ? void 0 : colors.borderAlert,
							borderColorWarning:
								null == colors ? void 0 : colors.borderWarning,
							borderColorDanger:
								null == colors ? void 0 : colors.borderDanger,
							borderColorTransparent: 'transparent',
							debugOutlineColor:
								null == colors ? void 0 : colors.borderDebug,
							backgroundPrimary:
								null == colors
									? void 0
									: colors.backgroundLightest,
							backgroundSecondary:
								null == colors
									? void 0
									: colors.backgroundLight,
							backgroundPrimaryInverse:
								null == colors
									? void 0
									: colors.backgroundDarkest,
							backgroundBrand:
								null == colors
									? void 0
									: colors.backgroundBrand,
							backgroundInfo:
								null == colors ? void 0 : colors.backgroundInfo,
							backgroundAlert:
								null == colors
									? void 0
									: colors.backgroundAlert,
							backgroundSuccess:
								null == colors
									? void 0
									: colors.backgroundSuccess,
							backgroundDanger:
								null == colors
									? void 0
									: colors.backgroundDanger,
							backgroundWarning:
								null == colors
									? void 0
									: colors.backgroundWarning,
							arrowSize: '0.5rem',
							focusOutlineStyle:
								null == borders ? void 0 : borders.style,
							focusOutlineWidth:
								null == borders ? void 0 : borders.widthMedium,
							focusOutlineOffset: '0.3125rem',
							focusOutlineInset: '0rem',
							focusColorInfo:
								null == colors ? void 0 : colors.borderInfo,
							focusColorDanger:
								null == colors ? void 0 : colors.borderDanger,
							focusColorSuccess:
								null == colors ? void 0 : colors.borderSuccess,
							focusColorInverse:
								null == colors ? void 0 : colors.borderLightest,
							xSmallMaxWidth:
								null == breakpoints
									? void 0
									: breakpoints.xSmall,
							smallMaxWidth:
								null == breakpoints
									? void 0
									: breakpoints.small,
							mediumMaxWidth:
								null == breakpoints
									? void 0
									: breakpoints.medium,
							largeMaxWidth:
								null == breakpoints
									? void 0
									: breakpoints.large,
							...makeThemeVars('margin', spacing),
							...makeThemeVars('padding', spacing),
							...makeThemeVars('shadow', shadows),
							...makeThemeVars('stacking', stacking),
							...makeThemeVars('border', borders),
						},
						...themeSpecificStyle[themeName],
					}
				},
				cursor_cursor = prop_types_default().oneOf([
					'auto',
					'default',
					'none',
					'context-menu',
					'help',
					'pointer',
					'progress',
					'wait',
					'cell',
					'crosshair',
					'text',
					'vertical-text',
					'alias',
					'copy',
					'move',
					'no-drop',
					'not-allowed',
					'grab',
					'grabbing',
					'all-scroll',
					'col-resize',
					'row-resize',
					'n-resize',
					'e-resize',
					's-resize',
					'w-resize',
					'ne-resize',
					'nw-resize',
					'se-resize',
					'sw-resize',
					'ew-resize',
					'ns-resize',
					'nesw-resize',
					'nwse-resize',
					'zoom-in',
					'zoom-out',
				]),
				ThemeablePropValues = {
					SHADOW_TYPES: {
						resting: 'resting',
						above: 'above',
						topmost: 'topmost',
						none: 'none',
					},
					STACKING_TYPES: {
						deepest: 'deepest',
						below: 'below',
						resting: 'resting',
						above: 'above',
						topmost: 'topmost',
					},
					BORDER_WIDTHS: {
						0: '0',
						none: 'none',
						small: 'small',
						medium: 'medium',
						large: 'large',
					},
					BORDER_RADII: {
						0: '0',
						none: 'none',
						small: 'small',
						medium: 'medium',
						large: 'large',
						circle: 'circle',
						pill: 'pill',
					},
					BACKGROUNDS: {
						default: 'default',
						inverse: 'inverse',
						transparent: 'transparent',
					},
					SIZES: {
						xSmall: 'x-small',
						small: 'small',
						medium: 'medium',
						large: 'large',
						xLarge: 'x-large',
					},
					SPACING: {
						0: '0',
						none: 'none',
						auto: 'auto',
						xxxSmall: 'xxx-small',
						xxSmall: 'xx-small',
						xSmall: 'x-small',
						small: 'small',
						medium: 'medium',
						large: 'large',
						xLarge: 'x-large',
						xxLarge: 'xx-large',
					},
				},
				SHADOW_TYPES = ThemeablePropValues.SHADOW_TYPES,
				STACKING_TYPES = ThemeablePropValues.STACKING_TYPES,
				BORDER_WIDTHS = ThemeablePropValues.BORDER_WIDTHS,
				BORDER_RADII = ThemeablePropValues.BORDER_RADII,
				BACKGROUNDS = ThemeablePropValues.BACKGROUNDS,
				SIZES = ThemeablePropValues.SIZES,
				SPACING = ThemeablePropValues.SPACING,
				ThemeablePropTypes = {
					shadow: prop_types_default().oneOf(
						Object.values(SHADOW_TYPES),
					),
					stacking: prop_types_default().oneOf(
						Object.values(STACKING_TYPES),
					),
					borderWidth: shorthandPropType(
						Object.values(BORDER_WIDTHS),
					),
					borderRadius: shorthandPropType(
						Object.values(BORDER_RADII),
					),
					background: prop_types_default().oneOf(
						Object.values(BACKGROUNDS),
					),
					size: prop_types_default().oneOf(Object.values(SIZES)),
					spacing: shorthandPropType(Object.values(SPACING)),
				}
			function shorthandPropType(validValues) {
				return function (props, propName, componentName, location) {
					const propValue = props[propName]
					if (void 0 === propValue) return null
					if ('string' != typeof propValue)
						return new Error(
							`Invalid ${location} \`${propName}\` of type \`${typeof propValue}\` supplied to \`${componentName}\`, expected a string.`,
						)
					const propValues = propValue.split(' '),
						valuesLength = propValues.length
					if (!(valuesLength > 0 && valuesLength < 5))
						return new Error(
							`Invalid ${location} \`${propName}\` \`${propValue}\` supplied to \`${componentName}\`, expected between one and four of the following valid values: \`${validValues.join(
								', ',
							)}\`.`,
						)
					for (let i = 0; i < valuesLength; i++) {
						if (-1 === validValues.indexOf(propValues[i]))
							return new Error(
								`Invalid ${location} \`${propName}\` \`${
									propValues[i]
								}\` supplied to \`${componentName}\`, expected a one of \`${validValues.join(
									', ',
								)}\`.`,
							)
					}
					return null
				}
			}
			const props_propTypes = {
					as: prop_types_default().elementType,
					elementRef: prop_types_default().func,
					display: prop_types_default().oneOf([
						'auto',
						'inline',
						'block',
						'inline-block',
						'flex',
						'inline-flex',
					]),
					overflowX: prop_types_default().oneOf([
						'auto',
						'hidden',
						'visible',
					]),
					overflowY: prop_types_default().oneOf([
						'auto',
						'hidden',
						'visible',
					]),
					margin: ThemeablePropTypes.spacing,
					padding: ThemeablePropTypes.spacing,
					height: prop_types_default().oneOfType([
						prop_types_default().string,
						prop_types_default().number,
					]),
					width: prop_types_default().oneOfType([
						prop_types_default().string,
						prop_types_default().number,
					]),
					maxHeight: prop_types_default().oneOfType([
						prop_types_default().string,
						prop_types_default().number,
					]),
					maxWidth: prop_types_default().oneOfType([
						prop_types_default().string,
						prop_types_default().number,
					]),
					minHeight: prop_types_default().oneOfType([
						prop_types_default().string,
						prop_types_default().number,
					]),
					minWidth: prop_types_default().oneOfType([
						prop_types_default().string,
						prop_types_default().number,
					]),
					children: prop_types_default().node,
					textAlign: prop_types_default().oneOf([
						'start',
						'center',
						'end',
					]),
					borderWidth: ThemeablePropTypes.borderWidth,
					borderRadius: ThemeablePropTypes.borderRadius,
					borderColor: prop_types_default().oneOf([
						'transparent',
						'primary',
						'secondary',
						'brand',
						'info',
						'success',
						'warning',
						'alert',
						'danger',
					]),
					background: prop_types_default().oneOf([
						'transparent',
						'primary',
						'secondary',
						'primary-inverse',
						'brand',
						'info',
						'alert',
						'success',
						'danger',
						'warning',
					]),
					shadow: ThemeablePropTypes.shadow,
					stacking: ThemeablePropTypes.stacking,
					cursor: cursor_cursor,
					position: prop_types_default().oneOf([
						'static',
						'absolute',
						'relative',
						'sticky',
						'fixed',
					]),
					insetInlineStart: prop_types_default().string,
					insetInlineEnd: prop_types_default().string,
					insetBlockStart: prop_types_default().string,
					insetBlockEnd: prop_types_default().string,
					withFocusOutline: prop_types_default().bool,
					focusPosition: prop_types_default().oneOf([
						'offset',
						'inset',
					]),
					focusColor: prop_types_default().oneOf([
						'info',
						'inverse',
						'success',
						'danger',
					]),
					shouldAnimateFocus: prop_types_default().bool,
					withVisualDebug: prop_types_default().bool,
					dir: prop_types_default().oneOf(
						Object.values(textDirectionContextConsumer.DIRECTION),
					),
				},
				View_excluded = [
					'children',
					'textAlign',
					'background',
					'display',
					'withVisualDebug',
					'width',
					'height',
					'minWidth',
					'minHeight',
					'maxWidth',
					'maxHeight',
					'overflowX',
					'overflowY',
					'stacking',
					'shadow',
					'position',
					'focusPosition',
					'focusColor',
					'shouldAnimateFocus',
					'borderColor',
					'className',
					'styles',
					'makeStyles',
				]
			var View_class, View_class2
			let View =
				textDirectionContextConsumer()(
					(View_class =
						withStyle(
							View_styles,
							View_theme,
						)(
							((View_class2 = class View extends react.Component {
								get _element() {
									return this.ref
								}
								constructor(props) {
									super(props),
										(this.spanMarginVerified = void 0),
										(this.ref = null),
										(this.handleElementRef = (el) => {
											'function' ==
												typeof this.props.elementRef &&
												this.props.elementRef(el),
												(this.ref = el)
										}),
										(this.spanMarginVerified = !1)
								}
								componentDidMount() {
									var _this$props$makeStyle, _this$props
									null ===
										(_this$props$makeStyle = (_this$props =
											this.props).makeStyles) ||
										void 0 === _this$props$makeStyle ||
										_this$props$makeStyle.call(_this$props)
								}
								componentDidUpdate() {
									var _this$props$makeStyle2, _this$props2
									null ===
										(_this$props$makeStyle2 =
											(_this$props2 = this.props)
												.makeStyles) ||
										void 0 === _this$props$makeStyle2 ||
										_this$props$makeStyle2.call(
											_this$props2,
										)
								}
								render() {
									const _this$props3 = this.props,
										children = _this$props3.children,
										className =
											(_this$props3.textAlign,
											_this$props3.background,
											_this$props3.display,
											_this$props3.withVisualDebug,
											_this$props3.width,
											_this$props3.height,
											_this$props3.minWidth,
											_this$props3.minHeight,
											_this$props3.maxWidth,
											_this$props3.maxHeight,
											_this$props3.overflowX,
											_this$props3.overflowY,
											_this$props3.stacking,
											_this$props3.shadow,
											_this$props3.position,
											_this$props3.focusPosition,
											_this$props3.focusColor,
											_this$props3.shouldAnimateFocus,
											_this$props3.borderColor,
											_this$props3.className),
										styles = _this$props3.styles,
										props =
											(_this$props3.makeStyles,
											(0, objectWithoutProperties.Z)(
												_this$props3,
												View_excluded,
											)),
										ElementType = getElementType(
											View,
											this.props,
										)
									return jsx(
										ElementType,
										Object.assign(
											{},
											passthroughProps(props),
											{
												className,
												css: [
													null == styles
														? void 0
														: styles.view,
													null == styles
														? void 0
														: styles.inlineStyles,
												],
												ref: this.handleElementRef,
											},
										),
										children,
									)
								}
							}),
							(View_class2.displayName = 'View'),
							(View_class2.componentId = 'View'),
							(View_class2.allowedProps = [
								'as',
								'background',
								'borderColor',
								'borderRadius',
								'borderWidth',
								'children',
								'cursor',
								'dir',
								'display',
								'elementRef',
								'focusColor',
								'focusPosition',
								'height',
								'insetBlockEnd',
								'insetBlockStart',
								'insetInlineEnd',
								'insetInlineStart',
								'margin',
								'maxHeight',
								'maxWidth',
								'minHeight',
								'minWidth',
								'overflowX',
								'overflowY',
								'padding',
								'position',
								'shadow',
								'shouldAnimateFocus',
								'stacking',
								'textAlign',
								'width',
								'withFocusOutline',
								'withVisualDebug',
							]),
							(View_class2.propTypes = props_propTypes),
							(View_class2.defaultProps = {
								display: 'auto',
								overflowX: 'visible',
								overflowY: 'visible',
								withVisualDebug: !1,
								borderColor: 'primary',
								position: 'static',
								focusPosition: 'offset',
								focusColor: 'info',
								shouldAnimateFocus: !0,
							}),
							(View_class2.omitViewProps = (props, Component) =>
								omitProps(props, [
									...View_class2.allowedProps,
									'styles',
									'makeStyles',
									'themeOverride',
								])),
							(View_class = View_class2)),
						) || View_class),
				) || View_class
			const BaseButton_styles = (componentTheme, props, state) => {
					const size = props.size,
						color = props.color,
						textAlign = props.textAlign,
						shape = props.shape,
						withBackground = props.withBackground,
						withBorder = props.withBorder,
						isCondensed = props.isCondensed,
						isDisabled = state.isDisabled,
						hasOnlyIconVisible = state.hasOnlyIconVisible,
						sizeVariants = {
							small: {
								content: {
									fontSize: componentTheme.smallFontSize,
									paddingLeft:
										componentTheme.smallPaddingHorizontal,
									paddingRight:
										componentTheme.smallPaddingHorizontal,
									...(hasOnlyIconVisible && {
										paddingLeft: 0,
										paddingRight: 0,
										height: componentTheme.smallHeight,
										width: componentTheme.smallHeight,
									}),
								},
								children: {
									paddingTop: componentTheme.smallPaddingTop,
									paddingBottom:
										componentTheme.smallPaddingBottom,
								},
								iconSVG: {
									fontSize: isCondensed
										? componentTheme.smallFontSize
										: componentTheme.iconSizeSmall,
								},
							},
							medium: {
								content: {
									fontSize: componentTheme.mediumFontSize,
									paddingLeft:
										componentTheme.mediumPaddingHorizontal,
									paddingRight:
										componentTheme.mediumPaddingHorizontal,
									...(hasOnlyIconVisible && {
										paddingLeft: 0,
										paddingRight: 0,
										height: componentTheme.mediumHeight,
										width: componentTheme.mediumHeight,
									}),
								},
								children: {
									paddingTop: componentTheme.mediumPaddingTop,
									paddingBottom:
										componentTheme.mediumPaddingBottom,
								},
								iconSVG: {
									fontSize: isCondensed
										? componentTheme.mediumFontSize
										: componentTheme.iconSizeMedium,
								},
							},
							large: {
								content: {
									fontSize: componentTheme.largeFontSize,
									paddingLeft:
										componentTheme.largePaddingHorizontal,
									paddingRight:
										componentTheme.largePaddingHorizontal,
									...(hasOnlyIconVisible && {
										paddingLeft: 0,
										paddingRight: 0,
										height: componentTheme.largeHeight,
										width: componentTheme.largeHeight,
									}),
								},
								children: {
									paddingTop: componentTheme.largePaddingTop,
									paddingBottom:
										componentTheme.largePaddingBottom,
								},
								iconSVG: {
									fontSize: isCondensed
										? componentTheme.largeFontSize
										: componentTheme.iconSizeLarge,
								},
							},
						},
						colorVariants = {
							primary: withBackground
								? {
										default: {
											color: componentTheme.primaryColor,
											background:
												componentTheme.primaryBackground,
											borderColor:
												componentTheme.primaryBorderColor,
										},
										active: {
											background:
												componentTheme.primaryActiveBackground,
											boxShadow:
												componentTheme.primaryActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.primaryHoverBackground,
										},
								  }
								: {
										default: {
											color: componentTheme.primaryGhostColor,
											borderColor:
												componentTheme.primaryGhostBorderColor,
											background:
												componentTheme.primaryGhostBackground,
										},
										active: {
											background:
												componentTheme.primaryGhostActiveBackground,
											boxShadow:
												componentTheme.primaryGhostActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.primaryGhostHoverBackground,
										},
								  },
							secondary: withBackground
								? {
										default: {
											color: componentTheme.secondaryColor,
											background:
												componentTheme.secondaryBackground,
											borderColor:
												componentTheme.secondaryBorderColor,
										},
										active: {
											background:
												componentTheme.secondaryActiveBackground,
											boxShadow:
												componentTheme.secondaryActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.secondaryHoverBackground,
										},
								  }
								: {
										default: {
											color: componentTheme.secondaryGhostColor,
											borderColor:
												componentTheme.secondaryGhostBorderColor,
											background:
												componentTheme.secondaryGhostBackground,
										},
										active: {
											background:
												componentTheme.secondaryGhostActiveBackground,
											boxShadow:
												componentTheme.secondaryGhostActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.secondaryGhostHoverBackground,
										},
								  },
							'primary-inverse': withBackground
								? {
										default: {
											color: componentTheme.primaryInverseColor,
											background:
												componentTheme.primaryInverseBackground,
											borderColor:
												componentTheme.primaryInverseBorderColor,
										},
										active: {
											background:
												componentTheme.primaryInverseActiveBackground,
											boxShadow:
												componentTheme.primaryInverseActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.primaryInverseHoverBackground,
										},
								  }
								: {
										default: {
											color: componentTheme.primaryInverseGhostColor,
											borderColor:
												componentTheme.primaryInverseGhostBorderColor,
											background:
												componentTheme.primaryInverseGhostBackground,
										},
										active: {
											background:
												componentTheme.primaryInverseGhostActiveBackground,
											boxShadow:
												componentTheme.primaryInverseGhostActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.primaryInverseGhostHoverBackground,
										},
								  },
							success: withBackground
								? {
										default: {
											color: componentTheme.successColor,
											background:
												componentTheme.successBackground,
											borderColor:
												componentTheme.successBorderColor,
										},
										active: {
											background:
												componentTheme.successActiveBackground,
											boxShadow:
												componentTheme.successActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.successHoverBackground,
										},
								  }
								: {
										default: {
											color: componentTheme.successGhostColor,
											borderColor:
												componentTheme.successGhostBorderColor,
											background:
												componentTheme.successGhostBackground,
										},
										active: {
											background:
												componentTheme.successGhostActiveBackground,
											boxShadow:
												componentTheme.successGhostActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.successGhostHoverBackground,
										},
								  },
							danger: withBackground
								? {
										default: {
											color: componentTheme.dangerColor,
											background:
												componentTheme.dangerBackground,
											borderColor:
												componentTheme.dangerBorderColor,
										},
										active: {
											background:
												componentTheme.dangerActiveBackground,
											boxShadow:
												componentTheme.dangerActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.dangerHoverBackground,
										},
								  }
								: {
										default: {
											color: componentTheme.dangerGhostColor,
											borderColor:
												componentTheme.dangerGhostBorderColor,
											background:
												componentTheme.dangerGhostBackground,
										},
										active: {
											background:
												componentTheme.dangerGhostActiveBackground,
											boxShadow:
												componentTheme.dangerGhostActiveBoxShadow,
										},
										hover: {
											background:
												componentTheme.dangerGhostHoverBackground,
										},
								  },
						}
					return {
						baseButton: {
							label: 'baseButton',
							appearance: 'none',
							textDecoration: 'none',
							touchAction: 'manipulation',
							'&::-moz-focus-inner': { border: '0' },
							'*': { pointerEvents: 'none' },
							'&:active > [class$=-baseButton__content]':
								colorVariants[color].active,
							'&:hover > [class$=-baseButton__content]':
								colorVariants[color].hover,
						},
						content: {
							label: 'baseButton__content',
							boxSizing: 'border-box',
							width: '100%',
							display: 'block',
							direction: 'inherit',
							userSelect: 'none',
							transition: 'background 0.2s, transform 0.2s',
							transform: componentTheme.transform,
							fontFamily: componentTheme.fontFamily,
							fontWeight: componentTheme.fontWeight,
							textTransform: componentTheme.textTransform,
							letterSpacing: componentTheme.letterSpacing,
							borderStyle: componentTheme.borderStyle,
							borderWidth: componentTheme.borderWidth,
							borderRadius: componentTheme.borderRadius,
							lineHeight: componentTheme.lineHeight,
							textAlign,
							'&:hover': {
								transform: componentTheme.hoverTransform,
							},
							...sizeVariants[size].content,
							...colorVariants[color].default,
							...{
								circle: { borderRadius: '50%' },
								rectangle: {},
							}[shape],
							...(isCondensed && {
								paddingLeft: 0,
								paddingRight: 0,
							}),
							...(isDisabled && { opacity: 0.5 }),
							...(hasOnlyIconVisible && { lineHeight: 1 }),
							...(!withBorder && { borderStyle: 'none' }),
						},
						children: {
							label: 'baseButton__children',
							display: 'block',
							...sizeVariants[size].children,
							...(isCondensed && {
								paddingTop: 0,
								paddingBottom: 0,
							}),
						},
						iconSVG: {
							label: 'baseButton__iconSVG',
							display: 'flex',
							alignItems: 'center',
							...sizeVariants[size].iconSVG,
						},
						childrenLayout: {
							label: 'baseButton__childrenLayout',
							display: 'flex',
							height: '100%',
							width: '100%',
							justifyContent:
								hasOnlyIconVisible || 'center' === textAlign
									? 'center'
									: 'flex-start',
							boxSizing: 'border-box',
							alignItems: 'center',
							flexDirection: 'row',
							maxWidth: '100%',
							overflowX: 'visible',
							overflowY: 'visible',
							unicodeBidi: 'isolate',
						},
						iconOnly: {
							label: 'baseButton__iconOnly',
							boxSizing: 'border-box',
							minWidth: '0.0625rem',
							flexShrink: 0,
							maxWidth: '100%',
							overflowX: 'visible',
							overflowY: 'visible',
							unicodeBidi: 'isolate',
						},
						iconWrapper: {
							label: 'baseButton__iconWrapper',
							boxSizing: 'border-box',
							minWidth: '0.0625rem',
							paddingInlineEnd: isCondensed
								? componentTheme.iconTextGapCondensed
								: componentTheme.iconTextGap,
							flexShrink: 0,
							maxWidth: '100%',
							overflowX: 'visible',
							overflowY: 'visible',
							unicodeBidi: 'isolate',
						},
						childrenWrapper: {
							label: 'baseButton__childrenWrapper',
							boxSizing: 'border-box',
							minWidth: '0.0625rem',
							flexShrink: 1,
							maxWidth: '100%',
							overflowX: 'visible',
							overflowY: 'visible',
							unicodeBidi: 'isolate',
						},
					}
				},
				BaseButton_props_propTypes = {
					children: prop_types_default().node,
					type: prop_types_default().oneOf([
						'button',
						'submit',
						'reset',
					]),
					size: prop_types_default().oneOf([
						'small',
						'medium',
						'large',
					]),
					elementRef: prop_types_default().func,
					as: prop_types_default().elementType,
					interaction: prop_types_default().oneOf([
						'enabled',
						'disabled',
						'readonly',
					]),
					color: prop_types_default().oneOf([
						'primary',
						'primary-inverse',
						'secondary',
						'success',
						'danger',
					]),
					focusColor: prop_types_default().oneOf(['info', 'inverse']),
					display: prop_types_default().oneOf([
						'inline-block',
						'block',
					]),
					textAlign: prop_types_default().oneOf(['start', 'center']),
					shape: prop_types_default().oneOf(['rectangle', 'circle']),
					withBackground: prop_types_default().bool,
					withBorder: prop_types_default().bool,
					isCondensed: prop_types_default().bool,
					margin: ThemeablePropTypes.spacing,
					cursor: prop_types_default().string,
					href: prop_types_default().string,
					onClick: prop_types_default().func,
					onKeyDown: prop_types_default().func,
					renderIcon: prop_types_default().oneOfType([
						prop_types_default().node,
						prop_types_default().func,
					]),
					tabIndex: prop_types_default().oneOfType([
						prop_types_default().number,
						prop_types_default().string,
					]),
				},
				BaseButton_excluded = [
					'type',
					'size',
					'elementRef',
					'as',
					'href',
					'color',
					'focusColor',
					'textAlign',
					'shape',
					'display',
					'withBackground',
					'withBorder',
					'isCondensed',
					'margin',
					'cursor',
					'onClick',
					'renderIcon',
					'tabIndex',
					'styles',
					'makeStyles',
				]
			var BaseButton_class, BaseButton_class2
			let BaseButton =
				withStyle(
					BaseButton_styles,
					theme,
				)(
					(BaseButton_class =
						testable()(
							((BaseButton_class2 = class BaseButton extends (
								react.Component
							) {
								constructor() {
									super(...arguments),
										(this.ref = null),
										(this.handleElementRef = (el) => {
											const elementRef =
												this.props.elementRef
											;(this.ref = el),
												'function' ==
													typeof elementRef &&
													elementRef(el)
										}),
										(this.handleClick = (event) => {
											const onClick = this.props.onClick
											if ('enabled' !== this.interaction)
												return (
													event.preventDefault(),
													void event.stopPropagation()
												)
											'function' == typeof onClick &&
												onClick(event)
										}),
										(this.handleKeyDown = (event) => {
											const _this$props = this.props,
												onClick = _this$props.onClick,
												onKeyDown =
													_this$props.onKeyDown,
												href = _this$props.href,
												interaction = this.interaction
											'function' == typeof onKeyDown &&
												onKeyDown(event)
											const _keycode$codes =
													keycode_default().codes,
												space = _keycode$codes.space,
												enter = _keycode$codes.enter
											'button' !== this.elementType &&
												[space, enter].includes(
													event.keyCode,
												) &&
												(event.preventDefault(),
												event.stopPropagation(),
												'function' == typeof onClick &&
													'enabled' === interaction &&
													onClick(event),
												href &&
													this.ref &&
													this.ref.click())
										})
								}
								componentDidMount() {
									var _this$props$makeStyle, _this$props2
									null ===
										(_this$props$makeStyle = (_this$props2 =
											this.props).makeStyles) ||
										void 0 === _this$props$makeStyle ||
										_this$props$makeStyle.call(
											_this$props2,
											this.makeStylesVariables,
										)
								}
								componentDidUpdate() {
									var _this$props$makeStyle2, _this$props3
									null ===
										(_this$props$makeStyle2 =
											(_this$props3 = this.props)
												.makeStyles) ||
										void 0 === _this$props$makeStyle2 ||
										_this$props$makeStyle2.call(
											_this$props3,
											this.makeStylesVariables,
										)
								}
								get _rootElement() {
									return this.ref
								}
								get makeStylesVariables() {
									return {
										isDisabled: this.isDisabled,
										hasOnlyIconVisible:
											this.hasOnlyIconVisible,
									}
								}
								get hasOnlyIconVisible() {
									const _this$props4 = this.props,
										children = _this$props4.children
									return !(
										!_this$props4.renderIcon ||
										hasVisibleChildren(children)
									)
								}
								get elementType() {
									return getElementType(
										BaseButton,
										this.props,
									)
								}
								get interaction() {
									return getInteraction({ props: this.props })
								}
								get isDisabled() {
									return 'disabled' === this.interaction
								}
								get isReadOnly() {
									return 'readonly' === this.interaction
								}
								get isEnabled() {
									return 'enabled' === this.interaction
								}
								get tabIndex() {
									const tabIndex = this.props.tabIndex
									return 'string' == typeof tabIndex
										? (warn(
												!1,
												'The `string` value for `tabIndex` is deprecated. Only `number` type will be accepted from V9.0.0.',
										  ),
										  parseInt(tabIndex))
										: tabIndex
								}
								get focusColor() {
									const _this$props5 = this.props,
										color = _this$props5.color,
										focusColor = _this$props5.focusColor,
										withBackground =
											_this$props5.withBackground
									return (
										focusColor ||
										('primary-inverse' === color &&
										withBackground
											? 'info'
											: color.includes('inverse')
											? 'inverse'
											: 'info')
									)
								}
								get focused() {
									return isActiveElement(this.ref)
								}
								focus() {
									this.ref && this.ref.focus()
								}
								renderChildren() {
									const _this$props6 = this.props,
										renderIcon = _this$props6.renderIcon,
										children = _this$props6.children,
										styles = _this$props6.styles,
										wrappedChildren = jsx(
											'span',
											{
												css:
													null == styles
														? void 0
														: styles.children,
											},
											children,
										)
									if (!renderIcon) return wrappedChildren
									const hasOnlyIconVisible =
											this.hasOnlyIconVisible,
										wrappedIcon = jsx(
											'span',
											{
												css:
													null == styles
														? void 0
														: styles.iconSVG,
											},
											callRenderProp(renderIcon),
										),
										flexChildren = hasOnlyIconVisible
											? jsx(
													'span',
													{
														css:
															null == styles
																? void 0
																: styles.iconOnly,
													},
													wrappedIcon,
													children,
											  )
											: [
													jsx(
														'span',
														{
															key: 'icon',
															css:
																null == styles
																	? void 0
																	: styles.iconWrapper,
														},
														wrappedIcon,
													),
													jsx(
														'span',
														{
															key: 'children',
															css:
																null == styles
																	? void 0
																	: styles.childrenWrapper,
														},
														wrappedChildren,
													),
											  ]
									return jsx(
										'span',
										{
											css:
												null == styles
													? void 0
													: styles.childrenLayout,
										},
										flexChildren,
									)
								}
								render() {
									const _this$props7 = this.props,
										type = _this$props7.type,
										as =
											(_this$props7.size,
											_this$props7.elementRef,
											_this$props7.as),
										href = _this$props7.href,
										shape =
											(_this$props7.color,
											_this$props7.focusColor,
											_this$props7.textAlign,
											_this$props7.shape),
										display = _this$props7.display,
										margin =
											(_this$props7.withBackground,
											_this$props7.withBorder,
											_this$props7.isCondensed,
											_this$props7.margin),
										cursor = _this$props7.cursor,
										onClick = _this$props7.onClick,
										styles =
											(_this$props7.renderIcon,
											_this$props7.tabIndex,
											_this$props7.styles),
										props =
											(_this$props7.makeStyles,
											(0, objectWithoutProperties.Z)(
												_this$props7,
												BaseButton_excluded,
											)),
										isDisabled = this.isDisabled,
										isEnabled = this.isEnabled,
										isReadOnly = this.isReadOnly,
										tabIndexNumber = this.tabIndex
									return jsx(
										View,
										Object.assign(
											{},
											passthroughProps(props),
											{
												as: this.elementType,
												focusColor: this.focusColor,
												position: 'relative',
												display,
												width:
													'block' === display
														? '100%'
														: 'auto',
												borderRadius:
													'circle' === shape
														? 'circle'
														: 'medium',
												background: 'transparent',
												padding: 'none',
												borderWidth: 'none',
												margin,
												cursor: isDisabled
													? 'not-allowed'
													: cursor,
												href,
												type: href ? void 0 : type,
												elementRef:
													this.handleElementRef,
												onClick: this.handleClick,
												onKeyDown: this.handleKeyDown,
												role:
													onClick && 'button' !== as
														? 'button'
														: void 0,
												tabIndex:
													onClick && as
														? tabIndexNumber || 0
														: tabIndexNumber,
												disabled:
													isDisabled || isReadOnly,
												css: isEnabled
													? null == styles
														? void 0
														: styles.baseButton
													: null,
											},
										),
										jsx(
											'span',
											{
												css:
													null == styles
														? void 0
														: styles.content,
											},
											this.renderChildren(),
										),
									)
								}
							}),
							(BaseButton_class2.displayName = 'BaseButton'),
							(BaseButton_class2.componentId = 'BaseButton'),
							(BaseButton_class2.propTypes =
								BaseButton_props_propTypes),
							(BaseButton_class2.allowedProps = [
								'as',
								'children',
								'color',
								'cursor',
								'display',
								'elementRef',
								'focusColor',
								'href',
								'interaction',
								'isCondensed',
								'margin',
								'onClick',
								'onKeyDown',
								'renderIcon',
								'shape',
								'size',
								'tabIndex',
								'textAlign',
								'type',
								'withBackground',
								'withBorder',
							]),
							(BaseButton_class2.defaultProps = {
								type: 'button',
								size: 'medium',
								as: 'button',
								interaction: void 0,
								color: 'secondary',
								shape: 'rectangle',
								display: 'inline-block',
								textAlign: 'start',
								withBackground: !0,
								withBorder: !0,
								isCondensed: !1,
								margin: '0',
								cursor: 'pointer',
							}),
							(BaseButton_class = BaseButton_class2)),
						) || BaseButton_class),
				) || BaseButton_class
			const Button_props_propTypes = {
					children: prop_types_default().node,
					type: prop_types_default().oneOf([
						'button',
						'submit',
						'reset',
					]),
					size: prop_types_default().oneOf([
						'small',
						'medium',
						'large',
					]),
					elementRef: prop_types_default().func,
					as: prop_types_default().elementType,
					interaction: prop_types_default().oneOf([
						'enabled',
						'disabled',
						'readonly',
					]),
					color: prop_types_default().oneOf([
						'primary',
						'primary-inverse',
						'secondary',
						'success',
						'danger',
					]),
					focusColor: prop_types_default().oneOf(['info', 'inverse']),
					display: prop_types_default().oneOf([
						'inline-block',
						'block',
					]),
					textAlign: prop_types_default().oneOf(['start', 'center']),
					withBackground: prop_types_default().bool,
					margin: ThemeablePropTypes.spacing,
					cursor: prop_types_default().string,
					href: prop_types_default().string,
					renderIcon: prop_types_default().oneOfType([
						prop_types_default().node,
						prop_types_default().func,
					]),
					onClick: prop_types_default().func,
				},
				Button_excluded = [
					'children',
					'type',
					'size',
					'as',
					'color',
					'focusColor',
					'display',
					'textAlign',
					'withBackground',
					'margin',
					'cursor',
					'href',
					'renderIcon',
				]
			var Button_class, Button_class2
			let Button =
				withStyle(
					null,
					theme,
				)(
					(Button_class =
						testable()(
							((Button_class2 = class Button extends (
								react.Component
							) {
								constructor() {
									super(...arguments),
										(this._buttonComponent = null),
										(this.ref = null),
										(this.handleElementRef = (el) => {
											const elementRef =
												this.props.elementRef
											;(this.ref = el),
												'function' ==
													typeof elementRef &&
													elementRef(el)
										}),
										(this.handleButtonRef = (component) => {
											this._buttonComponent = component
										})
								}
								get focused() {
									return (
										this._buttonComponent &&
										this._buttonComponent.focused
									)
								}
								focus() {
									this._buttonComponent &&
										this._buttonComponent.focus()
								}
								render() {
									const _this$props = this.props,
										children = _this$props.children,
										type = _this$props.type,
										size = _this$props.size,
										as = _this$props.as,
										color = _this$props.color,
										focusColor = _this$props.focusColor,
										display = _this$props.display,
										textAlign = _this$props.textAlign,
										withBackground =
											_this$props.withBackground,
										margin = _this$props.margin,
										cursor = _this$props.cursor,
										href = _this$props.href,
										renderIcon = _this$props.renderIcon,
										props = (0, objectWithoutProperties.Z)(
											_this$props,
											Button_excluded,
										),
										interaction = getInteraction({ props }),
										themeOverride =
											this.props.themeOverride,
										buttonProps = {
											...passthroughProps(props),
											type,
											size,
											elementRef: this.handleElementRef,
											ref: this.handleButtonRef,
											as,
											color,
											interaction,
											focusColor,
											display,
											textAlign,
											withBackground,
											margin,
											cursor,
											href,
											renderIcon,
											themeOverride,
										}
									return react.createElement(
										BaseButton,
										buttonProps,
										children,
									)
								}
							}),
							(Button_class2.displayName = 'Button'),
							(Button_class2.componentId = 'Button'),
							(Button_class2.propTypes = Button_props_propTypes),
							(Button_class2.allowedProps = [
								'as',
								'children',
								'color',
								'cursor',
								'display',
								'elementRef',
								'focusColor',
								'href',
								'interaction',
								'margin',
								'renderIcon',
								'size',
								'textAlign',
								'type',
								'withBackground',
								'onClick',
							]),
							(Button_class2.defaultProps = {
								type: 'button',
								size: 'medium',
								as: 'button',
								interaction: void 0,
								color: 'secondary',
								display: 'inline-block',
								textAlign: 'center',
								withBackground: !0,
								margin: '0',
								cursor: 'pointer',
							}),
							(Button_class = Button_class2)),
						) || Button_class),
				) || Button_class
		},
		'./node_modules/fast-deep-equal/index.js': (module) => {
			'use strict'
			module.exports = function equal(a, b) {
				if (a === b) return !0
				if (a && b && 'object' == typeof a && 'object' == typeof b) {
					if (a.constructor !== b.constructor) return !1
					var length, i, keys
					if (Array.isArray(a)) {
						if ((length = a.length) != b.length) return !1
						for (i = length; 0 != i--; )
							if (!equal(a[i], b[i])) return !1
						return !0
					}
					if (a.constructor === RegExp)
						return a.source === b.source && a.flags === b.flags
					if (a.valueOf !== Object.prototype.valueOf)
						return a.valueOf() === b.valueOf()
					if (a.toString !== Object.prototype.toString)
						return a.toString() === b.toString()
					if (
						(length = (keys = Object.keys(a)).length) !==
						Object.keys(b).length
					)
						return !1
					for (i = length; 0 != i--; )
						if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
							return !1
					for (i = length; 0 != i--; ) {
						var key = keys[i]
						if (!equal(a[key], b[key])) return !1
					}
					return !0
				}
				return a != a && b != b
			}
		},
		'./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js':
			(module, __unused_webpack_exports, __webpack_require__) => {
				'use strict'
				var reactIs = __webpack_require__(
						'./node_modules/hoist-non-react-statics/node_modules/react-is/index.js',
					),
					REACT_STATICS = {
						childContextTypes: !0,
						contextType: !0,
						contextTypes: !0,
						defaultProps: !0,
						displayName: !0,
						getDefaultProps: !0,
						getDerivedStateFromError: !0,
						getDerivedStateFromProps: !0,
						mixins: !0,
						propTypes: !0,
						type: !0,
					},
					KNOWN_STATICS = {
						name: !0,
						length: !0,
						prototype: !0,
						caller: !0,
						callee: !0,
						arguments: !0,
						arity: !0,
					},
					MEMO_STATICS = {
						$$typeof: !0,
						compare: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
						type: !0,
					},
					TYPE_STATICS = {}
				function getStatics(component) {
					return reactIs.isMemo(component)
						? MEMO_STATICS
						: TYPE_STATICS[component.$$typeof] || REACT_STATICS
				}
				;(TYPE_STATICS[reactIs.ForwardRef] = {
					$$typeof: !0,
					render: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0,
				}),
					(TYPE_STATICS[reactIs.Memo] = MEMO_STATICS)
				var defineProperty = Object.defineProperty,
					getOwnPropertyNames = Object.getOwnPropertyNames,
					getOwnPropertySymbols = Object.getOwnPropertySymbols,
					getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
					getPrototypeOf = Object.getPrototypeOf,
					objectPrototype = Object.prototype
				module.exports = function hoistNonReactStatics(
					targetComponent,
					sourceComponent,
					blacklist,
				) {
					if ('string' != typeof sourceComponent) {
						if (objectPrototype) {
							var inheritedComponent =
								getPrototypeOf(sourceComponent)
							inheritedComponent &&
								inheritedComponent !== objectPrototype &&
								hoistNonReactStatics(
									targetComponent,
									inheritedComponent,
									blacklist,
								)
						}
						var keys = getOwnPropertyNames(sourceComponent)
						getOwnPropertySymbols &&
							(keys = keys.concat(
								getOwnPropertySymbols(sourceComponent),
							))
						for (
							var targetStatics = getStatics(targetComponent),
								sourceStatics = getStatics(sourceComponent),
								i = 0;
							i < keys.length;
							++i
						) {
							var key = keys[i]
							if (
								!(
									KNOWN_STATICS[key] ||
									(blacklist && blacklist[key]) ||
									(sourceStatics && sourceStatics[key]) ||
									(targetStatics && targetStatics[key])
								)
							) {
								var descriptor = getOwnPropertyDescriptor(
									sourceComponent,
									key,
								)
								try {
									defineProperty(
										targetComponent,
										key,
										descriptor,
									)
								} catch (e) {}
							}
						}
					}
					return targetComponent
				}
			},
		'./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js':
			(__unused_webpack_module, exports) => {
				'use strict'
				var b = 'function' == typeof Symbol && Symbol.for,
					c = b ? Symbol.for('react.element') : 60103,
					d = b ? Symbol.for('react.portal') : 60106,
					e = b ? Symbol.for('react.fragment') : 60107,
					f = b ? Symbol.for('react.strict_mode') : 60108,
					g = b ? Symbol.for('react.profiler') : 60114,
					h = b ? Symbol.for('react.provider') : 60109,
					k = b ? Symbol.for('react.context') : 60110,
					l = b ? Symbol.for('react.async_mode') : 60111,
					m = b ? Symbol.for('react.concurrent_mode') : 60111,
					n = b ? Symbol.for('react.forward_ref') : 60112,
					p = b ? Symbol.for('react.suspense') : 60113,
					q = b ? Symbol.for('react.suspense_list') : 60120,
					r = b ? Symbol.for('react.memo') : 60115,
					t = b ? Symbol.for('react.lazy') : 60116,
					v = b ? Symbol.for('react.block') : 60121,
					w = b ? Symbol.for('react.fundamental') : 60117,
					x = b ? Symbol.for('react.responder') : 60118,
					y = b ? Symbol.for('react.scope') : 60119
				function z(a) {
					if ('object' == typeof a && null !== a) {
						var u = a.$$typeof
						switch (u) {
							case c:
								switch ((a = a.type)) {
									case l:
									case m:
									case e:
									case g:
									case f:
									case p:
										return a
									default:
										switch ((a = a && a.$$typeof)) {
											case k:
											case n:
											case t:
											case r:
											case h:
												return a
											default:
												return u
										}
								}
							case d:
								return u
						}
					}
				}
				function A(a) {
					return z(a) === m
				}
				;(exports.AsyncMode = l),
					(exports.ConcurrentMode = m),
					(exports.ContextConsumer = k),
					(exports.ContextProvider = h),
					(exports.Element = c),
					(exports.ForwardRef = n),
					(exports.Fragment = e),
					(exports.Lazy = t),
					(exports.Memo = r),
					(exports.Portal = d),
					(exports.Profiler = g),
					(exports.StrictMode = f),
					(exports.Suspense = p),
					(exports.isAsyncMode = function (a) {
						return A(a) || z(a) === l
					}),
					(exports.isConcurrentMode = A),
					(exports.isContextConsumer = function (a) {
						return z(a) === k
					}),
					(exports.isContextProvider = function (a) {
						return z(a) === h
					}),
					(exports.isElement = function (a) {
						return (
							'object' == typeof a &&
							null !== a &&
							a.$$typeof === c
						)
					}),
					(exports.isForwardRef = function (a) {
						return z(a) === n
					}),
					(exports.isFragment = function (a) {
						return z(a) === e
					}),
					(exports.isLazy = function (a) {
						return z(a) === t
					}),
					(exports.isMemo = function (a) {
						return z(a) === r
					}),
					(exports.isPortal = function (a) {
						return z(a) === d
					}),
					(exports.isProfiler = function (a) {
						return z(a) === g
					}),
					(exports.isStrictMode = function (a) {
						return z(a) === f
					}),
					(exports.isSuspense = function (a) {
						return z(a) === p
					}),
					(exports.isValidElementType = function (a) {
						return (
							'string' == typeof a ||
							'function' == typeof a ||
							a === e ||
							a === m ||
							a === g ||
							a === f ||
							a === p ||
							a === q ||
							('object' == typeof a &&
								null !== a &&
								(a.$$typeof === t ||
									a.$$typeof === r ||
									a.$$typeof === h ||
									a.$$typeof === k ||
									a.$$typeof === n ||
									a.$$typeof === w ||
									a.$$typeof === x ||
									a.$$typeof === y ||
									a.$$typeof === v))
						)
					}),
					(exports.typeOf = z)
			},
		'./node_modules/hoist-non-react-statics/node_modules/react-is/index.js':
			(module, __unused_webpack_exports, __webpack_require__) => {
				'use strict'
				module.exports = __webpack_require__(
					'./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js',
				)
			},
		'./node_modules/keycode/index.js': (module, exports) => {
			function keyCode(searchInput) {
				if (searchInput && 'object' == typeof searchInput) {
					var hasKeyCode =
						searchInput.which ||
						searchInput.keyCode ||
						searchInput.charCode
					hasKeyCode && (searchInput = hasKeyCode)
				}
				if ('number' == typeof searchInput) return names[searchInput]
				var foundNamedKey,
					search = String(searchInput)
				return (foundNamedKey = codes[search.toLowerCase()])
					? foundNamedKey
					: (foundNamedKey = aliases[search.toLowerCase()]) ||
							(1 === search.length
								? search.charCodeAt(0)
								: void 0)
			}
			keyCode.isEventKey = function isEventKey(event, nameOrCode) {
				if (event && 'object' == typeof event) {
					var keyCode = event.which || event.keyCode || event.charCode
					if (null == keyCode) return !1
					if ('string' == typeof nameOrCode) {
						var foundNamedKey
						if ((foundNamedKey = codes[nameOrCode.toLowerCase()]))
							return foundNamedKey === keyCode
						if ((foundNamedKey = aliases[nameOrCode.toLowerCase()]))
							return foundNamedKey === keyCode
					} else if ('number' == typeof nameOrCode)
						return nameOrCode === keyCode
					return !1
				}
			}
			var codes =
					((exports = module.exports = keyCode).code =
					exports.codes =
						{
							backspace: 8,
							tab: 9,
							enter: 13,
							shift: 16,
							ctrl: 17,
							alt: 18,
							'pause/break': 19,
							'caps lock': 20,
							esc: 27,
							space: 32,
							'page up': 33,
							'page down': 34,
							end: 35,
							home: 36,
							left: 37,
							up: 38,
							right: 39,
							down: 40,
							insert: 45,
							delete: 46,
							command: 91,
							'left command': 91,
							'right command': 93,
							'numpad *': 106,
							'numpad +': 107,
							'numpad -': 109,
							'numpad .': 110,
							'numpad /': 111,
							'num lock': 144,
							'scroll lock': 145,
							'my computer': 182,
							'my calculator': 183,
							';': 186,
							'=': 187,
							',': 188,
							'-': 189,
							'.': 190,
							'/': 191,
							'`': 192,
							'[': 219,
							'\\': 220,
							']': 221,
							"'": 222,
						}),
				aliases = (exports.aliases = {
					windows: 91,
					'⇧': 16,
					'⌥': 18,
					'⌃': 17,
					'⌘': 91,
					ctl: 17,
					control: 17,
					option: 18,
					pause: 19,
					break: 19,
					caps: 20,
					return: 13,
					escape: 27,
					spc: 32,
					spacebar: 32,
					pgup: 33,
					pgdn: 34,
					ins: 45,
					del: 46,
					cmd: 91,
				})
			for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
			for (var i = 48; i < 58; i++) codes[i - 48] = i
			for (i = 1; i < 13; i++) codes['f' + i] = i + 111
			for (i = 0; i < 10; i++) codes['numpad ' + i] = i + 96
			var names = (exports.names = exports.title = {})
			for (i in codes) names[codes[i]] = i
			for (var alias in aliases) codes[alias] = aliases[alias]
		},
	},
])
