'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[1458],
	{
		'./components/common/admin_panel/content_area.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { v: () => ContentArea })
			var _Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				react_dropzone__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./node_modules/react-dropzone/dist/es/index.js'
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				ContentArea = function ContentArea(_ref) {
					;(0,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
						_ref
					)
					var _useDropzone = (0,
						react_dropzone__WEBPACK_IMPORTED_MODULE_2__.uI)(),
						acceptedFiles = _useDropzone.acceptedFiles,
						getRootProps = _useDropzone.getRootProps,
						getInputProps = _useDropzone.getInputProps,
						files = acceptedFiles.map(function (file) {
							return __jsx(
								'li',
								{ key: file.path },
								file.path,
								' - ',
								file.size,
								' bytes'
							)
						})
					return __jsx(
						'section',
						{ className: 'container' },
						__jsx(
							'div',
							getRootProps({ className: 'dropzone' }),
							__jsx('input', getInputProps()),
							__jsx(
								'div',
								{
									className:
										'flex items-center justify-center w-auto',
								},
								__jsx(
									'label',
									{
										htmlFor: 'dropzone-file',
										className:
											'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600',
									},
									__jsx(
										'div',
										{
											className:
												'flex flex-col items-center justify-center pt-5 pb-6',
										},
										__jsx(
											'svg',
											{
												'aria-hidden': 'true',
												className:
													'w-full h-full mb-3 text-gray-400',
												fill: 'none',
												stroke: 'currentColor',
												viewBox: '0 0 24 24',
												xmlns: 'http://www.w3.org/2000/svg',
											},
											__jsx('path', {
												'stroke-linecap': 'round',
												'stroke-linejoin': 'round',
												'stroke-width': '2',
												d: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
											})
										),
										__jsx(
											'p',
											{
												className:
													'mb-2 text-xl text-gray-500 dark:text-gray-400',
											},
											__jsx(
												'span',
												{ className: 'font-semibold' },
												'Click to upload'
											),
											' ',
											'or drag and drop'
										)
									),
									__jsx('input', {
										id: 'dropzone-file',
										type: 'file',
										className: 'hidden',
									})
								)
							)
						),
						__jsx(
							'aside',
							null,
							__jsx('h4', null, 'Uploaded Files:'),
							__jsx('ul', null, files)
						)
					)
				}
			;(ContentArea.displayName = 'ContentArea'),
				(ContentArea.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'ContentArea',
				})
			try {
				;(ContentArea.displayName = 'ContentArea'),
					(ContentArea.__docgenInfo = {
						description: '',
						displayName: 'ContentArea',
						props: {
							useDropzone: {
								defaultValue: null,
								description:
									"useDropzone hook just binds the necessary handlers to create a drag 'n' drop zone",
								name: 'useDropzone',
								required: !1,
								type: { name: 'string' },
							},
							getRootProps: {
								defaultValue: null,
								description:
									"the getRootProps() fn to get the props required for drag 'n' drop and use them on any element.",
								name: 'getRootProps',
								required: !1,
								type: { name: 'Function' },
							},
							getInputProps: {
								defaultValue: null,
								description:
									'the getInputProps() fn is used for click and keydown behavior',
								name: 'getInputProps',
								required: !1,
								type: { name: 'Function' },
							},
							acceptedFiles: {
								defaultValue: null,
								description:
									'the acceptedFiles() fn is used for track and map the uploaded files to the list',
								name: 'acceptedFiles',
								required: !1,
								type: { name: 'Function' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/admin_panel/content_area.tsx#ContentArea'
						] = {
							docgenInfo: ContentArea.__docgenInfo,
							name: 'ContentArea',
							path: 'components/common/admin_panel/content_area.tsx#ContentArea',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/admin_panel/content_area.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Standard: () => Standard,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			var _Standard$parameters,
				_Standard$parameters2,
				_Standard$parameters3,
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				_content_area__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./components/common/admin_panel/content_area.tsx'
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
				title: 'Common/Admin Panel/Content Area',
				component: _content_area__WEBPACK_IMPORTED_MODULE_2__.v,
				argTypes: {},
			}
			var Template = function Template(args) {
				return __jsx(_content_area__WEBPACK_IMPORTED_MODULE_2__.v, args)
			}
			Template.displayName = 'Template'
			var Standard = Template.bind({})
			;(Standard.storyName = 'Upload'),
				(Standard.args = {}),
				(Standard.parameters = _objectSpread(
					_objectSpread({}, Standard.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Standard$parameters =
										Standard.parameters) ||
									void 0 === _Standard$parameters
									? void 0
									: _Standard$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'args => <ContentArea {...args} />',
									},
									null ===
										(_Standard$parameters2 =
											Standard.parameters) ||
										void 0 === _Standard$parameters2 ||
										null ===
											(_Standard$parameters3 =
												_Standard$parameters2.docs) ||
										void 0 === _Standard$parameters3
										? void 0
										: _Standard$parameters3.source
								),
							}
						),
					}
				))
		},
	},
])
