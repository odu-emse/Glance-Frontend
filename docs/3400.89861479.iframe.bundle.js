'use strict'
;(self.webpackChunkglance = self.webpackChunkglance || []).push([
	[3400],
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
		'./node_modules/@dnd-kit/core/dist/core.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				LB: () => DndContext,
				y9: () => DragOverlay,
				g4: () => KeyboardCode,
				Lg: () => KeyboardSensor,
				we: () => PointerSensor,
				pE: () => closestCenter,
				ey: () => closestCorners,
				VK: () => getClientRect,
				_8: () => getFirstCollision,
				hI: () => getScrollableAncestors,
				Cj: () => useDndContext,
				O1: () => useDraggable,
				Zj: () => useDroppable,
				VT: () => useSensor,
				Dy: () => useSensors,
			})
			var react = __webpack_require__('./node_modules/react/index.js'),
				react_dom = __webpack_require__(
					'./node_modules/react-dom/index.js',
				),
				utilities_esm = __webpack_require__(
					'./node_modules/@dnd-kit/utilities/dist/utilities.esm.js',
				)
			const hiddenStyles = { display: 'none' }
			function HiddenText(_ref) {
				let { id, value } = _ref
				return react.createElement(
					'div',
					{ id, style: hiddenStyles },
					value,
				)
			}
			const visuallyHidden = {
				position: 'fixed',
				width: 1,
				height: 1,
				margin: -1,
				border: 0,
				padding: 0,
				overflow: 'hidden',
				clip: 'rect(0 0 0 0)',
				clipPath: 'inset(100%)',
				whiteSpace: 'nowrap',
			}
			function LiveRegion(_ref) {
				let { id, announcement } = _ref
				return react.createElement(
					'div',
					{
						id,
						style: visuallyHidden,
						role: 'status',
						'aria-live': 'assertive',
						'aria-atomic': !0,
					},
					announcement,
				)
			}
			const DndMonitorContext = (0, react.createContext)(null)
			const defaultScreenReaderInstructions = {
					draggable:
						'\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  ',
				},
				defaultAnnouncements = {
					onDragStart(_ref) {
						let { active } = _ref
						return 'Picked up draggable item ' + active.id + '.'
					},
					onDragOver(_ref2) {
						let { active, over } = _ref2
						return over
							? 'Draggable item ' +
									active.id +
									' was moved over droppable area ' +
									over.id +
									'.'
							: 'Draggable item ' +
									active.id +
									' is no longer over a droppable area.'
					},
					onDragEnd(_ref3) {
						let { active, over } = _ref3
						return over
							? 'Draggable item ' +
									active.id +
									' was dropped over droppable area ' +
									over.id
							: 'Draggable item ' + active.id + ' was dropped.'
					},
					onDragCancel(_ref4) {
						let { active } = _ref4
						return (
							'Dragging was cancelled. Draggable item ' +
							active.id +
							' was dropped.'
						)
					},
				}
			function Accessibility(_ref) {
				let {
					announcements = defaultAnnouncements,
					container,
					hiddenTextDescribedById,
					screenReaderInstructions = defaultScreenReaderInstructions,
				} = _ref
				const { announce, announcement } = (function useAnnouncement() {
						const [announcement, setAnnouncement] = (0,
						react.useState)('')
						return {
							announce: (0, react.useCallback)((value) => {
								null != value && setAnnouncement(value)
							}, []),
							announcement,
						}
					})(),
					liveRegionId = (0, utilities_esm.Ld)('DndLiveRegion'),
					[mounted, setMounted] = (0, react.useState)(!1)
				if (
					((0, react.useEffect)(() => {
						setMounted(!0)
					}, []),
					(function useDndMonitor(listener) {
						const registerListener = (0, react.useContext)(
							DndMonitorContext,
						)
						;(0, react.useEffect)(() => {
							if (!registerListener)
								throw new Error(
									'useDndMonitor must be used within a children of <DndContext>',
								)
							return registerListener(listener)
						}, [listener, registerListener])
					})(
						(0, react.useMemo)(
							() => ({
								onDragStart(_ref2) {
									let { active } = _ref2
									announce(
										announcements.onDragStart({ active }),
									)
								},
								onDragMove(_ref3) {
									let { active, over } = _ref3
									announcements.onDragMove &&
										announce(
											announcements.onDragMove({
												active,
												over,
											}),
										)
								},
								onDragOver(_ref4) {
									let { active, over } = _ref4
									announce(
										announcements.onDragOver({
											active,
											over,
										}),
									)
								},
								onDragEnd(_ref5) {
									let { active, over } = _ref5
									announce(
										announcements.onDragEnd({
											active,
											over,
										}),
									)
								},
								onDragCancel(_ref6) {
									let { active, over } = _ref6
									announce(
										announcements.onDragCancel({
											active,
											over,
										}),
									)
								},
							}),
							[announce, announcements],
						),
					),
					!mounted)
				)
					return null
				const markup = react.createElement(
					react.Fragment,
					null,
					react.createElement(HiddenText, {
						id: hiddenTextDescribedById,
						value: screenReaderInstructions.draggable,
					}),
					react.createElement(LiveRegion, {
						id: liveRegionId,
						announcement,
					}),
				)
				return container
					? (0, react_dom.createPortal)(markup, container)
					: markup
			}
			var Action
			function noop() {}
			function useSensor(sensor, options) {
				return (0, react.useMemo)(
					() => ({ sensor, options: null != options ? options : {} }),
					[sensor, options],
				)
			}
			function useSensors() {
				for (
					var _len = arguments.length,
						sensors = new Array(_len),
						_key = 0;
					_key < _len;
					_key++
				)
					sensors[_key] = arguments[_key]
				return (0, react.useMemo)(
					() => [...sensors].filter((sensor) => null != sensor),
					[...sensors],
				)
			}
			!(function (Action) {
				;(Action.DragStart = 'dragStart'),
					(Action.DragMove = 'dragMove'),
					(Action.DragEnd = 'dragEnd'),
					(Action.DragCancel = 'dragCancel'),
					(Action.DragOver = 'dragOver'),
					(Action.RegisterDroppable = 'registerDroppable'),
					(Action.SetDroppableDisabled = 'setDroppableDisabled'),
					(Action.UnregisterDroppable = 'unregisterDroppable')
			})(Action || (Action = {}))
			const defaultCoordinates = Object.freeze({ x: 0, y: 0 })
			function distanceBetween(p1, p2) {
				return Math.sqrt(
					Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
				)
			}
			function getRelativeTransformOrigin(event, rect) {
				const eventCoordinates = (0, utilities_esm.DC)(event)
				if (!eventCoordinates) return '0 0'
				return (
					((eventCoordinates.x - rect.left) / rect.width) * 100 +
					'% ' +
					((eventCoordinates.y - rect.top) / rect.height) * 100 +
					'%'
				)
			}
			function sortCollisionsAsc(_ref, _ref2) {
				let {
						data: { value: a },
					} = _ref,
					{
						data: { value: b },
					} = _ref2
				return a - b
			}
			function sortCollisionsDesc(_ref3, _ref4) {
				let {
						data: { value: a },
					} = _ref3,
					{
						data: { value: b },
					} = _ref4
				return b - a
			}
			function cornersOfRectangle(_ref5) {
				let { left, top, height, width } = _ref5
				return [
					{ x: left, y: top },
					{ x: left + width, y: top },
					{ x: left, y: top + height },
					{ x: left + width, y: top + height },
				]
			}
			function getFirstCollision(collisions, property) {
				if (!collisions || 0 === collisions.length) return null
				const [firstCollision] = collisions
				return property ? firstCollision[property] : firstCollision
			}
			function centerOfRectangle(rect, left, top) {
				return (
					void 0 === left && (left = rect.left),
					void 0 === top && (top = rect.top),
					{ x: left + 0.5 * rect.width, y: top + 0.5 * rect.height }
				)
			}
			const closestCenter = (_ref) => {
					let { collisionRect, droppableRects, droppableContainers } =
						_ref
					const centerRect = centerOfRectangle(
							collisionRect,
							collisionRect.left,
							collisionRect.top,
						),
						collisions = []
					for (const droppableContainer of droppableContainers) {
						const { id } = droppableContainer,
							rect = droppableRects.get(id)
						if (rect) {
							const distBetween = distanceBetween(
								centerOfRectangle(rect),
								centerRect,
							)
							collisions.push({
								id,
								data: {
									droppableContainer,
									value: distBetween,
								},
							})
						}
					}
					return collisions.sort(sortCollisionsAsc)
				},
				closestCorners = (_ref) => {
					let { collisionRect, droppableRects, droppableContainers } =
						_ref
					const corners = cornersOfRectangle(collisionRect),
						collisions = []
					for (const droppableContainer of droppableContainers) {
						const { id } = droppableContainer,
							rect = droppableRects.get(id)
						if (rect) {
							const rectCorners = cornersOfRectangle(rect),
								distances = corners.reduce(
									(accumulator, corner, index) =>
										accumulator +
										distanceBetween(
											rectCorners[index],
											corner,
										),
									0,
								),
								effectiveDistance = Number(
									(distances / 4).toFixed(4),
								)
							collisions.push({
								id,
								data: {
									droppableContainer,
									value: effectiveDistance,
								},
							})
						}
					}
					return collisions.sort(sortCollisionsAsc)
				}
			function getIntersectionRatio(entry, target) {
				const top = Math.max(target.top, entry.top),
					left = Math.max(target.left, entry.left),
					right = Math.min(
						target.left + target.width,
						entry.left + entry.width,
					),
					bottom = Math.min(
						target.top + target.height,
						entry.top + entry.height,
					),
					width = right - left,
					height = bottom - top
				if (left < right && top < bottom) {
					const targetArea = target.width * target.height,
						entryArea = entry.width * entry.height,
						intersectionArea = width * height
					return Number(
						(
							intersectionArea /
							(targetArea + entryArea - intersectionArea)
						).toFixed(4),
					)
				}
				return 0
			}
			const rectIntersection = (_ref) => {
				let { collisionRect, droppableRects, droppableContainers } =
					_ref
				const collisions = []
				for (const droppableContainer of droppableContainers) {
					const { id } = droppableContainer,
						rect = droppableRects.get(id)
					if (rect) {
						const intersectionRatio = getIntersectionRatio(
							rect,
							collisionRect,
						)
						intersectionRatio > 0 &&
							collisions.push({
								id,
								data: {
									droppableContainer,
									value: intersectionRatio,
								},
							})
					}
				}
				return collisions.sort(sortCollisionsDesc)
			}
			function getRectDelta(rect1, rect2) {
				return rect1 && rect2
					? { x: rect1.left - rect2.left, y: rect1.top - rect2.top }
					: defaultCoordinates
			}
			function createRectAdjustmentFn(modifier) {
				return function adjustClientRect(rect) {
					for (
						var _len = arguments.length,
							adjustments = new Array(_len > 1 ? _len - 1 : 0),
							_key = 1;
						_key < _len;
						_key++
					)
						adjustments[_key - 1] = arguments[_key]
					return adjustments.reduce(
						(acc, adjustment) => ({
							...acc,
							top: acc.top + modifier * adjustment.y,
							bottom: acc.bottom + modifier * adjustment.y,
							left: acc.left + modifier * adjustment.x,
							right: acc.right + modifier * adjustment.x,
						}),
						{ ...rect },
					)
				}
			}
			const getAdjustedRect = createRectAdjustmentFn(1)
			function parseTransform(transform) {
				if (transform.startsWith('matrix3d(')) {
					const transformArray = transform.slice(9, -1).split(/, /)
					return {
						x: +transformArray[12],
						y: +transformArray[13],
						scaleX: +transformArray[0],
						scaleY: +transformArray[5],
					}
				}
				if (transform.startsWith('matrix(')) {
					const transformArray = transform.slice(7, -1).split(/, /)
					return {
						x: +transformArray[4],
						y: +transformArray[5],
						scaleX: +transformArray[0],
						scaleY: +transformArray[3],
					}
				}
				return null
			}
			const defaultOptions = { ignoreTransform: !1 }
			function getClientRect(element, options) {
				void 0 === options && (options = defaultOptions)
				let rect = element.getBoundingClientRect()
				if (options.ignoreTransform) {
					const { transform, transformOrigin } = (0,
					utilities_esm.Jj)(element).getComputedStyle(element)
					transform &&
						(rect = (function inverseTransform(
							rect,
							transform,
							transformOrigin,
						) {
							const parsedTransform = parseTransform(transform)
							if (!parsedTransform) return rect
							const {
									scaleX,
									scaleY,
									x: translateX,
									y: translateY,
								} = parsedTransform,
								x =
									rect.left -
									translateX -
									(1 - scaleX) * parseFloat(transformOrigin),
								y =
									rect.top -
									translateY -
									(1 - scaleY) *
										parseFloat(
											transformOrigin.slice(
												transformOrigin.indexOf(' ') +
													1,
											),
										),
								w = scaleX ? rect.width / scaleX : rect.width,
								h = scaleY ? rect.height / scaleY : rect.height
							return {
								width: w,
								height: h,
								top: y,
								right: x + w,
								bottom: y + h,
								left: x,
							}
						})(rect, transform, transformOrigin))
				}
				const { top, left, width, height, bottom, right } = rect
				return { top, left, width, height, bottom, right }
			}
			function getTransformAgnosticClientRect(element) {
				return getClientRect(element, { ignoreTransform: !0 })
			}
			function getScrollableAncestors(element, limit) {
				const scrollParents = []
				return element
					? (function findScrollableAncestors(node) {
							if (null != limit && scrollParents.length >= limit)
								return scrollParents
							if (!node) return scrollParents
							if (
								(0, utilities_esm.qk)(node) &&
								null != node.scrollingElement &&
								!scrollParents.includes(node.scrollingElement)
							)
								return (
									scrollParents.push(node.scrollingElement),
									scrollParents
								)
							if (
								!(0, utilities_esm.Re)(node) ||
								(0, utilities_esm.vZ)(node)
							)
								return scrollParents
							if (scrollParents.includes(node))
								return scrollParents
							const computedStyle = (0, utilities_esm.Jj)(
								element,
							).getComputedStyle(node)
							return (
								node !== element &&
									(function isScrollable(
										element,
										computedStyle,
									) {
										void 0 === computedStyle &&
											(computedStyle = (0,
											utilities_esm.Jj)(
												element,
											).getComputedStyle(element))
										const overflowRegex =
											/(auto|scroll|overlay)/
										return [
											'overflow',
											'overflowX',
											'overflowY',
										].some((property) => {
											const value =
												computedStyle[property]
											return (
												'string' == typeof value &&
												overflowRegex.test(value)
											)
										})
									})(node, computedStyle) &&
									scrollParents.push(node),
								(function isFixed(node, computedStyle) {
									return (
										void 0 === computedStyle &&
											(computedStyle = (0,
											utilities_esm.Jj)(
												node,
											).getComputedStyle(node)),
										'fixed' === computedStyle.position
									)
								})(node, computedStyle)
									? scrollParents
									: findScrollableAncestors(node.parentNode)
							)
					  })(element)
					: scrollParents
			}
			function getFirstScrollableAncestor(node) {
				const [firstScrollableAncestor] = getScrollableAncestors(
					node,
					1,
				)
				return null != firstScrollableAncestor
					? firstScrollableAncestor
					: null
			}
			function getScrollableElement(element) {
				return utilities_esm.Nq && element
					? (0, utilities_esm.FJ)(element)
						? element
						: (0, utilities_esm.UG)(element)
						? (0, utilities_esm.qk)(element) ||
						  element ===
								(0, utilities_esm.r3)(element).scrollingElement
							? window
							: (0, utilities_esm.Re)(element)
							? element
							: null
						: null
					: null
			}
			function getScrollXCoordinate(element) {
				return (0, utilities_esm.FJ)(element)
					? element.scrollX
					: element.scrollLeft
			}
			function getScrollYCoordinate(element) {
				return (0, utilities_esm.FJ)(element)
					? element.scrollY
					: element.scrollTop
			}
			function getScrollCoordinates(element) {
				return {
					x: getScrollXCoordinate(element),
					y: getScrollYCoordinate(element),
				}
			}
			var Direction
			function isDocumentScrollingElement(element) {
				return (
					!(!utilities_esm.Nq || !element) &&
					element === document.scrollingElement
				)
			}
			function getScrollPosition(scrollingContainer) {
				const minScroll = { x: 0, y: 0 },
					dimensions = isDocumentScrollingElement(scrollingContainer)
						? {
								height: window.innerHeight,
								width: window.innerWidth,
						  }
						: {
								height: scrollingContainer.clientHeight,
								width: scrollingContainer.clientWidth,
						  },
					maxScroll = {
						x: scrollingContainer.scrollWidth - dimensions.width,
						y: scrollingContainer.scrollHeight - dimensions.height,
					}
				return {
					isTop: scrollingContainer.scrollTop <= minScroll.y,
					isLeft: scrollingContainer.scrollLeft <= minScroll.x,
					isBottom: scrollingContainer.scrollTop >= maxScroll.y,
					isRight: scrollingContainer.scrollLeft >= maxScroll.x,
					maxScroll,
					minScroll,
				}
			}
			!(function (Direction) {
				;(Direction[(Direction.Forward = 1)] = 'Forward'),
					(Direction[(Direction.Backward = -1)] = 'Backward')
			})(Direction || (Direction = {}))
			const defaultThreshold = { x: 0.2, y: 0.2 }
			function getScrollDirectionAndSpeed(
				scrollContainer,
				scrollContainerRect,
				_ref,
				acceleration,
				thresholdPercentage,
			) {
				let { top, left, right, bottom } = _ref
				void 0 === acceleration && (acceleration = 10),
					void 0 === thresholdPercentage &&
						(thresholdPercentage = defaultThreshold)
				const { isTop, isBottom, isLeft, isRight } =
						getScrollPosition(scrollContainer),
					direction = { x: 0, y: 0 },
					speed = { x: 0, y: 0 },
					threshold_height =
						scrollContainerRect.height * thresholdPercentage.y,
					threshold_width =
						scrollContainerRect.width * thresholdPercentage.x
				return (
					!isTop && top <= scrollContainerRect.top + threshold_height
						? ((direction.y = Direction.Backward),
						  (speed.y =
								acceleration *
								Math.abs(
									(scrollContainerRect.top +
										threshold_height -
										top) /
										threshold_height,
								)))
						: !isBottom &&
						  bottom >=
								scrollContainerRect.bottom - threshold_height &&
						  ((direction.y = Direction.Forward),
						  (speed.y =
								acceleration *
								Math.abs(
									(scrollContainerRect.bottom -
										threshold_height -
										bottom) /
										threshold_height,
								))),
					!isRight &&
					right >= scrollContainerRect.right - threshold_width
						? ((direction.x = Direction.Forward),
						  (speed.x =
								acceleration *
								Math.abs(
									(scrollContainerRect.right -
										threshold_width -
										right) /
										threshold_width,
								)))
						: !isLeft &&
						  left <= scrollContainerRect.left + threshold_width &&
						  ((direction.x = Direction.Backward),
						  (speed.x =
								acceleration *
								Math.abs(
									(scrollContainerRect.left +
										threshold_width -
										left) /
										threshold_width,
								))),
					{ direction, speed }
				)
			}
			function getScrollElementRect(element) {
				if (element === document.scrollingElement) {
					const { innerWidth, innerHeight } = window
					return {
						top: 0,
						left: 0,
						right: innerWidth,
						bottom: innerHeight,
						width: innerWidth,
						height: innerHeight,
					}
				}
				const { top, left, right, bottom } =
					element.getBoundingClientRect()
				return {
					top,
					left,
					right,
					bottom,
					width: element.clientWidth,
					height: element.clientHeight,
				}
			}
			function getScrollOffsets(scrollableAncestors) {
				return scrollableAncestors.reduce(
					(acc, node) =>
						(0, utilities_esm.IH)(acc, getScrollCoordinates(node)),
					defaultCoordinates,
				)
			}
			function scrollIntoViewIfNeeded(element, measure) {
				if ((void 0 === measure && (measure = getClientRect), !element))
					return
				const { top, left, bottom, right } = measure(element)
				getFirstScrollableAncestor(element) &&
					(bottom <= 0 ||
						right <= 0 ||
						top >= window.innerHeight ||
						left >= window.innerWidth) &&
					element.scrollIntoView({
						block: 'center',
						inline: 'center',
					})
			}
			const properties = [
				[
					'x',
					['left', 'right'],
					function getScrollXOffset(scrollableAncestors) {
						return scrollableAncestors.reduce(
							(acc, node) => acc + getScrollXCoordinate(node),
							0,
						)
					},
				],
				[
					'y',
					['top', 'bottom'],
					function getScrollYOffset(scrollableAncestors) {
						return scrollableAncestors.reduce(
							(acc, node) => acc + getScrollYCoordinate(node),
							0,
						)
					},
				],
			]
			class Rect {
				constructor(rect, element) {
					;(this.rect = void 0),
						(this.width = void 0),
						(this.height = void 0),
						(this.top = void 0),
						(this.bottom = void 0),
						(this.right = void 0),
						(this.left = void 0)
					const scrollableAncestors = getScrollableAncestors(element),
						scrollOffsets = getScrollOffsets(scrollableAncestors)
					;(this.rect = { ...rect }),
						(this.width = rect.width),
						(this.height = rect.height)
					for (const [axis, keys, getScrollOffset] of properties)
						for (const key of keys)
							Object.defineProperty(this, key, {
								get: () => {
									const currentOffsets =
											getScrollOffset(
												scrollableAncestors,
											),
										scrollOffsetsDeltla =
											scrollOffsets[axis] - currentOffsets
									return this.rect[key] + scrollOffsetsDeltla
								},
								enumerable: !0,
							})
					Object.defineProperty(this, 'rect', { enumerable: !1 })
				}
			}
			class Listeners {
				constructor(target) {
					;(this.target = void 0),
						(this.listeners = []),
						(this.removeAll = () => {
							this.listeners.forEach((listener) => {
								var _this$target
								return null == (_this$target = this.target)
									? void 0
									: _this$target.removeEventListener(
											...listener,
									  )
							})
						}),
						(this.target = target)
				}
				add(eventName, handler, options) {
					var _this$target2
					null == (_this$target2 = this.target) ||
						_this$target2.addEventListener(
							eventName,
							handler,
							options,
						),
						this.listeners.push([eventName, handler, options])
				}
			}
			function hasExceededDistance(delta, measurement) {
				const dx = Math.abs(delta.x),
					dy = Math.abs(delta.y)
				return 'number' == typeof measurement
					? Math.sqrt(dx ** 2 + dy ** 2) > measurement
					: 'x' in measurement && 'y' in measurement
					? dx > measurement.x && dy > measurement.y
					: 'x' in measurement
					? dx > measurement.x
					: 'y' in measurement && dy > measurement.y
			}
			var EventName, KeyboardCode
			function preventDefault(event) {
				event.preventDefault()
			}
			function stopPropagation(event) {
				event.stopPropagation()
			}
			!(function (EventName) {
				;(EventName.Click = 'click'),
					(EventName.DragStart = 'dragstart'),
					(EventName.Keydown = 'keydown'),
					(EventName.ContextMenu = 'contextmenu'),
					(EventName.Resize = 'resize'),
					(EventName.SelectionChange = 'selectionchange'),
					(EventName.VisibilityChange = 'visibilitychange')
			})(EventName || (EventName = {})),
				(function (KeyboardCode) {
					;(KeyboardCode.Space = 'Space'),
						(KeyboardCode.Down = 'ArrowDown'),
						(KeyboardCode.Right = 'ArrowRight'),
						(KeyboardCode.Left = 'ArrowLeft'),
						(KeyboardCode.Up = 'ArrowUp'),
						(KeyboardCode.Esc = 'Escape'),
						(KeyboardCode.Enter = 'Enter')
				})(KeyboardCode || (KeyboardCode = {}))
			const defaultKeyboardCodes = {
					start: [KeyboardCode.Space, KeyboardCode.Enter],
					cancel: [KeyboardCode.Esc],
					end: [KeyboardCode.Space, KeyboardCode.Enter],
				},
				defaultKeyboardCoordinateGetter = (event, _ref) => {
					let { currentCoordinates } = _ref
					switch (event.code) {
						case KeyboardCode.Right:
							return {
								...currentCoordinates,
								x: currentCoordinates.x + 25,
							}
						case KeyboardCode.Left:
							return {
								...currentCoordinates,
								x: currentCoordinates.x - 25,
							}
						case KeyboardCode.Down:
							return {
								...currentCoordinates,
								y: currentCoordinates.y + 25,
							}
						case KeyboardCode.Up:
							return {
								...currentCoordinates,
								y: currentCoordinates.y - 25,
							}
					}
				}
			class KeyboardSensor {
				constructor(props) {
					;(this.props = void 0),
						(this.autoScrollEnabled = !1),
						(this.referenceCoordinates = void 0),
						(this.listeners = void 0),
						(this.windowListeners = void 0),
						(this.props = props)
					const {
						event: { target },
					} = props
					;(this.props = props),
						(this.listeners = new Listeners(
							(0, utilities_esm.r3)(target),
						)),
						(this.windowListeners = new Listeners(
							(0, utilities_esm.Jj)(target),
						)),
						(this.handleKeyDown = this.handleKeyDown.bind(this)),
						(this.handleCancel = this.handleCancel.bind(this)),
						this.attach()
				}
				attach() {
					this.handleStart(),
						this.windowListeners.add(
							EventName.Resize,
							this.handleCancel,
						),
						this.windowListeners.add(
							EventName.VisibilityChange,
							this.handleCancel,
						),
						setTimeout(() =>
							this.listeners.add(
								EventName.Keydown,
								this.handleKeyDown,
							),
						)
				}
				handleStart() {
					const { activeNode, onStart } = this.props,
						node = activeNode.node.current
					node && scrollIntoViewIfNeeded(node),
						onStart(defaultCoordinates)
				}
				handleKeyDown(event) {
					if ((0, utilities_esm.vd)(event)) {
						const { active, context, options } = this.props,
							{
								keyboardCodes = defaultKeyboardCodes,
								coordinateGetter = defaultKeyboardCoordinateGetter,
								scrollBehavior = 'smooth',
							} = options,
							{ code } = event
						if (keyboardCodes.end.includes(code))
							return void this.handleEnd(event)
						if (keyboardCodes.cancel.includes(code))
							return void this.handleCancel(event)
						const { collisionRect } = context.current,
							currentCoordinates = collisionRect
								? {
										x: collisionRect.left,
										y: collisionRect.top,
								  }
								: defaultCoordinates
						this.referenceCoordinates ||
							(this.referenceCoordinates = currentCoordinates)
						const newCoordinates = coordinateGetter(event, {
							active,
							context: context.current,
							currentCoordinates,
						})
						if (newCoordinates) {
							const coordinatesDelta = (0, utilities_esm.$X)(
									newCoordinates,
									currentCoordinates,
								),
								scrollDelta = { x: 0, y: 0 },
								{ scrollableAncestors } = context.current
							for (const scrollContainer of scrollableAncestors) {
								const direction = event.code,
									{
										isTop,
										isRight,
										isLeft,
										isBottom,
										maxScroll,
										minScroll,
									} = getScrollPosition(scrollContainer),
									scrollElementRect =
										getScrollElementRect(scrollContainer),
									clampedCoordinates = {
										x: Math.min(
											direction === KeyboardCode.Right
												? scrollElementRect.right -
														scrollElementRect.width /
															2
												: scrollElementRect.right,
											Math.max(
												direction === KeyboardCode.Right
													? scrollElementRect.left
													: scrollElementRect.left +
															scrollElementRect.width /
																2,
												newCoordinates.x,
											),
										),
										y: Math.min(
											direction === KeyboardCode.Down
												? scrollElementRect.bottom -
														scrollElementRect.height /
															2
												: scrollElementRect.bottom,
											Math.max(
												direction === KeyboardCode.Down
													? scrollElementRect.top
													: scrollElementRect.top +
															scrollElementRect.height /
																2,
												newCoordinates.y,
											),
										),
									},
									canScrollX =
										(direction === KeyboardCode.Right &&
											!isRight) ||
										(direction === KeyboardCode.Left &&
											!isLeft),
									canScrollY =
										(direction === KeyboardCode.Down &&
											!isBottom) ||
										(direction === KeyboardCode.Up &&
											!isTop)
								if (
									canScrollX &&
									clampedCoordinates.x !== newCoordinates.x
								) {
									const newScrollCoordinates =
											scrollContainer.scrollLeft +
											coordinatesDelta.x,
										canScrollToNewCoordinates =
											(direction === KeyboardCode.Right &&
												newScrollCoordinates <=
													maxScroll.x) ||
											(direction === KeyboardCode.Left &&
												newScrollCoordinates >=
													minScroll.x)
									if (
										canScrollToNewCoordinates &&
										!coordinatesDelta.y
									)
										return void scrollContainer.scrollTo({
											left: newScrollCoordinates,
											behavior: scrollBehavior,
										})
									;(scrollDelta.x = canScrollToNewCoordinates
										? scrollContainer.scrollLeft -
										  newScrollCoordinates
										: direction === KeyboardCode.Right
										? scrollContainer.scrollLeft -
										  maxScroll.x
										: scrollContainer.scrollLeft -
										  minScroll.x),
										scrollDelta.x &&
											scrollContainer.scrollBy({
												left: -scrollDelta.x,
												behavior: scrollBehavior,
											})
									break
								}
								if (
									canScrollY &&
									clampedCoordinates.y !== newCoordinates.y
								) {
									const newScrollCoordinates =
											scrollContainer.scrollTop +
											coordinatesDelta.y,
										canScrollToNewCoordinates =
											(direction === KeyboardCode.Down &&
												newScrollCoordinates <=
													maxScroll.y) ||
											(direction === KeyboardCode.Up &&
												newScrollCoordinates >=
													minScroll.y)
									if (
										canScrollToNewCoordinates &&
										!coordinatesDelta.x
									)
										return void scrollContainer.scrollTo({
											top: newScrollCoordinates,
											behavior: scrollBehavior,
										})
									;(scrollDelta.y = canScrollToNewCoordinates
										? scrollContainer.scrollTop -
										  newScrollCoordinates
										: direction === KeyboardCode.Down
										? scrollContainer.scrollTop -
										  maxScroll.y
										: scrollContainer.scrollTop -
										  minScroll.y),
										scrollDelta.y &&
											scrollContainer.scrollBy({
												top: -scrollDelta.y,
												behavior: scrollBehavior,
											})
									break
								}
							}
							this.handleMove(
								event,
								(0, utilities_esm.IH)(
									(0, utilities_esm.$X)(
										newCoordinates,
										this.referenceCoordinates,
									),
									scrollDelta,
								),
							)
						}
					}
				}
				handleMove(event, coordinates) {
					const { onMove } = this.props
					event.preventDefault(), onMove(coordinates)
				}
				handleEnd(event) {
					const { onEnd } = this.props
					event.preventDefault(), this.detach(), onEnd()
				}
				handleCancel(event) {
					const { onCancel } = this.props
					event.preventDefault(), this.detach(), onCancel()
				}
				detach() {
					this.listeners.removeAll(), this.windowListeners.removeAll()
				}
			}
			function isDistanceConstraint(constraint) {
				return Boolean(constraint && 'distance' in constraint)
			}
			function isDelayConstraint(constraint) {
				return Boolean(constraint && 'delay' in constraint)
			}
			KeyboardSensor.activators = [
				{
					eventName: 'onKeyDown',
					handler: (event, _ref, _ref2) => {
						let {
								keyboardCodes = defaultKeyboardCodes,
								onActivation,
							} = _ref,
							{ active } = _ref2
						const { code } = event.nativeEvent
						if (keyboardCodes.start.includes(code)) {
							const activator = active.activatorNode.current
							return (
								(!activator || event.target === activator) &&
								(event.preventDefault(),
								null == onActivation ||
									onActivation({ event: event.nativeEvent }),
								!0)
							)
						}
						return !1
					},
				},
			]
			class AbstractPointerSensor {
				constructor(props, events, listenerTarget) {
					var _getEventCoordinates
					void 0 === listenerTarget &&
						(listenerTarget = (function getEventListenerTarget(
							target,
						) {
							const { EventTarget } = (0, utilities_esm.Jj)(
								target,
							)
							return target instanceof EventTarget
								? target
								: (0, utilities_esm.r3)(target)
						})(props.event.target)),
						(this.props = void 0),
						(this.events = void 0),
						(this.autoScrollEnabled = !0),
						(this.document = void 0),
						(this.activated = !1),
						(this.initialCoordinates = void 0),
						(this.timeoutId = null),
						(this.listeners = void 0),
						(this.documentListeners = void 0),
						(this.windowListeners = void 0),
						(this.props = props),
						(this.events = events)
					const { event } = props,
						{ target } = event
					;(this.props = props),
						(this.events = events),
						(this.document = (0, utilities_esm.r3)(target)),
						(this.documentListeners = new Listeners(this.document)),
						(this.listeners = new Listeners(listenerTarget)),
						(this.windowListeners = new Listeners(
							(0, utilities_esm.Jj)(target),
						)),
						(this.initialCoordinates =
							null !=
							(_getEventCoordinates = (0, utilities_esm.DC)(
								event,
							))
								? _getEventCoordinates
								: defaultCoordinates),
						(this.handleStart = this.handleStart.bind(this)),
						(this.handleMove = this.handleMove.bind(this)),
						(this.handleEnd = this.handleEnd.bind(this)),
						(this.handleCancel = this.handleCancel.bind(this)),
						(this.handleKeydown = this.handleKeydown.bind(this)),
						(this.removeTextSelection =
							this.removeTextSelection.bind(this)),
						this.attach()
				}
				attach() {
					const {
						events,
						props: {
							options: { activationConstraint },
						},
					} = this
					if (
						(this.listeners.add(events.move.name, this.handleMove, {
							passive: !1,
						}),
						this.listeners.add(events.end.name, this.handleEnd),
						this.windowListeners.add(
							EventName.Resize,
							this.handleCancel,
						),
						this.windowListeners.add(
							EventName.DragStart,
							preventDefault,
						),
						this.windowListeners.add(
							EventName.VisibilityChange,
							this.handleCancel,
						),
						this.windowListeners.add(
							EventName.ContextMenu,
							preventDefault,
						),
						this.documentListeners.add(
							EventName.Keydown,
							this.handleKeydown,
						),
						activationConstraint)
					) {
						if (isDistanceConstraint(activationConstraint)) return
						if (isDelayConstraint(activationConstraint))
							return void (this.timeoutId = setTimeout(
								this.handleStart,
								activationConstraint.delay,
							))
					}
					this.handleStart()
				}
				detach() {
					this.listeners.removeAll(),
						this.windowListeners.removeAll(),
						setTimeout(this.documentListeners.removeAll, 50),
						null !== this.timeoutId &&
							(clearTimeout(this.timeoutId),
							(this.timeoutId = null))
				}
				handleStart() {
					const { initialCoordinates } = this,
						{ onStart } = this.props
					initialCoordinates &&
						((this.activated = !0),
						this.documentListeners.add(
							EventName.Click,
							stopPropagation,
							{ capture: !0 },
						),
						this.removeTextSelection(),
						this.documentListeners.add(
							EventName.SelectionChange,
							this.removeTextSelection,
						),
						onStart(initialCoordinates))
				}
				handleMove(event) {
					var _getEventCoordinates2
					const { activated, initialCoordinates, props } = this,
						{
							onMove,
							options: { activationConstraint },
						} = props
					if (!initialCoordinates) return
					const coordinates =
							null !=
							(_getEventCoordinates2 = (0, utilities_esm.DC)(
								event,
							))
								? _getEventCoordinates2
								: defaultCoordinates,
						delta = (0, utilities_esm.$X)(
							initialCoordinates,
							coordinates,
						)
					if (!activated && activationConstraint) {
						if (isDelayConstraint(activationConstraint))
							return hasExceededDistance(
								delta,
								activationConstraint.tolerance,
							)
								? this.handleCancel()
								: void 0
						if (isDistanceConstraint(activationConstraint))
							return null != activationConstraint.tolerance &&
								hasExceededDistance(
									delta,
									activationConstraint.tolerance,
								)
								? this.handleCancel()
								: hasExceededDistance(
										delta,
										activationConstraint.distance,
								  )
								? this.handleStart()
								: void 0
					}
					event.cancelable && event.preventDefault(),
						onMove(coordinates)
				}
				handleEnd() {
					const { onEnd } = this.props
					this.detach(), onEnd()
				}
				handleCancel() {
					const { onCancel } = this.props
					this.detach(), onCancel()
				}
				handleKeydown(event) {
					event.code === KeyboardCode.Esc && this.handleCancel()
				}
				removeTextSelection() {
					var _this$document$getSel
					null ==
						(_this$document$getSel =
							this.document.getSelection()) ||
						_this$document$getSel.removeAllRanges()
				}
			}
			const events = {
				move: { name: 'pointermove' },
				end: { name: 'pointerup' },
			}
			class PointerSensor extends AbstractPointerSensor {
				constructor(props) {
					const { event } = props,
						listenerTarget = (0, utilities_esm.r3)(event.target)
					super(props, events, listenerTarget)
				}
			}
			PointerSensor.activators = [
				{
					eventName: 'onPointerDown',
					handler: (_ref, _ref2) => {
						let { nativeEvent: event } = _ref,
							{ onActivation } = _ref2
						return (
							!(!event.isPrimary || 0 !== event.button) &&
							(null == onActivation || onActivation({ event }),
							!0)
						)
					},
				},
			]
			const events$1 = {
				move: { name: 'mousemove' },
				end: { name: 'mouseup' },
			}
			var MouseButton
			!(function (MouseButton) {
				MouseButton[(MouseButton.RightClick = 2)] = 'RightClick'
			})(MouseButton || (MouseButton = {}))
			;(class MouseSensor extends AbstractPointerSensor {
				constructor(props) {
					super(
						props,
						events$1,
						(0, utilities_esm.r3)(props.event.target),
					)
				}
			}).activators = [
				{
					eventName: 'onMouseDown',
					handler: (_ref, _ref2) => {
						let { nativeEvent: event } = _ref,
							{ onActivation } = _ref2
						return (
							event.button !== MouseButton.RightClick &&
							(null == onActivation || onActivation({ event }),
							!0)
						)
					},
				},
			]
			const events$2 = {
				move: { name: 'touchmove' },
				end: { name: 'touchend' },
			}
			var AutoScrollActivator, TraversalOrder
			function useAutoScroller(_ref) {
				let {
					acceleration,
					activator = AutoScrollActivator.Pointer,
					canScroll,
					draggingRect,
					enabled,
					interval = 5,
					order = TraversalOrder.TreeOrder,
					pointerCoordinates,
					scrollableAncestors,
					scrollableAncestorRects,
					delta,
					threshold,
				} = _ref
				const scrollIntent = (function useScrollIntent(_ref2) {
						let { delta, disabled } = _ref2
						const previousDelta = (0, utilities_esm.D9)(delta)
						return (0, utilities_esm.Gj)(
							(previousIntent) => {
								if (
									disabled ||
									!previousDelta ||
									!previousIntent
								)
									return defaultScrollIntent
								const direction = {
									x: Math.sign(delta.x - previousDelta.x),
									y: Math.sign(delta.y - previousDelta.y),
								}
								return {
									x: {
										[Direction.Backward]:
											previousIntent.x[
												Direction.Backward
											] || -1 === direction.x,
										[Direction.Forward]:
											previousIntent.x[
												Direction.Forward
											] || 1 === direction.x,
									},
									y: {
										[Direction.Backward]:
											previousIntent.y[
												Direction.Backward
											] || -1 === direction.y,
										[Direction.Forward]:
											previousIntent.y[
												Direction.Forward
											] || 1 === direction.y,
									},
								}
							},
							[disabled, delta, previousDelta],
						)
					})({ delta, disabled: !enabled }),
					[setAutoScrollInterval, clearAutoScrollInterval] = (0,
					utilities_esm.Yz)(),
					scrollSpeed = (0, react.useRef)({ x: 0, y: 0 }),
					scrollDirection = (0, react.useRef)({ x: 0, y: 0 }),
					rect = (0, react.useMemo)(() => {
						switch (activator) {
							case AutoScrollActivator.Pointer:
								return pointerCoordinates
									? {
											top: pointerCoordinates.y,
											bottom: pointerCoordinates.y,
											left: pointerCoordinates.x,
											right: pointerCoordinates.x,
									  }
									: null
							case AutoScrollActivator.DraggableRect:
								return draggingRect
						}
					}, [activator, draggingRect, pointerCoordinates]),
					scrollContainerRef = (0, react.useRef)(null),
					autoScroll = (0, react.useCallback)(() => {
						const scrollContainer = scrollContainerRef.current
						if (!scrollContainer) return
						const scrollLeft =
								scrollSpeed.current.x *
								scrollDirection.current.x,
							scrollTop =
								scrollSpeed.current.y *
								scrollDirection.current.y
						scrollContainer.scrollBy(scrollLeft, scrollTop)
					}, []),
					sortedScrollableAncestors = (0, react.useMemo)(
						() =>
							order === TraversalOrder.TreeOrder
								? [...scrollableAncestors].reverse()
								: scrollableAncestors,
						[order, scrollableAncestors],
					)
				;(0, react.useEffect)(() => {
					if (enabled && scrollableAncestors.length && rect) {
						for (const scrollContainer of sortedScrollableAncestors) {
							if (
								!1 ===
								(null == canScroll
									? void 0
									: canScroll(scrollContainer))
							)
								continue
							const index =
									scrollableAncestors.indexOf(
										scrollContainer,
									),
								scrollContainerRect =
									scrollableAncestorRects[index]
							if (!scrollContainerRect) continue
							const { direction, speed } =
								getScrollDirectionAndSpeed(
									scrollContainer,
									scrollContainerRect,
									rect,
									acceleration,
									threshold,
								)
							for (const axis of ['x', 'y'])
								scrollIntent[axis][direction[axis]] ||
									((speed[axis] = 0), (direction[axis] = 0))
							if (speed.x > 0 || speed.y > 0)
								return (
									clearAutoScrollInterval(),
									(scrollContainerRef.current =
										scrollContainer),
									setAutoScrollInterval(autoScroll, interval),
									(scrollSpeed.current = speed),
									void (scrollDirection.current = direction)
								)
						}
						;(scrollSpeed.current = { x: 0, y: 0 }),
							(scrollDirection.current = { x: 0, y: 0 }),
							clearAutoScrollInterval()
					} else clearAutoScrollInterval()
				}, [
					acceleration,
					autoScroll,
					canScroll,
					clearAutoScrollInterval,
					enabled,
					interval,
					JSON.stringify(rect),
					JSON.stringify(scrollIntent),
					setAutoScrollInterval,
					scrollableAncestors,
					sortedScrollableAncestors,
					scrollableAncestorRects,
					JSON.stringify(threshold),
				])
			}
			;((class TouchSensor extends AbstractPointerSensor {
				constructor(props) {
					super(props, events$2)
				}
				static setup() {
					return (
						window.addEventListener(events$2.move.name, noop, {
							capture: !1,
							passive: !1,
						}),
						function teardown() {
							window.removeEventListener(events$2.move.name, noop)
						}
					)
					function noop() {}
				}
			}).activators = [
				{
					eventName: 'onTouchStart',
					handler: (_ref, _ref2) => {
						let { nativeEvent: event } = _ref,
							{ onActivation } = _ref2
						const { touches } = event
						return (
							!(touches.length > 1) &&
							(null == onActivation || onActivation({ event }),
							!0)
						)
					},
				},
			]),
				(function (AutoScrollActivator) {
					;(AutoScrollActivator[(AutoScrollActivator.Pointer = 0)] =
						'Pointer'),
						(AutoScrollActivator[
							(AutoScrollActivator.DraggableRect = 1)
						] = 'DraggableRect')
				})(AutoScrollActivator || (AutoScrollActivator = {})),
				(function (TraversalOrder) {
					;(TraversalOrder[(TraversalOrder.TreeOrder = 0)] =
						'TreeOrder'),
						(TraversalOrder[
							(TraversalOrder.ReversedTreeOrder = 1)
						] = 'ReversedTreeOrder')
				})(TraversalOrder || (TraversalOrder = {}))
			const defaultScrollIntent = {
				x: { [Direction.Backward]: !1, [Direction.Forward]: !1 },
				y: { [Direction.Backward]: !1, [Direction.Forward]: !1 },
			}
			var MeasuringStrategy, MeasuringFrequency
			!(function (MeasuringStrategy) {
				;(MeasuringStrategy[(MeasuringStrategy.Always = 0)] = 'Always'),
					(MeasuringStrategy[(MeasuringStrategy.BeforeDragging = 1)] =
						'BeforeDragging'),
					(MeasuringStrategy[(MeasuringStrategy.WhileDragging = 2)] =
						'WhileDragging')
			})(MeasuringStrategy || (MeasuringStrategy = {})),
				(function (MeasuringFrequency) {
					MeasuringFrequency.Optimized = 'optimized'
				})(MeasuringFrequency || (MeasuringFrequency = {}))
			const defaultValue = new Map()
			function useInitialValue(value, computeFn) {
				return (0, utilities_esm.Gj)(
					(previousValue) =>
						value
							? previousValue ||
							  ('function' == typeof computeFn
									? computeFn(value)
									: value)
							: null,
					[computeFn, value],
				)
			}
			function useResizeObserver(_ref) {
				let { callback, disabled } = _ref
				const handleResize = (0, utilities_esm.zX)(callback),
					resizeObserver = (0, react.useMemo)(() => {
						if (
							disabled ||
							'undefined' == typeof window ||
							void 0 === window.ResizeObserver
						)
							return
						const { ResizeObserver } = window
						return new ResizeObserver(handleResize)
					}, [disabled])
				return (
					(0, react.useEffect)(
						() => () =>
							null == resizeObserver
								? void 0
								: resizeObserver.disconnect(),
						[resizeObserver],
					),
					resizeObserver
				)
			}
			function defaultMeasure(element) {
				return new Rect(getClientRect(element), element)
			}
			function useRect(element, measure, fallbackRect) {
				void 0 === measure && (measure = defaultMeasure)
				const [rect, measureRect] = (0, react.useReducer)(
						function reducer(currentRect) {
							if (!element) return null
							var _ref
							if (!1 === element.isConnected)
								return null !=
									(_ref =
										null != currentRect
											? currentRect
											: fallbackRect)
									? _ref
									: null
							const newRect = measure(element)
							if (
								JSON.stringify(currentRect) ===
								JSON.stringify(newRect)
							)
								return currentRect
							return newRect
						},
						null,
					),
					mutationObserver = (function useMutationObserver(_ref) {
						let { callback, disabled } = _ref
						const handleMutations = (0, utilities_esm.zX)(callback),
							mutationObserver = (0, react.useMemo)(() => {
								if (
									disabled ||
									'undefined' == typeof window ||
									void 0 === window.MutationObserver
								)
									return
								const { MutationObserver } = window
								return new MutationObserver(handleMutations)
							}, [handleMutations, disabled])
						return (
							(0, react.useEffect)(
								() => () =>
									null == mutationObserver
										? void 0
										: mutationObserver.disconnect(),
								[mutationObserver],
							),
							mutationObserver
						)
					})({
						callback(records) {
							if (element)
								for (const record of records) {
									const { type, target } = record
									if (
										'childList' === type &&
										target instanceof HTMLElement &&
										target.contains(element)
									) {
										measureRect()
										break
									}
								}
						},
					}),
					resizeObserver = useResizeObserver({
						callback: measureRect,
					})
				return (
					(0, utilities_esm.LI)(() => {
						measureRect(),
							element
								? (null == resizeObserver ||
										resizeObserver.observe(element),
								  null == mutationObserver ||
										mutationObserver.observe(
											document.body,
											{ childList: !0, subtree: !0 },
										))
								: (null == resizeObserver ||
										resizeObserver.disconnect(),
								  null == mutationObserver ||
										mutationObserver.disconnect())
					}, [element]),
					rect
				)
			}
			const defaultValue$1 = []
			function useScrollOffsetsDelta(scrollOffsets, dependencies) {
				void 0 === dependencies && (dependencies = [])
				const initialScrollOffsets = (0, react.useRef)(null)
				return (
					(0, react.useEffect)(() => {
						initialScrollOffsets.current = null
					}, dependencies),
					(0, react.useEffect)(() => {
						const hasScrollOffsets =
							scrollOffsets !== defaultCoordinates
						hasScrollOffsets &&
							!initialScrollOffsets.current &&
							(initialScrollOffsets.current = scrollOffsets),
							!hasScrollOffsets &&
								initialScrollOffsets.current &&
								(initialScrollOffsets.current = null)
					}, [scrollOffsets]),
					initialScrollOffsets.current
						? (0, utilities_esm.$X)(
								scrollOffsets,
								initialScrollOffsets.current,
						  )
						: defaultCoordinates
				)
			}
			function useWindowRect(element) {
				return (0, react.useMemo)(
					() =>
						element
							? (function getWindowClientRect(element) {
									const width = element.innerWidth,
										height = element.innerHeight
									return {
										top: 0,
										left: 0,
										right: width,
										bottom: height,
										width,
										height,
									}
							  })(element)
							: null,
					[element],
				)
			}
			const defaultValue$2 = []
			function getMeasurableNode(node) {
				if (!node) return null
				if (node.children.length > 1) return node
				const firstChild = node.children[0]
				return (0, utilities_esm.Re)(firstChild) ? firstChild : node
			}
			const defaultSensors = [
					{ sensor: PointerSensor, options: {} },
					{ sensor: KeyboardSensor, options: {} },
				],
				defaultData = { current: {} },
				defaultMeasuringConfiguration = {
					draggable: { measure: getTransformAgnosticClientRect },
					droppable: {
						measure: getTransformAgnosticClientRect,
						strategy: MeasuringStrategy.WhileDragging,
						frequency: MeasuringFrequency.Optimized,
					},
					dragOverlay: { measure: getClientRect },
				}
			class DroppableContainersMap extends Map {
				get(id) {
					var _super$get
					return null != id && null != (_super$get = super.get(id))
						? _super$get
						: void 0
				}
				toArray() {
					return Array.from(this.values())
				}
				getEnabled() {
					return this.toArray().filter((_ref) => {
						let { disabled } = _ref
						return !disabled
					})
				}
				getNodeFor(id) {
					var _this$get$node$curren, _this$get
					return null !=
						(_this$get$node$curren =
							null == (_this$get = this.get(id))
								? void 0
								: _this$get.node.current)
						? _this$get$node$curren
						: void 0
				}
			}
			const defaultPublicContext = {
					activatorEvent: null,
					active: null,
					activeNode: null,
					activeNodeRect: null,
					collisions: null,
					containerNodeRect: null,
					draggableNodes: new Map(),
					droppableRects: new Map(),
					droppableContainers: new DroppableContainersMap(),
					over: null,
					dragOverlay: {
						nodeRef: { current: null },
						rect: null,
						setRef: noop,
					},
					scrollableAncestors: [],
					scrollableAncestorRects: [],
					measuringConfiguration: defaultMeasuringConfiguration,
					measureDroppableContainers: noop,
					windowRect: null,
					measuringScheduled: !1,
				},
				defaultInternalContext = {
					activatorEvent: null,
					activators: [],
					active: null,
					activeNodeRect: null,
					ariaDescribedById: { draggable: '' },
					dispatch: noop,
					draggableNodes: new Map(),
					over: null,
					measureDroppableContainers: noop,
				},
				InternalContext = (0, react.createContext)(
					defaultInternalContext,
				),
				PublicContext = (0, react.createContext)(defaultPublicContext)
			function getInitialState() {
				return {
					draggable: {
						active: null,
						initialCoordinates: { x: 0, y: 0 },
						nodes: new Map(),
						translate: { x: 0, y: 0 },
					},
					droppable: { containers: new DroppableContainersMap() },
				}
			}
			function reducer(state, action) {
				switch (action.type) {
					case Action.DragStart:
						return {
							...state,
							draggable: {
								...state.draggable,
								initialCoordinates: action.initialCoordinates,
								active: action.active,
							},
						}
					case Action.DragMove:
						return state.draggable.active
							? {
									...state,
									draggable: {
										...state.draggable,
										translate: {
											x:
												action.coordinates.x -
												state.draggable
													.initialCoordinates.x,
											y:
												action.coordinates.y -
												state.draggable
													.initialCoordinates.y,
										},
									},
							  }
							: state
					case Action.DragEnd:
					case Action.DragCancel:
						return {
							...state,
							draggable: {
								...state.draggable,
								active: null,
								initialCoordinates: { x: 0, y: 0 },
								translate: { x: 0, y: 0 },
							},
						}
					case Action.RegisterDroppable: {
						const { element } = action,
							{ id } = element,
							containers = new DroppableContainersMap(
								state.droppable.containers,
							)
						return (
							containers.set(id, element),
							{
								...state,
								droppable: { ...state.droppable, containers },
							}
						)
					}
					case Action.SetDroppableDisabled: {
						const { id, key, disabled } = action,
							element = state.droppable.containers.get(id)
						if (!element || key !== element.key) return state
						const containers = new DroppableContainersMap(
							state.droppable.containers,
						)
						return (
							containers.set(id, { ...element, disabled }),
							{
								...state,
								droppable: { ...state.droppable, containers },
							}
						)
					}
					case Action.UnregisterDroppable: {
						const { id, key } = action,
							element = state.droppable.containers.get(id)
						if (!element || key !== element.key) return state
						const containers = new DroppableContainersMap(
							state.droppable.containers,
						)
						return (
							containers.delete(id),
							{
								...state,
								droppable: { ...state.droppable, containers },
							}
						)
					}
					default:
						return state
				}
			}
			function RestoreFocus(_ref) {
				let { disabled } = _ref
				const { active, activatorEvent, draggableNodes } = (0,
					react.useContext)(InternalContext),
					previousActivatorEvent = (0, utilities_esm.D9)(
						activatorEvent,
					),
					previousActiveId = (0, utilities_esm.D9)(
						null == active ? void 0 : active.id,
					)
				return (
					(0, react.useEffect)(() => {
						if (
							!disabled &&
							!activatorEvent &&
							previousActivatorEvent &&
							null != previousActiveId
						) {
							if (!(0, utilities_esm.vd)(previousActivatorEvent))
								return
							if (
								document.activeElement ===
								previousActivatorEvent.target
							)
								return
							const draggableNode =
								draggableNodes.get(previousActiveId)
							if (!draggableNode) return
							const { activatorNode, node } = draggableNode
							if (!activatorNode.current && !node.current) return
							requestAnimationFrame(() => {
								for (const element of [
									activatorNode.current,
									node.current,
								]) {
									if (!element) continue
									const focusableNode = (0, utilities_esm.so)(
										element,
									)
									if (focusableNode) {
										focusableNode.focus()
										break
									}
								}
							})
						}
					}, [
						activatorEvent,
						disabled,
						draggableNodes,
						previousActiveId,
						previousActivatorEvent,
					]),
					null
				)
			}
			function applyModifiers(modifiers, _ref) {
				let { transform, ...args } = _ref
				return null != modifiers && modifiers.length
					? modifiers.reduce(
							(accumulator, modifier) =>
								modifier({ transform: accumulator, ...args }),
							transform,
					  )
					: transform
			}
			const ActiveDraggableContext = (0, react.createContext)({
				...defaultCoordinates,
				scaleX: 1,
				scaleY: 1,
			})
			var Status
			!(function (Status) {
				;(Status[(Status.Uninitialized = 0)] = 'Uninitialized'),
					(Status[(Status.Initializing = 1)] = 'Initializing'),
					(Status[(Status.Initialized = 2)] = 'Initialized')
			})(Status || (Status = {}))
			const DndContext = (0, react.memo)(function DndContext(_ref) {
					var _sensorContext$curren,
						_dragOverlay$nodeRef$,
						_dragOverlay$rect,
						_over$rect
					let {
						id,
						accessibility,
						autoScroll = !0,
						children,
						sensors = defaultSensors,
						collisionDetection = rectIntersection,
						measuring,
						modifiers,
						...props
					} = _ref
					const store = (0, react.useReducer)(
							reducer,
							void 0,
							getInitialState,
						),
						[state, dispatch] = store,
						[dispatchMonitorEvent, registerMonitorListener] =
							(function useDndMonitorProvider() {
								const [listeners] = (0, react.useState)(
										() => new Set(),
									),
									registerListener = (0, react.useCallback)(
										(listener) => (
											listeners.add(listener),
											() => listeners.delete(listener)
										),
										[listeners],
									)
								return [
									(0, react.useCallback)(
										(_ref) => {
											let { type, event } = _ref
											listeners.forEach((listener) => {
												var _listener$type
												return null ==
													(_listener$type =
														listener[type])
													? void 0
													: _listener$type.call(
															listener,
															event,
													  )
											})
										},
										[listeners],
									),
									registerListener,
								]
							})(),
						[status, setStatus] = (0, react.useState)(
							Status.Uninitialized,
						),
						isInitialized = status === Status.Initialized,
						{
							draggable: {
								active: activeId,
								nodes: draggableNodes,
								translate,
							},
							droppable: { containers: droppableContainers },
						} = state,
						node = activeId ? draggableNodes.get(activeId) : null,
						activeRects = (0, react.useRef)({
							initial: null,
							translated: null,
						}),
						active = (0, react.useMemo)(() => {
							var _node$data
							return null != activeId
								? {
										id: activeId,
										data:
											null !=
											(_node$data =
												null == node
													? void 0
													: node.data)
												? _node$data
												: defaultData,
										rect: activeRects,
								  }
								: null
						}, [activeId, node]),
						activeRef = (0, react.useRef)(null),
						[activeSensor, setActiveSensor] = (0, react.useState)(
							null,
						),
						[activatorEvent, setActivatorEvent] = (0,
						react.useState)(null),
						latestProps = (0, utilities_esm.Ey)(
							props,
							Object.values(props),
						),
						draggableDescribedById = (0, utilities_esm.Ld)(
							'DndDescribedBy',
							id,
						),
						enabledDroppableContainers = (0, react.useMemo)(
							() => droppableContainers.getEnabled(),
							[droppableContainers],
						),
						measuringConfiguration =
							(function useMeasuringConfiguration(config) {
								return (0, react.useMemo)(
									() => ({
										draggable: {
											...defaultMeasuringConfiguration.draggable,
											...(null == config
												? void 0
												: config.draggable),
										},
										droppable: {
											...defaultMeasuringConfiguration.droppable,
											...(null == config
												? void 0
												: config.droppable),
										},
										dragOverlay: {
											...defaultMeasuringConfiguration.dragOverlay,
											...(null == config
												? void 0
												: config.dragOverlay),
										},
									}),
									[
										null == config
											? void 0
											: config.draggable,
										null == config
											? void 0
											: config.droppable,
										null == config
											? void 0
											: config.dragOverlay,
									],
								)
							})(measuring),
						{
							droppableRects,
							measureDroppableContainers,
							measuringScheduled,
						} = (function useDroppableMeasuring(containers, _ref) {
							let { dragging, dependencies, config } = _ref
							const [queue, setQueue] = (0, react.useState)(null),
								{ frequency, measure, strategy } = config,
								containersRef = (0, react.useRef)(containers),
								disabled = (function isDisabled() {
									switch (strategy) {
										case MeasuringStrategy.Always:
											return !1
										case MeasuringStrategy.BeforeDragging:
											return dragging
										default:
											return !dragging
									}
								})(),
								disabledRef = (0, utilities_esm.Ey)(disabled),
								measureDroppableContainers = (0,
								react.useCallback)(
									function (ids) {
										void 0 === ids && (ids = []),
											disabledRef.current ||
												setQueue((value) =>
													null === value
														? ids
														: value.concat(
																ids.filter(
																	(id) =>
																		!value.includes(
																			id,
																		),
																),
														  ),
												)
									},
									[disabledRef],
								),
								timeoutId = (0, react.useRef)(null),
								droppableRects = (0, utilities_esm.Gj)(
									(previousValue) => {
										if (disabled && !dragging)
											return defaultValue
										if (
											!previousValue ||
											previousValue === defaultValue ||
											containersRef.current !==
												containers ||
											null != queue
										) {
											const map = new Map()
											for (let container of containers) {
												if (!container) continue
												if (
													queue &&
													queue.length > 0 &&
													!queue.includes(
														container.id,
													) &&
													container.rect.current
												) {
													map.set(
														container.id,
														container.rect.current,
													)
													continue
												}
												const node =
														container.node.current,
													rect = node
														? new Rect(
																measure(node),
																node,
														  )
														: null
												;(container.rect.current =
													rect),
													rect &&
														map.set(
															container.id,
															rect,
														)
											}
											return map
										}
										return previousValue
									},
									[
										containers,
										queue,
										dragging,
										disabled,
										measure,
									],
								)
							return (
								(0, react.useEffect)(() => {
									containersRef.current = containers
								}, [containers]),
								(0, react.useEffect)(() => {
									disabled || measureDroppableContainers()
								}, [dragging, disabled]),
								(0, react.useEffect)(() => {
									queue && queue.length > 0 && setQueue(null)
								}, [JSON.stringify(queue)]),
								(0, react.useEffect)(() => {
									disabled ||
										'number' != typeof frequency ||
										null !== timeoutId.current ||
										(timeoutId.current = setTimeout(() => {
											measureDroppableContainers(),
												(timeoutId.current = null)
										}, frequency))
								}, [
									frequency,
									disabled,
									measureDroppableContainers,
									...dependencies,
								]),
								{
									droppableRects,
									measureDroppableContainers,
									measuringScheduled: null != queue,
								}
							)
						})(enabledDroppableContainers, {
							dragging: isInitialized,
							dependencies: [translate.x, translate.y],
							config: measuringConfiguration.droppable,
						}),
						activeNode = (function useCachedNode(
							draggableNodes,
							id,
						) {
							const draggableNode =
									null !== id
										? draggableNodes.get(id)
										: void 0,
								node = draggableNode
									? draggableNode.node.current
									: null
							return (0, utilities_esm.Gj)(
								(cachedNode) => {
									var _ref
									return null === id
										? null
										: null !=
										  (_ref =
												null != node
													? node
													: cachedNode)
										? _ref
										: null
								},
								[node, id],
							)
						})(draggableNodes, activeId),
						activationCoordinates = (0, react.useMemo)(
							() =>
								activatorEvent
									? (0, utilities_esm.DC)(activatorEvent)
									: null,
							[activatorEvent],
						),
						autoScrollOptions = (function getAutoScrollerOptions() {
							const activeSensorDisablesAutoscroll =
									!1 ===
									(null == activeSensor
										? void 0
										: activeSensor.autoScrollEnabled),
								autoScrollGloballyDisabled =
									'object' == typeof autoScroll
										? !1 === autoScroll.enabled
										: !1 === autoScroll,
								enabled =
									isInitialized &&
									!activeSensorDisablesAutoscroll &&
									!autoScrollGloballyDisabled
							if ('object' == typeof autoScroll)
								return { ...autoScroll, enabled }
							return { enabled }
						})(),
						initialActiveNodeRect = (function useInitialRect(
							node,
							measure,
						) {
							return useInitialValue(node, measure)
						})(activeNode, measuringConfiguration.draggable.measure)
					!(function useLayoutShiftScrollCompensation(_ref) {
						let {
							activeNode,
							measure,
							initialRect,
							config = !0,
						} = _ref
						const initialized = (0, react.useRef)(!1),
							{ x, y } =
								'boolean' == typeof config
									? { x: config, y: config }
									: config
						;(0, utilities_esm.LI)(() => {
							if ((!x && !y) || !activeNode)
								return void (initialized.current = !1)
							if (initialized.current || !initialRect) return
							const node =
								null == activeNode
									? void 0
									: activeNode.node.current
							if (!node || !1 === node.isConnected) return
							const rectDelta = getRectDelta(
								measure(node),
								initialRect,
							)
							if (
								(x || (rectDelta.x = 0),
								y || (rectDelta.y = 0),
								(initialized.current = !0),
								Math.abs(rectDelta.x) > 0 ||
									Math.abs(rectDelta.y) > 0)
							) {
								const firstScrollableAncestor =
									getFirstScrollableAncestor(node)
								firstScrollableAncestor &&
									firstScrollableAncestor.scrollBy({
										top: rectDelta.y,
										left: rectDelta.x,
									})
							}
						}, [activeNode, x, y, initialRect, measure])
					})({
						activeNode: activeId
							? draggableNodes.get(activeId)
							: null,
						config: autoScrollOptions.layoutShiftCompensation,
						initialRect: initialActiveNodeRect,
						measure: measuringConfiguration.draggable.measure,
					})
					const activeNodeRect = useRect(
							activeNode,
							measuringConfiguration.draggable.measure,
							initialActiveNodeRect,
						),
						containerNodeRect = useRect(
							activeNode ? activeNode.parentElement : null,
						),
						sensorContext = (0, react.useRef)({
							activatorEvent: null,
							active: null,
							activeNode,
							collisionRect: null,
							collisions: null,
							droppableRects,
							draggableNodes,
							draggingNode: null,
							draggingNodeRect: null,
							droppableContainers,
							over: null,
							scrollableAncestors: [],
							scrollAdjustedTranslate: null,
						}),
						overNode = droppableContainers.getNodeFor(
							null ==
								(_sensorContext$curren =
									sensorContext.current.over)
								? void 0
								: _sensorContext$curren.id,
						),
						dragOverlay = (function useDragOverlayMeasuring(_ref) {
							let { measure } = _ref
							const [rect, setRect] = (0, react.useState)(null),
								resizeObserver = useResizeObserver({
									callback: (0, react.useCallback)(
										(entries) => {
											for (const { target } of entries)
												if (
													(0, utilities_esm.Re)(
														target,
													)
												) {
													setRect((rect) => {
														const newRect =
															measure(target)
														return rect
															? {
																	...rect,
																	width: newRect.width,
																	height: newRect.height,
															  }
															: newRect
													})
													break
												}
										},
										[measure],
									),
								}),
								handleNodeChange = (0, react.useCallback)(
									(element) => {
										const node = getMeasurableNode(element)
										null == resizeObserver ||
											resizeObserver.disconnect(),
											node &&
												(null == resizeObserver ||
													resizeObserver.observe(
														node,
													)),
											setRect(node ? measure(node) : null)
									},
									[measure, resizeObserver],
								),
								[nodeRef, setRef] = (0, utilities_esm.wm)(
									handleNodeChange,
								)
							return (0, react.useMemo)(
								() => ({ nodeRef, rect, setRef }),
								[rect, nodeRef, setRef],
							)
						})({
							measure: measuringConfiguration.dragOverlay.measure,
						}),
						draggingNode =
							null !=
							(_dragOverlay$nodeRef$ =
								dragOverlay.nodeRef.current)
								? _dragOverlay$nodeRef$
								: activeNode,
						draggingNodeRect = isInitialized
							? null != (_dragOverlay$rect = dragOverlay.rect)
								? _dragOverlay$rect
								: activeNodeRect
							: null,
						usesDragOverlay = Boolean(
							dragOverlay.nodeRef.current && dragOverlay.rect,
						),
						nodeRectDelta = (function useRectDelta(rect) {
							return getRectDelta(rect, useInitialValue(rect))
						})(usesDragOverlay ? null : activeNodeRect),
						windowRect = useWindowRect(
							draggingNode
								? (0, utilities_esm.Jj)(draggingNode)
								: null,
						),
						scrollableAncestors = (function useScrollableAncestors(
							node,
						) {
							const previousNode = (0, react.useRef)(node),
								ancestors = (0, utilities_esm.Gj)(
									(previousValue) =>
										node
											? previousValue &&
											  previousValue !==
													defaultValue$1 &&
											  node &&
											  previousNode.current &&
											  node.parentNode ===
													previousNode.current
														.parentNode
												? previousValue
												: getScrollableAncestors(node)
											: defaultValue$1,
									[node],
								)
							return (
								(0, react.useEffect)(() => {
									previousNode.current = node
								}, [node]),
								ancestors
							)
						})(
							isInitialized
								? null != overNode
									? overNode
									: activeNode
								: null,
						),
						scrollableAncestorRects = (function useRects(
							elements,
							measure,
						) {
							void 0 === measure && (measure = getClientRect)
							const [firstElement] = elements,
								windowRect = useWindowRect(
									firstElement
										? (0, utilities_esm.Jj)(firstElement)
										: null,
								),
								[rects, measureRects] = (0, react.useReducer)(
									function reducer() {
										return elements.length
											? elements.map((element) =>
													isDocumentScrollingElement(
														element,
													)
														? windowRect
														: new Rect(
																measure(
																	element,
																),
																element,
														  ),
											  )
											: defaultValue$2
									},
									defaultValue$2,
								),
								resizeObserver = useResizeObserver({
									callback: measureRects,
								})
							return (
								elements.length > 0 &&
									rects === defaultValue$2 &&
									measureRects(),
								(0, utilities_esm.LI)(() => {
									elements.length
										? elements.forEach((element) =>
												null == resizeObserver
													? void 0
													: resizeObserver.observe(
															element,
													  ),
										  )
										: (null == resizeObserver ||
												resizeObserver.disconnect(),
										  measureRects())
								}, [elements]),
								rects
							)
						})(scrollableAncestors),
						modifiedTranslate = applyModifiers(modifiers, {
							transform: {
								x: translate.x - nodeRectDelta.x,
								y: translate.y - nodeRectDelta.y,
								scaleX: 1,
								scaleY: 1,
							},
							activatorEvent,
							active,
							activeNodeRect,
							containerNodeRect,
							draggingNodeRect,
							over: sensorContext.current.over,
							overlayNodeRect: dragOverlay.rect,
							scrollableAncestors,
							scrollableAncestorRects,
							windowRect,
						}),
						pointerCoordinates = activationCoordinates
							? (0, utilities_esm.IH)(
									activationCoordinates,
									translate,
							  )
							: null,
						scrollOffsets = (function useScrollOffsets(elements) {
							const [scrollCoordinates, setScrollCoordinates] =
									(0, react.useState)(null),
								prevElements = (0, react.useRef)(elements),
								handleScroll = (0, react.useCallback)(
									(event) => {
										const scrollingElement =
											getScrollableElement(event.target)
										scrollingElement &&
											setScrollCoordinates(
												(scrollCoordinates) =>
													scrollCoordinates
														? (scrollCoordinates.set(
																scrollingElement,
																getScrollCoordinates(
																	scrollingElement,
																),
														  ),
														  new Map(
																scrollCoordinates,
														  ))
														: null,
											)
									},
									[],
								)
							return (
								(0, react.useEffect)(() => {
									const previousElements =
										prevElements.current
									if (elements !== previousElements) {
										cleanup(previousElements)
										const entries = elements
											.map((element) => {
												const scrollableElement =
													getScrollableElement(
														element,
													)
												return scrollableElement
													? (scrollableElement.addEventListener(
															'scroll',
															handleScroll,
															{ passive: !0 },
													  ),
													  [
															scrollableElement,
															getScrollCoordinates(
																scrollableElement,
															),
													  ])
													: null
											})
											.filter((entry) => null != entry)
										setScrollCoordinates(
											entries.length
												? new Map(entries)
												: null,
										),
											(prevElements.current = elements)
									}
									return () => {
										cleanup(elements),
											cleanup(previousElements)
									}
									function cleanup(elements) {
										elements.forEach((element) => {
											const scrollableElement =
												getScrollableElement(element)
											null == scrollableElement ||
												scrollableElement.removeEventListener(
													'scroll',
													handleScroll,
												)
										})
									}
								}, [handleScroll, elements]),
								(0, react.useMemo)(
									() =>
										elements.length
											? scrollCoordinates
												? Array.from(
														scrollCoordinates.values(),
												  ).reduce(
														(acc, coordinates) =>
															(0,
															utilities_esm.IH)(
																acc,
																coordinates,
															),
														defaultCoordinates,
												  )
												: getScrollOffsets(elements)
											: defaultCoordinates,
									[elements, scrollCoordinates],
								)
							)
						})(scrollableAncestors),
						scrollAdjustment = useScrollOffsetsDelta(scrollOffsets),
						activeNodeScrollDelta = useScrollOffsetsDelta(
							scrollOffsets,
							[activeNodeRect],
						),
						scrollAdjustedTranslate = (0, utilities_esm.IH)(
							modifiedTranslate,
							scrollAdjustment,
						),
						collisionRect = draggingNodeRect
							? getAdjustedRect(
									draggingNodeRect,
									modifiedTranslate,
							  )
							: null,
						collisions =
							active && collisionRect
								? collisionDetection({
										active,
										collisionRect,
										droppableRects,
										droppableContainers:
											enabledDroppableContainers,
										pointerCoordinates,
								  })
								: null,
						overId = getFirstCollision(collisions, 'id'),
						[over, setOver] = (0, react.useState)(null),
						transform = (function adjustScale(
							transform,
							rect1,
							rect2,
						) {
							return {
								...transform,
								scaleX:
									rect1 && rect2
										? rect1.width / rect2.width
										: 1,
								scaleY:
									rect1 && rect2
										? rect1.height / rect2.height
										: 1,
							}
						})(
							usesDragOverlay
								? modifiedTranslate
								: (0, utilities_esm.IH)(
										modifiedTranslate,
										activeNodeScrollDelta,
								  ),
							null !=
								(_over$rect = null == over ? void 0 : over.rect)
								? _over$rect
								: null,
							activeNodeRect,
						),
						instantiateSensor = (0, react.useCallback)(
							(event, _ref2) => {
								let { sensor: Sensor, options } = _ref2
								if (null == activeRef.current) return
								const activeNode = draggableNodes.get(
									activeRef.current,
								)
								if (!activeNode) return
								const activatorEvent = event.nativeEvent,
									sensorInstance = new Sensor({
										active: activeRef.current,
										activeNode,
										event: activatorEvent,
										options,
										context: sensorContext,
										onStart(initialCoordinates) {
											const id = activeRef.current
											if (null == id) return
											const draggableNode =
												draggableNodes.get(id)
											if (!draggableNode) return
											const { onDragStart } =
													latestProps.current,
												event = {
													active: {
														id,
														data: draggableNode.data,
														rect: activeRects,
													},
												}
											;(0,
											react_dom.unstable_batchedUpdates)(
												() => {
													null == onDragStart ||
														onDragStart(event),
														setStatus(
															Status.Initializing,
														),
														dispatch({
															type: Action.DragStart,
															initialCoordinates,
															active: id,
														}),
														dispatchMonitorEvent({
															type: 'onDragStart',
															event,
														})
												},
											)
										},
										onMove(coordinates) {
											dispatch({
												type: Action.DragMove,
												coordinates,
											})
										},
										onEnd: createHandler(Action.DragEnd),
										onCancel: createHandler(
											Action.DragCancel,
										),
									})
								function createHandler(type) {
									return async function handler() {
										const {
											active,
											collisions,
											over,
											scrollAdjustedTranslate,
										} = sensorContext.current
										let event = null
										if (active && scrollAdjustedTranslate) {
											const { cancelDrop } =
												latestProps.current
											if (
												((event = {
													activatorEvent,
													active,
													collisions,
													delta: scrollAdjustedTranslate,
													over,
												}),
												type === Action.DragEnd &&
													'function' ==
														typeof cancelDrop)
											) {
												;(await Promise.resolve(
													cancelDrop(event),
												)) && (type = Action.DragCancel)
											}
										}
										;(activeRef.current = null),
											(0,
											react_dom.unstable_batchedUpdates)(
												() => {
													dispatch({ type }),
														setStatus(
															Status.Uninitialized,
														),
														setOver(null),
														setActiveSensor(null),
														setActivatorEvent(null)
													const eventName =
														type === Action.DragEnd
															? 'onDragEnd'
															: 'onDragCancel'
													if (event) {
														const handler =
															latestProps.current[
																eventName
															]
														null == handler ||
															handler(event),
															dispatchMonitorEvent(
																{
																	type: eventName,
																	event,
																},
															)
													}
												},
											)
									}
								}
								;(0, react_dom.unstable_batchedUpdates)(() => {
									setActiveSensor(sensorInstance),
										setActivatorEvent(event.nativeEvent)
								})
							},
							[draggableNodes],
						),
						bindActivatorToSensorInstantiator = (0,
						react.useCallback)(
							(handler, sensor) => (event, active) => {
								const nativeEvent = event.nativeEvent,
									activeDraggableNode =
										draggableNodes.get(active)
								if (
									null !== activeRef.current ||
									!activeDraggableNode ||
									nativeEvent.dndKit ||
									nativeEvent.defaultPrevented
								)
									return
								const activationContext = {
									active: activeDraggableNode,
								}
								!0 ===
									handler(
										event,
										sensor.options,
										activationContext,
									) &&
									((nativeEvent.dndKit = {
										capturedBy: sensor.sensor,
									}),
									(activeRef.current = active),
									instantiateSensor(event, sensor))
							},
							[draggableNodes, instantiateSensor],
						),
						activators = (function useCombineActivators(
							sensors,
							getSyntheticHandler,
						) {
							return (0, react.useMemo)(
								() =>
									sensors.reduce((accumulator, sensor) => {
										const { sensor: Sensor } = sensor
										return [
											...accumulator,
											...Sensor.activators.map(
												(activator) => ({
													eventName:
														activator.eventName,
													handler:
														getSyntheticHandler(
															activator.handler,
															sensor,
														),
												}),
											),
										]
									}, []),
								[sensors, getSyntheticHandler],
							)
						})(sensors, bindActivatorToSensorInstantiator)
					!(function useSensorSetup(sensors) {
						;(0, react.useEffect)(
							() => {
								if (!utilities_esm.Nq) return
								const teardownFns = sensors.map((_ref) => {
									let { sensor } = _ref
									return null == sensor.setup
										? void 0
										: sensor.setup()
								})
								return () => {
									for (const teardown of teardownFns)
										null == teardown || teardown()
								}
							},
							sensors.map((_ref2) => {
								let { sensor } = _ref2
								return sensor
							}),
						)
					})(sensors),
						(0, utilities_esm.LI)(() => {
							activeNodeRect &&
								status === Status.Initializing &&
								setStatus(Status.Initialized)
						}, [activeNodeRect, status]),
						(0, react.useEffect)(() => {
							const { onDragMove } = latestProps.current,
								{ active, activatorEvent, collisions, over } =
									sensorContext.current
							if (!active || !activatorEvent) return
							const event = {
								active,
								activatorEvent,
								collisions,
								delta: {
									x: scrollAdjustedTranslate.x,
									y: scrollAdjustedTranslate.y,
								},
								over,
							}
							;(0, react_dom.unstable_batchedUpdates)(() => {
								null == onDragMove || onDragMove(event),
									dispatchMonitorEvent({
										type: 'onDragMove',
										event,
									})
							})
						}, [
							scrollAdjustedTranslate.x,
							scrollAdjustedTranslate.y,
						]),
						(0, react.useEffect)(() => {
							const {
								active,
								activatorEvent,
								collisions,
								droppableContainers,
								scrollAdjustedTranslate,
							} = sensorContext.current
							if (
								!active ||
								null == activeRef.current ||
								!activatorEvent ||
								!scrollAdjustedTranslate
							)
								return
							const { onDragOver } = latestProps.current,
								overContainer = droppableContainers.get(overId),
								over =
									overContainer && overContainer.rect.current
										? {
												id: overContainer.id,
												rect: overContainer.rect
													.current,
												data: overContainer.data,
												disabled:
													overContainer.disabled,
										  }
										: null,
								event = {
									active,
									activatorEvent,
									collisions,
									delta: {
										x: scrollAdjustedTranslate.x,
										y: scrollAdjustedTranslate.y,
									},
									over,
								}
							;(0, react_dom.unstable_batchedUpdates)(() => {
								setOver(over),
									null == onDragOver || onDragOver(event),
									dispatchMonitorEvent({
										type: 'onDragOver',
										event,
									})
							})
						}, [overId]),
						(0, utilities_esm.LI)(() => {
							;(sensorContext.current = {
								activatorEvent,
								active,
								activeNode,
								collisionRect,
								collisions,
								droppableRects,
								draggableNodes,
								draggingNode,
								draggingNodeRect,
								droppableContainers,
								over,
								scrollableAncestors,
								scrollAdjustedTranslate,
							}),
								(activeRects.current = {
									initial: draggingNodeRect,
									translated: collisionRect,
								})
						}, [
							active,
							activeNode,
							collisions,
							collisionRect,
							draggableNodes,
							draggingNode,
							draggingNodeRect,
							droppableRects,
							droppableContainers,
							over,
							scrollableAncestors,
							scrollAdjustedTranslate,
						]),
						useAutoScroller({
							...autoScrollOptions,
							delta: translate,
							draggingRect: collisionRect,
							pointerCoordinates,
							scrollableAncestors,
							scrollableAncestorRects,
						})
					const publicContext = (0, react.useMemo)(
							() => ({
								active,
								activeNode,
								activeNodeRect,
								activatorEvent,
								collisions,
								containerNodeRect,
								dragOverlay,
								draggableNodes,
								droppableContainers,
								droppableRects,
								over,
								measureDroppableContainers,
								scrollableAncestors,
								scrollableAncestorRects,
								measuringConfiguration,
								measuringScheduled,
								windowRect,
							}),
							[
								active,
								activeNode,
								activeNodeRect,
								activatorEvent,
								collisions,
								containerNodeRect,
								dragOverlay,
								draggableNodes,
								droppableContainers,
								droppableRects,
								over,
								measureDroppableContainers,
								scrollableAncestors,
								scrollableAncestorRects,
								measuringConfiguration,
								measuringScheduled,
								windowRect,
							],
						),
						internalContext = (0, react.useMemo)(
							() => ({
								activatorEvent,
								activators,
								active,
								activeNodeRect,
								ariaDescribedById: {
									draggable: draggableDescribedById,
								},
								dispatch,
								draggableNodes,
								over,
								measureDroppableContainers,
							}),
							[
								activatorEvent,
								activators,
								active,
								activeNodeRect,
								dispatch,
								draggableDescribedById,
								draggableNodes,
								over,
								measureDroppableContainers,
							],
						)
					return react.createElement(
						DndMonitorContext.Provider,
						{ value: registerMonitorListener },
						react.createElement(
							InternalContext.Provider,
							{ value: internalContext },
							react.createElement(
								PublicContext.Provider,
								{ value: publicContext },
								react.createElement(
									ActiveDraggableContext.Provider,
									{ value: transform },
									children,
								),
							),
							react.createElement(RestoreFocus, {
								disabled:
									!1 ===
									(null == accessibility
										? void 0
										: accessibility.restoreFocus),
							}),
						),
						react.createElement(Accessibility, {
							...accessibility,
							hiddenTextDescribedById: draggableDescribedById,
						}),
					)
				}),
				NullContext = (0, react.createContext)(null),
				defaultRole = 'button',
				ID_PREFIX = 'Droppable'
			function useDraggable(_ref) {
				let { id, data, disabled = !1, attributes } = _ref
				const key = (0, utilities_esm.Ld)(ID_PREFIX),
					{
						activators,
						activatorEvent,
						active,
						activeNodeRect,
						ariaDescribedById,
						draggableNodes,
						over,
					} = (0, react.useContext)(InternalContext),
					{
						role = defaultRole,
						roleDescription = 'draggable',
						tabIndex = 0,
					} = null != attributes ? attributes : {},
					isDragging = (null == active ? void 0 : active.id) === id,
					transform = (0, react.useContext)(
						isDragging ? ActiveDraggableContext : NullContext,
					),
					[node, setNodeRef] = (0, utilities_esm.wm)(),
					[activatorNode, setActivatorNodeRef] = (0,
					utilities_esm.wm)(),
					listeners = (function useSyntheticListeners(listeners, id) {
						return (0, react.useMemo)(
							() =>
								listeners.reduce((acc, _ref) => {
									let { eventName, handler } = _ref
									return (
										(acc[eventName] = (event) => {
											handler(event, id)
										}),
										acc
									)
								}, {}),
							[listeners, id],
						)
					})(activators, id),
					dataRef = (0, utilities_esm.Ey)(data)
				;(0, utilities_esm.LI)(
					() => (
						draggableNodes.set(id, {
							id,
							key,
							node,
							activatorNode,
							data: dataRef,
						}),
						() => {
							const node = draggableNodes.get(id)
							node &&
								node.key === key &&
								draggableNodes.delete(id)
						}
					),
					[draggableNodes, id],
				)
				return {
					active,
					activatorEvent,
					activeNodeRect,
					attributes: (0, react.useMemo)(
						() => ({
							role,
							tabIndex,
							'aria-disabled': disabled,
							'aria-pressed':
								!(!isDragging || role !== defaultRole) ||
								void 0,
							'aria-roledescription': roleDescription,
							'aria-describedby': ariaDescribedById.draggable,
						}),
						[
							disabled,
							role,
							tabIndex,
							isDragging,
							roleDescription,
							ariaDescribedById.draggable,
						],
					),
					isDragging,
					listeners: disabled ? void 0 : listeners,
					node,
					over,
					setNodeRef,
					setActivatorNodeRef,
					transform,
				}
			}
			function useDndContext() {
				return (0, react.useContext)(PublicContext)
			}
			const ID_PREFIX$1 = 'Droppable',
				defaultResizeObserverConfig = { timeout: 25 }
			function useDroppable(_ref) {
				let { data, disabled = !1, id, resizeObserverConfig } = _ref
				const key = (0, utilities_esm.Ld)(ID_PREFIX$1),
					{ active, dispatch, over, measureDroppableContainers } = (0,
					react.useContext)(InternalContext),
					previous = (0, react.useRef)({ disabled }),
					resizeObserverConnected = (0, react.useRef)(!1),
					rect = (0, react.useRef)(null),
					callbackId = (0, react.useRef)(null),
					{
						disabled: resizeObserverDisabled,
						updateMeasurementsFor,
						timeout: resizeObserverTimeout,
					} = {
						...defaultResizeObserverConfig,
						...resizeObserverConfig,
					},
					ids = (0, utilities_esm.Ey)(
						null != updateMeasurementsFor
							? updateMeasurementsFor
							: id,
					),
					resizeObserver = useResizeObserver({
						callback: (0, react.useCallback)(() => {
							resizeObserverConnected.current
								? (null != callbackId.current &&
										clearTimeout(callbackId.current),
								  (callbackId.current = setTimeout(() => {
										measureDroppableContainers(
											Array.isArray(ids.current)
												? ids.current
												: [ids.current],
										),
											(callbackId.current = null)
								  }, resizeObserverTimeout)))
								: (resizeObserverConnected.current = !0)
						}, [resizeObserverTimeout]),
						disabled: resizeObserverDisabled || !active,
					}),
					handleNodeChange = (0, react.useCallback)(
						(newElement, previousElement) => {
							resizeObserver &&
								(previousElement &&
									(resizeObserver.unobserve(previousElement),
									(resizeObserverConnected.current = !1)),
								newElement &&
									resizeObserver.observe(newElement))
						},
						[resizeObserver],
					),
					[nodeRef, setNodeRef] = (0, utilities_esm.wm)(
						handleNodeChange,
					),
					dataRef = (0, utilities_esm.Ey)(data)
				return (
					(0, react.useEffect)(() => {
						resizeObserver &&
							nodeRef.current &&
							(resizeObserver.disconnect(),
							(resizeObserverConnected.current = !1),
							resizeObserver.observe(nodeRef.current))
					}, [nodeRef, resizeObserver]),
					(0, utilities_esm.LI)(
						() => (
							dispatch({
								type: Action.RegisterDroppable,
								element: {
									id,
									key,
									disabled,
									node: nodeRef,
									rect,
									data: dataRef,
								},
							}),
							() =>
								dispatch({
									type: Action.UnregisterDroppable,
									key,
									id,
								})
						),
						[id],
					),
					(0, react.useEffect)(() => {
						disabled !== previous.current.disabled &&
							(dispatch({
								type: Action.SetDroppableDisabled,
								id,
								key,
								disabled,
							}),
							(previous.current.disabled = disabled))
					}, [id, key, disabled, dispatch]),
					{
						active,
						rect,
						isOver: (null == over ? void 0 : over.id) === id,
						node: nodeRef,
						over,
						setNodeRef,
					}
				)
			}
			function AnimationManager(_ref) {
				let { animation, children } = _ref
				const [clonedChildren, setClonedChildren] = (0, react.useState)(
						null,
					),
					[element, setElement] = (0, react.useState)(null),
					previousChildren = (0, utilities_esm.D9)(children)
				return (
					children ||
						clonedChildren ||
						!previousChildren ||
						setClonedChildren(previousChildren),
					(0, utilities_esm.LI)(() => {
						if (!element) return
						const key =
								null == clonedChildren
									? void 0
									: clonedChildren.key,
							id =
								null == clonedChildren
									? void 0
									: clonedChildren.props.id
						null != key && null != id
							? Promise.resolve(animation(id, element)).then(
									() => {
										setClonedChildren(null)
									},
							  )
							: setClonedChildren(null)
					}, [animation, clonedChildren, element]),
					react.createElement(
						react.Fragment,
						null,
						children,
						clonedChildren
							? (0, react.cloneElement)(clonedChildren, {
									ref: setElement,
							  })
							: null,
					)
				)
			}
			const defaultTransform = { x: 0, y: 0, scaleX: 1, scaleY: 1 }
			function NullifiedContextProvider(_ref) {
				let { children } = _ref
				return react.createElement(
					InternalContext.Provider,
					{ value: defaultInternalContext },
					react.createElement(
						ActiveDraggableContext.Provider,
						{ value: defaultTransform },
						children,
					),
				)
			}
			const baseStyles = { position: 'fixed', touchAction: 'none' },
				defaultTransition = (activatorEvent) =>
					(0, utilities_esm.vd)(activatorEvent)
						? 'transform 250ms ease'
						: void 0,
				PositionedOverlay = (0, react.forwardRef)((_ref, ref) => {
					let {
						as,
						activatorEvent,
						adjustScale,
						children,
						className,
						rect,
						style,
						transform,
						transition = defaultTransition,
					} = _ref
					if (!rect) return null
					const scaleAdjustedTransform = adjustScale
							? transform
							: { ...transform, scaleX: 1, scaleY: 1 },
						styles = {
							...baseStyles,
							width: rect.width,
							height: rect.height,
							top: rect.top,
							left: rect.left,
							transform: utilities_esm.ux.Transform.toString(
								scaleAdjustedTransform,
							),
							transformOrigin:
								adjustScale && activatorEvent
									? getRelativeTransformOrigin(
											activatorEvent,
											rect,
									  )
									: void 0,
							transition:
								'function' == typeof transition
									? transition(activatorEvent)
									: transition,
							...style,
						}
					return react.createElement(
						as,
						{ className, style: styles, ref },
						children,
					)
				}),
				defaultDropAnimationSideEffects = (options) => (_ref) => {
					let { active, dragOverlay } = _ref
					const originalStyles = {},
						{ styles, className } = options
					if (null != styles && styles.active)
						for (const [key, value] of Object.entries(
							styles.active,
						))
							void 0 !== value &&
								((originalStyles[key] =
									active.node.style.getPropertyValue(key)),
								active.node.style.setProperty(key, value))
					if (null != styles && styles.dragOverlay)
						for (const [key, value] of Object.entries(
							styles.dragOverlay,
						))
							void 0 !== value &&
								dragOverlay.node.style.setProperty(key, value)
					return (
						null != className &&
							className.active &&
							active.node.classList.add(className.active),
						null != className &&
							className.dragOverlay &&
							dragOverlay.node.classList.add(
								className.dragOverlay,
							),
						function cleanup() {
							for (const [key, value] of Object.entries(
								originalStyles,
							))
								active.node.style.setProperty(key, value)
							null != className &&
								className.active &&
								active.node.classList.remove(className.active)
						}
					)
				},
				defaultDropAnimationConfiguration = {
					duration: 250,
					easing: 'ease',
					keyframes: (_ref2) => {
						let {
							transform: { initial, final },
						} = _ref2
						return [
							{
								transform:
									utilities_esm.ux.Transform.toString(
										initial,
									),
							},
							{
								transform:
									utilities_esm.ux.Transform.toString(final),
							},
						]
					},
					sideEffects: defaultDropAnimationSideEffects({
						styles: { active: { opacity: '0' } },
					}),
				}
			function useDropAnimation(_ref3) {
				let {
					config,
					draggableNodes,
					droppableContainers,
					measuringConfiguration,
				} = _ref3
				return (0, utilities_esm.zX)((id, node) => {
					if (null === config) return
					const activeDraggable = draggableNodes.get(id)
					if (!activeDraggable) return
					const activeNode = activeDraggable.node.current
					if (!activeNode) return
					const measurableNode = getMeasurableNode(node)
					if (!measurableNode) return
					const { transform } = (0, utilities_esm.Jj)(
							node,
						).getComputedStyle(node),
						parsedTransform = parseTransform(transform)
					if (!parsedTransform) return
					const animation =
						'function' == typeof config
							? config
							: (function createDefaultDropAnimation(options) {
									const {
										duration,
										easing,
										sideEffects,
										keyframes,
									} = {
										...defaultDropAnimationConfiguration,
										...options,
									}
									return (_ref4) => {
										let {
											active,
											dragOverlay,
											transform,
											...rest
										} = _ref4
										if (!duration) return
										const delta = {
												x:
													dragOverlay.rect.left -
													active.rect.left,
												y:
													dragOverlay.rect.top -
													active.rect.top,
											},
											scale = {
												scaleX:
													1 !== transform.scaleX
														? (active.rect.width *
																transform.scaleX) /
														  dragOverlay.rect.width
														: 1,
												scaleY:
													1 !== transform.scaleY
														? (active.rect.height *
																transform.scaleY) /
														  dragOverlay.rect
																.height
														: 1,
											},
											finalTransform = {
												x: transform.x - delta.x,
												y: transform.y - delta.y,
												...scale,
											},
											animationKeyframes = keyframes({
												...rest,
												active,
												dragOverlay,
												transform: {
													initial: transform,
													final: finalTransform,
												},
											}),
											[firstKeyframe] =
												animationKeyframes,
											lastKeyframe =
												animationKeyframes[
													animationKeyframes.length -
														1
												]
										if (
											JSON.stringify(firstKeyframe) ===
											JSON.stringify(lastKeyframe)
										)
											return
										const cleanup =
												null == sideEffects
													? void 0
													: sideEffects({
															active,
															dragOverlay,
															...rest,
													  }),
											animation =
												dragOverlay.node.animate(
													animationKeyframes,
													{
														duration,
														easing,
														fill: 'forwards',
													},
												)
										return new Promise((resolve) => {
											animation.onfinish = () => {
												null == cleanup || cleanup(),
													resolve()
											}
										})
									}
							  })(config)
					return (
						scrollIntoViewIfNeeded(
							activeNode,
							measuringConfiguration.draggable.measure,
						),
						animation({
							active: {
								id,
								data: activeDraggable.data,
								node: activeNode,
								rect: measuringConfiguration.draggable.measure(
									activeNode,
								),
							},
							draggableNodes,
							dragOverlay: {
								node,
								rect: measuringConfiguration.dragOverlay.measure(
									measurableNode,
								),
							},
							droppableContainers,
							measuringConfiguration,
							transform: parsedTransform,
						})
					)
				})
			}
			let key = 0
			function useKey(id) {
				return (0, react.useMemo)(() => {
					if (null != id) return key++, key
				}, [id])
			}
			const DragOverlay = react.memo((_ref) => {
				let {
					adjustScale = !1,
					children,
					dropAnimation: dropAnimationConfig,
					style,
					transition,
					modifiers,
					wrapperElement = 'div',
					className,
					zIndex = 999,
				} = _ref
				const {
						activatorEvent,
						active,
						activeNodeRect,
						containerNodeRect,
						draggableNodes,
						droppableContainers,
						dragOverlay,
						over,
						measuringConfiguration,
						scrollableAncestors,
						scrollableAncestorRects,
						windowRect,
					} = useDndContext(),
					transform = (0, react.useContext)(ActiveDraggableContext),
					key = useKey(null == active ? void 0 : active.id),
					modifiedTransform = applyModifiers(modifiers, {
						activatorEvent,
						active,
						activeNodeRect,
						containerNodeRect,
						draggingNodeRect: dragOverlay.rect,
						over,
						overlayNodeRect: dragOverlay.rect,
						scrollableAncestors,
						scrollableAncestorRects,
						transform,
						windowRect,
					}),
					initialRect = useInitialValue(activeNodeRect),
					dropAnimation = useDropAnimation({
						config: dropAnimationConfig,
						draggableNodes,
						droppableContainers,
						measuringConfiguration,
					}),
					ref = initialRect ? dragOverlay.setRef : void 0
				return react.createElement(
					NullifiedContextProvider,
					null,
					react.createElement(
						AnimationManager,
						{ animation: dropAnimation },
						active && key
							? react.createElement(
									PositionedOverlay,
									{
										key,
										id: active.id,
										ref,
										as: wrapperElement,
										activatorEvent,
										adjustScale,
										className,
										transition,
										rect: initialRect,
										style: { zIndex, ...style },
										transform: modifiedTransform,
									},
									children,
							  )
							: null,
					),
				)
			})
		},
		'./node_modules/@dnd-kit/sortable/dist/sortable.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				Fo: () => SortableContext,
				Rp: () => arrayMove,
				is: () => sortableKeyboardCoordinates,
				nB: () => useSortable,
				qw: () => verticalListSortingStrategy,
			})
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/react/index.js',
				),
				_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						'./node_modules/@dnd-kit/core/dist/core.esm.js',
					),
				_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						'./node_modules/@dnd-kit/utilities/dist/utilities.esm.js',
					)
			function arrayMove(array, from, to) {
				const newArray = array.slice()
				return (
					newArray.splice(
						to < 0 ? newArray.length + to : to,
						0,
						newArray.splice(from, 1)[0],
					),
					newArray
				)
			}
			function getSortedRects(items, rects) {
				return items.reduce((accumulator, id, index) => {
					const rect = rects.get(id)
					return rect && (accumulator[index] = rect), accumulator
				}, Array(items.length))
			}
			function isValidIndex(index) {
				return null !== index && index >= 0
			}
			const rectSortingStrategy = (_ref) => {
					let { rects, activeIndex, overIndex, index } = _ref
					const newRects = arrayMove(rects, overIndex, activeIndex),
						oldRect = rects[index],
						newRect = newRects[index]
					return newRect && oldRect
						? {
								x: newRect.left - oldRect.left,
								y: newRect.top - oldRect.top,
								scaleX: newRect.width / oldRect.width,
								scaleY: newRect.height / oldRect.height,
						  }
						: null
				},
				defaultScale$1 = { scaleX: 1, scaleY: 1 },
				verticalListSortingStrategy = (_ref) => {
					var _rects$activeIndex
					let {
						activeIndex,
						activeNodeRect: fallbackActiveRect,
						index,
						rects,
						overIndex,
					} = _ref
					const activeNodeRect =
						null != (_rects$activeIndex = rects[activeIndex])
							? _rects$activeIndex
							: fallbackActiveRect
					if (!activeNodeRect) return null
					if (index === activeIndex) {
						const overIndexRect = rects[overIndex]
						return overIndexRect
							? {
									x: 0,
									y:
										activeIndex < overIndex
											? overIndexRect.top +
											  overIndexRect.height -
											  (activeNodeRect.top +
													activeNodeRect.height)
											: overIndexRect.top -
											  activeNodeRect.top,
									...defaultScale$1,
							  }
							: null
					}
					const itemGap = (function getItemGap$1(
						clientRects,
						index,
						activeIndex,
					) {
						const currentRect = clientRects[index],
							previousRect = clientRects[index - 1],
							nextRect = clientRects[index + 1]
						if (!currentRect) return 0
						if (activeIndex < index)
							return previousRect
								? currentRect.top -
										(previousRect.top + previousRect.height)
								: nextRect
								? nextRect.top -
								  (currentRect.top + currentRect.height)
								: 0
						return nextRect
							? nextRect.top -
									(currentRect.top + currentRect.height)
							: previousRect
							? currentRect.top -
							  (previousRect.top + previousRect.height)
							: 0
					})(rects, index, activeIndex)
					return index > activeIndex && index <= overIndex
						? {
								x: 0,
								y: -activeNodeRect.height - itemGap,
								...defaultScale$1,
						  }
						: index < activeIndex && index >= overIndex
						? {
								x: 0,
								y: activeNodeRect.height + itemGap,
								...defaultScale$1,
						  }
						: { x: 0, y: 0, ...defaultScale$1 }
				}
			const ID_PREFIX = 'Sortable',
				Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
					activeIndex: -1,
					containerId: ID_PREFIX,
					disableTransforms: !1,
					items: [],
					overIndex: -1,
					useDragOverlay: !1,
					sortedRects: [],
					strategy: rectSortingStrategy,
					disabled: { draggable: !1, droppable: !1 },
				})
			function SortableContext(_ref) {
				let {
					children,
					id,
					items: userDefinedItems,
					strategy = rectSortingStrategy,
					disabled: disabledProp = !1,
				} = _ref
				const {
						active,
						dragOverlay,
						droppableRects,
						over,
						measureDroppableContainers,
					} = (0, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.Cj)(),
					containerId = (0,
					_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.Ld)(
						ID_PREFIX,
						id,
					),
					useDragOverlay = Boolean(null !== dragOverlay.rect),
					items = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
						() =>
							userDefinedItems.map((item) =>
								'object' == typeof item && 'id' in item
									? item.id
									: item,
							),
						[userDefinedItems],
					),
					isDragging = null != active,
					activeIndex = active ? items.indexOf(active.id) : -1,
					overIndex = over ? items.indexOf(over.id) : -1,
					previousItemsRef = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef)(items),
					itemsHaveChanged = !(function itemsEqual(a, b) {
						if (a === b) return !0
						if (a.length !== b.length) return !1
						for (let i = 0; i < a.length; i++)
							if (a[i] !== b[i]) return !1
						return !0
					})(items, previousItemsRef.current),
					disableTransforms =
						(-1 !== overIndex && -1 === activeIndex) ||
						itemsHaveChanged,
					disabled = (function normalizeDisabled(disabled) {
						return 'boolean' == typeof disabled
							? { draggable: disabled, droppable: disabled }
							: disabled
					})(disabledProp)
				;(0, _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.LI)(() => {
					itemsHaveChanged &&
						isDragging &&
						measureDroppableContainers(items)
				}, [
					itemsHaveChanged,
					items,
					isDragging,
					measureDroppableContainers,
				]),
					(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
						previousItemsRef.current = items
					}, [items])
				const contextValue = (0,
				react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
					() => ({
						activeIndex,
						containerId,
						disabled,
						disableTransforms,
						items,
						overIndex,
						useDragOverlay,
						sortedRects: getSortedRects(items, droppableRects),
						strategy,
					}),
					[
						activeIndex,
						containerId,
						disabled.draggable,
						disabled.droppable,
						disableTransforms,
						items,
						overIndex,
						droppableRects,
						useDragOverlay,
						strategy,
					],
				)
				return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
					Context.Provider,
					{ value: contextValue },
					children,
				)
			}
			const defaultNewIndexGetter = (_ref) => {
					let { id, items, activeIndex, overIndex } = _ref
					return arrayMove(items, activeIndex, overIndex).indexOf(id)
				},
				defaultAnimateLayoutChanges = (_ref2) => {
					let {
						containerId,
						isSorting,
						wasDragging,
						index,
						items,
						newIndex,
						previousItems,
						previousContainerId,
						transition,
					} = _ref2
					return (
						!(!transition || !wasDragging) &&
						(previousItems === items || index !== newIndex) &&
						(!!isSorting ||
							(newIndex !== index &&
								containerId === previousContainerId))
					)
				},
				defaultTransition = { duration: 200, easing: 'ease' },
				transitionProperty = 'transform',
				disabledTransition =
					_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.ux.Transition.toString(
						{
							property: transitionProperty,
							duration: 0,
							easing: 'linear',
						},
					),
				defaultAttributes = { roleDescription: 'sortable' }
			function useSortable(_ref) {
				let {
					animateLayoutChanges = defaultAnimateLayoutChanges,
					attributes: userDefinedAttributes,
					disabled: localDisabled,
					data: customData,
					getNewIndex = defaultNewIndexGetter,
					id,
					strategy: localStrategy,
					resizeObserverConfig,
					transition = defaultTransition,
				} = _ref
				const {
						items,
						containerId,
						activeIndex,
						disabled: globalDisabled,
						disableTransforms,
						sortedRects,
						overIndex,
						useDragOverlay,
						strategy: globalStrategy,
					} = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
						Context,
					),
					disabled = (function normalizeLocalDisabled(
						localDisabled,
						globalDisabled,
					) {
						var _localDisabled$dragga, _localDisabled$droppa
						if ('boolean' == typeof localDisabled)
							return { draggable: localDisabled, droppable: !1 }
						return {
							draggable:
								null !=
								(_localDisabled$dragga =
									null == localDisabled
										? void 0
										: localDisabled.draggable)
									? _localDisabled$dragga
									: globalDisabled.draggable,
							droppable:
								null !=
								(_localDisabled$droppa =
									null == localDisabled
										? void 0
										: localDisabled.droppable)
									? _localDisabled$droppa
									: globalDisabled.droppable,
						}
					})(localDisabled, globalDisabled),
					index = items.indexOf(id),
					data = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
						() => ({
							sortable: { containerId, index, items },
							...customData,
						}),
						[containerId, customData, index, items],
					),
					itemsAfterCurrentSortable = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
						() => items.slice(items.indexOf(id)),
						[items, id],
					),
					{
						rect,
						node,
						isOver,
						setNodeRef: setDroppableNodeRef,
					} = (0, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.Zj)({
						id,
						data,
						disabled: disabled.droppable,
						resizeObserverConfig: {
							updateMeasurementsFor: itemsAfterCurrentSortable,
							...resizeObserverConfig,
						},
					}),
					{
						active,
						activatorEvent,
						activeNodeRect,
						attributes,
						setNodeRef: setDraggableNodeRef,
						listeners,
						isDragging,
						over,
						setActivatorNodeRef,
						transform,
					} = (0, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.O1)({
						id,
						data,
						attributes: {
							...defaultAttributes,
							...userDefinedAttributes,
						},
						disabled: disabled.draggable,
					}),
					setNodeRef = (0,
					_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.HB)(
						setDroppableNodeRef,
						setDraggableNodeRef,
					),
					isSorting = Boolean(active),
					displaceItem =
						isSorting &&
						!disableTransforms &&
						isValidIndex(activeIndex) &&
						isValidIndex(overIndex),
					shouldDisplaceDragSource = !useDragOverlay && isDragging,
					dragSourceDisplacement =
						shouldDisplaceDragSource && displaceItem
							? transform
							: null,
					finalTransform = displaceItem
						? null != dragSourceDisplacement
							? dragSourceDisplacement
							: (null != localStrategy
									? localStrategy
									: globalStrategy)({
									rects: sortedRects,
									activeNodeRect,
									activeIndex,
									overIndex,
									index,
							  })
						: null,
					newIndex =
						isValidIndex(activeIndex) && isValidIndex(overIndex)
							? getNewIndex({ id, items, activeIndex, overIndex })
							: index,
					activeId = null == active ? void 0 : active.id,
					previous = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
						activeId,
						items,
						newIndex,
						containerId,
					}),
					itemsHaveChanged = items !== previous.current.items,
					shouldAnimateLayoutChanges = animateLayoutChanges({
						active,
						containerId,
						isDragging,
						isSorting,
						id,
						index,
						items,
						newIndex: previous.current.newIndex,
						previousItems: previous.current.items,
						previousContainerId: previous.current.containerId,
						transition,
						wasDragging: null != previous.current.activeId,
					}),
					derivedTransform = (function useDerivedTransform(_ref) {
						let { disabled, index, node, rect } = _ref
						const [derivedTransform, setDerivedtransform] = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
							previousIndex = (0,
							react__WEBPACK_IMPORTED_MODULE_0__.useRef)(index)
						return (
							(0,
							_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.LI)(() => {
								if (
									!disabled &&
									index !== previousIndex.current &&
									node.current
								) {
									const initial = rect.current
									if (initial) {
										const current = (0,
											_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.VK)(
												node.current,
												{ ignoreTransform: !0 },
											),
											delta = {
												x: initial.left - current.left,
												y: initial.top - current.top,
												scaleX:
													initial.width /
													current.width,
												scaleY:
													initial.height /
													current.height,
											}
										;(delta.x || delta.y) &&
											setDerivedtransform(delta)
									}
								}
								index !== previousIndex.current &&
									(previousIndex.current = index)
							}, [disabled, index, node, rect]),
							(0,
							react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
								derivedTransform && setDerivedtransform(null)
							}, [derivedTransform]),
							derivedTransform
						)
					})({
						disabled: !shouldAnimateLayoutChanges,
						index,
						node,
						rect,
					})
				return (
					(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
						isSorting &&
							previous.current.newIndex !== newIndex &&
							(previous.current.newIndex = newIndex),
							containerId !== previous.current.containerId &&
								(previous.current.containerId = containerId),
							items !== previous.current.items &&
								(previous.current.items = items)
					}, [isSorting, newIndex, containerId, items]),
					(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
						if (activeId === previous.current.activeId) return
						if (activeId && !previous.current.activeId)
							return void (previous.current.activeId = activeId)
						const timeoutId = setTimeout(() => {
							previous.current.activeId = activeId
						}, 50)
						return () => clearTimeout(timeoutId)
					}, [activeId]),
					{
						active,
						activeIndex,
						attributes,
						data,
						rect,
						index,
						newIndex,
						items,
						isOver,
						isSorting,
						isDragging,
						listeners,
						node,
						overIndex,
						over,
						setNodeRef,
						setActivatorNodeRef,
						setDroppableNodeRef,
						setDraggableNodeRef,
						transform:
							null != derivedTransform
								? derivedTransform
								: finalTransform,
						transition: (function getTransition() {
							if (
								derivedTransform ||
								(itemsHaveChanged &&
									previous.current.newIndex === index)
							)
								return disabledTransition
							if (
								(shouldDisplaceDragSource &&
									!(0,
									_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.vd)(
										activatorEvent,
									)) ||
								!transition
							)
								return
							if (isSorting || shouldAnimateLayoutChanges)
								return _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.ux.Transition.toString(
									{
										...transition,
										property: transitionProperty,
									},
								)
							return
						})(),
					}
				)
			}
			function hasSortableData(entry) {
				if (!entry) return !1
				const data = entry.data.current
				return !!(
					data &&
					'sortable' in data &&
					'object' == typeof data.sortable &&
					'containerId' in data.sortable &&
					'items' in data.sortable &&
					'index' in data.sortable
				)
			}
			const directions = [
					_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.g4.Down,
					_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.g4.Right,
					_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.g4.Up,
					_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.g4.Left,
				],
				sortableKeyboardCoordinates = (event, _ref) => {
					let {
						context: {
							active,
							collisionRect,
							droppableRects,
							droppableContainers,
							over,
							scrollableAncestors,
						},
					} = _ref
					if (directions.includes(event.code)) {
						if ((event.preventDefault(), !active || !collisionRect))
							return
						const filteredContainers = []
						droppableContainers.getEnabled().forEach((entry) => {
							if (!entry || (null != entry && entry.disabled))
								return
							const rect = droppableRects.get(entry.id)
							if (rect)
								switch (event.code) {
									case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__
										.g4.Down:
										collisionRect.top < rect.top &&
											filteredContainers.push(entry)
										break
									case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__
										.g4.Up:
										collisionRect.top > rect.top &&
											filteredContainers.push(entry)
										break
									case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__
										.g4.Left:
										collisionRect.left > rect.left &&
											filteredContainers.push(entry)
										break
									case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__
										.g4.Right:
										collisionRect.left < rect.left &&
											filteredContainers.push(entry)
								}
						})
						const collisions = (0,
						_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.ey)({
							active,
							collisionRect,
							droppableRects,
							droppableContainers: filteredContainers,
							pointerCoordinates: null,
						})
						let closestId = (0,
						_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__._8)(
							collisions,
							'id',
						)
						if (
							(closestId === (null == over ? void 0 : over.id) &&
								collisions.length > 1 &&
								(closestId = collisions[1].id),
							null != closestId)
						) {
							const activeDroppable = droppableContainers.get(
									active.id,
								),
								newDroppable =
									droppableContainers.get(closestId),
								newRect = newDroppable
									? droppableRects.get(newDroppable.id)
									: null,
								newNode =
									null == newDroppable
										? void 0
										: newDroppable.node.current
							if (
								newNode &&
								newRect &&
								activeDroppable &&
								newDroppable
							) {
								const hasDifferentScrollAncestors = (0,
									_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.hI)(
										newNode,
									).some(
										(element, index) =>
											scrollableAncestors[index] !==
											element,
									),
									hasSameContainer = isSameContainer(
										activeDroppable,
										newDroppable,
									),
									isAfterActive = (function isAfter(a, b) {
										if (
											!hasSortableData(a) ||
											!hasSortableData(b)
										)
											return !1
										if (!isSameContainer(a, b)) return !1
										return (
											a.data.current.sortable.index <
											b.data.current.sortable.index
										)
									})(activeDroppable, newDroppable),
									offset =
										hasDifferentScrollAncestors ||
										!hasSameContainer
											? { x: 0, y: 0 }
											: {
													x: isAfterActive
														? collisionRect.width -
														  newRect.width
														: 0,
													y: isAfterActive
														? collisionRect.height -
														  newRect.height
														: 0,
											  },
									rectCoordinates = {
										x: newRect.left,
										y: newRect.top,
									}
								return offset.x && offset.y
									? rectCoordinates
									: (0,
									  _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.$X)(
											rectCoordinates,
											offset,
									  )
							}
						}
					}
				}
			function isSameContainer(a, b) {
				return (
					!(!hasSortableData(a) || !hasSortableData(b)) &&
					a.data.current.sortable.containerId ===
						b.data.current.sortable.containerId
				)
			}
		},
		'./node_modules/@dnd-kit/utilities/dist/utilities.esm.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				$X: () => subtract,
				D9: () => usePrevious,
				DC: () => getEventCoordinates,
				Ey: () => useLatestValue,
				FJ: () => isWindow,
				Gj: () => useLazyMemo,
				HB: () => useCombinedRefs,
				IH: () => add,
				Jj: () => getWindow,
				LI: () => useIsomorphicLayoutEffect,
				Ld: () => useUniqueId,
				Nq: () => canUseDOM,
				Re: () => isHTMLElement,
				UG: () => isNode,
				Yz: () => useInterval,
				qk: () => isDocument,
				r3: () => getOwnerDocument,
				so: () => findFirstFocusableNode,
				ux: () => CSS,
				vZ: () => isSVGElement,
				vd: () => isKeyboardEvent,
				wm: () => useNodeRef,
				zX: () => useEvent,
			})
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				'./node_modules/react/index.js',
			)
			function useCombinedRefs() {
				for (
					var _len = arguments.length,
						refs = new Array(_len),
						_key = 0;
					_key < _len;
					_key++
				)
					refs[_key] = arguments[_key]
				return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
					() => (node) => {
						refs.forEach((ref) => ref(node))
					},
					refs,
				)
			}
			const canUseDOM =
				'undefined' != typeof window &&
				void 0 !== window.document &&
				void 0 !== window.document.createElement
			function isWindow(element) {
				const elementString = Object.prototype.toString.call(element)
				return (
					'[object Window]' === elementString ||
					'[object global]' === elementString
				)
			}
			function isNode(node) {
				return 'nodeType' in node
			}
			function getWindow(target) {
				var _target$ownerDocument, _target$ownerDocument2
				return target
					? isWindow(target)
						? target
						: isNode(target) &&
						  null !=
								(_target$ownerDocument =
									null ==
									(_target$ownerDocument2 =
										target.ownerDocument)
										? void 0
										: _target$ownerDocument2.defaultView)
						? _target$ownerDocument
						: window
					: window
			}
			function isDocument(node) {
				const { Document } = getWindow(node)
				return node instanceof Document
			}
			function isHTMLElement(node) {
				return (
					!isWindow(node) &&
					node instanceof getWindow(node).HTMLElement
				)
			}
			function isSVGElement(node) {
				return node instanceof getWindow(node).SVGElement
			}
			function getOwnerDocument(target) {
				return target
					? isWindow(target)
						? target.document
						: isNode(target)
						? isDocument(target)
							? target
							: isHTMLElement(target)
							? target.ownerDocument
							: document
						: document
					: document
			}
			const useIsomorphicLayoutEffect = canUseDOM
				? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
				: react__WEBPACK_IMPORTED_MODULE_0__.useEffect
			function useEvent(handler) {
				const handlerRef = (0,
				react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler)
				return (
					useIsomorphicLayoutEffect(() => {
						handlerRef.current = handler
					}),
					(0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
						function () {
							for (
								var _len = arguments.length,
									args = new Array(_len),
									_key = 0;
								_key < _len;
								_key++
							)
								args[_key] = arguments[_key]
							return null == handlerRef.current
								? void 0
								: handlerRef.current(...args)
						},
						[],
					)
				)
			}
			function useInterval() {
				const intervalRef = (0,
				react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null)
				return [
					(0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
						(listener, duration) => {
							intervalRef.current = setInterval(
								listener,
								duration,
							)
						},
						[],
					),
					(0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
						null !== intervalRef.current &&
							(clearInterval(intervalRef.current),
							(intervalRef.current = null))
					}, []),
				]
			}
			function useLatestValue(value, dependencies) {
				void 0 === dependencies && (dependencies = [value])
				const valueRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
					value,
				)
				return (
					useIsomorphicLayoutEffect(() => {
						valueRef.current !== value && (valueRef.current = value)
					}, dependencies),
					valueRef
				)
			}
			function useLazyMemo(callback, dependencies) {
				const valueRef = (0,
				react__WEBPACK_IMPORTED_MODULE_0__.useRef)()
				return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
					const newValue = callback(valueRef.current)
					return (valueRef.current = newValue), newValue
				}, [...dependencies])
			}
			function useNodeRef(onChange) {
				const onChangeHandler = useEvent(onChange),
					node = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
					setNodeRef = (0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
						(element) => {
							element !== node.current &&
								(null == onChangeHandler ||
									onChangeHandler(element, node.current)),
								(node.current = element)
						},
						[],
					)
				return [node, setNodeRef]
			}
			function usePrevious(value) {
				const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)()
				return (
					(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
						ref.current = value
					}, [value]),
					ref.current
				)
			}
			let ids = {}
			function useUniqueId(prefix, value) {
				return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
					if (value) return value
					const id = null == ids[prefix] ? 0 : ids[prefix] + 1
					return (ids[prefix] = id), prefix + '-' + id
				}, [prefix, value])
			}
			function createAdjustmentFn(modifier) {
				return function (object) {
					for (
						var _len = arguments.length,
							adjustments = new Array(_len > 1 ? _len - 1 : 0),
							_key = 1;
						_key < _len;
						_key++
					)
						adjustments[_key - 1] = arguments[_key]
					return adjustments.reduce(
						(accumulator, adjustment) => {
							const entries = Object.entries(adjustment)
							for (const [key, valueAdjustment] of entries) {
								const value = accumulator[key]
								null != value &&
									(accumulator[key] =
										value + modifier * valueAdjustment)
							}
							return accumulator
						},
						{ ...object },
					)
				}
			}
			const add = createAdjustmentFn(1),
				subtract = createAdjustmentFn(-1)
			function isKeyboardEvent(event) {
				if (!event) return !1
				const { KeyboardEvent } = getWindow(event.target)
				return KeyboardEvent && event instanceof KeyboardEvent
			}
			function getEventCoordinates(event) {
				if (
					(function isTouchEvent(event) {
						if (!event) return !1
						const { TouchEvent } = getWindow(event.target)
						return TouchEvent && event instanceof TouchEvent
					})(event)
				) {
					if (event.touches && event.touches.length) {
						const { clientX: x, clientY: y } = event.touches[0]
						return { x, y }
					}
					if (event.changedTouches && event.changedTouches.length) {
						const { clientX: x, clientY: y } =
							event.changedTouches[0]
						return { x, y }
					}
				}
				return (function hasViewportRelativeCoordinates(event) {
					return 'clientX' in event && 'clientY' in event
				})(event)
					? { x: event.clientX, y: event.clientY }
					: null
			}
			const CSS = Object.freeze({
					Translate: {
						toString(transform) {
							if (!transform) return
							const { x, y } = transform
							return (
								'translate3d(' +
								(x ? Math.round(x) : 0) +
								'px, ' +
								(y ? Math.round(y) : 0) +
								'px, 0)'
							)
						},
					},
					Scale: {
						toString(transform) {
							if (!transform) return
							const { scaleX, scaleY } = transform
							return (
								'scaleX(' + scaleX + ') scaleY(' + scaleY + ')'
							)
						},
					},
					Transform: {
						toString(transform) {
							if (transform)
								return [
									CSS.Translate.toString(transform),
									CSS.Scale.toString(transform),
								].join(' ')
						},
					},
					Transition: {
						toString(_ref) {
							let { property, duration, easing } = _ref
							return property + ' ' + duration + 'ms ' + easing
						},
					},
				}),
				SELECTOR =
					'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]'
			function findFirstFocusableNode(element) {
				return element.matches(SELECTOR)
					? element
					: element.querySelector(SELECTOR)
			}
		},
		'./node_modules/react-icons/lib/esm/index.js': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			__webpack_require__.d(__webpack_exports__, {
				w_: () => GenIcon,
				Pd: () => IconContext,
			})
			var react = __webpack_require__('./node_modules/react/index.js'),
				DefaultContext = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0,
				},
				IconContext =
					react.createContext && react.createContext(DefaultContext),
				__assign = function () {
					return (
						(__assign =
							Object.assign ||
							function (t) {
								for (
									var s, i = 1, n = arguments.length;
									i < n;
									i++
								)
									for (var p in (s = arguments[i]))
										Object.prototype.hasOwnProperty.call(
											s,
											p,
										) && (t[p] = s[p])
								return t
							}),
						__assign.apply(this, arguments)
					)
				},
				__rest = function (s, e) {
					var t = {}
					for (var p in s)
						Object.prototype.hasOwnProperty.call(s, p) &&
							e.indexOf(p) < 0 &&
							(t[p] = s[p])
					if (
						null != s &&
						'function' == typeof Object.getOwnPropertySymbols
					) {
						var i = 0
						for (
							p = Object.getOwnPropertySymbols(s);
							i < p.length;
							i++
						)
							e.indexOf(p[i]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(
									s,
									p[i],
								) &&
								(t[p[i]] = s[p[i]])
					}
					return t
				}
			function Tree2Element(tree) {
				return (
					tree &&
					tree.map(function (node, i) {
						return react.createElement(
							node.tag,
							__assign({ key: i }, node.attr),
							Tree2Element(node.child),
						)
					})
				)
			}
			function GenIcon(data) {
				return function (props) {
					return react.createElement(
						IconBase,
						__assign({ attr: __assign({}, data.attr) }, props),
						Tree2Element(data.child),
					)
				}
			}
			function IconBase(props) {
				var elem = function (conf) {
					var className,
						attr = props.attr,
						size = props.size,
						title = props.title,
						svgProps = __rest(props, ['attr', 'size', 'title']),
						computedSize = size || conf.size || '1em'
					return (
						conf.className && (className = conf.className),
						props.className &&
							(className =
								(className ? className + ' ' : '') +
								props.className),
						react.createElement(
							'svg',
							__assign(
								{
									stroke: 'currentColor',
									fill: 'currentColor',
									strokeWidth: '0',
								},
								conf.attr,
								attr,
								svgProps,
								{
									className,
									style: __assign(
										__assign(
											{
												color:
													props.color || conf.color,
											},
											conf.style,
										),
										props.style,
									),
									height: computedSize,
									width: computedSize,
									xmlns: 'http://www.w3.org/2000/svg',
								},
							),
							title && react.createElement('title', null, title),
							props.children,
						)
					)
				}
				return void 0 !== IconContext
					? react.createElement(
							IconContext.Consumer,
							null,
							function (conf) {
								return elem(conf)
							},
					  )
					: elem(DefaultContext)
			}
		},
	},
])
