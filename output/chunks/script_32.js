var ro = Object.defineProperty;
var Re = e => {
  throw TypeError(e)
};
var so = (e, o, t) => o in e ? ro(e, o, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : e[o] = t;
var Te = (e, o, t) => so(e, typeof o != "symbol" ? o + "" : o, t),
  ce = (e, o, t) => o.has(e) || Re("Cannot " + t);
var de = (e, o, t) => (ce(e, o, "read from private field"), t ? t.call(e) : o.get(e)),
  K = (e, o, t) => o.has(e) ? Re("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t),
  Me = (e, o, t, r) => (ce(e, o, "write to private field"), r ? r.call(e, t) : o.set(e, t), t),
  me = (e, o, t) => (ce(e, o, "access private method"), t);
import "./Dzr0zEgr.js";
import {
  p as Be,
  f as ne,
  d as fe,
  r as be,
  t as oe,
  b as te,
  c as De,
  s as no
} from "./DcuED2r1.js";
import {
  i as Pe
} from "./C11X_6e6.js";
import {
  a as ge,
  c as ao,
  s as Ee
} from "./DqnGd6Ri.js";
import {
  h as io
} from "./BaKWY4hh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2f70fc8f-3f13-4050-a039-4a4608c0e177", e._sentryDebugIdIdentifier = "sentry-dbid-2f70fc8f-3f13-4050-a039-4a4608c0e177")
  })()
} catch {}
const Ge = 9,
  lo = 95,
  co = 45,
  _e = 5;

function mo(e) {
  return e.split("").reduce((o, t) => (o ^ t.charCodeAt(0)) * -_e, _e) >>> 2
}

