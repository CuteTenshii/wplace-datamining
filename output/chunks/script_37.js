var lo = Object.defineProperty;
var Me = e => {
  throw TypeError(e)
};
var co = (e, o, r) => o in e ? lo(e, o, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[o] = r;
var Pe = (e, o, r) => co(e, typeof o != "symbol" ? o + "" : o, r),
  me = (e, o, r) => o.has(e) || Me("Cannot " + r);
var be = (e, o, r) => (me(e, o, "read from private field"), r ? r.call(e) : o.get(e)),
  K = (e, o, r) => o.has(e) ? Me("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, r),
  Ee = (e, o, r, t) => (me(e, o, "write to private field"), t ? t.call(e, r) : o.set(e, r), r),
  pe = (e, o, r) => (me(e, o, "access private method"), r);
import "./BLuq94kG.js";
import {
  p as Ye,
  d as fe,
  r as ge,
  t as oe,
  a as re,
  b as He,
  c as ne,
  s as mo
} from "./BGZizgo7.js";
import {
  i as Ge
} from "./DclWce1c.js";
import {
  a as he,
  c as bo,
  s as _e,
  d as po
} from "./Bhr_YgHq.js";
import {
  h as uo
} from "./CY0yTXzO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "dbbf5afc-6b1b-4c26-ad18-809656fb81ab", e._sentryDebugIdIdentifier = "sentry-dbid-dbbf5afc-6b1b-4c26-ad18-809656fb81ab")
  } catch {}
})();
const Le = 9,
  fo = 95,
  go = 45,
  Ne = 5;

function ho(e) {
  return e.split("").reduce((o, r) => (o ^ r.charCodeAt(0)) * -Ne, Ne) >>> 2
}

