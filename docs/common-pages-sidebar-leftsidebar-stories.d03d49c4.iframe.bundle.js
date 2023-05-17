'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[3055],
	{
		'./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
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
		'./node_modules/@babel/runtime/helpers/esm/extends.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			function _extends() {
				return (
					(_extends = Object.assign
						? Object.assign.bind()
						: function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i]
									for (var key in source)
										Object.prototype.hasOwnProperty.call(
											source,
											key
										) && (target[key] = source[key])
								}
								return target
						  }),
					_extends.apply(this, arguments)
				)
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => _extends })
		},
		'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, {
				Z: () => _slicedToArray,
			})
			var unsupportedIterableToArray = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js'
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
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					})()
				)
			}
		},
		'./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => _unsupportedIterableToArray,
				})
				var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js'
					)
				function _unsupportedIterableToArray(o, minLen) {
					if (o) {
						if ('string' == typeof o)
							return (0,
							_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
								o,
								minLen
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
										n
								  )
								? (0,
								  _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
										o,
										minLen
								  )
								: void 0
						)
					}
				}
			},
		'./components/common/pages/sidebar/sidebar.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { Y: () => Sidebar })
			var react = __webpack_require__('./node_modules/react/index.js'),
				sidebar_item = __webpack_require__(
					'./components/common/pages/sidebar/sidebar_item/sidebar_item.tsx'
				),
				__jsx = react.createElement,
				PlanOfStudy = function PlanOfStudy(_ref) {
					var width = _ref.width,
						height = _ref.height
					return __jsx(
						'svg',
						{
							width,
							height,
							viewBox: '0 0 20 20',
							fill: 'none',
							xmlns: 'http://www.w3.org/2000/svg',
						},
						__jsx('path', {
							d: 'M19.814 17.0991L15.7699 2.00649C15.6623 1.60644 15.4004 1.26543 15.0416 1.05829C14.6828 0.85116 14.2565 0.794826 13.8563 0.901657L10.8377 1.71047C10.8046 1.71935 10.7729 1.7309 10.7408 1.74176C10.5955 1.55027 10.4079 1.39496 10.1927 1.28797C9.97744 1.18098 9.74037 1.12521 9.5 1.12501H6.375C6.10046 1.12508 5.83086 1.19804 5.59375 1.33643C5.35664 1.19804 5.08704 1.12508 4.8125 1.12501H1.6875C1.27324 1.12548 0.876092 1.29025 0.583169 1.58318C0.290246 1.8761 0.125474 2.27325 0.125 2.68751V18.3125C0.125474 18.7268 0.290246 19.1239 0.583169 19.4168C0.876092 19.7098 1.27324 19.8745 1.6875 19.875H4.8125C5.08704 19.8749 5.35664 19.802 5.59375 19.6636C5.83086 19.802 6.10046 19.8749 6.375 19.875H9.5C9.91426 19.8745 10.3114 19.7098 10.6043 19.4168C10.8973 19.1239 11.062 18.7268 11.0625 18.3125V8.58622L13.7769 18.7167C13.83 18.9149 13.9215 19.1008 14.0464 19.2636C14.1713 19.4265 14.327 19.5631 14.5048 19.6658C14.6825 19.7684 14.8787 19.8349 15.0822 19.8617C15.2856 19.8884 15.4924 19.8748 15.6906 19.8216L18.7092 19.0128C19.1092 18.9051 19.4501 18.6432 19.6573 18.2844C19.8644 17.9257 19.9207 17.4994 19.814 17.0991ZM14.2606 2.41085L14.8674 4.67475L11.8488 5.48359L11.2422 3.21975L14.2606 2.41085ZM9.5 2.68751L9.50072 14.4063H6.375V2.68751H9.5ZM4.8125 2.68751V5.03126H1.6875V2.68751H4.8125ZM9.5 18.3125H6.375V15.9688H9.50081L9.50095 18.3125H9.5ZM18.3047 17.5035L15.2862 18.3123L14.6796 16.0485L17.6989 15.2394L18.3057 17.5032L18.3047 17.5035Z',
							fill: '#083755',
						})
					)
				}
			;(PlanOfStudy.displayName = 'PlanOfStudy'),
				(PlanOfStudy.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'PlanOfStudy',
				})
			try {
				;(PlanOfStudy.displayName = 'PlanOfStudy'),
					(PlanOfStudy.__docgenInfo = {
						description: '',
						displayName: 'PlanOfStudy',
						props: {
							width: {
								defaultValue: null,
								description: '',
								name: 'width',
								required: !0,
								type: { name: 'any' },
							},
							height: {
								defaultValue: null,
								description: '',
								name: 'height',
								required: !0,
								type: { name: 'any' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/svg/plan_of_study.tsx#PlanOfStudy'
						] = {
							docgenInfo: PlanOfStudy.__docgenInfo,
							name: 'PlanOfStudy',
							path: 'components/common/svg/plan_of_study.tsx#PlanOfStudy',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var modules_jsx = react.createElement,
				Modules = function Modules(_ref) {
					var width = _ref.width,
						height = _ref.height
					return modules_jsx(
						'svg',
						{
							width,
							height,
							viewBox: '0 0 21 19',
							fill: 'none',
							xmlns: 'http://www.w3.org/2000/svg',
						},
						modules_jsx('path', {
							d: 'M19.0938 0.90625H1.90625C1.49199 0.906724 1.09484 1.0715 0.801919 1.36442C0.508996 1.65734 0.344224 2.05449 0.34375 2.46875V16.5313C0.343752 16.7365 0.384172 16.9397 0.462703 17.1293C0.541233 17.3189 0.656337 17.4911 0.80144 17.6362C0.946542 17.7813 1.1188 17.8964 1.30838 17.9749C1.49797 18.0534 1.70115 18.0938 1.90635 18.0938L3.21393 18.0936C3.36167 18.0936 3.50637 18.0517 3.63125 17.9727C3.75613 17.8938 3.85606 17.7811 3.91946 17.6476C4.29992 16.846 4.89997 16.1688 5.64992 15.6946C6.39988 15.2205 7.26896 14.9688 8.15625 14.9688C9.04354 14.9688 9.91263 15.2205 10.6626 15.6946C11.4125 16.1688 12.0126 16.846 12.393 17.6476C12.4564 17.7811 12.5564 17.8938 12.6813 17.9728C12.8062 18.0517 12.9509 18.0936 13.0987 18.0936L19.0938 18.0938C19.508 18.0933 19.9052 17.9285 20.1981 17.6356C20.491 17.3427 20.6558 16.9455 20.6562 16.5312V2.46875C20.6558 2.05449 20.491 1.65734 20.1981 1.36442C19.9052 1.0715 19.508 0.906724 19.0938 0.90625ZM8.15625 13.4062C7.53818 13.4062 6.934 13.223 6.42009 12.8796C5.90619 12.5362 5.50565 12.0482 5.26913 11.4771C5.0326 10.9061 4.97072 10.2778 5.0913 9.67159C5.21187 9.0654 5.5095 8.50858 5.94654 8.07154C6.38358 7.6345 6.9404 7.33687 7.54659 7.2163C8.15278 7.09572 8.78112 7.1576 9.35214 7.39413C9.92315 7.63065 10.4112 8.03119 10.7546 8.54509C11.098 9.059 11.2812 9.66318 11.2812 10.2812C11.2803 11.1098 10.9508 11.9041 10.3649 12.4899C9.77907 13.0758 8.98476 13.4053 8.15625 13.4062ZM19.0938 16.5312L13.5697 16.5311C13.2289 15.9438 12.7945 15.4161 12.2838 14.9688H16.75C16.9572 14.9687 17.1559 14.8864 17.3024 14.7399C17.4489 14.5934 17.5312 14.3947 17.5312 14.1875V4.8125C17.5312 4.6053 17.4489 4.40659 17.3024 4.26008C17.1559 4.11356 16.9572 4.03125 16.75 4.03125H4.25C4.0428 4.03125 3.84409 4.11356 3.69758 4.26008C3.55106 4.40659 3.46875 4.6053 3.46875 4.8125V14.1875C3.46886 14.3611 3.52681 14.5297 3.63342 14.6666C3.74004 14.8036 3.88926 14.9012 4.0575 14.9439C3.53434 15.3965 3.09005 15.9329 2.74281 16.5312L1.90625 16.5313V2.46875H19.0938V16.5312Z',
							fill: '#083755',
						})
					)
				}
			;(Modules.displayName = 'Modules'),
				(Modules.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Modules',
				})
			try {
				;(Modules.displayName = 'Modules'),
					(Modules.__docgenInfo = {
						description: '',
						displayName: 'Modules',
						props: {
							width: {
								defaultValue: null,
								description: '',
								name: 'width',
								required: !0,
								type: { name: 'any' },
							},
							height: {
								defaultValue: null,
								description: '',
								name: 'height',
								required: !0,
								type: { name: 'any' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/svg/modules.tsx#Modules'
						] = {
							docgenInfo: Modules.__docgenInfo,
							name: 'Modules',
							path: 'components/common/svg/modules.tsx#Modules',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var communities_jsx = react.createElement,
				Communities = function Communities(_ref) {
					var width = _ref.width,
						height = _ref.height
					return communities_jsx(
						'svg',
						{
							width,
							height,
							viewBox: '0 0 21 21',
							fill: 'none',
							xmlns: 'http://www.w3.org/2000/svg',
						},
						communities_jsx('path', {
							d: 'M0.500104 9.24935C1.19252 8.32153 2.11609 7.59145 3.17869 7.13191C2.59698 6.60079 2.18943 5.90621 2.00954 5.13932C1.82964 4.37244 1.88579 3.56908 2.17062 2.83468C2.45546 2.10028 2.95567 1.46915 3.60561 1.02412C4.25554 0.579086 5.02484 0.340942 5.81255 0.340942C6.60025 0.340942 7.36955 0.579086 8.01949 1.02412C8.66942 1.46915 9.16963 2.10028 9.45447 2.83468C9.7393 3.56908 9.79546 4.37244 9.61556 5.13932C9.43566 5.90621 9.02811 6.60079 8.4464 7.13191C9.2135 7.46277 9.91049 7.93684 10.5 8.52873C11.0896 7.93682 11.7866 7.46274 12.5537 7.13191C11.972 6.60079 11.5644 5.90621 11.3845 5.13932C11.2046 4.37244 11.2608 3.56908 11.5456 2.83468C11.8305 2.10028 12.3307 1.46915 12.9806 1.02412C13.6305 0.579086 14.3998 0.340942 15.1875 0.340942C15.9752 0.340942 16.7445 0.579086 17.3945 1.02412C18.0444 1.46915 18.5446 2.10028 18.8295 2.83468C19.1143 3.56908 19.1705 4.37244 18.9906 5.13932C18.8107 5.90621 18.4031 6.60079 17.8214 7.13191C18.8839 7.59142 19.8074 8.32143 20.4998 9.24916C20.5615 9.33118 20.6065 9.42456 20.6322 9.52398C20.6578 9.62339 20.6636 9.72688 20.6492 9.82853C20.6348 9.93018 20.6005 10.028 20.5483 10.1164C20.4961 10.2048 20.427 10.282 20.3449 10.3437C20.2628 10.4053 20.1694 10.4502 20.0699 10.4757C19.9705 10.5013 19.867 10.5069 19.7654 10.4925C19.6637 10.478 19.5659 10.4436 19.4776 10.3913C19.3893 10.3389 19.3121 10.2697 19.2505 10.1876C18.7774 9.55685 18.164 9.04493 17.4587 8.69235C16.7535 8.33978 15.9759 8.15623 15.1874 8.15625C14.399 8.15627 13.6214 8.33985 12.9161 8.69246C12.2109 9.04506 11.5975 9.55701 11.1244 10.1878C11.1231 10.1895 11.1216 10.1909 11.1203 10.1926C11.1045 10.2132 11.0877 10.233 11.0699 10.2519C11.064 10.2582 11.0581 10.2641 11.0521 10.2701C11.0384 10.2838 11.0241 10.297 11.0093 10.3098C11.0006 10.3173 10.9919 10.3246 10.9831 10.3317C10.9784 10.3353 10.9742 10.3394 10.9694 10.343C10.9605 10.3497 10.9511 10.3553 10.942 10.3615C10.9321 10.3683 10.9223 10.3754 10.9121 10.3817C10.8962 10.3916 10.8798 10.4005 10.8633 10.4091C10.8551 10.4134 10.8472 10.4182 10.8389 10.4222C10.7883 10.4466 10.7353 10.4654 10.6807 10.4783C10.6728 10.4801 10.6648 10.4813 10.6569 10.483C10.6379 10.4868 10.6189 10.4903 10.5997 10.4927C10.5889 10.4941 10.5781 10.495 10.5674 10.4959C10.5512 10.4973 10.5351 10.4983 10.5189 10.4987C10.5123 10.4989 10.5058 10.4998 10.4992 10.4998C10.4947 10.4998 10.4903 10.4989 10.4859 10.4988C10.4522 10.4983 10.4186 10.4957 10.3853 10.4909C10.3761 10.4895 10.367 10.4873 10.3579 10.4856C10.3303 10.4805 10.303 10.4739 10.2761 10.4659C10.2669 10.4631 10.2576 10.4609 10.2485 10.4578C10.2164 10.4467 10.185 10.4336 10.1547 10.4184C10.1456 10.4139 10.1366 10.4092 10.1275 10.4043C10.096 10.3874 10.0657 10.3683 10.0369 10.3472C10.0348 10.3457 10.0326 10.3447 10.0306 10.3432C10.0192 10.3347 10.0089 10.3252 9.99813 10.3162C9.99188 10.3109 9.9854 10.306 9.97929 10.3005C9.96308 10.286 9.94792 10.2708 9.93314 10.2553C9.93056 10.2526 9.9278 10.25 9.92527 10.2473C9.90391 10.2244 9.88394 10.2003 9.86547 10.175C9.39127 9.5468 8.77754 9.03743 8.07273 8.68708C7.36793 8.33674 6.59133 8.15502 5.80426 8.15625C5.01718 8.15749 4.24116 8.34166 3.53746 8.69422C2.83376 9.04678 2.22164 9.55808 1.74942 10.1878C1.62498 10.3534 1.43982 10.4629 1.23468 10.492C1.02954 10.5212 0.821222 10.4677 0.655553 10.3432C0.489883 10.2188 0.380433 10.0336 0.35128 9.82848C0.322128 9.62334 0.375663 9.41502 0.500104 9.24935ZM17.8214 17.2882C18.4031 16.757 18.8107 16.0625 18.9906 15.2956C19.1705 14.5287 19.1143 13.7253 18.8295 12.9909C18.5446 12.2565 18.0444 11.6254 17.3945 11.1804C16.7445 10.7353 15.9752 10.4972 15.1875 10.4972C14.3998 10.4972 13.6305 10.7353 12.9806 11.1804C12.3307 11.6254 11.8305 12.2565 11.5456 12.9909C11.2608 13.7253 11.2046 14.5287 11.3845 15.2956C11.5644 16.0625 11.972 16.757 12.5537 17.2882C11.7866 17.619 11.0896 18.0931 10.5 18.685C9.91049 18.0931 9.2135 17.619 8.4464 17.2882C9.02811 16.757 9.43566 16.0625 9.61556 15.2956C9.79546 14.5287 9.7393 13.7253 9.45447 12.9909C9.16963 12.2565 8.66942 11.6254 8.01949 11.1804C7.36955 10.7353 6.60025 10.4972 5.81255 10.4972C5.02484 10.4972 4.25554 10.7353 3.60561 11.1804C2.95567 11.6254 2.45546 12.2565 2.17062 12.9909C1.88579 13.7253 1.82964 14.5287 2.00954 15.2956C2.18943 16.0625 2.59698 16.757 3.17869 17.2882C2.11609 17.7477 1.19252 18.4778 0.500104 19.4056C0.412937 19.5216 0.359819 19.6597 0.346706 19.8042C0.333592 19.9488 0.361002 20.0941 0.425861 20.2239C0.49072 20.3538 0.590465 20.463 0.713911 20.5393C0.837357 20.6156 0.979624 20.6561 1.12476 20.6561L10.4971 20.6559L10.4998 20.6561L19.8752 20.6559C20.0203 20.6559 20.1626 20.6154 20.286 20.5391C20.4095 20.4628 20.5092 20.3536 20.5741 20.2237C20.6389 20.0939 20.6664 19.9486 20.6532 19.804C20.6401 19.6595 20.587 19.5214 20.4998 19.4054C19.8074 18.4777 18.8839 17.7477 17.8214 17.2882Z',
							fill: '#083755',
						})
					)
				}
			;(Communities.displayName = 'Communities'),
				(Communities.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Communities',
				})
			try {
				;(Communities.displayName = 'Communities'),
					(Communities.__docgenInfo = {
						description: '',
						displayName: 'Communities',
						props: {
							width: {
								defaultValue: null,
								description: '',
								name: 'width',
								required: !0,
								type: { name: 'any' },
							},
							height: {
								defaultValue: null,
								description: '',
								name: 'height',
								required: !0,
								type: { name: 'any' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/svg/communities.tsx#Communities'
						] = {
							docgenInfo: Communities.__docgenInfo,
							name: 'Communities',
							path: 'components/common/svg/communities.tsx#Communities',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var gradebook_jsx = react.createElement,
				GradeBook = function GradeBook(_ref) {
					var width = _ref.width,
						height = _ref.height
					return gradebook_jsx(
						'svg',
						{
							width,
							height,
							viewBox: '0 0 20 20',
							fill: 'none',
							xmlns: 'http://www.w3.org/2000/svg',
						},
						gradebook_jsx('path', {
							d: 'M19.814 17.0991L15.7699 2.00649C15.6623 1.60644 15.4004 1.26543 15.0416 1.05829C14.6828 0.85116 14.2565 0.794826 13.8563 0.901657L10.8377 1.71047C10.8046 1.71935 10.7729 1.7309 10.7408 1.74176C10.5955 1.55027 10.4079 1.39496 10.1927 1.28797C9.97744 1.18098 9.74037 1.12521 9.5 1.12501H6.375C6.10046 1.12508 5.83086 1.19804 5.59375 1.33643C5.35664 1.19804 5.08704 1.12508 4.8125 1.12501H1.6875C1.27324 1.12548 0.876092 1.29025 0.583169 1.58318C0.290246 1.8761 0.125474 2.27325 0.125 2.68751V18.3125C0.125474 18.7268 0.290246 19.1239 0.583169 19.4168C0.876092 19.7098 1.27324 19.8745 1.6875 19.875H4.8125C5.08704 19.8749 5.35664 19.802 5.59375 19.6636C5.83086 19.802 6.10046 19.8749 6.375 19.875H9.5C9.91426 19.8745 10.3114 19.7098 10.6043 19.4168C10.8973 19.1239 11.062 18.7268 11.0625 18.3125V8.58622L13.7769 18.7167C13.83 18.9149 13.9215 19.1008 14.0464 19.2636C14.1713 19.4265 14.327 19.5631 14.5048 19.6658C14.6825 19.7684 14.8787 19.8349 15.0822 19.8617C15.2856 19.8884 15.4924 19.8748 15.6906 19.8216L18.7092 19.0128C19.1092 18.9051 19.4501 18.6432 19.6573 18.2844C19.8644 17.9257 19.9207 17.4994 19.814 17.0991ZM14.2606 2.41085L14.8674 4.67475L11.8488 5.48359L11.2422 3.21975L14.2606 2.41085ZM9.5 2.68751L9.50072 14.4063H6.375V2.68751H9.5ZM4.8125 2.68751V5.03126H1.6875V2.68751H4.8125ZM9.5 18.3125H6.375V15.9688H9.50081L9.50095 18.3125H9.5ZM18.3047 17.5035L15.2862 18.3123L14.6796 16.0485L17.6989 15.2394L18.3057 17.5032L18.3047 17.5035Z',
							fill: '#083755',
						})
					)
				}
			;(GradeBook.displayName = 'GradeBook'),
				(GradeBook.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'GradeBook',
				})
			try {
				;(GradeBook.displayName = 'GradeBook'),
					(GradeBook.__docgenInfo = {
						description: '',
						displayName: 'GradeBook',
						props: {
							width: {
								defaultValue: null,
								description: '',
								name: 'width',
								required: !0,
								type: { name: 'any' },
							},
							height: {
								defaultValue: null,
								description: '',
								name: 'height',
								required: !0,
								type: { name: 'any' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/svg/gradebook.tsx#GradeBook'
						] = {
							docgenInfo: GradeBook.__docgenInfo,
							name: 'GradeBook',
							path: 'components/common/svg/gradebook.tsx#GradeBook',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var index_esm = __webpack_require__(
					'./node_modules/react-icons/io/index.esm.js'
				),
				collapse_button_jsx = react.createElement,
				CollapseButton = function CollapseButton(_ref) {
					var open = _ref.open
					return collapse_button_jsx(
						'button',
						{
							className:
								'p-2 rounded-md text-red border bg-royalblue',
						},
						collapse_button_jsx(
							open ? index_esm.u1R : index_esm.hjJ,
							{ color: 'white' }
						)
					)
				}
			;(CollapseButton.displayName = 'CollapseButton'),
				(CollapseButton.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'CollapseButton',
				})
			try {
				;(CollapseButton.displayName = 'CollapseButton'),
					(CollapseButton.__docgenInfo = {
						description: '',
						displayName: 'CollapseButton',
						props: {
							open: {
								defaultValue: null,
								description: '',
								name: 'open',
								required: !0,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/pages/sidebar/collapse_button/collapse_button.tsx#CollapseButton'
						] = {
							docgenInfo: CollapseButton.__docgenInfo,
							name: 'CollapseButton',
							path: 'components/common/pages/sidebar/collapse_button/collapse_button.tsx#CollapseButton',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var sidebar_jsx = react.createElement,
				Sidebar = function Sidebar(_ref) {
					var userSession = _ref.userSession,
						open = (_ref.isLoading, _ref.open),
						handle = _ref.handle
					return sidebar_jsx(
						'div',
						{
							className:
								'border-r-[1px] border-r-wgray-500 relative',
						},
						sidebar_jsx(
							'div',
							{ className: 'pt-12' },
							sidebar_jsx(sidebar_item.R, {
								svgIcon: sidebar_jsx(PlanOfStudy, {
									width: 20,
									height: 20,
								}),
								collapsed: !open,
								value: 'PLAN OF STUDY',
								href: '/plan/'.concat(userSession.openId),
							}),
							sidebar_jsx(sidebar_item.R, {
								svgIcon: sidebar_jsx(Modules, {
									width: 20,
									height: 20,
								}),
								collapsed: !open,
								value: 'MODULES',
								href: '/modules',
							}),
							sidebar_jsx(sidebar_item.R, {
								svgIcon: sidebar_jsx(Communities, {
									width: 20,
									height: 20,
								}),
								collapsed: !open,
								value: 'COMMUNITIES',
								href: '/communities',
							}),
							sidebar_jsx(sidebar_item.R, {
								svgIcon: sidebar_jsx(GradeBook, {
									width: 20,
									height: 20,
								}),
								collapsed: !open,
								value: 'GRADES',
								href: '/grades',
							})
						),
						sidebar_jsx(
							'div',
							{
								className: 'absolute -right-4 bottom-8',
								onClick: function onClick() {
									return handle(!open)
								},
							},
							sidebar_jsx(CollapseButton, { open })
						)
					)
				}
			;(Sidebar.displayName = 'Sidebar'),
				(Sidebar.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Sidebar',
				})
			try {
				;(Sidebar.displayName = 'Sidebar'),
					(Sidebar.__docgenInfo = {
						description: '',
						displayName: 'Sidebar',
						props: {
							userSession: {
								defaultValue: null,
								description: '',
								name: 'userSession',
								required: !0,
								type: { name: 'any' },
							},
							isLoading: {
								defaultValue: null,
								description: '',
								name: 'isLoading',
								required: !0,
								type: { name: 'boolean' },
							},
							svgIcon: {
								defaultValue: null,
								description: '',
								name: 'svgIcon',
								required: !0,
								type: { name: 'ReactNode' },
							},
							icon: {
								defaultValue: null,
								description: '',
								name: 'icon',
								required: !0,
								type: { name: 'string' },
							},
							open: {
								defaultValue: null,
								description: '',
								name: 'open',
								required: !0,
								type: { name: 'boolean' },
							},
							handle: {
								defaultValue: null,
								description: '',
								name: 'handle',
								required: !0,
								type: { name: '(open: boolean) => void' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/pages/sidebar/sidebar.tsx#Sidebar'
						] = {
							docgenInfo: Sidebar.__docgenInfo,
							name: 'Sidebar',
							path: 'components/common/pages/sidebar/sidebar.tsx#Sidebar',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/pages/sidebar/sidebar_item/sidebar_item.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { R: () => SidebarItem })
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
				SidebarItem = function SidebarItem(_ref) {
					var value = _ref.value,
						href = _ref.href,
						svgIcon = _ref.svgIcon,
						collapsed = _ref.collapsed
					return __jsx(
						next_link__WEBPACK_IMPORTED_MODULE_1___default(),
						{ href, passHref: !0 },
						__jsx(
							'div',
							{
								className:
									'hover:bg-wgray h-[48px] min-w-[48px] flex items-center cursor-pointer',
								title: value,
							},
							__jsx(
								'span',
								{
									className:
										'flex items-center w-full gap-2 p-4 sans',
								},
								svgIcon,
								collapsed
									? null
									: __jsx(
											'p',
											{ className: 'm-0 p-0' },
											value
									  )
							)
						)
					)
				}
			;(SidebarItem.displayName = 'SidebarItem'),
				(SidebarItem.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'SidebarItem',
				})
			try {
				;(SidebarItem.displayName = 'SidebarItem'),
					(SidebarItem.__docgenInfo = {
						description: '',
						displayName: 'SidebarItem',
						props: {
							value: {
								defaultValue: null,
								description: '',
								name: 'value',
								required: !0,
								type: { name: 'string' },
							},
							href: {
								defaultValue: null,
								description: '',
								name: 'href',
								required: !0,
								type: { name: 'string' },
							},
							svgIcon: {
								defaultValue: null,
								description: '',
								name: 'svgIcon',
								required: !0,
								type: { name: 'ReactNode' },
							},
							icon: {
								defaultValue: null,
								description: '',
								name: 'icon',
								required: !0,
								type: { name: 'string' },
							},
							collapsed: {
								defaultValue: null,
								description: '',
								name: 'collapsed',
								required: !0,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/pages/sidebar/sidebar_item/sidebar_item.tsx#SidebarItem'
						] = {
							docgenInfo: SidebarItem.__docgenInfo,
							name: 'SidebarItem',
							path: 'components/common/pages/sidebar/sidebar_item/sidebar_item.tsx#SidebarItem',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/pages/sidebar/leftsidebar.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
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
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
					),
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/extends.js'
					),
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/common/pages/sidebar/sidebar.tsx'
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
						? ownKeys(Object(source), !0).forEach(function (key) {
								;(0,
								_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target, key, source[key])
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Common/Pages/Layouts/Left Sidebar',
				component: _sidebar__WEBPACK_IMPORTED_MODULE_2__.Y,
			}
			var Template = function Template(args) {
				var _React$useState =
						react__WEBPACK_IMPORTED_MODULE_0__.useState(!0),
					_React$useState2 = (0,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
						_React$useState,
						2
					),
					open = _React$useState2[0],
					setOpen = _React$useState2[1]
				return __jsx(
					'div',
					{
						className:
							'overflow-x-hidden max-w-screen relative min-h-screen',
					},
					__jsx(
						_sidebar__WEBPACK_IMPORTED_MODULE_2__.Y,
						(0,
						_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
							{},
							args,
							{ handle: setOpen, open }
						)
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {
				icon: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
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
											'args => {\n  const [open, setOpen] = React.useState(true);\n  return <div className="overflow-x-hidden max-w-screen relative min-h-screen">\n            <Sidebar {...args} handle={setOpen} open={open} />\n        </div>;\n}',
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
	},
])
