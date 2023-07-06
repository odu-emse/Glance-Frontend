'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[2890],
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
		'./components/common/module_card/module_card.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					Secondary: () => Secondary,
					Tertiary: () => Tertiary,
					default: () => module_card_stories,
				})
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				_Secondary$parameters,
				_Secondary$parameters2,
				_Secondary$parameters3,
				_Tertiary$parameters,
				_Tertiary$parameters2,
				_Tertiary$parameters3,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				button_button = __webpack_require__(
					'./components/common/button/button.tsx',
				),
				__jsx = react.createElement,
				ModuleCard = function ModuleCard(_ref) {
					var parentCourse = _ref.parentCourse,
						moduleName = _ref.moduleName,
						moduleNumber = _ref.moduleNumber,
						percentageCompleted = _ref.percentageCompleted,
						averageTime = _ref.averageTime,
						userTime = _ref.userTime,
						duration = _ref.duration,
						currentTopic = _ref.currentTopic,
						primaryLink = _ref.primaryLink,
						primaryLinkLabel = _ref.primaryLinkLabel,
						secondaryLink = _ref.secondaryLink,
						secondaryLinkLabel = _ref.secondaryLinkLabel,
						completion = _ref.completion
					return __jsx(
						'div',
						{
							className:
								'moduleCard flex flex-col lg:flex-row md:items-stretch gap-4 border-gray bg-gray-100 drop-shadow-md border border-solid rounded',
						},
						__jsx('div', {
							className:
								'statusColorCode flex w-full lg:w-4 p-2 lg:p-0 '.concat(
									completion
										? 'bg-green-400'
										: percentageCompleted > 25
										? 'bg-blue-300'
										: 'bg-red-400',
								),
						}),
						__jsx(
							'div',
							{
								className:
									'flex grow flex-col lg:flex-row md:gap-10',
							},
							__jsx(
								'div',
								{
									className:
										'grow flex flex-col justify-between m-1',
								},
								__jsx(
									'div',
									{
										className:
											'flex text-gray-500 lg:text-base text-sm',
									},
									''
										.concat(parentCourse, ' - ')
										.concat(moduleNumber),
								),
								__jsx(
									'div',
									{
										className:
											'flex lg:pb-4 font-bold text-base xl:text-lg',
									},
									moduleName,
								),
								__jsx(
									'div',
									{
										className:
											'flex flex-row text-sm justify-between',
									},
									__jsx(
										'p',
										{
											className:
												'underline text-sm text-gray-700',
										},
										'Forum',
									),
									__jsx(
										'p',
										{
											className:
												'underline text-sm text-gray-700',
										},
										'Assignment',
									),
									__jsx(
										'p',
										{
											className:
												'underline text-sm text-gray-700',
										},
										'Download',
									),
									completion
										? ''
										: __jsx(
												'p',
												{
													className:
														'underline text-sm text-red-700',
												},
												'Abandon',
										  ),
								),
							),
							__jsx(
								'div',
								{
									className:
										'flex-none flex flex-col items-center',
								},
								__jsx(
									'div',
									{ className: 'completionPercentage' },
									__jsx(
										'p',
										{ className: 'lg:mt-5' },
										percentageCompleted + '%',
										' Viewed',
									),
								),
								__jsx(
									'svg',
									{ className: 'completionStatus w-20 h-20' },
									__jsx('circle', {
										className: 'text-gray-300',
										strokeWidth: '5',
										stroke: 'currentColor',
										fill: 'transparent',
										r: '30',
										cx: '40',
										cy: '40',
									}),
									__jsx('circle', {
										className: 'text-blue-600',
										strokeWidth: '5',
										strokeDasharray: '10',
										strokeDashoffset: ''.concat(
											100 -
												(percentageCompleted / 100) *
													10,
										),
										strokeLinecap: 'round',
										stroke: 'currentColor',
										fill: 'transparent',
										r: '30',
										cx: '40',
										cy: '40',
									}),
								),
								__jsx(
									'div',
									{ className: '' },
									completion
										? __jsx(
												'div',
												{
													className:
														'flex flex-col items-center',
												},
												__jsx(
													'p',
													{ className: '' },
													'Average time: '
														.concat(
															averageTime,
															' ',
														)
														.concat(
															1 === averageTime
																? 'minute'
																: 'minutes',
														),
												),
												__jsx(
													'p',
													null,
													'Your time: '
														.concat(userTime, ' ')
														.concat(
															1 === userTime
																? 'minute'
																: 'minutes',
														),
												),
										  )
										: __jsx(
												'p',
												{ className: '' },
												'Approximately '
													.concat(duration, ' ')
													.concat(
														1 === duration
															? 'minute'
															: 'minutes',
														' left ',
													),
										  ),
								),
							),
							__jsx(
								'div',
								{
									className:
										'flex-none flex flex-col items-center justify-center ',
								},
								completion
									? __jsx(
											'div',
											{
												className:
													'moduleCompleted flex items-center justify-center px-2',
											},
											__jsx('p', { className: 'md:' }),
											__jsx(
												'p',
												{
													className:
														'text-white bg-blue-300 px-20 py-1 w-full my-1',
												},
												'Continue',
											),
									  )
									: __jsx(
											'div',
											{
												className:
													'moduleInProgress currentTopicStatus flex flex-col w-full h-50 items-center justify-center gap-3 lg:items-center',
											},
											__jsx(
												'div',
												{
													className:
														'text-gray-600 text-sm',
												},
												'Current Topic',
											),
											__jsx(
												'div',
												{
													className:
														'font-medium text-sm pr-2',
												},
												currentTopic,
											),
											__jsx(
												'div',
												{
													className:
														'flex flex-col w-full px-3',
												},
												__jsx(
													'div',
													{ className: 'py-1' },
													__jsx(
														button_button.z,
														{
															loading: !1,
															size: 'base',
															onClick: void 0,
															type: 'button',
															disabled: !1,
															variant: 'primary',
														},
														__jsx(
															'a',
															{
																href: primaryLink,
																className:
																	'flex items-center justify-center',
															},
															primaryLinkLabel,
														),
													),
												),
												__jsx(
													'div',
													null,
													__jsx(
														button_button.z,
														{
															loading: !1,
															size: 'base',
															onClick: void 0,
															type: 'button',
															disabled: !1,
															variant:
																'secondary',
														},
														__jsx(
															'a',
															{
																href: secondaryLink,
																className:
																	'flex items-center justify-center',
															},
															secondaryLinkLabel,
														),
													),
													' ',
												),
											),
									  ),
							),
						),
					)
				}
			;(ModuleCard.displayName = 'ModuleCard'),
				(ModuleCard.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'ModuleCard',
					props: {
						completion: {
							required: !0,
							tsType: { name: 'boolean' },
							description:
								'Boolean that determines if the course module is completed or not\n@type boolean\n@default false',
						},
						parentCourse: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						moduleName: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						moduleNumber: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						percentageCompleted: {
							required: !0,
							tsType: { name: 'number' },
							description: '',
						},
						averageTime: {
							required: !1,
							tsType: { name: 'number' },
							description: '',
						},
						userTime: {
							required: !1,
							tsType: { name: 'number' },
							description: '',
						},
						duration: {
							required: !1,
							tsType: { name: 'number' },
							description: '',
						},
						currentTopic: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						primaryLink: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						primaryLinkLabel: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						secondaryLink: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						secondaryLinkLabel: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
					},
				})
			try {
				;(ModuleCard.displayName = 'ModuleCard'),
					(ModuleCard.__docgenInfo = {
						description: '',
						displayName: 'ModuleCard',
						props: {
							completion: {
								defaultValue: { value: 'false' },
								description:
									'Boolean that determines if the course module is completed or not',
								name: 'completion',
								required: !0,
								type: { name: 'boolean' },
							},
							parentCourse: {
								defaultValue: null,
								description: '',
								name: 'parentCourse',
								required: !0,
								type: { name: 'string' },
							},
							moduleName: {
								defaultValue: null,
								description: '',
								name: 'moduleName',
								required: !0,
								type: { name: 'string' },
							},
							moduleNumber: {
								defaultValue: null,
								description: '',
								name: 'moduleNumber',
								required: !0,
								type: { name: 'string' },
							},
							percentageCompleted: {
								defaultValue: null,
								description: '',
								name: 'percentageCompleted',
								required: !0,
								type: { name: 'number' },
							},
							averageTime: {
								defaultValue: null,
								description: '',
								name: 'averageTime',
								required: !1,
								type: { name: 'number' },
							},
							userTime: {
								defaultValue: null,
								description: '',
								name: 'userTime',
								required: !1,
								type: { name: 'number' },
							},
							duration: {
								defaultValue: null,
								description: '',
								name: 'duration',
								required: !1,
								type: { name: 'number' },
							},
							currentTopic: {
								defaultValue: null,
								description: '',
								name: 'currentTopic',
								required: !0,
								type: { name: 'string' },
							},
							primaryLink: {
								defaultValue: null,
								description: '',
								name: 'primaryLink',
								required: !0,
								type: { name: 'string' },
							},
							primaryLinkLabel: {
								defaultValue: null,
								description: '',
								name: 'primaryLinkLabel',
								required: !0,
								type: { name: 'string' },
							},
							secondaryLink: {
								defaultValue: null,
								description: '',
								name: 'secondaryLink',
								required: !0,
								type: { name: 'string' },
							},
							secondaryLinkLabel: {
								defaultValue: null,
								description: '',
								name: 'secondaryLinkLabel',
								required: !0,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/module_card/module_card.tsx#ModuleCard'
						] = {
							docgenInfo: ModuleCard.__docgenInfo,
							name: 'ModuleCard',
							path: 'components/common/module_card/module_card.tsx#ModuleCard',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var module_card_stories_jsx = react.createElement
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
			const module_card_stories = {
				title: 'Common/ModuleCard',
				component: ModuleCard,
			}
			var Template = function Template(args) {
				return module_card_stories_jsx(ModuleCard, args)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			;(Primary.storyName = 'first module card'),
				(Primary.args = {
					completion: !1,
					moduleName: 'Module 1',
					parentCourse: 'ENMA 600',
					moduleNumber: 'M 178P',
					percentageCompleted: 50,
					averageTime: 0,
					userTime: 10,
					duration: 38,
					currentTopic: 'Ethical Behavior and leadership',
					primaryLink: '178P',
					primaryLinkLabel: '/module/178P',
					secondaryLink: '178P/treeview',
					secondaryLinkLabel: '/module/178P/treeview',
				})
			var Secondary = Template.bind({})
			;(Secondary.storyName = 'second module card'),
				(Secondary.args = {
					completion: !1,
					moduleName: 'Module 1',
					parentCourse: 'ENMA 604',
					moduleNumber: 'M 209V',
					percentageCompleted: 25,
					averageTime: 55,
					userTime: 0,
					duration: 10,
					currentTopic:
						'Simulation Modeling in Transportation Networks',
					primaryLink: '209V',
					primaryLinkLabel: '/module/209V',
					secondaryLink: '209V/treeview',
					secondaryLinkLabel: '/module/209V/treeview',
				})
			var Tertiary = Template.bind({})
			;(Tertiary.storyName = 'third module card'),
				(Tertiary.args = {
					completion: !0,
					moduleName: 'Module 1',
					parentCourse: 'ENMA 709',
					moduleNumber: 'M 084K',
					percentageCompleted: 100,
					averageTime: 13,
					userTime: 11,
					duration: 10,
					currentTopic: 'Risk Analysis',
					primaryLink: '084K',
					primaryLinkLabel: '/module/084K',
					secondaryLink: '084K/treeview',
					secondaryLinkLabel: '/module/084K/treeview',
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
											'(args: ModuleProps) => <ModuleCard {...args} />',
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
											'(args: ModuleProps) => <ModuleCard {...args} />',
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
				)),
				(Tertiary.parameters = _objectSpread(
					_objectSpread({}, Tertiary.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null ===
									(_Tertiary$parameters =
										Tertiary.parameters) ||
									void 0 === _Tertiary$parameters
									? void 0
									: _Tertiary$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: ModuleProps) => <ModuleCard {...args} />',
									},
									null ===
										(_Tertiary$parameters2 =
											Tertiary.parameters) ||
										void 0 === _Tertiary$parameters2 ||
										null ===
											(_Tertiary$parameters3 =
												_Tertiary$parameters2.docs) ||
										void 0 === _Tertiary$parameters3
										? void 0
										: _Tertiary$parameters3.source,
								),
							},
						),
					},
				))
		},
	},
])
