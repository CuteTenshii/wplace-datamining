import {
  $ as e,
  W as t,
  Z as n,
  et as r,
  jt as i,
  tt as a
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
var o = [`top`, `right`, `bottom`, `left`],
  s = Math.min,
  c = Math.max,
  l = Math.round,
  u = Math.floor,
  d = e => ({
    x: e,
    y: e
  }),
  f = {
    left: `right`,
    right: `left`,
    bottom: `top`,
    top: `bottom`
  };

function p(e, t, n) {
  return c(e, s(t, n))
}

function m(e, t) {
  return typeof e == `function` ? e(t) : e
}

function h(e) {
  return e.split(`-`)[0]
}

function g(e) {
  return e.split(`-`)[1]
}

function _(e) {
  return e === `x` ? `y` : `x`
}

function v(e) {
  return e === `y` ? `height` : `width`
}

function y(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`
}

function b(e) {
  return _(y(e))
}

function x(e, t, n) {
  n === void 0 && (n = !1);
  let r = g(e),
    i = b(e),
    a = v(i),
    o = i === `x` ? r === (n ? `end` : `start`) ? `right` : `left` : r === `start` ? `bottom` : `top`;
  return t.reference[a] > t.floating[a] && (o = A(o)), [o, A(o)]
}

function S(e) {
  let t = A(e);
  return [C(e), t, C(t)]
}

function C(e) {
  return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`)
}
var w = [`left`, `right`],
  T = [`right`, `left`],
  E = [`top`, `bottom`],
  D = [`bottom`, `top`];

function O(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? t ? T : w : t ? w : T;
    case `left`:
    case `right`:
      return t ? E : D;
    default:
      return []
  }
}

function k(e, t, n, r) {
  let i = g(e),
    a = O(h(e), n === `start`, r);
  return i && (a = a.map(e => e + `-` + i), t && (a = a.concat(a.map(C)))), a
}

function A(e) {
  let t = h(e);
  return f[t] + e.slice(t.length)
}

function j(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  }
}

function M(e) {
  return typeof e == `number` ? {
    top: e,
    right: e,
    bottom: e,
    left: e
  } : j(e)
}

function N(e) {
  let {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  }
}

