try {
	var r = __REACT__,
		{
			Children: ne,
			Component: ie,
			Fragment: se,
			Profiler: ce,
			PureComponent: ue,
			StrictMode: me,
			Suspense: pe,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: de,
			cloneElement: be,
			createContext: Se,
			createElement: fe,
			createFactory: Te,
			createRef: ye,
			forwardRef: Oe,
			isValidElement: _e,
			lazy: Ce,
			memo: Ie,
			useCallback: T,
			useContext: ve,
			useDebugValue: ge,
			useEffect: x,
			useImperativeHandle: Ee,
			useLayoutEffect: he,
			useMemo: xe,
			useReducer: Re,
			useRef: L,
			useState: B,
			version: ke,
		} = __REACT__
	var Ne = __STORYBOOKAPI__,
		{
			ActiveTabs: we,
			Consumer: Me,
			ManagerContext: Ge,
			Provider: He,
			addons: R,
			combineParameters: Ve,
			controlOrMetaKey: De,
			controlOrMetaSymbol: Fe,
			eventMatchesShortcut: Ke,
			eventToShortcut: We,
			isMacLike: Ye,
			isShortcutTaken: $e,
			keyToSymbol: Ue,
			merge: ze,
			mockChannel: je,
			optionOrAltSymbol: qe,
			shortcutMatchesShortcut: Ze,
			shortcutToHumanString: Je,
			types: P,
			useAddonState: Qe,
			useArgTypes: Xe,
			useArgs: et,
			useChannel: tt,
			useGlobalTypes: N,
			useGlobals: E,
			useParameter: ot,
			useSharedState: rt,
			useStoryPrepared: at,
			useStorybookApi: w,
			useStorybookState: lt,
		} = __STORYBOOKAPI__
	var ut = __STORYBOOKCOMPONENTS__,
		{
			A: mt,
			ActionBar: pt,
			AddonPanel: dt,
			Badge: bt,
			Bar: St,
			Blockquote: ft,
			Button: Tt,
			Code: yt,
			DL: Ot,
			Div: _t,
			DocumentWrapper: Ct,
			ErrorFormatter: It,
			FlexBar: vt,
			Form: gt,
			H1: Et,
			H2: ht,
			H3: xt,
			H4: Rt,
			H5: kt,
			H6: At,
			HR: Lt,
			IconButton: M,
			IconButtonSkeleton: Bt,
			Icons: h,
			Img: Pt,
			LI: Nt,
			Link: wt,
			ListItem: Mt,
			Loader: Gt,
			OL: Ht,
			P: Vt,
			Placeholder: Dt,
			Pre: Ft,
			ResetWrapper: Kt,
			ScrollArea: Wt,
			Separator: G,
			Spaced: Yt,
			Span: $t,
			StorybookIcon: Ut,
			StorybookLogo: zt,
			Symbols: jt,
			SyntaxHighlighter: qt,
			TT: Zt,
			TabBar: Jt,
			TabButton: Qt,
			TabWrapper: Xt,
			Table: eo,
			Tabs: to,
			TabsState: oo,
			TooltipLinkList: H,
			TooltipMessage: ro,
			TooltipNote: ao,
			UL: lo,
			WithTooltip: V,
			WithTooltipPure: no,
			Zoom: io,
			codeCommon: so,
			components: co,
			createCopyToClipboardFunction: uo,
			getStoryHref: mo,
			icons: po,
			interleaveSeparators: bo,
			nameSpaceClassNames: So,
			resetComponents: fo,
			withReset: To,
		} = __STORYBOOKCOMPONENTS__
	var Io = __STORYBOOKCLIENTLOGGER__,
		{
			deprecate: k,
			logger: vo,
			once: go,
			pretty: Eo,
		} = __STORYBOOKCLIENTLOGGER__
	var K = ({ active: o, title: t, icon: e, description: a, onClick: l }) =>
			r.createElement(
				M,
				{ active: o, title: a, onClick: l },
				e && r.createElement(h, { icon: e }),
				t ? `\xA0${t}` : null,
			),
		W = ['reset'],
		Y = (o) => o.filter((t) => !W.includes(t.type)).map((t) => t.value),
		y = 'addon-toolbars',
		$ = async (o, t, e) => {
			e &&
				e.next &&
				(await o.setAddonShortcut(y, {
					label: e.next.label,
					defaultShortcut: e.next.keys,
					actionName: `${t}:next`,
					action: e.next.action,
				})),
				e &&
					e.previous &&
					(await o.setAddonShortcut(y, {
						label: e.previous.label,
						defaultShortcut: e.previous.keys,
						actionName: `${t}:previous`,
						action: e.previous.action,
					})),
				e &&
					e.reset &&
					(await o.setAddonShortcut(y, {
						label: e.reset.label,
						defaultShortcut: e.reset.keys,
						actionName: `${t}:reset`,
						action: e.reset.action,
					}))
		},
		U = (o) => (t) => {
			let {
					id: e,
					toolbar: { items: a, shortcuts: l },
				} = t,
				d = w(),
				[O, s] = E(),
				n = L([]),
				c = O[e],
				I = T(() => {
					s({ [e]: '' })
				}, [s]),
				v = T(() => {
					let p = n.current,
						u = p.indexOf(c),
						i = u === p.length - 1 ? 0 : u + 1,
						_ = n.current[i]
					s({ [e]: _ })
				}, [n, c, s]),
				m = T(() => {
					let p = n.current,
						u = p.indexOf(c),
						i = u > -1 ? u : 0,
						_ = i === 0 ? p.length - 1 : i - 1,
						C = n.current[_]
					s({ [e]: C })
				}, [n, c, s])
			return (
				x(() => {
					l &&
						$(d, e, {
							next: { ...l.next, action: v },
							previous: { ...l.previous, action: m },
							reset: { ...l.reset, action: I },
						})
				}, [d, e, l, v, m, I]),
				x(() => {
					n.current = Y(a)
				}, []),
				r.createElement(o, { cycleValues: n.current, ...t })
			)
		},
		D = ({ currentValue: o, items: t }) =>
			o != null && t.find((e) => e.value === o),
		z = ({ currentValue: o, items: t }) => {
			let e = D({ currentValue: o, items: t })
			if (e) return e.icon
		},
		j = ({ currentValue: o, items: t }) => {
			let e = D({ currentValue: o, items: t })
			if (e) return e.title
		},
		q = ({
			left: o,
			right: t,
			title: e,
			value: a,
			icon: l,
			hideIcon: d,
			onClick: O,
			currentValue: s,
		}) => {
			let n = l && r.createElement(h, { style: { opacity: 1 }, icon: l }),
				c = {
					id: a || s,
					active: s === a,
					right: t,
					title: e,
					left: o,
					onClick: O,
				}
			return l && !d && (c.left = n), c
		},
		Z = U(
			({
				id: o,
				name: t,
				description: e,
				toolbar: {
					icon: a,
					items: l,
					title: d,
					preventDynamicIcon: O,
					dynamicTitle: s,
				},
			}) => {
				let [n, c] = E(),
					[I, v] = B(!1),
					m = n[o],
					p = !!m,
					u = a,
					i = d
				O || (u = z({ currentValue: m, items: l }) || u),
					i
						? !u &&
						  !i &&
						  ((i = t),
						  k(
								`Using the \`name\` "${t}" as toolbar title for backward compatibility. \`name\` will stop having dual purposes in the future. Please specify either a \`title\` or an \`icon\` in \`globalTypes\` instead.`,
						  ))
						: ((i = t),
						  k(
								'`showName` is deprecated as `name` will stop having dual purposes in the future. Please specify a `title` in `globalTypes` instead.',
						  )),
					s && (i = j({ currentValue: m, items: l }) || i)
				let _ = T(
					(C) => {
						c({ [o]: C })
					},
					[m, c],
				)
				return r.createElement(
					V,
					{
						placement: 'top',
						tooltip: ({ onHide: C }) => {
							let F = l
								.filter(({ type: g }) => {
									let A = !0
									return g === 'reset' && !m && (A = !1), A
								})
								.map((g) =>
									q({
										...g,
										currentValue: m,
										onClick: () => {
											_(g.value), C()
										},
									}),
								)
							return r.createElement(H, { links: F })
						},
						closeOnOutsideClick: !0,
						onVisibleChange: v,
					},
					r.createElement(K, {
						active: I || p,
						description: e || '',
						icon: u,
						title: i || '',
					}),
				)
			},
		),
		J = { type: 'item', value: '' },
		Q = (o, t) => ({
			...t,
			name: t.name || o,
			description: t.description || o,
			toolbar: {
				...t.toolbar,
				items: t.toolbar.items.map((e) => {
					let a = typeof e == 'string' ? { value: e, title: e } : e
					return (
						a.type === 'reset' &&
							t.toolbar.icon &&
							((a.icon = t.toolbar.icon), (a.hideIcon = !0)),
						{ ...J, ...a }
					)
				}),
			},
		}),
		X = () => {
			let o = N(),
				t = Object.keys(o).filter((e) => !!o[e].toolbar)
			return t.length
				? r.createElement(
						r.Fragment,
						null,
						r.createElement(G, null),
						t.map((e) => {
							let a = Q(e, o[e])
							return r.createElement(Z, { key: e, id: e, ...a })
						}),
				  )
				: null
		}
	R.register(y, () =>
		R.add(y, {
			title: y,
			id: 'toolbar',
			type: P.TOOL,
			match: () => !0,
			render: () => r.createElement(X, null),
		}),
	)
} catch (e) {
	console.error(
		'[Storybook] One of your manager-entries failed: ' + import.meta.url,
		e,
	)
}
//# sourceMappingURL=manager-bundle.mjs.map
