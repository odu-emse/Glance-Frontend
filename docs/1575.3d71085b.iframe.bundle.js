'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[1575],
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
		'./node_modules/react-icons/bs/index.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, {
				YZq: () => BsFillClockFill,
				hPW: () => BsArrowReturnRight,
				nzA: () => BsFillBellFill,
				uhk: () => BsFillExclamationOctagonFill,
				y_S: () => BsBoxArrowUpRight,
			})
			var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./node_modules/react-icons/lib/esm/index.js'
			)
			function BsFillBellFill(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z',
							},
						},
					],
				})(props)
			}
			function BsFillClockFill(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z',
							},
						},
					],
				})(props)
			}
			function BsFillExclamationOctagonFill(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
					child: [
						{
							tag: 'path',
							attr: {
								d: 'M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
							},
						},
					],
				})(props)
			}
			function BsArrowReturnRight(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
					child: [
						{
							tag: 'path',
							attr: {
								fillRule: 'evenodd',
								d: 'M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z',
							},
						},
					],
				})(props)
			}
			function BsBoxArrowUpRight(props) {
				return (0, _lib__WEBPACK_IMPORTED_MODULE_0__.w_)({
					tag: 'svg',
					attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
					child: [
						{
							tag: 'path',
							attr: {
								fillRule: 'evenodd',
								d: 'M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z',
							},
						},
						{
							tag: 'path',
							attr: {
								fillRule: 'evenodd',
								d: 'M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z',
							},
						},
					],
				})(props)
			}
		},
	},
])
