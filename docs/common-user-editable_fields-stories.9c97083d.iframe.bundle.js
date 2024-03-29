'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[8073],
	{
		'./components/common/user/editable_fields.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
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
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				_common_user_editable_field__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./components/common/user/editable_field.tsx',
					),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement
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
								;(0,
								_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
									target,
									key,
									source[key],
								)
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'common/Editable Field',
				component:
					_common_user_editable_field__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var Template = function Template(args) {
				return __jsx(
					_common_user_editable_field__WEBPACK_IMPORTED_MODULE_2__.Z,
					args,
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {
				type: 'text',
				isEditing: !1,
				inputDetails: {
					type: 'text',
					placeholder: 'placeholder',
					defaultValue: 'defaultValue',
					label: 'label',
					name: 'name',
					onChange: function onChange(e) {
						console.log(e)
					},
					className:
						'border-royalblue focus:border-royalblue border px-1 my-1 bg-white',
				},
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
											'args => {\n  return <EditableField {...args} />;\n}',
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
				))
		},
	},
])