function P(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e, a = y(t), o = b(t), s = v(o), c = h(t), l = a === `y`, u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
  switch (c) {
    case `top`:
      p = {
        x: u,
        y: r.y - i.height
      };
      break;
    case `bottom`:
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case `right`:
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case `left`:
      p = {
        x: r.x - i.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      }
  }
  switch (g(t)) {
    case `start`:
      p[o] -= f * (n && l ? -1 : 1);
      break;
    case `end`:
      p[o] += f * (n && l ? -1 : 1)
  }
  return p
}
async function F(e, t) {
  t === void 0 && (t = {});
  let {
    x: n,
    y: r,
    platform: i,
    rects: a,
    elements: o,
    strategy: s
  } = e, {
    boundary: c = `clippingAncestors`,
    rootBoundary: l = `viewport`,
    elementContext: u = `floating`,
    altBoundary: d = !1,
    padding: f = 0
  } = m(t, e), p = M(f), h = o[d ? u === `floating` ? `reference` : `floating` : u], g = N(await i.getClippingRect({
    element: await (i.isElement == null ? void 0 : i.isElement(h)) ?? !0 ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
    boundary: c,
    rootBoundary: l,
    strategy: s
  })), _ = u === `floating` ? {
    x: n,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), y = await (i.isElement == null ? void 0 : i.isElement(v)) && await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  }, b = N(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: _,
    offsetParent: v,
    strategy: s
  }) : _);
  return {
    top: (g.top - b.top + p.top) / y.y,
    bottom: (b.bottom - g.bottom + p.bottom) / y.y,
    left: (g.left - b.left + p.left) / y.x,
    right: (b.right - g.right + p.right) / y.x
  }
}
var I = 50,
  L = async (e, t, n) => {
    let {
      placement: r = `bottom`,
      strategy: i = `absolute`,
      middleware: a = [],
      platform: o
    } = n, s = o.detectOverflow ? o : {
      ...o,
      detectOverflow: F
    }, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }), {
      x: u,
      y: d
    } = P(l, r, c), f = r, p = 0, m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let {
        name: g,
        fn: _
      } = h, {
        x: v,
        y,
        data: b,
        reset: x
      } = await _({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: m,
        rects: l,
        platform: s,
        elements: {
          reference: e,
          floating: t
        }
      });
      u = v ?? u, d = y ?? d, m[g] = {
        ...m[g],
        ...b
      }, x && p < I && (p++, typeof x == `object` && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : x.rects), {
        x: u,
        y: d
      } = P(l, f, c)), n = -1)
    }
    return {
      x: u,
      y: d,
      placement: f,
      strategy: i,
      middlewareData: m
    }
  }, ee = e => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
        x: n,
        y: r,
        placement: i,
        rects: a,
        platform: o,
        elements: c,
        middlewareData: l
      } = t, {
        element: u,
        padding: d = 0
      } = m(e, t) || {};
      if (u == null) return {};
      let f = M(d),
        h = {
          x: n,
          y: r
        },
        _ = b(i),
        y = v(_),
        x = await o.getDimensions(u),
        S = _ === `y`,
        C = S ? `top` : `left`,
        w = S ? `bottom` : `right`,
        T = S ? `clientHeight` : `clientWidth`,
        E = a.reference[y] + a.reference[_] - h[_] - a.floating[y],
        D = h[_] - a.reference[_],
        O = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u)),
        k = O ? O[T] : 0;
      (!k || !await (o.isElement == null ? void 0 : o.isElement(O))) && (k = c.floating[T] || a.floating[y]);
      let A = E / 2 - D / 2,
        j = k / 2 - x[y] / 2 - 1,
        N = s(f[C], j),
        P = s(f[w], j),
        F = N,
        I = k - x[y] - P,
        L = k / 2 - x[y] / 2 + A,
        ee = p(F, L, I),
        te = !l.arrow && g(i) != null && L !== ee && a.reference[y] / 2 - (L < F ? N : P) - x[y] / 2 < 0,
        ne = te ? L < F ? L - F : L - I : 0;
      return {
        [_]: h[_] + ne,
        data: {
          [_]: ee,
          centerOffset: L - ee - ne,
          ...te && {
            alignmentOffset: ne
          }
        },
        reset: te
      }
    }
  }), te = function(e) {
    return e === void 0 && (e = {}), {
      name: `flip`,
      options: e,
      async fn(t) {
        var n, r;
        let {
          placement: i,
          middlewareData: a,
          rects: o,
          initialPlacement: s,
          platform: c,
          elements: l
        } = t, {
          mainAxis: u = !0,
          crossAxis: d = !0,
          fallbackPlacements: f,
          fallbackStrategy: p = `bestFit`,
          fallbackAxisSideDirection: g = `none`,
          flipAlignment: _ = !0,
          ...v
        } = m(e, t);
        if ((n = a.arrow) != null && n.alignmentOffset) return {};
        let b = h(i),
          C = y(s),
          w = h(s) === s,
          T = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
          E = f || (w || !_ ? [A(s)] : S(s)),
          D = g !== `none`;
        !f && D && E.push(...k(s, _, g, T));
        let O = [s, ...E],
          j = await c.detectOverflow(t, v),
          M = [],
          N = ((r = a.flip) == null ? void 0 : r.overflows) || [];
        if (u && M.push(j[b]), d) {
          let e = x(i, o, T);
          M.push(j[e[0]], j[e[1]])
        }
        if (N = [...N, {
            placement: i,
            overflows: M
          }], !M.every(e => e <= 0)) {
          var P, F;
          let e = (((P = a.flip) == null ? void 0 : P.index) || 0) + 1,
            t = O[e];
          if (t && (d !== `alignment` || C === y(t) || N.every(e => y(e.placement) !== C || e.overflows[0] > 0))) return {
            data: {
              index: e,
              overflows: N
            },
            reset: {
              placement: t
            }
          };
          let n = (F = N.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) == null ? void 0 : F.placement;
          if (!n) switch (p) {
            case `bestFit`: {
              var I;
              let e = (I = N.filter(e => {
                if (D) {
                  let t = y(e.placement);
                  return t === C || t === `y`
                }
                return !0
              }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) == null ? void 0 : I[0];
              e && (n = e);
              break
            }
            case `initialPlacement`:
              n = s
          }
          if (i !== n) return {
            reset: {
              placement: n
            }
          }
        }
        return {}
      }
    }
  };

function ne(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  }
}

