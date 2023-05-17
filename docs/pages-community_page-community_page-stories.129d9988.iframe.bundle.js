;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[409],
	{
		'./components/common/community/social_card/social_card.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { X: () => SocialCard })
			var _Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
					),
				moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/moment/moment.js'
				),
				moment__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						'./node_modules/react-icons/ai/index.esm.js'
					),
				react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						'./node_modules/react-icons/fa/index.esm.js'
					),
				react_icons_md__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						'./node_modules/react-icons/md/index.esm.js'
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				SocialCard = function SocialCard(_ref) {
					var timestamp = _ref.timestamp,
						content = _ref.content,
						likes = _ref.likes,
						comments = _ref.comments,
						user = _ref.user,
						_React$useState =
							react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),
						_React$useState2 = (0,
						_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
							_React$useState,
							2
						),
						isClicked = _React$useState2[0],
						setIsClicked = _React$useState2[1]
					return __jsx(
						'div',
						{ className: 'flex' },
						__jsx(
							'div',
							{
								className:
									'rounded-xl border p-5 shadow-md md:w-screen bg-white w-full',
							},
							__jsx(
								'div',
								{
									className:
										'flex w-full items-center justify-between  pb-3',
								},
								__jsx(
									'div',
									{
										className:
											'flex items-center space-x-3',
									},
									__jsx(
										'div',
										{
											className:
												'flex flex-wrap justify-center',
										},
										__jsx(
											'div',
											{
												className:
													'relative aspect-square w-12 h-auto rounded-full shadow',
											},
											__jsx('img', {
												src: user.image,
												alt: 'user profile image',
												className:
													'shadow-lg rounded-full max-w-full h-12 align-middle border-none',
												onClick: function onClick() {
													return setIsClicked(
														!isClicked
													)
												},
											}),
											isClicked &&
												__jsx(
													'div',
													{
														className:
															'absolute z-20 w-56 py-0 px-0 mt-0 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800',
													},
													__jsx(
														'a',
														{
															href: '#',
															className:
																'block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
														},
														'view profile'
													),
													__jsx(
														'a',
														{
															href: '#',
															className:
																'block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
														},
														'Send message'
													),
													__jsx(
														'a',
														{
															href: '#',
															className:
																'block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
														},
														'Unfriend'
													),
													__jsx(
														'a',
														{
															href: '#',
															className:
																'block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
														},
														'Block user'
													)
												)
										)
									),
									__jsx(
										'div',
										{ className: 'mt-4 mb-6' },
										__jsx(
											'div',
											{
												className:
													'fullname mb-1 text-lg font-bold text-slate-700',
											},
											__jsx(
												'span',
												{
													className:
														'text-slate-500 role',
												},
												user.role
											),
											' ',
											'- ',
											user.firstName,
											' ',
											user.lastName
										),
										__jsx(
											'div',
											{
												className:
													'department text-xs text-neutral-500',
											},
											moment__WEBPACK_IMPORTED_MODULE_1___default()
												.unix(timestamp)
												.fromNow(),
											' |',
											' ',
											user.department,
											' - ',
											user.office
										)
									)
								),
								__jsx(
									'div',
									{ className: 'role-symbol px-10 ' },
									'Prof' === user.role &&
										__jsx(
											react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.QJe,
											{
												size: 38,
												className: 'text-yellow-400',
											}
										),
									'Advisor' === user.role &&
										__jsx(
											react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.nGB,
											{
												size: 38,
												className: 'text-yellow-400',
											}
										),
									'TA' === user.role &&
										__jsx(
											react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.VF9,
											{
												size: 38,
												className: 'text-yellow-400',
											}
										)
								)
							),
							__jsx(
								'div',
								{ className: ' mt-4 mb-6 w-full h-200' },
								__jsx(
									'div',
									{
										className:
											' break-words text-sm text-neutral-600 ',
									},
									content
								)
							),
							__jsx(
								'div',
								{ className: 'border-b p-2' },
								__jsx(
									'div',
									{
										className:
											'flex items-center justify-between text-slate-500 ',
									},
									__jsx(
										'div',
										{
											className:
												'flex space-x-4 md:space-x-8',
										},
										__jsx(
											'div',
											{
												className:
													'likes flex cursor-pointer items-center transition hover:text-slate-600 text-blue-600',
											},
											__jsx(
												react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.L7p,
												{ size: 20, className: 'mr-1' }
											),
											__jsx(
												'span',
												{ className: '' },
												likes,
												' Likes'
											)
										),
										__jsx(
											'div',
											{
												className:
													'comments flex cursor-pointer items-center transition hover:text-slate-600 text-blue-600',
											},
											__jsx(
												react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.llv,
												{ size: 20, className: 'mr-1' }
											),
											__jsx(
												'span',
												{ className: '' },
												comments,
												' comments'
											)
										)
									)
								)
							),
							__jsx(
								'div',
								{
									className:
										'flex justify-between items-center my-2 text-stone-900 w-full',
								},
								__jsx(
									'div',
									{ className: 'w-full' },
									__jsx(
										'label',
										{
											htmlFor: 'add-comment',
											className: 'sr-only',
										},
										'Add your comment to the post'
									),
									__jsx('input', {
										type: 'text',
										className:
											'border-transparent bg-transparent px-5 py-2 w-full',
										placeholder: 'Add Comment...',
										id: 'add-comment',
									})
								),
								__jsx(
									'div',
									{ className: 'flex gap-2' },
									__jsx(
										'button',
										{
											'aria-label': 'attach-file',
											className:
												'flex items-center justify-center px-5',
										},
										__jsx(
											react_icons_md__WEBPACK_IMPORTED_MODULE_5__._b$,
											{ size: 20, className: 'mr-1' }
										)
									),
									__jsx(
										'button',
										{
											'aria-label': 'insert-emoji',
											className:
												'flex items-center justify-center px-8',
										},
										__jsx(
											react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.sr,
											{ size: 20, className: 'mr-1' }
										)
									)
								)
							)
						)
					)
				}
			;(SocialCard.displayName = 'SocialCard'),
				(SocialCard.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'SocialCard',
				})
			try {
				;(SocialCard.displayName = 'SocialCard'),
					(SocialCard.__docgenInfo = {
						description: '',
						displayName: 'SocialCard',
						props: {
							user: {
								defaultValue: null,
								description:
									'Assigning the below declared type "UserAccountprops" to user',
								name: 'user',
								required: !0,
								type: { name: 'UserAccountProps' },
							},
							timestamp: {
								defaultValue: null,
								description:
									"A descriptive label to display the timestamp of the user's comment",
								name: 'timestamp',
								required: !0,
								type: { name: 'number' },
							},
							content: {
								defaultValue: null,
								description:
									"A descriptive label to display the content of the user's comment",
								name: 'content',
								required: !0,
								type: { name: 'string' },
							},
							likes: {
								defaultValue: null,
								description:
									"A descriptive label to display the number of likes of the user's comment",
								name: 'likes',
								required: !0,
								type: { name: 'number' },
							},
							comments: {
								defaultValue: null,
								description:
									"A descriptive label to display the number of comments of the user's comment",
								name: 'comments',
								required: !0,
								type: { name: 'number' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/community/social_card/social_card.tsx#SocialCard'
						] = {
							docgenInfo: SocialCard.__docgenInfo,
							name: 'SocialCard',
							path: 'components/common/community/social_card/social_card.tsx#SocialCard',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/forms/inputs/input/input.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { I: () => Input })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
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
											: 'w-full'
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
										: ''
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
										label.toUpperCase()
									)
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
														' border '
													)
													.concat(
														disabled
															? ''
															: 'cursor-pointer',
														' '
													)
													.concat(
														isChecked
															? 'bg-white border-royalblue'
															: 'bg-white border-wgray'
													),
											onClick: handleInputChange,
										},
										isChecked &&
											__jsx('div', {
												className:
													'w-3 h-3 mx-auto my-auto bg-royalblue '.concat(
														'radio' === type
															? 'rounded-full'
															: 'rounded'
													),
											})
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
											error ? 'text-red-600' : ''
										),
									},
									error
										? 'Wrong '.concat(type)
										: 'This is a test message'
								)
						)
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
		'./components/pages/community_page/community_page.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					Secondary: () => Secondary,
					default: () => community_page_stories,
				})
			var _templateObject,
				_Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				_Secondary$parameters,
				_Secondary$parameters2,
				_Secondary$parameters3,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				taggedTemplateLiteral = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
				),
				moment = __webpack_require__('./node_modules/moment/moment.js'),
				moment_default = __webpack_require__.n(moment),
				input = __webpack_require__(
					'./components/common/forms/inputs/input/input.tsx'
				),
				social_card = __webpack_require__(
					'./components/common/community/social_card/social_card.tsx'
				),
				index_esm = __webpack_require__(
					'./node_modules/react-icons/ai/index.esm.js'
				),
				bi_index_esm = __webpack_require__(
					'./node_modules/react-icons/bi/index.esm.js'
				),
				ri_index_esm = __webpack_require__(
					'./node_modules/react-icons/ri/index.esm.js'
				),
				gr_index_esm = __webpack_require__(
					'./node_modules/react-icons/gr/index.esm.js'
				),
				cg_index_esm = __webpack_require__(
					'./node_modules/react-icons/cg/index.esm.js'
				),
				go_index_esm = __webpack_require__(
					'./node_modules/react-icons/go/index.esm.js'
				),
				md_index_esm = __webpack_require__(
					'./node_modules/react-icons/md/index.esm.js'
				),
				gql_fetcher = __webpack_require__('./utils/gql_fetcher.ts'),
				esm = __webpack_require__(
					'./node_modules/graphql-request/build/esm/index.js'
				),
				dist = __webpack_require__('./node_modules/swr/dist/index.mjs'),
				__jsx = react.createElement,
				CommunityPage = function CommunityPage(_ref) {
					_ref.socialCardProps, _ref.userAccountProps
					var inputProps = _ref.inputProps,
						groupsProps = _ref.groupsProps,
						pollSurveysProps = _ref.pollSurveysProps,
						challengesProps = _ref.challengesProps,
						contactProps = _ref.contactProps,
						_useSWR = (0, dist.ZP)(
							{
								query: (0, esm.Ps)(
									_templateObject ||
										(_templateObject = (0,
										taggedTemplateLiteral.Z)([
											'\n\t\t\t\t{\n\t\t\t\t\tthread(input: {}) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tbody\n\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\tpicURL\n\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\tinstructorProfile {\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tofficeLocation\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tupvotes {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcomments {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\tTODO: Uncomment this when the backend is ready (see ALMP-632)\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\tpicURL\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\tinstructorProfile {\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\t\tofficeLocation\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t#\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t',
										]))
								),
							},
							gql_fetcher.Z
						),
						data = _useSWR.data,
						error = _useSWR.error
					if (error) throw (console.log(error), new Error(error))
					return data
						? (console.log(data.thread.createdAt),
						  console.log(data.thread),
						  __jsx(
								'div',
								{
									className:
										'h-auto mx-auto relative bg-[#E7E8E9] overflow-scroll',
								},
								__jsx(
									'div',
									{ className: 'flex flex-1' },
									__jsx(
										'div',
										{
											className:
												'container mt-2 md:ml-10 relative md:w-7/12',
										},
										__jsx(
											'div',
											{
												className:
													'flex flex-col h-screen',
											},
											__jsx(
												'div',
												{
													className:
														'text-center md:text-left text-gray-400 text-6xl tracking-widest border',
												},
												'Feed'
											),
											__jsx(
												'div',
												{
													className:
														'hidden md:relative md:flex md:my-4',
												},
												__jsx('textarea', {
													className:
														'w-full placeholder:italic rounded border-box shadow-md ',
													placeholder:
														'Go ahead, share your moments!',
												}),
												__jsx(
													'button',
													{ className: 'items-end' },
													__jsx(md_index_esm.D6S, {
														size: 30,
													})
												)
											),
											__jsx(
												'button',
												null,
												__jsx(
													'div',
													{
														className:
															'flex justify-end text-gray-400 items-center text-xs tracking-tight',
													},
													'Sort by Relevance ',
													__jsx(index_esm.cuw, null)
												)
											),
											__jsx(
												'div',
												null,
												data.thread.length > 0 &&
													data.thread.map(function (
														_ref2,
														index
													) {
														_ref2.data1
														var _author$instructorPro,
															_author$instructorPro2,
															author =
																_ref2.author,
															createdAt =
																_ref2.createdAt,
															upvotes =
																_ref2.upvotes,
															comments =
																(_ref2.instructorProfile,
																_ref2.comments),
															body = _ref2.body
														return __jsx(
															react.Fragment,
															null,
															__jsx(
																social_card.X,
																{
																	timestamp:
																		moment_default()(
																			createdAt
																		).unix(),
																	content:
																		body,
																	likes: upvotes,
																	comments:
																		comments.length,
																	user: {
																		firstName:
																			author.firstName,
																		lastName:
																			author.lastName,
																		role:
																			null !==
																				(_author$instructorPro =
																					author.instructorProfile) &&
																			void 0 !==
																				_author$instructorPro &&
																			_author$instructorPro.title
																				? author
																						.instructorProfile
																						.title
																				: 'advisor',
																		image: author.picURL,
																		title: '',
																		office:
																			null !==
																				(_author$instructorPro2 =
																					author.instructorProfile) &&
																			void 0 !==
																				_author$instructorPro2 &&
																			_author$instructorPro2.officeLocation
																				? author
																						.officeLocation
																						.title
																				: 'ESB 2101',
																		department:
																			'',
																	},
																	key: index,
																}
															)
														)
													})
											),
											__jsx(
												'div',
												{
													className:
														'md:hidden flex flex-row h-full items-end justify-evenly w-full',
												},
												__jsx(
													'div',
													{ className: '' },
													__jsx(
														'button',
														null,
														__jsx(
															gr_index_esm.ZMl,
															{ size: 30 }
														)
													)
												),
												__jsx(
													'div',
													{ className: '' },
													__jsx(
														'button',
														null,
														__jsx(
															cg_index_esm.Bhn,
															{ size: 30 }
														)
													)
												),
												__jsx(
													'div',
													{ className: '' },
													__jsx(
														'button',
														null,
														__jsx(
															bi_index_esm.UsY,
															{ size: 30 }
														)
													)
												),
												__jsx(
													'div',
													{ className: '' },
													__jsx(
														'button',
														null,
														__jsx(
															bi_index_esm.Goc,
															{ size: 30 }
														)
													)
												),
												__jsx(
													'div',
													{ className: '' },
													__jsx(
														'button',
														null,
														__jsx(index_esm.eRs, {
															size: 30,
														})
													)
												),
												__jsx(
													'div',
													{ className: '' },
													__jsx(
														'button',
														null,
														__jsx(
															ri_index_esm.A_l,
															{ size: 30 }
														)
													)
												)
											)
										)
									),
									__jsx(
										'div',
										{
											className:
												'hidden md:flex md:container md:ml-36 md:relative md:w-11/12 bg-white shadow-lg h-screen overflow-y-auto',
										},
										__jsx(
											'div',
											{
												className:
													'flex flex-col h-full w-full ',
											},
											__jsx(
												'div',
												{
													className:
														'px-3 h-20 flex shrink-0 w-full items-center justify-center border-b border-gray-150',
												},
												__jsx(input.I, {
													defaultValue:
														inputProps.defaultValue,
													label: inputProps.label,
													name: inputProps.name,
													onChange:
														inputProps.onChange,
													role: inputProps.role,
													type: inputProps.type,
													options: [],
												})
											),
											__jsx(
												'div',
												{ className: 'mx-4' },
												__jsx(
													'p',
													{
														className:
															'text-gray-700 ',
													},
													'Groups'
												),
												__jsx(
													'div',
													{
														className:
															'flex flex-col',
													},
													__jsx(
														'ul',
														{
															className:
																'text-xs ',
														},
														groupsProps
															? groupsProps.map(
																	function (
																		group,
																		groupIndex
																	) {
																		return __jsx(
																			'li',
																			{
																				className:
																					'pb-1/2 flex flex-row gap-x-4 items-center',
																				key: groupIndex,
																			},
																			__jsx(
																				'img',
																				{
																					alt: ''.concat(
																						group.groupsName,
																						' logo'
																					),
																					className:
																						'w-12 h-12 rounded-full p-1',
																					src: group.groupsProfileImage,
																				}
																			),
																			__jsx(
																				'div',
																				{
																					className:
																						'flex-grow',
																				},
																				__jsx(
																					'p',
																					{
																						className:
																							'',
																					},
																					group.groupsName
																				),
																				__jsx(
																					'p',
																					{
																						className:
																							'text-gray-400',
																					},
																					''.concat(
																						group.groupsMemberCount,
																						' members'
																					)
																				)
																			),
																			__jsx(
																				'button',
																				null,
																				__jsx(
																					index_esm.jbg,
																					{
																						size: 30,
																					}
																				)
																			)
																		)
																	}
															  )
															: null
													)
												)
											),
											__jsx(
												'div',
												{
													className:
														'mt-2 border-t border-gray-150',
												},
												__jsx(
													'div',
													{ className: 'mx-4' },
													__jsx(
														'p',
														{
															className:
																'text-gray-700 mb-2',
														},
														'Polls & Surveys'
													),
													__jsx(
														'div',
														{
															className:
																'flex flex-col',
														},
														__jsx(
															'ul',
															{
																className:
																	'text-xs',
															},
															pollSurveysProps
																? pollSurveysProps.map(
																		function (
																			poll,
																			pollIndex
																		) {
																			return __jsx(
																				'li',
																				{
																					className:
																						'pb-2 flex flex-row gap-x-4 items-center',
																					key: pollIndex,
																				},
																				__jsx(
																					'div',
																					{
																						className:
																							'flex-grow',
																					},
																					__jsx(
																						'p',
																						{
																							className:
																								'',
																						},
																						poll.pollSurveyName
																					),
																					__jsx(
																						'p',
																						{
																							className:
																								'text-gray-400',
																						},
																						'Takes about ' +
																							poll.timestamp +
																							' ',
																						1 ===
																							poll.timestamp
																							? 'minute'
																							: 'minutes'
																					)
																				),
																				__jsx(
																					'button',
																					null,
																					poll.pollSurveyName.endsWith(
																						'poll'
																					)
																						? __jsx(
																								bi_index_esm.zZK,
																								{
																									size: 30,
																								}
																						  )
																						: __jsx(
																								go_index_esm.lzP,
																								{
																									size: 30,
																								}
																						  )
																				)
																			)
																		}
																  )
																: null
														)
													)
												)
											),
											__jsx(
												'div',
												{
													className:
														'border-t border-gray-150',
												},
												__jsx(
													'div',
													{ className: 'mx-4' },
													__jsx(
														'p',
														{
															className:
																'text-gray-700 mb-2',
														},
														'Popular challenges'
													),
													__jsx(
														'div',
														{
															className:
																'flex flex-col',
														},
														__jsx(
															'ul',
															{
																className:
																	'text-xs',
															},
															challengesProps
																? challengesProps.map(
																		function (
																			challenge,
																			challengeIndex
																		) {
																			return __jsx(
																				'li',
																				{
																					className:
																						'pb-2 flex flex-row gap-x-4 items-center',
																					key: challengeIndex,
																				},
																				__jsx(
																					'div',
																					{
																						className:
																							'flex-grow',
																					},
																					__jsx(
																						'p',
																						{
																							className:
																								'',
																						},
																						challenge.challengesName
																					),
																					__jsx(
																						'p',
																						{
																							className:
																								'text-gray-400',
																						},
																						'Added by ' +
																							challenge.challengesUserCount.toLocaleString() +
																							' ',
																						1 ===
																							challenge.challengesUserCount
																							? 'user'
																							: 'users'
																					)
																				),
																				__jsx(
																					'button',
																					null,
																					__jsx(
																						index_esm.Lfi,
																						{
																							size: 30,
																						}
																					)
																				)
																			)
																		}
																  )
																: null
														)
													)
												)
											),
											__jsx(
												'div',
												{
													className:
														'border-t border-gray-150',
												},
												__jsx(
													'div',
													{ className: 'mx-4' },
													__jsx(
														'p',
														{
															className:
																'text-gray-700 mb-2',
														},
														'Most Recent Chats'
													),
													__jsx(
														'div',
														{
															className:
																'flex flex-col',
														},
														__jsx(
															'ul',
															{ className: '' },
															contactProps
																? contactProps.map(
																		function (
																			contact,
																			contactIndex
																		) {
																			return __jsx(
																				'li',
																				{
																					className:
																						'pb-2 flex flex-row gap-x-6 items-center',
																					key: contactIndex,
																				},
																				__jsx(
																					'div',
																					{
																						className:
																							'relative',
																					},
																					__jsx(
																						'img',
																						{
																							alt: ''
																								.concat(
																									contact.contactFirstName,
																									' '
																								)
																								.concat(
																									contact.contactLastName,
																									' avatar'
																								),
																							className:
																								'w-12 h-12 rounded-full p-1',
																							src: contact.contactProfileImage,
																						}
																					),
																					__jsx(
																						'span',
																						{
																							className:
																								'bottom-0 left-8 absolute w-3.5 h-3.5 border-2 border-white rounded-full \n                                '.concat(
																									'Online' ===
																										contact.contactStatus
																										? 'bg-green-400'
																										: 'Busy' ===
																										  contact.contactStatus
																										? 'bg-red-500'
																										: 'bg-gray-500',
																									'\n                              '
																								),
																						}
																					)
																				),
																				__jsx(
																					'div',
																					{
																						className:
																							'flex-grow',
																					},
																					__jsx(
																						'p',
																						{
																							className:
																								'font-light',
																						},
																						void 0 ===
																							contact.contactTitle
																							? ''
																							: contact.contactTitle +
																									' ',
																						contact.contactFirstName +
																							' ' +
																							contact.contactLastName
																					)
																				),
																				__jsx(
																					'button',
																					null,
																					__jsx(
																						md_index_esm.D6S,
																						{
																							size: 30,
																						}
																					)
																				)
																			)
																		}
																  )
																: null
														)
													)
												)
											)
										)
									)
								)
						  ))
						: __jsx('div', null, 'Loading...')
				}
			;(CommunityPage.displayName = 'CommunityPage'),
				(CommunityPage.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'CommunityPage',
				})
			try {
				;(CommunityPage.displayName = 'CommunityPage'),
					(CommunityPage.__docgenInfo = {
						description: '',
						displayName: 'CommunityPage',
						props: {
							socialCardProps: {
								defaultValue: null,
								description: '',
								name: 'socialCardProps',
								required: !0,
								type: { name: 'any' },
							},
							userAccountProps: {
								defaultValue: null,
								description: '',
								name: 'userAccountProps',
								required: !0,
								type: { name: 'any' },
							},
							inputProps: {
								defaultValue: null,
								description: '',
								name: 'inputProps',
								required: !0,
								type: { name: 'any' },
							},
							groupsProps: {
								defaultValue: null,
								description: '',
								name: 'groupsProps',
								required: !0,
								type: { name: 'any' },
							},
							pollSurveysProps: {
								defaultValue: null,
								description: '',
								name: 'pollSurveysProps',
								required: !0,
								type: { name: 'any' },
							},
							challengesProps: {
								defaultValue: null,
								description: '',
								name: 'challengesProps',
								required: !0,
								type: { name: 'any' },
							},
							contactProps: {
								defaultValue: null,
								description: '',
								name: 'contactProps',
								required: !0,
								type: { name: 'any' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/pages/community_page/community_page.tsx#CommunityPage'
						] = {
							docgenInfo: CommunityPage.__docgenInfo,
							name: 'CommunityPage',
							path: 'components/pages/community_page/community_page.tsx#CommunityPage',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var community_page_stories_jsx = react.createElement
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
								;(0, defineProperty.Z)(target, key, source[key])
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
			const community_page_stories = {
				title: 'Organisms/Community Page',
				component: CommunityPage,
			}
			var Template = function Template(args) {
				return community_page_stories_jsx(CommunityPage, args)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.storyName = 'empty Page'),
				(Primary.args = {
					socialCardProps: {
						timestamp: 1664376815,
						content:
							'AWESOME hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
						likes: 20,
						comments: 50,
						user: {
							firstName: 'Dr. Andres',
							lastName: 'Sousa-Poza',
							role: 'Prof',
							image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
							title: 'Chair of Department',
							office: 'ESB 2101',
							department:
								'Engineering Management & Systems Engineering',
						},
					},
					inputProps: {
						defaultValue: '',
						label: 'Search for anything',
						name: 'floating_search',
						onChange: function onChange(e) {
							return e
						},
						role: 'search',
						type: 'search',
					},
				})
			var Secondary = Template.bind({})
			;(Secondary.storyName = 'default page'),
				(Secondary.args = {
					socialCardProps: {
						timestamp: 1664376815,
						content:
							'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil!',
						likes: 21,
						comments: 55,
						user: {
							firstName: 'Avantika',
							lastName: 'Mittapally',
							role: 'Advisor',
							image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
							title: 'Chair of Department',
							office: 'ESB 2101',
							department:
								'Engineering Management & Systems Engineering',
						},
					},
					inputProps: {
						defaultValue: '',
						label: 'Search for anything',
						name: 'floating_search',
						onChange: function onChange(e) {
							return e
						},
						role: 'search',
						type: 'search',
					},
					groupsProps: [
						{
							groupsProfileImage:
								'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/306849544_459084019586392_8749864614951060700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rv5KsqxDA4oAX9tAd1r&_nc_ht=scontent-iad3-2.xx&oh=00_AfDK2qSAG7KaRNJsKk0If9TtX68wRQ5gCo7S53r14uzdRQ&oe=6365A648',
							groupsName: 'Global Student Outreach',
							groupsMemberCount: 3192,
						},
						{
							groupsProfileImage:
								'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/31355905_1645839505507774_7320080296362115072_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8saVkEgEd00AX8JCDQ2&_nc_ht=scontent-iad3-2.xx&oh=00_AfAb2EarsBlot7zluEi4F48uy0wh3FjslO4k1o_iCCstoQ&oe=638502B8',
							groupsName: 'Norfolk Monarchs',
							groupsMemberCount: 1916,
						},
						{
							groupsProfileImage:
								'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8467f215-dfc0-4d33-b207-7d00abc26933/d1zkdr0-6d9d8042-a9d9-41b8-88d5-a915d52f623c.jpg',
							groupsName: 'ODU Internationals',
							groupsMemberCount: 768,
						},
						{
							groupsProfileImage:
								'https://www.ilmcorp.com/wp-content/uploads/2017/01/Old-Dominion-University.jpg',
							groupsName: 'ENMA Honor Students',
							groupsMemberCount: 174,
						},
					],
					pollSurveysProps: [
						{
							pollSurveyName: 'ENMA platform usability survey',
							timestamp: 8,
						},
						{
							pollSurveyName: 'ENMA 604 opinion survey',
							timestamp: 3,
						},
						{
							pollSurveyName:
								'ODU Online student engagment opinion survey',
							timestamp: 25,
						},
						{
							pollSurveyName: 'Student time management poll',
							timestamp: 25,
						},
					],
					challengesProps: [
						{
							challengesName:
								'Finish a module assessment with an 85% or better',
							challengesUserCount: 42589,
						},
						{
							challengesName:
								'Get a 75% or better on one of your course exams',
							challengesUserCount: 18762,
						},
						{
							challengesName:
								'Complete a module of all 5 Learning types',
							challengesUserCount: 5328,
						},
						{
							challengesName:
								'Get a 75% or better on one of your course finals',
							challengesUserCount: 6231,
						},
					],
					contactProps: [
						{
							contactTitle: 'Prof.',
							contactFirstName: 'John',
							contactLastName: 'Doe',
							contactProfileImage:
								'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
							contactStatus: 'Online',
						},
						{
							contactFirstName: 'Terry',
							contactLastName: 'White',
							contactProfileImage:
								'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
							contactStatus: 'Offline',
						},
						{
							contactTitle: 'Prof.',
							contactFirstName: 'Warren',
							contactLastName: 'Wong',
							contactProfileImage:
								'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
							contactStatus: 'Busy',
						},
						{
							contactTitle: 'TA.',
							contactFirstName: 'Lerry',
							contactLastName: 'Jackson',
							contactProfileImage:
								'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
							contactStatus: 'Offline',
						},
					],
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
									: _Primary$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: CommunityPageProps) => <CommunityPage {...args} />',
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
										: _Primary$parameters2$.source
								),
							}
						),
					}
				)),
				(Secondary.parameters = _objectSpread(
					_objectSpread({}, Secondary.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Secondary$parameters =
										Secondary.parameters) ||
									void 0 === _Secondary$parameters
									? void 0
									: _Secondary$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: CommunityPageProps) => <CommunityPage {...args} />',
									},
									null ===
										(_Secondary$parameters2 =
											Secondary.parameters) ||
										void 0 === _Secondary$parameters2 ||
										null ===
											(_Secondary$parameters3 =
												_Secondary$parameters2.docs) ||
										void 0 === _Secondary$parameters3
										? void 0
										: _Secondary$parameters3.source
								),
							}
						),
					}
				))
		},
		'./utils/gql_fetcher.ts': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, {
				L: () => client,
				Z: () => __WEBPACK_DEFAULT_EXPORT__,
			})
			var graphql_request__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						'./node_modules/graphql-request/build/esm/index.js'
					),
				client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.g6(
					'http://localhost:4000/graphql',
					{ headers: {} }
				)
			const __WEBPACK_DEFAULT_EXPORT__ = function gqlFetcher(args) {
				return new graphql_request__WEBPACK_IMPORTED_MODULE_0__.g6(
					'http://localhost:4000/graphql',
					{ headers: { authorization: args.token } }
				).request(args.query, args.variables || {})
			}
		},
		'./node_modules/moment/locale sync recursive ^\\.\\/.*$': (
			module,
			__unused_webpack_exports,
			__webpack_require__
		) => {
			var map = {
				'./af': './node_modules/moment/locale/af.js',
				'./af.js': './node_modules/moment/locale/af.js',
				'./ar': './node_modules/moment/locale/ar.js',
				'./ar-dz': './node_modules/moment/locale/ar-dz.js',
				'./ar-dz.js': './node_modules/moment/locale/ar-dz.js',
				'./ar-kw': './node_modules/moment/locale/ar-kw.js',
				'./ar-kw.js': './node_modules/moment/locale/ar-kw.js',
				'./ar-ly': './node_modules/moment/locale/ar-ly.js',
				'./ar-ly.js': './node_modules/moment/locale/ar-ly.js',
				'./ar-ma': './node_modules/moment/locale/ar-ma.js',
				'./ar-ma.js': './node_modules/moment/locale/ar-ma.js',
				'./ar-sa': './node_modules/moment/locale/ar-sa.js',
				'./ar-sa.js': './node_modules/moment/locale/ar-sa.js',
				'./ar-tn': './node_modules/moment/locale/ar-tn.js',
				'./ar-tn.js': './node_modules/moment/locale/ar-tn.js',
				'./ar.js': './node_modules/moment/locale/ar.js',
				'./az': './node_modules/moment/locale/az.js',
				'./az.js': './node_modules/moment/locale/az.js',
				'./be': './node_modules/moment/locale/be.js',
				'./be.js': './node_modules/moment/locale/be.js',
				'./bg': './node_modules/moment/locale/bg.js',
				'./bg.js': './node_modules/moment/locale/bg.js',
				'./bm': './node_modules/moment/locale/bm.js',
				'./bm.js': './node_modules/moment/locale/bm.js',
				'./bn': './node_modules/moment/locale/bn.js',
				'./bn-bd': './node_modules/moment/locale/bn-bd.js',
				'./bn-bd.js': './node_modules/moment/locale/bn-bd.js',
				'./bn.js': './node_modules/moment/locale/bn.js',
				'./bo': './node_modules/moment/locale/bo.js',
				'./bo.js': './node_modules/moment/locale/bo.js',
				'./br': './node_modules/moment/locale/br.js',
				'./br.js': './node_modules/moment/locale/br.js',
				'./bs': './node_modules/moment/locale/bs.js',
				'./bs.js': './node_modules/moment/locale/bs.js',
				'./ca': './node_modules/moment/locale/ca.js',
				'./ca.js': './node_modules/moment/locale/ca.js',
				'./cs': './node_modules/moment/locale/cs.js',
				'./cs.js': './node_modules/moment/locale/cs.js',
				'./cv': './node_modules/moment/locale/cv.js',
				'./cv.js': './node_modules/moment/locale/cv.js',
				'./cy': './node_modules/moment/locale/cy.js',
				'./cy.js': './node_modules/moment/locale/cy.js',
				'./da': './node_modules/moment/locale/da.js',
				'./da.js': './node_modules/moment/locale/da.js',
				'./de': './node_modules/moment/locale/de.js',
				'./de-at': './node_modules/moment/locale/de-at.js',
				'./de-at.js': './node_modules/moment/locale/de-at.js',
				'./de-ch': './node_modules/moment/locale/de-ch.js',
				'./de-ch.js': './node_modules/moment/locale/de-ch.js',
				'./de.js': './node_modules/moment/locale/de.js',
				'./dv': './node_modules/moment/locale/dv.js',
				'./dv.js': './node_modules/moment/locale/dv.js',
				'./el': './node_modules/moment/locale/el.js',
				'./el.js': './node_modules/moment/locale/el.js',
				'./en-au': './node_modules/moment/locale/en-au.js',
				'./en-au.js': './node_modules/moment/locale/en-au.js',
				'./en-ca': './node_modules/moment/locale/en-ca.js',
				'./en-ca.js': './node_modules/moment/locale/en-ca.js',
				'./en-gb': './node_modules/moment/locale/en-gb.js',
				'./en-gb.js': './node_modules/moment/locale/en-gb.js',
				'./en-ie': './node_modules/moment/locale/en-ie.js',
				'./en-ie.js': './node_modules/moment/locale/en-ie.js',
				'./en-il': './node_modules/moment/locale/en-il.js',
				'./en-il.js': './node_modules/moment/locale/en-il.js',
				'./en-in': './node_modules/moment/locale/en-in.js',
				'./en-in.js': './node_modules/moment/locale/en-in.js',
				'./en-nz': './node_modules/moment/locale/en-nz.js',
				'./en-nz.js': './node_modules/moment/locale/en-nz.js',
				'./en-sg': './node_modules/moment/locale/en-sg.js',
				'./en-sg.js': './node_modules/moment/locale/en-sg.js',
				'./eo': './node_modules/moment/locale/eo.js',
				'./eo.js': './node_modules/moment/locale/eo.js',
				'./es': './node_modules/moment/locale/es.js',
				'./es-do': './node_modules/moment/locale/es-do.js',
				'./es-do.js': './node_modules/moment/locale/es-do.js',
				'./es-mx': './node_modules/moment/locale/es-mx.js',
				'./es-mx.js': './node_modules/moment/locale/es-mx.js',
				'./es-us': './node_modules/moment/locale/es-us.js',
				'./es-us.js': './node_modules/moment/locale/es-us.js',
				'./es.js': './node_modules/moment/locale/es.js',
				'./et': './node_modules/moment/locale/et.js',
				'./et.js': './node_modules/moment/locale/et.js',
				'./eu': './node_modules/moment/locale/eu.js',
				'./eu.js': './node_modules/moment/locale/eu.js',
				'./fa': './node_modules/moment/locale/fa.js',
				'./fa.js': './node_modules/moment/locale/fa.js',
				'./fi': './node_modules/moment/locale/fi.js',
				'./fi.js': './node_modules/moment/locale/fi.js',
				'./fil': './node_modules/moment/locale/fil.js',
				'./fil.js': './node_modules/moment/locale/fil.js',
				'./fo': './node_modules/moment/locale/fo.js',
				'./fo.js': './node_modules/moment/locale/fo.js',
				'./fr': './node_modules/moment/locale/fr.js',
				'./fr-ca': './node_modules/moment/locale/fr-ca.js',
				'./fr-ca.js': './node_modules/moment/locale/fr-ca.js',
				'./fr-ch': './node_modules/moment/locale/fr-ch.js',
				'./fr-ch.js': './node_modules/moment/locale/fr-ch.js',
				'./fr.js': './node_modules/moment/locale/fr.js',
				'./fy': './node_modules/moment/locale/fy.js',
				'./fy.js': './node_modules/moment/locale/fy.js',
				'./ga': './node_modules/moment/locale/ga.js',
				'./ga.js': './node_modules/moment/locale/ga.js',
				'./gd': './node_modules/moment/locale/gd.js',
				'./gd.js': './node_modules/moment/locale/gd.js',
				'./gl': './node_modules/moment/locale/gl.js',
				'./gl.js': './node_modules/moment/locale/gl.js',
				'./gom-deva': './node_modules/moment/locale/gom-deva.js',
				'./gom-deva.js': './node_modules/moment/locale/gom-deva.js',
				'./gom-latn': './node_modules/moment/locale/gom-latn.js',
				'./gom-latn.js': './node_modules/moment/locale/gom-latn.js',
				'./gu': './node_modules/moment/locale/gu.js',
				'./gu.js': './node_modules/moment/locale/gu.js',
				'./he': './node_modules/moment/locale/he.js',
				'./he.js': './node_modules/moment/locale/he.js',
				'./hi': './node_modules/moment/locale/hi.js',
				'./hi.js': './node_modules/moment/locale/hi.js',
				'./hr': './node_modules/moment/locale/hr.js',
				'./hr.js': './node_modules/moment/locale/hr.js',
				'./hu': './node_modules/moment/locale/hu.js',
				'./hu.js': './node_modules/moment/locale/hu.js',
				'./hy-am': './node_modules/moment/locale/hy-am.js',
				'./hy-am.js': './node_modules/moment/locale/hy-am.js',
				'./id': './node_modules/moment/locale/id.js',
				'./id.js': './node_modules/moment/locale/id.js',
				'./is': './node_modules/moment/locale/is.js',
				'./is.js': './node_modules/moment/locale/is.js',
				'./it': './node_modules/moment/locale/it.js',
				'./it-ch': './node_modules/moment/locale/it-ch.js',
				'./it-ch.js': './node_modules/moment/locale/it-ch.js',
				'./it.js': './node_modules/moment/locale/it.js',
				'./ja': './node_modules/moment/locale/ja.js',
				'./ja.js': './node_modules/moment/locale/ja.js',
				'./jv': './node_modules/moment/locale/jv.js',
				'./jv.js': './node_modules/moment/locale/jv.js',
				'./ka': './node_modules/moment/locale/ka.js',
				'./ka.js': './node_modules/moment/locale/ka.js',
				'./kk': './node_modules/moment/locale/kk.js',
				'./kk.js': './node_modules/moment/locale/kk.js',
				'./km': './node_modules/moment/locale/km.js',
				'./km.js': './node_modules/moment/locale/km.js',
				'./kn': './node_modules/moment/locale/kn.js',
				'./kn.js': './node_modules/moment/locale/kn.js',
				'./ko': './node_modules/moment/locale/ko.js',
				'./ko.js': './node_modules/moment/locale/ko.js',
				'./ku': './node_modules/moment/locale/ku.js',
				'./ku.js': './node_modules/moment/locale/ku.js',
				'./ky': './node_modules/moment/locale/ky.js',
				'./ky.js': './node_modules/moment/locale/ky.js',
				'./lb': './node_modules/moment/locale/lb.js',
				'./lb.js': './node_modules/moment/locale/lb.js',
				'./lo': './node_modules/moment/locale/lo.js',
				'./lo.js': './node_modules/moment/locale/lo.js',
				'./lt': './node_modules/moment/locale/lt.js',
				'./lt.js': './node_modules/moment/locale/lt.js',
				'./lv': './node_modules/moment/locale/lv.js',
				'./lv.js': './node_modules/moment/locale/lv.js',
				'./me': './node_modules/moment/locale/me.js',
				'./me.js': './node_modules/moment/locale/me.js',
				'./mi': './node_modules/moment/locale/mi.js',
				'./mi.js': './node_modules/moment/locale/mi.js',
				'./mk': './node_modules/moment/locale/mk.js',
				'./mk.js': './node_modules/moment/locale/mk.js',
				'./ml': './node_modules/moment/locale/ml.js',
				'./ml.js': './node_modules/moment/locale/ml.js',
				'./mn': './node_modules/moment/locale/mn.js',
				'./mn.js': './node_modules/moment/locale/mn.js',
				'./mr': './node_modules/moment/locale/mr.js',
				'./mr.js': './node_modules/moment/locale/mr.js',
				'./ms': './node_modules/moment/locale/ms.js',
				'./ms-my': './node_modules/moment/locale/ms-my.js',
				'./ms-my.js': './node_modules/moment/locale/ms-my.js',
				'./ms.js': './node_modules/moment/locale/ms.js',
				'./mt': './node_modules/moment/locale/mt.js',
				'./mt.js': './node_modules/moment/locale/mt.js',
				'./my': './node_modules/moment/locale/my.js',
				'./my.js': './node_modules/moment/locale/my.js',
				'./nb': './node_modules/moment/locale/nb.js',
				'./nb.js': './node_modules/moment/locale/nb.js',
				'./ne': './node_modules/moment/locale/ne.js',
				'./ne.js': './node_modules/moment/locale/ne.js',
				'./nl': './node_modules/moment/locale/nl.js',
				'./nl-be': './node_modules/moment/locale/nl-be.js',
				'./nl-be.js': './node_modules/moment/locale/nl-be.js',
				'./nl.js': './node_modules/moment/locale/nl.js',
				'./nn': './node_modules/moment/locale/nn.js',
				'./nn.js': './node_modules/moment/locale/nn.js',
				'./oc-lnc': './node_modules/moment/locale/oc-lnc.js',
				'./oc-lnc.js': './node_modules/moment/locale/oc-lnc.js',
				'./pa-in': './node_modules/moment/locale/pa-in.js',
				'./pa-in.js': './node_modules/moment/locale/pa-in.js',
				'./pl': './node_modules/moment/locale/pl.js',
				'./pl.js': './node_modules/moment/locale/pl.js',
				'./pt': './node_modules/moment/locale/pt.js',
				'./pt-br': './node_modules/moment/locale/pt-br.js',
				'./pt-br.js': './node_modules/moment/locale/pt-br.js',
				'./pt.js': './node_modules/moment/locale/pt.js',
				'./ro': './node_modules/moment/locale/ro.js',
				'./ro.js': './node_modules/moment/locale/ro.js',
				'./ru': './node_modules/moment/locale/ru.js',
				'./ru.js': './node_modules/moment/locale/ru.js',
				'./sd': './node_modules/moment/locale/sd.js',
				'./sd.js': './node_modules/moment/locale/sd.js',
				'./se': './node_modules/moment/locale/se.js',
				'./se.js': './node_modules/moment/locale/se.js',
				'./si': './node_modules/moment/locale/si.js',
				'./si.js': './node_modules/moment/locale/si.js',
				'./sk': './node_modules/moment/locale/sk.js',
				'./sk.js': './node_modules/moment/locale/sk.js',
				'./sl': './node_modules/moment/locale/sl.js',
				'./sl.js': './node_modules/moment/locale/sl.js',
				'./sq': './node_modules/moment/locale/sq.js',
				'./sq.js': './node_modules/moment/locale/sq.js',
				'./sr': './node_modules/moment/locale/sr.js',
				'./sr-cyrl': './node_modules/moment/locale/sr-cyrl.js',
				'./sr-cyrl.js': './node_modules/moment/locale/sr-cyrl.js',
				'./sr.js': './node_modules/moment/locale/sr.js',
				'./ss': './node_modules/moment/locale/ss.js',
				'./ss.js': './node_modules/moment/locale/ss.js',
				'./sv': './node_modules/moment/locale/sv.js',
				'./sv.js': './node_modules/moment/locale/sv.js',
				'./sw': './node_modules/moment/locale/sw.js',
				'./sw.js': './node_modules/moment/locale/sw.js',
				'./ta': './node_modules/moment/locale/ta.js',
				'./ta.js': './node_modules/moment/locale/ta.js',
				'./te': './node_modules/moment/locale/te.js',
				'./te.js': './node_modules/moment/locale/te.js',
				'./tet': './node_modules/moment/locale/tet.js',
				'./tet.js': './node_modules/moment/locale/tet.js',
				'./tg': './node_modules/moment/locale/tg.js',
				'./tg.js': './node_modules/moment/locale/tg.js',
				'./th': './node_modules/moment/locale/th.js',
				'./th.js': './node_modules/moment/locale/th.js',
				'./tk': './node_modules/moment/locale/tk.js',
				'./tk.js': './node_modules/moment/locale/tk.js',
				'./tl-ph': './node_modules/moment/locale/tl-ph.js',
				'./tl-ph.js': './node_modules/moment/locale/tl-ph.js',
				'./tlh': './node_modules/moment/locale/tlh.js',
				'./tlh.js': './node_modules/moment/locale/tlh.js',
				'./tr': './node_modules/moment/locale/tr.js',
				'./tr.js': './node_modules/moment/locale/tr.js',
				'./tzl': './node_modules/moment/locale/tzl.js',
				'./tzl.js': './node_modules/moment/locale/tzl.js',
				'./tzm': './node_modules/moment/locale/tzm.js',
				'./tzm-latn': './node_modules/moment/locale/tzm-latn.js',
				'./tzm-latn.js': './node_modules/moment/locale/tzm-latn.js',
				'./tzm.js': './node_modules/moment/locale/tzm.js',
				'./ug-cn': './node_modules/moment/locale/ug-cn.js',
				'./ug-cn.js': './node_modules/moment/locale/ug-cn.js',
				'./uk': './node_modules/moment/locale/uk.js',
				'./uk.js': './node_modules/moment/locale/uk.js',
				'./ur': './node_modules/moment/locale/ur.js',
				'./ur.js': './node_modules/moment/locale/ur.js',
				'./uz': './node_modules/moment/locale/uz.js',
				'./uz-latn': './node_modules/moment/locale/uz-latn.js',
				'./uz-latn.js': './node_modules/moment/locale/uz-latn.js',
				'./uz.js': './node_modules/moment/locale/uz.js',
				'./vi': './node_modules/moment/locale/vi.js',
				'./vi.js': './node_modules/moment/locale/vi.js',
				'./x-pseudo': './node_modules/moment/locale/x-pseudo.js',
				'./x-pseudo.js': './node_modules/moment/locale/x-pseudo.js',
				'./yo': './node_modules/moment/locale/yo.js',
				'./yo.js': './node_modules/moment/locale/yo.js',
				'./zh-cn': './node_modules/moment/locale/zh-cn.js',
				'./zh-cn.js': './node_modules/moment/locale/zh-cn.js',
				'./zh-hk': './node_modules/moment/locale/zh-hk.js',
				'./zh-hk.js': './node_modules/moment/locale/zh-hk.js',
				'./zh-mo': './node_modules/moment/locale/zh-mo.js',
				'./zh-mo.js': './node_modules/moment/locale/zh-mo.js',
				'./zh-tw': './node_modules/moment/locale/zh-tw.js',
				'./zh-tw.js': './node_modules/moment/locale/zh-tw.js',
			}
			function webpackContext(req) {
				var id = webpackContextResolve(req)
				return __webpack_require__(id)
			}
			function webpackContextResolve(req) {
				if (!__webpack_require__.o(map, req)) {
					var e = new Error("Cannot find module '" + req + "'")
					throw ((e.code = 'MODULE_NOT_FOUND'), e)
				}
				return map[req]
			}
			;(webpackContext.keys = function webpackContextKeys() {
				return Object.keys(map)
			}),
				(webpackContext.resolve = webpackContextResolve),
				(module.exports = webpackContext),
				(webpackContext.id =
					'./node_modules/moment/locale sync recursive ^\\.\\/.*$')
		},
	},
])
