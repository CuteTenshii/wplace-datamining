var bo = Object.defineProperty;
var Me = e => {
  throw TypeError(e)
};
var po = (e, o, r) => o in e ? bo(e, o, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[o] = r;
var Pe = (e, o, r) => po(e, typeof o != "symbol" ? o + "" : o, r),
  me = (e, o, r) => o.has(e) || Me("Cannot " + r);
var be = (e, o, r) => (me(e, o, "read from private field"), r ? r.call(e) : o.get(e)),
  K = (e, o, r) => o.has(e) ? Me("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, r),
  Ee = (e, o, r, t) => (me(e, o, "write to private field"), t ? t.call(e, r) : o.set(e, r), r),
  pe = (e, o, r) => (me(e, o, "access private method"), r);
import "./BlzsQxXy.js";
import {
  p as Xe,
  d as fe,
  r as ge,
  t as oe,
  a as re,
  b as Je,
  c as ne,
  s as uo
} from "./BpkiS5AT.js";
import {
  i as Ge
} from "./C7ij7NCq.js";
import {
  a as he,
  e as _e,
  c as Le,
  s as Ne
} from "./YwLJDD6g.js";
import {
  h as fo
} from "./KKA4uyDn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
    };
    var o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "88a11985-fa1d-4eac-8c50-d2cbb8539b5b", e._sentryDebugIdIdentifier = "sentry-dbid-88a11985-fa1d-4eac-8c50-d2cbb8539b5b")
  } catch {}
})();
const Oe = 9,
  go = 95,
  ho = 45,
  je = 5;

function wo(e) {
  return e.split("").reduce((o, r) => (o ^ r.charCodeAt(0)) * -je, je) >>> 2
}

