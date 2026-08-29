import {
  $ as e,
  $t as t,
  A as n,
  B as r,
  Dt as i,
  Et as a,
  Ft as o,
  G as s,
  Gt as c,
  H as l,
  It as u,
  J as d,
  Jt as f,
  K as p,
  Lt as m,
  O as h,
  Pt as g,
  Q as _,
  Rt as v,
  Tt as y,
  W as ee,
  X as b,
  Y as x,
  Yt as S,
  Z as C,
  a as w,
  bt as te,
  ct as T,
  dt as ne,
  et as re,
  f as ie,
  g as E,
  in as D,
  jt as O,
  kt as k,
  nn as A,
  nt as ae,
  o as j,
  on as M,
  q as N,
  rt as oe,
  s as P,
  tn as se,
  tt as ce,
  vt as F,
  wt as I,
  x as le,
  y as L,
  yt as ue,
  z as R,
  zt as de
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  F as fe,
  M as pe
} from "./BuerdC7c.js";
import {
  t as me
} from "./CBvy2Co4.js";
import {
  t as he
} from "./DxdGK6Xj.js";
import {
  b as z,
  f as B,
  h as ge,
  i as _e,
  l as V,
  m as H,
  n as ve,
  o as ye,
  p as be,
  r as xe,
  t as U
} from "./C9RwO-Hq.js";
import {
  t as Se
} from "./CuJc5nlM.js";
import {
  t as Ce
} from "./CoPoiHDu.js";
var we = {
  position: `absolute`,
  width: `1px`,
  height: `1px`,
  padding: `0`,
  margin: `-1px`,
  overflow: `hidden`,
  clip: `rect(0, 0, 0, 0)`,
  whiteSpace: `nowrap`,
  borderWidth: `0`,
  transform: `translateX(-100%)`
};
ge(we);

function Te(e) {
  ue(() => () => {
    e()
  })
}

function Ee(e, t) {
  return setTimeout(t, e)
}

function W(e) {
  ne().then(e)
}
var De = `ArrowDown`,
  Oe = `ArrowLeft`,
  ke = `ArrowRight`,
  Ae = `ArrowUp`,
  je = `Enter`,
  Me = `Escape`,
  Ne = `Home`,
  Pe = typeof document < `u`,
  Fe = Ie();

function Ie() {
  var e, t, n;
  return Pe && ((e = window) == null || (e = e.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) == null ? void 0 : n.navigator.userAgent))
}

function Le(e) {
  return e instanceof HTMLElement
}

function Re(e) {
  return e instanceof Element
}

function ze(e) {
  return e instanceof Element || e instanceof SVGElement
}

function Be(e) {
  return e.pointerType === `touch`
}

function Ve(e) {
  return e.matches(`:focus-visible`)
}

function He(e) {
  return e !== null
}
var Ue = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  We = new WeakSet,
  Ge = class {
    constructor(e) {
      de(this, We), v(this, Ue, void 0), v(this, G, null), v(this, K, null), v(this, q, 0), u(Ue, this, e), Te(() => m(We, this, Ke).call(this))
    }
    run(e) {
      m(We, this, Ke).call(this);
      let t = o(Ue, this).ref.current;
      if (!t) return;
      if (typeof t.getAnimations != `function`) {
        m(We, this, qe).call(this, e);
        return
      }
      let n = o(q, this),
        r = () => {
          n === o(q, this) && m(We, this, qe).call(this, e)
        },
        i = () => {
          if (n !== o(q, this)) return;
          let e = t.getAnimations();
          if (e.length === 0) {
            r();
            return
          }
          Promise.all(e.map(e => e.finished)).then(() => {
            r()
          }).catch(() => {
            if (n === o(q, this)) {
              if (t.getAnimations().some(e => e.pending || e.playState !== `finished`)) {
                i();
                return
              }
              r()
            }
          })
        },
        a = () => {
          u(G, this, window.requestAnimationFrame(() => {
            u(G, this, null), i()
          }))
        };
      if (!o(Ue, this).afterTick.current) {
        a();
        return
      }
      u(G, this, window.requestAnimationFrame(() => {
        u(G, this, null);
        let e = `data-starting-style`;
        if (!t.hasAttribute(e)) {
          a();
          return
        }
        u(K, this, new MutationObserver(() => {
          var r;
          n === o(q, this) && (t.hasAttribute(e) || ((r = o(K, this)) == null || r.disconnect(), u(K, this, null), a()))
        })), o(K, this).observe(t, {
          attributes: !0,
          attributeFilter: [e]
        })
      }))
    }
  };

function Ke() {
  var e, t;
  o(G, this) !== null && (window.cancelAnimationFrame(o(G, this)), u(G, this, null)), (e = o(K, this)) == null || e.disconnect(), u(K, this, null), u(q, this, (t = o(q, this), t++, t))
}

function qe(e) {
  let t = () => {
    e()
  };
  o(Ue, this).afterTick ? W(t) : t()
}
var J = new WeakMap,
  Je = new WeakMap,
  Ye = new WeakMap,
  Y = new WeakMap,
  X = new WeakMap,
  Xe = new WeakMap,
  Ze = new WeakMap,
  Qe = new WeakSet,
  $e = class {
    constructor(e) {
      de(this, Qe), v(this, J, void 0), v(this, Je, void 0), v(this, Ye, void 0), v(this, Y, O(!1)), v(this, X, O(void 0)), v(this, Xe, !1), v(this, Ze, null), u(J, this, e), k(o(Y, this), e.open.current, !0), u(Je, this, e.enabled ?? !0), u(Ye, this, new Ge({
        ref: o(J, this).ref,
        afterTick: o(J, this).open
      })), Te(() => m(Qe, this, et).call(this)), B(() => o(J, this).open.current, e => {
        var t, n;
        if (!o(Xe, this)) {
          u(Xe, this, !0);
          return
        }
        if (m(Qe, this, et).call(this), !e && (t = (n = o(J, this)).shouldSkipExitAnimation) != null && t.call(n)) {
          var r, i;
          k(o(Y, this), !1), k(o(X, this), void 0), (r = (i = o(J, this)).onComplete) == null || r.call(i);
          return
        }
        if (e && k(o(Y, this), !0), k(o(X, this), e ? `starting` : `ending`, !0), e && u(Ze, this, window.requestAnimationFrame(() => {
            u(Ze, this, null), o(J, this).open.current && k(o(X, this), void 0)
          })), !o(Je, this)) {
          var a, s;
          e || k(o(Y, this), !1), k(o(X, this), void 0), (a = (s = o(J, this)).onComplete) == null || a.call(s);
          return
        }
        o(Ye, this).run(() => {
          if (e === o(J, this).open.current) {
            var t, n;
            o(J, this).open.current || k(o(Y, this), !1), k(o(X, this), void 0), (t = (n = o(J, this)).onComplete) == null || t.call(n)
          }
        })
      })
    }
    get shouldRender() {
      return T(o(Y, this))
    }
    get transitionStatus() {
      return T(o(X, this))
    }
  };

function et() {
  o(Ze, this) !== null && (window.cancelAnimationFrame(o(Ze, this)), u(Ze, this, null))
}
ye({
  component: `dialog`,
  parts: [`content`, `trigger`, `overlay`, `title`, `description`, `close`, `cancel`, `action`]
}), new be(`Dialog.Root | AlertDialog.Root`);

function tt(e, t) {
  var n = b(),
    i = y(n);
  ee(i, () => t.children, e => {
    var n = b(),
      i = y(n);
    r(i, () => t.children ?? M), x(e, n)
  }), x(e, n)
}
var nt = new be(`BitsConfig`);

function rt() {
  let e = new it(null, {});
  return nt.getOr(e).opts
}
var it = class {
  constructor(e, t) {
    D(this, `opts`, void 0);
    let n = at(e, t);
    this.opts = {
      defaultPortalTo: n(e => e.defaultPortalTo),
      defaultLocale: n(e => e.defaultLocale)
    }
  }
};

function at(e, t) {
  return n => z(() => {
    var r, i;
    let a = (r = n(t)) == null ? void 0 : r.current;
    if (a !== void 0) return a;
    if (e !== null) return (i = n(e.opts)) == null ? void 0 : i.current
  })
}

