try {
	var ne = Object.create
	var K = Object.defineProperty
	var oe = Object.getOwnPropertyDescriptor
	var ie = Object.getOwnPropertyNames
	var ae = Object.getPrototypeOf,
		se = Object.prototype.hasOwnProperty
	var C = ((e) =>
		typeof require < 'u'
			? require
			: typeof Proxy < 'u'
			? new Proxy(e, {
					get: (t, s) => (typeof require < 'u' ? require : t)[s],
			  })
			: e)(function (e) {
		if (typeof require < 'u') return require.apply(this, arguments)
		throw new Error('Dynamic require of "' + e + '" is not supported')
	})
	var D = (e, t) => () => (e && (t = e((e = 0))), t)
	var le = (e, t) => () => (
		t || e((t = { exports: {} }).exports, t), t.exports
	)
	var ue = (e, t, s, o) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let i of ie(t))
				!se.call(e, i) &&
					i !== s &&
					K(e, i, {
						get: () => t[i],
						enumerable: !(o = oe(t, i)) || o.enumerable,
					})
		return e
	}
	var ce = (e, t, s) => (
		(s = e != null ? ne(ae(e)) : {}),
		ue(
			t || !e || !e.__esModule
				? K(s, 'default', { value: e, enumerable: !0 })
				: s,
			e
		)
	)
	var d = D(() => {})
	var m = D(() => {})
	var f = D(() => {})
	var Q = le((J, q) => {
		d()
		m()
		f()
		;(function (e) {
			if (typeof J == 'object' && typeof q < 'u') q.exports = e()
			else if (typeof define == 'function' && define.amd) define([], e)
			else {
				var t
				typeof window < 'u' || typeof window < 'u'
					? (t = window)
					: typeof self < 'u'
					? (t = self)
					: (t = this),
					(t.memoizerific = e())
			}
		})(function () {
			var e, t, s
			return (function o(i, g, l) {
				function n(a, h) {
					if (!g[a]) {
						if (!i[a]) {
							var c = typeof C == 'function' && C
							if (!h && c) return c(a, !0)
							if (r) return r(a, !0)
							var S = new Error("Cannot find module '" + a + "'")
							throw ((S.code = 'MODULE_NOT_FOUND'), S)
						}
						var p = (g[a] = { exports: {} })
						i[a][0].call(
							p.exports,
							function (y) {
								var T = i[a][1][y]
								return n(T || y)
							},
							p,
							p.exports,
							o,
							i,
							g,
							l
						)
					}
					return g[a].exports
				}
				for (
					var r = typeof C == 'function' && C, u = 0;
					u < l.length;
					u++
				)
					n(l[u])
				return n
			})(
				{
					1: [
						function (o, i, g) {
							i.exports = function (l) {
								if (typeof Map != 'function' || l) {
									var n = o('./similar')
									return new n()
								} else return new Map()
							}
						},
						{ './similar': 2 },
					],
					2: [
						function (o, i, g) {
							function l() {
								return (
									(this.list = []),
									(this.lastItem = void 0),
									(this.size = 0),
									this
								)
							}
							;(l.prototype.get = function (n) {
								var r
								if (
									this.lastItem &&
									this.isEqual(this.lastItem.key, n)
								)
									return this.lastItem.val
								if (((r = this.indexOf(n)), r >= 0))
									return (
										(this.lastItem = this.list[r]),
										this.list[r].val
									)
							}),
								(l.prototype.set = function (n, r) {
									var u
									return this.lastItem &&
										this.isEqual(this.lastItem.key, n)
										? ((this.lastItem.val = r), this)
										: ((u = this.indexOf(n)),
										  u >= 0
												? ((this.lastItem =
														this.list[u]),
												  (this.list[u].val = r),
												  this)
												: ((this.lastItem = {
														key: n,
														val: r,
												  }),
												  this.list.push(this.lastItem),
												  this.size++,
												  this))
								}),
								(l.prototype.delete = function (n) {
									var r
									if (
										(this.lastItem &&
											this.isEqual(
												this.lastItem.key,
												n
											) &&
											(this.lastItem = void 0),
										(r = this.indexOf(n)),
										r >= 0)
									)
										return (
											this.size--,
											this.list.splice(r, 1)[0]
										)
								}),
								(l.prototype.has = function (n) {
									var r
									return this.lastItem &&
										this.isEqual(this.lastItem.key, n)
										? !0
										: ((r = this.indexOf(n)),
										  r >= 0
												? ((this.lastItem =
														this.list[r]),
												  !0)
												: !1)
								}),
								(l.prototype.forEach = function (n, r) {
									var u
									for (u = 0; u < this.size; u++)
										n.call(
											r || this,
											this.list[u].val,
											this.list[u].key,
											this
										)
								}),
								(l.prototype.indexOf = function (n) {
									var r
									for (r = 0; r < this.size; r++)
										if (this.isEqual(this.list[r].key, n))
											return r
									return -1
								}),
								(l.prototype.isEqual = function (n, r) {
									return n === r || (n !== n && r !== r)
								}),
								(i.exports = l)
						},
						{},
					],
					3: [
						function (o, i, g) {
							var l = o('map-or-similar')
							i.exports = function (a) {
								var h = new l(!1),
									c = []
								return function (S) {
									var p = function () {
										var y = h,
											T,
											B,
											I = arguments.length - 1,
											A = Array(I + 1),
											x = !0,
											k
										if (
											(p.numArgs || p.numArgs === 0) &&
											p.numArgs !== I + 1
										)
											throw new Error(
												'Memoizerific functions should always be called with the same number of arguments'
											)
										for (k = 0; k < I; k++) {
											if (
												((A[k] = {
													cacheItem: y,
													arg: arguments[k],
												}),
												y.has(arguments[k]))
											) {
												y = y.get(arguments[k])
												continue
											}
											;(x = !1),
												(T = new l(!1)),
												y.set(arguments[k], T),
												(y = T)
										}
										return (
											x &&
												(y.has(arguments[I])
													? (B = y.get(arguments[I]))
													: (x = !1)),
											x ||
												((B = S.apply(null, arguments)),
												y.set(arguments[I], B)),
											a > 0 &&
												((A[I] = {
													cacheItem: y,
													arg: arguments[I],
												}),
												x ? n(c, A) : c.push(A),
												c.length > a && r(c.shift())),
											(p.wasMemoized = x),
											(p.numArgs = I + 1),
											B
										)
									}
									return (
										(p.limit = a),
										(p.wasMemoized = !1),
										(p.cache = h),
										(p.lru = c),
										p
									)
								}
							}
							function n(a, h) {
								var c = a.length,
									S = h.length,
									p,
									y,
									T
								for (y = 0; y < c; y++) {
									for (p = !0, T = 0; T < S; T++)
										if (!u(a[y][T].arg, h[T].arg)) {
											p = !1
											break
										}
									if (p) break
								}
								a.push(a.splice(y, 1)[0])
							}
							function r(a) {
								var h = a.length,
									c = a[h - 1],
									S,
									p
								for (
									c.cacheItem.delete(c.arg), p = h - 2;
									p >= 0 &&
									((c = a[p]),
									(S = c.cacheItem.get(c.arg)),
									!S || !S.size);
									p--
								)
									c.cacheItem.delete(c.arg)
							}
							function u(a, h) {
								return a === h || (a !== a && h !== h)
							}
						},
						{ 'map-or-similar': 1 },
					],
				},
				{},
				[3]
			)(3)
		})
	})
	d()
	m()
	f()
	d()
	m()
	f()
	d()
	m()
	f()
	d()
	m()
	f()
	d()
	m()
	f()
	var Y = (() => {
		let e
		return (
			typeof window < 'u'
				? (e = window)
				: typeof globalThis < 'u'
				? (e = globalThis)
				: typeof window < 'u'
				? (e = window)
				: typeof self < 'u'
				? (e = self)
				: (e = {}),
			e
		)
	})()
	d()
	m()
	f()
	function $(e) {
		for (var t = [], s = 1; s < arguments.length; s++)
			t[s - 1] = arguments[s]
		var o = Array.from(typeof e == 'string' ? [e] : e)
		o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, '')
		var i = o.reduce(function (n, r) {
			var u = r.match(/\n([\t ]+|(?!\s).)/g)
			return u
				? n.concat(
						u.map(function (a) {
							var h, c
							return (c =
								(h = a.match(/[\t ]/g)) === null || h === void 0
									? void 0
									: h.length) !== null && c !== void 0
								? c
								: 0
						})
				  )
				: n
		}, [])
		if (i.length) {
			var g = new RegExp(
				`
[	 ]{` +
					Math.min.apply(Math, i) +
					'}',
				'g'
			)
			o = o.map(function (n) {
				return n.replace(
					g,
					`
`
				)
			})
		}
		o[0] = o[0].replace(/^\r?\n/, '')
		var l = o[0]
		return (
			t.forEach(function (n, r) {
				var u = l.match(/(?:^|\n)( *)$/),
					a = u ? u[1] : '',
					h = n
				typeof n == 'string' &&
					n.includes(`
`) &&
					(h = String(n)
						.split(
							`
`
						)
						.map(function (c, S) {
							return S === 0 ? c : '' + a + c
						}).join(`
`)),
					(l += h + o[r + 1])
			}),
			l
		)
	}
	d()
	m()
	f()
	var Me = __STORYBOOKCLIENTLOGGER__,
		{
			deprecate: Re,
			logger: M,
			once: Le,
			pretty: we,
		} = __STORYBOOKCLIENTLOGGER__
	var R = 'storybook/background',
		O = 'backgrounds',
		De = { UPDATE: `${R}/update` },
		{ document: Ke, window: Ye } = Y
	var U = (e, t = [], s) => {
		if (e === 'transparent') return 'transparent'
		if (t.find((i) => i.value === e)) return e
		let o = t.find((i) => i.name === s)
		if (o) return o.value
		if (s) {
			let i = t.map((g) => g.name).join(', ')
			M.warn($`
        Backgrounds Addon: could not find the default color "${s}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `)
		}
		return 'transparent'
	}
	d()
	m()
	f()
	var b = __REACT__,
		{
			Children: je,
			Component: Ze,
			Fragment: L,
			Profiler: Je,
			PureComponent: Qe,
			StrictMode: Xe,
			Suspense: et,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tt,
			cloneElement: rt,
			createContext: nt,
			createElement: ot,
			createFactory: it,
			createRef: at,
			forwardRef: st,
			isValidElement: lt,
			lazy: ut,
			memo: w,
			useCallback: W,
			useContext: ct,
			useDebugValue: dt,
			useEffect: mt,
			useImperativeHandle: ft,
			useLayoutEffect: pt,
			useMemo: V,
			useReducer: ht,
			useRef: gt,
			useState: j,
			version: yt,
		} = __REACT__
	d()
	m()
	f()
	var _t = __STORYBOOKAPI__,
		{
			ActiveTabs: vt,
			Consumer: It,
			ManagerContext: Ot,
			Provider: kt,
			addons: z,
			combineParameters: xt,
			controlOrMetaKey: Ct,
			controlOrMetaSymbol: Bt,
			eventMatchesShortcut: At,
			eventToShortcut: Mt,
			isMacLike: Rt,
			isShortcutTaken: Lt,
			keyToSymbol: wt,
			merge: Pt,
			mockChannel: Nt,
			optionOrAltSymbol: Gt,
			shortcutMatchesShortcut: Ht,
			shortcutToHumanString: Dt,
			types: Z,
			useAddonState: zt,
			useArgTypes: qt,
			useArgs: Ft,
			useChannel: Kt,
			useGlobalTypes: Yt,
			useGlobals: P,
			useParameter: N,
			useSharedState: $t,
			useStoryPrepared: Ut,
			useStorybookApi: Wt,
			useStorybookState: Vt,
		} = __STORYBOOKAPI__
	var F = ce(Q(), 1)
	d()
	m()
	f()
	var nr = __STORYBOOKCOMPONENTS__,
		{
			A: or,
			ActionBar: ir,
			AddonPanel: ar,
			Badge: sr,
			Bar: lr,
			Blockquote: ur,
			Button: cr,
			Code: dr,
			DL: mr,
			Div: fr,
			DocumentWrapper: pr,
			ErrorFormatter: hr,
			FlexBar: gr,
			Form: yr,
			H1: br,
			H2: Sr,
			H3: Tr,
			H4: Er,
			H5: _r,
			H6: vr,
			HR: Ir,
			IconButton: G,
			IconButtonSkeleton: Or,
			Icons: H,
			Img: kr,
			LI: xr,
			Link: Cr,
			ListItem: Br,
			Loader: Ar,
			OL: Mr,
			P: Rr,
			Placeholder: Lr,
			Pre: wr,
			ResetWrapper: Pr,
			ScrollArea: Nr,
			Separator: Gr,
			Spaced: Hr,
			Span: Dr,
			StorybookIcon: zr,
			StorybookLogo: qr,
			Symbols: Fr,
			SyntaxHighlighter: Kr,
			TT: Yr,
			TabBar: $r,
			TabButton: Ur,
			TabWrapper: Wr,
			Table: Vr,
			Tabs: jr,
			TabsState: Zr,
			TooltipLinkList: X,
			TooltipMessage: Jr,
			TooltipNote: Qr,
			UL: Xr,
			WithTooltip: ee,
			WithTooltipPure: en,
			Zoom: tn,
			codeCommon: rn,
			components: nn,
			createCopyToClipboardFunction: on,
			getStoryHref: an,
			icons: sn,
			interleaveSeparators: ln,
			nameSpaceClassNames: un,
			resetComponents: cn,
			withReset: dn,
		} = __STORYBOOKCOMPONENTS__
	d()
	m()
	f()
	var gn = __STORYBOOKTHEMING__,
		{
			CacheProvider: yn,
			ClassNames: bn,
			Global: Sn,
			ThemeProvider: Tn,
			background: En,
			color: _n,
			convert: vn,
			create: In,
			createCache: On,
			createGlobal: kn,
			createReset: xn,
			css: Cn,
			darken: Bn,
			ensure: An,
			ignoreSsrWarning: Mn,
			isPropValid: Rn,
			jsx: Ln,
			keyframes: wn,
			lighten: Pn,
			styled: te,
			themes: Nn,
			typography: Gn,
			useTheme: Hn,
			withTheme: Dn,
		} = __STORYBOOKTHEMING__
	var de = te.span(
			({ background: e }) => ({
				borderRadius: '1rem',
				display: 'block',
				height: '1rem',
				width: '1rem',
				background: e,
			}),
			({ theme: e }) => ({
				boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
			})
		),
		re = (0, F.default)(1e3)((e, t, s, o, i, g) => ({
			id: e || t,
			title: t,
			onClick: () => {
				i({ selected: s, name: t })
			},
			value: s,
			right: o ? b.createElement(de, { background: s }) : void 0,
			active: g,
		})),
		me = (0, F.default)(10)((e, t, s) => {
			let o = e.map(({ name: i, value: g }) =>
				re(null, i, g, !0, s, g === t)
			)
			return t !== 'transparent'
				? [
						re(
							'reset',
							'Clear background',
							'transparent',
							null,
							s,
							!1
						),
						...o,
				  ]
				: o
		}),
		fe = { default: null, disable: !0, values: [] },
		pe = w(function () {
			let e = N(O, fe),
				[t, s] = j(!1),
				[o, i] = P(),
				g = o[O]?.value,
				l = V(() => U(g, e.values, e.default), [e, g])
			Array.isArray(e) &&
				M.warn(
					'Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md'
				)
			let n = W(
				(r) => {
					i({ [O]: { ...o[O], value: r } })
				},
				[e, o, i]
			)
			return e.disable
				? null
				: b.createElement(
						L,
						null,
						b.createElement(
							ee,
							{
								placement: 'top',
								closeOnOutsideClick: !0,
								tooltip: ({ onHide: r }) =>
									b.createElement(X, {
										links: me(
											e.values,
											l,
											({ selected: u }) => {
												l !== u && n(u), r()
											}
										),
									}),
								onVisibleChange: s,
							},
							b.createElement(
								G,
								{
									key: 'background',
									title: 'Change the background of the preview',
									active: l !== 'transparent' || t,
								},
								b.createElement(H, { icon: 'photo' })
							)
						)
				  )
		}),
		he = w(function () {
			let [e, t] = P(),
				{ grid: s } = N(O, { grid: { disable: !1 } })
			if (s?.disable) return null
			let o = e[O]?.grid || !1
			return b.createElement(
				G,
				{
					key: 'background',
					active: o,
					title: 'Apply a grid to the preview',
					onClick: () => t({ [O]: { ...e[O], grid: !o } }),
				},
				b.createElement(H, { icon: 'grid' })
			)
		})
	z.register(R, () => {
		z.add(R, {
			title: 'Backgrounds',
			id: 'backgrounds',
			type: Z.TOOL,
			match: ({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)),
			render: () =>
				b.createElement(
					L,
					null,
					b.createElement(pe, null),
					b.createElement(he, null)
				),
		})
	})
} catch (e) {
	console.error(
		'[Storybook] One of your manager-entries failed: ' + import.meta.url,
		e
	)
}
//# sourceMappingURL=manager-bundle.mjs.map