function re(e) {
  return o.some(t => e[t] >= 0)
}
var ie = function(e) {
    return e === void 0 && (e = {}), {
      name: `hide`,
      options: e,
      async fn(t) {
        let {
          rects: n,
          platform: r
        } = t, {
          strategy: i = `referenceHidden`,
          ...a
        } = m(e, t);
        switch (i) {
          case `referenceHidden`: {
            let e = ne(await r.detectOverflow(t, {
              ...a,
              elementContext: `reference`
            }), n.reference);
            return {
              data: {
                referenceHiddenOffsets: e,
                referenceHidden: re(e)
              }
            }
          }
          case `escaped`: {
            let e = ne(await r.detectOverflow(t, {
              ...a,
              altBoundary: !0
            }), n.floating);
            return {
              data: {
                escapedOffsets: e,
                escaped: re(e)
              }
            }
          }
          default:
            return {}
        }
      }
    }
  },
  ae = new Set([`left`, `top`]);
async function oe(e, t) {
  let {
    placement: n,
    platform: r,
    elements: i
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = h(n), s = g(n), c = y(n) === `y`, l = ae.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = m(t, e), {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: _
  } = typeof d == `number` ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof _ == `number` && (p = s === `end` ? _ * -1 : _), c ? {
    x: p * u,
    y: f * l
  } : {
    x: f * l,
    y: p * u
  }
}
var se = function(e) {
    return e === void 0 && (e = 0), {
      name: `offset`,
      options: e,
      async fn(t) {
        var n, r;
        let {
          x: i,
          y: a,
          placement: o,
          middlewareData: s
        } = t, c = await oe(t, e);
        return o === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
          x: i + c.x,
          y: a + c.y,
          data: {
            ...c,
            placement: o
          }
        }
      }
    }
  },
  ce = function(e) {
    return e === void 0 && (e = {}), {
      name: `shift`,
      options: e,
      async fn(t) {
        let {
          x: n,
          y: r,
          placement: i,
          platform: a
        } = t, {
          mainAxis: o = !0,
          crossAxis: s = !1,
          limiter: c = {
            fn: e => {
              let {
                x: t,
                y: n
              } = e;
              return {
                x: t,
                y: n
              }
            }
          },
          ...l
        } = m(e, t), u = {
          x: n,
          y: r
        }, d = await a.detectOverflow(t, l), f = y(h(i)), g = _(f), v = u[g], b = u[f];
        if (o) {
          let e = g === `y` ? `top` : `left`,
            t = g === `y` ? `bottom` : `right`,
            n = v + d[e],
            r = v - d[t];
          v = p(n, v, r)
        }
        if (s) {
          let e = f === `y` ? `top` : `left`,
            t = f === `y` ? `bottom` : `right`,
            n = b + d[e],
            r = b - d[t];
          b = p(n, b, r)
        }
        let x = c.fn({
          ...t,
          [g]: v,
          [f]: b
        });
        return {
          ...x,
          data: {
            x: x.x - n,
            y: x.y - r,
            enabled: {
              [g]: o,
              [f]: s
            }
          }
        }
      }
    }
  },
  le = function(e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn(t) {
        let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          middlewareData: o
        } = t, {
          offset: s = 0,
          mainAxis: c = !0,
          crossAxis: l = !0
        } = m(e, t), u = {
          x: n,
          y: r
        }, d = y(i), f = _(d), p = u[f], g = u[d], v = m(s, t), b = typeof v == `number` ? {
          mainAxis: v,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...v
        };
        if (c) {
          let e = f === `y` ? `height` : `width`,
            t = a.reference[f] - a.floating[e] + b.mainAxis,
            n = a.reference[f] + a.reference[e] - b.mainAxis;
          p < t ? p = t : p > n && (p = n)
        }
        if (l) {
          var x, S;
          let e = f === `y` ? `width` : `height`,
            t = ae.has(h(i)),
            n = a.reference[d] - a.floating[e] + (t && ((x = o.offset) == null ? void 0 : x[d]) || 0) + (t ? 0 : b.crossAxis),
            r = a.reference[d] + a.reference[e] + (t ? 0 : ((S = o.offset) == null ? void 0 : S[d]) || 0) - (t ? b.crossAxis : 0);
          g < n ? g = n : g > r && (g = r)
        }
        return {
          [f]: p,
          [d]: g
        }
      }
    }
  },
  ue = function(e) {
    return e === void 0 && (e = {}), {
      name: `size`,
      options: e,
      async fn(t) {
        var n, r;
        let {
          placement: i,
          rects: a,
          platform: o,
          elements: l
        } = t, {
          apply: u = () => {},
          ...d
        } = m(e, t), f = await o.detectOverflow(t, d), p = h(i), _ = g(i), v = y(i) === `y`, {
          width: b,
          height: x
        } = a.floating, S, C;
        p === `top` || p === `bottom` ? (S = p, C = _ === (await (o.isRTL == null ? void 0 : o.isRTL(l.floating)) ? `start` : `end`) ? `left` : `right`) : (C = p, S = _ === `end` ? `top` : `bottom`);
        let w = x - f.top - f.bottom,
          T = b - f.left - f.right,
          E = s(x - f[S], w),
          D = s(b - f[C], T),
          O = !t.middlewareData.shift,
          k = E,
          A = D;
        if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = T), (r = t.middlewareData.shift) != null && r.enabled.y && (k = w), O && !_) {
          let e = c(f.left, 0),
            t = c(f.right, 0),
            n = c(f.top, 0),
            r = c(f.bottom, 0);
          v ? A = b - 2 * (e !== 0 || t !== 0 ? e + t : c(f.left, f.right)) : k = x - 2 * (n !== 0 || r !== 0 ? n + r : c(f.top, f.bottom))
        }
        await u({
          ...t,
          availableWidth: A,
          availableHeight: k
        });
        let j = await o.getDimensions(l.floating);
        return b !== j.width || x !== j.height ? {
          reset: {
            rects: !0
          }
        } : {}
      }
    }
  };