function ot(e, t) {
  return n => {
    let r = rt();
    return z(() => {
      let i = n();
      if (i !== void 0) return i;
      let a = e(r).current;
      return a === void 0 ? t : a
    })
  }
}
var st = ot(e => e.defaultPortalTo, `body`);

function ct(e, t) {
  S(t, !0);
  let n = st(() => t.to),
    i = c(),
    a = g(o);

  function o() {
    if (!Pe || t.disabled) return null;
    let e = null;
    return e = typeof n.current == `string` ? document.querySelector(n.current) : n.current, e
  }
  let l;

  function u() {
    l && (d(l), l = null)
  }
  B([() => T(a), () => t.disabled], ([e, n]) => {
    if (!e || n) {
      u();
      return
    }
    return l = p(tt, {
      target: e,
      props: {
        children: t.children
      },
      context: i
    }), () => {
      u()
    }
  });
  var m = b(),
    h = y(m),
    _ = e => {
      var n = b(),
        i = y(n);
      r(i, () => t.children ?? M), x(e, n)
    };
  s(h, e => {
    t.disabled && e(_)
  }), x(e, m), f()
}

function lt(e) {
  if (!e) return null;
  for (let t of e.childNodes)
    if (t.nodeType !== Node.COMMENT_NODE) return t;
  return null
}

function ut(e, t) {
  let {
    clientX: n,
    clientY: r
  } = e, i = t.getBoundingClientRect();
  return n < i.left || n > i.right || r < i.top || r > i.bottom
}
var dt;
(dt = globalThis).bitsIdCounter ?? (dt.bitsIdCounter = {
  current: 0
});

function ft(e = `bits`) {
  return globalThis.bitsIdCounter.current++, `${e}-${globalThis.bitsIdCounter.current}`
}

function pt(e, t) {
  let n = e.nextElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling
  }
}

function mt(e, t) {
  let n = e.previousElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling
  }
}

function ht(e) {
  if (typeof CSS < `u` && typeof CSS.escape == `function`) return CSS.escape(e);
  let t = e.length,
    n = -1,
    r, i = ``,
    a = e.charCodeAt(0);
  if (t === 1 && a === 45) return `\\` + e;
  for (; ++n < t;) {
    if (r = e.charCodeAt(n), r === 0) {
      i += `�`;
      continue
    }
    if (r >= 1 && r <= 31 || r === 127 || n === 0 && r >= 48 && r <= 57 || n === 1 && r >= 48 && r <= 57 && a === 45) {
      i += `\\` + r.toString(16) + ` `;
      continue
    }
    if (r >= 128 || r === 45 || r === 95 || r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122) {
      i += e.charAt(n);
      continue
    }
    i += `\\` + e.charAt(n)
  }
  return i
}
var Z = `data-value`,
  Q = ye({
    component: `command`,
    parts: [`root`, `list`, `input`, `separator`, `loading`, `empty`, `group`, `group-items`, `group-heading`, `item`, `viewport`, `input-label`]
  }),
  gt = Q.selector(`group`),
  _t = Q.selector(`group-items`),
  vt = Q.selector(`group-heading`),
  yt = Q.selector(`item`),
  bt = `${Q.selector(`item`)}:not([aria-disabled="true"])`,
  xt = new be(`Command.Root`),
  St = new be(`Command.List`),
  Ct = new be(`Command.Group`),
  wt = {
    search: ``,
    value: ``,
    filtered: {
      count: 0,
      items: new Map,
      groups: new Set
    }
  },
  Tt = new WeakMap,
  Et = new WeakMap,
  Dt = new WeakMap,
  Ot = new WeakMap,
  kt = new WeakMap,
  At = new WeakMap,
  jt = new WeakMap,
  Mt = new WeakMap,
  $ = new WeakSet,
  Nt = new WeakMap,
  Pt = class e {
    static create(t) {
      return xt.set(new e(t))
    }
    get key() {
      return T(o(Dt, this))
    }
    set key(e) {
      k(o(Dt, this), e, !0)
    }
    get viewportNode() {
      return T(o(Ot, this))
    }
    set viewportNode(e) {
      k(o(Ot, this), e, !0)
    }
    get inputNode() {
      return T(o(kt, this))
    }
    set inputNode(e) {
      k(o(kt, this), e, !0)
    }
    get labelNode() {
      return T(o(At, this))
    }
    set labelNode(e) {
      k(o(At, this), e, !0)
    }
    get commandState() {
      return T(o(jt, this))
    }
    set commandState(e) {
      k(o(jt, this), e)
    }
    get _commandState() {
      return T(o(Mt, this))
    }
    set _commandState(e) {
      k(o(Mt, this), e, !0)
    }
    setState(e, t, n) {
      Object.is(this._commandState[e], t) || (this._commandState[e] = t, e === `search` ? (m($, this, Vt).call(this), m($, this, Rt).call(this)) : e === `value` && (n || m($, this, Ut).call(this)), m($, this, It).call(this))
    }
    constructor(e) {
      de(this, $), D(this, `opts`, void 0), D(this, `attachment`, void 0), v(this, Tt, !1), v(this, Et, !0), D(this, `sortAfterTick`, !1), D(this, `sortAndFilterAfterTick`, !1), D(this, `allItems`, new Set), D(this, `allGroups`, new Map), D(this, `allIds`, new Map), v(this, Dt, O(0)), v(this, Ot, O(null)), v(this, kt, O(null)), v(this, At, O(null)), v(this, jt, O(wt)), v(this, Mt, O(i(wt))), v(this, Nt, g(() => ({
        id: this.opts.id.current,
        role: `application`,
        [Q.root]: ``,
        tabindex: -1,
        onkeydown: this.onkeydown,
        ...this.attachment
      }))), this.opts = e, this.attachment = V(this.opts.ref);
      let t = {
        ...this._commandState,
        value: this.opts.value.current ?? ``
      };
      this._commandState = t, this.commandState = t, this.onkeydown = this.onkeydown.bind(this)
    }
    setValue(e, t) {
      e !== this.opts.value.current && e === `` && W(() => {
        this.key++
      }), this.setState(`value`, e, t), this.opts.value.current = e
    }
    getValidItems() {
      let e = this.opts.ref.current;
      return e ? Array.from(e.querySelectorAll(bt)).filter(e => !!e) : []
    }
    getVisibleItems() {
      let e = this.opts.ref.current;
      return e ? Array.from(e.querySelectorAll(yt)).filter(e => !!e) : []
    }
    get itemsGrid() {
      var e;
      if (!this.isGrid) return [];
      let t = this.opts.columns.current ?? 1,
        n = this.getVisibleItems(),
        r = [
          []
        ],
        i = (e = n[0]) == null ? void 0 : e.getAttribute(`data-group`),
        a = 0,
        o = 0;
      for (let e = 0; e < n.length; e++) {
        let l = n[e],
          u = l == null ? void 0 : l.getAttribute(`data-group`);
        if (i !== u) i = u, a = 1, o++, r.push([{
          index: e,
          firstRowOfGroup: !0,
          ref: l
        }]);
        else {
          var s, c;
          a++, a > t && (o++, a = 1, r.push([])), (s = r[o]) == null || s.push({
            index: e,
            firstRowOfGroup: ((c = r[o]) == null || (c = c[0]) == null ? void 0 : c.firstRowOfGroup) ?? e === 0,
            ref: l
          })
        }
      }
      return r
    }
    updateSelectedToIndex(e) {
      let t = this.getValidItems()[e];
      t && this.setValue(t.getAttribute(Z) ?? ``)
    }
    updateSelectedByItem(e) {
      let t = m($, this, Ht).call(this),
        n = this.getValidItems(),
        r = n.findIndex(e => e === t),
        i = n[r + e];
      this.opts.loop.current && (i = r + e < 0 ? n[n.length - 1] : r + e === n.length ? n[0] : n[r + e]), i && this.setValue(i.getAttribute(Z) ?? ``)
    }
    updateSelectedByGroup(e) {
      let t = m($, this, Ht).call(this),
        n = t == null ? void 0 : t.closest(gt),
        r;
      for (; n && !r;) n = e > 0 ? pt(n, gt) : mt(n, gt), r = n == null ? void 0 : n.querySelector(bt);
      r ? this.setValue(r.getAttribute(Z) ?? ``) : this.updateSelectedByItem(e)
    }
    registerValue(e, t) {
      var n;
      return e && e === ((n = this.allIds.get(e)) == null ? void 0 : n.value) || this.allIds.set(e, {
        value: e,
        keywords: t
      }), this._commandState.filtered.items.set(e, m($, this, Lt).call(this, e, t)), this.sortAfterTick || (this.sortAfterTick = !0, W(() => {
        m($, this, Rt).call(this), this.sortAfterTick = !1
      })), () => {
        this.allIds.delete(e)
      }
    }
    registerItem(e, t) {
      return this.allItems.add(e), t && (this.allGroups.has(t) ? this.allGroups.get(t).add(e) : this.allGroups.set(t, new Set([e]))), this.sortAndFilterAfterTick || (this.sortAndFilterAfterTick = !0, W(() => {
        m($, this, Vt).call(this), m($, this, Rt).call(this), this.sortAndFilterAfterTick = !1
      })), m($, this, It).call(this), () => {
        let t = m($, this, Ht).call(this);
        this.allItems.delete(e), this.commandState.filtered.items.delete(e), m($, this, Vt).call(this), (t == null ? void 0 : t.getAttribute(`id`)) === e && m($, this, zt).call(this), m($, this, It).call(this)
      }
    }
    registerGroup(e) {
      return this.allGroups.has(e) || this.allGroups.set(e, new Set), () => {
        this.allIds.delete(e), this.allGroups.delete(e)
      }
    }
    get isGrid() {
      return this.opts.columns.current !== null
    }
    onkeydown(e) {
      let t = this.opts.vimBindings.current && e.ctrlKey;
      switch (e.key) {
        case `n`:
        case `j`:
          t && (this.isGrid ? m($, this, qt).call(this, e) : m($, this, Kt).call(this, e));
          break;
        case `l`:
          t && this.isGrid && m($, this, Kt).call(this, e);
          break;
        case De:
          this.isGrid ? m($, this, qt).call(this, e) : m($, this, Kt).call(this, e);
          break;
        case ke:
          if (!this.isGrid) break;
          m($, this, Kt).call(this, e);
          break;
        case `p`:
        case `k`:
          t && (this.isGrid ? m($, this, Qt).call(this, e) : m($, this, tn).call(this, e));
          break;
        case `h`:
          t && this.isGrid && m($, this, tn).call(this, e);
          break;
        case Ae:
          this.isGrid ? m($, this, Qt).call(this, e) : m($, this, tn).call(this, e);
          break;
        case Oe:
          if (!this.isGrid) break;
          m($, this, tn).call(this, e);
          break;
        case Ne:
          e.preventDefault(), this.updateSelectedToIndex(0);
          break;
        case `End`:
          e.preventDefault(), m($, this, Gt).call(this);
          break;
        case je:
          if (!e.isComposing && e.keyCode !== 229) {
            e.preventDefault();
            let t = m($, this, Ht).call(this);
            t && (t == null || t.click())
          }
      }
    }
    get props() {
      return T(o(Nt, this))
    }
    set props(e) {
      k(o(Nt, this), e)
    }
  };

