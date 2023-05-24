'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[7197],
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
		'./components/common/pages/admin_panel/module_card/module_card.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Default: () => Default,
						default: () => __WEBPACK_DEFAULT_EXPORT__,
					})
				var _Default$parameters,
					_Default$parameters2,
					_Default$parameters2$,
					_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
						__webpack_require__(
							'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
						),
					react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						'./node_modules/react/index.js'
					),
					_module_card__WEBPACK_IMPORTED_MODULE_2__ =
						__webpack_require__(
							'./components/common/pages/admin_panel/module_card/module_card.tsx'
						),
					__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
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
									;(0,
									_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
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
				const __WEBPACK_DEFAULT_EXPORT__ = {
					title: 'Common/Pages/Admin Panel/ModuleCard',
					component: _module_card__WEBPACK_IMPORTED_MODULE_2__.O,
					argTypes: {},
				}
				var Template = function Template(args) {
					return __jsx(
						_module_card__WEBPACK_IMPORTED_MODULE_2__.O,
						args
					)
				}
				Template.displayName = 'Template'
				var Default = Template.bind({})
				;(Default.args = {
					id: '1',
					moduleName: 'Module A',
					instructorName: 'Instructor',
					registeredUsers: 342,
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
												'(args: ModuleCardProps) => <ModuleCard {...args} />',
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
	},
])
