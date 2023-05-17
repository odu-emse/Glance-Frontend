'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[2636],
	{
		'./components/common/pages/admin_panel/module_card/module_card.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.d(__webpack_exports__, { O: () => ModuleCard })
			var _Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/extends.js'
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						'./node_modules/react-icons/bi/index.esm.js'
					),
				react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						'./node_modules/react-icons/ri/index.esm.js'
					),
				_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@dnd-kit/sortable/dist/sortable.esm.js'
					),
				_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./node_modules/@dnd-kit/utilities/dist/utilities.esm.js'
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				ModuleCard = function ModuleCard(_ref) {
					var id = _ref.id,
						moduleName = _ref.moduleName,
						instructorName = _ref.instructorName,
						registeredUsers = _ref.registeredUsers,
						_useSortable = (0,
						_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_1__.nB)({
							id,
						}),
						attributes = _useSortable.attributes,
						listeners = _useSortable.listeners,
						setNodeRef = _useSortable.setNodeRef,
						transform = _useSortable.transform,
						transition = _useSortable.transition,
						style = {
							transform:
								_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.ux.Transform.toString(
									transform
								),
							transition,
						}
					return __jsx(
						'div',
						(0,
						_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
							{ ref: setNodeRef, style },
							attributes,
							listeners,
							{
								className:
									'border-solid border-gray bg-gray-200  hover:bg-gray-100 rounded flex justify-between border',
							}
						),
						__jsx(
							'div',
							{ className: 'm-2' },
							__jsx(
								'p',
								{ className: 'text-2xl py-2' },
								moduleName
							),
							__jsx(
								'div',
								{ className: 'flex text-xs font-medium' },
								__jsx(
									'p',
									{ className: 'uppercase pr-2' },
									instructorName
								),
								__jsx(
									'p',
									{ className: 'uppercase px-2' },
									registeredUsers,
									' Registered Users'
								)
							)
						),
						__jsx(
							'div',
							{ className: 'flex gap-3 items-center m-2' },
							__jsx(
								react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.aJk,
								{ size: 25 }
							),
							__jsx(
								react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.Ehm,
								{ size: 25 }
							)
						)
					)
				}
			;(ModuleCard.displayName = 'ModuleCard'),
				(ModuleCard.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'ModuleCard',
					props: {
						id: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						moduleName: {
							required: !0,
							tsType: { name: 'string' },
							description:
								'unique number that shows up identity of the module card',
						},
						instructorName: {
							required: !0,
							tsType: { name: 'string' },
							description:
								'string that shows up name of the module on Default Card',
						},
						registeredUsers: {
							required: !0,
							tsType: { name: 'number' },
							description:
								'string that shows up name of the instructor on Default Card',
						},
					},
				})
			try {
				;(ModuleCard.displayName = 'ModuleCard'),
					(ModuleCard.__docgenInfo = {
						description: '',
						displayName: 'ModuleCard',
						props: {
							id: {
								defaultValue: null,
								description: '',
								name: 'id',
								required: !0,
								type: { name: 'string' },
							},
							moduleName: {
								defaultValue: null,
								description:
									'unique number that shows up identity of the module card',
								name: 'moduleName',
								required: !0,
								type: { name: 'string' },
							},
							instructorName: {
								defaultValue: null,
								description:
									'string that shows up name of the module on Default Card',
								name: 'instructorName',
								required: !0,
								type: { name: 'string' },
							},
							registeredUsers: {
								defaultValue: null,
								description:
									'string that shows up name of the instructor on Default Card',
								name: 'registeredUsers',
								required: !0,
								type: { name: 'number' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/pages/admin_panel/module_card/module_card.tsx#ModuleCard'
						] = {
							docgenInfo: ModuleCard.__docgenInfo,
							name: 'ModuleCard',
							path: 'components/common/pages/admin_panel/module_card/module_card.tsx#ModuleCard',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/pages/admin_panel_page/modules/modules.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					default: () => modules_stories,
				})
			var _templateObject,
				_Default$parameters,
				_Default$parameters2,
				_Default$parameters2$,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				taggedTemplateLiteral = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
				),
				module_card = __webpack_require__(
					'./components/common/pages/admin_panel/module_card/module_card.tsx'
				),
				core_esm = __webpack_require__(
					'./node_modules/@dnd-kit/core/dist/core.esm.js'
				),
				sortable_esm = __webpack_require__(
					'./node_modules/@dnd-kit/sortable/dist/sortable.esm.js'
				),
				gql_fetcher = __webpack_require__('./utils/gql_fetcher.ts'),
				esm = __webpack_require__(
					'./node_modules/graphql-request/build/esm/index.js'
				),
				dist = __webpack_require__('./node_modules/swr/dist/index.mjs'),
				__jsx = react.createElement,
				Modules = function Modules(_ref) {
					var _ref$modules = _ref.modules,
						modules = void 0 === _ref$modules ? [] : _ref$modules,
						_useState = (0, react.useState)(null),
						active = _useState[0],
						setActive = _useState[1],
						_useState2 = (0, react.useState)(modules),
						items = _useState2[0],
						setItems = _useState2[1],
						sensors = (0, core_esm.Dy)(
							(0, core_esm.VT)(core_esm.we),
							(0, core_esm.VT)(core_esm.Lg, {
								coordinateGetter: sortable_esm.is,
							})
						),
						_useSWR = (0, dist.ZP)(
							{
								query: (0, esm.Ps)(
									_templateObject ||
										(_templateObject = (0,
										taggedTemplateLiteral.Z)([
											'\n\t\t\t\t{\n\t\t\t\t\tmodule(input: {}) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tmoduleName\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tmembers {\n\t\t\t\t\t\t\trole\n\t\t\t\t\t\t\tplan {\n\t\t\t\t\t\t\t\tstudent {\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\t\tpicURL\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcollections {\n\t\t\t\t\t\t\tlessons {\n\t\t\t\t\t\t\t\tthreads {\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\t\tpicURL\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tbody\n\t\t\t\t\t\t\t\t\tupvotes {\n\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t',
										]))
								),
							},
							gql_fetcher.Z
						),
						data = _useSWR.data,
						error = _useSWR.error
					if (error) throw (console.log(error), new Error(error))
					if (!data) return __jsx('div', null, 'Loading...')
					var mods = data.module
					return (
						console.log(mods),
						__jsx(
							'div',
							null,
							__jsx(
								'h1',
								{ className: 'text-2xl m-3 py-2' },
								'Your Modules'
							),
							__jsx(
								core_esm.LB,
								{
									onDragEnd: function handleOnDragEnd(event) {
										var active = event.active,
											over = event.over
										active.id !== over.id &&
											setItems(function (items) {
												var oldIndex = items.findIndex(
														function (item) {
															return (
																active.id ===
																item.module.id
															)
														}
													),
													newIndex = items.findIndex(
														function (item) {
															return (
																over.id ===
																item.module.id
															)
														}
													)
												return (0,
												sortable_esm.Rp)(items, oldIndex, newIndex)
											})
										setActive(null)
									},
									onDragStart: function handleOnDragStart(
										event
									) {
										var active = event.active
										setActive(
											items.find(function (item) {
												return (
													active.id === item.module.id
												)
											})
										)
									},
									collisionDetection: core_esm.pE,
									sensors,
								},
								__jsx(
									sortable_esm.Fo,
									{ items, strategy: sortable_esm.qw },
									data.module.map(function (mod) {
										var _mod$members$filter$
										return __jsx(
											'div',
											{ className: 'm-3', key: mod.id },
											__jsx(module_card.O, {
												id: mod.id,
												moduleName: mod.moduleName,
												instructorName:
													null ===
														(_mod$members$filter$ =
															mod.members.filter(
																function (
																	member
																) {
																	return (
																		'TEACHER' ===
																		member.role
																	)
																}
															)[0]) ||
													void 0 ===
														_mod$members$filter$
														? void 0
														: _mod$members$filter$
																.plan.student
																.firstName,
												registeredUsers: 50,
											})
										)
									})
								),
								__jsx(
									core_esm.y9,
									null,
									active
										? __jsx(module_card.O, {
												key: active.module.id,
												id: active.module.id,
												moduleName:
													active.module.moduleName,
												instructorName: 'Joeal',
												registeredUsers: 50,
										  })
										: null
								)
							)
						)
					)
				}
			Modules.__docgenInfo = {
				description: '',
				methods: [],
				displayName: 'Modules',
				props: {
					modules: {
						defaultValue: { value: '[]', computed: !1 },
						required: !1,
						tsType: {
							name: 'Array',
							elements: [{ name: 'any' }],
							raw: 'Array<any>',
						},
						description:
							'Array type that holds all modules data\n@type array',
					},
				},
			}
			try {
				;(Modules.displayName = 'Modules'),
					(Modules.__docgenInfo = {
						description: '',
						displayName: 'Modules',
						props: {
							modules: {
								defaultValue: { value: '[]' },
								description:
									'Array type that holds all modules data',
								name: 'modules',
								required: !1,
								type: { name: 'array' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/pages/admin_panel_page/modules/modules.tsx#Modules'
						] = {
							docgenInfo: Modules.__docgenInfo,
							name: 'Modules',
							path: 'components/pages/admin_panel_page/modules/modules.tsx#Modules',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var modules_stories_jsx = react.createElement
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
			const modules_stories = {
				title: 'Pages/Admin Panel/Modules',
				component: Modules,
				argTypes: {},
			}
			var Template = function Template(args) {
				return modules_stories_jsx(Modules, args)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {
				modules: [
					{
						enrolledAt: '05/19/2022',
						role: 'TEACHER',
						module: {
							id: '61560592009b2b64008696c5',
							moduleName:
								'testing spread operator on module update',
							moduleNumber: 102,
							intro: 'Hello there',
							createdAt: '09/30/2021',
							description: 'Some words go here!',
							duration: 1.1,
							keywords: [
								'Apple',
								'Horse',
								'Elephant',
								'Rino',
								'Pineapple',
								'Coconut',
							],
							numSlides: 10,
							feedback: null,
							parentModules: null,
							members: null,
						},
					},
					{
						enrolledAt: '05/19/2022',
						role: 'TEACHER',
						module: {
							id: '34516gvbudnk',
							moduleName: 'bnlbmbbk',
							moduleNumber: 102,
							intro: 'Hello bhvu',
							createdAt: '09/30/2021',
							description: 'Some words go here!',
							duration: 1.1,
							keywords: [
								'Apple',
								'Horse',
								'Elephant',
								'Rino',
								'Pineapple',
								'Coconut',
							],
							numSlides: 10,
							feedback: null,
							parentModules: null,
							members: null,
						},
					},
					{
						enrolledAt: '10/11/2022',
						role: 'STUDENT',
						module: {
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
					},
				],
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
									: _Default$parameters.docs
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'(args: ModuleProps) => <Modules {...args} />',
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
										: _Default$parameters2$.source
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
	},
])
