'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[818],
	{
		'./components/common/admin_panel/content_area.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { v: () => ContentArea })
			var _Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js',
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				react_dropzone__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./node_modules/react-dropzone/dist/es/index.js',
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				ContentArea = function ContentArea(_ref) {
					;(0,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
						_ref,
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
								' bytes',
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
											}),
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
												'Click to upload',
											),
											' ',
											'or drag and drop',
										),
									),
									__jsx('input', {
										id: 'dropzone-file',
										type: 'file',
										className: 'hidden',
									}),
								),
							),
						),
						__jsx(
							'aside',
							null,
							__jsx('h4', null, 'Uploaded Files:'),
							__jsx('ul', null, files),
						),
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
		'./components/common/button/button.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { z: () => Button })
			var _instructure_ui__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@instructure/ui-buttons/es/Button/index.js',
					),
				prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/prop-types/index.js',
				),
				__jsx = __webpack_require__(
					'./node_modules/react/index.js',
				).createElement,
				Button = function Button(_ref) {
					var _ref$variant = _ref.variant,
						variant =
							void 0 === _ref$variant ? 'primary' : _ref$variant,
						_ref$size = _ref.size,
						size = void 0 === _ref$size ? 'medium' : _ref$size,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						children = _ref.children,
						onClick = _ref.onClick
					return __jsx(
						_instructure_ui__WEBPACK_IMPORTED_MODULE_1__.z,
						{
							color: variant,
							disabled,
							onClick,
							margin: 'small',
							size,
						},
						children,
					)
				}
			;(Button.displayName = 'Button'),
				(Button.propTypes = {
					variant: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([
						'primary',
						'secondary',
					]),
					size: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([
						'small',
						'medium',
						'large',
					]),
					children: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType(
						[
							prop_types__WEBPACK_IMPORTED_MODULE_2__.node,
							prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
							prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
						],
					),
					onClick: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
					disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
				}),
				(Button.defaultProps = {
					variant: 'primary',
					size: 'medium',
					onClick: void 0,
					children: 'Click Here',
					disabled: !1,
					type: 'button',
				}),
				(Button.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Button',
					props: {
						variant: {
							defaultValue: { value: "'primary'", computed: !1 },
							required: !1,
							tsType: {
								name: 'union',
								raw: "'primary' | 'secondary'",
								elements: [
									{ name: 'literal', value: "'primary'" },
									{ name: 'literal', value: "'secondary'" },
								],
							},
							description:
								'A boolean that determines whether the button is the principal call/action on the page',
							type: {
								name: 'enum',
								value: [
									{ value: "'primary'", computed: !1 },
									{ value: "'secondary'", computed: !1 },
								],
							},
						},
						size: {
							defaultValue: { value: "'medium'", computed: !1 },
							required: !1,
							tsType: {
								name: 'union',
								raw: "'small' | 'medium' | 'large'",
								elements: [
									{ name: 'literal', value: "'small'" },
									{ name: 'literal', value: "'medium'" },
									{ name: 'literal', value: "'large'" },
								],
							},
							description:
								"An enum that defines the button's size",
							type: {
								name: 'enum',
								value: [
									{ value: "'small'", computed: !1 },
									{ value: "'medium'", computed: !1 },
									{ value: "'large'", computed: !1 },
								],
							},
						},
						disabled: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
							tsType: { name: 'boolean' },
							description:
								'A boolean that determines whether the button representing a disabled state',
							type: { name: 'bool' },
						},
						onClick: {
							defaultValue: { value: 'undefined', computed: !0 },
							required: !1,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '() => void',
								signature: {
									arguments: [],
									return: { name: 'void' },
								},
							},
							description:
								"A onclick event that executes a JavaScript's function when the button gets clicked",
							type: { name: 'func' },
						},
						children: {
							defaultValue: {
								value: "'Click Here'",
								computed: !1,
							},
							required: !1,
							tsType: {
								name: 'union',
								raw: 'React.ReactNode | string | number',
								elements: [
									{
										name: 'ReactReactNode',
										raw: 'React.ReactNode',
									},
									{ name: 'string' },
									{ name: 'number' },
								],
							},
							description:
								'The JSX contnet to be displayed within the button',
							type: {
								name: 'union',
								value: [
									{ name: 'node' },
									{ name: 'string' },
									{ name: 'number' },
								],
							},
						},
						type: {
							defaultValue: { value: "'button'", computed: !1 },
							required: !1,
							tsType: {
								name: 'union',
								raw: "'button' | 'submit' | 'reset'",
								elements: [
									{ name: 'literal', value: "'button'" },
									{ name: 'literal', value: "'submit'" },
									{ name: 'literal', value: "'reset'" },
								],
							},
							description:
								"An enum that defines the button's type",
						},
						className: {
							required: !1,
							tsType: { name: 'string' },
							description:
								"Indicates the className - based on selection of a property named 'size', className is atlered",
						},
					},
				})
			try {
				;(Button.displayName = 'Button'),
					(Button.__docgenInfo = {
						description: '',
						displayName: 'Button',
						props: {
							variant: {
								defaultValue: { value: 'primary' },
								description:
									'A boolean that determines whether the button is the principal call/action on the page',
								name: 'variant',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"primary"' },
										{ value: '"secondary"' },
									],
								},
							},
							size: {
								defaultValue: { value: 'medium' },
								description:
									"An enum that defines the button's size",
								name: 'size',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"small"' },
										{ value: '"large"' },
										{ value: '"medium"' },
									],
								},
							},
							type: {
								defaultValue: { value: 'button' },
								description:
									"An enum that defines the button's type",
								name: 'type',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"button"' },
										{ value: '"submit"' },
										{ value: '"reset"' },
									],
								},
							},
							children: {
								defaultValue: { value: 'Click Here' },
								description:
									'The JSX contnet to be displayed within the button',
								name: 'children',
								required: !1,
								type: { name: 'ReactNode' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'A boolean that determines whether the button representing a disabled state',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							onClick: {
								defaultValue: { value: 'undefined' },
								description:
									"A onclick event that executes a JavaScript's function when the button gets clicked",
								name: 'onClick',
								required: !1,
								type: { name: '() => void' },
							},
							className: {
								defaultValue: null,
								description:
									"Indicates the className - based on selection of a property named 'size', className is atlered",
								name: 'className',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/button/button.tsx#Button'
						] = {
							docgenInfo: Button.__docgenInfo,
							name: 'Button',
							path: 'components/common/button/button.tsx#Button',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/forms/inputs/select/select.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { P: () => Select })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				Select = function Select(_ref) {
					var options = _ref.options,
						_ref$handle = _ref.handle,
						handle =
							void 0 === _ref$handle
								? function () {
										return null
								  }
								: _ref$handle,
						label = _ref.label,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						_ref$required = _ref.required,
						required = void 0 !== _ref$required && _ref$required,
						name = _ref.name,
						id = _ref.id,
						_ref$multiple = _ref.multiple,
						multiple = void 0 !== _ref$multiple && _ref$multiple,
						_ref$size = _ref.size,
						size = void 0 === _ref$size ? 1 : _ref$size,
						_ref$autoFocus = _ref.autoFocus,
						autoFocus = void 0 !== _ref$autoFocus && _ref$autoFocus
					return __jsx(
						'label',
						{
							className:
								'items-center flex gap-1 mb-2 text-l font-medium text-gray-900',
						},
						label && label,
						__jsx(
							'select',
							{
								className:
									'bg-gray-50 text-gray-900 text-sm w-28 w-fit py-3 border-0 focus:ring-0 ml-1 focus:outline-dashed focus:outline-blue-500 '.concat(
										disabled ? 'cursor-not-allowed' : '',
									),
								onChange: handle,
								disabled,
								required,
								name,
								id,
								multiple,
								size,
								autoFocus,
							},
							options &&
								options.map(function (option, optionIndex) {
									return __jsx(
										'option',
										{
											key: optionIndex,
											value:
												'string' == typeof option
													? option
													: option.value,
											selected:
												'string' != typeof option &&
												option.selected,
											disabled:
												'string' != typeof option &&
												option.disabled,
										},
										'string' == typeof option
											? option
											: __jsx(
													react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
													null,
													option.icon && option.icon,
													option.label,
											  ),
									)
								}),
						),
					)
				}
			;(Select.displayName = 'Select'),
				(Select.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Select',
					props: {
						handle: {
							defaultValue: { value: '() => null', computed: !1 },
							required: !1,
						},
						disabled: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						required: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						multiple: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						size: {
							defaultValue: { value: '1', computed: !1 },
							required: !1,
						},
						autoFocus: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
					},
				})
			try {
				;(Select.displayName = 'Select'),
					(Select.__docgenInfo = {
						description: '',
						displayName: 'Select',
						props: {
							options: {
								defaultValue: null,
								description:
									'The options to be displayed in the dropdown',
								name: 'options',
								required: !0,
								type: { name: 'string[] | dropdownOption[]' },
							},
							handle: {
								defaultValue: { value: '() => null' },
								description:
									'The function to be called when the select value changes\n@param event\n@returns void',
								name: 'handle',
								required: !1,
								type: {
									name: '(event: ChangeEvent<HTMLSelectElement>) => void',
								},
							},
							label: {
								defaultValue: null,
								description:
									'The displayed label for the dropdown',
								name: 'label',
								required: !1,
								type: { name: 'string' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that a drop-down list should be disabled',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							required: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that the user is required to select a value before submitting the form',
								name: 'required',
								required: !1,
								type: { name: 'boolean' },
							},
							name: {
								defaultValue: null,
								description:
									'The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).',
								name: 'name',
								required: !1,
								type: { name: 'string' },
							},
							id: {
								defaultValue: null,
								description:
									'Specifies a unique id for the drop-down list',
								name: 'id',
								required: !1,
								type: { name: 'string' },
							},
							multiple: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that multiple options can be selected at once',
								name: 'multiple',
								required: !1,
								type: { name: 'boolean' },
							},
							size: {
								defaultValue: { value: '1' },
								description:
									'Defines the number of visible options in a drop-down list',
								name: 'size',
								required: !1,
								type: { name: 'number' },
							},
							autoFocus: {
								defaultValue: { value: 'false' },
								description:
									'Specifies that the drop-down list should automatically get focus when the page loads',
								name: 'autoFocus',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/inputs/select/select.tsx#Select'
						] = {
							docgenInfo: Select.__docgenInfo,
							name: 'Select',
							path: 'components/common/forms/inputs/select/select.tsx#Select',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/pages/admin_panel_page/lesson_page/lessonpage.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Primary: () => Primary,
						default: () => lessonpage_stories,
					})
				var _Primary$parameters,
					_Primary$parameters2,
					_Primary$parameters2$,
					defineProperty = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
					),
					react = __webpack_require__(
						'./node_modules/react/index.js',
					),
					select_select = __webpack_require__(
						'./components/common/forms/inputs/select/select.tsx',
					),
					content_area = __webpack_require__(
						'./components/common/admin_panel/content_area.tsx',
					),
					button_button = __webpack_require__(
						'./components/common/button/button.tsx',
					),
					__jsx = react.createElement,
					Lessonpage = function Lessonpage(_ref) {
						var lessonName = _ref.lessonName,
							sectionNumber = _ref.sectionNumber
						return __jsx(
							react.Fragment,
							null,
							__jsx(
								'div',
								null,
								__jsx(
									'p',
									{
										className:
											' text-xl font-bold leading-7 text-gray-900 sm:truncate  sm:tracking-tight',
									},
									' ',
									'Section ',
									sectionNumber,
									' : ',
									lessonName,
									' ',
								),
							),
							__jsx(
								'div',
								null,
								__jsx(select_select.P, {
									handle: function handle() {},
									id: 'sort-input',
									label: 'Content Type',
									name: 'sort',
									options: [
										{ label: 'Quiz', value: 'quiz' },
										{ label: 'Pdf', value: 'pdf' },
										{ label: 'Video', value: 'video' },
									],
									size: 1,
								}),
							),
							__jsx(
								'div',
								{ className: 'content-area' },
								__jsx(content_area.v, null),
							),
							__jsx(
								'div',
								{ className: 'flex flex-row justify-end' },
								__jsx(
									button_button.z,
									{ size: 'small', className: 'mx-2' },
									__jsx('p', null, 'Confirm'),
								),
								__jsx(
									button_button.z,
									{ size: 'small', className: 'mx-2' },
									__jsx('p', null, 'Cancel'),
								),
							),
						)
					}
				Lessonpage.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'Lessonpage',
				}
				try {
					;(Lessonpage.displayName = 'Lessonpage'),
						(Lessonpage.__docgenInfo = {
							description: '',
							displayName: 'Lessonpage',
							props: {
								lessonName: {
									defaultValue: null,
									description:
										'A descriptive label for the title',
									name: 'lessonName',
									required: !0,
									type: { name: 'string' },
								},
								sectionNumber: {
									defaultValue: null,
									description:
										'A descriptive section number for the title',
									name: 'sectionNumber',
									required: !0,
									type: { name: 'number' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/pages/admin_panel_page/lesson_page/lessonpage.tsx#Lessonpage'
							] = {
								docgenInfo: Lessonpage.__docgenInfo,
								name: 'Lessonpage',
								path: 'components/pages/admin_panel_page/lesson_page/lessonpage.tsx#Lessonpage',
							})
				} catch (__react_docgen_typescript_loader_error) {}
				var lessonpage_stories_jsx = react.createElement
				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object)
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object)
						enumerableOnly &&
							(symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(
									object,
									sym,
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
							? ownKeys(Object(source), !0).forEach(
									function (key) {
										;(0, defineProperty.Z)(
											target,
											key,
											source[key],
										)
									},
							  )
							: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									target,
									Object.getOwnPropertyDescriptors(source),
							  )
							: ownKeys(Object(source)).forEach(function (key) {
									Object.defineProperty(
										target,
										key,
										Object.getOwnPropertyDescriptor(
											source,
											key,
										),
									)
							  })
					}
					return target
				}
				const lessonpage_stories = {
					title: 'Pages/Admin Panel/Lesson Page',
					component: Lessonpage,
					argTypes: {},
				}
				var Template = function Template(args) {
					return lessonpage_stories_jsx(Lessonpage, args)
				}
				Template.displayName = 'Template'
				var Primary = Template.bind({})
				;(Primary.storyName = 'Default'),
					(Primary.args = {
						lessonName: 'name of the lesson',
						sectionNumber: 1,
					}),
					(Primary.parameters = _objectSpread(
						_objectSpread({}, Primary.parameters),
						{},
						{
							docs: _objectSpread(
								_objectSpread(
									{},
									null ===
										(_Primary$parameters =
											Primary.parameters) ||
										void 0 === _Primary$parameters
										? void 0
										: _Primary$parameters.docs,
								),
								{},
								{
									source: _objectSpread(
										{
											originalSource:
												'(args: lessonpageProps) => <Lessonpage {...args} />',
										},
										null ===
											(_Primary$parameters2 =
												Primary.parameters) ||
											void 0 === _Primary$parameters2 ||
											null ===
												(_Primary$parameters2$ =
													_Primary$parameters2.docs) ||
											void 0 === _Primary$parameters2$
											? void 0
											: _Primary$parameters2$.source,
									),
								},
							),
						},
					))
			},
	},
])