function de() {
  return typeof window < `u`
}

function R(e) {
  return fe(e) ? (e.nodeName || ``).toLowerCase() : `#document`
}

function z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function B(e) {
  var t;
  return (t = (fe(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function fe(e) {
  return de() ? e instanceof Node || e instanceof z(e).Node : !1
}

function V(e) {
  return de() ? e instanceof Element || e instanceof z(e).Element : !1
}

function H(e) {
  return de() ? e instanceof HTMLElement || e instanceof z(e).HTMLElement : !1
}

function pe(e) {
  return !de() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof z(e).ShadowRoot
}

function U(e) {
  let {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = K(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`
}

function me(e) {
  return /^(table|td|th)$/.test(R(e))
}

function he(e) {
  try {
    if (e.matches(`:popover-open`)) return !0
  } catch {}
  try {
    return e.matches(`:modal`)
  } catch {
    return !1
  }
}
var ge = /transform|translate|scale|rotate|perspective|filter/,
  _e = /paint|layout|strict|content/,
  W = e => !!e && e !== `none`,
  ve;

function ye(e) {
  let t = V(e) ? K(e) : e;
  return W(t.transform) || W(t.translate) || W(t.scale) || W(t.rotate) || W(t.perspective) || !xe() && (W(t.backdropFilter) || W(t.filter)) || ge.test(t.willChange || ``) || _e.test(t.contain || ``)
}

function be(e) {
  let t = q(e);
  for (; H(t) && !G(t);) {
    if (ye(t)) return t;
    if (he(t)) return null;
    t = q(t)
  }
  return null
}

function xe() {
  return ve ?? (ve = typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`)), ve
}

function G(e) {
  return /^(html|body|#document)$/.test(R(e))
}

function K(e) {
  return z(e).getComputedStyle(e)
}

function Se(e) {
  return V(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  }
}

function q(e) {
  if (R(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || pe(e) && e.host || B(e);
  return pe(t) ? t.host : t
}

function Ce(e) {
  let t = q(e);
  return G(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : H(t) && U(t) ? t : Ce(t)
}

function we(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  let i = Ce(e),
    a = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = z(i);
  if (a) {
    let e = Te(o);
    return t.concat(o, o.visualViewport || [], U(i) ? i : [], e && n ? we(e) : [])
  }
  return t.concat(i, we(i, [], n))
}

function Te(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Ee(e) {
  let t = K(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = H(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = l(n) !== a || l(r) !== o;
  return s && (n = a, r = o), {
    width: n,
    height: r,
    $: s
  }
}

function De(e) {
  return V(e) ? e : e.contextElement
}

function J(e) {
  let t = De(e);
  if (!H(t)) return d(1);
  let n = t.getBoundingClientRect(),
    {
      width: r,
      height: i,
      $: a
    } = Ee(t),
    o = (a ? l(n.width) : n.width) / r,
    s = (a ? l(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  }
}
var Oe = d(0);

function ke(e) {
  let t = z(e);
  return !xe() || !t.visualViewport ? Oe : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  }
}

function Ae(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== z(e) ? !1 : t
}

function Y(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  let i = e.getBoundingClientRect(),
    a = De(e),
    o = d(1);
  t && (r ? V(r) && (o = J(r)) : o = J(e));
  let s = Ae(a, n, r) ? ke(a) : d(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    f = i.height / o.y;
  if (a) {
    let e = z(a),
      t = r && V(r) ? z(r) : r,
      n = e,
      i = Te(n);
    for (; i && r && t !== n;) {
      let e = J(i),
        t = i.getBoundingClientRect(),
        r = K(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      c *= e.x, l *= e.y, u *= e.x, f *= e.y, c += a, l += o, n = z(i), i = Te(n)
    }
  }
  return N({
    width: u,
    height: f,
    x: c,
    y: l
  })
}

function je(e, t) {
  let n = Se(e).scrollLeft;
  return t ? t.left + n : Y(B(e)).left + n
}

function Me(e, t) {
  let n = e.getBoundingClientRect();
  return {
    x: n.left + t.scrollLeft - je(e, n),
    y: n.top + t.scrollTop
  }
}

function Ne(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e, a = i === `fixed`, o = B(r), s = t ? he(t.floating) : !1;
  if (r === o || s && a) return n;
  let c = {
      scrollLeft: 0,
      scrollTop: 0
    },
    l = d(1),
    u = d(0),
    f = H(r);
  if ((f || !f && !a) && ((R(r) !== `body` || U(o)) && (c = Se(r)), f)) {
    let e = Y(r);
    l = J(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
  }
  let p = o && !f && !a ? Me(o, c) : d(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + p.y
  }
}

function Pe(e) {
  return Array.from(e.getClientRects())
}

function Fe(e) {
  let t = B(e),
    n = Se(e),
    r = e.ownerDocument.body,
    i = c(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = c(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    o = -n.scrollLeft + je(e),
    s = -n.scrollTop;
  return K(r).direction === `rtl` && (o += c(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  }
}
var Ie = 25;

function Le(e, t) {
  let n = z(e),
    r = B(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    a = i.width, o = i.height;
    let e = xe();
    (!e || e && t === `fixed`) && (s = i.offsetLeft, c = i.offsetTop)
  }
  let l = je(r);
  if (l <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i = e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
      o = Math.abs(r.clientWidth - t.clientWidth - i);
    o <= Ie && (a -= o)
  } else l <= Ie && (a += l);
  return {
    width: a,
    height: o,
    x: s,
    y: c
  }
}

function Re(e, t) {
  let n = Y(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = H(e) ? J(e) : d(1);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y
  }
}

function ze(e, t, n) {
  let r;
  if (t === `viewport`) r = Le(e, n);
  else if (t === `document`) r = Fe(B(e));
  else if (V(t)) r = Re(t, n);
  else {
    let n = ke(e);
    r = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    }
  }
  return N(r)
}

function Be(e, t) {
  let n = q(e);
  return n === t || !V(n) || G(n) ? !1 : K(n).position === `fixed` || Be(n, t)
}

function Ve(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = we(e, [], !1).filter(e => V(e) && R(e) !== `body`),
    i = null,
    a = K(e).position === `fixed`,
    o = a ? q(e) : e;
  for (; V(o) && !G(o);) {
    let t = K(o),
      n = ye(o);
    !n && t.position === `fixed` && (i = null), (a ? !n && !i : !n && t.position === `static` && i && (i.position === `absolute` || i.position === `fixed`) || U(o) && !n && Be(e, o)) ? r = r.filter(e => e !== o) : i = t, o = q(o)
  }
  return t.set(e, r), r
}

function He(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e, a = [...n === `clippingAncestors` ? he(t) ? [] : Ve(t, this._c) : [].concat(n), r], o = ze(t, a[0], i), l = o.top, u = o.right, d = o.bottom, f = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = ze(t, a[e], i);
    l = c(n.top, l), u = s(n.right, u), d = s(n.bottom, d), f = c(n.left, f)
  }
  return {
    width: u - f,
    height: d - l,
    x: f,
    y: l
  }
}

function Ue(e) {
  let {
    width: t,
    height: n
  } = Ee(e);
  return {
    width: t,
    height: n
  }
}

function We(e, t, n) {
  let r = H(t),
    i = B(t),
    a = n === `fixed`,
    o = Y(e, !0, a, t),
    s = {
      scrollLeft: 0,
      scrollTop: 0
    },
    c = d(0);

  function l() {
    c.x = je(i)
  }
  if (r || !r && !a) {
    if ((R(t) !== `body` || U(i)) && (s = Se(t)), r) {
      let e = Y(t, !0, a, t);
      c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
    } else i && l()
  }
  a && !r && i && l();
  let u = i && !r && !a ? Me(i, s) : d(0);
  return {
    x: o.left + s.scrollLeft - c.x - u.x,
    y: o.top + s.scrollTop - c.y - u.y,
    width: o.width,
    height: o.height
  }
}

function Ge(e) {
  return K(e).position === `static`
}

function Ke(e, t) {
  if (!H(e) || K(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return B(e) === n && (n = n.ownerDocument.body), n
}

function qe(e, t) {
  let n = z(e);
  if (he(e)) return n;
  if (!H(e)) {
    let t = q(e);
    for (; t && !G(t);) {
      if (V(t) && !Ge(t)) return t;
      t = q(t)
    }
    return n
  }
  let r = Ke(e, t);
  for (; r && me(r) && Ge(r);) r = Ke(r, t);
  return r && G(r) && Ge(r) && !ye(r) ? n : r || be(e) || n
}
var Je = async function(e) {
  let t = this.getOffsetParent || qe,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: We(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};

function Ye(e) {
  return K(e).direction === `rtl`
}
var Xe = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ne,
  getDocumentElement: B,
  getClippingRect: He,
  getOffsetParent: qe,
  getElementRects: Je,
  getClientRects: Pe,
  getDimensions: Ue,
  getScale: J,
  isElement: V,
  isRTL: Ye
};

function Ze(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function Qe(e, t) {
  let n = null,
    r, i = B(e);

  function a() {
    var e;
    clearTimeout(r), (e = n) == null || e.disconnect(), n = null
  }

  function o(l, d) {
    l === void 0 && (l = !1), d === void 0 && (d = 1), a();
    let f = e.getBoundingClientRect(),
      {
        left: p,
        top: m,
        width: h,
        height: g
      } = f;
    if (l || t(), !h || !g) return;
    let _ = u(m),
      v = u(i.clientWidth - (p + h)),
      y = u(i.clientHeight - (m + g)),
      b = u(p),
      x = {
        rootMargin: -_ + `px ` + -v + `px ` + -y + `px ` + -b + `px`,
        threshold: c(0, s(1, d)) || 1
      },
      S = !0;

    function C(t) {
      let n = t[0].intersectionRatio;
      if (n !== d) {
        if (!S) return o();
        n ? o(!1, n) : r = setTimeout(() => {
          o(!1, 1e-7)
        }, 1e3)
      }
      n === 1 && !Ze(f, e.getBoundingClientRect()) && o(), S = !1
    }
    try {
      n = new IntersectionObserver(C, {
        ...x,
        root: i.ownerDocument
      })
    } catch {
      n = new IntersectionObserver(C, x)
    }
    n.observe(e)
  }
  return o(!0), a
}

function $e(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == `function`,
    layoutShift: s = typeof IntersectionObserver == `function`,
    animationFrame: c = !1
  } = r, l = De(e), u = i || a ? [...l ? we(l) : [], ...t ? we(t) : []] : [];
  u.forEach(e => {
    i && e.addEventListener(`scroll`, n, {
      passive: !0
    }), a && e.addEventListener(`resize`, n)
  });
  let d = l && s ? Qe(l, n) : null,
    f = -1,
    p = null;
  o && (p = new ResizeObserver(e => {
    let [r] = e;
    r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var e;
      (e = p) == null || e.observe(t)
    })), n()
  }), l && !c && p.observe(l), t && p.observe(t));
  let m, h = c ? Y(e) : null;
  c && g();

  function g() {
    let t = Y(e);
    h && !Ze(h, t) && n(), h = t, m = requestAnimationFrame(g)
  }
  return n(), () => {
    var e;
    u.forEach(e => {
      i && e.removeEventListener(`scroll`, n), a && e.removeEventListener(`resize`, n)
    }), d == null || d(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m)
  }
}
var et = se,
  tt = ce,
  nt = te,
  rt = ue,
  it = ie,
  at = ee,
  ot = le,
  st = (e, t, n) => {
    let r = new Map,
      i = {
        platform: Xe,
        ...n
      },
      a = {
        ...i.platform,
        _c: r
      };
    return L(e, t, {
      ...i,
      platform: a
    })
  };

function ct(e, n) {
  var o = a(),
    s = i(o);
  t(s, () => n.content), r(e, o)
}
var lt = 150,
  ut = 300,
  dt = 10,
  ft = `game-tooltip`,
  pt = 4,
  mt = 6,
  ht = {
    top: `bottom`,
    bottom: `top`,
    left: `right`,
    right: `left`
  },
  gt = `button, input, select, textarea`,
  _t = `a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), label, summary, [role="button"], [role="link"], [role="checkbox"], [role="switch"], [role="tab"], [role="menuitem"], [role="option"]`,
  vt, X, Z, Q, yt, bt = 0;

function xt() {
  if (!vt) {
    let e = document.createElement(`div`);
    e.id = ft, e.role = `tooltip`, e.hidden = !0, e.className = `pointer-events-none fixed top-0 left-0 z-[1200] w-max opacity-0 transition-opacity duration-150 motion-reduce:transition-none data-open:opacity-100`;
    let t = document.createElement(`div`);
    t.className = `game-tooltip bg-neutral text-neutral-content rounded-field max-w-[min(20rem,calc(100vw-1rem))] px-2 py-1 text-center text-sm leading-tight whitespace-pre-line [overflow-wrap:anywhere]`;
    let n = document.createElement(`div`);
    n.className = `game-tooltip-arrow`, e.append(t, n), vt = {
      root: e,
      body: t,
      arrow: n
    }
  }
  return vt
}

function St({
  content: t,
  shortcut: r
}) {
  let i = xt().body;
  X != null && X.snippet && e(X.snippet), i.textContent = typeof t == `string` ? t : ``;
  let a = typeof t == `string` ? void 0 : n(ct, {
    target: i,
    props: {
      content: t
    }
  });
  if (r) {
    let e = document.createElement(`kbd`);
    e.className = `kbd kbd-xs text-base-content touchscreen:hidden ml-1 rounded-md`, e.textContent = r, i.append(e)
  }
  return a
}
async function Ct(e) {
  var t;
  if ((X == null ? void 0 : X.anchor) !== e) return;
  let {
    root: n,
    arrow: r
  } = xt(), i = r.offsetWidth > 0, {
    x: a,
    y: o,
    placement: s,
    middlewareData: c
  } = await st(e, n, {
    strategy: `fixed`,
    placement: X.placement,
    middleware: [et(pt + (i ? mt : 2)), nt({
      padding: 8
    }), tt({
      padding: 8
    }), i && at({
      element: r,
      padding: 6
    }), it()]
  });
  if ((X == null ? void 0 : X.anchor) === e) {
    if (n.style.translate = `${Math.round(a)}px ${Math.round(o)}px`, n.style.visibility = (t = c.hide) != null && t.referenceHidden ? `hidden` : ``, i) {
      let e = s.split(`-`)[0],
        {
          x: t,
          y: n
        } = c.arrow ?? {};
      r.dataset.side = e, r.style.left = t == null ? `` : `${Math.round(t)}px`, r.style.top = n == null ? `` : `${Math.round(n)}px`, r.style.right = ``, r.style.bottom = ``, r.style[ht[e]] = `-${r.offsetWidth}px`
    }
    n.dataset.open = ``
  }
}

function wt(e, t, n) {
  if (clearTimeout(Z), Q = void 0, X && X.anchor !== e && $(), X) return;
  if (t.truncated) {
    var r;
    let n = (r = e.textContent) == null ? void 0 : r.replace(/\s+/g, ` `).trim(),
      i = e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight;
    if (!n || !i) return;
    t = {
      ...t,
      content: n
    }
  }
  if (Tt(e)) return;
  let i = xt().root,
    a = e.closest(`dialog`) ?? document.body;
  i.parentElement !== a && a.append(i), i.toggleAttribute(`data-pixel-ui`, !!e.closest(`[data-pixel-ui]`)), delete i.dataset.open, i.hidden = !1;
  let o = e.getAttribute(`aria-describedby`);
  !t.truncated && t.content !== e.getAttribute(`aria-label`) && e.setAttribute(`aria-describedby`, o ? `${o} ${ft}` : ft), X = {
    ...t,
    anchor: e,
    touch: n,
    describedBy: o,
    stopUpdates: () => {}
  }, X.snippet = St(t), X.stopUpdates = $e(e, i, () => void Ct(e)), document.addEventListener(`pointerdown`, Et, !0), document.addEventListener(`keydown`, Dt, !0), window.addEventListener(`blur`, $)
}

function Tt(e) {
  if (!document.documentElement.hasAttribute(`data-dashboard-privacy`)) return !1;
  let t = e => getComputedStyle(e).filter.includes(`blur(`);
  for (let n = e; n; n = n.parentElement)
    if (t(n)) return !0;
  return Array.from(e.querySelectorAll(`*`)).some(t)
}

function $() {
  if (clearTimeout(Z), Q = void 0, !X) return;
  let {
    anchor: t,
    describedBy: n,
    snippet: r,
    stopUpdates: i
  } = X;
  X = void 0, i(), r && e(r), n === null ? t.removeAttribute(`aria-describedby`) : t.setAttribute(`aria-describedby`, n);
  let {
    root: a,
    body: o
  } = xt();
  a.hidden = !0, o.textContent = ``, delete a.dataset.open, bt = performance.now(), document.removeEventListener(`pointerdown`, Et, !0), document.removeEventListener(`keydown`, Dt, !0), window.removeEventListener(`blur`, $)
}

function Et(e) {
  X != null && X.touch && !X.anchor.contains(e.target) && $()
}

function Dt(e) {
  e.key === `Escape` && $()
}

function Ot(e) {
  var t;
  return e.hasAttribute(`aria-label`) || e.hasAttribute(`aria-labelledby`) || !!((t = e.textContent) != null && t.trim()) || !!e.querySelector(`img[alt]:not([alt=""])`)
}

function kt(e, t = {}) {
  return jt(e || void 0, t)
}
var At = jt(``, {}, !0);

function jt(e, {
  placement: t = `top`,
  shortcut: n,
  toggle: r = !1
}, i = !1) {
  return a => {
    let o = yt === a;
    if (o && (yt = void 0), e === void 0) {
      o && (X == null ? void 0 : X.anchor) === a && $();
      return
    }
    let s = {
      content: e,
      placement: t,
      shortcut: n,
      truncated: i
    };
    if (o && (X == null ? void 0 : X.anchor) === a) {
      let t = X,
        r = t.content !== e || t.shortcut !== n;
      Object.assign(t, s), r && queueMicrotask(() => {
        X === t && (t.snippet = St(t))
      })
    }
    let c = typeof e == `string` && !i && a.matches(`button, a, [role]`) && !Ot(a);
    c && a.setAttribute(`aria-label`, e), typeof e == `string` && !i && (a.dataset.tooltip = e);
    let l;

    function u(e) {
      if (e.pointerType === `touch` || (X == null ? void 0 : X.anchor) === a) return;
      clearTimeout(Z), Q = a;
      let t = X || performance.now() - bt < ut;
      Z = setTimeout(() => wt(a, s, !1), t ? 0 : lt)
    }

    function d(e) {
      e.pointerType !== `touch` && (Q === a && (clearTimeout(Z), Q = void 0), (X == null ? void 0 : X.anchor) === a && !X.touch && $())
    }

    function f(e) {
      if (e.pointerType === `touch`) {
        l = {
          x: e.clientX,
          y: e.clientY
        };
        return
      }
      r || (Q === a || (X == null ? void 0 : X.anchor) === a) && $()
    }

    function p(e) {
      if (e.pointerType !== `touch` || !l) return;
      let t = Math.hypot(e.clientX - l.x, e.clientY - l.y) > dt;
      l = void 0, !t && (!r && e.target.closest(_t) || ((X == null ? void 0 : X.anchor) === a ? $() : wt(a, s, !0)))
    }

    function m(e) {
      e.target.matches(`:focus-visible`) && wt(a, s, !1)
    }

    function h(e) {
      (X == null ? void 0 : X.anchor) === a && !X.touch && !a.contains(e.relatedTarget) && $()
    }
    let g = a.matches(gt) ? a.parentElement : null,
      _ = !1;

    function v(e) {
      if (!a.disabled) {
        _ = !1;
        return
      }
      let t = a.getBoundingClientRect(),
        n = e.clientX >= t.left && e.clientX <= t.right && e.clientY >= t.top && e.clientY <= t.bottom;
      n !== _ && (_ = n, n ? u(e) : d(e))
    }

    function y(e) {
      _ && (_ = !1, d(e))
    }
    return a.addEventListener(`pointerenter`, u), a.addEventListener(`pointerleave`, d), a.addEventListener(`pointerdown`, f), a.addEventListener(`pointerup`, p), a.addEventListener(`focusin`, m), a.addEventListener(`focusout`, h), g == null || g.addEventListener(`pointermove`, v), g == null || g.addEventListener(`pointerleave`, y), () => {
      a.removeEventListener(`pointerenter`, u), a.removeEventListener(`pointerleave`, d), a.removeEventListener(`pointerdown`, f), a.removeEventListener(`pointerup`, p), a.removeEventListener(`focusin`, m), a.removeEventListener(`focusout`, h), g == null || g.removeEventListener(`pointermove`, v), g == null || g.removeEventListener(`pointerleave`, y), c && a.removeAttribute(`aria-label`), delete a.dataset.tooltip, Q === a && (clearTimeout(Z), Q = void 0), yt = a, queueMicrotask(() => {
        yt === a && (yt = void 0, (X == null ? void 0 : X.anchor) === a && $())
      })
    }
  }
}
export {
  st as a, ot as c, rt as d, $e as i, et as l, At as n, nt as o, at as r, it as s, kt as t, tt as u
};