(function(e) {
	function t(t) {
		for (var i, o, r = t[0], l = t[1], c = t[2], d = 0, p = []; d < r.length; d++)
			(o = r[d]), s[o] && p.push(s[o][0]), (s[o] = 0);
		for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
		u && u(t);
		while (p.length) p.shift()();
		return a.push.apply(a, c || []), n();
	}
	function n() {
		for (var e, t = 0; t < a.length; t++) {
			for (var n = a[t], i = !0, r = 1; r < n.length; r++) {
				var l = n[r];
				0 !== s[l] && (i = !1);
			}
			i && (a.splice(t--, 1), (e = o((o.s = n[0]))));
		}
		return e;
	}
	var i = {},
		s = { app: 0 },
		a = [];
	function o(t) {
		if (i[t]) return i[t].exports;
		var n = (i[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
	}
	(o.m = e),
		(o.c = i),
		(o.d = function(e, t, n) {
			o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(o.r = function(e) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(o.t = function(e, t) {
			if ((1 & t && (e = o(e)), 8 & t)) return e;
			if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if ((o.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
				for (var i in e)
					o.d(
						n,
						i,
						function(t) {
							return e[t];
						}.bind(null, i)
					);
			return n;
		}),
		(o.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e['default'];
					  }
					: function() {
							return e;
					  };
			return o.d(t, 'a', t), t;
		}),
		(o.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(o.p = '/');
	var r = (window['figmaPlus'] = window['figmaPlus'] || []),
		l = r.push.bind(r);
	(r.push = t), (r = r.slice());
	for (var c = 0; c < r.length; c++) t(r[c]);
	var u = l;
	a.push([0, 'chunk-vendors']), n();
})({
	0: function(e, t, n) {
		e.exports = n('56d7');
	},
	'12ca': function(e, t, n) {},
	'18f3': function(e, t, n) {
		'use strict';
		var i = n('4265'),
			s = n.n(i);
		s.a;
	},
	'3cf6': function(e, t, n) {
		'use strict';
		var i = n('6b25'),
			s = n.n(i);
		s.a;
	},
	'416c': function(e, t, n) {
		'use strict';
		var i = n('d073'),
			s = n.n(i);
		s.a;
	},
	4265: function(e, t, n) {},
	'42ee': function(e, t, n) {},
	'4bbf': function(e, t, n) {
		'use strict';
		/*!
		 * vue-nav-tabs v0.5.7
		 * (c) 2019-present cristij <joracristi@gmail.com>
		 * Released under the MIT License.
		 */ function i(e) {
			return e && 'object' === typeof e && 'default' in e ? e['default'] : e;
		}
		Object.defineProperty(t, '__esModule', { value: !0 });
		var s = i(n('92fa')),
			a = {
				name: 'vue-tabs',
				props: {
					activeTabColor: String,
					activeTextColor: String,
					disabledColor: String,
					disabledTextColor: String,
					textPosition: { type: String, default: 'center' },
					type: { type: String, default: 'tabs' },
					direction: { type: String, default: 'horizontal' },
					centered: Boolean,
					value: [String, Number, Object]
				},
				data: function() {
					return { activeTabIndex: 0, tabs: [] };
				},
				computed: {
					isTabShape: function() {
						return 'tabs' === this.type;
					},
					isStacked: function() {
						return 'vertical' === this.direction;
					},
					classList: function() {
						return 'modal-tabs';
					},
					stackedClass: function() {
						return this.isStacked ? 'stacked' : '';
					},
					activeTabStyle: function() {
						return { backgroundColor: this.activeTabColor, color: this.activeTextColor };
					}
				},
				methods: {
					navigateToTab: function(e, t) {
						this.changeTab(this.activeTabIndex, e, t);
					},
					activateTab: function(e) {
						this.activeTabIndex = e;
						var t = this.tabs[e];
						(t.active = !0), this.$emit('input', t.title);
					},
					changeTab: function(e, t, n) {
						var i = this.tabs[e] || {},
							s = this.tabs[t];
						s.disabled ||
							((this.activeTabIndex = t),
							(i.active = !1),
							(s.active = !0),
							this.$emit('input', this.tabs[t].title),
							this.$emit('tab-change', t, s, i),
							this.tryChangeRoute(n));
					},
					tryChangeRoute: function(e) {
						this.$router && e && this.$router.push(e);
					},
					addTab: function(e) {
						var t = this.$slots.default.indexOf(e.$vnode);
						this.tabs.splice(t, 0, e);
					},
					removeTab: function(e) {
						var t = this.tabs,
							n = t.indexOf(e);
						n > -1 && t.splice(n, 1);
					},
					getTabs: function() {
						return this.$slots.default
							? this.$slots.default.filter(function(e) {
									return e.componentOptions;
							  })
							: [];
					},
					findTabAndActivate: function(e) {
						var t = this.tabs.findIndex(function(t, n) {
							return t.title === e || n === e;
						});
						t !== this.activeTabIndex ||
							this.tabs[this.activeTabIndex].active ||
							(this.tabs[this.activeTabIndex].active = !0),
							-1 !== t ? this.changeTab(this.activeTabIndex, t) : this.changeTab(this.activeTabIndex, 0);
					},
					renderTabTitle: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
							n = this.$createElement;
						if (0 !== this.tabs.length) {
							var i = this.tabs[e],
								s = i.active,
								a = i.title,
								o = { color: this.activeTabColor };
							'center' === t && (o.color = this.activeTextColor);
							var r = n('span', { class: 'title title_' + t, style: s ? o : {} }, [
								'center' === t && this.renderIcon(e),
								a
							]);
							return i.$slots.title
								? i.$slots.title
								: i.$scopedSlots.title
								? i.$scopedSlots.title({ active: s, title: a, position: t, icon: i.icon, data: i.tabData })
								: r;
						}
					},
					renderIcon: function(e) {
						var t = this.$createElement;
						if (0 !== this.tabs.length) {
							var n = this.tabs[e],
								i = n.icon,
								s = t('i', { class: i }, [' ']);
							return !n.$slots.title && i ? s : void 0;
						}
					},
					tabStyles: function(e) {
						return e.disabled ? { backgroundColor: this.disabledColor, color: this.disabledTextColor } : {};
					},
					renderTabs: function() {
						var e = this,
							t = this.$createElement;
						return this.tabs.map(function(n, i) {
							if (n) {
								var a = n.route,
									o = (n.id, n.title),
									r = (n.icon, n.tabId),
									l = e.activeTabIndex === i,
									c = e.activeTabIndex === i + 1;
								return t(
									'li',
									s([
										{
											attrs: { name: 'tab', id: 't-' + r, 'aria-selected': l, 'aria-controls': 'p-' + r, role: 'tab' },
											class: ['modal-tab', { active: l }, { disabled: n.disabled }, { leftOfActive: c }],
											key: o
										},
										{
											on: {
												click: function(t) {
													for (var s = arguments.length, o = Array(s > 1 ? s - 1 : 0), r = 1; r < s; r++)
														o[r - 1] = arguments[r];
													(function() {
														return !n.disabled && e.navigateToTab(i, a);
													}.apply(void 0, [t].concat(o)));
												}
											}
										}
									]),
									['center' === e.textPosition && e.renderTabTitle(i, e.textPosition)]
								);
							}
						});
					}
				},
				render: function() {
					var e = arguments[0],
						t = this.renderTabs();
					return e('div', { class: ['vue-tabs', this.stackedClass] }, [
						e(
							'div',
							{ class: [{ 'nav-tabs-navigation': !this.isStacked }, { 'left-vertical-tabs': this.isStacked }] },
							[
								e('div', { class: ['nav-tabs-wrapper', this.stackedClass] }, [
									e('ul', { class: this.classList, attrs: { role: 'tablist' } }, [t])
								])
							]
						),
						e('div', { class: [{ 'right-text-tabs': this.isStacked }] }, [this.$slots.default])
					]);
				},
				watch: {
					tabs: function(e) {
						e.length > 0 &&
							!this.value &&
							(e.length <= this.activeTabIndex
								? this.activateTab(this.activeTabIndex - 1)
								: this.activateTab(this.activeTabIndex)),
							e.length > 0 && this.value && this.findTabAndActivate(this.value);
					},
					value: function(e) {
						this.findTabAndActivate(e);
					}
				}
			},
			o = {
				name: 'v-tab',
				props: {
					title: { type: String, default: '' },
					icon: { type: String, default: '' },
					tabData: { default: null },
					beforeChange: { type: Function },
					id: String,
					route: { type: [String, Object] },
					disabled: Boolean,
					transitionName: String,
					transitionMode: String
				},
				computed: {
					isValidParent: function() {
						return 'vue-tabs' === this.$parent.$options.name;
					},
					hash: function() {
						return '#' + this.id;
					},
					tabId: function() {
						return this.id ? this.id : this.title;
					}
				},
				data: function() {
					return { active: !1, validationError: null };
				},
				mounted: function() {
					this.$parent.addTab(this);
				},
				destroyed: function() {
					this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el), this.$parent.removeTab(this);
				},
				render: function() {
					var e = arguments[0];
					return e(
						'section',
						{
							class: 'tab-content',
							attrs: { id: 'p-' + this.tabId, 'aria-labelledby': 't-' + this.tabId, role: 'tabpanel' },
							directives: [{ name: 'show', value: this.active }]
						},
						[e('div', [this.$slots.default])]
					);
				}
			},
			r = {
				install: function(e) {
					e.component('vue-tabs', a), e.component('v-tab', o);
				}
			};
		'undefined' !== typeof window && window.Vue && (window.Vue.use(r), (window.VueTabs = r)),
			(t['default'] = r),
			(t.VueTabs = a),
			(t.VTab = o);
	},
	'56d7': function(e, t, n) {
		'use strict';
		n.r(t);
		n('7514'), n('ac6a');
		var i = n('5d73'),
			s = n.n(i),
			a = (n('96cf'), n('3b8d')),
			o = (n('cadf'), n('551c'), n('f751'), n('097d'), n('75fc'));
		function r() {
			var e = !1,
				t = !1,
				n = !1,
				i = !1,
				s = !1,
				a = !1,
				r = !1,
				l = 0;
			new MutationObserver(function(c) {
				window.dispatchEvent(new CustomEvent('domChanged', { detail: c })),
					void 0 === window.App._state || e || ((e = !0), window.dispatchEvent(new CustomEvent('appLoaded'))),
					document.querySelector('div[class*="sidebar--navDefault-"]') &&
						!t &&
						((t = !0), window.dispatchEvent(new CustomEvent('fileBrowserLoaded'))),
					!document.getElementById('pluginManagerButton') &&
						document.querySelector('div[class*="sidebar--navDefault-"]') &&
						t &&
						window.dispatchEvent(new CustomEvent('fileBrowserChanged')),
					!document.querySelector('div[class*="sidebar--navDefault-"]') &&
						t &&
						((t = !1), window.dispatchEvent(new CustomEvent('fileBrowserUnloaded'))),
					window.App._fullscreenIsReady &&
						window.App._state.selectedView.fullscreen &&
						!n &&
						((n = !0), window.dispatchEvent(new CustomEvent('fileLoaded'))),
					window.App._fullscreenIsReady &&
						void 0 === window.App._state.selectedView.fullscreen &&
						n &&
						((n = !1), window.dispatchEvent(new CustomEvent('fileUnloaded'))),
					document.querySelector('div[class*="modal--header--"]') &&
						!i &&
						((i = !0),
						window.dispatchEvent(
							new CustomEvent('modalOpened', {
								detail: document.querySelector('div[class*="modal--header"]').innerText.trim()
							})
						)),
					!document.querySelector('div[class*="modal--header--"]') &&
						i &&
						((i = !1), window.dispatchEvent(new CustomEvent('modalClosed'))),
					window.App._state.dropdownShown &&
						!s &&
						((s = !0),
						window.dispatchEvent(
							new CustomEvent('menuOpened', {
								detail: {
									type: window.App._state.dropdownShown.type,
									hasMoreOptions:
										void 0 !==
										Object(o['a'])(document.querySelectorAll('div[class*="multilevel_dropdown--name"]')).find(function(
											e
										) {
											return 'More' === e.innerText;
										})
								}
							})
						)),
					window.App._state.dropdownShown &&
						s &&
						document.querySelector('div[class*="multilevel_dropdown--menu"]') &&
						document.querySelectorAll('div[class*="multilevel_dropdown--menu"]').length > l &&
						window.dispatchEvent(
							new CustomEvent('submenuOpened', {
								detail: {
									type: window.App._state.dropdownShown.type,
									highlightedOption: document.querySelectorAll('div[class*="multilevel_dropdown--optionActive"]')[
										document.querySelectorAll('div[class*="multilevel_dropdown--menu"]').length - 1
									].textContent
								}
							})
						),
					(l = document.querySelectorAll('div[class*="multilevel_dropdown--menu"]').length),
					!window.App._state.dropdownShown &&
						s &&
						((s = !1),
						(a = !1),
						Object(o['a'])(document.getElementsByClassName('plugin-dropdown-submenu')).forEach(function(e) {
							e.parentNode.removeChild(e);
						}),
						window.dispatchEvent(new CustomEvent('menuClosed'))),
					document.getElementsByClassName('focus-target').length > 0 &&
						!r &&
						((r = !0),
						window.dispatchEvent(
							new CustomEvent('focusTargetFound', { detail: document.getElementsByClassName('focus-target')[0] })
						)),
					document.getElementById('pluginOptions') &&
						!a &&
						((a = !0), window.dispatchEvent(new CustomEvent('pluginOptionsFound')));
			}).observe(document.getElementById('react-page'), { childList: !0, subtree: !0 });
		}
		var l = n('85f2'),
			c = n.n(l),
			u = n('d847'),
			d = n.n(u),
			p = n('7618'),
			f = n('a4bb'),
			h = n.n(f),
			g = n('5176'),
			m = n.n(g),
			v = n('f499'),
			y = n.n(v),
			_ = (n('7f7f'), n('db0c')),
			b = n.n(_),
			C = n('795b'),
			w = n.n(C),
			S = (n('34ef'),
			n('28a5'),
			function e(t) {
				var n = App._state.mirror.sceneGraph.get(t),
					i = { id: n.guid, type: n.type };
				if (
					(n.parent &&
						c()(i, 'parent', {
							get: function() {
								return e(n.parent);
							}
						}),
					d()(i, {
						name: {
							get: function() {
								return n.name;
							},
							set: function(e) {
								App.sendMessage('setNodeProperty', { nodeId: n.guid, property: 'name', value: e });
							}
						},
						visible: {
							get: function() {
								return n.visible;
							},
							set: function(e) {
								App.sendMessage('setNodeProperty', { nodeId: n.guid, property: 'visible', value: e });
							}
						},
						locked: {
							get: function() {
								return n.locked;
							},
							set: function(e) {
								App.sendMessage('setNodeProperty', { nodeId: n.guid, property: 'locked', value: e });
							}
						}
					}),
					0 !== n.reversedChildren.length &&
						c()(i, 'children', {
							value: n.reversedChildren
								.map(function(t) {
									return e(t);
								})
								.reverse()
						}),
					'DOCUMENT' !== n.type && 'CANVAS' !== n.type)
				) {
					var s = App.sendMessage('inspectNodeForInteractionTests', { nodeId: n.guid }).args;
					i.absoluteBounds = s.absoluteBounds;
					var o = s.relativeTransform;
					(i.relativeTransform = [[o.m00, o.m01, o.m02], [o.m10, o.m11, o.m12]]),
						'TEXT' === n.type &&
							c()(i, 'characters', {
								get: function() {
									return s.extractedText;
								},
								set: function(e) {
									var t = h()(App._state.mirror.sceneGraphSelection);
									App.sendMessage('clearSelection'),
										App.sendMessage('addToSelection', { nodeIds: [i.id] }),
										App.triggerAction('request-edit-mode');
									var n = document.querySelector('.focus-target');
									n.focus(),
										(n.value = e),
										n.dispatchEvent(new InputEvent('input')),
										App.triggerAction('leave-edit-mode'),
										App.sendMessage('clearSelection'),
										t.length > 0 && App.sendMessage('addToSelection', { nodeIds: t });
								}
							}),
						(i.getProperties = Object(a['a'])(
							regeneratorRuntime.mark(function e() {
								var t, n;
								return regeneratorRuntime.wrap(function(e) {
									while (1)
										switch ((e.prev = e.next)) {
											case 0:
												if ('DOCUMENT' === i.type || 'CANVAS' === i.type) {
													e.next = 33;
													break;
												}
												if (
													((t = h()(App._state.mirror.sceneGraphSelection)),
													1 === t.length && (1 !== t.length || i.id === t[0]))
												) {
													e.next = 9;
													break;
												}
												return (
													App.sendMessage('clearSelection'),
													(e.next = 6),
													P(function() {
														return null === window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 6:
												return (
													App.sendMessage('addToSelection', { nodeIds: [i.id] }),
													(e.next = 9),
													P(function() {
														return null !== window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 9:
												(n = App._state.mirror.selectionProperties),
													d()(i, {
														size: {
															get: function() {
																return s.size;
															},
															set: function(e) {
																E(this.id, { width: e.x, height: e.y });
															}
														},
														opacity: {
															get: function() {
																return n.opacity;
															},
															set: function(e) {
																E(this.id, { opacity: e });
															}
														},
														blendMode: {
															get: function() {
																return n.blendMode;
															},
															set: function(e) {
																E(this.id, { blendMode: e });
															}
														},
														isMask: {
															get: function() {
																return n.mask;
															},
															set: function(e) {
																E(this.id, { mask: e });
															}
														},
														effects: {
															get: function() {
																return n.effects;
															},
															set: function(e) {
																E(this.id, { effects: e });
															}
														},
														constraints: {
															get: function() {
																return { horizontal: n.horizontalConstraint, vertical: n.verticalConstraint };
															},
															set: function(e) {
																E(this.id, { horizontalConstraint: e.horizontal, verticalConstraint: e.vertical });
															}
														},
														x: {
															get: function() {
																return n.x;
															},
															set: function(e) {
																E(this.id, { x: e });
															}
														},
														y: {
															get: function() {
																return n.y;
															},
															set: function(e) {
																E(this.id, { y: e });
															}
														},
														width: {
															get: function() {
																return n.width;
															},
															set: function(e) {
																E(this.id, { width: e });
															}
														},
														height: {
															get: function() {
																return n.height;
															},
															set: function(e) {
																E(this.id, { height: e });
															}
														},
														exportSettings: {
															get: function() {
																return n.exportSettings;
															},
															set: function(e) {
																E(this.id, { exportSettings: e });
															}
														}
													}),
													n.inheritFillStyleID &&
														'__mixed__' !== h()(n.inheritFillStyleID)[0] &&
														c()(i, 'fillStyleId', {
															get: function() {
																return 4294967295 === n.inheritFillStyleID.sessionID ? '' : n.inheritFillStyleKey;
															},
															set: function(e) {
																var t = this,
																	n = b()(App._state.library.published.styles)
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.concat(b()(App._state.library.local.styles)),
																	i = n.find(function(t) {
																		return t.key === e;
																	});
																if (i.canvas_url) {
																	var s = new XMLHttpRequest();
																	s.open('GET', i.canvas_url),
																		(s.responseType = 'arraybuffer'),
																		(s.onload = function() {
																			var e = App.sendMessage(
																				'getOrCreateSubscribedStyleNodeId',
																				{
																					styleKey: i.key,
																					fileKey: i.file_key,
																					editingFileKey: App._state.editingFileKey,
																					versionHash: i.content_hash
																				},
																				new Uint8Array(s.response)
																			).args.localGUID.split(':');
																			E(t.id, { inheritFillStyleID: { sessionID: e[0], localID: e[1] } });
																		}),
																		s.send();
																} else {
																	var a = i.node_id.split(':');
																	E(this.id, { inheritFillStyleID: { sessionID: a[0], localID: a[1] } });
																}
															}
														}),
													n.inheritFillStyleIDForStroke &&
														'__mixed__' !== h()(n.inheritFillStyleIDForStroke)[0] &&
														4294967295 !== n.inheritFillStyleIDForStroke.sessionID &&
														c()(i, 'strokeStyleId', {
															get: function() {
																return n.inheritFillStyleKeyForStroke;
															},
															set: function(e) {
																var t = this,
																	n = b()(App._state.library.published.styles)
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.concat(b()(App._state.library.local.styles)),
																	i = n.find(function(t) {
																		return t.key === e;
																	});
																if (i.canvas_url) {
																	var s = new XMLHttpRequest();
																	s.open('GET', i.canvas_url),
																		(s.responseType = 'arraybuffer'),
																		(s.onload = function() {
																			var e = App.sendMessage(
																				'getOrCreateSubscribedStyleNodeId',
																				{
																					styleKey: i.key,
																					fileKey: i.file_key,
																					editingFileKey: App._state.editingFileKey,
																					versionHash: i.content_hash
																				},
																				new Uint8Array(s.response)
																			).args.localGUID.split(':');
																			E(t.id, { inheritFillStyleIDForStroke: { sessionID: e[0], localID: e[1] } });
																		}),
																		s.send();
																} else {
																	var a = i.node_id.split(':');
																	E(this.id, { inheritFillStyleIDForStroke: { sessionID: a[0], localID: a[1] } });
																}
															}
														}),
													n.inheritFillStyleIDForBackground &&
														'__mixed__' !== h()(n.inheritFillStyleIDForBackground)[0] &&
														4294967295 !== n.inheritFillStyleIDForBackground.sessionID &&
														c()(i, 'backgroundStyleId', {
															get: function() {
																return n.inheritFillStyleKeyForBackground;
															},
															set: function(e) {
																var t = this,
																	n = b()(App._state.library.published.styles)
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.concat(b()(App._state.library.local.styles)),
																	i = n.find(function(t) {
																		return t.key === e;
																	});
																if (i.canvas_url) {
																	var s = new XMLHttpRequest();
																	s.open('GET', i.canvas_url),
																		(s.responseType = 'arraybuffer'),
																		(s.onload = function() {
																			var e = App.sendMessage(
																				'getOrCreateSubscribedStyleNodeId',
																				{
																					styleKey: i.key,
																					fileKey: i.file_key,
																					editingFileKey: App._state.editingFileKey,
																					versionHash: i.content_hash
																				},
																				new Uint8Array(s.response)
																			).args.localGUID.split(':');
																			E(t.id, { inheritFillStyleIDForBackground: { sessionID: e[0], localID: e[1] } });
																		}),
																		s.send();
																} else {
																	var a = i.node_id.split(':');
																	E(this.id, { inheritFillStyleIDForBackground: { sessionID: a[0], localID: a[1] } });
																}
															}
														}),
													n.inheritEffectStyleID &&
														'__mixed__' !== h()(n.inheritEffectStyleID)[0] &&
														c()(i, 'effectStyleId', {
															get: function() {
																return 4294967295 === n.inheritEffectStyleID.sessionID ? '' : n.inheritEffectStyleKey;
															},
															set: function(e) {
																var t = this,
																	n = b()(App._state.library.published.styles)
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.concat(b()(App._state.library.local.styles)),
																	i = n.find(function(t) {
																		return t.key === e;
																	});
																if (i.canvas_url) {
																	var s = new XMLHttpRequest();
																	s.open('GET', i.canvas_url),
																		(s.responseType = 'arraybuffer'),
																		(s.onload = function() {
																			var e = App.sendMessage(
																				'getOrCreateSubscribedStyleNodeId',
																				{
																					styleKey: i.key,
																					fileKey: i.file_key,
																					editingFileKey: App._state.editingFileKey,
																					versionHash: i.content_hash
																				},
																				new Uint8Array(s.response)
																			).args.localGUID.split(':');
																			E(t.id, { inheritEffectStyleID: { sessionID: e[0], localID: e[1] } });
																		}),
																		s.send();
																} else {
																	var a = i.node_id.split(':');
																	E(this.id, { inheritEffectStyleID: { sessionID: a[0], localID: a[1] } });
																}
															}
														}),
													n.inheritGridStyleID &&
														'__mixed__' !== h()(n.inheritGridStyleID)[0] &&
														c()(i, 'gridStyleId', {
															get: function() {
																return 4294967295 === n.inheritGridStyleID.sessionID ? '' : n.inheritGridStyleKey;
															},
															set: function(e) {
																var t = this,
																	n = b()(App._state.library.published.styles)
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.concat(b()(App._state.library.local.styles)),
																	i = n.find(function(t) {
																		return t.key === e;
																	});
																if (i.canvas_url) {
																	var s = new XMLHttpRequest();
																	s.open('GET', i.canvas_url),
																		(s.responseType = 'arraybuffer'),
																		(s.onload = function() {
																			var e = App.sendMessage(
																				'getOrCreateSubscribedStyleNodeId',
																				{
																					styleKey: i.key,
																					fileKey: i.file_key,
																					editingFileKey: App._state.editingFileKey,
																					versionHash: i.content_hash
																				},
																				new Uint8Array(s.response)
																			).args.localGUID.split(':');
																			E(t.id, { inheritGridStyleID: { sessionID: e[0], localID: e[1] } });
																		}),
																		s.send();
																} else {
																	var a = i.node_id.split(':');
																	E(this.id, { inheritGridStyleID: { sessionID: a[0], localID: a[1] } });
																}
															}
														}),
													('FRAME' === i.type && 'INSTANCE' === i.type) ||
														d()(i, {
															fills: {
																get: function() {
																	return n.fillPaints;
																},
																set: function(e) {
																	E(this.id, { fillPaints: e });
																}
															},
															strokes: {
																get: function() {
																	return n.fillPaints;
																},
																set: function(e) {
																	E(this.id, { fillPaints: e });
																}
															},
															strokeWeight: {
																get: function() {
																	return n.strokeWeight;
																},
																set: function(e) {
																	E(this.id, { strokeWeight: e });
																}
															},
															strokeAlign: {
																get: function() {
																	return n.strokeAlign;
																},
																set: function(e) {
																	E(this.id, { strokeAlign: e });
																}
															},
															strokeCap: {
																get: function() {
																	return n.strokeCap;
																},
																set: function(e) {
																	E(this.id, { strokeCap: e });
																}
															},
															strokeJoin: {
																get: function() {
																	return n.strokeJoin;
																},
																set: function(e) {
																	E(this.id, { strokeJoin: e });
																}
															},
															dashPattern: {
																get: function() {
																	return n.dashPattern;
																},
																set: function(e) {
																	E(this.id, { dashPattern: e });
																}
															}
														}),
													('FRAME' !== i.type && 'INSTANCE' !== i.type && 'SYMBOL' !== i.type) ||
														d()(i, {
															backgrounds: {
																get: function() {
																	return n.backgroundPaints;
																},
																set: function(e) {
																	E(this.id, { backgroundPaints: e });
																}
															},
															layoutGrids: {
																get: function() {
																	return n.layoutGrids;
																},
																set: function(e) {
																	E(this.id, { layoutGrids: e });
																}
															},
															clipsContent: {
																get: function() {
																	return !n.frameMaskDisabled;
																},
																set: function(e) {
																	E(this.id, { frameMaskDisabled: !e });
																}
															}
														}),
													('BOOLEAN_OPERATION' !== i.type &&
														'VECTOR' !== i.type &&
														'STAR' !== i.type &&
														'REGULAR_POLYGON' !== i.type &&
														'RECTANGLE' !== i.type) ||
														d()(i, {
															cornerRadius: {
																get: function() {
																	return n.cornerRadius;
																},
																set: function(e) {
																	E(this.id, { cornerRadius: e });
																}
															},
															cornerSmoothing: {
																get: function() {
																	return n.cornerSmoothing;
																},
																set: function(e) {
																	E(this.id, { cornerSmoothing: e });
																}
															}
														}),
													(e.t0 = i.type),
													(e.next =
														'STAR' === e.t0
															? 22
															: 'ELLIPSE' === e.t0
															? 24
															: 'REGULAR_POLYGON' === e.t0
															? 26
															: 'RECTANGLE' === e.t0
															? 28
															: 'TEXT' === e.t0
															? 30
															: 32);
												break;
											case 22:
												return (
													d()(i, {
														pointCount: {
															get: function() {
																return n.count;
															},
															set: function(e) {
																E(this.id, { count: e });
															}
														},
														starInnerRadius: {
															get: function() {
																return n.starInnerScale;
															},
															set: function(e) {
																E(this.id, { starInnerScale: e });
															}
														}
													}),
													e.abrupt('break', 32)
												);
											case 24:
												return (
													c()(i, 'arcData', {
														get: function() {
															return { startingAngle: n.arcStart, endingAngle: n.arcSweep, innerRadius: n.arcRadius };
														},
														set: function(e) {
															E(this.id, {
																arcStart: e.startingAngle,
																arcSweep: e.endingAngle,
																arcRadius: e.innerRadius
															});
														}
													}),
													e.abrupt('break', 32)
												);
											case 26:
												return (
													c()(i, 'pointCount', {
														get: function() {
															return n.count;
														},
														set: function(e) {
															E(this.id, { count: e });
														}
													}),
													e.abrupt('break', 32)
												);
											case 28:
												return (
													d()(i, {
														rectangleBottomLeftCornerRadius: {
															get: function() {
																return n.rectangleBottomLeftCornerRadius;
															},
															set: function(e) {
																E(this.id, { rectangleBottomLeftCornerRadius: e });
															}
														},
														rectangleBottomRightCornerRadius: {
															get: function() {
																return n.rectangleBottomRightCornerRadius;
															},
															set: function(e) {
																E(this.id, { rectangleBottomRightCornerRadius: e });
															}
														},
														rectangleTopLeftCornerRadius: {
															get: function() {
																return n.rectangleTopLeftCornerRadius;
															},
															set: function(e) {
																E(this.id, { rectangleTopLeftCornerRadius: e });
															}
														},
														rectangleTopRightCornerRadius: {
															get: function() {
																return n.rectangleTopRightCornerRadius;
															},
															set: function(e) {
																E(this.id, { rectangleTopRightCornerRadius: e });
															}
														},
														rectangleCornerRadiiIndependent: {
															get: function() {
																return n.rectangleCornerRadiiIndependent;
															},
															set: function(e) {
																E(this.id, { rectangleCornerRadiiIndependent: e });
															}
														}
													}),
													e.abrupt('break', 32)
												);
											case 30:
												d()(i, {
													fontSize: {
														get: function() {
															return n.fontSize;
														},
														set: function(e) {
															E(this.id, { fontSize: e });
														}
													},
													textAlignHorizontal: {
														get: function() {
															return n.textAlignHorizontal;
														},
														set: function(e) {
															E(this.id, { textAlignHorizontal: e });
														}
													},
													textAlignVertical: {
														get: function() {
															return n.textAlignVertical;
														},
														set: function(e) {
															E(this.id, { textAlignVertical: e });
														}
													},
													textDecoration: {
														get: function() {
															return n.textDecoration;
														},
														set: function(e) {
															E(this.id, { textDecoration: e });
														}
													},
													textAutoResize: {
														get: function() {
															return n.textAutoResize;
														},
														set: function(e) {
															E(this.id, { textAutoResize: e });
														}
													},
													fontName: {
														get: function() {
															return n.fontName;
														},
														set: function(e) {
															E(this.id, { fontName: e });
														}
													},
													letterSpacing: {
														get: function() {
															return n.letterSpacing;
														},
														set: function(e) {
															E(this.id, { letterSpacing: e });
														}
													},
													lineHeight: {
														get: function() {
															return n.lineHeight;
														},
														set: function(e) {
															E(this.id, { lineHeight: e });
														}
													},
													paragraphIndent: {
														get: function() {
															return n.paragraphIndent;
														},
														set: function(e) {
															E(this.id, { paragraphIndent: e });
														}
													},
													paragraphSpacing: {
														get: function() {
															return n.paragraphSpacing;
														},
														set: function(e) {
															E(this.id, { paragraphSpacing: e });
														}
													},
													textCase: {
														get: function() {
															return n.textCase;
														},
														set: function(e) {
															E(this.id, { textCase: e });
														}
													}
												}),
													n.inheritTextStyleID &&
														'__mixed__' !== h()(n.inheritTextStyleID)[0] &&
														c()(i, 'textStyleId', {
															get: function() {
																return 4294967295 === n.inheritTextStyleID.sessionID ? '' : n.inheritTextStyleKey;
															},
															set: function(e) {
																var t = this,
																	n = b()(App._state.library.published.styles)
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.map(function(e) {
																			return b()(e);
																		})
																		.flat()
																		.concat(b()(App._state.library.local.styles)),
																	i = n.find(function(t) {
																		return t.key === e;
																	});
																if (i.canvas_url) {
																	var s = new XMLHttpRequest();
																	s.open('GET', i.canvas_url),
																		(s.responseType = 'arraybuffer'),
																		(s.onload = function() {
																			var e = App.sendMessage(
																				'getOrCreateSubscribedStyleNodeId',
																				{
																					styleKey: i.key,
																					fileKey: i.file_key,
																					editingFileKey: App._state.editingFileKey,
																					versionHash: i.content_hash
																				},
																				new Uint8Array(s.response)
																			).args.localGUID.split(':');
																			E(t.id, { inheritTextStyleID: { sessionID: e[0], localID: e[1] } });
																		}),
																		s.send();
																} else {
																	var a = i.node_id.split(':');
																	E(this.id, { inheritTextStyleID: { sessionID: a[0], localID: a[1] } });
																}
															}
														});
											case 32:
												return e.abrupt('return', i);
											case 33:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						));
				}
				return (
					'BOOLEAN_OPERATION' === n.type && (i.booleanOperation = n.booleanOperation),
					i.children &&
						((i.findAll = function(e) {
							return I(i, e);
						}),
						(i.findOne = function(e) {
							return T(i, e);
						})),
					'CANVAS' !== i.type &&
						(i.resize = function(e, t) {
							E(i.id, { width: e, height: t });
						}),
					(i.exportAsync = (function() {
						var e = Object(a['a'])(
							regeneratorRuntime.mark(function e(t) {
								var n, s, a, o, r;
								return regeneratorRuntime.wrap(function(e) {
									while (1)
										switch ((e.prev = e.next)) {
											case 0:
												if (
													((n = h()(App._state.mirror.sceneGraphSelection)),
													1 === n.length && (1 !== n.length || i.id === n[0]))
												) {
													e.next = 8;
													break;
												}
												return (
													App.sendMessage('clearSelection'),
													(e.next = 5),
													P(function() {
														return null === window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 5:
												return (
													App.sendMessage('addToSelection', { nodeIds: [i.id] }),
													(e.next = 8),
													P(function() {
														return null !== window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 8:
												return (e.next = 10), i.getProperties();
											case 10:
												return (
													(s = e.sent),
													(a = s.exportSettings),
													(o = t ? [t] : [{ contentsOnly: !0, imageType: 'PNG' }]),
													a[0] !== o && (s.exportSettings = o),
													(e.next = 16),
													A()
												);
											case 16:
												return (r = e.sent), (s.exportSettings = a), e.abrupt('return', r);
											case 19:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						);
						return function(t) {
							return e.apply(this, arguments);
						};
					})()),
					i
				);
			}),
			I = function(e, t) {
				var n = [],
					i = function e(t) {
						if (t.children)
							for (var i = 0; i < t.children.length; i++) {
								var s = t.children[i];
								n.push(s), e(s);
							}
					};
				return (
					i(e),
					(t =
						t ||
						function() {
							return !0;
						}),
					n.filter(t)
				);
			},
			T = function(e, t) {
				var n = [],
					i = function e(t) {
						if (t.children)
							for (var i = 0; i < t.children.length; i++) {
								var s = t.children[i];
								n.push(s), e(s);
							}
					};
				return i(e), t && n.find(t) ? n.find(t) : null;
			},
			P = function(e) {
				var t = function t(n) {
					e()
						? n()
						: setTimeout(function() {
								return t(n);
						  }, 10);
				};
				return new w.a(t);
			},
			E = (function() {
				var e = Object(a['a'])(
					regeneratorRuntime.mark(function e(t, n) {
						var i;
						return regeneratorRuntime.wrap(function(e) {
							while (1)
								switch ((e.prev = e.next)) {
									case 0:
										if (
											((i = h()(App._state.mirror.sceneGraphSelection)),
											1 === i.length && (1 !== i.length || t === i[0]))
										) {
											e.next = 8;
											break;
										}
										return (
											App.sendMessage('clearSelection'),
											(e.next = 5),
											P(function() {
												return null === window.App._state.mirror.selectionProperties.visible;
											})
										);
									case 5:
										return (
											App.sendMessage('addToSelection', { nodeIds: [t] }),
											(e.next = 8),
											P(function() {
												return null !== window.App._state.mirror.selectionProperties.visible;
											})
										);
									case 8:
										App.updateSelectionProperties(n);
									case 9:
									case 'end':
										return e.stop();
								}
						}, e);
					})
				);
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})(),
			A = function() {
				return new w.a(function(e) {
					var t = document.createElement,
						n = document.createElement('a');
					document.createElement = function() {
						var e = n;
						return (
							(e.click = function() {
								document.createElement = t;
							}),
							e
						);
					};
					var i = URL.createObjectURL;
					(URL.createObjectURL = function() {
						var t = arguments.length <= 0 ? void 0 : arguments[0],
							n = new FileReader();
						(n.onload = function() {
							e({ blob: t, buffer: n.result, url: i(t) }), (URL.createObjectURL = i);
						}),
							n.readAsArrayBuffer(arguments.length <= 0 ? void 0 : arguments[0]);
					}),
						App.triggerAction('export-selected-exportables-direct');
				});
			},
			x = function(e, t, n) {
				if (document.getElementsByClassName('focus-target').length > 0) {
					var i = document.getElementsByClassName('focus-target')[0];
					k(i, e, t, n);
				} else
					window.addEventListener('focusTargetFound', function(i) {
						var s = i.detail;
						k(s, e, t, n);
					});
			},
			k = function(e, t, n, i) {
				t.mac &&
					t.windows &&
					e.addEventListener('keydown', function(e) {
						'MacIntel' === navigator.platform &&
							e.metaKey !== !t.mac.command &&
							e.shiftKey !== !t.mac.shift &&
							e.ctrlKey !== !t.mac.control &&
							e.altKey !== !t.mac.option &&
							e.key.toLowerCase() === t.mac.key.toLowerCase() &&
							(('function' === typeof i && i()) || 'function' !== typeof i) &&
							(e.preventDefault(), n(e)),
							('Win32' !== navigator.platform && 'Win64' !== navigator.platform) ||
								(e.shiftKey !== !t.windows.shift &&
									e.ctrlKey !== !t.windows.control &&
									e.altKey !== !t.windows.alt &&
									e.key.toLowerCase() === t.windows.key.toLowerCase() &&
									(('function' === typeof i && i()) || 'function' !== typeof i) &&
									(e.preventDefault(), n(e)));
					});
			},
			O = n('768b'),
			M = n('a026'),
			D = n('1881'),
			R = n.n(D),
			L = n('4bbf'),
			N = n.n(L);
		(M['a'].config.productionTip = !1),
			M['a'].use(R.a, { dynamic: !0, injectModalsContainer: !0 }),
			M['a'].use(N.a),
			(window.vueModal = new M['a']());
		var F = function(e, t, n, i, a, r, l, c, u, d, p, f, h) {
				(e = e || 'My Plugin'),
					(r = r || 300),
					(l = l || 'auto'),
					'auto' !== l && (l = l >= window.innerHeight - 40 ? window.innerHeight : l + 40),
					(c = c || 0.5),
					(u = u || 0.5),
					vueModal.$modal.hide(e),
					vueModal.$modal.show(
						{
							props: ['tabs'],
							template: "\n\t\t\t\t\t<div class='modal js-fullscreen-prevent-event-capture'>\n\t\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t\t".concat(
								e,
								h
									? "\n\t\t\t\t\t\t\t<div class='modal-close-button' @click=\"$emit('close')\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<vue-tabs>\n\t\t\t\t\t\t\t<v-tab v-for='tab in tabs' :key='tab' :title=\"tab\">\n\t\t\t\t\t\t\t</v-tab>\n\t\t\t\t\t\t</vue-tabs>\n\t\t\t\t\t</div>\n\t\t\t"
									: "\n\t\t\t\t\t\t\t<div class='modal-close-button' @click=\"$emit('close')\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t"
							)
						},
						{
							tabs: h
								? h.map(function(e, t) {
										return e.title ? e.title : 'Tab '.concat(t + 1);
								  })
								: []
						},
						{
							name: e,
							draggable: !d && '.modal-header',
							width: r >= window.innerWidth ? window.innerWidth : r,
							height: l,
							pivotX: c,
							pivotY: u,
							maxWidth: window.innerWidth,
							maxHeight: window.innerHeight - 36
						},
						{
							opened: function(e) {
								if (d) {
									var r = document.getElementsByClassName('v--modal-overlay')[0];
									r.style.setProperty('width', '100%', 'important'), r.style.setProperty('height', '100%', 'important');
								}
								if (h) {
									!1 === p &&
										Object(o['a'])(document.getElementsByClassName('tab-content')).forEach(function(e) {
											return e.classList.add('no-padding');
										});
									var l = h.map(function(t) {
											var n = h.indexOf(t);
											return e.ref.firstChild.children[1].children[1].children[n].firstChild;
										}),
										c = !0,
										u = !1,
										g = void 0;
									try {
										for (
											var m,
												v = function() {
													var e = Object(O['a'])(m.value, 2),
														t = e[0],
														n = e[1],
														i = l[t],
														s = i.parentNode;
													if (n.html) {
														var a = document.createElement('div');
														(a.innerHTML = n.html), i.parentNode.replaceChild(a, i);
													} else if (!n.reactComponent && !n.vueComponent) {
														var o = document.createElement('div');
														(o.innerHTML = '<div></div>'), i.parentNode.replaceChild(o, i);
													}
													n.reactComponent &&
														figmaPlus.ReactDOM.render(figmaPlus.React.createElement(n.reactComponent), i),
														n.vueComponent &&
															new figmaPlus.Vue({
																el: i,
																render: function(e) {
																	return e(n.vueComponent);
																}
															}),
														!1 === f && s.classList.remove('tab-content'),
														n.onMount && n.onMount(s.firstChild);
												},
												y = s()(h.entries());
											!(c = (m = y.next()).done);
											c = !0
										)
											v();
									} catch (S) {
										(u = !0), (g = S);
									} finally {
										try {
											c || null == y.return || y.return();
										} finally {
											if (u) throw g;
										}
									}
								} else {
									!1 === p &&
										Object(o['a'])(document.getElementsByClassName('modal-content')).forEach(function(e) {
											return e.classList.add('no-padding');
										});
									var _ = e.ref.firstChild.children[1].firstChild,
										b = _.parentNode;
									if (t) {
										var C = document.createElement('div');
										(C.innerHTML = t), _.parentNode.replaceChild(C, _);
									} else if (!i && !a) {
										var w = document.createElement('div');
										(w.innerHTML = '<div></div>'), _.parentNode.replaceChild(w, _);
									}
									i && figmaPlus.ReactDOM.render(figmaPlus.React.createElement(i), _),
										a &&
											new figmaPlus.Vue({
												el: _,
												render: function(e) {
													return e(a);
												}
											}),
										!1 === f && b.classList.remove('modal-content'),
										n && n(b.firstChild);
								}
							}
						}
					),
					null === document.querySelector('div[class*="nav-"]')
						? figmaPlus.onFileUnloaded(function() {
								vueModal.$modal.hide(e);
						  })
						: figmaPlus.onFileBrowserUnloaded(function() {
								vueModal.$modal.hide(e);
						  });
			},
			B = function(e) {
				vueModal.$modal.hide(e);
			},
			j = n('e814'),
			U = n.n(j),
			q = (n('6762'),
			n('2fdb'),
			function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'div',
					{
						ref: 'menuItem',
						staticClass: 'plugin-dropdown-option',
						on: { click: e.runAction, mousemove: e.showSubmenu, mouseleave: e.hideSubmenu }
					},
					[
						n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v(e._s(e.label))]),
						e.shortcut && !e.submenuItems
							? n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [
									e._v(e._s(e.getShortcutText(e.shortcut)))
							  ])
							: e._e(),
						e.submenuItems ? n('div', { staticClass: 'plugin-dropdown-option-chevron' }) : e._e(),
						e.submenuItems
							? n(
									'div',
									{ ref: 'submenu', staticClass: 'plugin-dropdown-submenu' },
									e._l(e.submenuItems, function(t) {
										return e.getConditionTrue(t.condition)
											? n(
													'div',
													{
														staticClass: 'plugin-dropdown-option',
														attrs: { submenuItem: t },
														on: {
															click: function(n) {
																return e.runSubmenuItemAction(n, t.action);
															}
														}
													},
													[
														n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v(e._s(t.label))]),
														t.shortcut
															? n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [
																	e._v(e._s(e.getShortcutText(t.shortcut)))
															  ])
															: e._e()
													]
											  )
											: e._e();
									}),
									0
							  )
							: e._e()
					]
				);
			}),
			$ = [],
			H = {
				data: function() {
					return { submenuShown: !1 };
				},
				props: ['menuType', 'label', 'action', 'shortcut', 'submenuItems', 'isSubmenu'],
				mounted: function() {
					this.submenuItems && (this.$refs.submenu.style.display = 'none');
				},
				methods: {
					runAction: function(e) {
						this.submenuItems || this.action(e);
					},
					runSubmenuItemAction: function(e, t) {
						t && t(e);
					},
					getConditionTrue: function(e) {
						return 'function' !== typeof e || e();
					},
					getShortcutText: function(e) {
						if (e) {
							var t = '';
							return (
								e.mac &&
									e.windows &&
									('MacIntel' === navigator.platform &&
										((e = e.mac),
										(t += e.control ? '⌃' : ''),
										(t += e.option ? '⌥' : ''),
										(t += e.shift ? '⇧' : ''),
										(t += e.command ? '⌘' : ''),
										(t += e.key ? e.key.charAt(0).toUpperCase() + e.key.slice(1) : '')),
									('Win32' !== navigator.platform && 'Win64' !== navigator.platform) ||
										((e = e.windows),
										(t += e.control ? 'Ctrl+' : ''),
										(t += e.alt ? 'Alt+' : ''),
										(t += e.shift ? 'Shift+' : ''),
										(t += e.key ? e.key.charAt(0).toUpperCase() + e.key.slice(1) : ''))),
								t
							);
						}
					},
					showSubmenu: function() {
						var e = this.isSubmenu
							? document.querySelectorAll('div[class*="multilevel_dropdown--optionActive"]')[1]
							: document.querySelector('div[class*="multilevel_dropdown--optionActive"]');
						if (e) {
							var t = Object(o['a'])(e.classList).find(function(e) {
								return e.includes('optionActive');
							});
							e.classList.remove(t);
							var n = document.querySelector('div[class*="multilevel_dropdown--submenu--"]');
							n && (n.style.display = 'none'),
								(e.onmouseover = function() {
									e.classList.add(t), n && (n.style.display = '');
								});
						}
						if (this.submenuItems) {
							var i = this.$refs.menuItem,
								s = this.$refs.submenu;
							(s.style.display = 'block'),
								(s.style.bottom = ''),
								(s.style.top = ''.concat(i.getBoundingClientRect().top - 8, 'px')),
								window.innerHeight - s.getBoundingClientRect().bottom < 0 &&
									((s.style.top = ''), (s.style.bottom = '8px')),
								(s.style.left = ''.concat(i.getBoundingClientRect().right, 'px'));
						}
					},
					hideSubmenu: function() {
						this.submenuItems && (this.$refs.submenu.style.display = 'none');
					}
				}
			},
			K = H,
			V = n('2877'),
			G = Object(V['a'])(K, q, $, !1, null, null, null),
			W = G.exports,
			z = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'div',
					{
						ref: 'menuItem',
						staticClass: 'plugin-dropdown-option',
						attrs: { id: 'selectionPluginsMenuItem' },
						on: {
							click: function(e) {
								return e.target !== e.currentTarget
									? null
									: (function(e) {
											return e.stopPropagation();
									  })(e);
							},
							mouseenter: e.showSubmenu
						}
					},
					[
						n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v('Figma Plus')]),
						n('div', { staticClass: 'plugin-dropdown-option-chevron' }),
						n(
							'div',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: e.menuShown, expression: 'menuShown' }],
								ref: 'submenu',
								staticClass: 'plugin-dropdown-submenu'
							},
							[
								n('div', { attrs: { id: 'selectionPluginOptions' } }),
								e.hasPlugins
									? e._e()
									: n('div', { staticClass: 'plugin-dropdown-option', on: { click: e.openPluginManager } }, [
											n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v('Get Plugins')]),
											n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [e._v(e._s(e.shortcut))])
									  ])
							]
						)
					]
				);
			},
			J = [],
			Y = {
				data: function() {
					return {
						menuShown: !1,
						hasPlugins: !1,
						shortcut: navigator.platform.includes('Win') ? 'Ctrl+Shift+P' : '⇧⌘P'
					};
				},
				mounted: function() {
					var e = this;
					Object(o['a'])(document.querySelectorAll('div[class*="multilevel_dropdown--option"]')).forEach(function(t) {
						return t.addEventListener('mouseover', function() {
							return (e.menuShown = !1);
						});
					});
				},
				methods: {
					showSubmenu: function() {
						this.hasPlugins = document.getElementById('selectionPluginOptions').children.length > 0;
						var e = document.querySelector('div[class*="multilevel_dropdown--optionActive"]');
						if (e) {
							var t = Object(o['a'])(e.classList).find(function(e) {
								return e.includes('optionActive');
							});
							e.classList.remove(t);
							var n = document.querySelector('div[class*="multilevel_dropdown--submenu"]');
							n && (n.style.display = 'none'),
								(e.onmouseenter = function() {
									e.classList.add(t), n && (n.style.display = '');
								});
						}
						var i = this.$refs.menuItem,
							s = this.$refs.submenu,
							a = i.getBoundingClientRect(),
							r = s.getBoundingClientRect();
						(s.style.bottom = ''),
							(s.style.top = ''.concat(a.top - 8, 'px')),
							(s.style.left = ''.concat(a.right, 'px')),
							(this.menuShown = !0),
							window.innerHeight - r.bottom < 0 && ((s.style.top = ''), (s.style.bottom = '6px'));
					},
					openPluginManager: function() {
						figmaPlus.togglePluginManager();
					}
				}
			},
			X = Y,
			Z = Object(V['a'])(X, z, J, !1, null, null, null),
			Q = Z.exports,
			ee = function(e, t, n, i, s, a) {
				figmaPlus.onMenuOpened(function(r, l) {
					if (
						('DROPDOWN_TYPE_SELECTION_CONTEXT_MENU' === r || 'DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU' === r) &&
						!document.getElementById('selectionPluginsMenuItem')
					) {
						var c = document.createElement('div'),
							u = Object(o['a'])(document.querySelectorAll('div[class*="multilevel_dropdown--option"]')).find(function(
								e
							) {
								return 'Development' === e.firstChild.innerText;
							}),
							d = Object(o['a'])(document.querySelectorAll('div[class*="multilevel_dropdown--option"]')).find(function(
								e
							) {
								return 'Extensions' === e.firstChild.innerText;
							}),
							p = Object(o['a'])(document.querySelectorAll('div[class*="multilevel_dropdown--option"]')).find(function(
								e
							) {
								return 'Show/Hide' === e.firstChild.innerText;
							}),
							f = p.parentNode;
						if (u) f.insertBefore(c, u.nextSibling);
						else if (d) f.insertBefore(c, d.nextSibling);
						else {
							var h = document.createElement('div');
							(h.className = 'dropdown--separator--11K1o'), f.insertBefore(c, p), f.insertBefore(h, p);
						}
						new figmaPlus.Vue({
							el: c,
							render: function(e) {
								return e(Q);
							}
						});
						var g = f.getBoundingClientRect();
						window.innerHeight - g.bottom < 6 && (f.style.top = ''.concat(window.innerHeight - g.height - 6, 'px'));
					}
					r !== e || ('function' === typeof i && !i()) || l || te(e, !1, t, n, s, a);
				}),
					figmaPlus.onSubmenuOpened(function(o, r) {
						o !== e || ('function' === typeof i && !i()) || 'More' !== r || te(e, !0, t, n, s, a);
					});
			},
			te = function(e, t, n, i, s, a) {
				var r = t
					? document.querySelector('div[class*="multilevel_dropdown--menu--"]')
					: document.querySelector('div[class*="dropdown--dropdown--"]');
				'fullscreen-menu-dropdown' === e && (r = document.getElementById('pluginOptions')),
					('DROPDOWN_TYPE_SELECTION_CONTEXT_MENU' !== e && 'DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU' !== e) ||
						(r = document.getElementById('selectionPluginOptions'));
				var l = document.createElement('div');
				r.appendChild(l),
					new figmaPlus.Vue({
						el: l,
						data: function() {
							return { menuType: e, label: n, action: i, shortcut: s, submenuItems: a, isSubmenu: t };
						},
						components: { MenuItem: W },
						template:
							"<MenuItem :menuType='menuType' :label='label' :action='action' :shortcut='shortcut' :submenuItems='submenuItems' :isSubmenu='isSubmenu'></MenuItem>"
					}),
					'fullscreen-menu-dropdown' === e &&
						'' === r.style.borderBottom &&
						((r.style.borderBottom = '1px solid #2c2c2c'),
						(r.style.paddingBottom = '6px'),
						(r.style.marginBottom = '6px'));
				var c = Object(o['a'])(r.children).filter(function(e) {
					return e.className.includes('dropdown--separator');
				}).length;
				r.style.top = ''.concat(t ? U()(r.style.top) - 24 - 2 * c : U()(r.style.top) - 24, 'px');
			},
			ne = n('ab5b'),
			ie = n.n(ne),
			se = n('8bc8'),
			ae = n.n(se);
		M['a'].config.productionTip = !1;
		var oe = {
			Vue: M['a'],
			React: ie.a,
			ReactDOM: ae.a,
			getNodeById: function(e) {
				return S(e);
			},
			styles: {
				findAll: function(e) {
					var t = b()(App._state.library.published.styles)
							.map(function(e) {
								return b()(e);
							})
							.flat()
							.map(function(e) {
								return b()(e);
							})
							.flat()
							.map(function(e) {
								var t = {
									id: e.key,
									name: e.name,
									type: e.style_type,
									description: e.description,
									canvas_url: e.canvas_url,
									file_key: e.file_key,
									content_hash: e.content_hash
								};
								return (
									e.thumbnail_url && (t.thumbnail_url = e.thumbnail_url),
									'FILL' === e.style_type && e.meta && (t.fills = e.meta.style_thumbnail.fillPaints),
									'EFFECT' === e.style_type && e.meta && (t.effects = e.meta.style_thumbnail.effects),
									'GRID' === e.style_type && e.meta && (t.layoutGrids = e.meta.style_thumbnail.layoutGrids),
									(t.remote = !0),
									t
								);
							}),
						n = oe.styles.local.concat(t);
					return (
						(e =
							e ||
							function() {
								return !0;
							}),
						n.filter(e)
					);
				},
				findOne: function(e) {
					var t = b()(App._state.library.published.styles)
							.map(function(e) {
								return b()(e);
							})
							.flat()
							.map(function(e) {
								return b()(e);
							})
							.flat()
							.map(function(e) {
								var t = {
									id: e.key,
									name: e.name,
									type: e.style_type,
									description: e.description,
									canvas_url: e.canvas_url,
									file_key: e.file_key,
									content_hash: e.content_hash
								};
								return (
									e.thumbnail_url && (t.thumbnail_url = e.thumbnail_url),
									'FILL' === e.style_type && e.meta && (t.fills = e.meta.style_thumbnail.fillPaints),
									'EFFECT' === e.style_type && e.meta && (t.effects = e.meta.style_thumbnail.effects),
									'GRID' === e.style_type && e.meta && (t.layoutGrids = e.meta.style_thumbnail.layoutGrids),
									(t.remote = !0),
									t
								);
							}),
						n = oe.styles.local.concat(t);
					return e && n.find(e) ? n.find(e) : null;
				}
			},
			comments: {
				findAll: function(e) {
					var t = b()(App._state.comments.commentsById);
					return (
						(e =
							e ||
							function() {
								return !0;
							}),
						t.filter(e)
					);
				},
				findOne: function(e) {
					var t = b()(App._state.comments.commentsById);
					return e && t.find(e) ? t.find(e) : null;
				}
			},
			getStyleById: function(e) {
				var t = oe.styles.local.concat(oe.styles.published);
				return t.find(function(t) {
					return t.id === e;
				});
			},
			getCommentById: function(e) {
				return oe.comments.findOne(function(t) {
					return t.id === e;
				});
			},
			onFileBrowserLoaded: function(e) {
				window.addEventListener('fileBrowserLoaded', function() {
					e();
				});
			},
			onFileBrowserChanged: function(e) {
				window.addEventListener('fileBrowserChanged', function() {
					e();
				});
			},
			onFileBrowserUnloaded: function(e) {
				window.addEventListener('fileBrowserUnloaded', function() {
					e();
				});
			},
			onFileLoaded: function(e) {
				window.addEventListener('fileLoaded', function() {
					e();
				});
			},
			onFileUnloaded: function(e) {
				window.addEventListener('fileUnloaded', function() {
					e();
				});
			},
			onModalOpened: function(e) {
				window.addEventListener('modalOpened', function(t) {
					e(t.detail);
				});
			},
			onModalClosed: function(e) {
				window.addEventListener('modalClosed', function() {
					e();
				});
			},
			onMenuOpened: function(e) {
				window.addEventListener('menuOpened', function(t) {
					e(t.detail.type, t.detail.hasMoreOptions);
				});
			},
			onSubmenuOpened: function(e) {
				window.addEventListener('submenuOpened', function(t) {
					e(t.detail.type, t.detail.highlightedOption);
				});
			},
			onMenuClosed: function(e) {
				window.addEventListener('menuClosed', function() {
					e();
				});
			},
			onDomChanged: function(e) {
				window.addEventListener('domChanged', function(t) {
					e(t.detail);
				});
			},
			onAppLoaded: function(e) {
				window.addEventListener('appLoaded', function() {
					e();
				});
			},
			addCommand: function(e) {
				var t = e.label,
					n = e.action,
					i = e.condition,
					s = e.shortcut,
					a = e.submenu,
					o = e.showInCanvasMenu,
					r = e.showInSelectionMenu,
					l = e.hideInMainMenu;
				n || (n = function() {}),
					l ||
						window.addEventListener('pluginOptionsFound', function() {
							'function' === typeof i
								? i() && te('fullscreen-menu-dropdown', !1, t, n, s, a)
								: te('fullscreen-menu-dropdown', !1, t, n, s, a);
						}),
					o && ee('DROPDOWN_TYPE_CANVAS_CONTEXT_MENU', t, n, i, s, a),
					r &&
						(ee('DROPDOWN_TYPE_SELECTION_CONTEXT_MENU', t, n, i, s, a),
						ee('DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU', t, n, i, s, a)),
					s && !a && x(s, n, i),
					a &&
						a.forEach(function(e) {
							e.shortcut && x(e.shortcut, e.action, e.condition);
						});
			},
			registerKeyboardShortcut: function(e) {
				var t = e.shortcut,
					n = e.action,
					i = e.condition;
				x(t, n, i);
			},
			addTooltip: function(e) {
				var t = e.element,
					n = e.text,
					i = e.showAfterDelay;
				t.addEventListener('mousemove', function() {
					var e = App._state.tooltip;
					y()(e.targetRect) === y()(t.getBoundingClientRect()) && 2 === e.state
						? App._dispatch({ type: 'TOOLTIP_CANCEL_HIDE_AFTER_DELAY', payload: {} })
						: y()(e.targetRect) !== y()(t.getBoundingClientRect()) && 2 === e.state
						? window.App._dispatch({
								type: 'TOOLTIP_UPDATE',
								payload: {
									tooltip: {
										state: 2,
										position: e.position,
										target: { kind: 2, text: n },
										targetRect: t.getBoundingClientRect(),
										timeoutID: null,
										interactive: !1
									}
								}
						  })
						: window.App._dispatch({
								type: !1 === i ? 'TOOLTIP_SHOW_IMMEDIATELY' : 'TOOLTIP_SHOW_AFTER_DELAY',
								payload: {
									interactive: !1,
									position: 0,
									target: { kind: 2, text: n },
									targetRect: t.getBoundingClientRect(),
									timeoutDelay: 500
								}
						  });
				}),
					t.addEventListener('click', function() {
						1 === window.App._state.tooltip.state && window.App._dispatch({ type: 'TOOLTIP_HIDE' });
					});
			},
			showToast: function(e) {
				var t = e.message,
					n = e.timeoutInSeconds,
					i = e.buttonText,
					s = e.buttonAction,
					a = {
						type: 'VISUAL_BELL_ENQUEUE',
						payload: { type: 'installed_plugin', message: t, timeout: n ? 1e3 * n : 3e3 }
					};
				i && s && m()(a.payload, { button: { text: i, action: s } }), window.App._dispatch(a);
			},
			showUI: function(e) {
				var t = e.title,
					n = e.html,
					i = e.onMount,
					s = e.reactComponent,
					a = e.vueComponent,
					o = e.width,
					r = e.height,
					l = e.positionX,
					c = e.positionY,
					u = e.overlay,
					d = e.padding,
					p = e.useFigmaStyles,
					f = e.tabs;
				F(t, n, i, s, a, o, r, l, c, u, d, p, f);
			},
			hideUI: function(e) {
				B(e);
			},
			viewport: {
				scrollAndZoomIntoView: function(e) {
					var t = h()(App._state.mirror.sceneGraphSelection);
					0 !== e.length &&
						((e =
							'object' === Object(p['a'])(e[0])
								? e.map(function(e) {
										return e.id;
								  })
								: e),
						App.sendMessage('clearSelection'),
						App.sendMessage('addToSelection', { nodeIds: e }),
						App.triggerAction('zoom-to-selection'),
						App.sendMessage('clearSelection'),
						t.length > 0 && App.sendMessage('addToSelection', { nodeIds: t }));
				},
				panToNode: function(e) {
					(e = 'object' === Object(p['a'])(e) ? e.id : e), App.panToNode(e);
				}
			},
			toggleShowNodeId: function() {
				return App.triggerAction('toggle-show-guids');
			}
		};
		d()(oe, {
			isDesktop: {
				get: function() {
					return void 0 !== window.__figmaDesktop;
				}
			},
			orgs: {
				get: function() {
					return App._state.orgById;
				}
			},
			myOrg: {
				get: function() {
					return App._state.currentOrgId;
				}
			},
			teams: {
				get: function() {
					return App._state.teams;
				}
			},
			myTeams: {
				get: function() {
					return App._state.user.teams;
				}
			},
			fileKey: {
				get: function() {
					return App._state.editingFileKey;
				}
			},
			fileName: {
				get: function() {
					return App.getCurrentFileName();
				}
			}
		}),
			d()(oe.viewport, {
				center: {
					get: function() {
						var e = App.getViewportInfo();
						return { x: e.x, y: e.y };
					},
					set: function(e) {
						App.sendMessage('setCanvasSpaceCenter', { x: e.x, y: e.y });
					}
				},
				zoom: {
					get: function() {
						return App.getViewportInfo().zoomScale;
					},
					set: function(e) {
						App.sendMessage('updateActiveCanvasCurrentZoom', { zoom: e });
					}
				}
			}),
			d()(oe, {
				root: {
					get: function() {
						return S('0:0');
					}
				},
				currentPage: {
					get: function() {
						var e = S(App._state.mirror.appModel.currentPage);
						return (
							c()(e, 'selection', {
								get: function() {
									return h()(App._state.mirror.sceneGraphSelection).map(function(e) {
										return S(e);
									});
								},
								set: function(e) {
									0 !== e.length
										? ((e =
												'object' === Object(p['a'])(e[0])
													? e.map(function(e) {
															return e.id;
													  })
													: e),
										  App.sendMessage('clearSelection'),
										  App.sendMessage('addToSelection', { nodeIds: e }),
										  App.fromFullscreen._listenersByEvent.scrollToNode &&
												App.fromFullscreen._listenersByEvent.scrollToNode[0]({ nodeId: e[0] }))
										: App.sendMessage('clearSelection');
								}
							}),
							e
						);
					}
				}
			}),
			d()(oe.styles, {
				local: {
					get: function() {
						return b()(App._state.library.local.styles).map(function(e) {
							var t = {
								id: e.key,
								name: e.name,
								type: e.style_type,
								description: e.description,
								content_hash: e.content_hash
							};
							return (
								e.thumbnail_url && (t.thumbnail_url = e.thumbnail_url),
								'FILL' === e.style_type && e.meta && (t.fills = e.meta.style_thumbnail.fillPaints),
								'EFFECT' === e.style_type && e.meta && (t.effects = e.meta.style_thumbnail.effects),
								'GRID' === e.style_type && e.meta && (t.layoutGrids = e.meta.style_thumbnail.layoutGrids),
								(t.remote = !1),
								t
							);
						});
					}
				},
				libraries: {
					get: function() {
						var e = [];
						return (
							b()(App._state.library.published.styles).forEach(function(t) {
								for (var n in t) {
									var i = App._state.fileByKey[n],
										s = b()(t[n]).map(function(e) {
											return {
												id: e.key,
												name: e.name,
												type: e.style_type,
												description: e.description,
												canvas_url: e.canvas_url,
												file_key: e.file_key,
												content_hash: e.content_hash
											};
										}),
										a = { name: i.name, key: n, styles: s };
									e.push(a);
								}
							}),
							e
						);
					}
				},
				addedLibraries: {
					get: function() {
						var e = h()(App._state.library.subscriptions.byFile[App.editingFileKey()]).filter(function(e) {
								return App._state.library.subscriptions.byFile[App.editingFileKey()][e];
							}),
							t = [];
						return (
							b()(App._state.library.published.styles).forEach(function(e) {
								for (var n in e) {
									var i = App._state.fileByKey[n],
										s = b()(e[n]).map(function(e) {
											return {
												id: e.key,
												name: e.name,
												type: e.style_type,
												description: e.description,
												canvas_url: e.canvas_url,
												file_key: e.file_key,
												content_hash: e.content_hash
											};
										}),
										a = { name: i.name, key: n, styles: s };
									t.push(a);
								}
							}),
							e.map(function(e) {
								return t.find(function(t) {
									return t.key === e;
								});
							})
						);
					}
				}
			}),
			c()(oe.comments, 'threads', {
				get: function() {
					var e = App._state.comments;
					return b()(e.commentIdsByThread).map(function(t) {
						if (1 === t.length) return e.commentsById[t[0]];
						var n = e.commentsById[t[t.length - 1]];
						return (
							(n.replies = t
								.slice(0, -1)
								.reverse()
								.map(function(t) {
									return e.commentsById[t];
								})),
							n
						);
					});
				}
			});
		var re = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'div',
					{ staticClass: 'js-fullscreen-prevent-event-capture', attrs: { id: 'pluginManager' } },
					[
						n(
							'modal',
							{
								ref: 'modal',
								attrs: {
									name: 'pluginManagerModal',
									draggable: '.modal-header',
									width: 460,
									height: 'auto',
									maxHeight: 642
								},
								on: { opened: e.openModal, closed: e.modalClosed }
							},
							[
								n('div', { staticClass: 'modal-header header-large' }, [
									n('div', { staticClass: 'modal-tabs' }, [
										n(
											'div',
											{
												staticClass: 'modal-tab-large',
												class: { 'active-tab': 'Plugins' === e.currentTab },
												on: {
													click: function(t) {
														(e.currentTab = 'Plugins'), (e.detailScreenOn = !1), (e.searchText = '');
													}
												}
											},
											[e._v('Plugins')]
										),
										n(
											'div',
											{
												staticClass: 'modal-tab-large',
												class: { 'active-tab': 'Installed' === e.currentTab },
												on: {
													click: function(t) {
														(e.currentTab = 'Installed'), (e.detailScreenOn = !1), (e.searchText = '');
													}
												}
											},
											[
												e._v('Installed'),
												e.numberOfUpdates > 0
													? n('div', { staticClass: 'update-count' }, [e._v(e._s(e.numberOfUpdates))])
													: e._e()
											]
										),
										e.devMode
											? n(
													'div',
													{
														staticClass: 'modal-tab-large',
														class: { 'active-tab': 'Developer' === e.currentTab },
														on: {
															click: function(t) {
																(e.currentTab = 'Developer'), (e.detailScreenOn = !1), (e.searchText = '');
															}
														}
													},
													[e._v('Developer')]
											  )
											: e._e()
									]),
									n('div', { ref: 'closeButton', staticClass: 'modal-close-button', on: { click: e.hide } })
								]),
								n(
									'div',
									{ staticClass: 'modal-content no-padding no-overflow' },
									[
										'Plugins' === e.currentTab || ('Installed' === e.currentTab && e.installedPlugins.length > 0)
											? n('div', { staticClass: 'list-screen', class: { detailScreenOn: e.detailScreenOn } }, [
													n('div', { staticClass: 'search-box' }, [
														n('div', { staticClass: 'figma-icon search' }),
														n('input', {
															directives: [
																{ name: 'model', rawName: 'v-model', value: e.searchText, expression: 'searchText' }
															],
															staticClass: 'no-border',
															attrs: { placeholder: 'Search', spellcheck: 'false' },
															domProps: { value: e.searchText },
															on: {
																input: function(t) {
																	t.target.composing || (e.searchText = t.target.value);
																}
															}
														})
													]),
													n(
														'div',
														{ staticClass: 'plugins-list' },
														[
															e._l(e.searchedPlugins, function(t) {
																return n('pluginItem', {
																	key: t.id,
																	attrs: {
																		type: 'text',
																		plugin: t,
																		installedPlugins: e.installedPlugins,
																		installedScreenOn: 'Installed' === e.currentTab
																	},
																	on: { goToDetail: e.goToDetail, install: e.install }
																});
															}),
															0 === e.searchedPlugins.length && '' !== e.searchText
																? n('div', { staticClass: 'no-search-results-message' }, [
																		e._v("No results for '" + e._s(e.searchText) + "'")
																  ])
																: e._e()
														],
														2
													)
											  ])
											: e._e(),
										n('detailScreen', {
											class: { detailScreenOn: e.detailScreenOn },
											attrs: {
												plugin: e.selectedPlugin,
												pluginStats: e.pluginStats,
												installed:
													void 0 !==
													e.installedPlugins.find(function(t) {
														return t.id === e.selectedPlugin.id;
													})
											},
											on: {
												backToList: function(t) {
													e.detailScreenOn = !1;
												},
												install: e.install,
												uninstall: e.uninstall,
												hide: e.hide
											}
										}),
										'Developer' === e.currentTab ? n('developerScreen') : e._e(),
										'Installed' === e.currentTab && 0 === e.installedPlugins.length
											? n('div', { staticClass: 'empty-state' }, [
													n('div', { staticClass: 'empty-state-title' }, [e._v('No plugins installed')]),
													n('div', { staticClass: 'empty-state-hint' }, [
														e._v('Select the Plugins tab to browse and install plugins.')
													])
											  ])
											: e._e()
									],
									1
								)
							]
						)
					],
					1
				);
			},
			le = [],
			ce = (n('5df3'),
			n('f559'),
			n('a481'),
			n('4917'),
			n('55dd'),
			function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n('div', { staticClass: 'pluginItem', on: { click: e.goToDetail } }, [
					n('div', { staticClass: 'name' }, [e._v(e._s(e.plugin.name))]),
					n('div', { staticClass: 'author' }, [e._v(e._s(e.plugin.author))]),
					n('div', { staticClass: 'description' }, [e._v(e._s(e.plugin.description))]),
					e.installedScreenOn && e.hasUpdate
						? n('div', { staticClass: 'whats-new-button' }, [
								e._v("See what's new in version " + e._s(e.plugin.version))
						  ])
						: e._e(),
					e.installedScreenOn && e.hasUpdate ? n('div', { staticClass: 'update-text' }, [e._v('Updated')]) : e._e(),
					n(
						'button',
						{
							directives: [
								{
									name: 'show',
									rawName: 'v-show',
									value: !e.installed && !e.installedScreenOn,
									expression: '!installed && !installedScreenOn'
								}
							],
							staticClass: 'button',
							on: {
								click: function(t) {
									return t.stopPropagation(), e.install(t);
								}
							}
						},
						[e._v('Install')]
					),
					n(
						'button',
						{
							directives: [
								{
									name: 'show',
									rawName: 'v-show',
									value: e.installed && !e.installedScreenOn,
									expression: 'installed && !installedScreenOn'
								}
							],
							staticClass: 'button',
							attrs: { disabled: 'true' }
						},
						[e._v('Installed')]
					),
					n('div', { staticClass: 'figma-icon chevron-right2' })
				]);
			}),
			ue = [],
			de = n('b697'),
			pe = {
				props: ['plugin', 'installedPlugins', 'installedScreenOn'],
				methods: {
					goToDetail: function(e) {
						this.$emit('goToDetail', this.plugin);
					},
					install: function() {
						this.$emit('install', this.plugin);
					}
				},
				computed: {
					installed: function() {
						var e = this;
						return (
							void 0 !==
							this.installedPlugins.find(function(t) {
								return t.id === e.plugin.id;
							})
						);
					},
					hasUpdate: function() {
						var e = this,
							t = this.installedPlugins.find(function(t) {
								return t.id === e.plugin.id;
							});
						return void 0 !== t && de(this.plugin.version, t.version);
					}
				}
			},
			fe = pe,
			he = (n('3cf6'), Object(V['a'])(fe, ce, ue, !1, null, null, null)),
			ge = he.exports,
			me = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n('div', { staticClass: 'detail-screen' }, [
					n('div', { staticClass: 'header' }, [
						n('div', { staticClass: 'back-button figma-icon chevron-left', on: { click: e.backToList } }),
						n('div', { staticClass: 'title' }, [
							n('div', { staticClass: 'name' }, [e._v(e._s(e.plugin.name))]),
							n('div', { staticClass: 'author' }, [e._v(e._s(e.plugin.author))])
						]),
						n(
							'button',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: !e.installed, expression: '!installed' }],
								staticClass: 'button primary',
								on: {
									click: function(t) {
										return t.stopPropagation(), e.install(t);
									}
								}
							},
							[e._v('Install')]
						),
						n(
							'button',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: e.installed, expression: 'installed' }],
								staticClass: 'button',
								on: {
									click: function(t) {
										return t.stopPropagation(), e.uninstall(t);
									}
								}
							},
							[e._v('Uninstall')]
						)
					]),
					e.plugin.requiredOrgId
						? n('div', { staticClass: 'org-header' }, [
								e.orgImage && 1 === e.orgImage.length
									? n('span', { staticClass: 'fake-org-image' }, [e._v(e._s(e.orgImage))])
									: e._e(),
								e.orgImage && e.orgImage.length > 1
									? n('img', { staticClass: 'org-image', attrs: { src: e.orgImage } })
									: e._e(),
								e.orgName
									? n('span', [
											e._v('This plugin is only available to '),
											n('b', { staticStyle: { 'font-weight': '500' } }, [e._v(e._s(e.orgName))]),
											e._v(' org members.')
									  ])
									: e._e()
						  ])
						: e._e(),
					e.plugin.requiredTeamIds
						? n(
								'div',
								{ staticClass: 'org-header' },
								[
									e._l(e.requiredTeams, function(t) {
										return t.img_url
											? e._e()
											: n('span', { key: 'team', staticClass: 'fake-org-image' }, [e._v(e._s(t.name[0]))]);
									}),
									e._l(e.requiredTeams, function(t) {
										return t.img_url
											? n('img', { key: 'team', staticClass: 'org-image', attrs: { src: t.img_url } })
											: e._e();
									}),
									n(
										'span',
										[
											e._v('This plugin is only available to '),
											e._l(e.requiredTeams, function(t) {
												return n('span', [
													n('b', { staticStyle: { 'font-weight': '500' } }, [e._v(e._s(t.name))]),
													e.requiredTeams.indexOf(t) !== e.requiredTeams.length - 1 ? n('span', [e._v(', ')]) : e._e()
												]);
											}),
											e._v(' team members.')
										],
										2
									)
								],
								2
						  )
						: e._e(),
					n('div', { staticClass: 'content' }, [
						e.plugin.images && e.plugin.images.length > 0
							? n(
									'div',
									{ staticClass: 'section image-section', class: { singleImage: 1 === e.plugin.images.length } },
									[
										n(
											'carousel',
											{ ref: 'carousel', attrs: { 'watch-items': e.plugin.images, loop: '' } },
											e._l(e.plugin.images, function(e) {
												return n('carousel-item', { style: { backgroundImage: 'url(' + e + ')' } });
											}),
											1
										),
										n('div', {
											staticClass: 'v-carousel-nav prev figma-icon chevron-left',
											on: {
												click: function(t) {
													return e.$refs.carousel.$emit('prev');
												}
											}
										}),
										n('div', {
											staticClass: 'v-carousel-nav next figma-icon chevron-right',
											on: {
												click: function(t) {
													return e.$refs.carousel.$emit('next');
												}
											}
										})
									],
									1
							  )
							: e._e(),
						e.plugin.description && '' !== e.plugin.description
							? n('div', { staticClass: 'section' }, [
									n('div', { staticClass: 'section-title' }, [e._v('Overview')]),
									n('div', { staticClass: 'description' }, [e._v(e._s(e.plugin.description))])
							  ])
							: e._e(),
						e.plugin.instructions && '' !== e.plugin.instructions
							? n('div', { staticClass: 'section' }, [
									n('div', { staticClass: 'section-title' }, [e._v('How to use')]),
									n('div', { staticClass: 'instructions' }, [e._v(e._s(e.plugin.instructions))])
							  ])
							: e._e(),
						e.plugin.updates && e.plugin.updates.length > 0
							? n(
									'div',
									{ staticClass: 'section' },
									[
										n('div', { staticClass: 'section-title' }, [e._v("What's new")]),
										e._l(e.sortedUpdates, function(t) {
											return n('div', { key: t.version, staticClass: 'version' }, [
												n('div', { staticClass: 'version-number' }, [e._v('Version ' + e._s(t.version))]),
												n('div', { staticClass: 'date' }, [e._v(e._s(e.timeAgo.format(new Date(t.date))))]),
												'' !== t.notes
													? n('div', { staticClass: 'notes' }, [e._v(e._s(t.notes))])
													: n('div', { staticClass: 'notes' }, [e._v('No update notes.')])
											]);
										}),
										!e.showAllVersions && e.plugin.updates.length > 1
											? n(
													'div',
													{
														staticClass: 'show-all-versions-button',
														on: {
															click: function(t) {
																e.showAllVersions = !0;
															}
														}
													},
													[e._v('See all versions')]
											  )
											: e._e()
									],
									2
							  )
							: e._e(),
						e.installs > 0
							? n('div', { staticClass: 'section' }, [
									n('div', { staticClass: 'section-title' }, [e._v('Stats')]),
									n('div', { staticClass: 'stats' }, [e._v(e._s(e.activeUsers || 0) + ' active users')]),
									n('div', { staticClass: 'stats' }, [e._v(e._s(e.installs) + ' total installs')])
							  ])
							: e._e(),
						e.plugin.github && e.plugin.github.includes('github.com/')
							? n('div', { staticClass: 'section' }, [
									n('a', { staticClass: 'link', attrs: { href: e.plugin.github, target: '_blank' } }, [
										n('div', { staticClass: 'icon' }, [
											n(
												'svg',
												{
													attrs: {
														width: '14',
														height: '14',
														viewBox: '0 0 12 12',
														fill: 'none',
														xmlns: 'http://www.w3.org/2000/svg'
													}
												},
												[
													n('path', {
														attrs: {
															d:
																'M6 0.146484C6.55078 0.146484 7.08203 0.21875 7.59375 0.363281C8.10547 0.503906 8.58203 0.705078 9.02344 0.966797C9.46875 1.22852 9.87305 1.54297 10.2363 1.91016C10.6035 2.27344 10.918 2.67773 11.1797 3.12305C11.4414 3.56445 11.6426 4.04102 11.7832 4.55273C11.9277 5.06445 12 5.5957 12 6.14648C12 6.79102 11.9004 7.41211 11.7012 8.00977C11.5059 8.60742 11.2285 9.15625 10.8691 9.65625C10.5098 10.1562 10.0781 10.5957 9.57422 10.9746C9.07031 11.3496 8.51172 11.6387 7.89844 11.8418C7.88672 11.8457 7.86914 11.8496 7.8457 11.8535C7.82227 11.8535 7.80469 11.8535 7.79297 11.8535C7.69922 11.8535 7.625 11.8262 7.57031 11.7715C7.51562 11.7168 7.48828 11.6445 7.48828 11.5547C7.48828 11.2773 7.48828 11.0039 7.48828 10.7344C7.49219 10.4609 7.49414 10.1855 7.49414 9.9082C7.49414 9.70898 7.46484 9.50781 7.40625 9.30469C7.34766 9.10156 7.24219 8.93164 7.08984 8.79492C7.54297 8.74414 7.93945 8.65234 8.2793 8.51953C8.62305 8.38281 8.9082 8.19531 9.13477 7.95703C9.36523 7.71875 9.53711 7.42578 9.65039 7.07812C9.76758 6.72656 9.82617 6.3125 9.82617 5.83594C9.82617 5.53125 9.77539 5.24414 9.67383 4.97461C9.57227 4.70117 9.41797 4.45117 9.21094 4.22461C9.25391 4.11523 9.28516 4.00195 9.30469 3.88477C9.32422 3.76758 9.33398 3.65039 9.33398 3.5332C9.33398 3.38086 9.31641 3.23047 9.28125 3.08203C9.25 2.92969 9.20703 2.78125 9.15234 2.63672C9.13281 2.62891 9.11133 2.625 9.08789 2.625C9.06445 2.625 9.04297 2.625 9.02344 2.625C8.89844 2.625 8.76758 2.64648 8.63086 2.68945C8.49414 2.72852 8.35742 2.7793 8.2207 2.8418C8.08789 2.90039 7.95898 2.9668 7.83398 3.04102C7.70898 3.11523 7.59766 3.18555 7.5 3.25195C7.01172 3.11523 6.51172 3.04688 6 3.04688C5.48828 3.04688 4.98828 3.11523 4.5 3.25195C4.40234 3.18555 4.29102 3.11523 4.16602 3.04102C4.04102 2.9668 3.91016 2.90039 3.77344 2.8418C3.64062 2.7793 3.50391 2.72852 3.36328 2.68945C3.22656 2.64648 3.09766 2.625 2.97656 2.625C2.95703 2.625 2.93555 2.625 2.91211 2.625C2.88867 2.625 2.86719 2.62891 2.84766 2.63672C2.79297 2.78125 2.74805 2.92969 2.71289 3.08203C2.68164 3.23047 2.66602 3.38086 2.66602 3.5332C2.66602 3.65039 2.67578 3.76758 2.69531 3.88477C2.71484 4.00195 2.74609 4.11523 2.78906 4.22461C2.58203 4.45117 2.42773 4.70117 2.32617 4.97461C2.22461 5.24414 2.17383 5.53125 2.17383 5.83594C2.17383 6.3125 2.23047 6.72461 2.34375 7.07227C2.46094 7.41992 2.63281 7.71484 2.85938 7.95703C3.08984 8.19531 3.375 8.38281 3.71484 8.51953C4.05469 8.65625 4.45117 8.75 4.9043 8.80078C4.79102 8.90234 4.70312 9.02539 4.64062 9.16992C4.58203 9.31055 4.54297 9.45508 4.52344 9.60352C4.41797 9.6543 4.30664 9.69336 4.18945 9.7207C4.07227 9.74805 3.95508 9.76172 3.83789 9.76172C3.58789 9.76172 3.38086 9.70312 3.2168 9.58594C3.05273 9.46875 2.90625 9.30859 2.77734 9.10547C2.73047 9.03125 2.67383 8.95703 2.60742 8.88281C2.54102 8.80859 2.46875 8.74219 2.39062 8.68359C2.3125 8.625 2.22852 8.57812 2.13867 8.54297C2.04883 8.50391 1.95508 8.48438 1.85742 8.48438C1.8418 8.48438 1.81836 8.48633 1.78711 8.49023C1.75586 8.49023 1.72461 8.49414 1.69336 8.50195C1.66602 8.50977 1.64062 8.52148 1.61719 8.53711C1.59375 8.55273 1.58203 8.57227 1.58203 8.5957C1.58203 8.64258 1.60938 8.68945 1.66406 8.73633C1.71875 8.7793 1.76367 8.8125 1.79883 8.83594L1.81641 8.84766C1.90234 8.91406 1.97656 8.97852 2.03906 9.04102C2.10547 9.09961 2.16406 9.16406 2.21484 9.23438C2.26562 9.30078 2.31055 9.375 2.34961 9.45703C2.39258 9.53516 2.4375 9.625 2.48438 9.72656C2.61719 10.0312 2.80273 10.2539 3.04102 10.3945C3.2832 10.5312 3.57031 10.5996 3.90234 10.5996C4.00391 10.5996 4.10547 10.5938 4.20703 10.582C4.30859 10.5664 4.41016 10.5488 4.51172 10.5293V11.5488C4.51172 11.6426 4.48242 11.7168 4.42383 11.7715C4.36914 11.8262 4.29492 11.8535 4.20117 11.8535C4.18945 11.8535 4.17188 11.8535 4.14844 11.8535C4.12891 11.8496 4.11328 11.8457 4.10156 11.8418C3.48828 11.6426 2.92969 11.3555 2.42578 10.9805C1.92188 10.6016 1.49023 10.1621 1.13086 9.66211C0.771484 9.1582 0.492188 8.60742 0.292969 8.00977C0.0976563 7.41211 0 6.79102 0 6.14648C0 5.5957 0.0703125 5.06445 0.210938 4.55273C0.355469 4.04102 0.558594 3.56445 0.820312 3.12305C1.08203 2.67773 1.39453 2.27344 1.75781 1.91016C2.125 1.54297 2.5293 1.22852 2.9707 0.966797C3.41602 0.705078 3.89453 0.503906 4.40625 0.363281C4.91797 0.21875 5.44922 0.146484 6 0.146484Z',
															fill: '#30C2FF'
														}
													})
												]
											)
										]),
										n('div', { staticClass: 'link-text' }, [e._v('View on Github')])
									]),
									n('a', { staticClass: 'link', attrs: { href: e.plugin.github + '/issues/new', target: '_blank' } }, [
										n('div', { staticClass: 'icon' }, [
											n(
												'svg',
												{
													attrs: {
														width: '14',
														height: '14',
														viewBox: '0 0 14 14',
														fill: 'none',
														xmlns: 'http://www.w3.org/2000/svg'
													}
												},
												[
													n('path', {
														attrs: {
															d:
																'M7.4375 14C6.83138 14 6.25033 13.9225 5.69434 13.7676C5.13379 13.6126 4.6097 13.3916 4.12207 13.1045C3.63444 12.8219 3.19238 12.4801 2.7959 12.0791C2.39486 11.6826 2.05306 11.2406 1.77051 10.7529C1.4834 10.2653 1.26237 9.74121 1.10742 9.18066C0.952474 8.62467 0.875 8.04362 0.875 7.4375C0.875 6.83138 0.952474 6.24805 1.10742 5.6875C1.26237 5.13151 1.4834 4.6097 1.77051 4.12207C2.05306 3.63444 2.39486 3.1901 2.7959 2.78906C3.19238 2.39258 3.63444 2.05078 4.12207 1.76367C4.6097 1.48112 5.13379 1.26237 5.69434 1.10742C6.25033 0.952474 6.83138 0.875 7.4375 0.875C8.04362 0.875 8.62695 0.952474 9.1875 1.10742C9.74349 1.26237 10.2653 1.48112 10.7529 1.76367C11.2406 2.05078 11.6849 2.39258 12.0859 2.78906C12.4824 3.1901 12.8242 3.63444 13.1113 4.12207C13.3939 4.6097 13.6126 5.13151 13.7676 5.6875C13.9225 6.24805 14 6.83138 14 7.4375C14 8.04362 13.9225 8.62467 13.7676 9.18066C13.6126 9.74121 13.3939 10.2653 13.1113 10.7529C12.8242 11.2406 12.4824 11.6826 12.0859 12.0791C11.6849 12.4801 11.2406 12.8219 10.7529 13.1045C10.2653 13.3916 9.74349 13.6126 9.1875 13.7676C8.62695 13.9225 8.04362 14 7.4375 14ZM7.4375 1.75C6.91797 1.75 6.41667 1.81836 5.93359 1.95508C5.44596 2.0918 4.99251 2.2832 4.57324 2.5293C4.14941 2.77539 3.76432 3.07161 3.41797 3.41797C3.07161 3.76432 2.77539 4.14714 2.5293 4.56641C2.2832 4.99023 2.0918 5.44368 1.95508 5.92676C1.81836 6.40983 1.75 6.91341 1.75 7.4375C1.75 7.95703 1.81836 8.45833 1.95508 8.94141C2.0918 9.42904 2.2832 9.88249 2.5293 10.3018C2.77539 10.7256 3.07161 11.1107 3.41797 11.457C3.76432 11.8034 4.14941 12.0996 4.57324 12.3457C4.99251 12.5918 5.44596 12.7832 5.93359 12.9199C6.41667 13.0566 6.91797 13.125 7.4375 13.125C7.96159 13.125 8.46517 13.0566 8.94824 12.9199C9.43132 12.7832 9.88477 12.5918 10.3086 12.3457C10.7279 12.0996 11.1107 11.8034 11.457 11.457C11.8034 11.1107 12.0996 10.7256 12.3457 10.3018C12.5918 9.88249 12.7832 9.42904 12.9199 8.94141C13.0566 8.45833 13.125 7.95703 13.125 7.4375C13.125 6.91797 13.0566 6.41439 12.9199 5.92676C12.7832 5.44368 12.5918 4.99023 12.3457 4.56641C12.0996 4.14714 11.8034 3.76432 11.457 3.41797C11.1107 3.07161 10.7279 2.77539 10.3086 2.5293C9.88477 2.2832 9.43132 2.0918 8.94824 1.95508C8.46517 1.81836 7.96159 1.75 7.4375 1.75ZM7.875 10.5H7L7 6.125H7.875L7.875 10.5ZM7.875 5.25H7V4.375H7.875V5.25Z',
															fill: '#30C2FF'
														}
													})
												]
											)
										]),
										n('div', { staticClass: 'link-text' }, [e._v('Report a bug')])
									])
							  ])
							: e._e(),
						e.plugin.requiredOrgId || e.plugin.requiredTeamIds ? n('div', { staticClass: 'fillerFooter' }) : e._e()
					])
				]);
			},
			ve = [],
			ye = n('7913'),
			_e = n('c50f'),
			be = n('7d1a'),
			Ce = n.n(be);
		_e['a'].addLocale(Ce.a);
		var we = {
				props: ['plugin', 'installed', 'pluginStats'],
				data: function() {
					return { timeAgo: new _e['a']('en-US'), showAllVersions: !1 };
				},
				components: { carousel: ye['Carousel'], 'carousel-item': ye['CarouselItem'] },
				methods: {
					backToList: function() {
						this.$emit('backToList'), (this.showAllVersions = !1);
					},
					install: function() {
						this.$emit('install', this.plugin);
					},
					uninstall: function() {
						this.$emit('uninstall', this.plugin);
					}
				},
				computed: {
					installs: function() {
						var e = this;
						return this.pluginStats.find(function(t) {
							return t.id === e.plugin.id;
						})
							? this.pluginStats.find(function(t) {
									return t.id === e.plugin.id;
							  }).installs
							: 0;
					},
					activeUsers: function() {
						var e = this;
						return this.pluginStats.find(function(t) {
							return t.id === e.plugin.id;
						})
							? this.pluginStats.find(function(t) {
									return t.id === e.plugin.id;
							  }).activeUsers
							: 0;
					},
					requiredTeams: function() {
						return (
							!!this.plugin.requiredTeamIds &&
							this.plugin.requiredTeamIds.map(function(e) {
								return figmaPlus.teams[e];
							})
						);
					},
					orgImage: function() {
						if (this.plugin.requiredOrgId) {
							var e = figmaPlus.orgs[this.plugin.requiredOrgId];
							return e.img_url ? e.img_url : e.name[0];
						}
						return !1;
					},
					orgName: function() {
						return !!this.plugin.requiredOrgId && figmaPlus.orgs[this.plugin.requiredOrgId].name;
					},
					latestUpdate: function() {
						return this.plugin.updates.sort(function(e, t) {
							return (e = new Date(e.date)), (t = new Date(t.date)), e > t ? -1 : e < t ? 1 : 0;
						})[0];
					},
					sortedUpdates: function() {
						var e = this.plugin.updates.sort(function(e, t) {
							return (e = new Date(e.date)), (t = new Date(t.date)), e > t ? -1 : e < t ? 1 : 0;
						});
						return this.showAllVersions ? e : [e[0]];
					}
				}
			},
			Se = we,
			Ie = (n('18f3'), Object(V['a'])(Se, me, ve, !1, null, null, null)),
			Te = Ie.exports,
			Pe = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'div',
					{
						staticClass: 'developer-screen',
						on: {
							click: function(t) {
								e.editing = '';
							}
						}
					},
					[
						n('div', { staticClass: 'header' }, [
							n('h1', [e._v('Development Server')]),
							n(
								'button',
								{
									directives: [{ name: 'show', rawName: 'v-show', value: !e.connected, expression: '!connected' }],
									staticClass: 'primary',
									on: {
										click: function(t) {
											return t.stopPropagation(), e.connect(t);
										}
									}
								},
								[e._v('Connect')]
							),
							n(
								'button',
								{
									directives: [{ name: 'show', rawName: 'v-show', value: e.connected, expression: 'connected' }],
									on: {
										click: function(t) {
											return t.stopPropagation(), e.disconnect(t);
										}
									}
								},
								[e._v('Disconnect')]
							)
						]),
						n('div', { staticClass: 'dev-server-content' }, [
							n('div', { staticClass: 'section' }, [
								n('h2', [e._v('Port')]),
								n('div', { staticClass: 'description' }, [
									e._v(
										'Set up a local http server at where your plugin files are located, then enter the port number of your server below.'
									)
								]),
								n('input', {
									directives: [{ name: 'model', rawName: 'v-model', value: e.port, expression: 'port' }],
									staticClass: 'port',
									attrs: { type: 'text' },
									domProps: { value: e.port },
									on: {
										input: function(t) {
											t.target.composing || (e.port = t.target.value);
										}
									}
								})
							]),
							n(
								'div',
								{ staticClass: 'section' },
								[
									n('h2', [e._v('Javascript files')]),
									n('a', [
										n('div', { staticClass: 'figma-icon add' }),
										n(
											'span',
											{
												on: {
													click: function(t) {
														return e.addPath('js');
													}
												}
											},
											[e._v('Add a path to Javascript file')]
										)
									]),
									e._l(e.jsFiles, function(t, i) {
										return n('div', { staticClass: 'js-list' }, [
											n('div', { staticClass: 'url' }, [
												n('div', { staticClass: 'file-icon js' }, [e._v('JS')]),
												n('div', { staticClass: 'prefix' }, [e._v('http://localhost:' + e._s(e.port) + '/')]),
												e.editing !== 'js' + i
													? n(
															'div',
															{
																staticClass: 'path',
																on: {
																	click: function(t) {
																		return t.stopPropagation(), e.startEditing('js' + i);
																	}
																}
															},
															[e._v(e._s(t))]
													  )
													: e._e(),
												e.editing === 'js' + i
													? n('input', {
															ref: 'jsEdit',
															refInFor: !0,
															staticClass: 'path-edit',
															attrs: { type: 'text', spellcheck: 'false', placeholder: 'File path, e.g. js/app.js' },
															domProps: { value: t },
															on: {
																keyup: function(t) {
																	if (!t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter'))
																		return null;
																	e.editing = '';
																},
																blur: function(t) {
																	return e.changePath(t, 'js', i);
																},
																click: function(e) {
																	e.stopPropagation();
																},
																change: function(t) {
																	return e.changePath(t, 'js', i);
																}
															}
													  })
													: e._e()
											]),
											n(
												'a',
												{
													on: {
														click: function(t) {
															return e.removeJSPath(i);
														}
													}
												},
												[e._v('Remove')]
											)
										]);
									})
								],
								2
							),
							n(
								'div',
								{ staticClass: 'section' },
								[
									n('h2', [e._v('CSS files')]),
									n('a', [
										n('div', { staticClass: 'figma-icon add' }),
										n(
											'span',
											{
												on: {
													click: function(t) {
														return e.addPath('css');
													}
												}
											},
											[e._v('Add a path to CSS file')]
										)
									]),
									e._l(e.cssFiles, function(t, i) {
										return n('div', { staticClass: 'js-list' }, [
											n('div', { staticClass: 'url' }, [
												n('div', { staticClass: 'file-icon css' }, [e._v('CSS')]),
												n('div', { staticClass: 'prefix' }, [e._v('http://localhost:' + e._s(e.port) + '/')]),
												e.editing !== 'css' + i
													? n(
															'div',
															{
																staticClass: 'path',
																on: {
																	click: function(t) {
																		return t.stopPropagation(), e.startEditing('css' + i);
																	}
																}
															},
															[e._v(e._s(t))]
													  )
													: e._e(),
												e.editing === 'css' + i
													? n('input', {
															ref: 'cssEdit',
															refInFor: !0,
															staticClass: 'path-edit',
															attrs: { type: 'text', spellcheck: 'false', placeholder: 'File path, e.g. css/app.css' },
															domProps: { value: t },
															on: {
																keyup: function(t) {
																	if (!t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter'))
																		return null;
																	e.editing = '';
																},
																blur: function(t) {
																	return e.changePath(t, 'css', i);
																},
																click: function(e) {
																	e.stopPropagation();
																},
																change: function(t) {
																	return e.changePath(t, 'css', i);
																}
															}
													  })
													: e._e()
											]),
											n(
												'a',
												{
													on: {
														click: function(t) {
															return e.removeCSSPath(i);
														}
													}
												},
												[e._v('Remove')]
											)
										]);
									})
								],
								2
							)
						])
					]
				);
			},
			Ee = [],
			Ae = {
				data: function() {
					return { connected: !1, port: '8080', jsFiles: [], cssFiles: [], editing: '' };
				},
				mounted: function() {
					if (null !== JSON.parse(localStorage.getItem('figmaPlus-localServer'))) {
						var e = JSON.parse(localStorage.getItem('figmaPlus-localServer'));
						(this.connected = e.connected),
							(this.port = e.port),
							(this.jsFiles = e.jsFiles),
							(this.cssFiles = e.cssFiles);
					} else {
						var t = {};
						(t.connected = this.connected),
							(t.port = this.port),
							(t.jsFiles = this.jsFiles),
							(t.cssFiles = this.cssFiles),
							localStorage.setItem('figmaPlus-localServer', y()(t));
					}
				},
				watch: {
					connected: {
						handler: function(e, t) {
							this.updateLocalStorage();
						}
					},
					port: {
						handler: function(e, t) {
							this.updateLocalStorage();
						}
					},
					jsFiles: {
						handler: function(e, t) {
							this.updateLocalStorage();
						}
					},
					cssFiles: {
						handler: function(e, t) {
							this.updateLocalStorage();
						}
					},
					editing: {
						handler: function(e, t) {
							this.updateLocalStorage();
						}
					}
				},
				methods: {
					updateLocalStorage: function() {
						var e = {};
						(e.connected = this.connected),
							(e.port = this.port),
							(e.jsFiles = this.jsFiles),
							(e.cssFiles = this.cssFiles),
							localStorage.setItem('figmaPlus-localServer', y()(e));
					},
					connect: function() {
						var e = this;
						(this.connected = !0),
							this.cssFiles.forEach(function(t) {
								var n = document.createElement('link');
								(n.className = 'localPlugin'),
									(n.rel = 'stylesheet'),
									(n.type = 'text/css'),
									(n.href = 'http://localhost:' + e.port + '/' + t + '?_=' + new Date().getTime()),
									document.head.appendChild(n);
							}),
							this.jsFiles.forEach(function(t) {
								fetch('http://localhost:' + e.port + '/' + t, { cache: 'no-cache' })
									.then(function(e) {
										return e.text();
									})
									.then(function(e) {
										var t = document.createElement('script');
										t.className = 'localPlugin';
										var n = document.createTextNode('(function () {'.concat(e, '}())'));
										t.appendChild(n), document.head.appendChild(t);
									});
							}),
							figmaPlus.showToast({ message: 'Connected to development server.' });
					},
					disconnect: function() {
						this.connected = !1;
						var e = !0,
							t = !1,
							n = void 0;
						try {
							for (var i, a = s()(document.getElementsByClassName('localPlugin')); !(e = (i = a.next()).done); e = !0) {
								var o = i.value;
								o.remove();
							}
						} catch (r) {
							(t = !0), (n = r);
						} finally {
							try {
								e || null == a.return || a.return();
							} finally {
								if (t) throw n;
							}
						}
						figmaPlus.showToast({ message: 'Development server disconnected.' });
					},
					addPath: function(e) {
						var t = this;
						if (this.connected) figmaPlus.showToast({ message: 'Please disconnect server to edit settings' });
						else {
							var n = 'js' === e ? this.jsFiles : this.cssFiles;
							console.log(n),
								n.push(''),
								setTimeout(function() {
									t.editing = e + (n.length - 1);
								}, 10),
								setTimeout(function() {
									'js' === e ? t.$refs.jsEdit[0].focus() : t.$refs.cssEdit[0].focus();
								}, 20);
						}
					},
					startEditing: function(e) {
						this.connected
							? figmaPlus.showToast({ message: 'Please disconnect server to edit settings' })
							: (this.editing = e);
					},
					changePath: function(e, t, n) {
						var i = e.target.value;
						'js' === t && ((i = '' === i ? 'app.js' : i), (this.jsFiles[n] = i)),
							'css' === t && ((i = '' === i ? 'app.css' : i), (this.cssFiles[n] = i)),
							(this.editing = '');
					},
					removeJSPath: function(e) {
						this.connected
							? figmaPlus.showToast({ message: 'Please disconnect server to edit settings' })
							: this.jsFiles.splice(e, 1);
					},
					removeCSSPath: function(e) {
						this.connected
							? figmaPlus.showToast({ message: 'Please disconnect server to edit settings' })
							: this.cssFiles.splice(e, 1);
					}
				}
			},
			xe = Ae,
			ke = (n('5c69'), Object(V['a'])(xe, Pe, Ee, !1, null, null, null)),
			Oe = ke.exports,
			Me = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'div',
					{
						ref: 'menuItem',
						staticClass: 'plugin-dropdown-option padded',
						on: {
							click: function(e) {
								return e.target !== e.currentTarget
									? null
									: (function(e) {
											return e.stopPropagation();
									  })(e);
							},
							mousemove: e.showSubmenu
						}
					},
					[
						n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v('Figma Plus')]),
						n('div', { staticClass: 'plugin-dropdown-option-chevron' }),
						n(
							'div',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: e.menuShown, expression: 'menuShown' }],
								ref: 'submenu',
								staticClass: 'plugin-dropdown-submenu'
							},
							[
								n('div', { attrs: { id: 'pluginOptions' } }),
								n('div', { staticClass: 'plugin-dropdown-option', on: { click: e.openManager } }, [
									n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v('Get Plugins')]),
									n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [e._v(e._s(e.managerShortcut))])
								]),
								e.devMode
									? n('div', { staticClass: 'plugin-dropdown-option', on: { click: e.openScriptRunner } }, [
											n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v('Run Script')]),
											n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [e._v(e._s(e.scriptRunnerShortcut))])
									  ])
									: e._e(),
								e._m(0)
							]
						)
					]
				);
			},
			De = [
				function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n(
						'a',
						{
							staticClass: 'plugin-dropdown-option',
							attrs: { target: '_blank', href: 'https://github.com/figma-plus/figma-plus/issues/new' }
						},
						[n('div', { staticClass: 'plugin-dropdown-option-text' }, [e._v('Report Issues')])]
					);
				}
			],
			Re = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					'div',
					{ staticClass: 'scriptRunner' },
					[
						n('h3', [e._v('Code')]),
						n('prism-editor', {
							staticClass: 'my-editor',
							attrs: { language: 'js' },
							on: { change: e.onCodeChange },
							model: {
								value: e.code,
								callback: function(t) {
									e.code = t;
								},
								expression: 'code'
							}
						}),
						n('div', { staticClass: 'buttons', class: { 'space-between': e.isDesktop } }, [
							e.isDesktop ? n('a', { on: { click: e.showConsole } }, [e._v('Show console')]) : e._e(),
							n('button', { staticClass: 'primary', on: { click: e.runCode } }, [e._v('Run')])
						])
					],
					1
				);
			},
			Le = [],
			Ne = n('7d2d'),
			Fe = Ne['a'],
			Be = (n('416c'), Object(V['a'])(Fe, Re, Le, !1, null, null, null)),
			je = Be.exports,
			Ue = {
				data: function() {
					return {
						devMode: window.pluginDevMode,
						managerShortcut: navigator.platform.includes('Win') ? 'Ctrl+Shift+P' : '⇧⌘P',
						scriptRunnerShortcut: navigator.platform.includes('Win') ? 'Ctrl+Shift+R' : '⇧⌘R',
						menuShown: !1
					};
				},
				mounted: function() {
					var e = this;
					Object(o['a'])(document.querySelectorAll('div[class*="multilevel_dropdown--option"]')).forEach(function(t) {
						return t.addEventListener('mouseover', function() {
							return (e.menuShown = !1);
						});
					});
				},
				methods: {
					openScriptRunner: function() {
						figmaPlus.showUI({ title: 'Run Script', vueComponent: je, width: 500 });
					},
					openManager: function() {
						window.figmaPlus.togglePluginManager();
					},
					showSubmenu: function() {
						var e = document.querySelector('div[class*="multilevel_dropdown--optionActive"]');
						if (e) {
							var t = Object(o['a'])(e.classList).find(function(e) {
								return e.includes('optionActive');
							});
							e.classList.remove(t);
							var n = document.querySelector('div[class*="multilevel_dropdown--submenu"]');
							n && (n.style.display = 'none'),
								(e.onmouseenter = function() {
									e.classList.add(t), n && (n.style.display = '');
								});
						}
						var i = this.$refs.menuItem,
							s = this.$refs.submenu;
						(this.menuShown = !0),
							(s.style.bottom = ''),
							(s.style.top = ''.concat(i.getBoundingClientRect().top - 8, 'px')),
							window.innerHeight - s.getBoundingClientRect().bottom < 0 &&
								((s.style.top = ''), (s.style.bottom = '8px')),
							window.innerWidth - i.getBoundingClientRect().right > 200
								? (s.style.left = ''.concat(i.getBoundingClientRect().right, 'px'))
								: (s.style.left = ''.concat(i.getBoundingClientRect().left - 200, 'px'));
					}
				}
			},
			qe = Ue,
			$e = Object(V['a'])(qe, Me, De, !1, null, null, null),
			He = $e.exports,
			Ke = n('6eed'),
			Ve = n.n(Ke),
			Ge = n('59ca'),
			We = n.n(Ge),
			ze = (n('e71f'),
			n('ea7b'),
			{
				apiKey: 'AIzaSyBIE7Uc1zQaJn__j1PYraJc90bVCCkaux4',
				authDomain: 'figma-plus.firebaseapp.com',
				databaseURL: 'https://figma-plus.firebaseio.com',
				projectId: 'figma-plus',
				storageBucket: 'figma-plus.appspot.com',
				messagingSenderId: '610349397276'
			}),
			Je = ze;
		We.a.initializeApp(Je);
		var Ye = We.a.firestore(),
			Xe = {
				components: { VModal: R.a, PluginItem: ge, DetailScreen: Te, DeveloperScreen: Oe, PluginsMenu: He },
				data: function() {
					return {
						myOrgId: null,
						myTeams: null,
						modalOpened: !1,
						searchText: '',
						selectedPlugin: {},
						detailScreenOn: !1,
						currentTab: 'Plugins',
						plugins: [],
						installedPlugins: [],
						devMode: window.pluginDevMode,
						pluginStats: [],
						usersInstalledPlugins: [],
						user: null,
						userHash: ''
					};
				},
				firestore: { pluginStats: Ye.collection('plugins_stats') },
				watch: {
					installedPlugins: function(e) {
						localStorage.setItem('figmaPlus-installedPlugins', y()(e));
					}
				},
				beforeMount: function() {
					var e = this;
					figmaPlus.onFileBrowserLoaded(function() {
						e.modalOpened && e.hide(), document.getElementById('pluginManagerButton') || e.injectpluginManagerButton();
					}),
						figmaPlus.onFileBrowserChanged(function() {
							document.getElementById('pluginManagerButton') || e.injectpluginManagerButton();
						}),
						document.querySelector('[data-tooltip-text="Show notifications"]') &&
							!document.getElementById('pluginManagerButton') &&
							this.injectpluginManagerButton(),
						figmaPlus.onFileBrowserUnloaded(this.hide),
						figmaPlus.registerKeyboardShortcut({
							shortcut: { mac: { shift: !0, command: !0, key: 'P' }, windows: { shift: !0, control: !0, key: 'P' } },
							action: this.show
						}),
						this.devMode &&
							figmaPlus.registerKeyboardShortcut({
								shortcut: { mac: { shift: !0, command: !0, key: 'R' }, windows: { shift: !0, control: !0, key: 'R' } },
								action: function() {
									return figmaPlus.showUI({ title: 'Run Script', vueComponent: je, width: 500 });
								}
							}),
						(window.figmaPlus.togglePluginManager = this.toggleModal),
						figmaPlus.onMenuOpened(function(e) {
							if ('fullscreen-menu-dropdown' === e) {
								var t = Object(o['a'])(document.querySelectorAll('div[class*="multilevel_dropdown--name"]')).find(
										function(e) {
											return 'Integrations' === e.innerText;
										}
									).parentNode,
									n = document.createElement('div');
								t.parentNode.insertBefore(n, t),
									new figmaPlus.Vue({
										el: n,
										render: function(e) {
											return e(He);
										}
									});
							}
						}),
						localStorage.getItem('figmaPlus-installedPlugins') &&
							(this.installedPlugins = JSON.parse(localStorage.getItem('figmaPlus-installedPlugins')));
					var t = JSON.parse(localStorage.getItem('figmaPlus-masterList'));
					fetch('https://figma-plus.github.io/plugin-directory/plugins.json', { cache: 'no-cache' })
						.then(function(e) {
							return e.json();
						})
						.then(function(n) {
							localStorage.getItem('figmaPlus-plugins') && t && y()(t) === y()(n)
								? ((e.plugins = JSON.parse(localStorage.getItem('figmaPlus-plugins'))), e.checkForUpdates())
								: (t && n.length > t.length && localStorage.setItem('figmaPlus-hasNewPlugins', 'true'),
								  e.loadPlugins(n));
						});
				},
				computed: {
					searchedPlugins: function() {
						var e = this,
							t = this.myOrgId
								? this.plugins.filter(function(t) {
										return !t.requiredOrgId || '' === t.requiredOrgId || t.requiredOrgId === e.myOrgId;
								  })
								: this.plugins.filter(function(e) {
										return !e.requiredOrgId || '' === e.requiredOrgId;
								  });
						if (
							((t =
								this.myTeams && this.myTeams.length > 0
									? t.filter(function(t) {
											return (
												!t.requiredTeamIds ||
												0 === t.requiredTeamIds.length ||
												(t.requiredTeamIds.some(function(t) {
													return e.myTeams.find(function(e) {
														return e === t;
													});
												}) &&
													t.requiredTeamIds.some(function(e) {
														return figmaPlus.teams[e];
													}))
											);
									  })
									: t.filter(function(e) {
											return !e.requiredTeamIds || 0 === e.requiredTeamIds.length;
									  })),
							'Plugins' === this.currentTab)
						)
							return t
								.filter(function(t) {
									return t.name.toLowerCase().match(e.searchText.toLowerCase());
								})
								.sort(function(e, t) {
									return new Date(t.publishDate) - new Date(e.publishDate);
								});
						var n = t.filter(function(t) {
							return e.installedPlugins.find(function(e) {
								return e.id === t.id;
							});
						});
						return n
							.filter(function(t) {
								return t.name.toLowerCase().match(e.searchText.toLowerCase());
							})
							.sort(function(e, t) {
								return new Date(t.publishDate) - new Date(e.publishDate);
							});
					},
					numberOfUpdates: function() {
						var e = this,
							t = this.installedPlugins.filter(function(t) {
								return e.plugins.find(function(e) {
									return e.id === t.id && e.version !== t.version;
								});
							}).length;
						return (
							document.querySelector('#pluginManagerButton') &&
								(t > 0
									? document.querySelector('#pluginManagerButton').classList.add('has-badge')
									: document.querySelector('#pluginManagerButton').classList.remove('has-badge')),
							t
						);
					}
				},
				methods: {
					injectpluginManagerButton: function() {
						var e = document.querySelector('[data-tooltip-text="Show notifications"]');
						e.parentElement.style.display = 'flex';
						var t = document.createElement('div');
						(t.id = 'pluginManagerButton'),
							(t.className = this.numberOfUpdates > 0 ? 'top-bar-button has-badge' : 'top-bar-button'),
							(t.innerHTML =
								'<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8 5H9V8H12V9H9V12H8V9H5V8H8V5Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17 0V9H16.9855C16.7267 13.4617 13.0266 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.97343 3.53831 0.273272 8 0.0144615V0H17ZM16 8.72172L15.9872 8.94209C15.7589 12.878 12.4937 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.50631 4.12203 1.24109 8.05791 1.01278L8.27829 1H16V8.72172Z" fill="white"/>\n</svg>'),
							e.parentNode.insertBefore(t, e),
							(t.onclick = this.toggleModal),
							figmaPlus.addTooltip({ element: t, text: 'Figma Plus' });
					},
					loadPlugins: function(e) {
						var t = this,
							n = (function() {
								var e = Object(a['a'])(
									regeneratorRuntime.mark(function e(n) {
										var i, s, a, o;
										return regeneratorRuntime.wrap(function(e) {
											while (1)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(i = n.github.replace('https://github.com/', '')),
															(i = '/' === i[i.length - 1] ? i.slice(0, -1) : i),
															(s = 'https://cdn.jsdelivr.net/gh/'.concat(i, '@').concat(n.approvedCommit, '/')),
															(e.next = 5),
															fetch(s + 'manifest.json').then(function(e) {
																return e.json();
															})
														);
													case 5:
														return (
															(a = e.sent),
															(e.next = 8),
															fetch('https://api.github.com/repos/'.concat(i, '/releases')).then(function(e) {
																return e.json();
															})
														);
													case 8:
														return (
															(o = e.sent),
															(a.publishDate = o[o.length - 1].published_at),
															(a.updates = o.map(function(e) {
																return { version: e.tag_name, date: e.published_at, notes: e.body };
															})),
															(a.version = n.approvedVersion),
															(a.commit = n.approvedCommit),
															(a.github = n.github),
															(a.userRepo = i),
															a.images &&
																(a.images = a.images.map(function(e) {
																	return e.startsWith('https://') || e.startsWith('http://')
																		? e
																		: ((e = '/' === e[0] ? e.substring(1) : e),
																		  'https://cdn.jsdelivr.net/gh/'
																				.concat(i, '@')
																				.concat(n.approvedCommit, '/')
																				.concat(e));
																})),
															t.plugins.push(a),
															e.abrupt('return', a)
														);
													case 18:
													case 'end':
														return e.stop();
												}
										}, e);
									})
								);
								return function(t) {
									return e.apply(this, arguments);
								};
							})(),
							i = e.map(function(e) {
								return n(e);
							});
						w.a.all(i).then(function() {
							localStorage.setItem('figmaPlus-plugins', y()(t.plugins)),
								t.checkForUpdates(),
								localStorage.setItem('figmaPlus-masterList', y()(e)),
								JSON.parse(localStorage.getItem('figmaPlus-hasNewPlugins')) &&
									figmaPlus.onAppLoaded(function() {
										figmaPlus.showToast({
											message: 'A new plugin is available!',
											timeoutInSeconds: 10,
											buttonText: 'View',
											buttonAction: t.show
										});
									});
						});
					},
					checkForUpdates: function() {
						var e = this;
						this.installedPlugins.forEach(function(t) {
							var n = e.plugins.find(function(e) {
								return e.id === t.id;
							});
							t.version !== n.version &&
								figmaPlus.onAppLoaded(function() {
									figmaPlus.showToast({
										message: ''.concat(t.name, ' plugin has been updated!'),
										timeoutInSeconds: 10,
										buttonText: "What's new",
										buttonAction: e.show
									});
								});
						});
					},
					show: function() {
						var e = this;
						(this.userHash = Ve()()
							.update(App._state.user.id)
							.digest('hex')),
							We.a.auth().onAuthStateChanged(function(t) {
								t
									? (e.user = t)
									: (console.log('not signed in, signing in'),
									  We.a
											.auth()
											.signInWithEmailAndPassword(e.userHash + '@figmaplus.com', e.userHash)
											.catch(function(t) {
												'auth/user-not-found' === t.code &&
													(console.log('not user, signing up'),
													We.a.auth().createUserWithEmailAndPassword(e.userHash + '@figmaplus.com', e.userHash));
											}));
							}),
							(this.myOrgId = figmaPlus.myOrg);
						var t = figmaPlus.myTeams.map(function(e) {
							return e.id;
						});
						(this.myTeams = t),
							this.numberOfUpdates > 0 && (this.currentTab = 'Installed'),
							this.$modal.show('pluginManagerModal');
					},
					hide: function() {
						this.$modal.hide('pluginManagerModal');
					},
					openModal: function() {
						(this.modalOpened = !0),
							document.getElementById('pluginManagerButton') &&
								document.getElementById('pluginManagerButton').classList.add('active'),
							localStorage.setItem('figmaPlus-hasNewPlugins', 'false');
					},
					modalClosed: function() {
						var e = this;
						if ('Installed' === this.currentTab && this.numberOfUpdates > 0) {
							var t = this.installedPlugins.map(function(t) {
								return e.plugins.find(function(e) {
									return e.id === t.id;
								});
							});
							this.installedPlugins = t;
						}
						(this.currentTab = 'Plugins'),
							(this.modalOpened = !1),
							(this.detailScreenOn = !1),
							document.getElementById('pluginManagerButton') &&
								document.querySelector('#pluginManagerButton').classList.remove('active');
					},
					toggleModal: function() {
						this.modalOpened ? this.hide() : this.show();
					},
					goToDetail: function(e) {
						(this.selectedPlugin = e),
							(document.querySelector('.detail-screen .content').scrollTop = 0),
							(this.detailScreenOn = !0);
					},
					install: function(e) {
						this.installedPlugins.push(e),
							e.css &&
								e.css.forEach(function(t) {
									var n = document.createElement('link');
									(n.className = e.id),
										(n.rel = 'stylesheet'),
										(n.type = 'text/css'),
										(n.href = 'https://cdn.jsdelivr.net/gh/'
											.concat(e.userRepo, '@')
											.concat(e.commit, '/')
											.concat(t)),
										document.head.appendChild(n);
								}),
							e.js &&
								e.js.forEach(function(t) {
									fetch(
										'https://cdn.jsdelivr.net/gh/'
											.concat(e.userRepo, '@')
											.concat(e.commit, '/')
											.concat(t)
									)
										.then(function(e) {
											return e.text();
										})
										.then(function(t) {
											var n = document.createElement('script');
											n.className = e.id;
											var i = document.createTextNode('(function () {'.concat(t, '}())'));
											n.appendChild(i),
												document.head.appendChild(n),
												figmaPlus.showToast({ message: 'Installed '.concat(e.name) });
										});
								});
						var t = Ye.collection('users_installed_plugins').doc(this.user.uid);
						t.get().then(function(n) {
							n.exists ? t.update({ plugins: We.a.firestore.FieldValue.arrayUnion(e.id) }) : t.set({ plugins: [e.id] });
						});
					},
					uninstall: function(e) {
						(this.installedPlugins = this.installedPlugins.filter(function(t) {
							return t.id !== e.id;
						})),
							(this.detailScreenOn = !1),
							figmaPlus.showToast({
								message: figmaPlus.isDesktop
									? ''.concat(e.name, ' uninstalled. Refresh opened tabs to see changes.')
									: ''.concat(e.name, ' uninstalled. Refresh this page to see changes.'),
								timeoutInSeconds: 10,
								buttonText: figmaPlus.isDesktop ? 'Refresh this tab' : 'Refresh',
								buttonAction: function() {
									return location.reload();
								}
							});
						var t = Ye.collection('users_installed_plugins').doc(this.user.uid);
						t.get().then(function(n) {
							n.exists ? t.update({ plugins: We.a.firestore.FieldValue.arrayRemove(e.id) }) : t.set({ plugins: [] });
						});
					}
				}
			},
			Ze = Xe,
			Qe = (n('cd6a'), Object(V['a'])(Ze, re, le, !1, null, null, null)),
			et = Qe.exports,
			tt = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n('div', { staticClass: 'onboarding-modal' }, [
					n('img', {
						attrs: { src: 'https://docs.figmaplus.com/images/pluginManagerInFileBrowser.png', width: '376px' }
					}),
					n('div', { staticClass: 'padded-content' }, [
						n('div', { staticClass: 'onboarding-text' }, [
							e._v(
								'You can browse and install plugins by clicking on the Figma Plus icon next to Notifications in the top right corner of your File Browser.'
							)
						]),
						n(
							'a',
							{
								staticClass: 'link',
								attrs: { target: '_blank', href: 'https://docs.figmaplus.com/#/userGuide/manager' }
							},
							[e._v('Learn more...')]
						),
						n('div', { staticClass: 'buttons' }, [
							n('button', { staticClass: 'primary', on: { click: e.closeModal } }, [e._v('Done')])
						])
					])
				]);
			},
			nt = [],
			it = {
				mounted: function() {
					localStorage.setItem('figmaPlus-onboarded', 'true');
				},
				methods: {
					closeModal: function() {
						figmaPlus.hideUI('Welcome to Figma Plus');
					}
				}
			},
			st = it,
			at = (n('e49e'), Object(V['a'])(st, tt, nt, !1, null, '9a2946e6', null)),
			ot = at.exports,
			rt = n('0ff2');
		oe.Vue.use(rt['a']), (window.figmaPlus = oe);
		var lt = document.createElement('div');
		(lt.id = 'pluginManagerApp'),
			document.body.appendChild(lt),
			new oe.Vue({
				el: '#pluginManagerApp',
				render: function(e) {
					return e(et);
				}
			});
		var ct = JSON.parse(localStorage.getItem('figmaPlus-installedPlugins'));
		if (ct) {
			var ut = (function() {
				var e = Object(a['a'])(
					regeneratorRuntime.mark(function e() {
						var t, n, i, a, o, r, l;
						return regeneratorRuntime.wrap(
							function(e) {
								while (1)
									switch ((e.prev = e.next)) {
										case 0:
											(t = JSON.parse(localStorage.getItem('figmaPlus-masterList'))),
												(n = !0),
												(i = !1),
												(a = void 0),
												(e.prev = 4),
												(o = regeneratorRuntime.mark(function e() {
													var n, i, s, a, o;
													return regeneratorRuntime.wrap(function(e) {
														while (1)
															switch ((e.prev = e.next)) {
																case 0:
																	if (
																		((n = l.value),
																		(i = t.find(function(e) {
																			return e.id === n.id;
																		})),
																		(s = i.approvedVersion),
																		(a = i.approvedCommit),
																		n.version !== s)
																	) {
																		e.next = 8;
																		break;
																	}
																	(e.t0 = n), (e.next = 11);
																	break;
																case 8:
																	return (
																		(e.next = 10),
																		fetch(
																			'https://cdn.jsdelivr.net/gh/'.concat(n.userRepo, '@').concat(a, '/manifest.json')
																		).then(function(e) {
																			return e.json();
																		})
																	);
																case 10:
																	e.t0 = e.sent;
																case 11:
																	(o = e.t0),
																		o.css &&
																			o.css.forEach(function(e) {
																				var t = document.createElement('link');
																				(t.className = n.id),
																					(t.rel = 'stylesheet'),
																					(t.type = 'text/css'),
																					(t.href = 'https://cdn.jsdelivr.net/gh/'
																						.concat(n.userRepo, '@')
																						.concat(a, '/')
																						.concat(e)),
																					document.head.appendChild(t);
																			}),
																		o.js &&
																			o.js.forEach(function(e) {
																				fetch(
																					'https://cdn.jsdelivr.net/gh/'
																						.concat(n.userRepo, '@')
																						.concat(a, '/')
																						.concat(e)
																				)
																					.then(function(e) {
																						return e.text();
																					})
																					.then(function(e) {
																						var t = document.createElement('script');
																						t.className = n.id;
																						var i = document.createTextNode('(function () {'.concat(e, '}())'));
																						t.appendChild(i), document.head.appendChild(t);
																					})
																					.catch(function(e) {
																						console.log(e);
																					});
																			});
																case 14:
																case 'end':
																	return e.stop();
															}
													}, e);
												})),
												(r = s()(ct));
										case 7:
											if ((n = (l = r.next()).done)) {
												e.next = 12;
												break;
											}
											return e.delegateYield(o(), 't0', 9);
										case 9:
											(n = !0), (e.next = 7);
											break;
										case 12:
											e.next = 18;
											break;
										case 14:
											(e.prev = 14), (e.t1 = e['catch'](4)), (i = !0), (a = e.t1);
										case 18:
											(e.prev = 18), (e.prev = 19), n || null == r.return || r.return();
										case 21:
											if (((e.prev = 21), !i)) {
												e.next = 24;
												break;
											}
											throw a;
										case 24:
											return e.finish(21);
										case 25:
											return e.finish(18);
										case 26:
										case 'end':
											return e.stop();
									}
							},
							e,
							null,
							[[4, 14, 18, 26], [19, , 21, 25]]
						);
					})
				);
				return function() {
					return e.apply(this, arguments);
				};
			})();
			ut();
		}
		var dt = JSON.parse(localStorage.getItem('figmaPlus-localServer'));
		dt &&
			window.pluginDevMode &&
			dt.connected &&
			(dt.cssFiles.forEach(function(e) {
				var t = document.createElement('link');
				(t.className = 'localPlugin'),
					(t.rel = 'stylesheet'),
					(t.type = 'text/css'),
					(t.href = 'http://localhost:' + dt.port + '/' + e + '?_=' + new Date().getTime()),
					document.head.appendChild(t);
			}),
			dt.jsFiles.forEach(function(e) {
				fetch(
					oe.isDesktop
						? 'http://localhost:' + dt.port + '/' + e + '?_=' + new Date().getTime()
						: 'http://localhost:' + dt.port + '/' + e,
					{ cache: 'no-cache' }
				)
					.then(function(e) {
						return e.text();
					})
					.then(function(e) {
						var t = document.createElement('script');
						t.className = 'localPlugin';
						var n = document.createTextNode('(function () {'.concat(e, '}())'));
						t.appendChild(n), document.head.appendChild(t);
					})
					.catch(function(e) {
						console.log(e);
					});
			})),
			localStorage.getItem('figmaPlus-onboarded') ||
				oe.onFileBrowserLoaded(function() {
					oe.showUI({
						title: 'Welcome to Figma Plus',
						vueComponent: ot,
						width: 400,
						height: 425,
						overlay: !0,
						padding: !1
					});
				}),
			r();
	},
	'5c69': function(e, t, n) {
		'use strict';
		var i = n('12ca'),
			s = n.n(i);
		s.a;
	},
	'6b25': function(e, t, n) {},
	'7d2d': function(module, __webpack_exports__, __webpack_require__) {
		'use strict';
		var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('c197'),
			prismjs__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__),
			vue_prism_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('431a'),
			vue_prism_editor__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
				vue_prism_editor__WEBPACK_IMPORTED_MODULE_1__
			);
		__webpack_exports__['a'] = {
			data: function() {
				return { code: "figmaPlus.showToast({message: 'Hello world!'})", isDesktop: figmaPlus.isDesktop };
			},
			components: { PrismEditor: vue_prism_editor__WEBPACK_IMPORTED_MODULE_1___default.a },
			mounted: function() {
				null === localStorage.getItem('figmaPlus-scriptRunnerCode')
					? (this.code = "figmaPlus.showToast({message: 'Hello world!'})")
					: (this.code = localStorage.getItem('figmaPlus-scriptRunnerCode'));
			},
			methods: {
				onCodeChange: function(e) {
					localStorage.setItem('figmaPlus-scriptRunnerCode', e);
				},
				runCode: function runCode() {
					eval(this.code);
				},
				showConsole: function() {
					__figmaDesktop.postMessage('openDevTools', { mode: 'bottom' });
				}
			}
		};
	},
	cd6a: function(e, t, n) {
		'use strict';
		var i = n('f666'),
			s = n.n(i);
		s.a;
	},
	d073: function(e, t, n) {},
	e49e: function(e, t, n) {
		'use strict';
		var i = n('42ee'),
			s = n.n(i);
		s.a;
	},
	f666: function(e, t, n) {}
});
