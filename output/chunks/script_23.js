(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2f98687-b7e3-418a-915a-16f09615f9c2", e._sentryDebugIdIdentifier = "sentry-dbid-a2f98687-b7e3-418a-915a-16f09615f9c2")
  } catch {}
})();
const Oe = (e, t) => {
    const o = new Array(e.length + t.length);
    for (let r = 0; r < e.length; r++) o[r] = e[r];
    for (let r = 0; r < t.length; r++) o[e.length + r] = t[r];
    return o
  },
  Ne = (e, t) => ({
    classGroupId: e,
    validator: t
  }),
  ye = (e = new Map, t = null, o) => ({
    nextPart: e,
    validators: t,
    classGroupId: o
  }),
  K = "-",
  fe = [],
  je = "arbitrary..",
  Ve = e => {
    const t = Fe(e),
      {
        conflictingClassGroups: o,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: a => {
        if (a.startsWith("[") && a.endsWith("]")) return _e(a);
        const b = a.split(K),
          d = b[0] === "" && b.length > 1 ? 1 : 0;
        return ve(b, d, t)
      },
      getConflictingClassGroupIds: (a, b) => {
        if (b) {
          const d = r[a],
            u = o[a];
          return d ? u ? Oe(u, d) : d : u || fe
        }
        return o[a] || fe
      }
    }
  },
  ve = (e, t, o) => {
    if (e.length - t === 0) return o.classGroupId;
    const c = e[t],
      m = o.nextPart.get(c);
    if (m) {
      const u = ve(e, t + 1, m);
      if (u) return u
    }
    const a = o.validators;
    if (a === null) return;
    const b = t === 0 ? e.join(K) : e.slice(t).join(K),
      d = a.length;
    for (let u = 0; u < d; u++) {
      const h = a[u];
      if (h.validator(b)) return h.classGroupId
    }
  },
  _e = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const t = e.slice(1, -1),
      o = t.indexOf(":"),
      r = t.slice(0, o);
    return r ? je + r : void 0
  })(),
  Fe = e => {
    const {
      theme: t,
      classGroups: o
    } = e;
    return We(o, t)
  },
  We = (e, t) => {
    const o = ye();
    for (const r in e) {
      const c = e[r];
      ne(c, o, r, t)
    }
    return o
  },
  ne = (e, t, o, r) => {
    const c = e.length;
    for (let m = 0; m < c; m++) {
      const a = e[m];
      Be(a, t, o, r)
    }
  },
  Be = (e, t, o, r) => {
    if (typeof e == "string") {
      De(e, t, o);
      return
    }
    if (typeof e == "function") {
      $e(e, t, o, r);
      return
    }
    Ue(e, t, o, r)
  },
  De = (e, t, o) => {
    const r = e === "" ? t : ze(t, e);
    r.classGroupId = o
  },
  $e = (e, t, o, r) => {
    if (Ye(e)) {
      ne(e(r), t, o, r);
      return
    }
    t.validators === null && (t.validators = []), t.validators.push(Ne(o, e))
  },
  Ue = (e, t, o, r) => {
    const c = Object.entries(e),
      m = c.length;
    for (let a = 0; a < m; a++) {
      const [b, d] = c[a];
      ne(d, ze(t, b), o, r)
    }
  },
  ze = (e, t) => {
    let o = e;
    const r = t.split(K),
      c = r.length;
    for (let m = 0; m < c; m++) {
      const a = r[m];
      let b = o.nextPart.get(a);
      b || (b = ye(), o.nextPart.set(a, b)), o = b
    }
    return o
  },
  Ye = e => "isThemeGetter" in e && e.isThemeGetter === !0,
  qe = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let t = 0,
      o = Object.create(null),
      r = Object.create(null);
    const c = (m, a) => {
      o[m] = a, t++, t > e && (t = 0, r = o, o = Object.create(null))
    };
    return {
      get(m) {
        let a = o[m];
        if (a !== void 0) return a;
        if ((a = r[m]) !== void 0) return c(m, a), a
      },
      set(m, a) {
        m in o ? o[m] = a : c(m, a)
      }
    }
  },
  se = "!",
  ge = ":",
  Xe = [],
  he = (e, t, o, r, c) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: o,
    maybePostfixModifierPosition: r,
    isExternal: c
  }),
  Je = e => {
    const {
      prefix: t,
      experimentalParseClassName: o
    } = e;
    let r = c => {
      const m = [];
      let a = 0,
        b = 0,
        d = 0,
        u;
      const h = c.length;
      for (let z = 0; z < h; z++) {
        const x = c[z];
        if (a === 0 && b === 0) {
          if (x === ge) {
            m.push(c.slice(d, z)), d = z + 1;
            continue
          }
          if (x === "/") {
            u = z;
            continue
          }
        }
        x === "[" ? a++ : x === "]" ? a-- : x === "(" ? b++ : x === ")" && b--
      }
      const v = m.length === 0 ? c : c.slice(d);
      let A = v,
        P = !1;
      v.endsWith(se) ? (A = v.slice(0, -1), P = !0) : v.startsWith(se) && (A = v.slice(1), P = !0);
      const T = u && u > d ? u - d : void 0;
      return he(m, P, A, T)
    };
    if (t) {
      const c = t + ge,
        m = r;
      r = a => a.startsWith(c) ? m(a.slice(c.length)) : he(Xe, !1, a, void 0, !0)
    }
    if (o) {
      const c = r;
      r = m => o({
        className: m,
        parseClassName: c
      })
    }
    return r
  },
  He = e => {
    const t = new Map;
    return e.orderSensitiveModifiers.forEach((o, r) => {
      t.set(o, 1e6 + r)
    }), o => {
      const r = [];
      let c = [];
      for (let m = 0; m < o.length; m++) {
        const a = o[m],
          b = a[0] === "[",
          d = t.has(a);
        b || d ? (c.length > 0 && (c.sort(), r.push(...c), c = []), r.push(a)) : c.push(a)
      }
      return c.length > 0 && (c.sort(), r.push(...c)), r
    }
  },
  Ke = e => ({
    cache: qe(e.cacheSize),
    parseClassName: Je(e),
    sortModifiers: He(e),
    ...Ve(e)
  }),
  Qe = /\s+/,
  Ze = (e, t) => {
    const {
      parseClassName: o,
      getClassGroupId: r,
      getConflictingClassGroupIds: c,
      sortModifiers: m
    } = t, a = [], b = e.trim().split(Qe);
    let d = "";
    for (let u = b.length - 1; u >= 0; u -= 1) {
      const h = b[u],
        {
          isExternal: v,
          modifiers: A,
          hasImportantModifier: P,
          baseClassName: T,
          maybePostfixModifierPosition: z
        } = o(h);
      if (v) {
        d = h + (d.length > 0 ? " " + d : d);
        continue
      }
      let x = !!z,
        G = r(x ? T.substring(0, z) : T);
      if (!G) {
        if (!x) {
          d = h + (d.length > 0 ? " " + d : d);
          continue
        }
        if (G = r(T), !G) {
          d = h + (d.length > 0 ? " " + d : d);
          continue
        }
        x = !1
      }
      const D = A.length === 0 ? "" : A.length === 1 ? A[0] : m(A).join(":"),
        F = P ? D + se : D,
        j = F + G;
      if (a.indexOf(j) > -1) continue;
      a.push(j);
      const V = c(G, x);
      for (let E = 0; E < V.length; ++E) {
        const W = V[E];
        a.push(F + W)
      }
      d = h + (d.length > 0 ? " " + d : d)
    }
    return d
  },
  eo = (...e) => {
    let t = 0,
      o, r, c = "";
    for (; t < e.length;)(o = e[t++]) && (r = Ce(o)) && (c && (c += " "), c += r);
    return c
  },
  Ce = e => {
    if (typeof e == "string") return e;
    let t, o = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Ce(e[r])) && (o && (o += " "), o += t);
    return o
  },
  oo = (e, ...t) => {
    let o, r, c, m;
    const a = d => {
        const u = t.reduce((h, v) => v(h), e());
        return o = Ke(u), r = o.cache.get, c = o.cache.set, m = b, b(d)
      },
      b = d => {
        const u = r(d);
        if (u) return u;
        const h = Ze(d, o);
        return c(d, h), h
      };
    return m = a, (...d) => m(eo(...d))
  },
  ro = [],
  f = e => {
    const t = o => o[e] || ro;
    return t.isThemeGetter = !0, t
  },
  Ae = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Se = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  to = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  so = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  no = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ao = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  io = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  lo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  I = e => to.test(e),
  p = e => !!e && !Number.isNaN(Number(e)),
  R = e => !!e && Number.isInteger(Number(e)),
  te = e => e.endsWith("%") && p(e.slice(0, -1)),
  S = e => so.test(e),
  Ie = () => !0,
  co = e => no.test(e) && !ao.test(e),
  ae = () => !1,
  mo = e => io.test(e),
  po = e => lo.test(e),
  bo = e => !s(e) && !n(e),
  uo = e => M(e, Pe, ae),
  s = e => Ae.test(e),
  O = e => M(e, Te, co),
  we = e => M(e, vo, p),
  fo = e => M(e, Ee, Ie),
  go = e => M(e, Ge, ae),
  ke = e => M(e, Re, ae),
  ho = e => M(e, Me, po),
  J = e => M(e, Le, mo),
  n = e => Se.test(e),
  B = e => N(e, Te),
  wo = e => N(e, Ge),
  xe = e => N(e, Re),
  ko = e => N(e, Pe),
  xo = e => N(e, Me),
  H = e => N(e, Le, !0),
  yo = e => N(e, Ee, !0),
  M = (e, t, o) => {
    const r = Ae.exec(e);
    return r ? r[1] ? t(r[1]) : o(r[2]) : !1
  },
  N = (e, t, o = !1) => {
    const r = Se.exec(e);
    return r ? r[1] ? t(r[1]) : o : !1
  },
  Re = e => e === "position" || e === "percentage",
  Me = e => e === "image" || e === "url",
  Pe = e => e === "length" || e === "size" || e === "bg-size",
  Te = e => e === "length",
  vo = e => e === "number",
  Ge = e => e === "family-name",
  Ee = e => e === "number" || e === "weight",
  Le = e => e === "shadow",
  zo = () => {
    const e = f("color"),
      t = f("font"),
      o = f("text"),
      r = f("font-weight"),
      c = f("tracking"),
      m = f("leading"),
      a = f("breakpoint"),
      b = f("container"),
      d = f("spacing"),
      u = f("radius"),
      h = f("shadow"),
      v = f("inset-shadow"),
      A = f("text-shadow"),
      P = f("drop-shadow"),
      T = f("blur"),
      z = f("perspective"),
      x = f("aspect"),
      G = f("ease"),
      D = f("animate"),
      F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      j = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      V = () => [...j(), n, s],
      E = () => ["auto", "hidden", "clip", "visible", "scroll"],
      W = () => ["auto", "contain", "none"],
      i = () => [n, s, d],
      y = () => [I, "full", "auto", ...i()],
      ie = () => [R, "none", "subgrid", n, s],
      le = () => ["auto", {
        span: ["full", R, n, s]
      }, R, n, s],
      $ = () => [R, "auto", n, s],
      ce = () => ["auto", "min", "max", "fr", n, s],
      Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      _ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      C = () => ["auto", ...i()],
      L = () => [I, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...i()],
      Z = () => [I, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...i()],
      ee = () => [I, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...i()],
      l = () => [e, n, s],
      de = () => [...j(), xe, ke, {
        position: [n, s]
      }],
      me = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }],
      pe = () => ["auto", "cover", "contain", ko, uo, {
        size: [n, s]
      }],
      oe = () => [te, B, O],
      w = () => ["", "none", "full", u, n, s],
      k = () => ["", p, B, O],
      U = () => ["solid", "dashed", "dotted", "double"],
      be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      g = () => [p, te, xe, ke],
      ue = () => ["", "none", T, n, s],
      Y = () => ["none", p, n, s],
      q = () => ["none", p, n, s],
      re = () => [p, n, s],
      X = () => [I, "full", ...i()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [S],
        breakpoint: [S],
        color: [Ie],
        container: [S],
        "drop-shadow": [S],
        ease: ["in", "out", "in-out"],
        font: [bo],
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
          aspect: ["auto", "square", I, s, n, x]
        }],
        container: ["container"],
        columns: [{
          columns: [p, s, n, b]
        }],
        "break-after": [{
          "break-after": F()
        }],
        "break-before": [{
          "break-before": F()
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
          overflow: E()
        }],
        "overflow-x": [{
          "overflow-x": E()
        }],
        "overflow-y": [{
          "overflow-y": E()
        }],
        overscroll: [{
          overscroll: W()
        }],
        "overscroll-x": [{
          "overscroll-x": W()
        }],
        "overscroll-y": [{
          "overscroll-y": W()
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
          z: [R, "auto", n, s]
        }],
        basis: [{
          basis: [I, "full", "auto", b, ...i()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [p, I, "auto", "initial", "none", s]
        }],
        grow: [{
          grow: ["", p, n, s]
        }],
        shrink: [{
          shrink: ["", p, n, s]
        }],
        order: [{
          order: [R, "first", "last", "none", n, s]
        }],
        "grid-cols": [{
          "grid-cols": ie()
        }],
        "col-start-end": [{
          col: le()
        }],
        "col-start": [{
          "col-start": $()
        }],
        "col-end": [{
          "col-end": $()
        }],
        "grid-rows": [{
          "grid-rows": ie()
        }],
        "row-start-end": [{
          row: le()
        }],
        "row-start": [{
          "row-start": $()
        }],
        "row-end": [{
          "row-end": $()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ce()
        }],
        "auto-rows": [{
          "auto-rows": ce()
        }],
        gap: [{
          gap: i()
        }],
        "gap-x": [{
          "gap-x": i()
        }],
        "gap-y": [{
          "gap-y": i()
        }],
        "justify-content": [{
          justify: [...Q(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [..._(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ..._()]
        }],
        "align-content": [{
          content: ["normal", ...Q()]
        }],
        "align-items": [{
          items: [..._(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ..._(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": Q()
        }],
        "place-items": [{
          "place-items": [..._(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ..._()]
        }],
        p: [{
          p: i()
        }],
        px: [{
          px: i()
        }],
        py: [{
          py: i()
        }],
        ps: [{
          ps: i()
        }],
        pe: [{
          pe: i()
        }],
        pbs: [{
          pbs: i()
        }],
        pbe: [{
          pbe: i()
        }],
        pt: [{
          pt: i()
        }],
        pr: [{
          pr: i()
        }],
        pb: [{
          pb: i()
        }],
        pl: [{
          pl: i()
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
          "space-x": i()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": i()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: L()
        }],
        "inline-size": [{
          inline: ["auto", ...Z()]
        }],
        "min-inline-size": [{
          "min-inline": ["auto", ...Z()]
        }],
        "max-inline-size": [{
          "max-inline": ["none", ...Z()]
        }],
        "block-size": [{
          block: ["auto", ...ee()]
        }],
        "min-block-size": [{
          "min-block": ["auto", ...ee()]
        }],
        "max-block-size": [{
          "max-block": ["none", ...ee()]
        }],
        w: [{
          w: [b, "screen", ...L()]
        }],
        "min-w": [{
          "min-w": [b, "screen", "none", ...L()]
        }],
        "max-w": [{
          "max-w": [b, "screen", "none", "prose", {
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
          text: ["base", o, B, O]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [r, yo, fo]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", te, s]
        }],
        "font-family": [{
          font: [wo, go, t]
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
          tracking: [c, n, s]
        }],
        "line-clamp": [{
          "line-clamp": [p, "none", n, we]
        }],
        leading: [{
          leading: [m, ...i()]
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
          decoration: [...U(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [p, "from-font", "auto", n, O]
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
          indent: i()
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
          bg: de()
        }],
        "bg-repeat": [{
          bg: me()
        }],
        "bg-size": [{
          bg: pe()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, R, n, s],
            radial: ["", n, s],
            conic: [R, n, s]
          }, xo, ho]
        }],
        "bg-color": [{
          bg: l()
        }],
        "gradient-from-pos": [{
          from: oe()
        }],
        "gradient-via-pos": [{
          via: oe()
        }],
        "gradient-to-pos": [{
          to: oe()
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
          border: [...U(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...U(), "hidden", "none"]
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
        "border-color-bs": [{
          "border-bs": l()
        }],
        "border-color-be": [{
          "border-be": l()
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
          outline: [...U(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [p, n, s]
        }],
        "outline-w": [{
          outline: ["", p, B, O]
        }],
        "outline-color": [{
          outline: l()
        }],
        shadow: [{
          shadow: ["", "none", h, H, J]
        }],
        "shadow-color": [{
          shadow: l()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", v, H, J]
        }],
        "inset-shadow-color": [{
          "inset-shadow": l()
        }],
        "ring-w": [{
          ring: k()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: l()
        }],
        "ring-offset-w": [{
          "ring-offset": [p, O]
        }],
        "ring-offset-color": [{
          "ring-offset": l()
        }],
        "inset-ring-w": [{
          "inset-ring": k()
        }],
        "inset-ring-color": [{
          "inset-ring": l()
        }],
        "text-shadow": [{
          "text-shadow": ["none", A, H, J]
        }],
        "text-shadow-color": [{
          "text-shadow": l()
        }],
        opacity: [{
          opacity: [p, n, s]
        }],
        "mix-blend": [{
          "mix-blend": [...be(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": be()
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
          "mask-linear-from": g()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": g()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": l()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": l()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": g()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": g()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": l()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": l()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": g()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": g()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": l()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": l()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": g()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": g()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": l()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": l()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": g()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": g()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": l()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": l()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": g()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": g()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": l()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": l()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": g()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": g()
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
          "mask-radial-from": g()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": g()
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
          "mask-radial-at": j()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [p]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": g()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": g()
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
          mask: de()
        }],
        "mask-repeat": [{
          mask: me()
        }],
        "mask-size": [{
          mask: pe()
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
          blur: ue()
        }],
        brightness: [{
          brightness: [p, n, s]
        }],
        contrast: [{
          contrast: [p, n, s]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", P, H, J]
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
          "backdrop-blur": ue()
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
          "border-spacing": i()
        }],
        "border-spacing-x": [{
          "border-spacing-x": i()
        }],
        "border-spacing-y": [{
          "border-spacing-y": i()
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
          animate: ["none", D, n, s]
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
          rotate: Y()
        }],
        "rotate-x": [{
          "rotate-x": Y()
        }],
        "rotate-y": [{
          "rotate-y": Y()
        }],
        "rotate-z": [{
          "rotate-z": Y()
        }],
        scale: [{
          scale: q()
        }],
        "scale-x": [{
          "scale-x": q()
        }],
        "scale-y": [{
          "scale-y": q()
        }],
        "scale-z": [{
          "scale-z": q()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: re()
        }],
        "skew-x": [{
          "skew-x": re()
        }],
        "skew-y": [{
          "skew-y": re()
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
          translate: X()
        }],
        "translate-x": [{
          "translate-x": X()
        }],
        "translate-y": [{
          "translate-y": X()
        }],
        "translate-z": [{
          "translate-z": X()
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
          "scroll-m": i()
        }],
        "scroll-mx": [{
          "scroll-mx": i()
        }],
        "scroll-my": [{
          "scroll-my": i()
        }],
        "scroll-ms": [{
          "scroll-ms": i()
        }],
        "scroll-me": [{
          "scroll-me": i()
        }],
        "scroll-mbs": [{
          "scroll-mbs": i()
        }],
        "scroll-mbe": [{
          "scroll-mbe": i()
        }],
        "scroll-mt": [{
          "scroll-mt": i()
        }],
        "scroll-mr": [{
          "scroll-mr": i()
        }],
        "scroll-mb": [{
          "scroll-mb": i()
        }],
        "scroll-ml": [{
          "scroll-ml": i()
        }],
        "scroll-p": [{
          "scroll-p": i()
        }],
        "scroll-px": [{
          "scroll-px": i()
        }],
        "scroll-py": [{
          "scroll-py": i()
        }],
        "scroll-ps": [{
          "scroll-ps": i()
        }],
        "scroll-pe": [{
          "scroll-pe": i()
        }],
        "scroll-pbs": [{
          "scroll-pbs": i()
        }],
        "scroll-pbe": [{
          "scroll-pbe": i()
        }],
        "scroll-pt": [{
          "scroll-pt": i()
        }],
        "scroll-pr": [{
          "scroll-pr": i()
        }],
        "scroll-pb": [{
          "scroll-pb": i()
        }],
        "scroll-pl": [{
          "scroll-pl": i()
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
          stroke: [p, B, O, we]
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
  Co = oo(zo);
export {
  Co as t
};