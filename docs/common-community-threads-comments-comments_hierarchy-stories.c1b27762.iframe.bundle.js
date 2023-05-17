'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[3930],
	{
		'./components/common/community/threads/comments/comments_hierarchy.stories.tsx':
			(
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r(__webpack_exports__),
					__webpack_require__.d(__webpack_exports__, {
						Sample: () => Sample,
						default: () => comments_hierarchy_stories,
					})
				var defineProperty = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/defineProperty.js'
					),
					esm_extends = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/extends.js'
					),
					taggedTemplateLiteral = __webpack_require__(
						'./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
					),
					react = __webpack_require__(
						'./node_modules/react/index.js'
					),
					thread = __webpack_require__(
						'./components/common/community/threads/thread/thread.tsx'
					),
					__jsx = react.createElement
				function _createForOfIteratorHelper(o, allowArrayLike) {
					var it =
						('undefined' != typeof Symbol && o[Symbol.iterator]) ||
						o['@@iterator']
					if (!it) {
						if (
							Array.isArray(o) ||
							(it = (function _unsupportedIterableToArray(
								o,
								minLen
							) {
								if (!o) return
								if ('string' == typeof o)
									return _arrayLikeToArray(o, minLen)
								var n = Object.prototype.toString
									.call(o)
									.slice(8, -1)
								'Object' === n &&
									o.constructor &&
									(n = o.constructor.name)
								if ('Map' === n || 'Set' === n)
									return Array.from(o)
								if (
									'Arguments' === n ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
										n
									)
								)
									return _arrayLikeToArray(o, minLen)
							})(o)) ||
							(allowArrayLike && o && 'number' == typeof o.length)
						) {
							it && (o = it)
							var i = 0,
								F = function F() {}
							return {
								s: F,
								n: function n() {
									return i >= o.length
										? { done: !0 }
										: { done: !1, value: o[i++] }
								},
								e: function e(_e) {
									throw _e
								},
								f: F,
							}
						}
						throw new TypeError(
							'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					}
					var err,
						normalCompletion = !0,
						didErr = !1
					return {
						s: function s() {
							it = it.call(o)
						},
						n: function n() {
							var step = it.next()
							return (normalCompletion = step.done), step
						},
						e: function e(_e2) {
							;(didErr = !0), (err = _e2)
						},
						f: function f() {
							try {
								normalCompletion ||
									null == it.return ||
									it.return()
							} finally {
								if (didErr) throw err
							}
						},
					}
				}
				function _arrayLikeToArray(arr, len) {
					;(null == len || len > arr.length) && (len = arr.length)
					for (var i = 0, arr2 = new Array(len); i < len; i++)
						arr2[i] = arr[i]
					return arr2
				}
				var commentGen = function commentGen(parentComment) {
						if (void 0 === parentComment.comments) return []
						var _step,
							threads = [],
							_iterator = _createForOfIteratorHelper(
								parentComment.comments
							)
						try {
							for (
								_iterator.s();
								!(_step = _iterator.n()).done;

							) {
								var comment = _step.value,
									subThreads = commentGen(comment)
								threads.push(
									__jsx(
										'div',
										{ className: 'mt-8', key: comment.id },
										__jsx(
											thread.j,
											{
												body: comment.body,
												id: comment.id,
												userProfile: comment.author,
												upvotesProp: comment.upvotes,
												viewCutOff: !1,
												showAuthor: !0,
											},
											subThreads
										)
									)
								)
							}
						} catch (err) {
							_iterator.e(err)
						} finally {
							_iterator.f()
						}
						return threads
					},
					CommentsHierarchy = function CommentsHierarchy(_ref) {
						var thread = _ref.thread,
							threads = commentGen(thread)
						return __jsx('div', null, threads)
					}
				;(CommentsHierarchy.displayName = 'CommentsHierarchy'),
					(CommentsHierarchy.__docgenInfo = {
						description:
							'This component renders a comments hierarchy based on a parent comment tree.\n\n@param {Object} props - The component props.\n@param {Object} props.thread - The parent comment tree.\n@returns {JSX.Element} The rendered comments hierarchy.',
						methods: [],
						displayName: 'CommentsHierarchy',
					})
				try {
					;(CommentsHierarchy.displayName = 'CommentsHierarchy'),
						(CommentsHierarchy.__docgenInfo = {
							description:
								'This component renders a comments hierarchy based on a parent comment tree.',
							displayName: 'CommentsHierarchy',
							props: {
								thread: {
									defaultValue: null,
									description: '',
									name: 'thread',
									required: !0,
									type: { name: 'ThreadType' },
								},
							},
						}),
						'undefined' != typeof STORYBOOK_REACT_CLASSES &&
							(STORYBOOK_REACT_CLASSES[
								'components/common/community/threads/comments/comments_hierarchy.tsx#CommentsHierarchy'
							] = {
								docgenInfo: CommentsHierarchy.__docgenInfo,
								name: 'CommentsHierarchy',
								path: 'components/common/community/threads/comments/comments_hierarchy.tsx#CommentsHierarchy',
							})
				} catch (__react_docgen_typescript_loader_error) {}
				var _templateObject,
					_Sample$parameters,
					_Sample$parameters2,
					_Sample$parameters2$d,
					dist = __webpack_require__(
						'./node_modules/swr/dist/index.mjs'
					),
					gql_fetcher = __webpack_require__('./utils/gql_fetcher.ts'),
					esm = __webpack_require__(
						'./node_modules/graphql-request/build/esm/index.js'
					),
					comments_hierarchy_stories_jsx = react.createElement
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
				const comments_hierarchy_stories = {
					title: 'Common/Community/Thread/Comments Hierarchy',
					component: CommentsHierarchy,
				}
				var Template = function Template(args) {
					var _useSWR = (0, dist.ZP)(
							{
								query: (0, esm.Ps)(
									_templateObject ||
										(_templateObject = (0,
										taggedTemplateLiteral.Z)([
											'\n                {\n                    thread(input: { id: "63e3f79631115da3472a72dc" }) {\n                        id\n                        title\n                        body\n                        author {\n                            id\n                        }\n                        comments {\n                            id\n                            body\n                            comments {\n                                id\n                                body\n                                comments {\n                                    id\n                                    body\n                                }\n                            }\n                        }\n                    }\n                }\n            ',
										]))
								),
							},
							gql_fetcher.Z
						),
						data = _useSWR.data,
						error = _useSWR.error
					return data
						? error
							? comments_hierarchy_stories_jsx(
									'p',
									null,
									'Failed to load content...'
							  )
							: (console.log(data),
							  comments_hierarchy_stories_jsx(
									CommentsHierarchy,
									(0, esm_extends.Z)({}, args, {
										thread: data.thread[0],
									})
							  ))
						: comments_hierarchy_stories_jsx(
								'p',
								null,
								'Loading...'
						  )
				}
				Template.displayName = 'Template'
				var Sample = Template.bind({})
				;(Sample.storyName = 'Default'),
					(Sample.args = {}),
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
												'(args: CommentsHierarchyProps) => {\n  const {\n    data,\n    error\n  } = useSWR({\n    query: gql`\n                {\n                    thread(input: { id: "63e3f79631115da3472a72dc" }) {\n                        id\n                        title\n                        body\n                        author {\n                            id\n                        }\n                        comments {\n                            id\n                            body\n                            comments {\n                                id\n                                body\n                                comments {\n                                    id\n                                    body\n                                }\n                            }\n                        }\n                    }\n                }\n            `\n  }, gqlFetcher);\n  if (!data) return <p>Loading...</p>;\n  if (error) return <p>Failed to load content...</p>;\n  console.log(data);\n  return <CommentsHierarchy {...args} thread={data.thread[0]} />;\n}',
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
	},
])
