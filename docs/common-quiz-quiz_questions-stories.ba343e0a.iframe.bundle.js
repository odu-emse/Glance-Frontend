'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[9140],
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
		'./components/common/quiz/quiz_questions.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					default: () => quiz_questions_stories,
				})
			var _Default$parameters,
				_Default$parameters2,
				_Default$parameters2$,
				defineProperty = __webpack_require__(
					'./node_modules/@babel/runtime/helpers/esm/defineProperty.js',
				),
				react = __webpack_require__('./node_modules/react/index.js'),
				__jsx = react.createElement,
				QuizQuestion = function QuizQuestion(_ref) {
					var questionNumber = _ref.questionNumber,
						question = _ref.question,
						options = (_ref.questionType, _ref.options),
						updateAnswer = _ref.updateAnswer,
						_useState = (0, react.useState)(null),
						selectedOption = _useState[0],
						setSelectedOption = _useState[1],
						handleChange = function handleChange(e) {
							setSelectedOption(e.target.value)
							var selectedAnswer = options.find(
								function (option) {
									return option.text === e.target.value
								},
							)
							updateAnswer(questionNumber, selectedAnswer.id)
						}
					return __jsx(
						'div',
						null,
						__jsx(
							'h5',
							null,
							__jsx(
								'span',
								{ className: 'mr-3' },
								questionNumber,
								'.',
							),
							' ',
							question,
						),
						__jsx(
							'ul',
							{ className: 'my-0' },
							options.map(function (option, index) {
								return __jsx(
									'div',
									{
										key: index,
										className: 'flex items-center mx-10',
									},
									__jsx('input', {
										className:
											'relative float-left mt-0.5 mr-2 -ml-[1.5rem] h-3.5 w-3.5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary hover:cursor-pointer checked:focus:border-primary checked:focus:before:scale-100',
										type: 'radio',
										name: 'question'.concat(questionNumber),
										id: 'option'.concat(index),
										value: option.text,
										checked: selectedOption === option.text,
										onChange: handleChange,
									}),
									__jsx(
										'label',
										{
											className:
												'mt-px inline-block pl-[0.15rem] hover:cursor-pointer',
											htmlFor: 'option'.concat(index),
										},
										__jsx(
											'li',
											{ className: 'list-none' },
											option.text,
										),
									),
								)
							}),
						),
					)
				}
			;(QuizQuestion.displayName = 'QuizQuestion'),
				(QuizQuestion.__docgenInfo = {
					description: '',
					methods: [],
					displayName: 'QuizQuestion',
				})
			try {
				;(QuizQuestion.displayName = 'QuizQuestion'),
					(QuizQuestion.__docgenInfo = {
						description: '',
						displayName: 'QuizQuestion',
						props: {
							questionNumber: {
								defaultValue: null,
								description: '',
								name: 'questionNumber',
								required: !0,
								type: { name: 'any' },
							},
							question: {
								defaultValue: null,
								description: '',
								name: 'question',
								required: !0,
								type: { name: 'any' },
							},
							questionType: {
								defaultValue: null,
								description: '',
								name: 'questionType',
								required: !0,
								type: { name: 'any' },
							},
							options: {
								defaultValue: null,
								description: '',
								name: 'options',
								required: !0,
								type: { name: 'any' },
							},
							updateAnswer: {
								defaultValue: null,
								description: '',
								name: 'updateAnswer',
								required: !0,
								type: { name: 'any' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/common/quiz/quiz_questions.tsx#QuizQuestion'
						] = {
							docgenInfo: QuizQuestion.__docgenInfo,
							name: 'QuizQuestion',
							path: 'components/common/quiz/quiz_questions.tsx#QuizQuestion',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			var quiz_questions_stories_jsx = react.createElement
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
			const quiz_questions_stories = {
				title: 'Common/Quiz',
				component: QuizQuestion,
				argTypes: {},
			}
			var Template = function Template(args) {
				return quiz_questions_stories_jsx(QuizQuestion, args)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {
				question:
					'How do you know whether a system is in a dynamic or static state?',
				questionNumber: 1,
				options: ['Option1', 'Option2', 'Option3', 'Option4'],
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
											'(args: QuizQuestionProps) => <QuizQuestion {...args} />',
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