function Ft() {
  return t(this._commandState)
}

function It() {
  o(Tt, this) || (u(Tt, this, !0), W(() => {
    u(Tt, this, !1);
    let e = m($, this, Ft).call(this);
    if (!Object.is(this.commandState, e)) {
      var t, n;
      this.commandState = e, (t = this.opts.onStateChange) == null || (n = t.current) == null || n.call(t, e)
    }
  }))
}

function Lt(e, t) {
  let n = this.opts.filter.current ?? wr;
  return e ? n(e, this._commandState.search, t) : 0
}

function Rt() {
  if (!this._commandState.search || this.opts.shouldFilter.current === !1) {
    !this._commandState.value || !o(Et, this) ? m($, this, zt).call(this) : o(Et, this) && this._commandState.value && m($, this, Bt).call(this);
    return
  }
  let e = this._commandState.filtered.items,
    t = [];
  for (let n of this._commandState.filtered.groups) {
    let r = this.allGroups.get(n),
      i = 0;
    if (!r) {
      t.push([n, i]);
      continue
    }
    for (let t of r) {
      let n = e.get(t);
      i = Math.max(n ?? 0, i)
    }
    t.push([n, i])
  }
  let n = this.viewportNode,
    r = this.getValidItems().sort((t, n) => {
      let r = t.getAttribute(`data-value`),
        i = n.getAttribute(`data-value`),
        a = e.get(r) ?? 0;
      return (e.get(i) ?? 0) - a
    });
  for (let e of r) {
    let t = e.closest(_t);
    if (t) {
      let n = e.parentElement === t ? e : e.closest(`${_t} > *`);
      n && t.appendChild(n)
    } else {
      let t = e.parentElement === n ? e : e.closest(`${_t} > *`);
      t && (n == null || n.appendChild(t))
    }
  }
  let i = t.sort((e, t) => t[1] - e[1]);
  for (let e of i) {
    var a;
    let t = n == null ? void 0 : n.querySelector(`${gt}[${Z}="${ht(e[0])}"]`);
    t == null || (a = t.parentElement) == null || a.appendChild(t)
  }
  m($, this, zt).call(this)
}

function zt() {
  W(() => {
    let e = this.getValidItems().find(e => e.getAttribute(`aria-disabled`) !== `true`),
      t = e == null ? void 0 : e.getAttribute(Z),
      n = o(Et, this) && this.opts.disableInitialScroll.current;
    this.setValue(t ?? ``, n), u(Et, this, !1)
  })
}

function Bt() {
  W(() => {
    this.opts.disableInitialScroll.current || m($, this, Ut).call(this), u(Et, this, !1)
  })
}

function Vt() {
  if (!this._commandState.search || this.opts.shouldFilter.current === !1) {
    this._commandState.filtered.count = this.allItems.size;
    return
  }
  this._commandState.filtered.groups = new Set;
  let e = 0;
  for (let r of this.allItems) {
    var t, n;
    let i = ((t = this.allIds.get(r)) == null ? void 0 : t.value) ?? ``,
      a = ((n = this.allIds.get(r)) == null ? void 0 : n.keywords) ?? [],
      o = m($, this, Lt).call(this, i, a);
    this._commandState.filtered.items.set(r, o), o > 0 && e++
  }
  for (let [e, t] of this.allGroups)
    for (let n of t) {
      let t = this._commandState.filtered.items.get(n);
      if (t && t > 0) {
        this._commandState.filtered.groups.add(e);
        break
      }
    }
  this._commandState.filtered.count = e
}

function Ht() {
  let e = this.opts.ref.current;
  if (!e) return;
  let t = e.querySelector(`${bt}[data-selected]`);
  if (t) return t
}

function Ut() {
  W(() => {
    var e;
    let t = m($, this, Ht).call(this);
    if (!t) return;
    let n = (e = t.parentElement) == null ? void 0 : e.parentElement;
    if (n) {
      if (this.isGrid) {
        let e = m($, this, Wt).call(this, t);
        if (t.scrollIntoView({
            block: `nearest`
          }), e) {
          var r;
          let e = t == null || (r = t.closest(gt)) == null ? void 0 : r.querySelector(vt);
          e == null || e.scrollIntoView({
            block: `nearest`
          });
          return
        }
      } else {
        var i, a;
        let e = lt(n);
        if (e && ((i = e.dataset) == null ? void 0 : i.value) === ((a = t.dataset) == null ? void 0 : a.value)) {
          var o;
          let e = t == null || (o = t.closest(gt)) == null ? void 0 : o.querySelector(vt);
          e == null || e.scrollIntoView({
            block: `nearest`
          });
          return
        }
      }
      t.scrollIntoView({
        block: `nearest`
      })
    }
  })
}

function Wt(e) {
  let t = this.itemsGrid;
  if (t.length === 0) return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (r !== void 0)
      for (let t = 0; t < r.length; t++) {
        let n = r[t];
        if (n !== void 0 && n.ref === e) return n.firstRowOfGroup
      }
  }
  return !1
}

function Gt() {
  return this.updateSelectedToIndex(this.getValidItems().length - 1)
}

