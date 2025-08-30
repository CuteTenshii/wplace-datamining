var Ke = Object.defineProperty;
var Ie = e => {
  throw TypeError(e)
};
var eo = (e, r, o) => r in e ? Ke(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: o
}) : e[r] = o;
var Pe = (e, r, o) => eo(e, typeof r != "symbol" ? r + "" : r, o),
  ne = (e, r, o) => r.has(e) || Ie("Cannot " + o);
var ae = (e, r, o) => (ne(e, r, "read from private field"), o ? o.call(e) : r.get(e)),
  Z = (e, r, o) => r.has(e) ? Ie("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, o),
  Re = (e, r, o, t) => (ne(e, r, "write to private field"), t ? t.call(e, o) : r.set(e, o), o),
  ie = (e, r, o) => (ne(e, r, "access private method"), o);
import "./Bzak7iHL.js";
import {
  p as je,
  f as xe,
  d as de,
  r as me,
  t as pe,
  b as ue,
  c as Fe
} from "./B6s--CY1.js";
import {
  i as oo
} from "./DCOkPuhX.js";
import {
  a as Ue,
  c as ro,
  s as to
} from "./B-MUH0Pm.js";
import {
  h as so
} from "./nGwKiHy8.js";
const Ge = 9,
  no = 95,
  ao = 45,
  Te = 5;

function io(e) {
  return e.split("").reduce((r, o) => (r ^ o.charCodeAt(0)) * -Te, Te) >>> 2
}

function Be(e = "", r = no, o = ao, t = io) {
  const a = t(e),
    d = a % Ge * (360 / Ge);
  return [...Array(e ? 25 : 0)].reduce((i, u, c) => a & 1 << c % 15 ? i + `<rect x="${c>14?7-~~(c/5):~~(c/5)}" y="${c%5}" width="1" height="1"/>` : i, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${d} ${r}% ${o}%)" shape-rendering="crispEdges">`) + "</svg>"
}
var Oe, A, oe, H, q, fe, Ve;
(Oe = globalThis.customElements) != null && Oe.get("minidenticon-svg") || (Ve = globalThis.customElements) == null || Ve.define("minidenticon-svg", (A = class extends HTMLElement {
  constructor() {
    super(...arguments);
    Z(this, q);
    Z(this, H, !1)
  }
  connectedCallback() {
    ie(this, q, fe).call(this), Re(this, H, !0)
  }
  attributeChangedCallback() {
    ae(this, H) && ie(this, q, fe).call(this)
  }
}, oe = new WeakMap, H = new WeakMap, q = new WeakSet, fe = function() {
  var a;
  const o = A.observedAttributes.map(d => this.getAttribute(d) || void 0),
    t = o.join(",");
  this.innerHTML = (a = ae(A, oe))[t] ?? (a[t] = Be(...o))
}, Pe(A, "observedAttributes", ["username", "saturation", "lightness"]), Z(A, oe, {}), A));
var lo = xe("<div><!></div>");

function co(e, r) {
  je(r, !0);
  var o = lo(),
    t = de(o);
  so(t, () => Be(r.userId.toString(), 95, 45)), me(o), pe(() => Ue(o, 1, `bg-base-200 minidenticon ${r.class??""??""}`)), ue(e, o), Fe()
}
const we = "-",
  mo = e => {
    const r = uo(e),
      {
        conflictingClassGroups: o,
        conflictingClassGroupModifiers: t
      } = e;
    return {
      getClassGroupId: i => {
        const u = i.split(we);
        return u[0] === "" && u.length !== 1 && u.shift(), We(u, r) || po(i)
      },
      getConflictingClassGroupIds: (i, u) => {
        const c = o[i] || [];
        return u && t[i] ? [...c, ...t[i]] : c
      }
    }
  },
  We = (e, r) => {
    var i;
    if (e.length === 0) return r.classGroupId;
    const o = e[0],
      t = r.nextPart.get(o),
      a = t ? We(e.slice(1), t) : void 0;
    if (a) return a;
    if (r.validators.length === 0) return;
    const d = e.join(we);
    return (i = r.validators.find(({
      validator: u
    }) => u(d))) == null ? void 0 : i.classGroupId
  },
  Ee = /^\[(.+)\]$/,
  po = e => {
    if (Ee.test(e)) {
      const r = Ee.exec(e)[1],
        o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (o) return "arbitrary.." + o
    }
  },
  uo = e => {
    const {
      theme: r,
      classGroups: o
    } = e, t = {
      nextPart: new Map,
      validators: []
    };
    for (const a in o) be(o[a], t, a, r);
    return t
  },
  be = (e, r, o, t) => {
    e.forEach(a => {
      if (typeof a == "string") {
        const d = a === "" ? r : Le(r, a);
        d.classGroupId = o;
        return
      }
      if (typeof a == "function") {
        if (fo(a)) {
          be(a(t), r, o, t);
          return
        }
        r.validators.push({
          validator: a,
          classGroupId: o
        });
        return
      }
      Object.entries(a).forEach(([d, i]) => {
        be(i, Le(r, d), o, t)
      })
    })
  },
  Le = (e, r) => {
    let o = e;
    return r.split(we).forEach(t => {
      o.nextPart.has(t) || o.nextPart.set(t, {
        nextPart: new Map,
        validators: []
      }), o = o.nextPart.get(t)
    }), o
  },
  fo = e => e.isThemeGetter,
  bo = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let r = 0,
      o = new Map,
      t = new Map;
    const a = (d, i) => {
      o.set(d, i), r++, r > e && (r = 0, t = o, o = new Map)
    };
    return {
      get(d) {
        let i = o.get(d);
        if (i !== void 0) return i;
        if ((i = t.get(d)) !== void 0) return a(d, i), i
      },
      set(d, i) {
        o.has(d) ? o.set(d, i) : a(d, i)
      }
    }
  },
  ge = "!",
  he = ":",
  go = he.length,
  ho = e => {
    const {
      prefix: r,
      experimentalParseClassName: o
    } = e;
    let t = a => {
      const d = [];
      let i = 0,
        u = 0,
        c = 0,
        g;
      for (let k = 0; k < a.length; k++) {
        let y = a[k];
        if (i === 0 && u === 0) {
          if (y === he) {
            d.push(a.slice(c, k)), c = k + go;
            continue
          }
          if (y === "/") {
            g = k;
            continue
          }
        }
        y === "[" ? i++ : y === "]" ? i-- : y === "(" ? u++ : y === ")" && u--
      }
      const h = d.length === 0 ? a : a.substring(c),
        M = xo(h),
        j = M !== h,
        F = g && g > c ? g - c : void 0;
      return {
        modifiers: d,
        hasImportantModifier: j,
        baseClassName: M,
        maybePostfixModifierPosition: F
      }
    };
    if (r) {
      const a = r + he,
        d = t;
      t = i => i.startsWith(a) ? d(i.substring(a.length)) : {
        isExternal: !0,
        modifiers: [],
        hasImportantModifier: !1,
        baseClassName: i,
        maybePostfixModifierPosition: void 0
      }
    }
    if (o) {
      const a = t;
      t = d => o({
        className: d,
        parseClassName: a
      })
    }
    return t
  },
  xo = e => e.endsWith(ge) ? e.substring(0, e.length - 1) : e.startsWith(ge) ? e.substring(1) : e,
  wo = e => {
    const r = Object.fromEntries(e.orderSensitiveModifiers.map(t => [t, !0]));
    return t => {
      if (t.length <= 1) return t;
      const a = [];
      let d = [];
      return t.forEach(i => {
        i[0] === "[" || r[i] ? (a.push(...d.sort(), i), d = []) : d.push(i)
      }), a.push(...d.sort()), a
    }
  },
  ko = e => ({
    cache: bo(e.cacheSize),
    parseClassName: ho(e),
    sortModifiers: wo(e),
    ...mo(e)
  }),
  yo = /\s+/,
  vo = (e, r) => {
    const {
      parseClassName: o,
      getClassGroupId: t,
      getConflictingClassGroupIds: a,
      sortModifiers: d
    } = r, i = [], u = e.trim().split(yo);
    let c = "";
    for (let g = u.length - 1; g >= 0; g -= 1) {
      const h = u[g],
        {
          isExternal: M,
          modifiers: j,
          hasImportantModifier: F,
          baseClassName: k,
          maybePostfixModifierPosition: y
        } = o(h);
      if (M) {
        c = h + (c.length > 0 ? " " + c : c);
        continue
      }
      let T = !!y,
        I = t(T ? k.substring(0, y) : k);
      if (!I) {
        if (!T) {
          c = h + (c.length > 0 ? " " + c : c);
          continue
        }
        if (I = t(k), !I) {
          c = h + (c.length > 0 ? " " + c : c);
          continue
        }
        T = !1
      }
      const D = d(j).join(":"),
        U = F ? D + ge : D,
        E = U + I;
      if (i.includes(E)) continue;
      i.push(E);
      const L = a(I, T);
      for (let P = 0; P < L.length; ++P) {
        const B = L[P];
        i.push(U + B)
      }
      c = h + (c.length > 0 ? " " + c : c)
    }
    return c
  };

