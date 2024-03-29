'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[6846],
	{
		'./node_modules/@babel/runtime/helpers/esm/extends.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
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
		'./components/common/information_card/information_card.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Primary: () => Primary,
					Secondary: () => Secondary,
					default: () => information_card_stories,
				})
			var _Default$parameters,
				_Default$parameters2,
				_Default$parameters2$,
				_Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				_Secondary$parameters,
				_Secondary$parameters2,
				_Secondary$parameters3,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				esm_extends = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/extends.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				index_esm = __webpack_require__(
					'./node_modules/react-icons/fa/index.esm.js',
				),
				bs_index_esm = __webpack_require__(
					'./node_modules/react-icons/bs/index.esm.js',
				),
				md_index_esm = __webpack_require__(
					'./node_modules/react-icons/md/index.esm.js',
				),
				__jsx = react.createElement,
				InformationCard = function InformationCard(_ref) {
					var percentComplete = _ref.percentComplete,
						statusMessage = _ref.statusMessage,
						testType = _ref.testType,
						testModule = _ref.testModule,
						moduleIdentifier = _ref.moduleIdentifier,
						dueDate = _ref.dueDate,
						grade = _ref.grade,
						percentage = _ref.percentage,
						handle = _ref.handle
					return __jsx(
						'div',
						{
							className:
								'border-solid border-gray rounded shadow-lg border flex justify-between w-2/5',
						},
						percentComplete &&
							__jsx(
								react.Fragment,
								null,
								__jsx(
									'div',
									{
										className:
											'flex justify-start items-center px-2',
										id: 'Default',
									},
									__jsx(
										'div',
										{ className: 'checkIcon' },
										__jsx(index_esm.wO, {
											fill: 'green',
											size: 30,
										}),
									),
									__jsx(
										'div',
										{
											className:
												'modueleInformation px-2',
										},
										__jsx(
											'p',
											{ className: 'mx-2 my-2 text-l' },
											statusMessage,
										),
										__jsx(
											'p',
											{
												className:
													'mx-2 my-2 text-gray-400 inline-block text-xs',
											},
											percentComplete,
										),
									),
								),
								__jsx(
									'div',
									{
										className:
											'closeIcons flex gap-2 justify-items-end my-10 mx-2',
									},
									__jsx(bs_index_esm.uhk, {
										size: 28,
										fill: 'gray',
										onClick: handle,
									}),
									__jsx(md_index_esm.FU5, {
										fill: 'gray',
										size: 30,
										onClick: handle,
									}),
								),
							),
						testType &&
							__jsx(
								react.Fragment,
								null,
								__jsx(
									'div',
									{ className: 'm-3 flex items-center' },
									__jsx(
										'div',
										{
											className: 'testInformation',
											id: 'primary',
										},
										__jsx(
											'p',
											null,
											testType,
											' : ',
											testModule,
										),
										__jsx(
											'p',
											{
												className:
													'mx-2 my-2 text-gray-500 inline-block text-xs uppercase font-semibold',
											},
											moduleIdentifier,
										),
										__jsx(
											'div',
											{
												className:
													'flex gap-1 items-center',
											},
											__jsx(bs_index_esm.YZq, {
												size: '12px',
											}),
											__jsx(
												'p',
												null,
												'Opens in ',
												dueDate,
											),
										),
									),
								),
								__jsx(
									'div',
									{
										className:
											'notificationIcon grid justify-items-end my-10 mx-3',
									},
									__jsx(bs_index_esm.nzA, {
										size: 30,
										onClick: handle,
									}),
								),
							),
						grade &&
							__jsx(
								react.Fragment,
								null,
								__jsx(
									'div',
									{ className: 'm-3 flex flex-col' },
									__jsx(
										'div',
										{
											className:
												'module text-xl font-medium',
											id: 'secondary',
										},
										moduleIdentifier,
										' ',
									),
									__jsx(
										'div',
										{
											className:
												'flex justify-start items-center text-gray-600 inline-block text-sm',
										},
										percentage,
										'% passing rate',
										' ',
									),
									__jsx(
										'div',
										{
											className:
												'flex gap-1 items-center text-gray-500 inline-block text-xs',
										},
										'Average Grade: ',
										grade,
										' ',
									),
								),
								__jsx(
									'div',
									{
										className:
											'moreOptions grid justify-items-end m-2 text-gray-500 inline-block text-sm',
										onClick: handle,
									},
									'more',
								),
							),
					)
				}
			;(InformationCard.displayName = 'InformationCard'),
				(InformationCard.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'InformationCard',
					props: {
						percentComplete: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						statusMessage: {
							required: !0,
							tsType: { name: 'string' },
							description:
								'String that shows up the percentage complete on Default Card',
						},
						testType: {
							required: !0,
							tsType: { name: 'string' },
							description:
								'String that shows up the status message on Default Card',
						},
						testModule: {
							required: !0,
							tsType: { name: 'string' },
							description:
								'String that shows up the test type on Primary Card',
						},
						dueDate: {
							required: !0,
							tsType: { name: 'string' },
							description:
								'String that shows up the type of TestModule on Primary Card',
						},
						moduleIdentifier: {
							required: !0,
							tsType: { name: 'string' },
							description: 'String that shows up the dueDate',
						},
						grade: {
							required: !0,
							tsType: { name: 'string' },
							description:
								'String that shows up the Module Identifier',
						},
						percentage: {
							required: !0,
							tsType: { name: 'string' },
							description: 'String that shows up the grade',
						},
						handle: {
							required: !0,
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
								'String that shows up the percentage in the Secondary Card',
						},
					},
				})
			try {
				;(InformationCard.displayName = 'InformationCard'),
					(InformationCard.__docgenInfo = {
						description: '',
						displayName: 'InformationCard',
						props: {
							percentComplete: {
								defaultValue: null,
								description: '',
								name: 'percentComplete',
								required: !0,
								type: { name: 'string' },
							},
							statusMessage: {
								defaultValue: null,
								description:
									'String that shows up the percentage complete on Default Card',
								name: 'statusMessage',
								required: !0,
								type: { name: 'string' },
							},
							testType: {
								defaultValue: null,
								description:
									'String that shows up the status message on Default Card',
								name: 'testType',
								required: !0,
								type: { name: 'string' },
							},
							testModule: {
								defaultValue: null,
								description:
									'String that shows up the test type on Primary Card',
								name: 'testModule',
								required: !0,
								type: { name: 'string' },
							},
							dueDate: {
								defaultValue: null,
								description:
									'String that shows up the type of TestModule on Primary Card',
								name: 'dueDate',
								required: !0,
								type: { name: 'string' },
							},
							moduleIdentifier: {
								defaultValue: null,
								description: 'String that shows up the dueDate',
								name: 'moduleIdentifier',
								required: !0,
								type: { name: 'string' },
							},
							grade: {
								defaultValue: null,
								description:
									'String that shows up the Module Identifier',
								name: 'grade',
								required: !0,
								type: { name: 'string' },
							},
							percentage: {
								defaultValue: null,
								description: 'String that shows up the grade',
								name: 'percentage',
								required: !0,
								type: { name: 'string' },
							},
							handle: {
								defaultValue: null,
								description:
									'String that shows up the percentage in the Secondary Card',
								name: 'handle',
								required: !0,
								type: { name: '() => void' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/information_card/information_card.tsx#InformationCard'
						] = {
							docgenInfo: InformationCard.__docgenInfo,
							name: 'InformationCard',
							path: 'components/common/information_card/information_card.tsx#InformationCard',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var information_card_stories_jsx = react.createElement
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
			const information_card_stories = {
				title: 'Common/Information Card',
				component: InformationCard,
				argTypes: {},
			}
			function onHandle() {
				console.log('works')
			}
			var Template = function Template(args) {
				return information_card_stories_jsx(
					InformationCard,
					(0, esm_extends.Z)({}, args, { handle: onHandle }),
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = {
				percentComplete: 'Complete',
				statusMessage: 'Spend 13 or more hours in module view',
			}
			var Primary = Template.bind({})
			Primary.args = {
				testType: 'Assignment',
				testModule: 'Introduction to Organization Analysis',
				moduleIdentifier: 'M 137G',
				dueDate: '27 module hours',
			}
			var Secondary = Template.bind({})
			;(Secondary.args = {
				grade: 'A',
				percentage: '84',
				moduleIdentifier: 'ENMA 715',
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
									: _Default$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: InformationProps) => <InformationCard {...args} handle={onHandle} />',
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
										: _Default$parameters2$.source,
								),
							},
						),
					},
				)),
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
											'(args: InformationProps) => <InformationCard {...args} handle={onHandle} />',
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
									: _Secondary$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: InformationProps) => <InformationCard {...args} handle={onHandle} />',
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
	},
])