function Kt(e) {
  e.preventDefault(), e.metaKey ? m($, this, Gt).call(this) : e.altKey ? this.updateSelectedByGroup(1) : this.updateSelectedByItem(1)
}

function qt(e) {
  this.opts.columns.current !== null && (e.preventDefault(), e.metaKey ? this.updateSelectedByGroup(1) : this.updateSelectedByItem(m($, this, Yt).call(this, e)))
}

function Jt(e, t) {
  if (t.length === 0) return null;
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (r !== void 0)
      for (let t = 0; t < r.length; t++) {
        let i = r[t];
        if (i !== void 0 && i.ref === e) return {
          columnIndex: t,
          rowIndex: n
        }
      }
  }
  return null
}

function Yt(e) {
  let t = this.itemsGrid,
    n = m($, this, Ht).call(this);
  if (!n) return 0;
  let r = m($, this, Jt).call(this, n, t);
  if (!r) return 0;
  let i = null,
    a = +!!e.altKey;
  if (e.altKey && r.rowIndex === t.length - 2 && !this.opts.loop.current) i = m($, this, Xt).call(this, {
    start: t.length - 1,
    end: t.length,
    expectedColumnIndex: r.columnIndex,
    grid: t
  });
  else if (r.rowIndex === t.length - 1) {
    if (!this.opts.loop.current) return 0;
    i = m($, this, Xt).call(this, {
      start: 0 + a,
      end: r.rowIndex,
      expectedColumnIndex: r.columnIndex,
      grid: t
    })
  } else i = m($, this, Xt).call(this, {
    start: r.rowIndex + 1 + a,
    end: t.length,
    expectedColumnIndex: r.columnIndex,
    grid: t
  }), i === null && this.opts.loop.current && (i = m($, this, Xt).call(this, {
    start: 0,
    end: r.rowIndex,
    expectedColumnIndex: r.columnIndex,
    grid: t
  }));
  return m($, this, Zt).call(this, n, i)
}

function Xt({
  start: e,
  end: t,
  grid: n,
  expectedColumnIndex: r
}) {
  let i = null;
  for (let o = e; o < t; o++) {
    var a;
    let e = n[o];
    if (i = ((a = e[r]) == null ? void 0 : a.ref) ?? null, i !== null && nn(i)) {
      i = null;
      continue
    }
    if (i === null)
      for (let t = e.length - 1; t >= 0; t--) {
        let t = e[e.length - 1];
        if (!(t === void 0 || nn(t.ref))) {
          i = t.ref;
          break
        }
      }
    break
  }
  return i
}

function Zt(e, t) {
  if (t === null) return 0;
  let n = this.getValidItems(),
    r = n.findIndex(t => t === e);
  return n.findIndex(e => e === t) - r
}

function Qt(e) {
  this.opts.columns.current !== null && (e.preventDefault(), e.metaKey ? this.updateSelectedByGroup(-1) : this.updateSelectedByItem(m($, this, $t).call(this, e)))
}

function $t(e) {
  let t = this.itemsGrid,
    n = m($, this, Ht).call(this);
  if (n === void 0) return 0;
  let r = m($, this, Jt).call(this, n, t);
  if (r === null) return 0;
  let i = null,
    a = +!!e.altKey;
  if (e.altKey && r.rowIndex === 1 && this.opts.loop.current === !1) i = m($, this, en).call(this, {
    start: 0,
    end: 0,
    expectedColumnIndex: r.columnIndex,
    grid: t
  });
  else if (r.rowIndex === 0) {
    if (this.opts.loop.current === !1) return 0;
    i = m($, this, en).call(this, {
      start: t.length - 1 - a,
      end: r.rowIndex + 1,
      expectedColumnIndex: r.columnIndex,
      grid: t
    })
  } else i = m($, this, en).call(this, {
    start: r.rowIndex - 1 - a,
    end: 0,
    expectedColumnIndex: r.columnIndex,
    grid: t
  }), i === null && this.opts.loop.current && (i = m($, this, en).call(this, {
    start: t.length - 1,
    end: r.rowIndex + 1,
    expectedColumnIndex: r.columnIndex,
    grid: t
  }));
  return m($, this, Zt).call(this, n, i)
}

function en({
  start: e,
  end: t,
  grid: n,
  expectedColumnIndex: r
}) {
  let i = null;
  for (let o = e; o >= t; o--) {
    var a;
    let e = n[o];
    if (e !== void 0) {
      if (i = ((a = e[r]) == null ? void 0 : a.ref) ?? null, i !== null && nn(i)) {
        i = null;
        continue
      }
      if (i === null)
        for (let t = e.length - 1; t >= 0; t--) {
          let t = e[e.length - 1];
          if (!(t === void 0 || nn(t.ref))) {
            i = t.ref;
            break
          }
        }
      break
    }
  }
  return i
}

function tn(e) {
  e.preventDefault(), e.metaKey ? this.updateSelectedToIndex(0) : e.altKey ? this.updateSelectedByGroup(-1) : this.updateSelectedByItem(-1)
}

