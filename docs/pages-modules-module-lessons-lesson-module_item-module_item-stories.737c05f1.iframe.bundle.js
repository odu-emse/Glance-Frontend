'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[2717],
	{
		'./components/pages/modules/module/lessons/lesson/module_item/module_item.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Primary: () => Primary,
						default: () => module_item_stories,
					})
				var _Primary$parameters,
					_Primary$parameters2,
					_Primary$parameters2$,
					defineProperty = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
					),
					react = __webpack_require__(
						'./node_modules/react/index.js'
					),
					next_link = __webpack_require__(
						'./node_modules/next/link.js'
					),
					link_default = __webpack_require__.n(next_link),
					index_esm = __webpack_require__(
						'./node_modules/react-icons/hi/index.esm.js'
					),
					__jsx = react.createElement,
					ModuleItem = function ModuleItem(_ref) {
						var data = _ref.data,
							expanded = _ref.expanded,
							handleExpansion = _ref.handleExpansion,
							selected = _ref.selected
						return __jsx(
							'div',
							{
								className:
									'px-5 py-4 rounded-md shadow cursor-pointer flex justify-center items-center w-full border-2 '.concat(
										selected
											? 'border-royalblue'
											: 'border-transparent'
									),
							},
							__jsx(
								'div',
								{
									className: 'flex grow flex-col gap-1',
									onClick: function onClick() {
										return handleExpansion(!expanded)
									},
								},
								__jsx(
									'div',
									{
										className:
											'flex flex-row gap-1 sans text-sm sans uppercase items-center',
									},
									__jsx(
										'p',
										{ className: 'p-0 m-0' },
										'SECTION ',
										data.collections[0].section
											.sectionNumber
									),
									__jsx('span', null, '/'),
									__jsx(
										'p',
										{ className: 'p-0 m-0' },
										data.collections[0].name
									),
									__jsx('span', null, '/'),
									__jsx(
										'p',
										{ className: 'p-0 m-0' },
										'MODULE ',
										data.prefix && data.prefix,
										data.number
									)
								),
								__jsx(
									'div',
									null,
									__jsx(
										'h2',
										{
											className:
												'sans leading-5 text-royalblue font-semibold',
										},
										data.name
									)
								)
							),
							__jsx(
								link_default(),
								{
									href: '/modules/'.concat(data.id),
									passHref: !0,
								},
								__jsx(
									'a',
									{ className: 'block' },
									__jsx(
										'span',
										{
											className:
												'w-12 h-12 bg-royalblue text-white rounded-full flex justify-center items-center',
											style: { fontSize: '24px' },
										},
										__jsx(index_esm.MOd, null)
									)
								)
							)
						)
					}
				;(ModuleItem.displayName = 'ModuleItem'),
					(ModuleItem.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'ModuleItem',
						props: {
							data: {
								required: !0,
								tsType: { name: 'Module' },
								description: '',
							},
							role: {
								required: !0,
								tsType: { name: 'String' },
								description: '',
							},
							expanded: {
								required: !0,
								tsType: { name: 'boolean' },
								description: '',
							},
							handleExpansion: {
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
							selected: {
								required: !0,
								tsType: { name: 'boolean' },
								description: '',
							},
						},
					})
				try {
					;(ModuleItem.displayName = 'ModuleItem'),
						(ModuleItem.__docgenInfo = {
							description: '',
							displayName: 'ModuleItem',
							props: {
								data: {
									defaultValue: null,
									description: '',
									name: 'data',
									required: !0,
									type: { name: 'Module' },
								},
								role: {
									defaultValue: null,
									description: '',
									name: 'role',
									required: !0,
									type: { name: 'String' },
								},
								expanded: {
									defaultValue: null,
									description: '',
									name: 'expanded',
									required: !0,
									type: { name: 'boolean' },
								},
								handleExpansion: {
									defaultValue: null,
									description: '',
									name: 'handleExpansion',
									required: !0,
									type: {
										name: 'Dispatch<SetStateAction<boolean>>',
									},
								},
								selected: {
									defaultValue: null,
									description: '',
									name: 'selected',
									required: !0,
									type: { name: 'boolean' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/pages/modules/module/lessons/lesson/module_item/module_item.tsx#ModuleItem'
							] = {
								docgenInfo: ModuleItem.__docgenInfo,
								name: 'ModuleItem',
								path: 'components/pages/modules/module/lessons/lesson/module_item/module_item.tsx#ModuleItem',
							})
				} catch (__react_docgen_typescript_loader_error) {}
				var module_item_stories_jsx = react.createElement
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
							? ownKeys(Object(source), !0).forEach(function (
									key
							  ) {
									;(0, defineProperty.Z)(
										target,
										key,
										source[key]
									)
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
										Object.getOwnPropertyDescriptor(
											source,
											key
										)
									)
							  })
					}
					return target
				}
				const module_item_stories = {
					title: 'Common/Module Flow/Module Item',
					component: ModuleItem,
				}
				var Template = function Template(args) {
					return module_item_stories_jsx(ModuleItem, args)
				}
				Template.displayName = 'Template'
				var Primary = Template.bind({})
				;(Primary.storyName = 'First module item'),
					(Primary.args = {
						data: {
							id: '620d2d2df524b2dcf02b5bbe',
							moduleName: 'Testing',
							moduleNumber: 72,
							intro: 'Some intro',
							createdAt: '02/16/2022',
							description: 'Some description',
							duration: 10,
							keywords: ['Test', 'Intro', 'Create Module?'],
							numSlides: 45,
							feedback: null,
							parentModules: null,
							members: null,
						},
						role: 'STUDENT',
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
												'(args: ModuleItemProps) => <ModuleItem {...args} />',
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
					))
			},
	},
])
