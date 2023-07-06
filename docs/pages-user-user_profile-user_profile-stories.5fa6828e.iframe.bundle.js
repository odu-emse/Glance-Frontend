;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[896],
	{
		'./node_modules/@babel/runtime/helpers/esm/extends.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
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
											key,
										) && (target[key] = source[key])
								}
								return target
						  }),
					_extends.apply(this, arguments)
				)
			}
			__webpack_require__.d(__webpack_exports__, { Z: () => _extends })
		},
		'./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
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
			'use strict'
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
		'./components/pages/user/user_profile/user_profile.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					Secondary: () => Secondary,
					default: () => user_profile_stories,
				})
			var defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				button_button = __webpack_require__(
					'./components/common/button/button.tsx',
				),
				next_link = __webpack_require__('./node_modules/next/link.js'),
				link_default = __webpack_require__.n(next_link),
				__jsx = react.createElement
			function AccountSidebar(_ref) {
				var verifyEdit = _ref.verifyEdit,
					isEditMode = _ref.isEditMode,
					sessionUser = _ref.sessionUser,
					setEditMode = _ref.setEditMode,
					setUpdatedProfile = _ref.setUpdatedProfile,
					updateSocial = _ref.updateSocial,
					userOpenID = _ref.userOpenID,
					contextAccount = _ref.contextAccount,
					updatedProfile = _ref.updatedProfile,
					setInstructorMode = _ref.setInstructorMode,
					instructorMode = _ref.instructorMode,
					isInstructor = _ref.isInstructor,
					defaultUserData = _ref.defaultUserData,
					instructorDetails = _ref.instructorDetails
				return __jsx(
					'aside',
					{ className: 'flex-none flex-col md:mr-8 md:mx-6 mx-0' },
					__jsx(
						'div',
						{
							className:
								'relative h-48 w-48 mb-5 rounded-full overflow-clip mx-auto',
						},
						__jsx('img', {
							className: 'w-full',
							src: verifyEdit(sessionUser.openId)
								? sessionUser.user.image
								: updatedProfile.picURL,
							alt: 'The profile picture of the current user',
							referrerPolicy: 'no-referrer',
						}),
					),
					__jsx(
						'div',
						{ className: 'flex justify-center mb-5' },
						verifyEdit(sessionUser.openId)
							? isEditMode
								? __jsx(
										'div',
										{
											className:
												'flex flex-col gap-1 w-full',
										},
										__jsx(
											button_button.z,
											{
												onClick: function onClick() {
													console.log(
														'Saving changes',
													),
														updateSocial(
															userOpenID,
															contextAccount.id,
															updatedProfile.social ||
																{},
															{
																id: contextAccount.id,
																openID: userOpenID,
																biography:
																	updatedProfile.biography,
															},
															instructorDetails,
														),
														setEditMode(!isEditMode)
												},
												size: 'large',
												className: 'w-full',
											},
											'Save Changes',
										),
										__jsx(
											button_button.z,
											{
												onClick: function onClick() {
													setEditMode(!isEditMode),
														setUpdatedProfile(
															defaultUserData,
														)
												},
												size: 'large',
												className: 'w-full',
												variant: 'secondary',
											},
											'Discard Changes',
										),
								  )
								: __jsx(
										'div',
										{
											className:
												'flex flex-col gap-1 w-full',
										},
										__jsx(
											button_button.z,
											{
												onClick: function onClick() {
													return setEditMode(
														!isEditMode,
													)
												},
												size: 'large',
												className: 'w-full',
											},
											instructorMode
												? 'Edit Instructor Profile'
												: 'Edit Profile',
										),
										isInstructor &&
											__jsx(
												button_button.z,
												{
													onClick:
														function onClick() {
															setInstructorMode(
																!instructorMode,
															)
														},
													size: 'large',
													className: 'w-full',
													variant: 'secondary',
												},
												instructorMode
													? 'View Student Profile'
													: 'View Instructor Profile',
											),
								  )
							: __jsx(
									button_button.z,
									{ size: 'large', className: 'w-full' },
									'Message',
							  ),
					),
					__jsx(
						'div',
						{
							className:
								'flex flex-col items-start justify-center',
						},
						instructorMode
							? __jsx(
									react.Fragment,
									null,
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/settings#instructed',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'My Modules',
											),
										),
									),
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/settings#watched',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'Watched Threads',
											),
										),
									),
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'Publications',
											),
										),
									),
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/settings#connection',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'Connections',
											),
										),
									),
							  )
							: __jsx(
									react.Fragment,
									null,
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/settings#plan',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'Plan of study',
											),
										),
									),
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/settings#watched',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'Watched Threads',
											),
										),
									),
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/settings#feedback',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'Module Reviews',
											),
										),
									),
									__jsx(
										link_default(),
										{
											href: '/users/'.concat(
												userOpenID,
												'/settings#connection',
											),
										},
										__jsx(
											'a',
											null,
											__jsx(
												'h4',
												{
													className:
														'uppercase my-2 font-bold text-royalblue underline cursor-pointer',
												},
												'Connections',
											),
										),
									),
							  ),
					),
				)
			}
			;(AccountSidebar.displayName = 'AccountSidebar'),
				(AccountSidebar.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'AccountSidebar',
					props: {
						verifyEdit: {
							required: !0,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '(openID: string) => boolean',
								signature: {
									arguments: [
										{
											name: 'openID',
											type: { name: 'string' },
										},
									],
									return: { name: 'boolean' },
								},
							},
							description: '',
						},
						isEditMode: {
							required: !0,
							tsType: { name: 'boolean' },
							description: '',
						},
						sessionUser: {
							required: !0,
							tsType: { name: 'Session' },
							description: '',
						},
						setEditMode: {
							required: !0,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '(isEditMode: boolean) => void',
								signature: {
									arguments: [
										{
											name: 'isEditMode',
											type: { name: 'boolean' },
										},
									],
									return: { name: 'void' },
								},
							},
							description: '',
						},
						setUpdatedProfile: {
							required: !0,
							tsType: {
								name: 'ReactDispatch',
								raw: 'React.Dispatch<React.SetStateAction<User>>',
								elements: [
									{
										name: 'ReactSetStateAction',
										raw: 'React.SetStateAction<User>',
										elements: [{ name: 'User' }],
									},
								],
							},
							description: '',
						},
						updateSocial: {
							required: !0,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '(\n\topenID: string,\n\taccountID: string,\n\tsocialInput: {\n\t\tgithub?: string | null\n\t\tlinkedin?: string | null\n\t\tportfolio?: string | null\n\t\tfacebook?: string | null\n\t\ttwitter?: string | null\n\t},\n\tuserInput: {\n\t\tid: string\n\t\topenID: string\n\t\tbiography?: string | null\n\t\tphoneNumber?: string | null\n\t},\n\tinstructorInput?: InstructorProfile\n) => void',
								signature: {
									arguments: [
										{
											name: 'openID',
											type: { name: 'string' },
										},
										{
											name: 'accountID',
											type: { name: 'string' },
										},
										{
											name: 'socialInput',
											type: {
												name: 'signature',
												type: 'object',
												raw: '{\n\tgithub?: string | null\n\tlinkedin?: string | null\n\tportfolio?: string | null\n\tfacebook?: string | null\n\ttwitter?: string | null\n}',
												signature: {
													properties: [
														{
															key: 'github',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'linkedin',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'portfolio',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'facebook',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'twitter',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
													],
												},
											},
										},
										{
											name: 'userInput',
											type: {
												name: 'signature',
												type: 'object',
												raw: '{\n\tid: string\n\topenID: string\n\tbiography?: string | null\n\tphoneNumber?: string | null\n}',
												signature: {
													properties: [
														{
															key: 'id',
															value: {
																name: 'string',
																required: !0,
															},
														},
														{
															key: 'openID',
															value: {
																name: 'string',
																required: !0,
															},
														},
														{
															key: 'biography',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'phoneNumber',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
													],
												},
											},
										},
										{
											name: 'instructorInput',
											type: { name: 'InstructorProfile' },
										},
									],
									return: { name: 'void' },
								},
							},
							description: '',
						},
						userOpenID: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						contextAccount: {
							required: !0,
							tsType: {
								name: 'union',
								raw: "| (Omit<UserAccount & { openID: string; biography?: string }, 'id'> & {\n\t\tid: string\n  })\n| null",
								elements: [
									{ name: 'unknown' },
									{ name: 'null' },
								],
							},
							description: '',
						},
						updatedProfile: {
							required: !0,
							tsType: { name: 'User' },
							description: '',
						},
						setInstructorMode: {
							required: !0,
							tsType: {
								name: 'ReactDispatch',
								raw: 'React.Dispatch<React.SetStateAction<boolean>>',
								elements: [
									{
										name: 'ReactSetStateAction',
										raw: 'React.SetStateAction<boolean>',
										elements: [{ name: 'boolean' }],
									},
								],
							},
							description: '',
						},
						instructorMode: {
							required: !0,
							tsType: { name: 'boolean' },
							description: '',
						},
						isInstructor: {
							required: !0,
							tsType: {
								name: 'union',
								raw: 'true | false',
								elements: [
									{ name: 'literal', value: 'true' },
									{ name: 'literal', value: 'false' },
								],
							},
							description: '',
						},
						defaultUserData: {
							required: !0,
							tsType: { name: 'User' },
							description: '',
						},
						instructorDetails: {
							required: !0,
							tsType: { name: 'InstructorProfile' },
							description: '',
						},
					},
				})
			const account_sidebar = AccountSidebar
			try {
				;(AccountSidebar.displayName = 'AccountSidebar'),
					(AccountSidebar.__docgenInfo = {
						description: '',
						displayName: 'AccountSidebar',
						props: {
							verifyEdit: {
								defaultValue: null,
								description: '',
								name: 'verifyEdit',
								required: !0,
								type: { name: '(openID: string) => boolean' },
							},
							isEditMode: {
								defaultValue: null,
								description: '',
								name: 'isEditMode',
								required: !0,
								type: { name: 'boolean' },
							},
							sessionUser: {
								defaultValue: null,
								description: '',
								name: 'sessionUser',
								required: !0,
								type: { name: 'Session' },
							},
							setEditMode: {
								defaultValue: null,
								description: '',
								name: 'setEditMode',
								required: !0,
								type: { name: '(isEditMode: boolean) => void' },
							},
							setUpdatedProfile: {
								defaultValue: null,
								description: '',
								name: 'setUpdatedProfile',
								required: !0,
								type: {
									name: 'Dispatch<SetStateAction<User>>',
								},
							},
							updateSocial: {
								defaultValue: null,
								description: '',
								name: 'updateSocial',
								required: !0,
								type: {
									name: '(openID: string, accountID: string, socialInput: { github?: string; linkedin?: string; portfolio?: string; facebook?: string; twitter?: string; }, userInput: { id: string; openID: string; biography?: string; phoneNumber?: string; }, instructorInput?: InstructorProfile) => void',
								},
							},
							userOpenID: {
								defaultValue: null,
								description: '',
								name: 'userOpenID',
								required: !0,
								type: { name: 'string' },
							},
							contextAccount: {
								defaultValue: null,
								description: '',
								name: 'contextAccount',
								required: !0,
								type: {
									name: 'Omit<UserAccount & { openID: string; biography?: string; }, "id"> & { id: string; }',
								},
							},
							updatedProfile: {
								defaultValue: null,
								description: '',
								name: 'updatedProfile',
								required: !0,
								type: { name: 'User' },
							},
							setInstructorMode: {
								defaultValue: null,
								description: '',
								name: 'setInstructorMode',
								required: !0,
								type: {
									name: 'Dispatch<SetStateAction<boolean>>',
								},
							},
							instructorMode: {
								defaultValue: null,
								description: '',
								name: 'instructorMode',
								required: !0,
								type: { name: 'boolean' },
							},
							isInstructor: {
								defaultValue: null,
								description: '',
								name: 'isInstructor',
								required: !0,
								type: { name: 'boolean' },
							},
							defaultUserData: {
								defaultValue: null,
								description: '',
								name: 'defaultUserData',
								required: !0,
								type: { name: 'User' },
							},
							instructorDetails: {
								defaultValue: null,
								description: '',
								name: 'instructorDetails',
								required: !0,
								type: { name: 'InstructorProfile' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/user/account_sidebar.tsx#AccountSidebar'
						] = {
							docgenInfo: AccountSidebar.__docgenInfo,
							name: 'AccountSidebar',
							path: 'components/common/user/account_sidebar.tsx#AccountSidebar',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var editable_field = __webpack_require__(
					'./components/common/user/editable_field.tsx',
				),
				student_content_jsx = react.createElement
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
			function StudentContent(_ref) {
				var _user$social,
					_user$social2,
					_user$social3,
					_user$social4,
					_user$social5,
					_user$social6,
					_user$social7,
					_user$social8,
					_user$social9,
					_user$social10,
					_user$social11,
					_user$social12,
					_user$social13,
					_user$social14,
					_user$social15,
					user = _ref.user,
					isEditMode = _ref.isEditMode,
					setUpdatedProfile = _ref.setUpdatedProfile
				return student_content_jsx(
					'div',
					{ className: 'md:mx-10 w-full' },
					student_content_jsx(
						'div',
						{ className: 'mb-3' },
						student_content_jsx(
							'h4',
							{ className: 'm-0 uppercase font-bold' },
							'Contact Information:',
						),
						isEditMode
							? student_content_jsx(
									'div',
									{ className: 'flex flex-row items-center' },
									student_content_jsx(
										'p',
										{ className: ' w-1/2 m-3' },
										'See ',
										student_content_jsx(
											link_default(),
											{ href: '/settings' },
											'Settings',
										),
										' to change your preferred contact information.Check the contact methods you’d prefer to be visible to others on your profile.',
									),
									student_content_jsx(
										'span',
										{ className: 'flex-none m-5' },
										student_content_jsx(
											'svg',
											{
												width: '65',
												height: '48',
												viewBox: '0 0 65 48',
												fill: 'none',
												xmlns: 'http://www.w3.org/2000/svg',
											},
											student_content_jsx('path', {
												fillRule: 'evenodd',
												clipRule: 'evenodd',
												d: 'M27.7704 19.8607C26.6812 22.4232 26.1283 25.1435 26.1283 27.9462C26.1283 30.749 26.6812 33.4692 27.7704 36.0317C28.8227 38.5052 30.3278 40.7261 32.245 42.6328C32.5424 42.9286 32.8478 43.2147 33.1604 43.4909C30.1047 44.9813 26.668 45.8178 23.0345 45.8178C20.3895 45.8178 17.8438 45.3733 15.4726 44.5545L2.75887 47.926C1.79998 48.1807 0.789095 47.7631 0.293525 46.9076C-0.197438 46.0613 -0.061864 44.995 0.621931 44.2966C0.625221 44.2927 0.631803 44.2848 0.642333 44.2731C0.672607 44.239 0.730522 44.1709 0.810813 44.0662C0.971397 43.8574 1.22083 43.5033 1.5104 42.9856C2.08627 41.954 2.82995 40.2575 3.33342 37.7538C3.51506 36.8499 3.62957 36.0547 3.6967 35.3608C1.35838 31.7753 0 27.4972 0 22.9089C0 10.2566 10.3129 0 23.0345 0C30.1054 0 36.432 3.16863 40.6572 8.15556C40.0576 8.34603 39.466 8.564 38.8822 8.80945C36.3951 9.85606 34.1621 11.353 32.245 13.2597C30.3278 15.1663 28.8227 17.3872 27.7704 19.8607Z',
												fill: 'black',
											}),
											student_content_jsx('path', {
												fillRule: 'evenodd',
												'clip-rule': 'evenodd',
												d: 'M64.5143 44.6474C65.048 45.1927 65.154 46.0259 64.771 46.687C64.7512 46.7204 64.7308 46.7531 64.7098 46.7852C64.688 46.8166 64.6657 46.848 64.6426 46.8775C64.6189 46.9076 64.5952 46.937 64.5696 46.9652C64.5571 46.9789 64.5446 46.9927 64.5314 47.0064C64.5189 47.0201 64.5058 47.0339 64.4919 47.047C64.1721 47.3618 63.7384 47.5399 63.2869 47.5399C63.1401 47.5399 62.9921 47.5209 62.8453 47.4823L52.9168 44.849C51.0655 45.4885 49.0779 45.8361 47.0121 45.8361C42.7862 45.8361 38.9006 44.3869 35.8305 41.9606C31.6836 38.6833 29.0241 33.6237 29.0241 27.9462C29.0241 19.6218 34.7406 12.6254 42.4828 10.6284C43.93 10.2547 45.4477 10.0563 47.0121 10.0563C56.9465 10.0563 65 18.0659 65 27.9462C65 31.5292 63.9391 34.8699 62.1128 37.6701C62.1654 38.2114 62.2549 38.8325 62.3971 39.5381C62.79 41.4939 63.3705 42.818 63.8206 43.6244C64.0464 44.0283 64.2412 44.3051 64.3662 44.4681C64.4294 44.5499 64.4748 44.6029 64.4985 44.6298C64.5064 44.6383 64.5117 44.6448 64.5143 44.6474Z',
												fill: 'black',
											}),
										),
									),
							  )
							: student_content_jsx(
									'div',
									{ className: 'ml-3 mt-3.5 mb-5' },
									student_content_jsx(
										'h4',
										{ className: 'uppercase my-1' },
										null == user ? void 0 : user.email,
									),
									student_content_jsx(
										'h4',
										{ className: 'my-1' },
										null == user
											? void 0
											: user.phoneNumber,
									),
							  ),
					),
					student_content_jsx(
						'div',
						{ className: 'SocialMedia mb-3' },
						student_content_jsx(
							'h4',
							{ className: 'my-1 uppercase font-bold' },
							'Socials:',
						),
						student_content_jsx(editable_field.Z, {
							type: 'text',
							platform: 'github',
							inputDetails: {
								type: 'url',
								placeholder: 'GITHUB:',
								defaultValue:
									(null == user ||
									null === (_user$social = user.social) ||
									void 0 === _user$social
										? void 0
										: _user$social.github) || '',
								name: 'github',
								onChange: function onChange(e) {
									setUpdatedProfile(function (prevState) {
										return _objectSpread(
											_objectSpread({}, prevState),
											{},
											{
												social: _objectSpread(
													_objectSpread(
														{},
														null == prevState
															? void 0
															: prevState.social,
													),
													{},
													{ github: e },
												),
											},
										)
									})
								},
							},
							isEditing: isEditMode,
							header: '@'.concat(
								null == user ||
									null === (_user$social2 = user.social) ||
									void 0 === _user$social2
									? void 0
									: _user$social2.github,
							),
							headerURL: 'https://github.com/'.concat(
								null == user ||
									null === (_user$social3 = user.social) ||
									void 0 === _user$social3
									? void 0
									: _user$social3.github,
							),
						}),
						student_content_jsx(editable_field.Z, {
							type: 'text',
							platform: 'twitter',
							inputDetails: {
								type: 'url',
								placeholder: 'TWITTER:',
								defaultValue:
									(null == user ||
									null === (_user$social4 = user.social) ||
									void 0 === _user$social4
										? void 0
										: _user$social4.twitter) || '',
								name: 'twitter',
								onChange: function onChange(e) {
									setUpdatedProfile(function (prevState) {
										return _objectSpread(
											_objectSpread({}, prevState),
											{},
											{
												social: _objectSpread(
													_objectSpread(
														{},
														null == prevState
															? void 0
															: prevState.social,
													),
													{},
													{ twitter: e },
												),
											},
										)
									})
								},
							},
							isEditing: isEditMode,
							header: '@'.concat(
								null == user ||
									null === (_user$social5 = user.social) ||
									void 0 === _user$social5
									? void 0
									: _user$social5.twitter,
							),
							headerURL: 'https://twitter.com/'.concat(
								null == user ||
									null === (_user$social6 = user.social) ||
									void 0 === _user$social6
									? void 0
									: _user$social6.twitter,
							),
						}),
						student_content_jsx(editable_field.Z, {
							type: 'text',
							platform: 'linkedin',
							inputDetails: {
								type: 'url',
								placeholder: 'LINKEDIN:',
								defaultValue:
									(null == user ||
									null === (_user$social7 = user.social) ||
									void 0 === _user$social7
										? void 0
										: _user$social7.linkedin) || '',
								name: 'linkedin',
								onChange: function onChange(e) {
									setUpdatedProfile(function (prevState) {
										return _objectSpread(
											_objectSpread({}, prevState),
											{},
											{
												social: _objectSpread(
													_objectSpread(
														{},
														null == prevState
															? void 0
															: prevState.social,
													),
													{},
													{ linkedin: e },
												),
											},
										)
									})
								},
							},
							isEditing: isEditMode,
							header: '@'.concat(
								null == user ||
									null === (_user$social8 = user.social) ||
									void 0 === _user$social8
									? void 0
									: _user$social8.linkedin,
							),
							headerURL: 'https://linkedin.com/'.concat(
								null == user ||
									null === (_user$social9 = user.social) ||
									void 0 === _user$social9
									? void 0
									: _user$social9.linkedin,
							),
						}),
						student_content_jsx(editable_field.Z, {
							type: 'text',
							platform: 'facebook',
							inputDetails: {
								type: 'url',
								placeholder: 'FACEBOOK:',
								defaultValue:
									(null == user ||
									null === (_user$social10 = user.social) ||
									void 0 === _user$social10
										? void 0
										: _user$social10.facebook) || '',
								name: 'facebook',
								onChange: function onChange(e) {
									setUpdatedProfile(function (prevState) {
										return _objectSpread(
											_objectSpread({}, prevState),
											{},
											{
												social: _objectSpread(
													_objectSpread(
														{},
														null == prevState
															? void 0
															: prevState.social,
													),
													{},
													{ facebook: e },
												),
											},
										)
									})
								},
							},
							isEditing: isEditMode,
							header: '@'.concat(
								null == user ||
									null === (_user$social11 = user.social) ||
									void 0 === _user$social11
									? void 0
									: _user$social11.facebook,
							),
							headerURL: 'https://facebook.com/'.concat(
								null == user ||
									null === (_user$social12 = user.social) ||
									void 0 === _user$social12
									? void 0
									: _user$social12.facebook,
							),
						}),
						student_content_jsx(editable_field.Z, {
							type: 'text',
							platform: 'url',
							inputDetails: {
								type: 'url',
								placeholder: 'PORTFOLIO:',
								defaultValue:
									(null == user ||
									null === (_user$social13 = user.social) ||
									void 0 === _user$social13
										? void 0
										: _user$social13.portfolio) || '',
								name: 'portfolio',
								onChange: function onChange(e) {
									setUpdatedProfile(function (prevState) {
										return _objectSpread(
											_objectSpread({}, prevState),
											{},
											{
												social: _objectSpread(
													_objectSpread(
														{},
														null == prevState
															? void 0
															: prevState.social,
													),
													{},
													{ portfolio: e },
												),
											},
										)
									})
								},
							},
							isEditing: isEditMode,
							header: ''.concat(
								null == user ||
									null === (_user$social14 = user.social) ||
									void 0 === _user$social14
									? void 0
									: _user$social14.portfolio,
							),
							headerURL: ''.concat(
								null == user ||
									null === (_user$social15 = user.social) ||
									void 0 === _user$social15
									? void 0
									: _user$social15.portfolio,
							),
						}),
					),
					student_content_jsx(
						'div',
						{ className: 'mb-3' },
						student_content_jsx(
							'h4',
							{ className: 'font-bold uppercase my-1' },
							'Biography',
						),
						student_content_jsx(editable_field.Z, {
							type: 'area',
							inputDetails: {
								placeholder:
									'Write something about yourself...',
								defaultValue: user.biography || '',
								name: 'biography',
								className:
									'border-royalblue focus:border-royalblue rounded-none font-normal',
								handle: function handle(e) {
									setUpdatedProfile(function (prevState) {
										return _objectSpread(
											_objectSpread({}, prevState),
											{},
											{ biography: e.target.value },
										)
									})
								},
							},
							isEditing: isEditMode,
						}),
					),
				)
			}
			;(StudentContent.displayName = 'StudentContent'),
				(StudentContent.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'StudentContent',
					props: {
						user: {
							required: !0,
							tsType: { name: 'User' },
							description: '',
						},
						isEditMode: {
							required: !0,
							tsType: { name: 'boolean' },
							description: '',
						},
						setUpdatedProfile: {
							required: !0,
							tsType: {
								name: 'ReactDispatch',
								raw: 'React.Dispatch<React.SetStateAction<User | null>>',
								elements: [
									{
										name: 'ReactSetStateAction',
										raw: 'React.SetStateAction<User | null>',
										elements: [
											{
												name: 'union',
												raw: 'User | null',
												elements: [
													{ name: 'User' },
													{ name: 'null' },
												],
											},
										],
									},
								],
							},
							description: '',
						},
					},
				})
			const student_content = StudentContent
			try {
				;(StudentContent.displayName = 'StudentContent'),
					(StudentContent.__docgenInfo = {
						description: '',
						displayName: 'StudentContent',
						props: {
							user: {
								defaultValue: null,
								description: '',
								name: 'user',
								required: !0,
								type: { name: 'User' },
							},
							isEditMode: {
								defaultValue: null,
								description: '',
								name: 'isEditMode',
								required: !0,
								type: { name: 'boolean' },
							},
							setUpdatedProfile: {
								defaultValue: null,
								description: '',
								name: 'setUpdatedProfile',
								required: !0,
								type: {
									name: 'Dispatch<SetStateAction<User>>',
								},
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/user/student_content.tsx#StudentContent'
						] = {
							docgenInfo: StudentContent.__docgenInfo,
							name: 'StudentContent',
							path: 'components/common/user/student_content.tsx#StudentContent',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var toConsumableArray = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js',
				),
				esm_extends = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/extends.js',
				),
				slicedToArray = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
				),
				input = __webpack_require__(
					'./components/common/forms/inputs/input/input.tsx',
				),
				editable_field_list_jsx = react.createElement
			function editable_field_list_ownKeys(object, enumerableOnly) {
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
			function editable_field_list_objectSpread(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = null != arguments[i] ? arguments[i] : {}
					i % 2
						? editable_field_list_ownKeys(
								Object(source),
								!0,
						  ).forEach(function (key) {
								;(0, defineProperty.Z)(target, key, source[key])
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source),
						  )
						: editable_field_list_ownKeys(Object(source)).forEach(
								function (key) {
									Object.defineProperty(
										target,
										key,
										Object.getOwnPropertyDescriptor(
											source,
											key,
										),
									)
								},
						  )
				}
				return target
			}
			var EditableFieldList = function EditableFieldList(_ref) {
				var listData = _ref.listData,
					handleUpdate = _ref.handleUpdate,
					mutableData = _ref.mutableData,
					inputDetails = (_ref.persistentData, _ref.inputDetails),
					isEditing = _ref.isEditing,
					_React$useState = react.useState(null),
					_React$useState2 = (0, slicedToArray.Z)(_React$useState, 2),
					addEntryData = _React$useState2[0],
					setAddEntryData = _React$useState2[1],
					_React$useState3 = react.useState(!1),
					_React$useState4 = (0, slicedToArray.Z)(
						_React$useState3,
						2,
					),
					isAddingEntry = _React$useState4[0],
					setIsAddingEntry = _React$useState4[1]
				return editable_field_list_jsx(
					'ul',
					{ className: 'ml-3 list-none m-0' },
					listData.length > 0
						? listData.map(function (item, index) {
								return isEditing
									? editable_field_list_jsx(
											'li',
											{
												key: index,
												className:
													'flex justify-between gap-1',
											},
											editable_field_list_jsx(
												input.I,
												(0, esm_extends.Z)(
													{},
													inputDetails,
													{
														defaultValue: item,
														onChange:
															function onChange(
																e,
															) {
																return handleUpdate(
																	function (
																		prev,
																	) {
																		return editable_field_list_objectSpread(
																			editable_field_list_objectSpread(
																				{},
																				prev,
																			),
																			{},
																			(0,
																			defineProperty.Z)(
																				{},
																				inputDetails.name,
																				mutableData[
																					inputDetails
																						.name
																				].map(
																					function (
																						item,
																						i,
																					) {
																						return i ===
																							index
																							? e
																							: item
																					},
																				),
																			),
																		)
																	},
																)
															},
													},
												),
											),
											editable_field_list_jsx(
												button_button.z,
												{
													className: 'rounded-md',
													size: 'small',
													onClick:
														function onClick() {
															handleUpdate(
																function (
																	prev,
																) {
																	return editable_field_list_objectSpread(
																		editable_field_list_objectSpread(
																			{},
																			prev,
																		),
																		{},
																		(0,
																		defineProperty.Z)(
																			{},
																			inputDetails.name,
																			mutableData[
																				inputDetails
																					.name
																			].filter(
																				function (
																					item,
																					i,
																				) {
																					return (
																						i !==
																						index
																					)
																				},
																			),
																		),
																	)
																},
															)
														},
												},
												'X',
											),
									  )
									: editable_field_list_jsx(
											'li',
											{
												key: index,
												className: 'sans my-1',
											},
											item,
									  )
						  })
						: null,
					isEditing &&
						editable_field_list_jsx(
							react.Fragment,
							null,
							isAddingEntry &&
								editable_field_list_jsx(
									'div',
									{ className: 'flex gap-1' },
									editable_field_list_jsx(input.I, {
										label: null,
										name: inputDetails.name,
										onChange: function onChange(e) {
											return setAddEntryData(e)
										},
										type: 'text',
									}),
									editable_field_list_jsx(
										button_button.z,
										{
											onClick: function onClick() {
												handleUpdate(function (prev) {
													return editable_field_list_objectSpread(
														editable_field_list_objectSpread(
															{},
															prev,
														),
														{},
														(0, defineProperty.Z)(
															{},
															inputDetails.name,
															[].concat(
																(0,
																toConsumableArray.Z)(
																	mutableData[
																		inputDetails
																			.name
																	],
																),
																[addEntryData],
															),
														),
													)
												}),
													setIsAddingEntry(!1),
													setAddEntryData(null)
											},
											size: 'small',
										},
										'Add',
									),
									editable_field_list_jsx(
										button_button.z,
										{
											onClick: function onClick() {
												setIsAddingEntry(!1),
													setAddEntryData(null)
											},
											size: 'small',
										},
										'Cancel',
									),
								),
							editable_field_list_jsx(
								button_button.z,
								{
									className: 'sans my-1',
									onClick: function onClick() {
										setIsAddingEntry(!0)
									},
									size: 'small',
								},
								'Add entry',
							),
						),
				)
			}
			;(EditableFieldList.displayName = 'EditableFieldList'),
				(EditableFieldList.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'EditableFieldList',
					props: {
						listData: {
							required: !0,
							tsType: {
								name: 'union',
								raw: 'Array<string> | []',
								elements: [
									{
										name: 'Array',
										elements: [{ name: 'string' }],
										raw: 'Array<string>',
									},
									{ name: 'tuple', raw: '[]', elements: [] },
								],
							},
							description: '',
						},
						handleUpdate: {
							required: !0,
							tsType: {
								name: 'ReactDispatch',
								raw: 'React.Dispatch<React.SetStateAction<InstructorProfile>>',
								elements: [
									{
										name: 'ReactSetStateAction',
										raw: 'React.SetStateAction<InstructorProfile>',
										elements: [
											{ name: 'InstructorProfile' },
										],
									},
								],
							},
							description: '',
						},
						mutableData: {
							required: !0,
							tsType: { name: 'InstructorProfile' },
							description: '',
						},
						isEditing: {
							required: !0,
							tsType: { name: 'boolean' },
							description: '',
						},
						persistentData: {
							required: !0,
							tsType: { name: 'InstructorProfile' },
							description: '',
						},
						inputDetails: {
							required: !0,
							tsType: {
								name: 'Omit',
								elements: [
									{ name: 'InputProps' },
									{ name: 'literal', value: "'onChange'" },
								],
								raw: "Omit<InputProps, 'onChange'>",
							},
							description: '',
						},
					},
				})
			try {
				;(EditableFieldList.displayName = 'EditableFieldList'),
					(EditableFieldList.__docgenInfo = {
						description: '',
						displayName: 'EditableFieldList',
						props: {
							listData: {
								defaultValue: null,
								description: '',
								name: 'listData',
								required: !0,
								type: { name: 'string[] | []' },
							},
							handleUpdate: {
								defaultValue: null,
								description: '',
								name: 'handleUpdate',
								required: !0,
								type: {
									name: 'Dispatch<SetStateAction<InstructorProfile>>',
								},
							},
							mutableData: {
								defaultValue: null,
								description: '',
								name: 'mutableData',
								required: !0,
								type: { name: 'InstructorProfile' },
							},
							isEditing: {
								defaultValue: null,
								description: '',
								name: 'isEditing',
								required: !0,
								type: { name: 'boolean' },
							},
							persistentData: {
								defaultValue: null,
								description: '',
								name: 'persistentData',
								required: !0,
								type: { name: 'InstructorProfile' },
							},
							inputDetails: {
								defaultValue: null,
								description: '',
								name: 'inputDetails',
								required: !0,
								type: { name: 'Omit<InputProps, "onChange">' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/user/editable_field_list.tsx#EditableFieldList'
						] = {
							docgenInfo: EditableFieldList.__docgenInfo,
							name: 'EditableFieldList',
							path: 'components/common/user/editable_field_list.tsx#EditableFieldList',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var instructor_content_jsx = react.createElement
			function instructor_content_ownKeys(object, enumerableOnly) {
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
			function instructor_content_objectSpread(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = null != arguments[i] ? arguments[i] : {}
					i % 2
						? instructor_content_ownKeys(
								Object(source),
								!0,
						  ).forEach(function (key) {
								;(0, defineProperty.Z)(target, key, source[key])
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source),
						  )
						: instructor_content_ownKeys(Object(source)).forEach(
								function (key) {
									Object.defineProperty(
										target,
										key,
										Object.getOwnPropertyDescriptor(
											source,
											key,
										),
									)
								},
						  )
				}
				return target
			}
			function InstructorContent(_ref) {
				var _user$social,
					_user$social2,
					_user$social3,
					_user$social4,
					_user$social5,
					_user$social6,
					_user$social7,
					_user$social8,
					_user$social9,
					_user$social10,
					user = _ref.user,
					isEditMode = _ref.isEditMode,
					setUpdatedProfile = _ref.setUpdatedProfile,
					instructorDetails = _ref.instructorDetails,
					setUpdatedInstructorProfile =
						_ref.setUpdatedInstructorProfile,
					immutableInstructorDetails = _ref.immutableInstructorDetails
				return instructor_content_jsx(
					'div',
					{ className: 'md:mx-10 mt-3 w-full' },
					instructor_content_jsx(
						'div',
						{
							className:
								'grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-1',
						},
						instructor_content_jsx(
							'div',
							{ className: 'col-span-1 row-span-1' },
							instructor_content_jsx(
								'h4',
								{ className: 'm-0 uppercase font-bold' },
								'Contact Information:',
							),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								inputDetails: {
									type: 'email',
									placeholder: 'EMAIL:',
									defaultValue: user.email,
									label: null,
									name: 'email',
									onChange: function onChange(e) {
										setUpdatedProfile(function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{ email: e },
											)
										})
									},
								},
								isEditing: isEditMode,
								header: user.email,
							}),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								inputDetails: {
									type: 'tel',
									placeholder: 'PHONE:',
									defaultValue: user.phoneNumber,
									label: null,
									name: 'phoneNumber',
									onChange: function onChange(e) {
										setUpdatedProfile(function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{ phoneNumber: e },
											)
										})
									},
								},
								isEditing: isEditMode,
								header: user.phoneNumber,
							}),
						),
						instructor_content_jsx(
							'div',
							{ className: 'col-span-1 row-span-1' },
							instructor_content_jsx(
								'h4',
								{ className: 'm-0 uppercase font-bold' },
								'Socials',
							),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								platform: 'github',
								headerURL: 'https://youtube.com',
								inputDetails: {
									type: 'url',
									placeholder: 'GITHUB:',
									defaultValue:
										(null ===
											(_user$social = user.social) ||
										void 0 === _user$social
											? void 0
											: _user$social.github) || '',
									name: 'github',
									onChange: function onChange(e) {
										setUpdatedProfile(function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{
													social: instructor_content_objectSpread(
														instructor_content_objectSpread(
															{},
															null == prevState
																? void 0
																: prevState.social,
														),
														{},
														{ github: e },
													),
												},
											)
										})
									},
								},
								isEditing: isEditMode,
								header: '@'.concat(
									null === (_user$social2 = user.social) ||
										void 0 === _user$social2
										? void 0
										: _user$social2.github,
								),
							}),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								platform: 'twitter',
								headerURL: 'https://youtube.com',
								inputDetails: {
									type: 'url',
									placeholder: 'TWITTER:',
									defaultValue:
										(null ===
											(_user$social3 = user.social) ||
										void 0 === _user$social3
											? void 0
											: _user$social3.twitter) || '',
									name: 'twitter',
									onChange: function onChange(e) {
										setUpdatedProfile(function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{
													social: instructor_content_objectSpread(
														instructor_content_objectSpread(
															{},
															null == prevState
																? void 0
																: prevState.social,
														),
														{},
														{ twitter: e },
													),
												},
											)
										})
									},
								},
								isEditing: isEditMode,
								header: '@'.concat(
									null === (_user$social4 = user.social) ||
										void 0 === _user$social4
										? void 0
										: _user$social4.twitter,
								),
							}),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								platform: 'linkedin',
								headerURL: 'https://youtube.com',
								inputDetails: {
									type: 'url',
									placeholder: 'LINKEDIN:',
									defaultValue:
										(null ===
											(_user$social5 = user.social) ||
										void 0 === _user$social5
											? void 0
											: _user$social5.linkedin) || '',
									name: 'linkedin',
									onChange: function onChange(e) {
										setUpdatedProfile(function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{
													social: instructor_content_objectSpread(
														instructor_content_objectSpread(
															{},
															null == prevState
																? void 0
																: prevState.social,
														),
														{},
														{ linkedin: e },
													),
												},
											)
										})
									},
								},
								isEditing: isEditMode,
								header: '@'.concat(
									null === (_user$social6 = user.social) ||
										void 0 === _user$social6
										? void 0
										: _user$social6.linkedin,
								),
							}),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								platform: 'facebook',
								headerURL: 'https://youtube.com',
								inputDetails: {
									type: 'url',
									placeholder: 'FACEBOOK:',
									defaultValue:
										(null ===
											(_user$social7 = user.social) ||
										void 0 === _user$social7
											? void 0
											: _user$social7.facebook) || '',
									name: 'facebook',
									onChange: function onChange(e) {
										setUpdatedProfile(function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{
													social: instructor_content_objectSpread(
														instructor_content_objectSpread(
															{},
															null == prevState
																? void 0
																: prevState.social,
														),
														{},
														{ facebook: e },
													),
												},
											)
										})
									},
								},
								isEditing: isEditMode,
								header: '@'.concat(
									null === (_user$social8 = user.social) ||
										void 0 === _user$social8
										? void 0
										: _user$social8.facebook,
								),
							}),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								platform: 'url',
								headerURL: 'https://youtube.com',
								inputDetails: {
									type: 'url',
									placeholder: 'PORTFOLIO:',
									defaultValue:
										(null ===
											(_user$social9 = user.social) ||
										void 0 === _user$social9
											? void 0
											: _user$social9.portfolio) || '',
									name: 'portfolio',
									onChange: function onChange(e) {
										setUpdatedProfile(function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{
													social: instructor_content_objectSpread(
														instructor_content_objectSpread(
															{},
															null == prevState
																? void 0
																: prevState.social,
														),
														{},
														{ portfolio: e },
													),
												},
											)
										})
									},
								},
								isEditing: isEditMode,
								header:
									null === (_user$social10 = user.social) ||
									void 0 === _user$social10
										? void 0
										: _user$social10.portfolio,
							}),
						),
						instructor_content_jsx(
							'div',
							{ className: 'col-span-1 row-span-1' },
							instructor_content_jsx(
								'h4',
								{ className: 'm-0 uppercase font-bold' },
								'Office location',
							),
							instructor_content_jsx(editable_field.Z, {
								type: 'text',
								isHeader: !1,
								inputDetails: {
									type: 'text',
									placeholder: 'OFFICE LOCATION:',
									defaultValue:
										immutableInstructorDetails.officeLocation,
									label: null,
									name: 'officeLocation',
									onChange: function onChange(e) {
										setUpdatedInstructorProfile(
											function (prevState) {
												return instructor_content_objectSpread(
													instructor_content_objectSpread(
														{},
														prevState,
													),
													{},
													{ officeLocation: e },
												)
											},
										)
									},
								},
								header: immutableInstructorDetails.officeLocation,
								isEditing: isEditMode,
							}),
						),
						instructor_content_jsx(
							'div',
							{ className: 'col-span-1 row-span-1' },
							instructor_content_jsx(
								'h4',
								{ className: 'm-0 uppercase font-bold' },
								'Office hours',
							),
							instructor_content_jsx(EditableFieldList, {
								listData: instructorDetails.officeHours,
								handleUpdate: setUpdatedInstructorProfile,
								mutableData: instructorDetails,
								persistentData: immutableInstructorDetails,
								isEditing: isEditMode,
								inputDetails: {
									type: 'text',
									placeholder: null,
									name: 'officeHours',
									label: null,
								},
							}),
						),
					),
					instructor_content_jsx(
						'div',
						{ className: 'w-full my-4' },
						instructor_content_jsx(
							'h4',
							{ className: 'm-0 uppercase font-bold' },
							'Biography',
						),
						instructor_content_jsx(editable_field.Z, {
							type: 'area',
							inputDetails: {
								placeholder:
									'Write something about yourself...',
								defaultValue:
									immutableInstructorDetails.background,
								name: 'background',
								className:
									'border-royalblue focus:border-royalblue rounded-none font-normal',
								handle: function handle(e) {
									setUpdatedInstructorProfile(
										function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{ background: e.target.value },
											)
										},
									)
								},
							},
							header: immutableInstructorDetails.background,
							isEditing: isEditMode,
						}),
					),
					instructor_content_jsx(
						'div',
						{ className: 'w-full my-4' },
						instructor_content_jsx(
							'h4',
							{ className: 'm-0 uppercase font-bold' },
							'Contact Policy',
						),
						instructor_content_jsx(editable_field.Z, {
							type: 'area',
							inputDetails: {
								defaultValue:
									immutableInstructorDetails.contactPolicy,
								name: 'contactPolicy',
								className:
									'border-royalblue focus:border-royalblue rounded-none font-normal',
								handle: function handle(e) {
									setUpdatedInstructorProfile(
										function (prevState) {
											return instructor_content_objectSpread(
												instructor_content_objectSpread(
													{},
													prevState,
												),
												{},
												{
													contactPolicy:
														e.target.value,
												},
											)
										},
									)
								},
							},
							header: immutableInstructorDetails.contactPolicy,
							isEditing: isEditMode,
						}),
					),
					instructor_content_jsx(
						'div',
						{ className: 'w-full my-4' },
						instructor_content_jsx(
							'h4',
							{ className: 'm-0 uppercase font-bold' },
							'Research Interests',
						),
						instructor_content_jsx(EditableFieldList, {
							listData: instructorDetails.researchInterest,
							handleUpdate: setUpdatedInstructorProfile,
							mutableData: instructorDetails,
							persistentData: immutableInstructorDetails,
							isEditing: isEditMode,
							inputDetails: {
								type: 'text',
								placeholder: null,
								name: 'researchInterest',
								label: null,
							},
						}),
					),
					instructor_content_jsx(
						'div',
						{ className: 'w-full my-4' },
						instructor_content_jsx(
							'h4',
							{ className: 'm-0 uppercase font-bold' },
							'Publications',
						),
						instructor_content_jsx(EditableFieldList, {
							listData:
								instructorDetails.selectedPapersAndPublications,
							handleUpdate: setUpdatedInstructorProfile,
							mutableData: instructorDetails,
							persistentData: immutableInstructorDetails,
							isEditing: isEditMode,
							inputDetails: {
								type: 'text',
								placeholder: null,
								name: 'selectedPapersAndPublications',
								label: null,
							},
						}),
					),
				)
			}
			;(InstructorContent.displayName = 'InstructorContent'),
				(InstructorContent.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'InstructorContent',
					props: {
						user: {
							required: !0,
							tsType: { name: 'User' },
							description: '',
						},
						isEditMode: {
							required: !0,
							tsType: { name: 'boolean' },
							description: '',
						},
						setUpdatedProfile: {
							required: !0,
							tsType: {
								name: 'ReactDispatch',
								raw: 'React.Dispatch<React.SetStateAction<User | null>>',
								elements: [
									{
										name: 'ReactSetStateAction',
										raw: 'React.SetStateAction<User | null>',
										elements: [
											{
												name: 'union',
												raw: 'User | null',
												elements: [
													{ name: 'User' },
													{ name: 'null' },
												],
											},
										],
									},
								],
							},
							description: '',
						},
						instructorDetails: {
							required: !0,
							tsType: { name: 'InstructorProfile' },
							description: '',
						},
						setUpdatedInstructorProfile: {
							required: !0,
							tsType: {
								name: 'ReactDispatch',
								raw: 'React.Dispatch<\n\tReact.SetStateAction<InstructorProfile | null>\n>',
								elements: [
									{
										name: 'ReactSetStateAction',
										raw: 'React.SetStateAction<InstructorProfile | null>',
										elements: [
											{
												name: 'union',
												raw: 'InstructorProfile | null',
												elements: [
													{
														name: 'InstructorProfile',
													},
													{ name: 'null' },
												],
											},
										],
									},
								],
							},
							description: '',
						},
						immutableInstructorDetails: {
							required: !0,
							tsType: { name: 'InstructorProfile' },
							description: '',
						},
					},
				})
			const instructor_content = InstructorContent
			try {
				;(InstructorContent.displayName = 'InstructorContent'),
					(InstructorContent.__docgenInfo = {
						description: '',
						displayName: 'InstructorContent',
						props: {
							user: {
								defaultValue: null,
								description: '',
								name: 'user',
								required: !0,
								type: { name: 'User' },
							},
							isEditMode: {
								defaultValue: null,
								description: '',
								name: 'isEditMode',
								required: !0,
								type: { name: 'boolean' },
							},
							setUpdatedProfile: {
								defaultValue: null,
								description: '',
								name: 'setUpdatedProfile',
								required: !0,
								type: {
									name: 'Dispatch<SetStateAction<User>>',
								},
							},
							instructorDetails: {
								defaultValue: null,
								description: '',
								name: 'instructorDetails',
								required: !0,
								type: { name: 'InstructorProfile' },
							},
							setUpdatedInstructorProfile: {
								defaultValue: null,
								description: '',
								name: 'setUpdatedInstructorProfile',
								required: !0,
								type: {
									name: 'Dispatch<SetStateAction<InstructorProfile>>',
								},
							},
							immutableInstructorDetails: {
								defaultValue: null,
								description: '',
								name: 'immutableInstructorDetails',
								required: !0,
								type: { name: 'InstructorProfile' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/user/instructor_content.tsx#InstructorContent'
						] = {
							docgenInfo: InstructorContent.__docgenInfo,
							name: 'InstructorContent',
							path: 'components/common/user/instructor_content.tsx#InstructorContent',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				_Secondary$parameters,
				_Secondary$parameters2,
				_Secondary$parameters3,
				head = __webpack_require__('./node_modules/next/head.js'),
				head_default = __webpack_require__.n(head),
				user_profile_jsx = react.createElement,
				UserProfile = function UserProfile(_ref) {
					var user = _ref.user,
						sessionUser = _ref.sessionUser,
						verifyEdit = _ref.verifyEdit,
						updateSocial = _ref.updateSocial,
						userOpenID = _ref.userOpenID,
						contextAccount = _ref.contextAccount,
						isInstructor = _ref.isInstructor,
						instructorDetails = _ref.instructorDetails,
						setInstructorMode = _ref.setInstructorMode,
						instructorMode = _ref.instructorMode,
						_useState = (0, react.useState)(user),
						updatedProfile = _useState[0],
						setUpdatedProfile = _useState[1],
						_useState2 = (0, react.useState)(instructorDetails),
						updatedInstructorProfile = _useState2[0],
						setUpdatedInstructorProfile = _useState2[1],
						_useState3 = (0, react.useState)(!1),
						isEditMode = _useState3[0],
						setEditMode = _useState3[1]
					return user_profile_jsx(
						'div',
						{ className: 'm-11' },
						user_profile_jsx(
							head_default(),
							null,
							user_profile_jsx(
								'title',
								null,
								updatedProfile.firstName,
								' ',
								updatedProfile.lastName,
								' | Profile | GLANCE',
							),
						),
						user_profile_jsx(
							'h1',
							{ className: 'md:ml-6 ml-0 mb-5' },
							null == updatedProfile
								? void 0
								: updatedProfile.firstName,
							' ',
							null == updatedProfile
								? void 0
								: updatedProfile.lastName,
						),
						user_profile_jsx(
							'div',
							{ className: 'flex flex-col md:flex-row mt-3' },
							user_profile_jsx(account_sidebar, {
								defaultUserData: user,
								verifyEdit,
								sessionUser,
								updateSocial,
								userOpenID,
								contextAccount,
								isEditMode,
								setEditMode,
								updatedProfile,
								setUpdatedProfile,
								instructorMode,
								setInstructorMode,
								instructorDetails: updatedInstructorProfile,
								isInstructor: !!instructorDetails,
							}),
							isInstructor
								? user_profile_jsx(instructor_content, {
										user: updatedProfile,
										isEditMode,
										setUpdatedProfile,
										instructorDetails:
											updatedInstructorProfile,
										setUpdatedInstructorProfile,
										immutableInstructorDetails:
											instructorDetails,
								  })
								: user_profile_jsx(student_content, {
										user: updatedProfile,
										setUpdatedProfile,
										isEditMode,
								  }),
						),
					)
				}
			;(UserProfile.displayName = 'UserProfile'),
				(UserProfile.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'UserProfile',
					props: {
						user: {
							required: !0,
							tsType: { name: 'User' },
							description: 'The user account coming from the DB',
						},
						sessionUser: {
							required: !0,
							tsType: { name: 'Session' },
							description:
								'The user account coming from the session',
						},
						verifyEdit: {
							required: !0,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '(userToEdit: string) => boolean',
								signature: {
									arguments: [
										{
											name: 'userToEdit',
											type: { name: 'string' },
										},
									],
									return: { name: 'boolean' },
								},
							},
							description:
								'Function to verify if the user is allowed to edit the profile\n@param userToEdit\n@returns boolean - true if the user is allowed to edit the profile',
						},
						updateSocial: {
							required: !0,
							tsType: {
								name: 'signature',
								type: 'function',
								raw: '(\n\topenID: string,\n\taccountID: string,\n\tsocialInput: {\n\t\tgithub?: string | null\n\t\tlinkedin?: string | null\n\t\tportfolio?: string | null\n\t\tfacebook?: string | null\n\t\ttwitter?: string | null\n\t},\n\tuserInput: {\n\t\tid: string\n\t\topenID: string\n\t\tbiography?: string | null\n\t\tphoneNumber?: string | null\n\t}\n) => void',
								signature: {
									arguments: [
										{
											name: 'openID',
											type: { name: 'string' },
										},
										{
											name: 'accountID',
											type: { name: 'string' },
										},
										{
											name: 'socialInput',
											type: {
												name: 'signature',
												type: 'object',
												raw: '{\n\tgithub?: string | null\n\tlinkedin?: string | null\n\tportfolio?: string | null\n\tfacebook?: string | null\n\ttwitter?: string | null\n}',
												signature: {
													properties: [
														{
															key: 'github',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'linkedin',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'portfolio',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'facebook',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'twitter',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
													],
												},
											},
										},
										{
											name: 'userInput',
											type: {
												name: 'signature',
												type: 'object',
												raw: '{\n\tid: string\n\topenID: string\n\tbiography?: string | null\n\tphoneNumber?: string | null\n}',
												signature: {
													properties: [
														{
															key: 'id',
															value: {
																name: 'string',
																required: !0,
															},
														},
														{
															key: 'openID',
															value: {
																name: 'string',
																required: !0,
															},
														},
														{
															key: 'biography',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
														{
															key: 'phoneNumber',
															value: {
																name: 'union',
																raw: 'string | null',
																elements: [
																	{
																		name: 'string',
																	},
																	{
																		name: 'null',
																	},
																],
																required: !1,
															},
														},
													],
												},
											},
										},
									],
									return: { name: 'void' },
								},
							},
							description:
								"Function to update the social media links, user biography, and phone number\n@param openID - the user's openID from the session\n@param accountID - the user's accountID from the DB\n@param socialInput - the social media links\n@param userInput - the user's biography and phone number",
						},
						userOpenID: {
							required: !0,
							tsType: { name: 'string' },
							description: "The user's openID from the session",
						},
						contextAccount: {
							required: !0,
							tsType: {
								name: 'union',
								raw: "| (Omit<UserAccount & { openID: string; biography?: string }, 'id'> & {\n\t\tid: string\n  })\n| null",
								elements: [
									{ name: 'unknown' },
									{ name: 'null' },
								],
							},
							description:
								"The user's account from context with the ID field required",
						},
						isInstructor: {
							required: !0,
							tsType: { name: 'boolean' },
							description:
								'Boolean to determine if the user is an instructor',
						},
						instructorDetails: {
							required: !0,
							tsType: { name: 'InstructorProfile' },
							description:
								'The instructor profile data from the DB',
						},
						setInstructorMode: {
							required: !0,
							tsType: {
								name: 'ReactDispatch',
								raw: 'React.Dispatch<React.SetStateAction<boolean>>',
								elements: [
									{
										name: 'ReactSetStateAction',
										raw: 'React.SetStateAction<boolean>',
										elements: [{ name: 'boolean' }],
									},
								],
							},
							description:
								'Function to turn on and off instructor mode',
						},
						instructorMode: {
							required: !0,
							tsType: { name: 'boolean' },
							description:
								'Boolean to determine if the user is in instructor mode or student mode',
						},
					},
				})
			try {
				;(UserProfile.displayName = 'UserProfile'),
					(UserProfile.__docgenInfo = {
						description: '',
						displayName: 'UserProfile',
						props: {
							user: {
								defaultValue: null,
								description:
									'The user account coming from the DB',
								name: 'user',
								required: !0,
								type: { name: 'User' },
							},
							sessionUser: {
								defaultValue: null,
								description:
									'The user account coming from the session',
								name: 'sessionUser',
								required: !0,
								type: { name: 'Session' },
							},
							verifyEdit: {
								defaultValue: null,
								description:
									'Function to verify if the user is allowed to edit the profile\n@param userToEdit\n@returns boolean - true if the user is allowed to edit the profile',
								name: 'verifyEdit',
								required: !0,
								type: {
									name: '(userToEdit: string) => boolean',
								},
							},
							updateSocial: {
								defaultValue: null,
								description:
									"Function to update the social media links, user biography, and phone number\n@param openID - the user's openID from the session\n@param accountID - the user's accountID from the DB\n@param socialInput - the social media links\n@param userInput - the user's biography and phone number",
								name: 'updateSocial',
								required: !0,
								type: {
									name: '(openID: string, accountID: string, socialInput: { github?: string; linkedin?: string; portfolio?: string; facebook?: string; twitter?: string; }, userInput: { id: string; openID: string; biography?: string; phoneNumber?: string; }) => void',
								},
							},
							userOpenID: {
								defaultValue: null,
								description:
									"The user's openID from the session",
								name: 'userOpenID',
								required: !0,
								type: { name: 'string' },
							},
							contextAccount: {
								defaultValue: null,
								description:
									"The user's account from context with the ID field required",
								name: 'contextAccount',
								required: !0,
								type: {
									name: 'Omit<UserAccount & { openID: string; biography?: string; }, "id"> & { id: string; }',
								},
							},
							isInstructor: {
								defaultValue: null,
								description:
									'Boolean to determine if the user is an instructor',
								name: 'isInstructor',
								required: !0,
								type: { name: 'boolean' },
							},
							instructorDetails: {
								defaultValue: null,
								description:
									'The instructor profile data from the DB',
								name: 'instructorDetails',
								required: !0,
								type: { name: 'InstructorProfile' },
							},
							setInstructorMode: {
								defaultValue: null,
								description:
									'Function to turn on and off instructor mode',
								name: 'setInstructorMode',
								required: !0,
								type: {
									name: 'Dispatch<SetStateAction<boolean>>',
								},
							},
							instructorMode: {
								defaultValue: null,
								description:
									'Boolean to determine if the user is in instructor mode or student mode',
								name: 'instructorMode',
								required: !0,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/pages/user/user_profile/user_profile.tsx#UserProfile'
						] = {
							docgenInfo: UserProfile.__docgenInfo,
							name: 'UserProfile',
							path: 'components/pages/user/user_profile/user_profile.tsx#UserProfile',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var user_profile_stories_jsx = react.createElement
			function user_profile_stories_ownKeys(object, enumerableOnly) {
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
			function user_profile_stories_objectSpread(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = null != arguments[i] ? arguments[i] : {}
					i % 2
						? user_profile_stories_ownKeys(
								Object(source),
								!0,
						  ).forEach(function (key) {
								;(0, defineProperty.Z)(target, key, source[key])
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source),
						  )
						: user_profile_stories_ownKeys(Object(source)).forEach(
								function (key) {
									Object.defineProperty(
										target,
										key,
										Object.getOwnPropertyDescriptor(
											source,
											key,
										),
									)
								},
						  )
				}
				return target
			}
			const user_profile_stories = {
				title: 'Pages/User/User Profile',
				component: UserProfile,
				argTypes: {
					user: { control: { type: 'object' } },
					userOpenID: { control: { type: 'text' } },
					contextAccount: { control: { type: 'object' } },
					updateSocial: { control: { type: 'object' } },
					verifyEdit: { control: { type: 'object' } },
				},
			}
			var Template = function Template(args) {
				return user_profile_stories_jsx(UserProfile, args)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.args = {
				user: {
					firstName: 'John',
					lastName: 'Doe',
					avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
					id: '1',
					biography: 'lorem',
					openID: '1',
					phoneNumber: '1234567890',
					dob: '1990-01-01',
					email: 'fake@example.com',
					social: {
						id: '1',
						twitter: 'https://twitter.com/hashtag/lorem',
						instagram: 'https://www.instagram.com/lorem/',
						facebook: 'https://www.facebook.com/lorem',
						website: 'https://lorem.com',
						linkedin: 'https://www.linkedin.com/in/lorem',
					},
				},
				userOpenID: '1',
				contextAccount: {
					id: '1',
					firstName: 'John',
					lastName: 'Doe',
					openID: '1',
				},
				updateSocial: function updateSocial(
					openID,
					accountID,
					socialInput,
					userInput,
				) {},
				verifyEdit: function verifyEdit() {
					return !1
				},
				sessionUser: {
					id: '1',
					user: {
						email: 'fake@example.com',
						name: 'John Doe',
						image: 'https://avatars.githubusercontent.com/u/1024025?v=4',
					},
					expires: '2021-08-01T00:00:00.000Z',
					openId: '1',
					idToken: '1',
				},
			}),
				(Primary.storyName = 'User Profile - logged out')
			var Secondary = Template.bind({})
			;(Secondary.args = user_profile_stories_objectSpread(
				user_profile_stories_objectSpread({}, Primary.args),
				{},
				{
					verifyEdit: function verifyEdit() {
						return !0
					},
				},
			)),
				(Secondary.storyName = 'User Profile - logged in'),
				(Primary.parameters = user_profile_stories_objectSpread(
					user_profile_stories_objectSpread({}, Primary.parameters),
					{},
					{
						docs: user_profile_stories_objectSpread(
							user_profile_stories_objectSpread(
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
								source: user_profile_stories_objectSpread(
									{
										originalSource:
											'args => <UserProfile {...args} />',
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
				)),
				(Secondary.parameters = user_profile_stories_objectSpread(
					user_profile_stories_objectSpread({}, Secondary.parameters),
					{},
					{
						docs: user_profile_stories_objectSpread(
							user_profile_stories_objectSpread(
								{},
								null ===
									(_Secondary$parameters =
										Secondary.parameters) ||
									void 0 === _Secondary$parameters
									? void 0
									: _Secondary$parameters.docs,
							),
							{},
							{
								source: user_profile_stories_objectSpread(
									{
										originalSource:
											'args => <UserProfile {...args} />',
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
										: _Secondary$parameters3.source,
								),
							},
						),
					},
				))
		},
		'./node_modules/next/head.js': (
			module,
			__unused_webpack_exports,
			__webpack_require__,
		) => {
			module.exports = __webpack_require__(
				'./node_modules/next/dist/shared/lib/head.js',
			)
		},
	},
])