function nn(e) {
  return e.getAttribute(`aria-disabled`) === `true`
}
var rn = new WeakMap,
  an = new WeakMap,
  on = new WeakMap,
  sn = class e {
    static create(t) {
      return new e(t, xt.get())
    }
    get shouldRender() {
      return T(o(rn, this))
    }
    set shouldRender(e) {
      k(o(rn, this), e)
    }
    constructor(e, t) {
      D(this, `opts`, void 0), D(this, `root`, void 0), D(this, `attachment`, void 0), v(this, rn, g(() => this.root._commandState.filtered.count === 0 && o(an, this) === !1 || this.opts.forceMount.current)), v(this, an, !0), v(this, on, g(() => ({
        id: this.opts.id.current,
        role: `presentation`,
        [Q.empty]: ``,
        ...this.attachment
      }))), this.opts = e, this.root = t, this.attachment = V(this.opts.ref), te(() => {
        u(an, this, !1)
      })
    }
    get props() {
      return T(o(on, this))
    }
    set props(e) {
      k(o(on, this), e)
    }
  },
  cn = new WeakMap,
  ln = new WeakMap,
  un = new WeakMap,
  dn = new WeakMap,
  fn = class e {
    static create(t) {
      return Ct.set(new e(t, xt.get()))
    }
    get shouldRender() {
      return T(o(cn, this))
    }
    set shouldRender(e) {
      k(o(cn, this), e)
    }
    get headingNode() {
      return T(o(ln, this))
    }
    set headingNode(e) {
      k(o(ln, this), e, !0)
    }
    get trueValue() {
      return T(o(un, this))
    }
    set trueValue(e) {
      k(o(un, this), e, !0)
    }
    constructor(e, t) {
      D(this, `opts`, void 0), D(this, `root`, void 0), D(this, `attachment`, void 0), v(this, cn, g(() => this.opts.forceMount.current || this.root.opts.shouldFilter.current === !1 || !this.root.commandState.search ? !0 : this.root._commandState.filtered.groups.has(this.trueValue))), v(this, ln, O(null)), v(this, un, O(``)), v(this, dn, g(() => ({
        id: this.opts.id.current,
        role: `presentation`,
        hidden: !this.shouldRender || void 0,
        "data-value": this.trueValue,
        [Q.group]: ``,
        ...this.attachment
      }))), this.opts = e, this.root = t, this.attachment = V(this.opts.ref), this.trueValue = e.value.current ?? e.id.current, B(() => this.trueValue, () => this.root.registerGroup(this.trueValue)), ue(() => this.opts.value.current ? (this.trueValue = this.opts.value.current, this.root.registerValue(this.opts.value.current)) : this.headingNode && this.headingNode.textContent ? (this.trueValue = this.headingNode.textContent.trim().toLowerCase(), this.root.registerValue(this.trueValue)) : (this.trueValue = `-----${this.opts.id.current}`, this.root.registerValue(this.trueValue)))
    }
    get props() {
      return T(o(dn, this))
    }
    set props(e) {
      k(o(dn, this), e)
    }
  },
  pn = new WeakMap,
  mn = class e {
    static create(t) {
      return new e(t, Ct.get())
    }
    constructor(e, t) {
      D(this, `opts`, void 0), D(this, `group`, void 0), D(this, `attachment`, void 0), v(this, pn, g(() => ({
        id: this.opts.id.current,
        [Q[`group-heading`]]: ``,
        ...this.attachment
      }))), this.opts = e, this.group = t, this.attachment = V(this.opts.ref, e => this.group.headingNode = e)
    }
    get props() {
      return T(o(pn, this))
    }
    set props(e) {
      k(o(pn, this), e)
    }
  },
  hn = new WeakMap,
  gn = class e {
    static create(t) {
      return new e(t, Ct.get())
    }
    constructor(e, t) {
      D(this, `opts`, void 0), D(this, `group`, void 0), D(this, `attachment`, void 0), v(this, hn, g(() => {
        var e;
        return {
          id: this.opts.id.current,
          role: `group`,
          [Q[`group-items`]]: ``,
          "aria-labelledby": ((e = this.group.headingNode) == null ? void 0 : e.id) ?? void 0,
          ...this.attachment
        }
      })), this.opts = e, this.group = t, this.attachment = V(this.opts.ref)
    }
    get props() {
      return T(o(hn, this))
    }
    set props(e) {
      k(o(hn, this), e)
    }
  },
  _n = new WeakMap,
  vn = new WeakMap,
  yn = class e {
    static create(t) {
      return new e(t, xt.get())
    }
    constructor(e, t) {
      D(this, `opts`, void 0), D(this, `root`, void 0), D(this, `attachment`, void 0), v(this, _n, g(() => {
        var e;
        let t = (e = this.root.viewportNode) == null ? void 0 : e.querySelector(`${yt}[${Z}="${ht(this.root.opts.value.current)}"]`);
        if (t != null) return t.getAttribute(`id`) ?? void 0
      })), v(this, vn, g(() => {
        var e, t;
        return {
          id: this.opts.id.current,
          type: `text`,
          [Q.input]: ``,
          autocomplete: `off`,
          autocorrect: `off`,
          spellcheck: !1,
          "aria-autocomplete": `list`,
          role: `combobox`,
          "aria-expanded": _e(!0),
          "aria-controls": ((e = this.root.viewportNode) == null ? void 0 : e.id) ?? void 0,
          "aria-labelledby": ((t = this.root.labelNode) == null ? void 0 : t.id) ?? void 0,
          "aria-activedescendant": T(o(_n, this)),
          ...this.attachment
        }
      })), this.opts = e, this.root = t, this.attachment = V(this.opts.ref, e => this.root.inputNode = e), B(() => this.opts.ref.current, () => {
        let e = this.opts.ref.current;
        e && this.opts.autofocus.current && Ee(10, () => e.focus())
      }), B(() => this.opts.value.current, () => {
        this.root.commandState.search !== this.opts.value.current && this.root.setState(`search`, this.opts.value.current)
      })
    }
    get props() {
      return T(o(vn, this))
    }
    set props(e) {
      k(o(vn, this), e)
    }
  },
  bn = new WeakMap,
  xn = new WeakMap,
  Sn = new WeakMap,
  Cn = new WeakMap,
  wn = new WeakMap,
  Tn = new WeakSet,
  En = new WeakMap,
  Dn = class e {
    static create(t) {
      let n = Ct.getOr(null);
      return new e({
        ...t,
        group: n
      }, xt.get())
    }
    get shouldRender() {
      return T(o(Sn, this))
    }
    set shouldRender(e) {
      k(o(Sn, this), e)
    }
    get isSelected() {
      return T(o(Cn, this))
    }
    set isSelected(e) {
      k(o(Cn, this), e)
    }
    get trueValue() {
      return T(o(wn, this))
    }
    set trueValue(e) {
      k(o(wn, this), e, !0)
    }
    constructor(e, t) {
      de(this, Tn), D(this, `opts`, void 0), D(this, `root`, void 0), D(this, `attachment`, void 0), v(this, bn, null), v(this, xn, g(() => {
        var e;
        return this.opts.forceMount.current || ((e = o(bn, this)) == null ? void 0 : e.opts.forceMount.current) === !0
      })), v(this, Sn, g(() => {
        if (this.opts.ref.current, T(o(xn, this)) || this.root.opts.shouldFilter.current === !1 || !this.root.commandState.search) return !0;
        let e = this.root.commandState.filtered.items.get(this.trueValue);
        return e !== void 0 && e > 0
      })), v(this, Cn, g(() => this.root.opts.value.current === this.trueValue && this.trueValue !== ``)), v(this, wn, O(``)), v(this, En, g(() => {
        var e;
        return {
          id: this.opts.id.current,
          "aria-disabled": _e(this.opts.disabled.current),
          "aria-selected": _e(this.isSelected),
          "data-disabled": xe(this.opts.disabled.current),
          "data-selected": xe(this.isSelected),
          "data-value": this.trueValue,
          "data-group": (e = o(bn, this)) == null ? void 0 : e.trueValue,
          [Q.item]: ``,
          role: `option`,
          onpointermove: this.onpointermove,
          onclick: this.onclick,
          ...this.attachment
        }
      })), this.opts = e, this.root = t, u(bn, this, Ct.getOr(null)), this.trueValue = e.value.current, this.attachment = V(this.opts.ref), B([() => this.trueValue, () => {
        var e;
        return (e = o(bn, this)) == null ? void 0 : e.trueValue
      }, () => this.opts.forceMount.current], () => {
        var e;
        if (!(this.opts.forceMount.current || !this.trueValue)) return this.root.registerItem(this.trueValue, (e = o(bn, this)) == null ? void 0 : e.trueValue)
      }), B([() => this.opts.value.current, () => this.opts.ref.current], () => {
        var t;
        if (this.opts.value.current ? this.trueValue = this.opts.value.current : (t = this.opts.ref.current) != null && t.textContent && (this.trueValue = this.opts.ref.current.textContent.trim()), this.trueValue) {
          var n;
          this.root.registerValue(this.trueValue, e.keywords.current.map(e => e.trim())), (n = this.opts.ref.current) == null || n.setAttribute(Z, this.trueValue)
        }
      }), this.onclick = this.onclick.bind(this), this.onpointermove = this.onpointermove.bind(this)
    }
    onpointermove(e) {
      this.opts.disabled.current || this.root.opts.disablePointerSelection.current || m(Tn, this, kn).call(this)
    }
    onclick(e) {
      this.opts.disabled.current || m(Tn, this, On).call(this)
    }
    get props() {
      return T(o(En, this))
    }
    set props(e) {
      k(o(En, this), e)
    }
  };

function On() {
  var e;
  this.opts.disabled.current || (m(Tn, this, kn).call(this), (e = this.opts.onSelect) == null || e.current())
}

function kn() {
  this.opts.disabled.current || this.root.setValue(this.trueValue, !0)
}
var An = new WeakMap,
  jn = class e {
    static create(t) {
      return St.set(new e(t, xt.get()))
    }
    constructor(e, t) {
      D(this, `opts`, void 0), D(this, `root`, void 0), D(this, `attachment`, void 0), v(this, An, g(() => ({
        id: this.opts.id.current,
        role: `listbox`,
        "aria-label": this.opts.ariaLabel.current,
        [Q.list]: ``,
        ...this.attachment
      }))), this.opts = e, this.root = t, this.attachment = V(this.opts.ref)
    }
    get props() {
      return T(o(An, this))
    }
    set props(e) {
      k(o(An, this), e)
    }
  },
  Mn = new WeakMap,
  Nn = class e {
    static create(t) {
      return new e(t, xt.get())
    }
    constructor(e, t) {
      D(this, `opts`, void 0), D(this, `root`, void 0), D(this, `attachment`, void 0), v(this, Mn, g(() => {
        var e;
        return {
          id: this.opts.id.current,
          [Q[`input-label`]]: ``,
          for: (e = this.opts.for) == null ? void 0 : e.current,
          style: we,
          ...this.attachment
        }
      })), this.opts = e, this.root = t, this.attachment = V(this.opts.ref, e => this.root.labelNode = e)
    }
    get props() {
      return T(o(Mn, this))
    }
    set props(e) {
      k(o(Mn, this), e)
    }
  },
  Pn = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `children`]),
  Fn = C(`<label><!></label>`);

