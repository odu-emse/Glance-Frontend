;(() => {
	'use strict'
	var deferred,
		leafPrototypes,
		getProto,
		inProgress,
		__webpack_modules__ = {},
		__webpack_module_cache__ = {}
	function __webpack_require__(moduleId) {
		var cachedModule = __webpack_module_cache__[moduleId]
		if (void 0 !== cachedModule) return cachedModule.exports
		var module = (__webpack_module_cache__[moduleId] = {
			id: moduleId,
			loaded: !1,
			exports: {},
		})
		return (
			__webpack_modules__[moduleId].call(
				module.exports,
				module,
				module.exports,
				__webpack_require__,
			),
			(module.loaded = !0),
			module.exports
		)
	}
	;(__webpack_require__.m = __webpack_modules__),
		(__webpack_require__.amdO = {}),
		(deferred = []),
		(__webpack_require__.O = (result, chunkIds, fn, priority) => {
			if (!chunkIds) {
				var notFulfilled = 1 / 0
				for (i = 0; i < deferred.length; i++) {
					for (
						var [chunkIds, fn, priority] = deferred[i],
							fulfilled = !0,
							j = 0;
						j < chunkIds.length;
						j++
					)
						(!1 & priority || notFulfilled >= priority) &&
						Object.keys(__webpack_require__.O).every((key) =>
							__webpack_require__.O[key](chunkIds[j]),
						)
							? chunkIds.splice(j--, 1)
							: ((fulfilled = !1),
							  priority < notFulfilled &&
									(notFulfilled = priority))
					if (fulfilled) {
						deferred.splice(i--, 1)
						var r = fn()
						void 0 !== r && (result = r)
					}
				}
				return result
			}
			priority = priority || 0
			for (
				var i = deferred.length;
				i > 0 && deferred[i - 1][2] > priority;
				i--
			)
				deferred[i] = deferred[i - 1]
			deferred[i] = [chunkIds, fn, priority]
		}),
		(__webpack_require__.n = (module) => {
			var getter =
				module && module.__esModule
					? () => module.default
					: () => module
			return __webpack_require__.d(getter, { a: getter }), getter
		}),
		(getProto = Object.getPrototypeOf
			? (obj) => Object.getPrototypeOf(obj)
			: (obj) => obj.__proto__),
		(__webpack_require__.t = function (value, mode) {
			if ((1 & mode && (value = this(value)), 8 & mode)) return value
			if ('object' == typeof value && value) {
				if (4 & mode && value.__esModule) return value
				if (16 & mode && 'function' == typeof value.then) return value
			}
			var ns = Object.create(null)
			__webpack_require__.r(ns)
			var def = {}
			leafPrototypes = leafPrototypes || [
				null,
				getProto({}),
				getProto([]),
				getProto(getProto),
			]
			for (
				var current = 2 & mode && value;
				'object' == typeof current && !~leafPrototypes.indexOf(current);
				current = getProto(current)
			)
				Object.getOwnPropertyNames(current).forEach(
					(key) => (def[key] = () => value[key]),
				)
			return (
				(def.default = () => value), __webpack_require__.d(ns, def), ns
			)
		}),
		(__webpack_require__.d = (exports, definition) => {
			for (var key in definition)
				__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key) &&
					Object.defineProperty(exports, key, {
						enumerable: !0,
						get: definition[key],
					})
		}),
		(__webpack_require__.f = {}),
		(__webpack_require__.e = (chunkId) =>
			Promise.all(
				Object.keys(__webpack_require__.f).reduce(
					(promises, key) => (
						__webpack_require__.f[key](chunkId, promises), promises
					),
					[],
				),
			)),
		(__webpack_require__.u = (chunkId) =>
			(({
				138: 'common-button-button-stories',
				374: 'common-community-watched_threads_sidebar-watched_threads_sidebar-stories',
				409: 'pages-community_page-community_page-stories',
				625: 'common-links-anchor-anchor-stories',
				767: 'common-content_types-video-video_player-video_player-stories',
				818: 'pages-admin_panel_page-lesson_page-lessonpage-stories',
				896: 'pages-user-user_profile-user_profile-stories',
				985: 'pages-errors-page_not_found-page_not_found-stories',
				1109: 'common-pages-module_list-module_list-stories',
				1267: 'common-forms-inputs-text_area-text_area-stories',
				1437: 'common-message_input-message_input-stories',
				1458: 'common-admin_panel-content_area-stories',
				1478: 'pages-communities-ThreadCreation-thread_page-stories',
				1577: 'common-forms-inputs-input-Oldinput-stories',
				1660: 'common-forms-inputs-lesson_link-lesson_link-stories',
				2268: 'common-pages-admin_panel-module_section_editor-module_section_editor-stories',
				2286: 'common-tabs_panel-tabs_panel-stories',
				2503: 'common-charts-radar-radar-stories',
				2636: 'pages-admin_panel_page-modules-modules-stories',
				2717: 'pages-modules-module-lessons-lesson-module_item-module_item-stories',
				2812: 'common-toggle-toggle-stories',
				2890: 'common-module_card-module_card-stories',
				3013: 'common-pages-sidebar-sidebar_item-sidebar_item-stories',
				3055: 'common-pages-sidebar-leftsidebar-stories',
				3296: 'common-chat-chat_history-chat_history-stories',
				3551: 'common-chat-bubble_message-bubble_message-stories',
				3930: 'common-community-threads-comments-comments_hierarchy-stories',
				3943: 'pages-errors-request_failed-request_failed-stories',
				4462: 'common-content_types-video-video_chip-video_chip-stories',
				4780: 'common-community-watched_threads-watched_threads-stories',
				5e3: 'common-charts-pie-pie-stories',
				5505: 'common-forms-form-form-stories',
				5601: 'common-pages-active_modules-active_modules-stories',
				5815: 'common-pages-admin_panel-module_page_editor-lesson-lesson-stories',
				6030: 'common-pages-layouts-layout-layout-stories',
				6846: 'common-information_card-information_card-stories',
				6881: 'common-community-social_card-social_card-stories',
				7056: 'common-community-threads-thread-thread-stories',
				7090: 'pages-login-login-stories',
				7197: 'common-pages-admin_panel-module_card-module_card-stories',
				7329: 'common-community-threads-thread_text_area-thread_text_area-stories',
				8073: 'common-user-editable_fields-stories',
				8328: 'common-content_types-video-video_comment_tick-video_comment_tick-stories',
				8567: 'common-pages-sidebar-sidebar_lessons-sidebar_lessons-stories',
				8824: 'common-pages-admin_panel-module_page_editor-section-section-stories',
				8919: 'common-version-dynamic_version-stories',
				8961: 'common-forms-inputs-input-input-stories',
				9140: 'common-quiz-quiz_questions-stories',
				9693: 'pages-communities-Main-main_community-stories',
				9704: 'common-charts-line-line-stories',
				9799: 'common-forms-inputs-select-select-stories',
				9890: 'common-panel-panel-stories',
			})[chunkId] || chunkId) +
			'.' +
			{
				138: 'f87fb680',
				374: 'df1127ee',
				376: '32acb1c5',
				409: '129d9988',
				625: '281d38c3',
				767: '609d2645',
				818: '7eae8f84',
				896: '5fa6828e',
				985: 'f526635f',
				1109: 'c88ca289',
				1136: '8d99d587',
				1267: 'ccf4d58e',
				1341: '7bf818fe',
				1437: '02b3eb04',
				1458: '38cdcc9e',
				1478: '561c1051',
				1575: '3d71085b',
				1577: '2781d673',
				1660: '4b8c60af',
				1752: '85d797d5',
				1965: '452e84d0',
				2268: '237c4892',
				2286: 'dc0030cb',
				2333: 'd963ea68',
				2503: '9316a5ab',
				2636: '68f3535d',
				2717: '737c05f1',
				2762: '32d3f16f',
				2812: 'd6178eb7',
				2890: '76d05fae',
				3013: '695507b7',
				3055: 'd03d49c4',
				3296: 'b1f527d3',
				3299: '00d3ede7',
				3341: '72237249',
				3400: '89861479',
				3551: 'edb0dba3',
				3930: 'c1b27762',
				3943: 'adaa12e0',
				3945: '892ebf9c',
				3984: '2413862b',
				4089: '09bc8e99',
				4256: 'fd37dfb9',
				4446: '9517a00e',
				4462: '7cd6ab19',
				4463: '2819822a',
				4780: '355a828e',
				5e3: 'f5a49aa0',
				5357: 'f0070085',
				5434: 'b276c2ec',
				5505: '82e008de',
				5601: '248f1a5d',
				5661: 'ac9446b1',
				5708: '31252eb4',
				5788: '25cdf289',
				5815: 'ac88278c',
				6030: '7f2907e4',
				6486: '6d3b1342',
				6653: '25a03028',
				6655: '14fee853',
				6846: '3b912319',
				6881: '80dad661',
				7056: '1e3e978b',
				7058: '9de19b03',
				7090: '9b93fdd8',
				7197: 'ecdb0f66',
				7329: 'e109ebb4',
				7516: 'df66967f',
				8073: '9c97083d',
				8328: 'b18c3a27',
				8422: '0f4250a3',
				8567: '87135280',
				8699: '8cbe00ac',
				8820: 'b5f3df81',
				8824: '94331184',
				8919: '0d71dc1f',
				8923: '1c89a3f7',
				8961: '9a110bc3',
				9140: 'ba343e0a',
				9352: '8a936a94',
				9496: '62d9b125',
				9583: 'e6405060',
				9693: 'b5391a24',
				9704: '913d1fe9',
				9799: '1d1b7aef',
				9890: 'd84cb2ff',
			}[chunkId] +
			'.iframe.bundle.js'),
		(__webpack_require__.g = (function () {
			if ('object' == typeof globalThis) return globalThis
			try {
				return this || new Function('return this')()
			} catch (e) {
				if ('object' == typeof window) return window
			}
		})()),
		(__webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop)),
		(inProgress = {}),
		(__webpack_require__.l = (url, done, key, chunkId) => {
			if (inProgress[url]) inProgress[url].push(done)
			else {
				var script, needAttach
				if (void 0 !== key)
					for (
						var scripts = document.getElementsByTagName('script'),
							i = 0;
						i < scripts.length;
						i++
					) {
						var s = scripts[i]
						if (
							s.getAttribute('src') == url ||
							s.getAttribute('data-webpack') == 'glance:' + key
						) {
							script = s
							break
						}
					}
				script ||
					((needAttach = !0),
					((script = document.createElement('script')).charset =
						'utf-8'),
					(script.timeout = 120),
					__webpack_require__.nc &&
						script.setAttribute('nonce', __webpack_require__.nc),
					script.setAttribute('data-webpack', 'glance:' + key),
					(script.src = url)),
					(inProgress[url] = [done])
				var onScriptComplete = (prev, event) => {
						;(script.onerror = script.onload = null),
							clearTimeout(timeout)
						var doneFns = inProgress[url]
						if (
							(delete inProgress[url],
							script.parentNode &&
								script.parentNode.removeChild(script),
							doneFns && doneFns.forEach((fn) => fn(event)),
							prev)
						)
							return prev(event)
					},
					timeout = setTimeout(
						onScriptComplete.bind(null, void 0, {
							type: 'timeout',
							target: script,
						}),
						12e4,
					)
				;(script.onerror = onScriptComplete.bind(null, script.onerror)),
					(script.onload = onScriptComplete.bind(
						null,
						script.onload,
					)),
					needAttach && document.head.appendChild(script)
			}
		}),
		(__webpack_require__.r = (exports) => {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(exports, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(exports, '__esModule', { value: !0 })
		}),
		(__webpack_require__.nmd = (module) => (
			(module.paths = []),
			module.children || (module.children = []),
			module
		)),
		(__webpack_require__.p = ''),
		(() => {
			var installedChunks = { 1303: 0 }
			;(__webpack_require__.f.j = (chunkId, promises) => {
				var installedChunkData = __webpack_require__.o(
					installedChunks,
					chunkId,
				)
					? installedChunks[chunkId]
					: void 0
				if (0 !== installedChunkData)
					if (installedChunkData) promises.push(installedChunkData[2])
					else if (1303 != chunkId) {
						var promise = new Promise(
							(resolve, reject) =>
								(installedChunkData = installedChunks[chunkId] =
									[resolve, reject]),
						)
						promises.push((installedChunkData[2] = promise))
						var url =
								__webpack_require__.p +
								__webpack_require__.u(chunkId),
							error = new Error()
						__webpack_require__.l(
							url,
							(event) => {
								if (
									__webpack_require__.o(
										installedChunks,
										chunkId,
									) &&
									(0 !==
										(installedChunkData =
											installedChunks[chunkId]) &&
										(installedChunks[chunkId] = void 0),
									installedChunkData)
								) {
									var errorType =
											event &&
											('load' === event.type
												? 'missing'
												: event.type),
										realSrc =
											event &&
											event.target &&
											event.target.src
									;(error.message =
										'Loading chunk ' +
										chunkId +
										' failed.\n(' +
										errorType +
										': ' +
										realSrc +
										')'),
										(error.name = 'ChunkLoadError'),
										(error.type = errorType),
										(error.request = realSrc),
										installedChunkData[1](error)
								}
							},
							'chunk-' + chunkId,
							chunkId,
						)
					} else installedChunks[chunkId] = 0
			}),
				(__webpack_require__.O.j = (chunkId) =>
					0 === installedChunks[chunkId])
			var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
					var moduleId,
						chunkId,
						[chunkIds, moreModules, runtime] = data,
						i = 0
					if (chunkIds.some((id) => 0 !== installedChunks[id])) {
						for (moduleId in moreModules)
							__webpack_require__.o(moreModules, moduleId) &&
								(__webpack_require__.m[moduleId] =
									moreModules[moduleId])
						if (runtime) var result = runtime(__webpack_require__)
					}
					for (
						parentChunkLoadingFunction &&
						parentChunkLoadingFunction(data);
						i < chunkIds.length;
						i++
					)
						(chunkId = chunkIds[i]),
							__webpack_require__.o(installedChunks, chunkId) &&
								installedChunks[chunkId] &&
								installedChunks[chunkId][0](),
							(installedChunks[chunkId] = 0)
					return __webpack_require__.O(result)
				},
				chunkLoadingGlobal = (self.webpackChunkglance =
					self.webpackChunkglance || [])
			chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
				(chunkLoadingGlobal.push = webpackJsonpCallback.bind(
					null,
					chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
				))
		})(),
		(__webpack_require__.nc = void 0)
})()
