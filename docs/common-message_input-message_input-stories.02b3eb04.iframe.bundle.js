'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[1437],
	{
		'./components/common/message_input/message_input.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					default: () => message_input_stories,
				})
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				slicedToArray = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
				),
				index_esm = __webpack_require__(
					'./node_modules/react-icons/fa/index.esm.js',
				),
				md_index_esm = __webpack_require__(
					'./node_modules/react-icons/md/index.esm.js',
				),
				bi_index_esm = __webpack_require__(
					'./node_modules/react-icons/bi/index.esm.js',
				),
				ri_index_esm = __webpack_require__(
					'./node_modules/react-icons/ri/index.esm.js',
				),
				io5_index_esm = __webpack_require__(
					'./node_modules/react-icons/io5/index.esm.js',
				),
				__jsx = react.createElement,
				MessageInput = function MessageInput(_ref) {
					var message = _ref.message,
						_React$useState = react.useState(null),
						_React$useState2 = (0, slicedToArray.Z)(
							_React$useState,
							2,
						),
						isClicked = _React$useState2[0],
						setIsClicked = _React$useState2[1]
					return __jsx(
						'div',
						{ className: 'grid grid-cols-1' },
						__jsx(
							'div',
							{ className: 'p-2 bg-white ' },
							__jsx(
								'div',
								{
									className:
										'flex items-center justify-between ',
								},
								__jsx(
									'div',
									{
										className:
											'flex space-x-3 md:space-x-3',
									},
									(null == message
										? void 0
										: message.length) > 0 &&
										message.map(function (item, index) {
											return __jsx(
												'button',
												{
													key: index,
													type: 'button',
													className:
														'py-2.5 px-5 mr-2 mb-2 text-xs font-medium text-gray-600 focus:outline-none bg-transparent rounded-full border-2 border-blue-300 hover:bg-gray-100 hover:text-gray-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
												},
												item.messages,
											)
										}),
								),
							),
						),
						__jsx(
							'div',
							{
								className:
									'flex justify-between items-center my-2 text-stone-900 w-full shadow-lg px-4 border-t',
							},
							__jsx(
								'div',
								{ className: 'flex gap-4' },
								__jsx(
									'button',
									{
										className:
											'flex items-center justify-center ',
										onClick: function onClick() {
											return setIsClicked(
												function (prevState) {
													return null !== prevState
														? null
														: 1
												},
											)
										},
									},
									__jsx(md_index_esm._b$, {
										size: 20,
										className: 'mr-1',
									}),
									1 === isClicked &&
										__jsx(
											'div',
											{ className: 'relative  h-auto ' },
											__jsx(
												'div',
												{
													className:
														' absolute z-20 w-50 py-0 px-0 mt-0 ml-10 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800',
												},
												__jsx(
													'label',
													null,
													__jsx('input', {
														type: 'file',
														className:
															'text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700',
													}),
												),
											),
										),
								),
								__jsx(
									'button',
									{
										className:
											'flex items-center justify-center  ',
										onClick: function onClick() {
											return setIsClicked(
												function (prevState) {
													return null !== prevState
														? null
														: 2
												},
											)
										},
									},
									__jsx(bi_index_esm.Zw4, {
										size: 20,
										className: 'mr-1',
									}),
									2 === isClicked &&
										__jsx(
											'div',
											{ className: 'relative  h-auto ' },
											__jsx(
												'div',
												{
													className:
														' absolute z-20 w-50 py-0 px-0 mt-0 ml-10 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800',
												},
												__jsx(
													'label',
													null,
													__jsx('input', {
														type: 'file',
														className:
															'text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 ',
													}),
												),
											),
										),
								),
								__jsx(
									'button',
									{
										className:
											'flex items-center justify-center  ',
										onClick: function onClick() {
											return setIsClicked(
												function (prevState) {
													return null !== prevState
														? null
														: 3
												},
											)
										},
									},
									__jsx(ri_index_esm.xup, {
										size: 20,
										className: 'mr-1',
									}),
									3 === isClicked &&
										__jsx(
											'div',
											{ className: 'relative  h-auto ' },
											__jsx(
												'div',
												{
													className:
														' absolute z-20 w-50 py-0 px-0 mt-0 ml-10 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800',
												},
												__jsx(
													'label',
													null,
													__jsx('input', {
														type: 'file',
														className:
															'text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 ',
													}),
												),
											),
										),
								),
								__jsx(
									'button',
									{
										className:
											'flex items-center justify-center  ',
									},
									__jsx(index_esm.RcD, {
										size: 20,
										className: 'mr-1',
									}),
								),
							),
							__jsx(
								'div',
								{ className: 'w-full' },
								__jsx(
									'label',
									{
										htmlFor: 'add-comment',
										className: 'sr-only',
									},
									'Add your comment to the post',
								),
								__jsx('input', {
									type: 'text',
									className:
										'border-transparent bg-transparent focus:border-blue-300 px-5 py-2 w-full',
									placeholder: 'Type custom inquiry here',
									id: 'add-comment',
								}),
							),
							__jsx(
								'div',
								{ className: 'flex gap-4' },
								__jsx(
									'button',
									{
										className:
											'flex items-center justify-center',
									},
									__jsx(md_index_esm.HYj, {
										size: 20,
										className: 'mr-1',
									}),
								),
								__jsx(
									'button',
									{
										className:
											'flex items-center justify-center',
									},
									__jsx(io5_index_esm.VzJ, {
										size: 20,
										className: 'mr-1',
									}),
								),
							),
						),
					)
				}
			;(MessageInput.displayName = 'MessageInput'),
				(MessageInput.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'MessageInput',
				})
			try {
				;(MessageInput.displayName = 'MessageInput'),
					(MessageInput.__docgenInfo = {
						description: '',
						displayName: 'MessageInput',
						props: {
							message: {
								defaultValue: null,
								description: '',
								name: 'message',
								required: !0,
								type: { name: 'hintMessage[]' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/message_input/message_input.tsx#MessageInput'
						] = {
							docgenInfo: MessageInput.__docgenInfo,
							name: 'MessageInput',
							path: 'components/common/message_input/message_input.tsx#MessageInput',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var message_input_stories_jsx = react.createElement
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
			const message_input_stories = {
				title: 'Common/Message Input',
				component: MessageInput,
			}
			var Template = function Template(args) {
				return message_input_stories_jsx(MessageInput, args)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.args = {
				message: [
					{ messages: 'Dropping a module' },
					{ messages: 'Enroll in a module' },
					{ messages: 'Schedule a meeting with an advisor' },
					{ messages: 'Change my desired degree' },
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
									: _Primary$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'args => <MessageInput {...args} />',
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