function In(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `id`, 19, () => U(i)),
    o = w(n, `ref`, 15, null),
    s = j(n, Pn),
    c = Nn.create({
      id: z(() => a()),
      ref: z(() => o(), e => o(e))
    }),
    l = g(() => H(s, c.props));
  var u = Fn();
  L(u, () => ({
    ...T(l)
  }));
  var d = I(u);
  r(d, () => n.children ?? M), A(u), x(t, u), f()
}
var Ln = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `value`, `onValueChange`, `onStateChange`, `loop`, `shouldFilter`, `filter`, `label`, `vimBindings`, `disablePointerSelection`, `disableInitialScroll`, `columns`, `children`, `child`]),
  Rn = C(`<!> <!>`, 1),
  zn = C(`<div><!> <!></div>`);

function Bn(t, n) {
  let i = e();
  S(n, !0);
  let o = e => {
      In(e, {
        children: (e, t) => {
          se();
          var n = re();
          F(() => N(n, v())), x(e, n)
        },
        $$slots: {
          default: !0
        }
      })
    },
    c = w(n, `id`, 19, () => U(i)),
    l = w(n, `ref`, 15, null),
    u = w(n, `value`, 15, ``),
    d = w(n, `onValueChange`, 3, ve),
    p = w(n, `onStateChange`, 3, ve),
    m = w(n, `loop`, 3, !1),
    h = w(n, `shouldFilter`, 3, !0),
    _ = w(n, `filter`, 3, wr),
    v = w(n, `label`, 3, ``),
    ee = w(n, `vimBindings`, 3, !0),
    C = w(n, `disablePointerSelection`, 3, !1),
    te = w(n, `disableInitialScroll`, 3, !1),
    ne = w(n, `columns`, 3, null),
    ie = j(n, Ln),
    E = Pt.create({
      id: z(() => c()),
      ref: z(() => l(), e => l(e)),
      filter: z(() => _()),
      shouldFilter: z(() => h()),
      loop: z(() => m()),
      value: z(() => u(), e => {
        u() !== e && (u(e), d()(e))
      }),
      vimBindings: z(() => ee()),
      disablePointerSelection: z(() => C()),
      disableInitialScroll: z(() => te()),
      onStateChange: z(() => p()),
      columns: z(() => ne())
    }),
    D = e => E.updateSelectedToIndex(e),
    O = e => E.updateSelectedByGroup(e),
    k = e => E.updateSelectedByItem(e),
    ae = () => E.getValidItems(),
    oe = g(() => H(ie, E.props));
  var P = {
      updateSelectedToIndex: D,
      updateSelectedByGroup: O,
      updateSelectedByItem: k,
      getValidItems: ae
    },
    ce = b(),
    le = y(ce),
    ue = e => {
      var t = Rn(),
        i = y(t);
      o(i);
      var s = a(i, 2);
      r(s, () => n.child, () => ({
        props: T(oe)
      })), x(e, t)
    },
    R = e => {
      var t = zn();
      L(t, () => ({
        ...T(oe)
      }));
      var i = I(t);
      o(i);
      var s = a(i, 2);
      r(s, () => n.children ?? M), A(t), x(e, t)
    };
  return s(le, e => {
    n.child ? e(ue) : e(R, -1)
  }), x(t, ce), f(P)
}
var Vn = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `children`, `child`, `forceMount`]),
  Hn = C(`<div><!></div>`);

function Un(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `id`, 19, () => U(i)),
    o = w(n, `ref`, 15, null),
    c = w(n, `forceMount`, 3, !1),
    l = j(n, Vn),
    u = sn.create({
      id: z(() => a()),
      ref: z(() => o(), e => o(e)),
      forceMount: z(() => c())
    }),
    d = g(() => H(u.props, l));
  var p = b(),
    m = y(p),
    h = e => {
      var t = b(),
        i = y(t),
        a = e => {
          var t = b(),
            i = y(t);
          r(i, () => n.child, () => ({
            props: T(d)
          })), x(e, t)
        },
        o = e => {
          var t = Hn();
          L(t, () => ({
            ...T(d)
          }));
          var i = I(t);
          r(i, () => n.children ?? M), A(t), x(e, t)
        };
      s(i, e => {
        n.child ? e(a) : e(o, -1)
      }), x(e, t)
    };
  s(m, e => {
    u.shouldRender && e(h)
  }), x(t, p), f()
}
var Wn = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `value`, `forceMount`, `children`, `child`]),
  Gn = C(`<div><!></div>`);

function Kn(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `id`, 19, () => U(i)),
    o = w(n, `ref`, 15, null),
    c = w(n, `value`, 3, ``),
    l = w(n, `forceMount`, 3, !1),
    u = j(n, Wn),
    d = fn.create({
      id: z(() => a()),
      ref: z(() => o(), e => o(e)),
      forceMount: z(() => l()),
      value: z(() => c())
    }),
    p = g(() => H(u, d.props));
  var m = b(),
    h = y(m),
    _ = e => {
      var t = b(),
        i = y(t);
      r(i, () => n.child, () => ({
        props: T(p)
      })), x(e, t)
    },
    v = e => {
      var t = Gn();
      L(t, () => ({
        ...T(p)
      }));
      var i = I(t);
      r(i, () => n.children ?? M), A(t), x(e, t)
    };
  s(h, e => {
    n.child ? e(_) : e(v, -1)
  }), x(t, m), f()
}
var qn = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `children`, `child`]),
  Jn = C(`<div><!></div>`);

function Yn(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `id`, 19, () => U(i)),
    o = w(n, `ref`, 15, null),
    c = j(n, qn),
    l = mn.create({
      id: z(() => a()),
      ref: z(() => o(), e => o(e))
    }),
    u = g(() => H(c, l.props));
  var d = b(),
    p = y(d),
    m = e => {
      var t = b(),
        i = y(t);
      r(i, () => n.child, () => ({
        props: T(u)
      })), x(e, t)
    },
    h = e => {
      var t = Jn();
      L(t, () => ({
        ...T(u)
      }));
      var i = I(t);
      r(i, () => n.children ?? M), A(t), x(e, t)
    };
  s(p, e => {
    n.child ? e(m) : e(h, -1)
  }), x(t, d), f()
}
var Xn = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `children`, `child`]),
  Zn = C(`<div><!></div>`),
  Qn = C(`<div style="display: contents;"><!></div>`);

function $n(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `id`, 19, () => U(i)),
    o = w(n, `ref`, 15, null),
    c = j(n, Xn),
    l = gn.create({
      id: z(() => a()),
      ref: z(() => o(), e => o(e))
    }),
    u = g(() => H(c, l.props));
  var d = Qn(),
    p = I(d),
    m = e => {
      var t = b(),
        i = y(t);
      r(i, () => n.child, () => ({
        props: T(u)
      })), x(e, t)
    },
    h = e => {
      var t = Zn();
      L(t, () => ({
        ...T(u)
      }));
      var i = I(t);
      r(i, () => n.children ?? M), A(t), x(e, t)
    };
  s(p, e => {
    n.child ? e(m) : e(h, -1)
  }), A(d), x(t, d), f()
}
var er = new Set([`$$slots`, `$$events`, `$$legacy`, `value`, `autofocus`, `id`, `ref`, `child`]),
  tr = C(`<input/>`);

function nr(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `value`, 15, ``),
    o = w(n, `autofocus`, 3, !1),
    c = w(n, `id`, 19, () => U(i)),
    l = w(n, `ref`, 15, null),
    u = j(n, er),
    d = yn.create({
      id: z(() => c()),
      ref: z(() => l(), e => l(e)),
      value: z(() => a(), e => {
        a(e)
      }),
      autofocus: z(() => o() ?? !1)
    }),
    p = g(() => H(u, d.props));
  var m = b(),
    h = y(m),
    _ = e => {
      var t = b(),
        i = y(t);
      r(i, () => n.child, () => ({
        props: T(p)
      })), x(e, t)
    },
    v = e => {
      var t = tr();
      L(t, () => ({
        ...T(p)
      }), void 0, void 0, void 0, void 0, !0), E(t, a), x(e, t)
    };
  s(h, e => {
    n.child ? e(_) : e(v, -1)
  }), x(t, m), f()
}
var rr = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `value`, `disabled`, `children`, `child`, `onSelect`, `forceMount`, `keywords`]),
  ir = C(`<div><!></div>`),
  ar = C(`<div style="display: contents;" data-item-wrapper=""><!></div>`);