function We(e = "", o = lo, t = co, r = mo) {
  const a = r(e),
    c = a % Ge * (360 / Ge);
  return [...Array(e ? 25 : 0)].reduce((i, p, l) => a & 1 << l % 15 ? i + `<rect x="${l>14?7-~~(l/5):~~(l/5)}" y="${l%5}" width="1" height="1"/>` : i, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${c} ${o}% ${t}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var Fe, I, se, W, Y, he, Ue;
(Fe = globalThis.customElements) != null && Fe.get("minidenticon-svg") || (Ue = globalThis.customElements) == null || Ue.define("minidenticon-svg", (I = class extends HTMLElement {
  constructor() {
    super(...arguments);
    K(this, Y);
    K(this, W, !1)
  }
  connectedCallback() {
    me(this, Y, he).call(this), Me(this, W, !0)
  }
  attributeChangedCallback() {
    de(this, W) && me(this, Y, he).call(this)
  }
}, se = new WeakMap, W = new WeakMap, Y = new WeakSet, he = function() {
  var a;
  const t = I.observedAttributes.map(c => this.getAttribute(c) || void 0),
    r = t.join(",");
  this.innerHTML = (a = de(I, se))[r] ?? (a[r] = We(...t))
}, Te(I, "observedAttributes", ["username", "saturation", "lightness"]), K(I, se, {}), I));
var uo = ne("<div><!></div>");

function po(e, o) {
  Be(o, !0);
  var t = uo(),
    r = fe(t);
  io(r, () => We(o.userId.toString(), 95, 45)), be(t), oe(() => ge(t, 1, `bg-base-200 minidenticon ${o.class??""??""}`)), te(e, t), De()
}
const fo = (e, o) => {
    const t = new Array(e.length + o.length);
    for (let r = 0; r < e.length; r++) t[r] = e[r];
    for (let r = 0; r < o.length; r++) t[e.length + r] = o[r];
    return t
  },
  bo = (e, o) => ({
    classGroupId: e,
    validator: o
  }),
  Ye = (e = new Map, o = null, t) => ({
    nextPart: e,
    validators: o,
    classGroupId: t
  }),
  re = "-",
  Le = [],
  go = "arbitrary..",
  ho = e => {
    const o = xo(e),
      {
        conflictingClassGroups: t,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: i => {
        if (i.startsWith("[") && i.endsWith("]")) return wo(i);
        const p = i.split(re),
          l = p[0] === "" && p.length > 1 ? 1 : 0;
        return He(p, l, o)
      },
      getConflictingClassGroupIds: (i, p) => {
        if (p) {
          const l = r[i],
            b = t[i];
          return l ? b ? fo(b, l) : l : b || Le
        }
        return t[i] || Le
      }
    }
  },
  He = (e, o, t) => {
    if (e.length - o === 0) return t.classGroupId;
    const a = e[o],
      c = t.nextPart.get(a);
    if (c) {
      const b = He(e, o + 1, c);
      if (b) return b
    }
    const i = t.validators;
    if (i === null) return;
    const p = o === 0 ? e.join(re) : e.slice(o).join(re),
      l = i.length;
    for (let b = 0; b < l; b++) {
      const f = i[b];
      if (f.validator(p)) return f.classGroupId
    }
  },
  wo = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const o = e.slice(1, -1),
      t = o.indexOf(":"),
      r = o.slice(0, t);
    return r ? go + r : void 0
  })(),
  xo = e => {
    const {
      theme: o,
      classGroups: t
    } = e;
    return ko(t, o)
  },
  ko = (e, o) => {
    const t = Ye();
    for (const r in e) {
      const a = e[r];
      xe(a, t, r, o)
    }
    return t
  },
  xe = (e, o, t, r) => {
    const a = e.length;
    for (let c = 0; c < a; c++) {
      const i = e[c];
      yo(i, o, t, r)
    }
  },
  yo = (e, o, t, r) => {
    if (typeof e == "string") {
      vo(e, o, t);
      return
    }
    if (typeof e == "function") {
      zo(e, o, t, r);
      return
    }
    Co(e, o, t, r)
  },
  vo = (e, o, t) => {
    const r = e === "" ? o : qe(o, e);
    r.classGroupId = t
  },
  zo = (e, o, t, r) => {
    if (Ao(e)) {
      xe(e(r), o, t, r);
      return
    }
    o.validators === null && (o.validators = []), o.validators.push(bo(t, e))
  },
  Co = (e, o, t, r) => {
    const a = Object.entries(e),
      c = a.length;
    for (let i = 0; i < c; i++) {
      const [p, l] = a[i];
      xe(l, qe(o, p), t, r)
    }
  },
  qe = (e, o) => {
    let t = e;
    const r = o.split(re),
      a = r.length;
    for (let c = 0; c < a; c++) {
      const i = r[c];
      let p = t.nextPart.get(i);
      p || (p = Ye(), t.nextPart.set(i, p)), t = p
    }
    return t
  },
  Ao = e => "isThemeGetter" in e && e.isThemeGetter === !0,
  So = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let o = 0,
      t = Object.create(null),
      r = Object.create(null);
    const a = (c, i) => {
      t[c] = i, o++, o > e && (o = 0, r = t, t = Object.create(null))
    };
    return {
      get(c) {
        let i = t[c];
        if (i !== void 0) return i;
        if ((i = r[c]) !== void 0) return a(c, i), i
      },
      set(c, i) {
        c in t ? t[c] = i : a(c, i)
      }
    }
  },
  we = "!",
  Oe = ":",
  Io = [],
  Ne = (e, o, t, r, a) => ({
    modifiers: e,
    hasImportantModifier: o,
    baseClassName: t,
    maybePostfixModifierPosition: r,
    isExternal: a
  }),
  Ro = e => {
    const {
      prefix: o,
      experimentalParseClassName: t
    } = e;
    let r = a => {
      const c = [];
      let i = 0,
        p = 0,
        l = 0,
        b;
      const f = a.length;
      for (let v = 0; v < f; v++) {
        const k = a[v];
        if (i === 0 && p === 0) {
          if (k === Oe) {
            c.push(a.slice(l, v)), l = v + 1;
            continue
          }
          if (k === "/") {
            b = v;
            continue
          }
        }
        k === "[" ? i++ : k === "]" ? i-- : k === "(" ? p++ : k === ")" && p--
      }
      const w = c.length === 0 ? a : a.slice(l);
      let z = w,
        T = !1;
      w.endsWith(we) ? (z = w.slice(0, -1), T = !0) : w.startsWith(we) && (z = w.slice(1), T = !0);
      const M = b && b > l ? b - l : void 0;
      return Ne(c, T, z, M)
    };
    if (o) {
      const a = o + Oe,
        c = r;
      r = i => i.startsWith(a) ? c(i.slice(a.length)) : Ne(Io, !1, i, void 0, !0)
    }
    if (t) {
      const a = r;
      r = c => t({
        className: c,
        parseClassName: a
      })
    }
    return r
  },
  To = e => {
    const o = new Map;
    return e.orderSensitiveModifiers.forEach((t, r) => {
      o.set(t, 1e6 + r)
    }), t => {
      const r = [];
      let a = [];
      for (let c = 0; c < t.length; c++) {
        const i = t[c],
          p = i[0] === "[",
          l = o.has(i);
        p || l ? (a.length > 0 && (a.sort(), r.push(...a), a = []), r.push(i)) : a.push(i)
      }
      return a.length > 0 && (a.sort(), r.push(...a)), r
    }
  },
  Mo = e => ({
    cache: So(e.cacheSize),
    parseClassName: Ro(e),
    sortModifiers: To(e),
    ...ho(e)
  }),
  Po = /\s+/,
  Eo = (e, o) => {
    const {
      parseClassName: t,
      getClassGroupId: r,
      getConflictingClassGroupIds: a,
      sortModifiers: c
    } = o, i = [], p = e.trim().split(Po);
    let l = "";
    for (let b = p.length - 1; b >= 0; b -= 1) {
      const f = p[b],
        {
          isExternal: w,
          modifiers: z,
          hasImportantModifier: T,
          baseClassName: M,
          maybePostfixModifierPosition: v
        } = t(f);
      if (w) {
        l = f + (l.length > 0 ? " " + l : l);
        continue
      }
      let k = !!v,
        P = r(k ? M.substring(0, v) : M);
      if (!P) {
        if (!k) {
          l = f + (l.length > 0 ? " " + l : l);
          continue
        }
        if (P = r(M), !P) {
          l = f + (l.length > 0 ? " " + l : l);
          continue
        }
        k = !1
      }
      const H = z.length === 0 ? "" : z.length === 1 ? z[0] : c(z).join(":"),
        U = T ? H + we : H,
        L = U + P;
      if (i.indexOf(L) > -1) continue;
      i.push(L);
      const O = a(P, k);
      for (let E = 0; E < O.length; ++E) {
        const B = O[E];
        i.push(U + B)
      }
      l = f + (l.length > 0 ? " " + l : l)
    }
    return l
  },
  Go = (...e) => {
    let o = 0,
      t, r, a = "";
    for (; o < e.length;)(t = e[o++]) && (r = Xe(t)) && (a && (a += " "), a += r);
    return a
  },
  Xe = e => {
    if (typeof e == "string") return e;
    let o, t = "";
    for (let r = 0; r < e.length; r++) e[r] && (o = Xe(e[r])) && (t && (t += " "), t += o);
    return t
  },
  _o = (e, ...o) => {
    let t, r, a, c;
    const i = l => {
        const b = o.reduce((f, w) => w(f), e());
        return t = Mo(b), r = t.cache.get, a = t.cache.set, c = p, p(l)
      },
      p = l => {
        const b = r(l);
        if (b) return b;
        const f = Eo(l, t);
        return a(l, f), f
      };
    return c = i, (...l) => c(Go(...l))
  },
  Lo = [],
  g = e => {
    const o = t => t[e] || Lo;
    return o.isThemeGetter = !0, o
  },
  Je = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Qe = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Oo = /^\d+\/\d+$/,
  No = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  jo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Vo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Fo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Uo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  j = e => Oo.test(e),
  u = e => !!e && !Number.isNaN(Number(e)),
  R = e => !!e && Number.isInteger(Number(e)),
  ue = e => e.endsWith("%") && u(e.slice(0, -1)),
  S = e => No.test(e),
  Bo = () => !0,
  Do = e => jo.test(e) && !Vo.test(e),
  Ze = () => !1,
  Wo = e => Fo.test(e),
  Yo = e => Uo.test(e),
  Ho = e => !s(e) && !n(e),
  qo = e => V(e, eo, Ze),
  s = e => Je.test(e),
  _ = e => V(e, oo, Do),
  pe = e => V(e, Ko, u),
  je = e => V(e, Ke, Ze),
  Xo = e => V(e, $e, Yo),
  $ = e => V(e, to, Wo),
  n = e => Qe.test(e),
  D = e => F(e, oo),
  Jo = e => F(e, $o),
  Ve = e => F(e, Ke),
  Qo = e => F(e, eo),
  Zo = e => F(e, $e),
  ee = e => F(e, to, !0),
  V = (e, o, t) => {
    const r = Je.exec(e);
    return r ? r[1] ? o(r[1]) : t(r[2]) : !1
  },
  F = (e, o, t = !1) => {
    const r = Qe.exec(e);
    return r ? r[1] ? o(r[1]) : t : !1
  },
  Ke = e => e === "position" || e === "percentage",
  $e = e => e === "image" || e === "url",
  eo = e => e === "length" || e === "size" || e === "bg-size",
  oo = e => e === "length",
  Ko = e => e === "number",
  $o = e => e === "family-name",
  to = e => e === "shadow",
  et = () => {
    const e = g("color"),
      o = g("font"),
      t = g("text"),
      r = g("font-weight"),
      a = g("tracking"),
      c = g("leading"),
      i = g("breakpoint"),
      p = g("container"),
      l = g("spacing"),
      b = g("radius"),
      f = g("shadow"),
      w = g("inset-shadow"),
      z = g("text-shadow"),
      T = g("drop-shadow"),
      M = g("blur"),
      v = g("perspective"),
      k = g("aspect"),
      P = g("ease"),
      H = g("animate"),
      U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      L = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      O = () => [...L(), n, s],
      E = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", "contain", "none"],
      m = () => [n, s, l],
      C = () => [j, "full", "auto", ...m()],
      ke = () => [R, "none", "subgrid", n, s],
      ye = () => ["auto", {
        span: ["full", R, n, s]
      }, R, n, s],
      q = () => [R, "auto", n, s],
      ve = () => ["auto", "min", "max", "fr", n, s],
      ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      A = () => ["auto", ...m()],
      G = () => [j, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()],
      d = () => [e, n, s],
      ze = () => [...L(), Ve, je, {
        position: [n, s]
      }],
      Ce = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      Ae = () => ["auto", "cover", "contain", Qo, qo, {
        size: [n, s]
      }],
      ie = () => [ue, D, _],
      x = () => ["", "none", "full", b, n, s],
      y = () => ["", u, D, _],
      X = () => ["solid", "dashed", "dotted", "double"],
      Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      h = () => [u, ue, Ve, je],
      Ie = () => ["", "none", M, n, s],
      J = () => ["none", u, n, s],
      Q = () => ["none", u, n, s],
      le = () => [u, n, s],
      Z = () => [j, "full", ...m()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [S],
        breakpoint: [S],
        color: [Bo],
        container: [S],
        "drop-shadow": [S],
        ease: ["in", "out", "in-out"],
        font: [Ho],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [S],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [S],
        shadow: [S],
        spacing: ["px", u],
        text: [S],
        "text-shadow": [S],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", j, s, n, k]
        }],
        container: ["container"],
        columns: [{
          columns: [u, s, n, p]
        }],
        "break-after": [{
          "break-after": U()
        }],
        "break-before": [{
          "break-before": U()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: O()
        }],
        overflow: [{
          overflow: E()
        }],
        "overflow-x": [{
          "overflow-x": E()
        }],
        "overflow-y": [{
          "overflow-y": E()
        }],
        overscroll: [{
          overscroll: B()
        }],
        "overscroll-x": [{
          "overscroll-x": B()
        }],
        "overscroll-y": [{
          "overscroll-y": B()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: C()
        }],
        "inset-x": [{
          "inset-x": C()
        }],
        "inset-y": [{
          "inset-y": C()
        }],
        start: [{
          start: C()
        }],
        end: [{
          end: C()
        }],
        top: [{
          top: C()
        }],
        right: [{
          right: C()
        }],
        bottom: [{
          bottom: C()
        }],
        left: [{
          left: C()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [R, "auto", n, s]
        }],
        basis: [{
          basis: [j, "full", "auto", p, ...m()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [u, j, "auto", "initial", "none", s]
        }],
        grow: [{
          grow: ["", u, n, s]
        }],
        shrink: [{
          shrink: ["", u, n, s]
        }],
        order: [{
          order: [R, "first", "last", "none", n, s]
        }],
        "grid-cols": [{
          "grid-cols": ke()
        }],
        "col-start-end": [{
          col: ye()
        }],
        "col-start": [{
          "col-start": q()
        }],
        "col-end": [{
          "col-end": q()
        }],
        "grid-rows": [{
          "grid-rows": ke()
        }],
        "row-start-end": [{
          row: ye()
        }],
        "row-start": [{
          "row-start": q()
        }],
        "row-end": [{
          "row-end": q()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ve()
        }],
        "auto-rows": [{
          "auto-rows": ve()
        }],
        gap: [{
          gap: m()
        }],
        "gap-x": [{
          "gap-x": m()
        }],
        "gap-y": [{
          "gap-y": m()
        }],
        "justify-content": [{
          justify: [...ae(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...N(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...N()]
        }],
        "align-content": [{
          content: ["normal", ...ae()]
        }],
        "align-items": [{
          items: [...N(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...N(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": ae()
        }],
        "place-items": [{
          "place-items": [...N(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...N()]
        }],
        p: [{
          p: m()
        }],
        px: [{
          px: m()
        }],
        py: [{
          py: m()
        }],
        ps: [{
          ps: m()
        }],
        pe: [{
          pe: m()
        }],
        pt: [{
          pt: m()
        }],
        pr: [{
          pr: m()
        }],
        pb: [{
          pb: m()
        }],
        pl: [{
          pl: m()
        }],
        m: [{
          m: A()
        }],
        mx: [{
          mx: A()
        }],
        my: [{
          my: A()
        }],
        ms: [{
          ms: A()
        }],
        me: [{
          me: A()
        }],
        mt: [{
          mt: A()
        }],
        mr: [{
          mr: A()
        }],
        mb: [{
          mb: A()
        }],
        ml: [{
          ml: A()
        }],
        "space-x": [{
          "space-x": m()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": m()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: G()
        }],
        w: [{
          w: [p, "screen", ...G()]
        }],
        "min-w": [{
          "min-w": [p, "screen", "none", ...G()]
        }],
        "max-w": [{
          "max-w": [p, "screen", "none", "prose", {
            screen: [i]
          }, ...G()]
        }],
        h: [{
          h: ["screen", "lh", ...G()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...G()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...G()]
        }],
        "font-size": [{
          text: ["base", t, D, _]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [r, n, pe]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ue, s]
        }],
        "font-family": [{
          font: [Jo, s, o]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [a, n, s]
        }],
        "line-clamp": [{
          "line-clamp": [u, "none", n, pe]
        }],
        leading: [{
          leading: [c, ...m()]
        }],
        "list-image": [{
          "list-image": ["none", n, s]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", n, s]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: d()
        }],
        "text-color": [{
          text: d()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...X(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [u, "from-font", "auto", n, _]
        }],
        "text-decoration-color": [{
          decoration: d()
        }],
        "underline-offset": [{
          "underline-offset": [u, "auto", n, s]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: m()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", n, s]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", n, s]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: ze()
        }],
        "bg-repeat": [{
          bg: Ce()
        }],
        "bg-size": [{
          bg: Ae()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, R, n, s],
            radial: ["", n, s],
            conic: [R, n, s]
          }, Zo, Xo]
        }],
        "bg-color": [{
          bg: d()
        }],
        "gradient-from-pos": [{
          from: ie()
        }],
        "gradient-via-pos": [{
          via: ie()
        }],
        "gradient-to-pos": [{
          to: ie()
        }],
        "gradient-from": [{
          from: d()
        }],
        "gradient-via": [{
          via: d()
        }],
        "gradient-to": [{
          to: d()
        }],
        rounded: [{
          rounded: x()
        }],
        "rounded-s": [{
          "rounded-s": x()
        }],
        "rounded-e": [{
          "rounded-e": x()
        }],
        "rounded-t": [{
          "rounded-t": x()
        }],
        "rounded-r": [{
          "rounded-r": x()
        }],
        "rounded-b": [{
          "rounded-b": x()
        }],
        "rounded-l": [{
          "rounded-l": x()
        }],
        "rounded-ss": [{
          "rounded-ss": x()
        }],
        "rounded-se": [{
          "rounded-se": x()
        }],
        "rounded-ee": [{
          "rounded-ee": x()
        }],
        "rounded-es": [{
          "rounded-es": x()
        }],
        "rounded-tl": [{
          "rounded-tl": x()
        }],
        "rounded-tr": [{
          "rounded-tr": x()
        }],
        "rounded-br": [{
          "rounded-br": x()
        }],
        "rounded-bl": [{
          "rounded-bl": x()
        }],
        "border-w": [{
          border: y()
        }],
        "border-w-x": [{
          "border-x": y()
        }],
        "border-w-y": [{
          "border-y": y()
        }],
        "border-w-s": [{
          "border-s": y()
        }],
        "border-w-e": [{
          "border-e": y()
        }],
        "border-w-t": [{
          "border-t": y()
        }],
        "border-w-r": [{
          "border-r": y()
        }],
        "border-w-b": [{
          "border-b": y()
        }],
        "border-w-l": [{
          "border-l": y()
        }],
        "divide-x": [{
          "divide-x": y()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": y()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...X(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...X(), "hidden", "none"]
        }],
        "border-color": [{
          border: d()
        }],
        "border-color-x": [{
          "border-x": d()
        }],
        "border-color-y": [{
          "border-y": d()
        }],
        "border-color-s": [{
          "border-s": d()
        }],
        "border-color-e": [{
          "border-e": d()
        }],
        "border-color-t": [{
          "border-t": d()
        }],
        "border-color-r": [{
          "border-r": d()
        }],
        "border-color-b": [{
          "border-b": d()
        }],
        "border-color-l": [{
          "border-l": d()
        }],
        "divide-color": [{
          divide: d()
        }],
        "outline-style": [{
          outline: [...X(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [u, n, s]
        }],
        "outline-w": [{
          outline: ["", u, D, _]
        }],
        "outline-color": [{
          outline: d()
        }],
        shadow: [{
          shadow: ["", "none", f, ee, $]
        }],
        "shadow-color": [{
          shadow: d()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", w, ee, $]
        }],
        "inset-shadow-color": [{
          "inset-shadow": d()
        }],
        "ring-w": [{
          ring: y()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: d()
        }],
        "ring-offset-w": [{
          "ring-offset": [u, _]
        }],
        "ring-offset-color": [{
          "ring-offset": d()
        }],
        "inset-ring-w": [{
          "inset-ring": y()
        }],
        "inset-ring-color": [{
          "inset-ring": d()
        }],
        "text-shadow": [{
          "text-shadow": ["none", z, ee, $]
        }],
        "text-shadow-color": [{
          "text-shadow": d()
        }],
        opacity: [{
          opacity: [u, n, s]
        }],
        "mix-blend": [{
          "mix-blend": [...Se(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": Se()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [u]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": h()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": h()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": d()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": d()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": h()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": h()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": d()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": d()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": h()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": h()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": d()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": d()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": h()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": h()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": d()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": d()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": h()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": h()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": d()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": d()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": h()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": h()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": d()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": d()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": h()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": h()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": d()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": d()
        }],
        "mask-image-radial": [{
          "mask-radial": [n, s]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": h()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": h()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": d()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": d()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": L()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [u]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": h()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": h()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": d()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": d()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: ze()
        }],
        "mask-repeat": [{
          mask: Ce()
        }],
        "mask-size": [{
          mask: Ae()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", n, s]
        }],
        filter: [{
          filter: ["", "none", n, s]
        }],
        blur: [{
          blur: Ie()
        }],
        brightness: [{
          brightness: [u, n, s]
        }],
        contrast: [{
          contrast: [u, n, s]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", T, ee, $]
        }],
        "drop-shadow-color": [{
          "drop-shadow": d()
        }],
        grayscale: [{
          grayscale: ["", u, n, s]
        }],
        "hue-rotate": [{
          "hue-rotate": [u, n, s]
        }],
        invert: [{
          invert: ["", u, n, s]
        }],
        saturate: [{
          saturate: [u, n, s]
        }],
        sepia: [{
          sepia: ["", u, n, s]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", n, s]
        }],
        "backdrop-blur": [{
          "backdrop-blur": Ie()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [u, n, s]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [u, n, s]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", u, n, s]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [u, n, s]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", u, n, s]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [u, n, s]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [u, n, s]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", u, n, s]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": m()
        }],
        "border-spacing-x": [{
          "border-spacing-x": m()
        }],
        "border-spacing-y": [{
          "border-spacing-y": m()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", n, s]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [u, "initial", n, s]
        }],
        ease: [{
          ease: ["linear", "initial", P, n, s]
        }],
        delay: [{
          delay: [u, n, s]
        }],
        animate: [{
          animate: ["none", H, n, s]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [v, n, s]
        }],
        "perspective-origin": [{
          "perspective-origin": O()
        }],
        rotate: [{
          rotate: J()
        }],
        "rotate-x": [{
          "rotate-x": J()
        }],
        "rotate-y": [{
          "rotate-y": J()
        }],
        "rotate-z": [{
          "rotate-z": J()
        }],
        scale: [{
          scale: Q()
        }],
        "scale-x": [{
          "scale-x": Q()
        }],
        "scale-y": [{
          "scale-y": Q()
        }],
        "scale-z": [{
          "scale-z": Q()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: le()
        }],
        "skew-x": [{
          "skew-x": le()
        }],
        "skew-y": [{
          "skew-y": le()
        }],
        transform: [{
          transform: [n, s, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: O()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: Z()
        }],
        "translate-x": [{
          "translate-x": Z()
        }],
        "translate-y": [{
          "translate-y": Z()
        }],
        "translate-z": [{
          "translate-z": Z()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: d()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: d()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", n, s]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": m()
        }],
        "scroll-mx": [{
          "scroll-mx": m()
        }],
        "scroll-my": [{
          "scroll-my": m()
        }],
        "scroll-ms": [{
          "scroll-ms": m()
        }],
        "scroll-me": [{
          "scroll-me": m()
        }],
        "scroll-mt": [{
          "scroll-mt": m()
        }],
        "scroll-mr": [{
          "scroll-mr": m()
        }],
        "scroll-mb": [{
          "scroll-mb": m()
        }],
        "scroll-ml": [{
          "scroll-ml": m()
        }],
        "scroll-p": [{
          "scroll-p": m()
        }],
        "scroll-px": [{
          "scroll-px": m()
        }],
        "scroll-py": [{
          "scroll-py": m()
        }],
        "scroll-ps": [{
          "scroll-ps": m()
        }],
        "scroll-pe": [{
          "scroll-pe": m()
        }],
        "scroll-pt": [{
          "scroll-pt": m()
        }],
        "scroll-pr": [{
          "scroll-pr": m()
        }],
        "scroll-pb": [{
          "scroll-pb": m()
        }],
        "scroll-pl": [{
          "scroll-pl": m()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", n, s]
        }],
        fill: [{
          fill: ["none", ...d()]
        }],
        "stroke-w": [{
          stroke: [u, D, _, pe]
        }],
        stroke: [{
          stroke: ["none", ...d()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
  },
  ot = _o(et);
var tt = ne('<img class="pixelated bg-base-200" alt="User profile"/>'),
  rt = ne('<img alt="Profile border" class="absolute-center pointer-events-none absolute size-full"/>'),
  st = ne("<div><div><!></div> <!></div>");

function mt(e, o) {
  Be(o, !0);
  var t = st();
  let r;
  var a = fe(t),
    c = fe(a);
  {
    var i = f => {
        po(f, {
          get userId() {
            return o.userId
          }
        })
      },
      p = f => {
        var w = tt();
        oe(() => Ee(w, "src", o.pictureUrl)), te(f, w)
      };
    Pe(c, f => {
      o.pictureUrl ? f(p, !1) : f(i)
    })
  }
  be(a);
  var l = no(a, 2);
  {
    var b = f => {
      var w = rt();
      oe(() => Ee(w, "src", o.borderUrl)), te(f, w)
    };
    Pe(l, f => {
      o.borderUrl && f(b)
    })
  }
  be(t), oe(f => {
    r = ge(t, 1, "avatar relative rounded-full", null, r, {
      "border-3": o.isSuspended,
      "border-red-500": o.isSuspended
    }), ge(a, 1, f)
  }, [() => ao(ot("border-base-300 size-20 rounded-full border-2", o.class))]), te(e, t), De()
}
export {
  mt as P, po as a, ot as t
};