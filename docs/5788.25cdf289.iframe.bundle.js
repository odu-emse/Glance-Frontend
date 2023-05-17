'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[5788],
	{
		'./node_modules/react-icons/lib/esm/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
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
											p
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
									p[i]
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
							Tree2Element(node.child)
						)
					})
				)
			}
			function GenIcon(data) {
				return function (props) {
					return react.createElement(
						IconBase,
						__assign({ attr: __assign({}, data.attr) }, props),
						Tree2Element(data.child)
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
											conf.style
										),
										props.style
									),
									height: computedSize,
									width: computedSize,
									xmlns: 'http://www.w3.org/2000/svg',
								}
							),
							title && react.createElement('title', null, title),
							props.children
						)
					)
				}
				return void 0 !== IconContext
					? react.createElement(
							IconContext.Consumer,
							null,
							function (conf) {
								return elem(conf)
							}
					  )
					: elem(DefaultContext)
			}
		},
		'./node_modules/react-icons/rx/index.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, {
				h2L: () => RxCaretRight,
				jX5: () => RxCaretDown,
			})
			var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./node_modules/react-icons/lib/esm/index.js'
			)
			function RxCaretDown(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { viewBox: '0 0 15 15', fill: 'none' },
					child: [
						{
							tag: 'path',
							attr: {
								fillRule: 'evenodd',
								clipRule: 'evenodd',
								d: 'M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z',
								fill: 'currentColor',
							},
						},
					],
				})(props)
			}
			function RxCaretRight(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { viewBox: '0 0 15 15', fill: 'none' },
					child: [
						{
							tag: 'path',
							attr: {
								fillRule: 'evenodd',
								clipRule: 'evenodd',
								d: 'M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z',
								fill: 'currentColor',
							},
						},
					],
				})(props)
			}
		},
	},
])
