;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[6881],
	{
		'./components/common/community/social_card/social_card.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { X: () => SocialCard })
			var _Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/slicedToArray.js',
					),
				moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/moment/moment.js',
				),
				moment__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						'./node_modules/react-icons/ai/index.esm.js',
					),
				react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						'./node_modules/react-icons/fa/index.esm.js',
					),
				react_icons_md__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						'./node_modules/react-icons/md/index.esm.js',
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
							2,
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
														!isClicked,
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
														'view profile',
													),
													__jsx(
														'a',
														{
															href: '#',
															className:
																'block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
														},
														'Send message',
													),
													__jsx(
														'a',
														{
															href: '#',
															className:
																'block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
														},
														'Unfriend',
													),
													__jsx(
														'a',
														{
															href: '#',
															className:
																'block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
														},
														'Block user',
													),
												),
										),
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
												user.role,
											),
											' ',
											'- ',
											user.firstName,
											' ',
											user.lastName,
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
											user.office,
										),
									),
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
											},
										),
									'Advisor' === user.role &&
										__jsx(
											react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.nGB,
											{
												size: 38,
												className: 'text-yellow-400',
											},
										),
									'TA' === user.role &&
										__jsx(
											react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.VF9,
											{
												size: 38,
												className: 'text-yellow-400',
											},
										),
								),
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
									content,
								),
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
												{ size: 20, className: 'mr-1' },
											),
											__jsx(
												'span',
												{ className: '' },
												likes,
												' Likes',
											),
										),
										__jsx(
											'div',
											{
												className:
													'comments flex cursor-pointer items-center transition hover:text-slate-600 text-blue-600',
											},
											__jsx(
												react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.llv,
												{ size: 20, className: 'mr-1' },
											),
											__jsx(
												'span',
												{ className: '' },
												comments,
												' comments',
											),
										),
									),
								),
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
										'Add your comment to the post',
									),
									__jsx('input', {
										type: 'text',
										className:
											'border-transparent bg-transparent px-5 py-2 w-full',
										placeholder: 'Add Comment...',
										id: 'add-comment',
									}),
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
											{ size: 20, className: 'mr-1' },
										),
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
											{ size: 20, className: 'mr-1' },
										),
									),
								),
							),
						),
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
		'./components/common/community/social_card/social_card.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Primary: () => Primary,
					Prof: () => Prof,
					Secondary: () => Secondary,
					TA: () => TA,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			var _Primary$parameters,
				_Primary$parameters2,
				_Primary$parameters2$,
				_Secondary$parameters,
				_Secondary$parameters2,
				_Secondary$parameters3,
				_TA$parameters,
				_TA$parameters2,
				_TA$parameters2$docs,
				_Prof$parameters,
				_Prof$parameters2,
				_Prof$parameters2$doc,
				_Users_jdesante_Development_Glance_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
					),
				react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				_social_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/common/community/social_card/social_card.tsx',
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
				title: 'Common/Community/Social Card',
				component: _social_card__WEBPACK_IMPORTED_MODULE_2__.X,
			}
			var Template = function Template(args) {
				return __jsx(_social_card__WEBPACK_IMPORTED_MODULE_2__.X, args)
			}
			Template.displayName = 'Template'
			var Primary = Template.bind({})
			Primary.args = {
				timestamp: 1664376815,
				content:
					'AWESOME hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
				likes: 20,
				comments: 50,
				user: {
					firstName: 'Avantika',
					lastName: 'Mittapally',
					role: 'Advisor',
					image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
					title: 'Chair of Department',
					office: 'ESB 2101',
					department: 'Engineering Management & Systems Engineering',
				},
			}
			var Secondary = Template.bind({})
			;(Secondary.storyName = 'Longer Content'),
				(Secondary.args = _objectSpread(
					_objectSpread({}, Primary.args),
					{},
					{
						content:
							'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil!',
					},
				))
			var TA = Template.bind({})
			;(TA.storyName = 'TA user'),
				(TA.description = 'TA user here'),
				(TA.args = _objectSpread(
					_objectSpread({}, Secondary.args),
					{},
					{
						user: _objectSpread(
							_objectSpread({}, Secondary.args.user),
							{},
							{ role: 'TA' },
						),
					},
				))
			var Prof = Template.bind({})
			;(Prof.storyName = 'Professor user'),
				(Prof.args = _objectSpread(
					_objectSpread({}, Secondary.args),
					{},
					{
						user: _objectSpread(
							_objectSpread({}, Secondary.args.user),
							{},
							{ role: 'Prof' },
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
											'args => <SocialCard {...args} />',
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
											'args => <SocialCard {...args} />',
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
				(TA.parameters = _objectSpread(
					_objectSpread({}, TA.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null === (_TA$parameters = TA.parameters) ||
									void 0 === _TA$parameters
									? void 0
									: _TA$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'args => <SocialCard {...args} />',
									},
									null ===
										(_TA$parameters2 = TA.parameters) ||
										void 0 === _TA$parameters2 ||
										null ===
											(_TA$parameters2$docs =
												_TA$parameters2.docs) ||
										void 0 === _TA$parameters2$docs
										? void 0
										: _TA$parameters2$docs.source,
								),
							},
						),
					},
				)),
				(Prof.parameters = _objectSpread(
					_objectSpread({}, Prof.parameters),
					{},
					{
						docs: _objectSpread(
							_objectSpread(
								{},
								null === (_Prof$parameters = Prof.parameters) ||
									void 0 === _Prof$parameters
									? void 0
									: _Prof$parameters.docs,
							),
							{},
							{
								source: _objectSpread(
									{
										originalSource:
											'args => <SocialCard {...args} />',
									},
									null ===
										(_Prof$parameters2 = Prof.parameters) ||
										void 0 === _Prof$parameters2 ||
										null ===
											(_Prof$parameters2$doc =
												_Prof$parameters2.docs) ||
										void 0 === _Prof$parameters2$doc
										? void 0
										: _Prof$parameters2$doc.source,
								),
							},
						),
					},
				))
		},
		'./node_modules/moment/locale sync recursive ^\\.\\/.*$': (
			module,
			__unused_webpack_exports,
			__webpack_require__,
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
