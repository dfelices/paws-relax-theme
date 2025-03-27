(() => {
	"use strict";
	var e,
		o = {
			145: () => {
				const e = window.wp.blocks,
					o = window.wp.i18n,
					s = window.wp.blockEditor,
					r = window.wp.coreData,
					n = window.wp.components,
					t = window.ReactJSXRuntime,
					a = JSON.parse('{"UU":"paws-blocks/company-address"}');
				(0, e.registerBlockType)(a.UU, {
					edit: function ({ attributes: e, setAttributes: a }) {
						const [i, c] = (0, r.useEntityProp)(
								"postType",
								"page",
								"meta",
								324,
							),
							{ company_address: l } = i,
							{ svgIcon: p } = e;
						return (0, t.jsxs)(t.Fragment, {
							children: [
								(0, t.jsxs)("address", {
									...(0, s.useBlockProps)(),
									children: [
										p &&
											(0, t.jsx)("svg", {
												xmlns: "http://www.w3.org/2000/svg",
												width: "24",
												height: "24",
												viewBox: "0 0 24 24",
												role: "img",
												"aria-label": "Location Icon",
												children: (0, t.jsx)("path", {
													d: "M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z",
												}),
											}),
										(0, t.jsx)(s.RichText, {
											placeholder: (0, o.__)(
												"Enter address here...",
												"paws-blocks",
											),
											tagName: "p",
											value: l,
											onChange: (e) => {
												return (
													(o = "company_address"),
													(s = e),
													void c({ ...i, [o]: s })
												);
												var o, s;
											},
										}),
									],
								}),
								(0, t.jsx)(s.InspectorControls, {
									children: (0, t.jsx)(n.PanelBody, {
										title: (0, o.__)("Settings", "paws-blocks"),
										children: (0, t.jsx)(n.PanelRow, {
											children: (0, t.jsx)(n.ToggleControl, {
												label: (0, o.__)("Show SVG Icon", "paws-blocks"),
												checked: p,
												onChange: (e) => a({ svgIcon: e }),
												help: (0, o.__)(
													"Display an SVG icon next to the address.",
													"paws-blocks",
												),
											}),
										}),
									}),
								}),
							],
						});
					},
				});
			},
		},
		s = {};
	function r(e) {
		var n = s[e];
		if (void 0 !== n) return n.exports;
		var t = (s[e] = { exports: {} });
		return o[e](t, t.exports, r), t.exports;
	}
	(r.m = o),
		(e = []),
		(r.O = (o, s, n, t) => {
			if (!s) {
				var a = 1 / 0;
				for (p = 0; p < e.length; p++) {
					for (var [s, n, t] = e[p], i = !0, c = 0; c < s.length; c++)
						(!1 & t || a >= t) && Object.keys(r.O).every((e) => r.O[e](s[c]))
							? s.splice(c--, 1)
							: ((i = !1), t < a && (a = t));
					if (i) {
						e.splice(p--, 1);
						var l = n();
						void 0 !== l && (o = l);
					}
				}
				return o;
			}
			t = t || 0;
			for (var p = e.length; p > 0 && e[p - 1][2] > t; p--) e[p] = e[p - 1];
			e[p] = [s, n, t];
		}),
		(r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		(() => {
			var e = { 762: 0, 190: 0 };
			r.O.j = (o) => 0 === e[o];
			var o = (o, s) => {
					var n,
						t,
						[a, i, c] = s,
						l = 0;
					if (a.some((o) => 0 !== e[o])) {
						for (n in i) r.o(i, n) && (r.m[n] = i[n]);
						if (c) var p = c(r);
					}
					for (o && o(s); l < a.length; l++)
						(t = a[l]), r.o(e, t) && e[t] && e[t][0](), (e[t] = 0);
					return r.O(p);
				},
				s = (globalThis.webpackChunkpaws_blocks =
					globalThis.webpackChunkpaws_blocks || []);
			s.forEach(o.bind(null, 0)), (s.push = o.bind(null, s.push.bind(s)));
		})();
	var n = r.O(void 0, [190], () => r(145));
	n = r.O(n);
})();
