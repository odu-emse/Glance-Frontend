try {
	var e = 'storybook/measure-addon',
		u = `${e}/tool`
	var g = {
		RESULT: `${e}/result`,
		REQUEST: `${e}/request`,
		CLEAR: `${e}/clear`,
	}
	var a = __REACT__,
		{
			Children: B,
			Component: P,
			Fragment: D,
			Profiler: x,
			PureComponent: N,
			StrictMode: v,
			Suspense: H,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: F,
			cloneElement: K,
			createContext: W,
			createElement: Y,
			createFactory: U,
			createRef: G,
			forwardRef: $,
			isValidElement: w,
			lazy: V,
			memo: q,
			useCallback: p,
			useContext: z,
			useDebugValue: Q,
			useEffect: S,
			useImperativeHandle: Z,
			useLayoutEffect: j,
			useMemo: J,
			useReducer: X,
			useRef: ee,
			useState: te,
			version: oe,
		} = __REACT__
	var le = __STORYBOOKAPI__,
		{
			ActiveTabs: ue,
			Consumer: ce,
			ManagerContext: me,
			Provider: ie,
			addons: c,
			combineParameters: pe,
			controlOrMetaKey: Se,
			controlOrMetaSymbol: de,
			eventMatchesShortcut: Te,
			eventToShortcut: _e,
			isMacLike: be,
			isShortcutTaken: Oe,
			keyToSymbol: Ee,
			merge: ye,
			mockChannel: Ce,
			optionOrAltSymbol: fe,
			shortcutMatchesShortcut: Re,
			shortcutToHumanString: he,
			types: d,
			useAddonState: Ae,
			useArgTypes: ge,
			useArgs: Ie,
			useChannel: Le,
			useGlobalTypes: ke,
			useGlobals: T,
			useParameter: Me,
			useSharedState: Be,
			useStoryPrepared: Pe,
			useStorybookApi: _,
			useStorybookState: De,
		} = __STORYBOOKAPI__
	var Fe = __STORYBOOKCOMPONENTS__,
		{
			A: Ke,
			ActionBar: We,
			AddonPanel: Ye,
			Badge: Ue,
			Bar: Ge,
			Blockquote: $e,
			Button: we,
			Code: Ve,
			DL: qe,
			Div: ze,
			DocumentWrapper: Qe,
			ErrorFormatter: Ze,
			FlexBar: je,
			Form: Je,
			H1: Xe,
			H2: et,
			H3: tt,
			H4: ot,
			H5: rt,
			H6: at,
			HR: st,
			IconButton: b,
			IconButtonSkeleton: nt,
			Icons: O,
			Img: lt,
			LI: ut,
			Link: ct,
			ListItem: mt,
			Loader: it,
			OL: pt,
			P: St,
			Placeholder: dt,
			Pre: Tt,
			ResetWrapper: _t,
			ScrollArea: bt,
			Separator: Ot,
			Spaced: Et,
			Span: yt,
			StorybookIcon: Ct,
			StorybookLogo: ft,
			Symbols: Rt,
			SyntaxHighlighter: ht,
			TT: At,
			TabBar: gt,
			TabButton: It,
			TabWrapper: Lt,
			Table: kt,
			Tabs: Mt,
			TabsState: Bt,
			TooltipLinkList: Pt,
			TooltipMessage: Dt,
			TooltipNote: xt,
			UL: Nt,
			WithTooltip: vt,
			WithTooltipPure: Ht,
			Zoom: Ft,
			codeCommon: Kt,
			components: Wt,
			createCopyToClipboardFunction: Yt,
			getStoryHref: Ut,
			icons: Gt,
			interleaveSeparators: $t,
			nameSpaceClassNames: wt,
			resetComponents: Vt,
			withReset: qt,
		} = __STORYBOOKCOMPONENTS__
	var E = () => {
		let [s, m] = T(),
			{ measureEnabled: n } = s,
			i = _(),
			l = p(() => m({ measureEnabled: !n }), [m, n])
		return (
			S(() => {
				i.setAddonShortcut(e, {
					label: 'Toggle Measure [M]',
					defaultShortcut: ['M'],
					actionName: 'measure',
					showInMenu: !1,
					action: l,
				})
			}, [l, i]),
			a.createElement(
				b,
				{ key: u, active: n, title: 'Enable measure', onClick: l },
				a.createElement(O, { icon: 'ruler' })
			)
		)
	}
	c.register(e, () => {
		c.add(u, {
			type: d.TOOL,
			id: 'measure',
			title: 'Measure',
			match: ({ viewMode: s }) => s === 'story',
			render: () => a.createElement(E, null),
		})
	})
} catch (e) {
	console.error(
		'[Storybook] One of your manager-entries failed: ' + import.meta.url,
		e
	)
}
//# sourceMappingURL=manager-bundle.mjs.map