function or(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `id`, 19, () => U(i)),
    o = w(n, `ref`, 15, null),
    c = w(n, `value`, 3, ``),
    l = w(n, `disabled`, 3, !1),
    u = w(n, `onSelect`, 3, ve),
    d = w(n, `forceMount`, 3, !1),
    p = w(n, `keywords`, 19, () => []),
    m = j(n, rr),
    h = Dn.create({
      id: z(() => a()),
      ref: z(() => o(), e => o(e)),
      value: z(() => c()),
      disabled: z(() => l()),
      onSelect: z(() => u()),
      forceMount: z(() => d()),
      keywords: z(() => p())
    }),
    _ = g(() => H(m, h.props));
  var v = b(),
    C = y(v);
  ee(C, () => h.root.key, e => {
    var t = ar(),
      i = I(t),
      a = e => {
        var t = b(),
          i = y(t),
          a = e => {
            var t = b(),
              i = y(t);
            r(i, () => n.child, () => ({
              props: T(_)
            })), x(e, t)
          },
          o = e => {
            var t = ir();
            L(t, () => ({
              ...T(_)
            }));
            var i = I(t);
            r(i, () => n.children ?? M), A(t), x(e, t)
          };
        s(i, e => {
          n.child ? e(a) : e(o, -1)
        }), x(e, t)
      };
    s(i, e => {
      h.shouldRender && e(a)
    }), A(t), F(() => le(t, `data-value`, h.trueValue)), x(e, t)
  }), x(t, v), f()
}
var sr = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `child`, `children`, `aria-label`]),
  cr = C(`<div><!></div>`);

function lr(t, n) {
  let i = e();
  S(n, !0);
  let a = w(n, `id`, 19, () => U(i)),
    o = w(n, `ref`, 15, null),
    c = j(n, sr),
    l = jn.create({
      id: z(() => a()),
      ref: z(() => o(), e => o(e)),
      ariaLabel: z(() => n[`aria-label`] ?? `Suggestions...`)
    }),
    u = g(() => H(c, l.props));
  var d = b(),
    p = y(d);
  ee(p, () => l.root._commandState.search === ``, e => {
    var t = b(),
      i = y(t),
      a = e => {
        var t = b(),
          i = y(t);
        r(i, () => n.child, () => ({
          props: T(u)
        })), x(e, t)
      },
      o = e => {
        var t = cr();
        L(t, () => ({
          ...T(u)
        }));
        var i = I(t);
        r(i, () => n.children ?? M), A(t), x(e, t)
      };
    s(i, e => {
      n.child ? e(a) : e(o, -1)
    }), x(e, t)
  }), x(t, d), f()
}
C(`<div><!></div>`);
var ur = 1,
  dr = .9,
  fr = .8,
  pr = .17,
  mr = .1,
  hr = .999,
  gr = .9999,
  _r = .99,
  vr = /[\\/_+.#"@[({&]/,
  yr = /[\\/_+.#"@[({&]/g,
  br = /[\s-]/,
  xr = /[\s-]/g;

function Sr(e, t, n, r, i, a, o) {
  if (a === t.length) return i === e.length ? ur : _r;
  let s = `${i},${a}`;
  if (o[s] !== void 0) return o[s];
  let c = r.charAt(a),
    l = n.indexOf(c, i),
    u = 0,
    d, f, p, m;
  for (; l >= 0;) d = Sr(e, t, n, r, l + 1, a + 1, o), d > u && (l === i ? d *= ur : vr.test(e.charAt(l - 1)) ? (d *= fr, p = e.slice(i, l - 1).match(yr), p && i > 0 && (d *= hr ** p.length)) : br.test(e.charAt(l - 1)) ? (d *= dr, m = e.slice(i, l - 1).match(xr), m && i > 0 && (d *= hr ** m.length)) : (d *= pr, i > 0 && (d *= hr ** (l - i))), e.charAt(l) !== t.charAt(a) && (d *= gr)), (d < mr && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (f = Sr(e, t, n, r, l + 1, a + 2, o), f * mr > d && (d = f * mr)), d > u && (u = d), l = n.indexOf(c, l + 1);
  return o[s] = u, u
}

function Cr(e) {
  return e.toLowerCase().replace(xr, ` `)
}

function wr(e, t, n) {
  return e = n && n.length > 0 ? `${`${e} ${n==null?void 0:n.join(` `)}`}` : e, Sr(e, t, Cr(e), Cr(t), 0, 0, {})
}
var Tr = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Er = _(`<svg><path d="M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm230-240L360-470l358-358q11-11 27.5-11.5T774-828l54 54q12 12 12 28t-12 28L470-360Z"></path></svg>`);

function Dr(e, t) {
  let n = j(t, Tr);
  var r = Er();
  L(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...n
  })), x(e, r)
}
var Or = new Set([`$$slots`, `$$events`, `$$legacy`]),
  kr = _(`<svg><rect x="0" y="0" width="4" height="4" rx="1" opacity="0.12"></rect><rect x="6" y="0" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="12" y="0" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="18" y="0" width="4" height="4" rx="1" opacity="0.12"></rect><rect x="0" y="6" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="6" y="6" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="12" y="6" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="18" y="6" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="0" y="12" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="6" y="12" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="12" y="12" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="18" y="12" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="0" y="18" width="4" height="4" rx="1" opacity="0.12"></rect><rect x="6" y="18" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="12" y="18" width="4" height="4" rx="1" opacity="0.45"></rect><rect x="18" y="18" width="4" height="4" rx="1" opacity="0.12"></rect></svg>`);

function Ar(e, t) {
  let n = j(t, Or);
  var r = kr();
  L(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 22 22`,
    fill: `currentColor`,
    ...n
  })), x(e, r)
}
var jr = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Mr = _(`<svg><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"></path></svg>`);

function Nr(e, t) {
  let n = j(t, jr);
  var r = Mr();
  L(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...n
  })), x(e, r)
}
var Pr = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Fr = _(`<svg><path d="M791-55 686-160H160v-112q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L55-791l57-57 736 736-57 57ZM240-240h366L486-360h-6q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm496-138q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480-720q-25 0-45.5 14T405-669l-59-59q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Zm38 266H240h366ZM457-617Z"></path></svg>`);

function Ir(e, t) {
  let n = j(t, Pr);
  var r = Fr();
  L(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    height: `24px`,
    viewBox: `0 -960 960 960`,
    width: `24px`,
    fill: `currentColor`,
    ...n
  })), x(e, r)
}

function Lr(...e) {
  return he(n(e))
}
var Rr = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `value`, `class`]);

function zr(e, t) {
  S(t, !0);
  let n = w(t, `ref`, 15, null),
    r = w(t, `value`, 15, ``),
    i = j(t, Rr);
  var a = b(),
    o = y(a);
  {
    let e = g(() => Lr(`bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md`, t.class));
    R(o, () => Bn, (t, a) => {
      a(t, P({
        "data-slot": `command`,
        get class() {
          return T(e)
        }
      }, () => i, {
        get value() {
          return r()
        },
        set value(e) {
          r(e)
        },
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        }
      }))
    })
  }
  x(e, a), f()
}
var Br = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);