function Qe(e = "", o = go, r = ho, t = wo) {
  const i = t(e),
    d = i % Oe * (360 / Oe);
  return [...Array(e ? 25 : 0)].reduce((a, u, l) => i & 1 << l % 15 ? a + `<rect x="${l>14?7-~~(l/5):~~(l/5)}" y="${l%5}" width="1" height="1"/>` : a, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${d} ${o}% ${r}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var qe, I, se, D, Y, we, He;
(qe = globalThis.customElements) != null && qe.get("minidenticon-svg") || (He = globalThis.customElements) == null || He.define("minidenticon-svg", (I = class extends HTMLElement {
  constructor() {
    super(...arguments);
    K(this, Y);
    K(this, D, !1)
  }
  connectedCallback() {
    pe(this, Y, we).call(this), Ee(this, D, !0)
  }
  attributeChangedCallback() {
    be(this, D) && pe(this, Y, we).call(this)
  }
}, se = new WeakMap, D = new WeakMap, Y = new WeakSet, we = function() {
  var i;
  const r = I.observedAttributes.map(d => this.getAttribute(d) || void 0),
    t = r.join(",");
  this.innerHTML = (i = be(I, se))[t] ?? (i[t] = Qe(...r))
}, Pe(I, "observedAttributes", ["username", "saturation", "lightness"]), K(I, se, {}), I));
var xo = ne("<div><!></div>");

function ko(e, o) {
  Xe(o, !0);
  var r = xo(),
    t = fe(r);
  fo(t, () => Qe(o.userId.toString(), 95, 45)), ge(r), oe(() => he(r, 1, `bg-base-200 minidenticon ${o.class??""??""}`)), re(e, r), Je()
}
const yo = (e, o) => {
    const r = new Array(e.length + o.length);
    for (let t = 0; t < e.length; t++) r[t] = e[t];
    for (let t = 0; t < o.length; t++) r[e.length + t] = o[t];
    return r
  },
  vo = (e, o) => ({
    classGroupId: e,
    validator: o
  }),
  Ze = (e = new Map, o = null, r) => ({
    nextPart: e,
    validators: o,
    classGroupId: r
  }),
  te = "-",
  Ve = [],
  zo = "arbitrary..",
  Co = e => {
    const o = So(e),
      {
        conflictingClassGroups: r,
        conflictingClassGroupModifiers: t
      } = e;
    return {
      getClassGroupId: a => {
        if (a.startsWith("[") && a.endsWith("]")) return Ao(a);
        const u = a.split(te),
          l = u[0] === "" && u.length > 1 ? 1 : 0;
        return Ke(u, l, o)
      },
      getConflictingClassGroupIds: (a, u) => {
        if (u) {
          const l = t[a],
            b = r[a];
          return l ? b ? yo(b, l) : l : b || Ve
        }
        return r[a] || Ve
      }
    }
  },
  Ke = (e, o, r) => {
    if (e.length - o === 0) return r.classGroupId;
    const i = e[o],
      d = r.nextPart.get(i);
    if (d) {
      const b = Ke(e, o + 1, d);
      if (b) return b
    }
    const a = r.validators;
    if (a === null) return;
    const u = o === 0 ? e.join(te) : e.slice(o).join(te),
      l = a.length;
    for (let b = 0; b < l; b++) {
      const f = a[b];
      if (f.validator(u)) return f.classGroupId
    }
  },
  Ao = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const o = e.slice(1, -1),
      r = o.indexOf(":"),
      t = o.slice(0, r);
    return t ? zo + t : void 0
  })(),
  So = e => {
    const {
      theme: o,
      classGroups: r
    } = e;
    return Io(r, o)
  },
  Io = (e, o) => {
    const r = Ze();
    for (const t in e) {
      const i = e[t];
      ke(i, r, t, o)
    }
    return r
  },
  ke = (e, o, r, t) => {
    const i = e.length;
    for (let d = 0; d < i; d++) {
      const a = e[d];
      Ro(a, o, r, t)
    }
  },
  Ro = (e, o, r, t) => {
    if (typeof e == "string") {
      To(e, o, r);
      return
    }
    if (typeof e == "function") {
      Mo(e, o, r, t);
      return
    }
    Po(e, o, r, t)
  },
  To = (e, o, r) => {
    const t = e === "" ? o : $e(o, e);
    t.classGroupId = r
  },
  Mo = (e, o, r, t) => {
    if (Eo(e)) {
      ke(e(t), o, r, t);
      return
    }
    o.validators === null && (o.validators = []), o.validators.push(vo(r, e))
  },
  Po = (e, o, r, t) => {
    const i = Object.entries(e),
      d = i.length;
    for (let a = 0; a < d; a++) {
      const [u, l] = i[a];
      ke(l, $e(o, u), r, t)
    }
  },
  $e = (e, o) => {
    let r = e;
    const t = o.split(te),
      i = t.length;
    for (let d = 0; d < i; d++) {
      const a = t[d];
      let u = r.nextPart.get(a);
      u || (u = Ze(), r.nextPart.set(a, u)), r = u
    }
    return r
  },
  Eo = e => "isThemeGetter" in e && e.isThemeGetter === !0,
  Go = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let o = 0,
      r = Object.create(null),
      t = Object.create(null);
    const i = (d, a) => {
      r[d] = a, o++, o > e && (o = 0, t = r, r = Object.create(null))
    };
    return {
      get(d) {
        let a = r[d];
        if (a !== void 0) return a;
        if ((a = t[d]) !== void 0) return i(d, a), a
      },
      set(d, a) {
        d in r ? r[d] = a : i(d, a)
      }
    }
  },
  xe = "!",
  Fe = ":",
  _o = [],
  Ue = (e, o, r, t, i) => ({
    modifiers: e,
    hasImportantModifier: o,
    baseClassName: r,
    maybePostfixModifierPosition: t,
    isExternal: i
  }),
  Lo = e => {
    const {
      prefix: o,
      experimentalParseClassName: r
    } = e;
    let t = i => {
      const d = [];
      let a = 0,
        u = 0,
        l = 0,
        b;
      const f = i.length;
      for (let z = 0; z < f; z++) {
        const k = i[z];
        if (a === 0 && u === 0) {
          if (k === Fe) {
            d.push(i.slice(l, z)), l = z + 1;
            continue
          }
          if (k === "/") {
            b = z;
            continue
          }
        }
        k === "[" ? a++ : k === "]" ? a-- : k === "(" ? u++ : k === ")" && u--
      }
      const v = d.length === 0 ? i : i.slice(l);
      let A = v,
        P = !1;
      v.endsWith(xe) ? (A = v.slice(0, -1), P = !0) : v.startsWith(xe) && (A = v.slice(1), P = !0);
      const E = b && b > l ? b - l : void 0;
      return Ue(d, P, A, E)
    };
    if (o) {
      const i = o + Fe,
        d = t;
      t = a => a.startsWith(i) ? d(a.slice(i.length)) : Ue(_o, !1, a, void 0, !0)
    }
    if (r) {
      const i = t;
      t = d => r({
        className: d,
        parseClassName: i
      })
    }
    return t
  },
  No = e => {
    const o = new Map;
    return e.orderSensitiveModifiers.forEach((r, t) => {
      o.set(r, 1e6 + t)
    }), r => {
      const t = [];
      let i = [];
      for (let d = 0; d < r.length; d++) {
        const a = r[d],
          u = a[0] === "[",
          l = o.has(a);
        u || l ? (i.length > 0 && (i.sort(), t.push(...i), i = []), t.push(a)) : i.push(a)
      }
      return i.length > 0 && (i.sort(), t.push(...i)), t
    }
  },
  Oo = e => ({
    cache: Go(e.cacheSize),
    parseClassName: Lo(e),
    sortModifiers: No(e),
    ...Co(e)
  }),
  jo = /\s+/,
  Vo = (e, o) => {
    const {
      parseClassName: r,
      getClassGroupId: t,
      getConflictingClassGroupIds: i,
      sortModifiers: d
    } = o, a = [], u = e.trim().split(jo);
    let l = "";
    for (let b = u.length - 1; b >= 0; b -= 1) {
      const f = u[b],
        {
          isExternal: v,
          modifiers: A,
          hasImportantModifier: P,
          baseClassName: E,
          maybePostfixModifierPosition: z
        } = r(f);
      if (v) {
        l = f + (l.length > 0 ? " " + l : l);
        continue
      }
      let k = !!z,
        G = t(k ? E.substring(0, z) : E);
      if (!G) {
        if (!k) {
          l = f + (l.length > 0 ? " " + l : l);
          continue
        }
        if (G = t(E), !G) {
          l = f + (l.length > 0 ? " " + l : l);
          continue
        }
        k = !1
      }
      const q = A.length === 0 ? "" : A.length === 1 ? A[0] : d(A).join(":"),
        U = P ? q + xe : q,
        j = U + G;
      if (a.indexOf(j) > -1) continue;
      a.push(j);
      const V = i(G, k);
      for (let _ = 0; _ < V.length; ++_) {
        const B = V[_];
        a.push(U + B)
      }
      l = f + (l.length > 0 ? " " + l : l)
    }
    return l
  },
  Fo = (...e) => {
    let o = 0,
      r, t, i = "";
    for (; o < e.length;)(r = e[o++]) && (t = eo(r)) && (i && (i += " "), i += t);
    return i
  },
  eo = e => {
    if (typeof e == "string") return e;
    let o, r = "";
    for (let t = 0; t < e.length; t++) e[t] && (o = eo(e[t])) && (r && (r += " "), r += o);
    return r
  },
  Uo = (e, ...o) => {
    let r, t, i, d;
    const a = l => {
        const b = o.reduce((f, v) => v(f), e());
        return r = Oo(b), t = r.cache.get, i = r.cache.set, d = u, u(l)
      },
      u = l => {
        const b = t(l);
        if (b) return b;
        const f = Vo(l, r);
        return i(l, f), f
      };
    return d = a, (...l) => d(Fo(...l))
  },
  Bo = [],
  g = e => {
    const o = r => r[e] || Bo;
    return o.isThemeGetter = !0, o
  },
  oo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ro = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Wo = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Do = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Yo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  qo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Ho = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Xo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  R = e => Wo.test(e),
  p = e => !!e && !Number.isNaN(Number(e)),
  T = e => !!e && Number.isInteger(Number(e)),
  ue = e => e.endsWith("%") && p(e.slice(0, -1)),
  S = e => Do.test(e),
  to = () => !0,
  Jo = e => Yo.test(e) && !qo.test(e),
  ye = () => !1,
  Qo = e => Ho.test(e),
  Zo = e => Xo.test(e),
  Ko = e => !s(e) && !n(e),
  $o = e => M(e, ao, ye),
  s = e => oo.test(e),
  N = e => M(e, io, Jo),
  Be = e => M(e, ir, p),
  er = e => M(e, co, to),
  or = e => M(e, lo, ye),
  We = e => M(e, so, ye),
  rr = e => M(e, no, Zo),
  $ = e => M(e, mo, Qo),
  n = e => ro.test(e),
  W = e => O(e, io),
  tr = e => O(e, lo),
  De = e => O(e, so),
  sr = e => O(e, ao),
  nr = e => O(e, no),
  ee = e => O(e, mo, !0),
  ar = e => O(e, co, !0),
  M = (e, o, r) => {
    const t = oo.exec(e);
    return t ? t[1] ? o(t[1]) : r(t[2]) : !1
  },
  O = (e, o, r = !1) => {
    const t = ro.exec(e);
    return t ? t[1] ? o(t[1]) : r : !1
  },
  so = e => e === "position" || e === "percentage",
  no = e => e === "image" || e === "url",
  ao = e => e === "length" || e === "size" || e === "bg-size",
  io = e => e === "length",
  ir = e => e === "number",
  lo = e => e === "family-name",
  co = e => e === "number" || e === "weight",
  mo = e => e === "shadow",
  lr = () => {
    const e = g("color"),
      o = g("font"),
      r = g("text"),
      t = g("font-weight"),
      i = g("tracking"),
      d = g("leading"),
      a = g("breakpoint"),
      u = g("container"),
      l = g("spacing"),
      b = g("radius"),
      f = g("shadow"),
      v = g("inset-shadow"),
      A = g("text-shadow"),
      P = g("drop-shadow"),
      E = g("blur"),
      z = g("perspective"),
      k = g("aspect"),
      G = g("ease"),
      q = g("animate"),
      U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      j = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      V = () => [...j(), n, s],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", "contain", "none"],
      c = () => [n, s, l],
      y = () => [R, "full", "auto", ...c()],
      ve = () => [T, "none", "subgrid", n, s],
      ze = () => ["auto", {
        span: ["full", T, n, s]
      }, T, n, s],
      H = () => [T, "auto", n, s],
      Ce = () => ["auto", "min", "max", "fr", n, s],
      ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      F = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      C = () => ["auto", ...c()],
      L = () => [R, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...c()],
      ie = () => [R, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...c()],
      le = () => [R, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...c()],
      m = () => [e, n, s],
      Ae = () => [...j(), De, We, {
        position: [n, s]
      }],
      Se = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      Ie = () => ["auto", "cover", "contain", sr, $o, {
        size: [n, s]
      }],
      ce = () => [ue, W, N],
      w = () => ["", "none", "full", b, n, s],
      x = () => ["", p, W, N],
      X = () => ["solid", "dashed", "dotted", "double"],
      Re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      h = () => [p, ue, De, We],
      Te = () => ["", "none", E, n, s],
      J = () => ["none", p, n, s],
      Q = () => ["none", p, n, s],
      de = () => [p, n, s],
      Z = () => [R, "full", ...c()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [S],
        breakpoint: [S],
        color: [to],
        container: [S],
        "drop-shadow": [S],
        ease: ["in", "out", "in-out"],
        font: [Ko],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [S],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [S],
        shadow: [S],
        spacing: ["px", p],
        text: [S],
        "text-shadow": [S],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", R, s, n, k]
        }],
        container: ["container"],
        columns: [{
          columns: [p, s, n, u]
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
          object: V()
        }],
        overflow: [{
          overflow: _()
        }],
        "overflow-x": [{
          "overflow-x": _()
        }],
        "overflow-y": [{
          "overflow-y": _()
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
          inset: y()
        }],
        "inset-x": [{
          "inset-x": y()
        }],
        "inset-y": [{
          "inset-y": y()
        }],
        start: [{
          "inset-s": y(),
          start: y()
        }],
        end: [{
          "inset-e": y(),
          end: y()
        }],
        "inset-bs": [{
          "inset-bs": y()
        }],
        "inset-be": [{
          "inset-be": y()
        }],
        top: [{
          top: y()
        }],
        right: [{
          right: y()
        }],
        bottom: [{
          bottom: y()
        }],
        left: [{
          left: y()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [T, "auto", n, s]
        }],
        basis: [{
          basis: [R, "full", "auto", u, ...c()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [p, R, "auto", "initial", "none", s]
        }],
        grow: [{
          grow: ["", p, n, s]
        }],
        shrink: [{
          shrink: ["", p, n, s]
        }],
        order: [{
          order: [T, "first", "last", "none", n, s]
        }],
        "grid-cols": [{
          "grid-cols": ve()
        }],
        "col-start-end": [{
          col: ze()
        }],
        "col-start": [{
          "col-start": H()
        }],
        "col-end": [{
          "col-end": H()
        }],
        "grid-rows": [{
          "grid-rows": ve()
        }],
        "row-start-end": [{
          row: ze()
        }],
        "row-start": [{
          "row-start": H()
        }],
        "row-end": [{
          "row-end": H()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": Ce()
        }],
        "auto-rows": [{
          "auto-rows": Ce()
        }],
        gap: [{
          gap: c()
        }],
        "gap-x": [{
          "gap-x": c()
        }],
        "gap-y": [{
          "gap-y": c()
        }],
        "justify-content": [{
          justify: [...ae(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...F(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...F()]
        }],
        "align-content": [{
          content: ["normal", ...ae()]
        }],
        "align-items": [{
          items: [...F(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...F(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": ae()
        }],
        "place-items": [{
          "place-items": [...F(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...F()]
        }],
        p: [{
          p: c()
        }],
        px: [{
          px: c()
        }],
        py: [{
          py: c()
        }],
        ps: [{
          ps: c()
        }],
        pe: [{
          pe: c()
        }],
        pbs: [{
          pbs: c()
        }],
        pbe: [{
          pbe: c()
        }],
        pt: [{
          pt: c()
        }],
        pr: [{
          pr: c()
        }],
        pb: [{
          pb: c()
        }],
        pl: [{
          pl: c()
        }],
        m: [{
          m: C()
        }],
        mx: [{
          mx: C()
        }],
        my: [{
          my: C()
        }],
        ms: [{
          ms: C()
        }],
        me: [{
          me: C()
        }],
        mbs: [{
          mbs: C()
        }],
        mbe: [{
          mbe: C()
        }],
        mt: [{
          mt: C()
        }],
        mr: [{
          mr: C()
        }],
        mb: [{
          mb: C()
        }],
        ml: [{
          ml: C()
        }],
        "space-x": [{
          "space-x": c()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": c()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: L()
        }],
        "inline-size": [{
          inline: ["auto", ...ie()]
        }],
        "min-inline-size": [{
          "min-inline": ["auto", ...ie()]
        }],
        "max-inline-size": [{
          "max-inline": ["none", ...ie()]
        }],
        "block-size": [{
          block: ["auto", ...le()]
        }],
        "min-block-size": [{
          "min-block": ["auto", ...le()]
        }],
        "max-block-size": [{
          "max-block": ["none", ...le()]
        }],
        w: [{
          w: [u, "screen", ...L()]
        }],
        "min-w": [{
          "min-w": [u, "screen", "none", ...L()]
        }],
        "max-w": [{
          "max-w": [u, "screen", "none", "prose", {
            screen: [a]
          }, ...L()]
        }],
        h: [{
          h: ["screen", "lh", ...L()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...L()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...L()]
        }],
        "font-size": [{
          text: ["base", r, W, N]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [t, ar, er]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ue, s]
        }],
        "font-family": [{
          font: [tr, or, o]
        }],
        "font-features": [{
          "font-features": [s]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [i, n, s]
        }],
        "line-clamp": [{
          "line-clamp": [p, "none", n, Be]
        }],
        leading: [{
          leading: [d, ...c()]
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
          placeholder: m()
        }],
        "text-color": [{
          text: m()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...X(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [p, "from-font", "auto", n, N]
        }],
        "text-decoration-color": [{
          decoration: m()
        }],
        "underline-offset": [{
          "underline-offset": [p, "auto", n, s]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: c()
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
          bg: Ae()
        }],
        "bg-repeat": [{
          bg: Se()
        }],
        "bg-size": [{
          bg: Ie()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, T, n, s],
            radial: ["", n, s],
            conic: [T, n, s]
          }, nr, rr]
        }],
        "bg-color": [{
          bg: m()
        }],
        "gradient-from-pos": [{
          from: ce()
        }],
        "gradient-via-pos": [{
          via: ce()
        }],
        "gradient-to-pos": [{
          to: ce()
        }],
        "gradient-from": [{
          from: m()
        }],
        "gradient-via": [{
          via: m()
        }],
        "gradient-to": [{
          to: m()
        }],
        rounded: [{
          rounded: w()
        }],
        "rounded-s": [{
          "rounded-s": w()
        }],
        "rounded-e": [{
          "rounded-e": w()
        }],
        "rounded-t": [{
          "rounded-t": w()
        }],
        "rounded-r": [{
          "rounded-r": w()
        }],
        "rounded-b": [{
          "rounded-b": w()
        }],
        "rounded-l": [{
          "rounded-l": w()
        }],
        "rounded-ss": [{
          "rounded-ss": w()
        }],
        "rounded-se": [{
          "rounded-se": w()
        }],
        "rounded-ee": [{
          "rounded-ee": w()
        }],
        "rounded-es": [{
          "rounded-es": w()
        }],
        "rounded-tl": [{
          "rounded-tl": w()
        }],
        "rounded-tr": [{
          "rounded-tr": w()
        }],
        "rounded-br": [{
          "rounded-br": w()
        }],
        "rounded-bl": [{
          "rounded-bl": w()
        }],
        "border-w": [{
          border: x()
        }],
        "border-w-x": [{
          "border-x": x()
        }],
        "border-w-y": [{
          "border-y": x()
        }],
        "border-w-s": [{
          "border-s": x()
        }],
        "border-w-e": [{
          "border-e": x()
        }],
        "border-w-bs": [{
          "border-bs": x()
        }],
        "border-w-be": [{
          "border-be": x()
        }],
        "border-w-t": [{
          "border-t": x()
        }],
        "border-w-r": [{
          "border-r": x()
        }],
        "border-w-b": [{
          "border-b": x()
        }],
        "border-w-l": [{
          "border-l": x()
        }],
        "divide-x": [{
          "divide-x": x()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": x()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...X(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...X(), "hidden", "none"]
        }],
        "border-color": [{
          border: m()
        }],
        "border-color-x": [{
          "border-x": m()
        }],
        "border-color-y": [{
          "border-y": m()
        }],
        "border-color-s": [{
          "border-s": m()
        }],
        "border-color-e": [{
          "border-e": m()
        }],
        "border-color-bs": [{
          "border-bs": m()
        }],
        "border-color-be": [{
          "border-be": m()
        }],
        "border-color-t": [{
          "border-t": m()
        }],
        "border-color-r": [{
          "border-r": m()
        }],
        "border-color-b": [{
          "border-b": m()
        }],
        "border-color-l": [{
          "border-l": m()
        }],
        "divide-color": [{
          divide: m()
        }],
        "outline-style": [{
          outline: [...X(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [p, n, s]
        }],
        "outline-w": [{
          outline: ["", p, W, N]
        }],
        "outline-color": [{
          outline: m()
        }],
        shadow: [{
          shadow: ["", "none", f, ee, $]
        }],
        "shadow-color": [{
          shadow: m()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", v, ee, $]
        }],
        "inset-shadow-color": [{
          "inset-shadow": m()
        }],
        "ring-w": [{
          ring: x()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: m()
        }],
        "ring-offset-w": [{
          "ring-offset": [p, N]
        }],
        "ring-offset-color": [{
          "ring-offset": m()
        }],
        "inset-ring-w": [{
          "inset-ring": x()
        }],
        "inset-ring-color": [{
          "inset-ring": m()
        }],
        "text-shadow": [{
          "text-shadow": ["none", A, ee, $]
        }],
        "text-shadow-color": [{
          "text-shadow": m()
        }],
        opacity: [{
          opacity: [p, n, s]
        }],
        "mix-blend": [{
          "mix-blend": [...Re(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": Re()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [p]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": h()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": h()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": m()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": m()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": h()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": h()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": m()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": m()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": h()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": h()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": m()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": m()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": h()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": h()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": m()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": m()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": h()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": h()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": m()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": m()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": h()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": h()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": m()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": m()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": h()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": h()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": m()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": m()
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
          "mask-radial-from": m()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": m()
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
          "mask-radial-at": j()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [p]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": h()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": h()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": m()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": m()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: Ae()
        }],
        "mask-repeat": [{
          mask: Se()
        }],
        "mask-size": [{
          mask: Ie()
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
          blur: Te()
        }],
        brightness: [{
          brightness: [p, n, s]
        }],
        contrast: [{
          contrast: [p, n, s]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", P, ee, $]
        }],
        "drop-shadow-color": [{
          "drop-shadow": m()
        }],
        grayscale: [{
          grayscale: ["", p, n, s]
        }],
        "hue-rotate": [{
          "hue-rotate": [p, n, s]
        }],
        invert: [{
          invert: ["", p, n, s]
        }],
        saturate: [{
          saturate: [p, n, s]
        }],
        sepia: [{
          sepia: ["", p, n, s]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", n, s]
        }],
        "backdrop-blur": [{
          "backdrop-blur": Te()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [p, n, s]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [p, n, s]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", p, n, s]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [p, n, s]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", p, n, s]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [p, n, s]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [p, n, s]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", p, n, s]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": c()
        }],
        "border-spacing-x": [{
          "border-spacing-x": c()
        }],
        "border-spacing-y": [{
          "border-spacing-y": c()
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
          duration: [p, "initial", n, s]
        }],
        ease: [{
          ease: ["linear", "initial", G, n, s]
        }],
        delay: [{
          delay: [p, n, s]
        }],
        animate: [{
          animate: ["none", q, n, s]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [z, n, s]
        }],
        "perspective-origin": [{
          "perspective-origin": V()
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
          skew: de()
        }],
        "skew-x": [{
          "skew-x": de()
        }],
        "skew-y": [{
          "skew-y": de()
        }],
        transform: [{
          transform: [n, s, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: V()
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
          accent: m()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: m()
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
          "scroll-m": c()
        }],
        "scroll-mx": [{
          "scroll-mx": c()
        }],
        "scroll-my": [{
          "scroll-my": c()
        }],
        "scroll-ms": [{
          "scroll-ms": c()
        }],
        "scroll-me": [{
          "scroll-me": c()
        }],
        "scroll-mbs": [{
          "scroll-mbs": c()
        }],
        "scroll-mbe": [{
          "scroll-mbe": c()
        }],
        "scroll-mt": [{
          "scroll-mt": c()
        }],
        "scroll-mr": [{
          "scroll-mr": c()
        }],
        "scroll-mb": [{
          "scroll-mb": c()
        }],
        "scroll-ml": [{
          "scroll-ml": c()
        }],
        "scroll-p": [{
          "scroll-p": c()
        }],
        "scroll-px": [{
          "scroll-px": c()
        }],
        "scroll-py": [{
          "scroll-py": c()
        }],
        "scroll-ps": [{
          "scroll-ps": c()
        }],
        "scroll-pe": [{
          "scroll-pe": c()
        }],
        "scroll-pbs": [{
          "scroll-pbs": c()
        }],
        "scroll-pbe": [{
          "scroll-pbe": c()
        }],
        "scroll-pt": [{
          "scroll-pt": c()
        }],
        "scroll-pr": [{
          "scroll-pr": c()
        }],
        "scroll-pb": [{
          "scroll-pb": c()
        }],
        "scroll-pl": [{
          "scroll-pl": c()
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
          fill: ["none", ...m()]
        }],
        "stroke-w": [{
          stroke: [p, W, N, Be]
        }],
        stroke: [{
          stroke: ["none", ...m()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
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
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
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
  Ye = Uo(lr);
var cr = ne('<img class="pixelated bg-base-200 size-full" alt="User profile"/>'),
  dr = ne('<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>'),
  mr = ne("<div><div><!></div> <!></div>");

function wr(e, o) {
  Xe(o, !0);
  var r = mr(),
    t = fe(r);
  _e(t, "width: 67.76785714285714%");
  var i = fe(t);
  {
    var d = b => {
        ko(b, {
          get userId() {
            return o.userId
          }
        })
      },
      a = b => {
        var f = cr();
        oe(() => Ne(f, "src", o.pictureUrl)), re(b, f)
      };
    Ge(i, b => {
      o.pictureUrl ? b(a, !1) : b(d)
    })
  }
  ge(t);
  var u = uo(t, 2);
  {
    var l = b => {
      var f = dr();
      _e(f, "scale: 114.99999999999999%;"), oe(() => Ne(f, "src", o.frameUrl)), re(b, f)
    };
    Ge(u, b => {
      o.frameUrl && b(l)
    })
  }
  ge(r), oe((b, f) => {
    he(r, 1, b), he(t, 1, f)
  }, [() => Le(Ye("relative inline-grid size-10 place-items-center", o.class)), () => Le(Ye("avatar border-base-300 aspect-square overflow-hidden rounded-full border", o.avatarClass))]), re(e, r), Je()
}
export {
  wr as P, ko as a, Ye as t
};