function zo() {
  let e = 0,
    r, o, t = "";
  for (; e < arguments.length;)(r = arguments[e++]) && (o = He(r)) && (t && (t += " "), t += o);
  return t
}
const He = e => {
  if (typeof e == "string") return e;
  let r, o = "";
  for (let t = 0; t < e.length; t++) e[t] && (r = He(e[t])) && (o && (o += " "), o += r);
  return o
};

function Co(e, ...r) {
  let o, t, a, d = i;

  function i(c) {
    const g = r.reduce((h, M) => M(h), e());
    return o = ko(g), t = o.cache.get, a = o.cache.set, d = u, u(c)
  }

  function u(c) {
    const g = t(c);
    if (g) return g;
    const h = vo(c, o);
    return a(c, h), h
  }
  return function() {
    return d(zo.apply(null, arguments))
  }
}
const f = e => {
    const r = o => o[e] || [];
    return r.isThemeGetter = !0, r
  },
  qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  De = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Ao = /^\d+\/\d+$/,
  Mo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  So = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Io = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Po = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ro = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  _ = e => Ao.test(e),
  p = e => !!e && !Number.isNaN(Number(e)),
  S = e => !!e && Number.isInteger(Number(e)),
  le = e => e.endsWith("%") && p(e.slice(0, -1)),
  C = e => Mo.test(e),
  Go = () => !0,
  To = e => So.test(e) && !Io.test(e),
  Je = () => !1,
  Eo = e => Po.test(e),
  Lo = e => Ro.test(e),
  No = e => !s(e) && !n(e),
  _o = e => O(e, Qe, Je),
  s = e => qe.test(e),
  G = e => O(e, Ye, To),
  ce = e => O(e, Uo, p),
  Ne = e => O(e, Xe, Je),
  Oo = e => O(e, $e, Lo),
  K = e => O(e, Ze, Eo),
  n = e => De.test(e),
  W = e => V(e, Ye),
  Vo = e => V(e, Bo),
  _e = e => V(e, Xe),
  jo = e => V(e, Qe),
  Fo = e => V(e, $e),
  ee = e => V(e, Ze, !0),
  O = (e, r, o) => {
    const t = qe.exec(e);
    return t ? t[1] ? r(t[1]) : o(t[2]) : !1
  },
  V = (e, r, o = !1) => {
    const t = De.exec(e);
    return t ? t[1] ? r(t[1]) : o : !1
  },
  Xe = e => e === "position" || e === "percentage",
  $e = e => e === "image" || e === "url",
  Qe = e => e === "length" || e === "size" || e === "bg-size",
  Ye = e => e === "length",
  Uo = e => e === "number",
  Bo = e => e === "family-name",
  Ze = e => e === "shadow",
  Wo = () => {
    const e = f("color"),
      r = f("font"),
      o = f("text"),
      t = f("font-weight"),
      a = f("tracking"),
      d = f("leading"),
      i = f("breakpoint"),
      u = f("container"),
      c = f("spacing"),
      g = f("radius"),
      h = f("shadow"),
      M = f("inset-shadow"),
      j = f("text-shadow"),
      F = f("drop-shadow"),
      k = f("blur"),
      y = f("perspective"),
      T = f("aspect"),
      I = f("ease"),
      D = f("animate"),
      U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      E = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      L = () => [...E(), n, s],
      P = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", "contain", "none"],
      m = () => [n, s, c],
      v = () => [_, "full", "auto", ...m()],
      ke = () => [S, "none", "subgrid", n, s],
      ye = () => ["auto", {
        span: ["full", S, n, s]
      }, S, n, s],
      J = () => [S, "auto", n, s],
      ve = () => ["auto", "min", "max", "fr", n, s],
      re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      z = () => ["auto", ...m()],
      R = () => [_, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()],
      l = () => [e, n, s],
      ze = () => [...E(), _e, Ne, {
        position: [n, s]
      }],
      Ce = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      Ae = () => ["auto", "cover", "contain", jo, _o, {
        size: [n, s]
      }],
      te = () => [le, W, G],
      x = () => ["", "none", "full", g, n, s],
      w = () => ["", p, W, G],
      X = () => ["solid", "dashed", "dotted", "double"],
      Me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      b = () => [p, le, _e, Ne],
      Se = () => ["", "none", k, n, s],
      $ = () => ["none", p, n, s],
      Q = () => ["none", p, n, s],
      se = () => [p, n, s],
      Y = () => [_, "full", ...m()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [C],
        breakpoint: [C],
        color: [Go],
        container: [C],
        "drop-shadow": [C],
        ease: ["in", "out", "in-out"],
        font: [No],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [C],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [C],
        shadow: [C],
        spacing: ["px", p],
        text: [C],
        "text-shadow": [C],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", _, s, n, T]
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
          object: L()
        }],
        overflow: [{
          overflow: P()
        }],
        "overflow-x": [{
          "overflow-x": P()
        }],
        "overflow-y": [{
          "overflow-y": P()
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
          start: v()
        }],
        end: [{
          end: v()
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
          z: [S, "auto", n, s]
        }],
        basis: [{
          basis: [_, "full", "auto", u, ...m()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [p, _, "auto", "initial", "none", s]
        }],
        grow: [{
          grow: ["", p, n, s]
        }],
        shrink: [{
          shrink: ["", p, n, s]
        }],
        order: [{
          order: [S, "first", "last", "none", n, s]
        }],
        "grid-cols": [{
          "grid-cols": ke()
        }],
        "col-start-end": [{
          col: ye()
        }],
        "col-start": [{
          "col-start": J()
        }],
        "col-end": [{
          "col-end": J()
        }],
        "grid-rows": [{
          "grid-rows": ke()
        }],
        "row-start-end": [{
          row: ye()
        }],
        "row-start": [{
          "row-start": J()
        }],
        "row-end": [{
          "row-end": J()
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
          justify: [...re(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...N(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...N()]
        }],
        "align-content": [{
          content: ["normal", ...re()]
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
          "place-content": re()
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
          m: z()
        }],
        mx: [{
          mx: z()
        }],
        my: [{
          my: z()
        }],
        ms: [{
          ms: z()
        }],
        me: [{
          me: z()
        }],
        mt: [{
          mt: z()
        }],
        mr: [{
          mr: z()
        }],
        mb: [{
          mb: z()
        }],
        ml: [{
          ml: z()
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
          size: R()
        }],
        w: [{
          w: [u, "screen", ...R()]
        }],
        "min-w": [{
          "min-w": [u, "screen", "none", ...R()]
        }],
        "max-w": [{
          "max-w": [u, "screen", "none", "prose", {
            screen: [i]
          }, ...R()]
        }],
        h: [{
          h: ["screen", "lh", ...R()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...R()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...R()]
        }],
        "font-size": [{
          text: ["base", o, W, G]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [t, n, ce]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", le, s]
        }],
        "font-family": [{
          font: [Vo, s, r]
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
          "line-clamp": [p, "none", n, ce]
        }],
        leading: [{
          leading: [d, ...m()]
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
          placeholder: l()
        }],
        "text-color": [{
          text: l()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...X(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [p, "from-font", "auto", n, G]
        }],
        "text-decoration-color": [{
          decoration: l()
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
            }, S, n, s],
            radial: ["", n, s],
            conic: [S, n, s]
          }, Fo, Oo]
        }],
        "bg-color": [{
          bg: l()
        }],
        "gradient-from-pos": [{
          from: te()
        }],
        "gradient-via-pos": [{
          via: te()
        }],
        "gradient-to-pos": [{
          to: te()
        }],
        "gradient-from": [{
          from: l()
        }],
        "gradient-via": [{
          via: l()
        }],
        "gradient-to": [{
          to: l()
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
          border: w()
        }],
        "border-w-x": [{
          "border-x": w()
        }],
        "border-w-y": [{
          "border-y": w()
        }],
        "border-w-s": [{
          "border-s": w()
        }],
        "border-w-e": [{
          "border-e": w()
        }],
        "border-w-t": [{
          "border-t": w()
        }],
        "border-w-r": [{
          "border-r": w()
        }],
        "border-w-b": [{
          "border-b": w()
        }],
        "border-w-l": [{
          "border-l": w()
        }],
        "divide-x": [{
          "divide-x": w()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": w()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...X(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...X(), "hidden", "none"]
        }],
        "border-color": [{
          border: l()
        }],
        "border-color-x": [{
          "border-x": l()
        }],
        "border-color-y": [{
          "border-y": l()
        }],
        "border-color-s": [{
          "border-s": l()
        }],
        "border-color-e": [{
          "border-e": l()
        }],
        "border-color-t": [{
          "border-t": l()
        }],
        "border-color-r": [{
          "border-r": l()
        }],
        "border-color-b": [{
          "border-b": l()
        }],
        "border-color-l": [{
          "border-l": l()
        }],
        "divide-color": [{
          divide: l()
        }],
        "outline-style": [{
          outline: [...X(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [p, n, s]
        }],
        "outline-w": [{
          outline: ["", p, W, G]
        }],
        "outline-color": [{
          outline: l()
        }],
        shadow: [{
          shadow: ["", "none", h, ee, K]
        }],
        "shadow-color": [{
          shadow: l()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", M, ee, K]
        }],
        "inset-shadow-color": [{
          "inset-shadow": l()
        }],
        "ring-w": [{
          ring: w()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: l()
        }],
        "ring-offset-w": [{
          "ring-offset": [p, G]
        }],
        "ring-offset-color": [{
          "ring-offset": l()
        }],
        "inset-ring-w": [{
          "inset-ring": w()
        }],
        "inset-ring-color": [{
          "inset-ring": l()
        }],
        "text-shadow": [{
          "text-shadow": ["none", j, ee, K]
        }],
        "text-shadow-color": [{
          "text-shadow": l()
        }],
        opacity: [{
          opacity: [p, n, s]
        }],
        "mix-blend": [{
          "mix-blend": [...Me(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": Me()
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
          "mask-linear-from": b()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": b()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": l()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": l()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": b()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": b()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": l()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": l()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": b()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": b()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": l()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": l()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": b()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": b()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": l()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": l()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": b()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": b()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": l()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": l()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": b()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": b()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": l()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": l()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": b()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": b()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": l()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": l()
        }],
        "mask-image-radial": [{
          "mask-radial": [n, s]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": b()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": b()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": l()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": l()
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
          "mask-radial-at": E()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [p]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": b()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": b()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": l()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": l()
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
          blur: Se()
        }],
        brightness: [{
          brightness: [p, n, s]
        }],
        contrast: [{
          contrast: [p, n, s]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", F, ee, K]
        }],
        "drop-shadow-color": [{
          "drop-shadow": l()
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
          "backdrop-blur": Se()
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
          duration: [p, "initial", n, s]
        }],
        ease: [{
          ease: ["linear", "initial", I, n, s]
        }],
        delay: [{
          delay: [p, n, s]
        }],
        animate: [{
          animate: ["none", D, n, s]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [y, n, s]
        }],
        "perspective-origin": [{
          "perspective-origin": L()
        }],
        rotate: [{
          rotate: $()
        }],
        "rotate-x": [{
          "rotate-x": $()
        }],
        "rotate-y": [{
          "rotate-y": $()
        }],
        "rotate-z": [{
          "rotate-z": $()
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
          skew: se()
        }],
        "skew-x": [{
          "skew-x": se()
        }],
        "skew-y": [{
          "skew-y": se()
        }],
        transform: [{
          transform: [n, s, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: L()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: Y()
        }],
        "translate-x": [{
          "translate-x": Y()
        }],
        "translate-y": [{
          "translate-y": Y()
        }],
        "translate-z": [{
          "translate-z": Y()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: l()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: l()
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
          fill: ["none", ...l()]
        }],
        "stroke-w": [{
          stroke: [p, W, G, ce]
        }],
        stroke: [{
          stroke: ["none", ...l()]
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
  Ho = Co(Wo);
var qo = xe('<img class="pixelated bg-base-200" alt="User profile"/>'),
  Do = xe('<div class="avatar relative"><div><!></div></div>');

function Ko(e, r) {
  je(r, !0);
  var o = Do(),
    t = de(o),
    a = de(t);
  {
    var d = u => {
        co(u, {
          get userId() {
            return r.userId
          }
        })
      },
      i = u => {
        var c = qo();
        pe(() => to(c, "src", r.pictureUrl)), ue(u, c)
      };
    oo(a, u => {
      r.pictureUrl ? u(i, !1) : u(d)
    })
  }
  me(t), me(o), pe(u => Ue(t, 1, u), [() => ro(Ho("border-base-300 size-20 rounded-full border-2", r.class))]), ue(e, o), Fe()
}
export {
  Ko as P, co as a, Ho as t
};