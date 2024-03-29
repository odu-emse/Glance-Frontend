'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[4089],
	{
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
		'./components/common/community/threads/thread/thread.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, { j: () => Thread })
			var taggedTemplateLiteral = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
				),
				asyncToGenerator = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js',
				),
				regenerator = __webpack_require__(
					'./node_modules/@babel/runtime/regenerator/index.js',
				),
				regenerator_default = __webpack_require__.n(regenerator),
				react = __webpack_require__('./node_modules/react/index.js'),
				index_esm = __webpack_require__(
					'./node_modules/react-icons/go/index.esm.js',
				),
				tb_index_esm = __webpack_require__(
					'./node_modules/react-icons/tb/index.esm.js',
				),
				esm = __webpack_require__(
					'./node_modules/react-icons/lib/esm/index.js',
				),
				next_link = __webpack_require__('./node_modules/next/link.js'),
				link_default = __webpack_require__.n(next_link),
				global_user_context = __webpack_require__(
					'./contexts/global_user_context.ts',
				),
				dist = __webpack_require__('./node_modules/swr/dist/index.mjs'),
				gql_fetcher = __webpack_require__('./utils/gql_fetcher.ts'),
				build_esm = __webpack_require__(
					'./node_modules/graphql-request/build/esm/index.js',
				),
				text_area = __webpack_require__(
					'./components/common/forms/inputs/text_area/text_area.tsx',
				),
				esm_extends = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/extends.js',
				),
				objectWithoutProperties = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js',
				),
				_excluded = ['node'],
				_excluded2 = ['node'],
				_excluded3 = ['node'],
				_excluded4 = ['node'],
				_excluded5 = ['node'],
				_excluded6 = ['node'],
				_excluded7 = ['node'],
				_excluded8 = ['node'],
				_excluded9 = ['node'],
				__jsx = react.createElement,
				markdownConfig = {
					h1: function h1(_ref) {
						_ref.node
						var props = (0, objectWithoutProperties.Z)(
							_ref,
							_excluded,
						)
						return __jsx('p', props)
					},
					h2: function h2(_ref2) {
						_ref2.node
						var props = (0, objectWithoutProperties.Z)(
							_ref2,
							_excluded2,
						)
						return __jsx('p', props)
					},
					h3: function h3(_ref3) {
						_ref3.node
						var props = (0, objectWithoutProperties.Z)(
							_ref3,
							_excluded3,
						)
						return __jsx('p', props)
					},
					h4: function h4(_ref4) {
						_ref4.node
						var props = (0, objectWithoutProperties.Z)(
							_ref4,
							_excluded4,
						)
						return __jsx('p', props)
					},
					h5: function h5(_ref5) {
						_ref5.node
						var props = (0, objectWithoutProperties.Z)(
							_ref5,
							_excluded5,
						)
						return __jsx('p', props)
					},
					h6: function h6(_ref6) {
						_ref6.node
						var props = (0, objectWithoutProperties.Z)(
							_ref6,
							_excluded6,
						)
						return __jsx('p', props)
					},
					strong: function strong(_ref7) {
						_ref7.node
						var props = (0, objectWithoutProperties.Z)(
							_ref7,
							_excluded7,
						)
						return __jsx(
							'strong',
							(0, esm_extends.Z)(
								{ className: 'font-bold' },
								props,
							),
						)
					},
					ol: function ol(_ref8) {
						_ref8.node
						var props = (0, objectWithoutProperties.Z)(
							_ref8,
							_excluded8,
						)
						return __jsx(
							'ol',
							(0, esm_extends.Z)(
								{ className: 'list-decimal ml-4' },
								props,
							),
						)
					},
					ul: function ul(_ref9) {
						_ref9.node
						var props = (0, objectWithoutProperties.Z)(
							_ref9,
							_excluded9,
						)
						return __jsx(
							'ul',
							(0, esm_extends.Z)(
								{ className: 'list-disc ml-4' },
								props,
							),
						)
					},
				},
				remark_gfm = __webpack_require__(
					'./node_modules/remark-gfm/index.js',
				),
				remark_math = __webpack_require__(
					'./node_modules/remark-math/index.js',
				),
				rehype_katex = __webpack_require__(
					'./node_modules/rehype-katex/index.js',
				),
				react_markdown = __webpack_require__(
					'./node_modules/react-markdown/lib/react-markdown.js',
				),
				markdown_container_jsx = react.createElement,
				MarkdownContainer = function MarkdownContainer(_ref) {
					var children = _ref.children
					return markdown_container_jsx(
						react_markdown.D,
						{
							components: markdownConfig,
							remarkPlugins: [remark_gfm.Z, remark_math.Z],
							rehypePlugins: [rehype_katex.Z],
						},
						children,
					)
				}
			;(MarkdownContainer.displayName = 'MarkdownContainer'),
				(MarkdownContainer.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'MarkdownContainer',
				})
			const markdown_container = MarkdownContainer
			try {
				;(markdowncontainer.displayName = 'markdowncontainer'),
					(markdowncontainer.__docgenInfo = {
						description: '',
						displayName: 'markdowncontainer',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/community/threads/markdown/markdown_container.tsx#markdowncontainer'
						] = {
							docgenInfo: markdowncontainer.__docgenInfo,
							name: 'markdowncontainer',
							path: 'components/common/community/threads/markdown/markdown_container.tsx#markdowncontainer',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var _templateObject,
				_templateObject2,
				_templateObject3,
				button_button = __webpack_require__(
					'./components/common/button/button.tsx',
				),
				router = __webpack_require__('./node_modules/next/router.js'),
				router_default = __webpack_require__.n(router),
				thread_jsx = react.createElement,
				Thread = function Thread(_ref) {
					var title = _ref.title,
						body = _ref.body,
						id = _ref.id,
						userProfile = _ref.userProfile,
						_ref$topics = _ref.topics,
						topics = void 0 === _ref$topics ? [] : _ref$topics,
						children = _ref.children,
						initialIsUpvoted = _ref.isUpvoted,
						_ref$upvotesProp = _ref.upvotesProp,
						upvotesProp =
							void 0 === _ref$upvotesProp ? [] : _ref$upvotesProp,
						_ref$commentCount = _ref.commentCount,
						commentCount =
							void 0 === _ref$commentCount
								? 0
								: _ref$commentCount,
						_ref$viewCutOff = _ref.viewCutOff,
						viewCutOff =
							void 0 !== _ref$viewCutOff && _ref$viewCutOff,
						_ref$showAuthor = _ref.showAuthor,
						showAuthor =
							void 0 === _ref$showAuthor || _ref$showAuthor,
						_useState = (0, react.useState)(!1),
						isClicked = _useState[0],
						setIsClicked = _useState[1],
						_useState2 = (0, react.useState)(initialIsUpvoted),
						isUpvoted = _useState2[0],
						setIsUpvoted = _useState2[1],
						_useState3 = (0, react.useState)(!1),
						addComment = _useState3[0],
						setAddComment = _useState3[1],
						_useState4 = (0, react.useState)(''),
						commentBody = _useState4[0],
						setCommentBody = _useState4[1],
						_useState5 = (0, react.useState)(
							(null == upvotesProp
								? void 0
								: upvotesProp.length) || 0,
						),
						upvotes = _useState5[0],
						setUpvotes = _useState5[1],
						user = (0, react.useContext)(
							global_user_context.Z,
						).user,
						currentThread = (0, react.createRef)(),
						mutate = (0, dist.ZP)({}, gql_fetcher.Z).mutate
					;(0, react.useEffect)(
						function () {
							if (upvotesProp) {
								var _initialIsUpvoted = upvotesProp.some(
									function (upvote) {
										return upvote.id === user.id
									},
								)
								setIsUpvoted(_initialIsUpvoted),
									setUpvotes(upvotesProp.length)
							}
						},
						[user.id, upvotesProp],
					)
					var url
					return thread_jsx(
						react.Fragment,
						null,
						thread_jsx(
							'div',
							{
								className:
									'rounded-sm shadow-lg px-5 py-2 flex flex-col border-gray-300 border',
								id,
								ref: currentThread,
							},
							showAuthor &&
								thread_jsx(
									link_default(),
									{ href: '/user/'.concat(userProfile.id) },
									thread_jsx(
										'div',
										{
											className:
												'flex items-center no-underline cursor-pointer w-fit mb-2',
										},
										thread_jsx('img', {
											src:
												userProfile.picURL ||
												'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
											alt: 'user profile image',
											className:
												'shadow-lg rounded-full max-w-full h-5 aspect-square align-middle border-none',
										}),
										thread_jsx(
											'h4',
											{
												className:
													'font-normal px-2 text-sm text-royalblue hover:underline',
											},
											userProfile.firstName,
											' ',
											userProfile.lastName,
										),
									),
								),
							title &&
								thread_jsx(
									'h4',
									{ className: 'font-bold uppercase' },
									title,
								),
							topics.length > 0 &&
								thread_jsx(
									'div',
									{
										className:
											'flex flex-row gap-2 mt-2 mb-1.5',
									},
									topics.map(function (topic, topicIndex) {
										return thread_jsx(
											'h4',
											{
												className:
													'bg-wgray inline-block w-fit py-1 px-2 uppercase text-sm',
												key: topicIndex,
											},
											topic,
										)
									}),
								),
							thread_jsx(
								'p',
								{ className: 'text-base font-normal my-2' },
								thread_jsx(
									markdown_container,
									null,
									body.slice(0, 150),
								),
							),
							viewCutOff &&
								thread_jsx(
									button_button.z,
									{
										onClick: function onClick() {
											return router_default().push(
												'/communities/'.concat(id),
											)
										},
									},
									thread_jsx(
										'h2',
										{
											className:
												'text-white cursor-pointer my-1',
										},
										'View Thread ('.concat(
											commentCount,
											' comments)',
										),
									),
								),
							thread_jsx(
								'div',
								{
									className:
										'flex flex-row justify-end gap-4',
								},
								thread_jsx(
									'button',
									{
										className:
											'group relative text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200',
										'data-bs-toggle': 'popover',
										'data-bs-placement': 'top',
										'data-bs-content': 'copied',
										onClick: function onClick() {
											;(url = window.location.href),
												navigator.clipboard
													.writeText(
														''
															.concat(url, '#')
															.concat(id),
													)
													.then(function () {
														return setIsClicked(!0)
													})
													.catch(function () {
														return console.log(
															'error',
														)
													})
										},
									},
									thread_jsx(tb_index_esm.gG0, { size: 18 }),
									isClicked &&
										thread_jsx(
											'div',
											{
												className:
													"absolute hidden group-hover:flex -left-2 -top-2 -translate-y-full w-16 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700",
											},
											'Copied!',
										),
								),
								thread_jsx(
									'button',
									{
										className:
											'text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200',
										onClick: function onClick() {
											return setAddComment(!addComment)
										},
									},
									thread_jsx(index_esm.T3Y, { size: 18 }),
								),
								thread_jsx(
									'button',
									{
										onClick: function onClick() {
											return isUpvoted
												? (function downvoteThread(
														threadId,
												  ) {
														mutate(
															(0,
															asyncToGenerator.Z)(
																regenerator_default().mark(
																	function _callee2() {
																		return regenerator_default().wrap(
																			function _callee2$(
																				_context2,
																			) {
																				for (;;)
																					switch (
																						(_context2.prev =
																							_context2.next)
																					) {
																						case 0:
																							return (
																								(_context2.next = 2),
																								gql_fetcher.L.request(
																									(0,
																									build_esm.Ps)(
																										_templateObject2 ||
																											(_templateObject2 =
																												(0,
																												taggedTemplateLiteral.Z)(
																													[
																														'\n          mutation DownvoteThread($input: ID!){\n\t\t\tdownvoteThread(id: $input, userID: "',
																														'"){\n                  id\n              }\n          }\n\t\t\t',
																													],
																												)),
																										user.id,
																									),
																									{
																										input: threadId,
																									},
																								)
																							)
																						case 2:
																						case 'end':
																							return _context2.stop()
																					}
																			},
																			_callee2,
																		)
																	},
																),
															),
															!1,
														)
															.then(function () {
																setIsUpvoted(
																	!isUpvoted,
																),
																	setUpvotes(
																		upvotes -
																			1,
																	)
															})
															.catch(
																function (err) {
																	console.log(
																		err,
																	)
																},
															)
												  })(id)
												: (function upvoteThread(
														threadId,
												  ) {
														mutate(
															(0,
															asyncToGenerator.Z)(
																regenerator_default().mark(
																	function _callee() {
																		return regenerator_default().wrap(
																			function _callee$(
																				_context,
																			) {
																				for (;;)
																					switch (
																						(_context.prev =
																							_context.next)
																					) {
																						case 0:
																							return (
																								(_context.next = 2),
																								gql_fetcher.L.request(
																									(0,
																									build_esm.Ps)(
																										_templateObject ||
																											(_templateObject =
																												(0,
																												taggedTemplateLiteral.Z)(
																													[
																														'\n          mutation UpvoteThread($input: ID!){\n              upvoteThread(id: $input, userID: "',
																														'"){\n                  id\n              }\n          }\n\t\t\t',
																													],
																												)),
																										user.id,
																									),
																									{
																										input: threadId,
																									},
																								)
																							)
																						case 2:
																						case 'end':
																							return _context.stop()
																					}
																			},
																			_callee,
																		)
																	},
																),
															),
															!1,
														)
															.then(function () {
																setIsUpvoted(
																	!isUpvoted,
																),
																	setUpvotes(
																		upvotes +
																			1,
																	)
															})
															.catch(
																function (err) {
																	console.log(
																		err,
																	)
																},
															)
												  })(id)
										},
										className:
											'text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 flex flex-row gap-1 justify-center items-center',
									},
									thread_jsx(
										'span',
										{
											className: ''.concat(
												upvotes <= 0 ? 'hidden' : '',
											),
										},
										upvotes,
									),
									thread_jsx(
										esm.Pd.Provider,
										{
											value: {
												color: isUpvoted ? 'red' : '',
											},
										},
										thread_jsx(
											'div',
											null,
											thread_jsx(index_esm.KhA, {
												size: 18,
											}),
										),
									),
								),
							),
						),
						addComment &&
							thread_jsx(
								'div',
								{ className: 'flex flex-col gap-2 mt-3' },
								thread_jsx(text_area.K, {
									className: 'h-28',
									placeholder: 'Add a comment...',
									handle: function handle(e) {
										return setCommentBody(e.target.value)
									},
									autofocus: !0,
								}),
								thread_jsx(
									'button',
									{
										className:
											'w-2/3 mx-auto text-center font-bold shadow bg-royalblue text-white hover:bg-blue-600 uppercase px-[1em] py-[0.25em] cursor-pointer',
										onClick: function onClick() {
											!(function addCommentToThread(
												threadId,
												commentBody,
												author,
											) {
												mutate(
													(0, asyncToGenerator.Z)(
														regenerator_default().mark(
															function _callee3() {
																return regenerator_default().wrap(
																	function _callee3$(
																		_context3,
																	) {
																		for (;;)
																			switch (
																				(_context3.prev =
																					_context3.next)
																			) {
																				case 0:
																					return (
																						(_context3.next = 2),
																						gql_fetcher.L.request(
																							(0,
																							build_esm.Ps)(
																								_templateObject3 ||
																									(_templateObject3 =
																										(0,
																										taggedTemplateLiteral.Z)(
																											[
																												'\n\t\t\t\t\tmutation AddCommentToThread(\n\t\t\t\t\t\t$threadID: ID!\n\t\t\t\t\t\t$commentBody: String!\n\t\t\t\t\t\t$commentAuthor: ID!\n\t\t\t\t\t) {\n\t\t\t\t\t\taddCommentToThread(\n\t\t\t\t\t\t\tparentThreadID: $threadID\n\t\t\t\t\t\t\tdata: { body: $commentBody, author: $commentAuthor }\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tbody\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t',
																											],
																										)),
																							),
																							{
																								threadID:
																									threadId,
																								commentBody,
																								commentAuthor:
																									author,
																							},
																						)
																					)
																				case 2:
																				case 'end':
																					return _context3.stop()
																			}
																	},
																	_callee3,
																)
															},
														),
													),
													!1,
												).catch(function (err) {
													console.log(err)
												})
											})(
												currentThread.current.id,
												commentBody,
												user.id,
											),
												setAddComment(!1),
												setCommentBody(null)
										},
									},
									'Post Comment',
								),
							),
						thread_jsx('div', { className: 'ml-12' }, children),
					)
				}
			Thread.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'Thread',
				props: {
					topics: {
						defaultValue: { value: '[]', computed: !1 },
						required: !1,
					},
					upvotesProp: {
						defaultValue: { value: '[]', computed: !1 },
						required: !1,
					},
					commentCount: {
						defaultValue: { value: '0', computed: !1 },
						required: !1,
					},
					viewCutOff: {
						defaultValue: { value: 'false', computed: !1 },
						required: !1,
					},
					showAuthor: {
						defaultValue: { value: 'true', computed: !1 },
						required: !1,
					},
				},
			}
			try {
				;(Thread.displayName = 'Thread'),
					(Thread.__docgenInfo = {
						description: '',
						displayName: 'Thread',
						props: {
							title: {
								defaultValue: null,
								description:
									'The title of the thread component',
								name: 'title',
								required: !1,
								type: { name: 'string' },
							},
							body: {
								defaultValue: null,
								description: 'The body of the thread component',
								name: 'body',
								required: !0,
								type: { name: 'string' },
							},
							userProfile: {
								defaultValue: null,
								description:
									'The user account the thread belongs to',
								name: 'userProfile',
								required: !0,
								type: { name: 'UserAccount' },
							},
							topics: {
								defaultValue: { value: '[]' },
								description:
									'The topics the thread belongs to as an array of strings',
								name: 'topics',
								required: !1,
								type: { name: 'string[]' },
							},
							id: {
								defaultValue: null,
								description: 'The unique ID of the thread',
								name: 'id',
								required: !0,
								type: { name: 'string' },
							},
							children: {
								defaultValue: null,
								description:
									'The child comments of this thread as an array',
								name: 'children',
								required: !1,
								type: { name: 'any' },
							},
							isUpvoted: {
								defaultValue: null,
								description:
									'An optional boolean prop that indicates whether the current user has upvoted the thread. If true, the upvote icon will be displayed in red. If false or undefined, the upvote icon will have the default color.',
								name: 'isUpvoted',
								required: !1,
								type: { name: 'boolean' },
							},
							upvotesProp: {
								defaultValue: { value: '[]' },
								description:
									'The number of upvotes the thread has. This is used to display in the upvote button',
								name: 'upvotesProp',
								required: !1,
								type: { name: 'User[]' },
							},
							commentCount: {
								defaultValue: { value: '0' },
								description:
									'The number of comments the thread has. This is used to display in the view thread button',
								name: 'commentCount',
								required: !1,
								type: { name: 'number' },
							},
							viewCutOff: {
								defaultValue: { value: 'false' },
								description:
									'If true, the thread will be cut off after 150 characters and a view thread button will be displayed',
								name: 'viewCutOff',
								required: !1,
								type: { name: 'boolean' },
							},
							showAuthor: {
								defaultValue: { value: 'true' },
								description:
									'If true, the author of the thread will be displayed',
								name: 'showAuthor',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/community/threads/thread/thread.tsx#Thread'
						] = {
							docgenInfo: Thread.__docgenInfo,
							name: 'Thread',
							path: 'components/common/community/threads/thread/thread.tsx#Thread',
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
		'./contexts/global_user_context.ts': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				Z: () => __WEBPACK_DEFAULT_EXPORT__,
			})
			const __WEBPACK_DEFAULT_EXPORT__ = (0,
			__webpack_require__('./node_modules/react/index.js').createContext)(
				{ user: null, setUser: function setUser(user) {} },
			)
		},
		'./utils/gql_fetcher.ts': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				L: () => client,
				Z: () => __WEBPACK_DEFAULT_EXPORT__,
			})
			var graphql_request__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						'./node_modules/graphql-request/build/esm/index.js',
					),
				client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.g6(
					'http://localhost:4000/graphql',
					{ headers: {} },
				)
			const __WEBPACK_DEFAULT_EXPORT__ = function gqlFetcher(args) {
				return new graphql_request__WEBPACK_IMPORTED_MODULE_0__.g6(
					'http://localhost:4000/graphql',
					{ headers: { authorization: args.token } },
				).request(args.query, args.variables || {})
			}
		},
	},
])
