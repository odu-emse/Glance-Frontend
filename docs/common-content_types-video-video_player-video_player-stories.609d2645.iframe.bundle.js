;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[767],
	{
		'./components/common/content_types/video/video_chip/video_chip.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { C: () => VideoChip })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js'
				),
				moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/moment/moment.js'
				),
				moment__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),
				__jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
				VideoChip = function VideoChip(_ref) {
					var id = _ref.id,
						text = _ref.text,
						timestamp = _ref.timestamp,
						icon = _ref.icon
					return __jsx(
						'div',
						{ className: 'mb-2', id },
						__jsx(
							'div',
							{
								className:
									'rounded p-4 cursor-pointer bg-white text-black flex gap-2 items-top justify-start',
							},
							__jsx(
								'span',
								{ className: 'text-gray-600 mt-1 mr-1' },
								__jsx(
									'div',
									{
										className:
											'w-6 h-6 rounded-full overflow-hidden',
									},
									__jsx('img', {
										className: 'w-full h-full object-cover',
										src: icon,
									})
								)
							),
							__jsx('p', { className: 'font-medium mt-1' }, text)
						),
						__jsx(
							'div',
							{
								className:
									'bg-black inline-block mt-1 rounded p-1 leading-none bg-opacity-30 cursor-default select-none',
							},
							__jsx(
								'small',
								null,
								moment__WEBPACK_IMPORTED_MODULE_1___default()
									.utc(1e3 * timestamp)
									.format('HH:mm:ss', { trim: !0 })
									.replace(/^0(?:0:0?)?/, '')
							)
						)
					)
				}
			;(VideoChip.displayName = 'VideoChip'),
				(VideoChip.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'VideoChip',
					props: {
						id: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						text: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
						timestamp: {
							required: !0,
							tsType: { name: 'number' },
							description: '',
						},
						icon: {
							required: !0,
							tsType: { name: 'string' },
							description: '',
						},
					},
				})
			try {
				;(VideoChip.displayName = 'VideoChip'),
					(VideoChip.__docgenInfo = {
						description: '',
						displayName: 'VideoChip',
						props: {
							id: {
								defaultValue: null,
								description: '',
								name: 'id',
								required: !0,
								type: { name: 'string' },
							},
							text: {
								defaultValue: null,
								description: '',
								name: 'text',
								required: !0,
								type: { name: 'string' },
							},
							timestamp: {
								defaultValue: null,
								description: '',
								name: 'timestamp',
								required: !0,
								type: { name: 'number' },
							},
							icon: {
								defaultValue: null,
								description: '',
								name: 'icon',
								required: !0,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/content_types/video/video_chip/video_chip.tsx#VideoChip'
						] = {
							docgenInfo: VideoChip.__docgenInfo,
							name: 'VideoChip',
							path: 'components/common/content_types/video/video_chip/video_chip.tsx#VideoChip',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/common/content_types/video/video_comment_tick/video_comment_tick.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict'
				__webpack_require__.d(__webpack_exports__, {
					N: () => VideoCommentTick,
				})
				var __jsx = __webpack_require__(
						'./node_modules/react/index.js'
					).createElement,
					VideoCommentTick = function VideoCommentTick(_ref) {
						var icon = _ref.icon
						return __jsx(
							'div',
							{
								tabIndex: 0,
								className: [
									'bg-blue-500 h-full w-full rounded-full overflow-hidden transition-transform cursor-pointer',
									'hover:scale-[1.5] hover:z-[200]',
									'focus:scale-[1.5] focus:z-[200]',
								].join(' '),
							},
							__jsx('img', {
								src: icon,
								className: ['object-cover w-full h-full'].join(
									' '
								),
							})
						)
					}
				;(VideoCommentTick.displayName = 'VideoCommentTick'),
					(VideoCommentTick.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'VideoCommentTick',
						props: {
							icon: {
								required: !0,
								tsType: { name: 'string' },
								description: '',
							},
						},
					})
				try {
					;(VideoCommentTick.displayName = 'VideoCommentTick'),
						(VideoCommentTick.__docgenInfo = {
							description: '',
							displayName: 'VideoCommentTick',
							props: {
								icon: {
									defaultValue: null,
									description: '',
									name: 'icon',
									required: !0,
									type: { name: 'string' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/content_types/video/video_comment_tick/video_comment_tick.tsx#VideoCommentTick'
							] = {
								docgenInfo: VideoCommentTick.__docgenInfo,
								name: 'VideoCommentTick',
								path: 'components/common/content_types/video/video_comment_tick/video_comment_tick.tsx#VideoCommentTick',
							})
				} catch (__react_docgen_typescript_loader_error) {}
			},
		'./components/common/content_types/video/video_player/video_player.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict'
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Sample: () => Sample,
						default: () => video_player_stories,
					})
				var _Sample$parameters,
					_Sample$parameters2,
					_Sample$parameters2$d,
					defineProperty = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
					),
					react = __webpack_require__(
						'./node_modules/react/index.js'
					),
					lodash = __webpack_require__(
						'./node_modules/lodash/lodash.js'
					),
					lodash_default = __webpack_require__.n(lodash),
					index_esm = __webpack_require__(
						'./node_modules/react-icons/fa/index.esm.js'
					),
					video_chip = __webpack_require__(
						'./components/common/content_types/video/video_chip/video_chip.tsx'
					),
					video_comment_tick = __webpack_require__(
						'./components/common/content_types/video/video_comment_tick/video_comment_tick.tsx'
					),
					__jsx = react.createElement,
					VideoPlayer = function VideoPlayer(_ref) {
						var source = _ref.source,
							type = _ref.type,
							captions = _ref.captions,
							_ref$autoplay = _ref.autoplay,
							autoplay =
								void 0 !== _ref$autoplay && _ref$autoplay,
							_ref$defaultVolume = _ref.defaultVolume,
							defaultVolume =
								void 0 !== _ref$defaultVolume &&
								_ref$defaultVolume,
							_ref$cards = (_ref.volume, _ref.cards),
							cards = void 0 === _ref$cards ? [] : _ref$cards,
							_useState = (0, react.useState)(autoplay),
							videoPlaying = _useState[0],
							setVideoPlaying = _useState[1],
							_useState2 = (0, react.useState)(!1),
							viewComments = _useState2[0],
							setViewComments = _useState2[1],
							_useState3 = (0, react.useState)(!1),
							controlsFocused = _useState3[0],
							setControlsFocused = _useState3[1],
							_useState4 = (0, react.useState)(''),
							commentInputBox = _useState4[0],
							setCommentInputBox = _useState4[1],
							_useState5 = (0, react.useState)(defaultVolume),
							isAudioMuted = _useState5[0],
							setAudioMuted = _useState5[1],
							_useState6 = (0, react.useState)(!1),
							isCaptionsVisible = _useState6[0],
							setCaptionsVisible = _useState6[1],
							_useState7 = (0, react.useState)(!1),
							isFullscreen = _useState7[0],
							setFullScreen = _useState7[1],
							player = (0, react.useRef)(null),
							videoPlayer = (0, react.useRef)(null),
							progressBar = (0, react.useRef)(null),
							captionsTrack = (0, react.useRef)(null),
							mouseTimeout = (0, react.useRef)()
						return __jsx(
							'div',
							{
								className: 'relative w-full h-96 bg-black',
								onMouseEnter: function onMouseEnter() {
									return setControlsFocused(!0)
								},
								onMouseLeave: function onMouseLeave() {
									return setControlsFocused(!1)
								},
								onMouseMove: function onMouseMove() {
									!(function handlemouseInactivity() {
										clearTimeout(mouseTimeout.current),
											setControlsFocused(!0),
											(mouseTimeout.current = setTimeout(
												function () {
													setControlsFocused(!1)
												},
												3e3
											))
									})()
								},
								ref: player,
							},
							__jsx(
								'video',
								{
									className: 'w-full h-full absolute',
									autoPlay: autoplay,
									onTimeUpdate: function handleTimeUpdate(
										event
									) {
										if (progressBar.current) {
											var target = event.target,
												position =
													(target.currentTime /
														target.duration) *
													100
											progressBar.current.valueAsNumber =
												position
										}
									},
									ref: videoPlayer,
									onPlay: function onPlay() {
										return setVideoPlaying(!0)
									},
									onPause: function onPause() {
										return setVideoPlaying(!1)
									},
								},
								__jsx('track', {
									kind: 'captions',
									srcLang: 'en',
									src: captions,
									ref: captionsTrack,
								}),
								__jsx('source', { src: source, type }),
								"Your browser doesn't support video playback. Please consider updating to the latest version."
							),
							__jsx(
								'div',
								{
									className:
										'absolute z-40 w-full sm:w-1/2 h-full bg-gradient-to-l from-black/[0.75] text-white flex justify-end '.concat(
											viewComments && controlsFocused
												? 'visible'
												: 'invisible'
										),
									style: { right: 0 },
								},
								__jsx(
									'div',
									{
										className:
											'w-3/4 h-5/6 overflow-scroll pt-16 pr-4 rounded flex flex-col gap-1',
									},
									__jsx(
										'div',
										{
											className:
												'flex flex-col items-end gap-1 mt-4 mb-2',
										},
										__jsx('textarea', {
											rows: 2,
											value: commentInputBox,
											onChange:
												function handleCommentBoxValueChange(
													event
												) {
													if (videoPlayer.current) {
														var target =
															event.target
														setCommentInputBox(
															target.value
														),
															videoPlayer.current.pause()
													}
												},
											placeholder: 'Leave a comment...',
											className:
												'w-full p-2 rounded outline-none text-black',
											'data-cy': 'message',
										}),
										__jsx(
											'button',
											{
												className:
													'flex gap-1 items-center justify-center hover:text-blue-300 '.concat(
														commentInputBox.length >
															0 &&
															controlsFocused &&
															viewComments
															? 'visible'
															: 'invisible'
													),
												'data-cy': 'send',
											},
											__jsx(index_esm.nbd, null),
											' Send'
										)
									),
									cards.map(function (card, index) {
										return __jsx(video_chip.C, {
											text: card.name,
											timestamp: card.timestamp,
											icon: card.icon,
											key: index,
											id: card.id,
										})
									})
								)
							),
							__jsx(
								'div',
								{
									className:
										'absolute w-full h-full flex flex-col text-white '.concat(
											controlsFocused
												? 'visible'
												: 'invisible'
										),
								},
								__jsx(
									'div',
									{
										className:
											'flex-none flex justify-end bg-gradient-to-b from-black/[0.5] p-4 pt-1 pb-6',
									},
									__jsx(
										'div',
										{ className: 'z-50' },
										__jsx(
											'button',
											{
												className: viewComments
													? 'p-4 bg-white text-black rounded-full shadow-lg'
													: 'p-4 text-white',
												onClick: function onClick() {
													return setViewComments(
														!viewComments
													)
												},
												'data-cy': 'comment-button',
											},
											__jsx(index_esm.OdJ, null)
										)
									)
								),
								__jsx('div', { className: 'grow' }),
								__jsx(
									'div',
									{
										className:
											'flex-none flex gap-4 items-center bg-gradient-to-t from-black/[0.5] p-2 pb-1 pt-6 z-50',
									},
									__jsx(
										'div',
										{
											className:
												'flex-none flex items-center',
										},
										__jsx(
											'button',
											{
												onClick:
													function handlePlayButtonClick() {
														videoPlayer.current &&
															(videoPlayer.current
																.paused ||
															videoPlayer.current
																.ended
																? videoPlayer.current.play()
																: videoPlayer.current.pause())
													},
												'data-cy': 'play-button',
											},
											__jsx(
												videoPlaying
													? index_esm.Wh
													: index_esm.gmG,
												null
											)
										)
									),
									__jsx(
										'div',
										{
											className:
												'relative grow h-2 flex items-center',
										},
										(function generateCommentTicks() {
											if (videoPlayer.current)
												return (
													cards.sort(function (
														cardA,
														cardB
													) {
														return cardA.timestamp >
															cardB.timestamp
															? 1
															: 0
													}),
													cards.map(function (
														card,
														index
													) {
														return __jsx(
															'div',
															{
																key: index,
																className:
																	'absolute h-4 w-4 z-50',
																onClick:
																	function onClick() {
																		!(function handleCommentTickButtonClick(
																			id
																		) {
																			setViewComments(
																				!0
																			),
																				(location.hash =
																					'#'.concat(
																						id
																					))
																		})(
																			card.id
																		)
																	},
																style: {
																	left:
																		lodash_default().clamp(
																			(card.timestamp /
																				videoPlayer
																					.current
																					.duration) *
																				100,
																			0,
																			100
																		) + '%',
																},
															},
															__jsx(
																video_comment_tick.N,
																{
																	icon: card.icon,
																	key: index,
																}
															)
														)
													})
												)
										})(),
										__jsx('input', {
											type: 'range',
											className:
												'w-full h-full z-10 appearance-none',
											style: { outline: 'none' },
											ref: progressBar,
											onChange:
												function handleProgressBarChange(
													event
												) {
													if (
														videoPlayer.current &&
														!isNaN(
															videoPlayer.current
																.duration
														)
													) {
														var position =
															(event.target
																.valueAsNumber /
																100) *
															videoPlayer.current
																.duration
														videoPlayer.current.currentTime =
															position
													}
												},
											min: 0,
											max: 100,
											defaultValue: 0,
											step: 'any',
										})
									),
									__jsx(
										'div',
										{
											className:
												'flex-none flex items-center gap-4',
										},
										__jsx(
											'div',
											null,
											__jsx(
												'button',
												{
													onClick:
														function handleCaptionsButtonClick() {
															captionsTrack.current &&
																(setCaptionsVisible(
																	!isCaptionsVisible
																),
																(captionsTrack.current.track.mode =
																	isCaptionsVisible
																		? 'disabled'
																		: 'showing'))
														},
													'data-cy': 'caption',
												},
												__jsx(
													isCaptionsVisible
														? index_esm.mpV
														: index_esm.LPX,
													null
												)
											)
										),
										__jsx(
											'div',
											{ className: 'group relative' },
											__jsx(
												'button',
												{
													className: 'rounded-full',
													onClick:
														function handleAudioMuteToggle() {
															videoPlayer.current &&
																((videoPlayer.current.muted =
																	!isAudioMuted),
																setAudioMuted(
																	!isAudioMuted
																))
														},
													'data-cy': 'volume',
												},
												__jsx(
													isAudioMuted
														? index_esm.xZH
														: index_esm.rxG,
													null
												)
											),
											__jsx('input', {
												className:
													'absolute bottom-0 hidden group-hover:flex -translate-y-6 w-4',
												style: {
													'-webkit-appearance':
														'slider-vertical',
													'writing-mode': 'bt-lr',
												},
												id: 'default-range',
												type: 'range',
												min: '0',
												max: '100',
												orient: 'vertical',
												value: isAudioMuted ? 0 : 80,
												step: '1',
											})
										),
										__jsx(
											'div',
											null,
											__jsx(
												'button',
												{
													onClick:
														function handleFullScreenButonClick() {
															if (
																document.fullscreenElement
															)
																document.exitFullscreen()
															else {
																if (
																	!player.current
																)
																	return
																player.current.requestFullscreen()
															}
															setFullScreen(
																!document.fullscreenElement
															)
														},
												},
												__jsx(
													isFullscreen
														? index_esm.Y7H
														: index_esm.a1O,
													null
												)
											)
										)
									)
								)
							)
						)
					}
				;(VideoPlayer.displayName = 'VideoPlayer'),
					(VideoPlayer.__docgenInfo = {
						description: '',
						methods: [],
						displayName: 'VideoPlayer',
						props: {
							autoplay: {
								defaultValue: { value: 'false', computed: !1 },
								required: !1,
							},
							defaultVolume: {
								defaultValue: { value: 'false', computed: !1 },
								required: !1,
							},
							cards: {
								defaultValue: { value: '[]', computed: !1 },
								required: !1,
							},
						},
					})
				try {
					;(VideoPlayer.displayName = 'VideoPlayer'),
						(VideoPlayer.__docgenInfo = {
							description: '',
							displayName: 'VideoPlayer',
							props: {
								source: {
									defaultValue: null,
									description: '',
									name: 'source',
									required: !0,
									type: { name: 'string' },
								},
								captions: {
									defaultValue: null,
									description: '',
									name: 'captions',
									required: !0,
									type: { name: 'string' },
								},
								type: {
									defaultValue: null,
									description: '',
									name: 'type',
									required: !0,
									type: {
										name: 'enum',
										value: [
											{ value: '"video/mp4"' },
											{ value: '"video/ogg"' },
											{ value: '"video/webm"' },
										],
									},
								},
								autoplay: {
									defaultValue: { value: 'false' },
									description: '',
									name: 'autoplay',
									required: !1,
									type: { name: 'boolean' },
								},
								defaultVolume: {
									defaultValue: { value: 'false' },
									description: '',
									name: 'defaultVolume',
									required: !1,
									type: { name: 'boolean' },
								},
								cards: {
									defaultValue: { value: '[]' },
									description: '',
									name: 'cards',
									required: !1,
									type: { name: 'VideoCard[]' },
								},
								volume: {
									defaultValue: null,
									description: '',
									name: 'volume',
									required: !0,
									type: { name: 'number' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/content_types/video/video_player/video_player.tsx#VideoPlayer'
							] = {
								docgenInfo: VideoPlayer.__docgenInfo,
								name: 'VideoPlayer',
								path: 'components/common/content_types/video/video_player/video_player.tsx#VideoPlayer',
							})
				} catch (__react_docgen_typescript_loader_error) {}
				var video_player_stories_jsx = react.createElement
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
				const video_player_stories = {
					title: 'Common/Content Types/Video',
					component: VideoPlayer,
					argTypes: {},
				}
				var Template = function Template(args) {
					return video_player_stories_jsx(VideoPlayer, args)
				}
				Template.displayName = 'Template'
				var Sample = Template.bind({})
				;(Sample.args = {
					source: '/friday.mp4',
					captions: '/friday.vtt',
					type: 'video/mp4',
					cards: [
						{
							id: 'r3hqj23qe12ejqh2e',
							timestamp: 2,
							name: 'How is life?',
							icon: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
						},
						{
							id: 'r3hqj23qe12ejqh2e2',
							timestamp: 5,
							name: 'How is life again?',
							icon: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
						},
						{
							id: 'r3hqj23qe12ejqh2e3',
							timestamp: 2.5,
							name: 'How is life?',
							icon: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
						},
						{
							id: 'r3hqj23qe12ejqh2e4',
							timestamp: 1.6,
							name: 'How is life again?',
							icon: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
						},
						{
							id: 'r3hqj23qe12ejqh2e5',
							timestamp: 2.7,
							name: 'How is life?',
							icon: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
						},
						{
							id: 'r3hqj23qe12ejqh2e6',
							timestamp: 5.05,
							name: 'How is life again?',
							icon: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
						},
					],
				}),
					(Sample.parameters = _objectSpread(
						_objectSpread({}, Sample.parameters),
						{},
						{
							docs: _objectSpread(
								_objectSpread(
									{},
									null ===
										(_Sample$parameters =
											Sample.parameters) ||
										void 0 === _Sample$parameters
										? void 0
										: _Sample$parameters.docs
								),
								{},
								{
									source: _objectSpread(
										{
											originalSource:
												'args => <VideoPlayer {...args} />',
										},
										null ===
											(_Sample$parameters2 =
												Sample.parameters) ||
											void 0 === _Sample$parameters2 ||
											null ===
												(_Sample$parameters2$d =
													_Sample$parameters2.docs) ||
											void 0 === _Sample$parameters2$d
											? void 0
											: _Sample$parameters2$d.source
									),
								}
							),
						}
					))
			},
		'./node_modules/moment/locale sync recursive ^\\.\\/.*$': (
			module,
			__unused_webpack_exports,
			__webpack_require__
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