function qe(e = "", o = fo, r = go, t = ho) {
  const a = t(e),
    d = a % Le * (360 / Le);
  return [...Array(e ? 25 : 0)].reduce((i, p, l) => a & 1 << l % 15 ? i + `<rect x="${l>14?7-~~(l/5):~~(l/5)}" y="${l%5}" width="1" height="1"/>` : i, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${d} ${o}% ${r}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var We, I, se, D, Y, we, De;
(We = globalThis.customElements) != null && We.get("minidenticon-svg") || (De = globalThis.customElements) == null || De.define("minidenticon-svg", (I = class extends HTMLElement {
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
  var a;
  const r = I.observedAttributes.map(d => this.getAttribute(d) || void 0),
    t = r.join(",");
  this.innerHTML = (a = be(I, se))[t] ?? (a[t] = qe(...r))
}, Pe(I, "observedAttributes", ["username", "saturation", "lightness"]), K(I, se, {}), I));
var wo = ne("<div><!></div>");

function xo(e, o) {
  Ye(o, !0);
  var r = wo(),
    t = fe(r);
  uo(t, () => qe(o.userId.toString(), 95, 45)), ge(r), oe(() => he(r, 1, `bg-base-200 minidenticon ${o.class??""??""}`)), re(e, r), He()
}
const ko = (e, o) => {
    const r = new Array(e.length + o.length);
    for (let t = 0; t < e.length; t++) r[t] = e[t];
    for (let t = 0; t < o.length; t++) r[e.length + t] = o[t];
    return r
  },
  yo = (e, o) => ({
    classGroupId: e,
    validator: o
  }),
  Xe = (e = new Map, o = null, r) => ({
    nextPart: e,
    validators: o,
    classGroupId: r
  }),
  te = "-",
  Oe = [],
  vo = "arbitrary..",
  zo = e => {
    const o = Ao(e),
      {
        conflictingClassGroups: r,
        conflictingClassGroupModifiers: t
      } = e;
    return {
      getClassGroupId: i => {
        if (i.startsWith("[") && i.endsWith("]")) return Co(i);
        const p = i.split(te),
          l = p[0] === "" && p.length > 1 ? 1 : 0;
        return Je(p, l, o)
      },
      getConflictingClassGroupIds: (i, p) => {
        if (p) {
          const l = t[i],
            f = r[i];
          return l ? f ? ko(f, l) : l : f || Oe
        }
        return r[i] || Oe
      }
    }
  },
  Je = (e, o, r) => {
    if (e.length - o === 0) return r.classGroupId;
    const a = e[o],
      d = r.nextPart.get(a);
    if (d) {
      const f = Je(e, o + 1, d);
      if (f) return f
    }
    const i = r.validators;
    if (i === null) return;
    const p = o === 0 ? e.join(te) : e.slice(o).join(te),
      l = i.length;
    for (let f = 0; f < l; f++) {
      const u = i[f];
      if (u.validator(p)) return u.classGroupId
    }
  },
  Co = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const o = e.slice(1, -1),
      r = o.indexOf(":"),
      t = o.slice(0, r);
    return t ? vo + t : void 0
  })(),
  Ao = e => {
    const {
      theme: o,
      classGroups: r
    } = e;
    return So(r, o)
  },
  So = (e, o) => {
    const r = Xe();
    for (const t in e) {
      const a = e[t];
      ke(a, r, t, o)
    }
    return r
  },
  ke = (e, o, r, t) => {
    const a = e.length;
    for (let d = 0; d < a; d++) {
      const i = e[d];
      Io(i, o, r, t)
    }
  },
  Io = (e, o, r, t) => {
    if (typeof e == "string") {
      Ro(e, o, r);
      return
    }
    if (typeof e == "function") {
      To(e, o, r, t);
      return
    }
    Mo(e, o, r, t)
  },
  Ro = (e, o, r) => {
    const t = e === "" ? o : Qe(o, e);
    t.classGroupId = r
  },
  To = (e, o, r, t) => {
    if (Po(e)) {
      ke(e(t), o, r, t);
      return
    }
    o.validators === null && (o.validators = []), o.validators.push(yo(r, e))
  },
  Mo = (e, o, r, t) => {
    const a = Object.entries(e),
      d = a.length;
    for (let i = 0; i < d; i++) {
      const [p, l] = a[i];
      ke(l, Qe(o, p), r, t)
    }
  },
  Qe = (e, o) => {
    let r = e;
    const t = o.split(te),
      a = t.length;
    for (let d = 0; d < a; d++) {
      const i = t[d];
      let p = r.nextPart.get(i);
      p || (p = Xe(), r.nextPart.set(i, p)), r = p
    }
    return r
  },
  Po = e => "isThemeGetter" in e && e.isThemeGetter === !0,
  Eo = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let o = 0,
      r = Object.create(null),
      t = Object.create(null);
    const a = (d, i) => {
      r[d] = i, o++, o > e && (o = 0, t = r, r = Object.create(null))
    };
    return {
      get(d) {
        let i = r[d];
        if (i !== void 0) return i;
        if ((i = t[d]) !== void 0) return a(d, i), i
      },
      set(d, i) {
        d in r ? r[d] = i : a(d, i)
      }
    }
  },
  xe = "!",
  je = ":",
  Go = [],
  Ve = (e, o, r, t, a) => ({
    modifiers: e,
    hasImportantModifier: o,
    baseClassName: r,
    maybePostfixModifierPosition: t,
    isExternal: a
  }),
  _o = e => {
    const {
      prefix: o,
      experimentalParseClassName: r
    } = e;
    let t = a => {
      const d = [];
      let i = 0,
        p = 0,
        l = 0,
        f;
      const u = a.length;
      for (let z = 0; z < u; z++) {
        const y = a[z];
        if (i === 0 && p === 0) {
          if (y === je) {
            d.push(a.slice(l, z)), l = z + 1;
            continue
          }
          if (y === "/") {
            f = z;
            continue
          }
        }
        y === "[" ? i++ : y === "]" ? i-- : y === "(" ? p++ : y === ")" && p--
      }
      const h = d.length === 0 ? a : a.slice(l);
      let A = h,
        P = !1;
      h.endsWith(xe) ? (A = h.slice(0, -1), P = !0) : h.startsWith(xe) && (A = h.slice(1), P = !0);
      const E = f && f > l ? f - l : void 0;
      return Ve(d, P, A, E)
    };
    if (o) {
      const a = o + je,
        d = t;
      t = i => i.startsWith(a) ? d(i.slice(a.length)) : Ve(Go, !1, i, void 0, !0)
    }
    if (r) {
      const a = t;
      t = d => r({
        className: d,
        parseClassName: a
      })
    }
    return t
  },
  Lo = e => {
    const o = new Map;
    return e.orderSensitiveModifiers.forEach((r, t) => {
      o.set(r, 1e6 + t)
    }), r => {
      const t = [];
      let a = [];
      for (let d = 0; d < r.length; d++) {
        const i = r[d],
          p = i[0] === "[",
          l = o.has(i);
        p || l ? (a.length > 0 && (a.sort(), t.push(...a), a = []), t.push(i)) : a.push(i)
      }
      return a.length > 0 && (a.sort(), t.push(...a)), t
    }
  },
  No = e => ({
    cache: Eo(e.cacheSize),
    parseClassName: _o(e),
    sortModifiers: Lo(e),
    ...zo(e)
  }),
  Oo = /\s+/,
  jo = (e, o) => {
    const {
      parseClassName: r,
      getClassGroupId: t,
      getConflictingClassGroupIds: a,
      sortModifiers: d
    } = o, i = [], p = e.trim().split(Oo);
    let l = "";
    for (let f = p.length - 1; f >= 0; f -= 1) {
      const u = p[f],
        {
          isExternal: h,
          modifiers: A,
          hasImportantModifier: P,
          baseClassName: E,
          maybePostfixModifierPosition: z
        } = r(u);
      if (h) {
        l = u + (l.length > 0 ? " " + l : l);
        continue
      }
      let y = !!z,
        G = t(y ? E.substring(0, z) : E);
      if (!G) {
        if (!y) {
          l = u + (l.length > 0 ? " " + l : l);
          continue
        }
        if (G = t(E), !G) {
          l = u + (l.length > 0 ? " " + l : l);
          continue
        }
        y = !1
      }
      const H = A.length === 0 ? "" : A.length === 1 ? A[0] : d(A).join(":"),
        U = P ? H + xe : H,
        j = U + G;
      if (i.indexOf(j) > -1) continue;
      i.push(j);
      const V = a(G, y);
      for (let _ = 0; _ < V.length; ++_) {
        const B = V[_];
        i.push(U + B)
      }
      l = u + (l.length > 0 ? " " + l : l)
    }
    return l
  },
  Vo = (...e) => {
    let o = 0,
      r, t, a = "";
    for (; o < e.length;)(r = e[o++]) && (t = Ze(r)) && (a && (a += " "), a += t);
    return a
  },
  Ze = e => {
    if (typeof e == "string") return e;
    let o, r = "";
    for (let t = 0; t < e.length; t++) e[t] && (o = Ze(e[t])) && (r && (r += " "), r += o);
    return r
  },
  Fo = (e, ...o) => {
    let r, t, a, d;
    const i = l => {
        const f = o.reduce((u, h) => h(u), e());
        return r = No(f), t = r.cache.get, a = r.cache.set, d = p, p(l)
      },
      p = l => {
        const f = t(l);
        if (f) return f;
        const u = jo(l, r);
        return a(l, u), u
      };
    return d = i, (...l) => d(Vo(...l))
  },
  Uo = [],
  g = e => {
    const o = r => r[e] || Uo;
    return o.isThemeGetter = !0, o
  },
  Ke = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  $e = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Bo = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Wo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Do = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Yo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Ho = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  qo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  R = e => Bo.test(e),
  b = e => !!e && !Number.isNaN(Number(e)),
  T = e => !!e && Number.isInteger(Number(e)),
  ue = e => e.endsWith("%") && b(e.slice(0, -1)),
  S = e => Wo.test(e),
  eo = () => !0,
  Xo = e => Do.test(e) && !Yo.test(e),
  ye = () => !1,
  Jo = e => Ho.test(e),
  Qo = e => qo.test(e),
  Zo = e => !s(e) && !n(e),
  Ko = e => M(e, to, ye),
  s = e => Ke.test(e),
  N = e => M(e, so, Xo),
  Fe = e => M(e, ar, b),
  $o = e => M(e, ao, eo),
  er = e => M(e, no, ye),
  Ue = e => M(e, oo, ye),
  or = e => M(e, ro, Qo),
  $ = e => M(e, io, Jo),
  n = e => $e.test(e),
  W = e => O(e, so),
  rr = e => O(e, no),
  Be = e => O(e, oo),
  tr = e => O(e, to),
  sr = e => O(e, ro),
  ee = e => O(e, io, !0),
  nr = e => O(e, ao, !0),
  M = (e, o, r) => {
    const t = Ke.exec(e);
    return t ? t[1] ? o(t[1]) : r(t[2]) : !1
  },
  O = (e, o, r = !1) => {
    const t = $e.exec(e);
    return t ? t[1] ? o(t[1]) : r : !1
  },
  oo = e => e === "position" || e === "percentage",
  ro = e => e === "image" || e === "url",
  to = e => e === "length" || e === "size" || e === "bg-size",
  so = e => e === "length",
  ar = e => e === "number",
  no = e => e === "family-name",
  ao = e => e === "number" || e === "weight",
  io = e => e === "shadow",
  ir = () => {
    const e = g("color"),
      o = g("font"),
      r = g("text"),
      t = g("font-weight"),
      a = g("tracking"),
      d = g("leading"),
      i = g("breakpoint"),
      p = g("container"),
      l = g("spacing"),
      f = g("radius"),
      u = g("shadow"),
      h = g("inset-shadow"),
      A = g("text-shadow"),
      P = g("drop-shadow"),
      E = g("blur"),
      z = g("perspective"),
      y = g("aspect"),
      G = g("ease"),
      H = g("animate"),
      U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      j = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      V = () => [...j(), n, s],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", "contain", "none"],
      c = () => [n, s, l],
      v = () => [R, "full", "auto", ...c()],
      ve = () => [T, "none", "subgrid", n, s],
      ze = () => ["auto", {
        span: ["full", T, n, s]
      }, T, n, s],
      q = () => [T, "auto", n, s],
      Ce = () => ["auto", "min", "max", "fr", n, s],
      ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      F = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      C = () => ["auto", ...c()],
      L = () => [R, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...c()],
      ie = () => [R, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...c()],
      le = () => [R, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...c()],
      m = () => [e, n, s],
      Ae = () => [...j(), Be, Ue, {
        position: [n, s]
      }],
      Se = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      Ie = () => ["auto", "cover", "contain", tr, Ko, {
        size: [n, s]
      }],
      ce = () => [ue, W, N],
      x = () => ["", "none", "full", f, n, s],
      k = () => ["", b, W, N],
      X = () => ["solid", "dashed", "dotted", "double"],
      Re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      w = () => [b, ue, Be, Ue],
      Te = () => ["", "none", E, n, s],
      J = () => ["none", b, n, s],
      Q = () => ["none", b, n, s],
      de = () => [b, n, s],
      Z = () => [R, "full", ...c()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [S],
        breakpoint: [S],
        color: [eo],
        container: [S],
        "drop-shadow": [S],
        ease: ["in", "out", "in-out"],
        font: [Zo],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [S],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [S],
        shadow: [S],
        spacing: ["px", b],
        text: [S],
        "text-shadow": [S],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", R, s, n, y]
        }],
        container: ["container"],
        columns: [{
          columns: [b, s, n, p]
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
          inset: v()
        }],
        "inset-x": [{
          "inset-x": v()
        }],
        "inset-y": [{
          "inset-y": v()
        }],
        start: [{
          "inset-s": v(),
          start: v()
        }],
        end: [{
          "inset-e": v(),
          end: v()
        }],
        "inset-bs": [{
          "inset-bs": v()
        }],
        "inset-be": [{
          "inset-be": v()
        }],
        top: [{
          top: v()
        }],
        right: [{
          right: v()
        }],
        bottom: [{
          bottom: v()
        }],
        left: [{
          left: v()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [T, "auto", n, s]
        }],
        basis: [{
          basis: [R, "full", "auto", p, ...c()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [b, R, "auto", "initial", "none", s]
        }],
        grow: [{
          grow: ["", b, n, s]
        }],
        shrink: [{
          shrink: ["", b, n, s]
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
          "col-start": q()
        }],
        "col-end": [{
          "col-end": q()
        }],
        "grid-rows": [{
          "grid-rows": ve()
        }],
        "row-start-end": [{
          row: ze()
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
          w: [p, "screen", ...L()]
        }],
        "min-w": [{
          "min-w": [p, "screen", "none", ...L()]
        }],
        "max-w": [{
          "max-w": [p, "screen", "none", "prose", {
            screen: [i]
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
          font: [t, nr, $o]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ue, s]
        }],
        "font-family": [{
          font: [rr, er, o]
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
          tracking: [a, n, s]
        }],
        "line-clamp": [{
          "line-clamp": [b, "none", n, Fe]
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
          decoration: [b, "from-font", "auto", n, N]
        }],
        "text-decoration-color": [{
          decoration: m()
        }],
        "underline-offset": [{
          "underline-offset": [b, "auto", n, s]
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
          }, sr, or]
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
          border: k()
        }],
        "border-w-x": [{
          "border-x": k()
        }],
        "border-w-y": [{
          "border-y": k()
        }],
        "border-w-s": [{
          "border-s": k()
        }],
        "border-w-e": [{
          "border-e": k()
        }],
        "border-w-bs": [{
          "border-bs": k()
        }],
        "border-w-be": [{
          "border-be": k()
        }],
        "border-w-t": [{
          "border-t": k()
        }],
        "border-w-r": [{
          "border-r": k()
        }],
        "border-w-b": [{
          "border-b": k()
        }],
        "border-w-l": [{
          "border-l": k()
        }],
        "divide-x": [{
          "divide-x": k()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": k()
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
          "outline-offset": [b, n, s]
        }],
        "outline-w": [{
          outline: ["", b, W, N]
        }],
        "outline-color": [{
          outline: m()
        }],
        shadow: [{
          shadow: ["", "none", u, ee, $]
        }],
        "shadow-color": [{
          shadow: m()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", h, ee, $]
        }],
        "inset-shadow-color": [{
          "inset-shadow": m()
        }],
        "ring-w": [{
          ring: k()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: m()
        }],
        "ring-offset-w": [{
          "ring-offset": [b, N]
        }],
        "ring-offset-color": [{
          "ring-offset": m()
        }],
        "inset-ring-w": [{
          "inset-ring": k()
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
          opacity: [b, n, s]
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
          "mask-linear": [b]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": w()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": w()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": m()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": m()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": w()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": w()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": m()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": m()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": w()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": w()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": m()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": m()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": w()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": w()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": m()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": m()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": w()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": w()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": m()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": m()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": w()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": w()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": m()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": m()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": w()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": w()
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
          "mask-radial-from": w()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": w()
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
          "mask-conic": [b]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": w()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": w()
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
          brightness: [b, n, s]
        }],
        contrast: [{
          contrast: [b, n, s]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", P, ee, $]
        }],
        "drop-shadow-color": [{
          "drop-shadow": m()
        }],
        grayscale: [{
          grayscale: ["", b, n, s]
        }],
        "hue-rotate": [{
          "hue-rotate": [b, n, s]
        }],
        invert: [{
          invert: ["", b, n, s]
        }],
        saturate: [{
          saturate: [b, n, s]
        }],
        sepia: [{
          sepia: ["", b, n, s]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", n, s]
        }],
        "backdrop-blur": [{
          "backdrop-blur": Te()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [b, n, s]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [b, n, s]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", b, n, s]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [b, n, s]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", b, n, s]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [b, n, s]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [b, n, s]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", b, n, s]
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
          duration: [b, "initial", n, s]
        }],
        ease: [{
          ease: ["linear", "initial", G, n, s]
        }],
        delay: [{
          delay: [b, n, s]
        }],
        animate: [{
          animate: ["none", H, n, s]
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
          stroke: [b, W, N, Fe]
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
  lr = Fo(ir);
var cr = ne('<img class="pixelated bg-base-200 size-full" alt="User profile"/>'),
  dr = ne('<img alt="Profile border" class="pixelated pointer-events-none absolute top-1/2 left-1/2 aspect-square w-full"/>'),
  mr = ne('<div style="overflow: visible;"><div><!></div> <!></div>');

function wr(e, o) {
  Ye(o, !0);
  var r = mr();
  let t;
  var a = fe(r),
    d = fe(a);
  {
    var i = u => {
        xo(u, {
          get userId() {
            return o.userId
          }
        })
      },
      p = u => {
        var h = cr();
        oe(() => _e(h, "src", o.pictureUrl)), re(u, h)
      };
    Ge(d, u => {
      o.pictureUrl ? u(p, !1) : u(i)
    })
  }
  ge(a);
  var l = mo(a, 2);
  {
    var f = u => {
      var h = dr();
      po(h, "transform: translate(-50%, -50%) scale(1.696969696969697);"), oe(() => _e(h, "src", o.borderUrl)), re(u, h)
    };
    Ge(l, u => {
      o.borderUrl && u(f)
    })
  }
  ge(r), oe(u => {
    t = he(r, 1, "relative", null, t, {
      "border-3": o.isSuspended,
      "border-red-500": o.isSuspended
    }), he(a, 1, u)
  }, [() => bo(lr("avatar border-base-300 size-20 overflow-hidden rounded-full border-2", o.class))]), re(e, r), He()
}
export {
  wr as P, xo as a, lr as t
};