function Vr(e, t) {
  S(t, !0);
  let n = w(t, `ref`, 15, null),
    r = j(t, Br);
  var i = b(),
    a = y(i);
  {
    let e = g(() => Lr(`py-6 text-center text-sm`, t.class));
    R(a, () => Un, (t, i) => {
      i(t, P({
        "data-slot": `command-empty`,
        get class() {
          return T(e)
        }
      }, () => r, {
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        }
      }))
    })
  }
  x(e, i), f()
}
var Hr = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`, `children`, `heading`, `value`]),
  Ur = C(`<!> <!>`, 1);

function Wr(e, t) {
  S(t, !0);
  let n = w(t, `ref`, 15, null),
    r = j(t, Hr);
  var i = b(),
    o = y(i);
  {
    let e = g(() => Lr(`text-foreground overflow-hidden p-1`, t.class)),
      i = g(() => t.value ?? t.heading ?? `----${ft()}`);
    R(o, () => Kn, (o, c) => {
      c(o, P({
        "data-slot": `command-group`,
        get class() {
          return T(e)
        },
        get value() {
          return T(i)
        }
      }, () => r, {
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        },
        children: (e, n) => {
          var r = Ur(),
            i = y(r),
            o = e => {
              var n = b(),
                r = y(n);
              R(r, () => Yn, (e, n) => {
                n(e, {
                  class: `text-muted-foreground px-2 py-1.5 text-xs font-medium`,
                  children: (e, n) => {
                    se();
                    var r = re();
                    F(() => N(r, t.heading)), x(e, r)
                  },
                  $$slots: {
                    default: !0
                  }
                })
              }), x(e, n)
            };
          s(i, e => {
            t.heading && e(o)
          });
          var c = a(i, 2);
          R(c, () => $n, (e, n) => {
            n(e, {
              get children() {
                return t.children
              }
            })
          }), x(e, r)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  x(e, i), f()
}
var Gr = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);

function Kr(e, t) {
  S(t, !0);
  let n = w(t, `ref`, 15, null),
    r = j(t, Gr);
  var i = b(),
    a = y(i);
  {
    let e = g(() => Lr(`aria-selected:bg-base-300 aria-selected:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, t.class));
    R(a, () => or, (t, i) => {
      i(t, P({
        "data-slot": `command-item`,
        get class() {
          return T(e)
        }
      }, () => r, {
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        }
      }))
    })
  }
  x(e, i), f()
}
var qr = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`, `value`]),
  Jr = C(`<div class="border-base-content/10 flex h-9 items-center gap-2 border-b px-3" data-slot="command-input-wrapper"><!> <!></div>`);

function Yr(e, t) {
  S(t, !0);
  let n = w(t, `ref`, 15, null),
    r = w(t, `value`, 15, ``),
    i = j(t, qr);
  var o = Jr(),
    s = I(o);
  Ce(s, {
    class: `size-5 opacity-50`
  });
  var c = a(s, 2);
  {
    let e = g(() => Lr(`placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50`, t.class));
    R(c, () => nr, (t, a) => {
      a(t, P({
        "data-slot": `command-input`,
        get class() {
          return T(e)
        }
      }, () => i, {
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        },
        get value() {
          return r()
        },
        set value(e) {
          r(e)
        }
      }))
    })
  }
  A(o), x(e, o), f()
}
var Xr = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`]);

function Zr(e, t) {
  S(t, !0);
  let n = w(t, `ref`, 15, null),
    r = j(t, Xr);
  var i = b(),
    a = y(i);
  {
    let e = g(() => Lr(`max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto`, t.class));
    R(a, () => lr, (t, i) => {
      i(t, P({
        "data-slot": `command-list`,
        get class() {
          return T(e)
        }
      }, () => r, {
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        }
      }))
    })
  }
  x(e, i), f()
}
var Qr = new Set([`$$slots`, `$$events`, `$$legacy`]),
  $r = _(`<svg><path d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z"></path></svg>`);

function ei(e, t) {
  let n = j(t, Qr);
  var r = $r();
  L(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...n
  })), x(e, r)
}
var ti = C(`<span> </span> <!>`, 1),
  ni = C(`<span class="font-flag ml-0.5"> </span> `, 1),
  ri = C(`<span class="flex gap-1.5"><span class="font-flag"> </span> </span>`),
  ii = C(`<!> <!>`, 1),
  ai = C(`<button class="btn btn-xs btn-circle btn-ghost"><!></button>`),
  oi = C(`<div class="flex items-center"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-sm text-base-content/80 m-1 max-w-74"><!></div> <div><!></div></div> <!></div>`);

function si(e, t) {
  S(t, !0);
  let n = w(t, `countryId`, 15, 0),
    r = w(t, `dropdownDirection`, 3, `right`),
    i = O(null),
    o = O(null),
    c = O(``);

  function u() {
    ne().then(() => {
      var e;
      (e = document.activeElement) == null || e.blur(), k(c, ``)
    })
  }
  var d = oi(),
    p = I(d),
    m = I(p),
    _ = I(m),
    v = e => {
      var t = ti(),
        n = y(t),
        r = I(n, !0);
      A(n), ei(a(n, 2), {
        class: `size-3.5`
      }), F(e => N(r, e), [() => me.country()]), x(e, t)
    },
    ee = e => {
      let t = g(() => fe(n()));
      var r = ni(),
        i = y(r),
        o = I(i, !0);
      A(i);
      var s = a(i);
      F(() => {
        N(o, T(t).flag), N(s, ` ${T(t).name??``}`)
      }), x(e, r)
    };
  s(_, e => {
    n() === 0 ? e(v) : e(ee, -1)
  }), A(m);
  var C = a(m, 2);
  let te;
  var E = I(C);
  R(E, () => zr, (e, t) => {
    t(e, {
      children: (e, t) => {
        var r = ii(),
          o = y(r);
        {
          let e = g(() => me.country());
          R(o, () => Yr, (t, n) => {
            n(t, {
              get placeholder() {
                return T(e)
              },
              get ref() {
                return T(i)
              },
              set ref(e) {
                k(i, e)
              },
              get value() {
                return T(c)
              },
              set value(e) {
                k(c, e, !0)
              }
            })
          })
        }
        var s = a(o, 2);
        R(s, () => Zr, (e, t) => {
          t(e, {
            children: (e, t) => {
              var r = ii(),
                i = y(r);
              R(i, () => Vr, (e, t) => {
                t(e, {
                  children: (e, t) => {
                    se();
                    var n = re();
                    F(e => N(n, e), [() => me.no_country_found()]), x(e, n)
                  },
                  $$slots: {
                    default: !0
                  }
                })
              });
              var o = a(i, 2);
              R(o, () => Wr, (e, t) => {
                t(e, {
                  children: (e, t) => {
                    var r = b(),
                      i = y(r);
                    l(i, 17, () => pe.countries, e => e.id, (e, t) => {
                      var r = b(),
                        i = y(r);
                      R(i, () => Kr, (e, r) => {
                        r(e, {
                          get value() {
                            return T(t).name
                          },
                          onSelect: () => {
                            n(T(t).id), u()
                          },
                          children: (e, n) => {
                            var r = ri(),
                              i = I(r),
                              o = I(i, !0);
                            A(i);
                            var s = a(i);
                            A(r), F(() => {
                              N(o, T(t).flag), N(s, ` ${T(t).name??``}`)
                            }), x(e, r)
                          },
                          $$slots: {
                            default: !0
                          }
                        })
                      }), x(e, r)
                    }), x(e, r)
                  },
                  $$slots: {
                    default: !0
                  }
                })
              }), x(e, r)
            },
            $$slots: {
              default: !0
            }
          })
        }), x(e, r)
      },
      $$slots: {
        default: !0
      }
    })
  }), A(C), A(p);
  var D = a(p, 2),
    j = e => {
      var t = ai(),
        r = I(t);
      Se(r, {
        class: `size-3.5`
      }), A(t), ae(`click`, t, () => {
        n(0)
      }), x(e, t)
    };
  s(D, e => {
    n() != 0 && e(j)
  }), A(d), ie(d, e => k(o, e), () => T(o)), F(() => te = h(C, 1, `dropdown-content menu bg-base-100 rounded-box border-base-content/10 z-1 w-52 rounded-lg border py-1 shadow-sm`, null, te, {
    "right-1": r() === `left`
  })), oe(`focus`, m, () => {
    T(i).focus()
  }), x(e, d), f()
}
ce([`click`]);
var ci = new Set([`$$slots`, `$$events`, `$$legacy`]),
  li = _(`<svg><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z"></path></svg>`);

function ui(e, t) {
  let n = j(t, ci);
  var r = li();
  L(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...n
  })), x(e, r)
}
export {
  Be as _, Ar as a, Ee as b, ut as c, Re as d, ze as f, He as g, Fe as h, Nr as i, ct as l, Le as m, si as n, Dr as o, Ve as p, Ir as r, ft as s, ui as t, $e as u, Me as v, Te as x, W as y
};