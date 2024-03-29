'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[1478],
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
		'./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				Z: () => _toConsumableArray,
			})
			var arrayLikeToArray = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js',
			)
			var unsupportedIterableToArray = __webpack_require__(
				'./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js',
			)
			function _toConsumableArray(arr) {
				return (
					(function _arrayWithoutHoles(arr) {
						if (Array.isArray(arr))
							return (0, arrayLikeToArray.Z)(arr)
					})(arr) ||
					(function _iterableToArray(iter) {
						if (
							('undefined' != typeof Symbol &&
								null != iter[Symbol.iterator]) ||
							null != iter['@@iterator']
						)
							return Array.from(iter)
					})(arr) ||
					(0, unsupportedIterableToArray.Z)(arr) ||
					(function _nonIterableSpread() {
						throw new TypeError(
							'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					})()
				)
			}
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
		'./components/common/forms/inputs/text_area/text_area.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { K: () => TextArea })
			var react = __webpack_require__('./node_modules/react/index.js')
			const use_autosize_text_area = function useAutosizeTextArea(
				textAreaRef,
				value,
			) {
				;(0, react.useEffect)(
					function () {
						if (textAreaRef) {
							textAreaRef.style.height = '0px'
							var scrollHeight = textAreaRef.scrollHeight
							textAreaRef.style.height = scrollHeight + 'px'
						}
					},
					[textAreaRef, value],
				)
			}
			var __jsx = react.createElement,
				TextArea = function TextArea(_ref) {
					var _ref$handle = _ref.handle,
						handle =
							void 0 === _ref$handle
								? function () {
										return null
								  }
								: _ref$handle,
						_ref$value = _ref.value,
						value = void 0 === _ref$value ? '' : _ref$value,
						_ref$id = _ref.id,
						id = void 0 === _ref$id ? 'text-area' : _ref$id,
						_ref$role = _ref.role,
						role = void 0 === _ref$role ? 'textbox' : _ref$role,
						_ref$name = _ref.name,
						name = void 0 === _ref$name ? 'text-area' : _ref$name,
						_ref$rows = _ref.rows,
						rows = void 0 === _ref$rows ? 2 : _ref$rows,
						_ref$placeholder = _ref.placeholder,
						placeholder =
							void 0 === _ref$placeholder ? '' : _ref$placeholder,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						_ref$maxLength = _ref.maxLength,
						maxLength =
							void 0 === _ref$maxLength ? 1e3 : _ref$maxLength,
						_ref$required = _ref.required,
						required = void 0 !== _ref$required && _ref$required,
						_ref$readOnly = _ref.readOnly,
						readOnly = void 0 !== _ref$readOnly && _ref$readOnly,
						_ref$wrap = _ref.wrap,
						wrap = void 0 === _ref$wrap ? 'soft' : _ref$wrap,
						_ref$autofocus = _ref.autofocus,
						autofocus = void 0 !== _ref$autofocus && _ref$autofocus,
						_ref$label = _ref.label,
						label = void 0 === _ref$label ? '' : _ref$label,
						_ref$defaultValue = (_ref.onChange, _ref.defaultValue),
						defaultValue =
							void 0 === _ref$defaultValue
								? ''
								: _ref$defaultValue,
						_ref$className = _ref.className,
						className =
							void 0 === _ref$className ? '' : _ref$className,
						_ref$icon = _ref.icon,
						icon = void 0 === _ref$icon || _ref$icon,
						textAreaRef = (0, react.useRef)(null)
					use_autosize_text_area(textAreaRef.current, value)
					var classes = [
						className,
						'w-full bg-white placeholder:italic border border-2 border-wgray shadow-md focus:outline-none focus:ring-0 peer rounded-sm py-2 pl-3 pr-10 disabled:opacity-50 disabled:cursor-not-allowed',
						value.length === maxLength
							? 'border-red-400 focus:border-red-500 hover:border-red-400'
							: 'focus:border-royalblue',
						disabled || value.length === maxLength
							? ''
							: 'hover:border-royalblue',
					].join(' ')
					return __jsx(
						'div',
						null,
						__jsx(
							'label',
							{ htmlFor: id, className: '' },
							label && __jsx('h2', null, label.toUpperCase()),
							__jsx(
								'div',
								{ className: 'relative' },
								__jsx('textarea', {
									id,
									defaultValue,
									onChange: handle,
									ref: textAreaRef,
									rows,
									name,
									role,
									placeholder,
									disabled,
									maxLength,
									required,
									readOnly,
									wrap,
									autoFocus: autofocus,
									className: classes,
								}),
								icon &&
									__jsx('span', {
										className:
											'absolute right-2 bottom-2 flex items-center '.concat(
												disabled ? 'opacity-50' : '',
											),
									}),
							),
							value.length === maxLength &&
								__jsx(
									'span',
									{
										className:
											'text-xs px-2 bg-gray-100 ml-auto mr-0 block w-fit',
									},
									'Maximum characters: ',
									maxLength,
								),
						),
					)
				}
			;(TextArea.displayName = 'TextArea'),
				(TextArea.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'TextArea',
					props: {
						handle: {
							defaultValue: { value: '() => null', computed: !1 },
							required: !1,
						},
						value: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						id: {
							defaultValue: {
								value: "'text-area'",
								computed: !1,
							},
							required: !1,
						},
						role: {
							defaultValue: { value: "'textbox'", computed: !1 },
							required: !1,
						},
						name: {
							defaultValue: {
								value: "'text-area'",
								computed: !1,
							},
							required: !1,
						},
						rows: {
							defaultValue: { value: '2', computed: !1 },
							required: !1,
						},
						placeholder: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						disabled: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						maxLength: {
							defaultValue: { value: '1000', computed: !1 },
							required: !1,
						},
						required: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						readOnly: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						wrap: {
							defaultValue: { value: "'soft'", computed: !1 },
							required: !1,
						},
						autofocus: {
							defaultValue: { value: 'false', computed: !1 },
							required: !1,
						},
						label: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						defaultValue: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						className: {
							defaultValue: { value: "''", computed: !1 },
							required: !1,
						},
						icon: {
							defaultValue: { value: 'true', computed: !1 },
							required: !1,
						},
					},
				})
			try {
				;(TextArea.displayName = 'TextArea'),
					(TextArea.__docgenInfo = {
						description: '',
						displayName: 'TextArea',
						props: {
							handle: {
								defaultValue: { value: '() => null' },
								description:
									'A event handler that changes the value of the text area element',
								name: 'handle',
								required: !1,
								type: {
									name: '(evt: ChangeEvent<HTMLTextAreaElement>) => void',
								},
							},
							value: {
								defaultValue: { value: '' },
								description:
									'A default string value which will be displayed in the element on page load',
								name: 'value',
								required: !1,
								type: { name: 'string' },
							},
							id: {
								defaultValue: { value: 'text-area' },
								description:
									'A string defines an identifier which must be unique in the whole document',
								name: 'id',
								required: !1,
								type: { name: 'string' },
							},
							role: {
								defaultValue: { value: 'textbox' },
								description:
									'A string defines an explicit role for the text area element for use by assistive technologies',
								name: 'role',
								required: !1,
								type: { name: 'string' },
							},
							name: {
								defaultValue: { value: 'text-area' },
								description:
									'A string defines the name of the text area element',
								name: 'name',
								required: !1,
								type: { name: 'string' },
							},
							rows: {
								defaultValue: { value: '2' },
								description:
									'A number defines the number of rows in a text area',
								name: 'rows',
								required: !1,
								type: { name: 'number' },
							},
							placeholder: {
								defaultValue: { value: '' },
								description:
									'A string that provides a hint to the user of what can be entered in the text field',
								name: 'placeholder',
								required: !1,
								type: { name: 'string' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'A boolean makes the text area not mutable, focusable, or even submitted with the form',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							maxLength: {
								defaultValue: { value: '1000' },
								description:
									'A number determines the maximum characters allowed for user input inside the text area',
								name: 'maxLength',
								required: !1,
								type: { name: 'number' },
							},
							required: {
								defaultValue: { value: 'false' },
								description:
									'A boolean indicates that the user must specify a value for the input before the owning form can be submitted',
								name: 'required',
								required: !1,
								type: { name: 'boolean' },
							},
							readOnly: {
								defaultValue: { value: 'false' },
								description:
									'A Boolean makes the element not mutable, meaning the user can not edit the control',
								name: 'readOnly',
								required: !1,
								type: { name: 'boolean' },
							},
							wrap: {
								defaultValue: { value: 'soft' },
								description:
									'An enum that specifies how the text in a text area is to be wrapped when submitted in a form',
								name: 'wrap',
								required: !1,
								type: {
									name: 'enum',
									value: [
										{ value: '"soft"' },
										{ value: '"hard"' },
									],
								},
							},
							autofocus: {
								defaultValue: { value: 'false' },
								description:
									'A boolean that determines whether the text area element should be focused on page load',
								name: 'autofocus',
								required: !1,
								type: { name: 'boolean' },
							},
							label: {
								defaultValue: { value: '' },
								description:
									'A string that represents a caption for the text area',
								name: 'label',
								required: !1,
								type: { name: 'string' },
							},
							defaultValue: {
								defaultValue: { value: '' },
								description:
									'A string that represents a default value for the text area',
								name: 'defaultValue',
								required: !1,
								type: { name: 'string' },
							},
							className: {
								defaultValue: { value: '' },
								description:
									'A string that represents a class name for the text area',
								name: 'className',
								required: !1,
								type: { name: 'string' },
							},
							icon: {
								defaultValue: { value: 'true' },
								description:
									'A boolean that determines whether the text area should have an icon inside of it or not shown at all',
								name: 'icon',
								required: !1,
								type: { name: 'boolean' },
							},
							onChange: {
								defaultValue: null,
								description:
									'The on Change event handler for the input. This is used to update the value of the input.\n@param value The value of the input event for the textarea.',
								name: 'onChange',
								required: !0,
								type: { name: '(e: string) => void' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/inputs/text_area/text_area.tsx#TextArea'
						] = {
							docgenInfo: TextArea.__docgenInfo,
							name: 'TextArea',
							path: 'components/common/forms/inputs/text_area/text_area.tsx#TextArea',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/pages/communities/ThreadCreation/thread_page.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__,
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Primary: () => Primary,
						default: () => thread_page_stories,
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
					toConsumableArray = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
					),
					button_button = __webpack_require__(
						'./components/common/button/button.tsx',
					),
					text_area = __webpack_require__(
						'./components/common/forms/inputs/text_area/text_area.tsx',
					),
					index_esm = __webpack_require__(
						'./node_modules/react-icons/md/index.esm.js',
					),
					__jsx = react.createElement,
					ThreadCreation = function ThreadCreation() {
						var _useState = (0, react.useState)([]),
							tags = _useState[0],
							setTags = _useState[1],
							_useState2 = (0, react.useState)(''),
							newTag = _useState2[0],
							setNewTag = _useState2[1]
						return __jsx(
							'div',
							null,
							__jsx('h1', { className: 'mb-6' }, 'Create Thread'),
							__jsx(
								'div',
								{ className: '' },
								__jsx(
									'h3',
									{
										className: 'leading-4',
										style: {
											fontWeight: 400,
											fontSize: '20px',
										},
									},
									'Title',
								),
								__jsx('input', {
									type: 'text',
									className:
										'block min-h-[auto] w-full rounded border border-gray-200 ',
									id: 'searchRequirements',
									placeholder:
										'E.G., What is Systems Engineering to you?',
								}),
							),
							__jsx(
								'div',
								{ className: 'my-7' },
								__jsx(
									'h3',
									{
										className: 'mb-0',
										style: {
											fontWeight: 400,
											fontSize: '20px',
										},
									},
									'Tags',
								),
								__jsx(
									'label',
									{
										className: 'sans',
										style: {
											fontSize: '12px',
											fontWeight: 400,
										},
									},
									'Add up to 5 tags to describe what your thread is about.',
								),
								__jsx(
									'div',
									{
										className:
											'flex flex-wrap gap-2 p-1 bg-gray-100 rounded-sm',
									},
									tags.map(function (tag, index) {
										return __jsx(
											'div',
											{
												key: index,
												className:
													'bg-gray-300 px-2 py-1 rounded-md flex items-center',
											},
											__jsx(
												'span',
												{ className: 'mr-2 p-0 sans' },
												tag,
											),
											__jsx(
												'span',
												{
													onClick:
														function onClick() {
															return (function handleRemoveTag(
																removeTag,
															) {
																setTags(
																	tags.filter(
																		function (
																			tag,
																		) {
																			return (
																				tag !==
																				removeTag
																			)
																		},
																	),
																)
															})(tag)
														},
												},
												__jsx(index_esm.xg7, null),
											),
										)
									}),
									__jsx('input', {
										type: 'text',
										placeholder: 'Add your tags here...',
										value: newTag,
										onChange: function handleTagInput(
											event,
										) {
											setNewTag(event.target.value)
										},
										className:
											'flex-1 block min-h-[auto] w-full rounded-sm border border-gray-200',
									}),
									__jsx(
										button_button.z,
										{
											label: 'Button',
											size: 'small',
											onClick: function handleAddTag() {
												'' !== newTag.trim() &&
													(setTags(
														[].concat(
															(0,
															toConsumableArray.Z)(
																tags,
															),
															[newTag.trim()],
														),
													),
													setNewTag(''))
											},
										},
										'Add',
									),
								),
							),
							__jsx(text_area.K, {
								className:
									'w-full bg-white placeholder:italic border border-gray-100 rounded-sm py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0',
								placeholder:
									"Write your thread's content here...",
								value: '',
								rows: 4,
							}),
							__jsx(
								'div',
								{ className: 'grid justify-items-end' },
								__jsx(
									button_button.z,
									{ className: 'my-7' },
									'Publish',
								),
							),
						)
					}
				;(ThreadCreation.displayName = 'ThreadCreation'),
					(ThreadCreation.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'ThreadCreation',
					})
				var thread_page_stories_jsx = react.createElement
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
				const thread_page_stories = {
					title: 'Pages/Communities/Thread/Thread Creation',
					component: ThreadCreation,
					argTypes: {},
				}
				var Template = function Template(args) {
					return thread_page_stories_jsx(ThreadCreation, args)
				}
				Template.displayName = 'Template'
				var Primary = Template.bind({})
				;(Primary.storyName = 'Default'),
					(Primary.args = {}),
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
												'(args: ThreadCreationProps) => <ThreadCreation {...args} />',
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
		'./node_modules/react-icons/lib/esm/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
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
