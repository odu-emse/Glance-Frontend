'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[9693],
	{
		'./components/common/community/watched_threads/watched_threads.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				U: () => WatchedSidebarList,
				Y: () => WatchedThreads,
			})
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/next/link.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(
						next_link__WEBPACK_IMPORTED_MODULE_1__,
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				WatchedThreads = function WatchedThreads(_ref) {
					var threads = _ref.threads,
						_ref$title = _ref.title,
						title =
							void 0 === _ref$title
								? 'Watched Threads'
								: _ref$title
					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						__jsx(
							'h1',
							{ className: 'font-bold text-2xl py-1' },
							title,
						),
						threads.map(function (thread, threadIndex) {
							return __jsx(
								next_link__WEBPACK_IMPORTED_MODULE_1___default(),
								{
									key: threadIndex,
									href: '/communities/modules/'
										.concat(
											thread.parentLesson.collection
												.module.id,
											'/threads/',
										)
										.concat(thread.id),
									role: 'thread link',
									className:
										'text-blue-800 flex py-1 text-lg',
								},
								thread.parentLesson.collection.module.moduleName
									.length > 30
									? ''.concat(
											thread.parentLesson.collection.module.moduleName.substring(
												0,
												30,
											),
											'...',
									  )
									: thread.parentLesson.collection.module
											.moduleName,
							)
						}),
					)
				},
				WatchedSidebarList = function WatchedSidebarList(_ref2) {
					var title = _ref2.title,
						threads = _ref2.threads
					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						__jsx(
							'h4',
							{ className: 'text-2xl uppercase mb-2.5' },
							title,
						),
						__jsx(
							'div',
							{ className: 'border border-gray-300 px-8 py-6' },
							threads.map(function (thread, threadIndex) {
								return __jsx(
									next_link__WEBPACK_IMPORTED_MODULE_1___default(),
									{
										key: threadIndex,
										href: '/communities/'.concat(thread.id),
									},
									__jsx(
										'span',
										{
											role: 'thread link',
											className:
												'text-blue-800 font-bold flex pb-3 text-lg underline cursor-pointer',
										},
										thread.title.length > 30
											? ''.concat(
													thread.title.substring(
														0,
														30,
													),
													'...',
											  )
											: thread.title,
									),
								)
							}),
						),
					)
				}
			;(WatchedThreads.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'WatchedThreads',
				props: {
					title: {
						defaultValue: {
							value: "'Watched Threads'",
							computed: !1,
						},
						required: !1,
						tsType: { name: 'string' },
						description: '',
					},
					threads: {
						required: !0,
						tsType: {
							name: 'Array',
							elements: [{ name: 'ThreadType' }],
							raw: 'Array<ThreadType>',
						},
						description: '',
					},
				},
			}),
				(WatchedSidebarList.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'WatchedSidebarList',
					props: {
						threads: {
							required: !0,
							tsType: {
								name: 'Array',
								elements: [{ name: 'ThreadType' }],
								raw: 'Array<ThreadType>',
							},
							description: '',
						},
						title: {
							required: !1,
							tsType: { name: 'string' },
							description: '',
						},
					},
				})
			try {
				;(WatchedThreads.displayName = 'WatchedThreads'),
					(WatchedThreads.__docgenInfo = {
						description: '',
						displayName: 'WatchedThreads',
						props: {
							threads: {
								defaultValue: null,
								description: '',
								name: 'threads',
								required: !0,
								type: { name: 'ThreadType[]' },
							},
							title: {
								defaultValue: { value: 'Watched Threads' },
								description: '',
								name: 'title',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/community/watched_threads/watched_threads.tsx#WatchedThreads'
						] = {
							docgenInfo: WatchedThreads.__docgenInfo,
							name: 'WatchedThreads',
							path: 'components/common/community/watched_threads/watched_threads.tsx#WatchedThreads',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			try {
				;(WatchedSidebarList.displayName = 'WatchedSidebarList'),
					(WatchedSidebarList.__docgenInfo = {
						description: '',
						displayName: 'WatchedSidebarList',
						props: {
							threads: {
								defaultValue: null,
								description: '',
								name: 'threads',
								required: !0,
								type: { name: 'ThreadType[]' },
							},
							title: {
								defaultValue: { value: 'Watched Threads' },
								description: '',
								name: 'title',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/community/watched_threads/watched_threads.tsx#WatchedSidebarList'
						] = {
							docgenInfo: WatchedSidebarList.__docgenInfo,
							name: 'WatchedSidebarList',
							path: 'components/common/community/watched_threads/watched_threads.tsx#WatchedSidebarList',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/forms/inputs/input/input.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { I: () => Input })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				Input = function Input(_ref) {
					var label = _ref.label,
						name = _ref.name,
						role = _ref.role,
						_onChange = _ref.onChange,
						_ref$required = _ref.required,
						required = void 0 !== _ref$required && _ref$required,
						type = _ref.type,
						_ref$disabled = _ref.disabled,
						disabled = void 0 !== _ref$disabled && _ref$disabled,
						description = _ref.description,
						_ref$error = _ref.error,
						error = void 0 !== _ref$error && _ref$error,
						_ref$placeholder = _ref.placeholder,
						placeholder =
							void 0 === _ref$placeholder
								? 'Enter here'
								: _ref$placeholder,
						_ref$className = _ref.className,
						className =
							void 0 === _ref$className ? '' : _ref$className,
						length = _ref.length,
						content = _ref.content,
						min = _ref.min,
						max = _ref.max,
						value = _ref.value,
						_ref$checked = _ref.checked,
						checked = void 0 !== _ref$checked && _ref$checked,
						_useState = (0,
						react__WEBPACK_IMPORTED_MODULE_0__.useState)(checked),
						isChecked = _useState[0],
						setIsChecked = _useState[1],
						inputShape =
							'radio' === type ? 'rounded-full' : 'rounded-sm',
						handleInputChange = function handleInputChange() {
							disabled || setIsChecked(!isChecked)
						},
						classes = [
							className,
							'block appearance-none focus:outline-none focus:ring-0 peer',
							error
								? 'border-red-500 focus:border-red-600'
								: 'border-wgray',
							disabled
								? 'cursor-not-allowed'
								: 'focus:border-royalblue hover:border-royalblue',
							length
								? ''.concat(
										'short' === length
											? 'w-1/6'
											: 'normal' === length
											? 'w-1/3'
											: 'long' === length
											? 'w-1/2'
											: 'w-full',
								  )
								: '',
							'radio' === type || 'checkbox' === type
								? 'sr-only'
								: 'border-2',
							'range' === type ? 'h-1 cursor-ew-resize' : '',
						].join(' ')
					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						__jsx(
							'div',
							{
								className: ' '.concat(
									'radio' === type || 'checkbox' === type
										? 'flex items-center'
										: '',
								),
							},
							label &&
								__jsx(
									'h2',
									{ className: 'font-medium mb-1' },
									__jsx(
										'label',
										{ htmlFor: name },
										' ',
										label.toUpperCase(),
									),
								),
							__jsx('input', {
								type,
								name,
								id: name,
								placeholder,
								role,
								'aria-label': type,
								className: classes,
								checked: isChecked,
								required,
								disabled,
								min: 'range' === type ? min : void 0,
								max: 'range' === type ? max : void 0,
								value: 'range' === type ? value : void 0,
								onChange: function onChange(event) {
									;('checkbox' !== type &&
										'radio' !== type) ||
										handleInputChange(),
										_onChange(event.target.value)
								},
							}),
							'radio' === type || 'checkbox' === type
								? __jsx(
										'div',
										{
											className:
												'flex items-center w-4 h-4 '
													.concat(
														inputShape,
														' border ',
													)
													.concat(
														disabled
															? ''
															: 'cursor-pointer',
														' ',
													)
													.concat(
														isChecked
															? 'bg-white border-royalblue'
															: 'bg-white border-wgray',
													),
											onClick: handleInputChange,
										},
										isChecked &&
											__jsx('div', {
												className:
													'w-3 h-3 mx-auto my-auto bg-royalblue '.concat(
														'radio' === type
															? 'rounded-full'
															: 'rounded',
													),
											}),
								  )
								: null,
							'radio' === type || 'checkbox' === type
								? __jsx('label', { className: 'ml-1' }, content)
								: null,
							description &&
								__jsx(
									'p',
									{
										id: 'helper-text-explanation',
										className: 'my-0 '.concat(
											error ? 'text-red-600' : '',
										),
									},
									error
										? 'Wrong '.concat(type)
										: 'This is a test message',
								),
						),
					)
				}
			Input.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'Input',
				props: {
					required: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'The required attribute is used to indicate weather the input element is required or not.',
					},
					disabled: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'The disabled attribute is used to indicate weather the input element is disabled or not.',
					},
					error: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'The error value is used to render different styles of the input element based on the current error state that is passed in as a parameter.',
					},
					placeholder: {
						defaultValue: { value: "'Enter here'", computed: !1 },
						required: !1,
						tsType: { name: 'string' },
						description:
							'The placeholder value is used to provide a placeholder for the input element. This is used to provide additional context to the user, under the input element.',
					},
					className: {
						defaultValue: { value: "''", computed: !1 },
						required: !1,
						tsType: { name: 'string' },
						description:
							'The className value is used to provide a custom class name to the input element.',
					},
					checked: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
						tsType: { name: 'boolean' },
						description:
							'A boolean determines whether the input box is checked or not',
					},
					label: {
						required: !0,
						tsType: { name: 'string' },
						description:
							'The label for the input. This will be the floating element that is displayed above the input.',
					},
					name: {
						required: !0,
						tsType: { name: 'string' },
						description:
							'The name of the input. This is used to identify the input when it is submitted. This value is also used by the label element to identify the `htmlFor` attribute.',
					},
					role: {
						required: !1,
						tsType: { name: 'string' },
						description:
							'The role attribute on the input allows the browser to gather knowledge about the purpose of the input. This improves accessibility, device adaptation, and cross browser synchronicity.',
					},
					onChange: {
						required: !0,
						tsType: {
							name: 'signature',
							type: 'function',
							raw: '(e: string) => void',
							signature: {
								arguments: [
									{ name: 'e', type: { name: 'string' } },
								],
								return: { name: 'void' },
							},
						},
						description:
							'The on Change event handler for the input. This is used to update the value of the input.\n@param value The value of the input event.',
					},
					description: {
						required: !1,
						tsType: {
							name: 'union',
							raw: 'string | React.ReactNode | React.ReactElement',
							elements: [
								{ name: 'string' },
								{
									name: 'ReactReactNode',
									raw: 'React.ReactNode',
								},
								{
									name: 'ReactReactElement',
									raw: 'React.ReactElement',
								},
							],
						},
						description:
							"The description value is used to give users additional information about the either the input or the error that happened. This is used to provide additional context to the user, under the input element. This is just supplementary information, so it's visual hierarchy should not interfere with the input element's.",
					},
					type: {
						required: !0,
						tsType: {
							name: 'union',
							raw: "| 'text'\n| 'email'\n| 'password'\n| 'search'\n| 'url'\n| 'tel'\n| 'number'\n| 'file'\n| 'radio'\n| 'checkbox'\n| 'range'",
							elements: [
								{ name: 'literal', value: "'text'" },
								{ name: 'literal', value: "'email'" },
								{ name: 'literal', value: "'password'" },
								{ name: 'literal', value: "'search'" },
								{ name: 'literal', value: "'url'" },
								{ name: 'literal', value: "'tel'" },
								{ name: 'literal', value: "'number'" },
								{ name: 'literal', value: "'file'" },
								{ name: 'literal', value: "'radio'" },
								{ name: 'literal', value: "'checkbox'" },
								{ name: 'literal', value: "'range'" },
							],
						},
						description:
							'The input type determines the way browsers conduct their validation and on a device by device basis it can change the keyboard behavior for the user.',
					},
					ariaLabel: {
						required: !1,
						tsType: { name: 'string' },
						description:
							"The aria-label attribute is used to provide a label for the input element. This is used to provide additional context to the user, under the input element. This is just supplementary information, so its visual hierarchy should not interfere with the input element's.",
					},
					length: {
						required: !0,
						tsType: {
							name: 'union',
							raw: "'short' | 'normal' | 'long' | 'full'",
							elements: [
								{ name: 'literal', value: "'short'" },
								{ name: 'literal', value: "'normal'" },
								{ name: 'literal', value: "'long'" },
								{ name: 'literal', value: "'full'" },
							],
						},
						description:
							'An enum that specifies the length of the input field',
					},
					content: {
						required: !1,
						tsType: { name: 'string' },
						description: 'Content string for radio input',
					},
					min: {
						required: !1,
						tsType: { name: 'number' },
						description:
							'The `min` attribute is used to specify the minimum value for a range slider',
					},
					max: {
						required: !1,
						tsType: { name: 'number' },
						description:
							'The `max` attribute is used to specify the maximum value for a range slider',
					},
					value: {
						required: !1,
						tsType: { name: 'number' },
						description:
							'The `value` attribute is used to define the initial value of a range slider',
					},
				},
			}
			try {
				;(Input.displayName = 'Input'),
					(Input.__docgenInfo = {
						description: '',
						displayName: 'Input',
						props: {
							label: {
								defaultValue: null,
								description:
									'The label for the input. This will be the floating element that is displayed above the input.',
								name: 'label',
								required: !0,
								type: { name: 'string' },
							},
							name: {
								defaultValue: null,
								description:
									'The name of the input. This is used to identify the input when it is submitted. This value is also used by the label element to identify the `htmlFor` attribute.',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							role: {
								defaultValue: null,
								description:
									'The role attribute on the input allows the browser to gather knowledge about the purpose of the input. This improves accessibility, device adaptation, and cross browser synchronicity.',
								name: 'role',
								required: !1,
								type: { name: 'string' },
							},
							onChange: {
								defaultValue: null,
								description:
									'The on Change event handler for the input. This is used to update the value of the input.\n@param value The value of the input event.',
								name: 'onChange',
								required: !0,
								type: { name: '(e: string) => void' },
							},
							description: {
								defaultValue: null,
								description:
									"The description value is used to give users additional information about the either the input or the error that happened. This is used to provide additional context to the user, under the input element. This is just supplementary information, so it's visual hierarchy should not interfere with the input element's.",
								name: 'description',
								required: !1,
								type: {
									name: 'ReactElement<any, string | JSXElementConstructor<any>> | ReactNode',
								},
							},
							required: {
								defaultValue: { value: 'false' },
								description:
									'The required attribute is used to indicate weather the input element is required or not.',
								name: 'required',
								required: !1,
								type: { name: 'boolean' },
							},
							type: {
								defaultValue: null,
								description:
									'The input type determines the way browsers conduct their validation and on a device by device basis it can change the keyboard behavior for the user.',
								name: 'type',
								required: !0,
								type: {
									name: 'enum',
									value: [
										{ value: '"number"' },
										{ value: '"text"' },
										{ value: '"url"' },
										{ value: '"email"' },
										{ value: '"password"' },
										{ value: '"search"' },
										{ value: '"tel"' },
										{ value: '"file"' },
										{ value: '"radio"' },
										{ value: '"checkbox"' },
										{ value: '"range"' },
									],
								},
							},
							disabled: {
								defaultValue: { value: 'false' },
								description:
									'The disabled attribute is used to indicate weather the input element is disabled or not.',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
							error: {
								defaultValue: { value: 'false' },
								description:
									'The error value is used to render different styles of the input element based on the current error state that is passed in as a parameter.',
								name: 'error',
								required: !1,
								type: { name: 'boolean' },
							},
							ariaLabel: {
								defaultValue: null,
								description:
									"The aria-label attribute is used to provide a label for the input element. This is used to provide additional context to the user, under the input element. This is just supplementary information, so its visual hierarchy should not interfere with the input element's.",
								name: 'ariaLabel',
								required: !1,
								type: { name: 'string' },
							},
							placeholder: {
								defaultValue: { value: 'Enter here' },
								description:
									'The placeholder value is used to provide a placeholder for the input element. This is used to provide additional context to the user, under the input element.',
								name: 'placeholder',
								required: !1,
								type: { name: 'string' },
							},
							className: {
								defaultValue: { value: '' },
								description:
									'The className value is used to provide a custom class name to the input element.',
								name: 'className',
								required: !1,
								type: { name: 'string' },
							},
							length: {
								defaultValue: null,
								description:
									'An enum that specifies the length of the input field',
								name: 'length',
								required: !0,
								type: {
									name: 'enum',
									value: [
										{ value: '"short"' },
										{ value: '"normal"' },
										{ value: '"long"' },
										{ value: '"full"' },
									],
								},
							},
							content: {
								defaultValue: null,
								description: 'Content string for radio input',
								name: 'content',
								required: !1,
								type: { name: 'string' },
							},
							checked: {
								defaultValue: { value: 'false' },
								description:
									'A boolean determines whether the input box is checked or not',
								name: 'checked',
								required: !1,
								type: { name: 'boolean' },
							},
							min: {
								defaultValue: null,
								description:
									'The `min` attribute is used to specify the minimum value for a range slider',
								name: 'min',
								required: !1,
								type: { name: 'number' },
							},
							max: {
								defaultValue: null,
								description:
									'The `max` attribute is used to specify the maximum value for a range slider',
								name: 'max',
								required: !1,
								type: { name: 'number' },
							},
							value: {
								defaultValue: null,
								description:
									'The `value` attribute is used to define the initial value of a range slider',
								name: 'value',
								required: !1,
								type: { name: 'number' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/forms/inputs/input/input.tsx#Input'
						] = {
							docgenInfo: Input.__docgenInfo,
							name: 'Input',
							path: 'components/common/forms/inputs/input/input.tsx#Input',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/pages/module_list/module_list.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { I: () => ModuleList })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/next/link.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(
						next_link__WEBPACK_IMPORTED_MODULE_1__,
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				ModuleList = function ModuleList(_ref) {
					var modules = _ref.modules
					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
						null,
						__jsx(
							'h1',
							{ className: 'font-semibold text-2xl py-1' },
							'Your Modules',
						),
						modules.map(function (module, moduleIndex) {
							return __jsx(
								next_link__WEBPACK_IMPORTED_MODULE_1___default(),
								{
									key: moduleIndex,
									href: '/communities/modules/'.concat(
										module.id,
										'/',
									),
									role: 'thread link',
									className:
										'text-blue-800 flex py-1 text-lg',
								},
								module.moduleName.length > 30
									? ''.concat(
											module.moduleName.substring(0, 30),
											'...',
									  )
									: module.moduleName,
							)
						}),
					)
				}
			ModuleList.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'ModuleList',
				props: {
					modules: {
						required: !0,
						tsType: {
							name: 'Array',
							elements: [
								{
									name: 'signature',
									type: 'object',
									raw: '{\n\tmoduleName?: string\n\t/**\n\t * string that shows up name of the module on Default Card\n\t */\n\tid: string\n\t/**\n\t * unique number that shows up identity of the module card\n\t */\n}',
									signature: {
										properties: [
											{
												key: 'moduleName',
												value: {
													name: 'string',
													required: !1,
												},
											},
											{
												key: 'id',
												value: {
													name: 'string',
													required: !0,
												},
											},
										],
									},
								},
							],
							raw: 'Array<ModuleListObject>',
						},
						description: '',
					},
				},
			}
			try {
				;(ModuleList.displayName = 'ModuleList'),
					(ModuleList.__docgenInfo = {
						description: '',
						displayName: 'ModuleList',
						props: {
							modules: {
								defaultValue: null,
								description: '',
								name: 'modules',
								required: !0,
								type: { name: 'ModuleListObject[]' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/pages/module_list/module_list.tsx#ModuleList'
						] = {
							docgenInfo: ModuleList.__docgenInfo,
							name: 'ModuleList',
							path: 'components/common/pages/module_list/module_list.tsx#ModuleList',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/pages/communities/Main/main_community.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					default: () => main_community_stories,
				})
			var defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				esm_extends = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/extends.js',
				),
				taggedTemplateLiteral = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				thread_thread = __webpack_require__(
					'./components/common/community/threads/thread/thread.tsx',
				),
				watched_threads = __webpack_require__(
					'./components/common/community/watched_threads/watched_threads.tsx',
				),
				input = __webpack_require__(
					'./components/common/forms/inputs/input/input.tsx',
				),
				module_list = __webpack_require__(
					'./components/common/pages/module_list/module_list.tsx',
				),
				__jsx = react.createElement,
				MainCommunity = function MainCommunity(_ref) {
					var threads = _ref.threads
					return __jsx(
						'div',
						{ className: 'm-8 flex' },
						__jsx(
							'div',
							{ className: 'm-10 grow' },
							__jsx(
								'p',
								{ className: 'text-3xl font-semibold' },
								'This is the name of the module',
							),
							__jsx(
								'div',
								{ className: 'flex my-2 items-center' },
								__jsx('img', {
									src: 'https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg',
									alt: 'profile image',
									className:
										'shadow-lg rounded-full max-w-full h-4 align-middle border-none',
								}),
								__jsx(
									'small',
									{ className: 'pl-2 font-bold' },
									'joeldesante',
								),
								__jsx(
									'small',
									null,
									__jsx(
										'span',
										{ className: 'px-1 font-bold' },
										'•',
									),
									'jdsante@odu.edu',
								),
							),
							__jsx(
								'div',
								{ className: 'flex items-center' },
								__jsx(
									'h1',
									{
										className:
											'text-lg font-semibold flex-none pr-20',
									},
									'Recent Threads',
								),
								__jsx(input.I, {
									defaultValue: '',
									label: 'Search',
									name: 'floating_search',
									onChange: function noRefCheck() {},
									role: 'search',
									type: 'search',
									options: [],
								}),
							),
							__jsx(
								'div',
								{ className: 'm-2' },
								threads.map(function (thread, index) {
									return __jsx(
										'div',
										{ className: 'my-4', key: index },
										__jsx(thread_thread.j, {
											body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas.',
											id: '12345',
											title: 'How did the United States land on the moon?',
											upvotes: 10,
											userProfile: {
												firstName: 'joel',
												id: 1,
												picURL: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
												lastName: 'desante',
											},
										}),
									)
								}),
							),
						),
						__jsx(
							'aside',
							{ className: 'mx-10 flex-none' },
							__jsx(
								'div',
								{ className: 'mb-10' },
								__jsx(module_list.I, {
									modules: [
										{
											id: 'moduleid1',
											moduleName: 'Module 1',
										},
										{
											id: 'moduleid2',
											moduleName: 'Module 2',
										},
										{
											id: 'moduleid3',
											moduleName: 'Module 3',
										},
										{
											id: 'moduleid4',
											moduleName: 'Module 4',
										},
									],
								}),
							),
							__jsx(
								'div',
								{ className: 'mb-10' },
								__jsx(watched_threads.Y, {
									threads: [
										{
											id: '63e3f79631115da3472a72dc',
											title: 'this is testing',
											parentLesson: {
												id: '63e3f79631115da3472a72dc',
												collection: {
													id: '641c71563985a78ee17cbca2',
													module: {
														moduleName:
															'Some dummy data',
														id: '63e129a9cbfa5080578a7986',
													},
												},
											},
										},
										{
											id: '641c6f4f3985a78ee17cbca0',
											title: 'Hydration',
											parentLesson: {
												id: '641c71563985a78ee17cbca2',
												collection: {
													id: '641c71563985a78ee17cbca2',
													module: {
														moduleName:
															'Some dummy data',
														id: '63e129a9cbfa5080578a7986',
													},
												},
											},
										},
										{
											id: '641c712a3985a78ee17cbca1',
											parentLesson: {
												id: '641c71563985a78ee17cbca2',
												collection: {
													id: '641c71563985a78ee17cbca2',
													module: {
														moduleName:
															'Some dummy data',
														id: '63e129a9cbfa5080578a7986',
													},
												},
											},
										},
										{
											id: '641c71563985a78ee17cbca2',
											title: 'CATS CATS CATS',
											parentLesson: {
												id: '641c71563985a78ee17cbca2',
												collection: {
													id: '641c71563985a78ee17cbca2',
													module: {
														id: '63e129a9cbfa5080578a7986',
														collections: [
															{
																id: '641c6f4f3985a78ee17cbca0',
																lessons: [
																	{
																		id: '64134bd645693aa3e9813e8e',
																		threads:
																			[],
																		name: 'Lesson 1',
																		collection:
																			{
																				id: '64134bd645693aa3e9813e8e',
																				module: {
																					id: '64134bd645693aa3e9813e8e',
																				},
																			},
																	},
																],
															},
														],
													},
												},
											},
										},
									],
								}),
							),
						),
					)
				}
			;(MainCommunity.displayName = 'MainCommunity'),
				(MainCommunity.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'MainCommunity',
				})
			try {
				;(MainCommunity.displayName = 'MainCommunity'),
					(MainCommunity.__docgenInfo = {
						description: '',
						displayName: 'MainCommunity',
						props: {
							threads: {
								defaultValue: null,
								description: '',
								name: 'threads',
								required: !0,
								type: { name: 'object[]' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/pages/communities/Main/main_community.tsx#MainCommunity'
						] = {
							docgenInfo: MainCommunity.__docgenInfo,
							name: 'MainCommunity',
							path: 'components/pages/communities/Main/main_community.tsx#MainCommunity',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var _templateObject,
				_Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				dist = __webpack_require__('./node_modules/swr/dist/index.mjs'),
				gql_fetcher = __webpack_require__('./utils/gql_fetcher.ts'),
				esm = __webpack_require__(
					'./node_modules/graphql-request/build/esm/index.js',
				),
				main_community_stories_jsx = react.createElement
			function ownKeys(object, enumerableOnly) {
				var keys = Object.keys(object)
				if (Object.getOwnPropertySymbols) {
					var symbols = Object.getOwnPropertySymbols(object)
					enumerableOnly &&
						(symbols = symbols.filter(function (sym) {
							return Object.getOwnPropertyDescriptor(object, sym)
								.enumerable
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
								;(0, defineProperty.Z)(target, key, source[key])
						  })
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
			const main_community_stories = {
				title: 'Pages/Communities/Main/Main Community',
				component: MainCommunity,
				argTypes: {},
			}
			var Template = function Template(args) {
				var _useSWR = (0, dist.ZP)(
						{
							query: (0, esm.Ps)(
								_templateObject ||
									(_templateObject = (0,
									taggedTemplateLiteral.Z)([
										'\n                {\n                    thread(input: {}) {\n                        updatedAt\n                    }\n                }\n            ',
									])),
							),
						},
						gql_fetcher.Z,
					),
					data = _useSWR.data
				return _useSWR.error
					? main_community_stories_jsx(
							'p',
							null,
							'Failed to load content...',
					  )
					: data
					? main_community_stories_jsx(
							MainCommunity,
							(0, esm_extends.Z)(
								{ threads: data.thread.sort() },
								args,
							),
					  )
					: main_community_stories_jsx('p', null, 'Loading...')
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
											'(args: MainCommunityProps) => {\n  const {\n    data,\n    error\n  } = useSWR({\n    query: gql`\n                {\n                    thread(input: {}) {\n                        updatedAt\n                    }\n                }\n            `\n  }, gqlFetcher);\n  if (error) return <p>Failed to load content...</p>;\n  if (!data) return <p>Loading...</p>;\n\n  //\tconsole.log(data)\n\n  //\tconsole.log(data.thread.sort())\n\n  return <MainCommunity threads={data.thread.sort()} {...args} />;\n}',
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
