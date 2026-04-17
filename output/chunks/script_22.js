import {
  a2 as O,
  C as ae,
  a8 as ne,
  A as x,
  G as z,
  a9 as ie,
  B as le,
  i as Q,
  D as ue,
  V as se,
  F as W,
  H as L,
  J as F,
  aa as oe,
  ab as de,
  ac as $,
  Z as te,
  ad as T,
  a3 as B,
  ae as ve,
  a5 as ce,
  af as pe,
  ag as _e,
  ah as Y,
  ai as ge,
  aj as he,
  ak as Ee,
  al as j,
  am as be,
  _ as re,
  a1 as fe,
  an as q,
  X as Te,
  ao as me,
  ap as we,
  aq as Ie,
  a0 as Ae,
  ar as Ce
} from "./ButFgnm2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "d1854705-9b24-4ef9-88fc-f4ce7f8f4280", e._sentryDebugIdIdentifier = "sentry-dbid-d1854705-9b24-4ef9-88fc-f4ce7f8f4280")
  } catch {}
})();

function xe(e, r) {
  return r
}

function Se(e, r, l) {
  for (var t = [], h = r.length, s, u = r.length, c = 0; c < h; c++) {
    let E = r[c];
    fe(E, () => {
      if (s) {
        if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
          var o = e.outrogroups;
          V(Y(s.done)), o.delete(s), o.size === 0 && (e.outrogroups = null)
        }
      } else u -= 1
    }, !1)
  }
  if (u === 0) {
    var i = t.length === 0 && l !== null;
    if (i) {
      var d = l,
        f = d.parentNode;
      Ie(f), f.append(d), e.items.clear()
    }
    V(r, !i)
  } else s = {
    pending: new Set(r),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function V(e, r = !0) {
  for (var l = 0; l < e.length; l++) Ae(e[l], r)
}
var ee;

function ke(e, r, l, t, h, s = null) {
  var u = e,
    c = new Map,
    i = (r & ne) !== 0;
  if (i) {
    var d = e;
    u = x ? z(ie(d)) : d.appendChild(O())
  }
  x && le();
  var f = null,
    E = pe(() => {
      var a = l();
      return _e(a) ? a : a == null ? [] : Y(a)
    }),
    o, v = !0;

  function w() {
    n.fallback = f, Ne(n, o, u, r, t), f !== null && (o.length === 0 ? (f.f & T) === 0 ? re(f) : (f.f ^= T, y(f, null, u)) : fe(f, () => {
      f = null
    }))
  }
  var C = ae(() => {
      o = Q(E);
      var a = o.length;
      let S = !1;
      if (x) {
        var N = ue(u) === se;
        N !== (a === 0) && (u = W(), z(u), L(!1), S = !0)
      }
      for (var _ = new Set, I = te, D = ce(), p = 0; p < a; p += 1) {
        x && F.nodeType === oe && F.data === de && (u = F, S = !0, L(!1));
        var A = o[p],
          R = t(A, p),
          g = v ? null : c.get(R);
        g ? (g.v && $(g.v, A), g.i && $(g.i, p), D && I.unskip_effect(g.e)) : (g = De(c, v ? u : ee ?? (ee = O()), A, R, p, h, r, l), v || (g.e.f |= T), c.set(R, g)), _.add(R)
      }
      if (a === 0 && s && !f && (v ? f = B(() => s(u)) : (f = B(() => s(ee ?? (ee = O()))), f.f |= T)), a > _.size && ve(), x && a > 0 && z(W()), !v)
        if (D) {
          for (const [H, M] of c) _.has(H) || I.skip_effect(M.e);
          I.oncommit(w), I.ondiscard(() => {})
        } else w();
      S && L(!0), Q(E)
    }),
    n = {
      effect: C,
      items: c,
      outrogroups: null,
      fallback: f
    };
  v = !1, x && (u = F)
}

function k(e) {
  for (; e !== null && (e.f & me) === 0;) e = e.next;
  return e
}

function Ne(e, r, l, t, h) {
  var g, H, M, X, G, J, U, Z, K;
  var s = (t & we) !== 0,
    u = r.length,
    c = e.items,
    i = k(e.effect.first),
    d, f = null,
    E, o = [],
    v = [],
    w, C, n, a;
  if (s)
    for (a = 0; a < u; a += 1) w = r[a], C = h(w, a), n = c.get(C).e, (n.f & T) === 0 && ((H = (g = n.nodes) == null ? void 0 : g.a) == null || H.measure(), (E ?? (E = new Set)).add(n));
  for (a = 0; a < u; a += 1) {
    if (w = r[a], C = h(w, a), n = c.get(C).e, e.outrogroups !== null)
      for (const b of e.outrogroups) b.pending.delete(n), b.done.delete(n);
    if ((n.f & T) !== 0)
      if (n.f ^= T, n === i) y(n, null, l);
      else {
        var S = f ? f.next : i;
        n === e.effect.last && (e.effect.last = n.prev), n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), m(e, f, n), m(e, n, S), y(n, S, l), f = n, o = [], v = [], i = k(f.next);
        continue
      } if ((n.f & q) !== 0 && (re(n), s && ((X = (M = n.nodes) == null ? void 0 : M.a) == null || X.unfix(), (E ?? (E = new Set)).delete(n))), n !== i) {
      if (d !== void 0 && d.has(n)) {
        if (o.length < v.length) {
          var N = v[0],
            _;
          f = N.prev;
          var I = o[0],
            D = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) y(o[_], N, l);
          for (_ = 0; _ < v.length; _ += 1) d.delete(v[_]);
          m(e, I.prev, D.next), m(e, f, I), m(e, D, N), i = N, f = D, a -= 1, o = [], v = []
        } else d.delete(n), y(n, i, l), m(e, n.prev, n.next), m(e, n, f === null ? e.effect.first : f.next), m(e, f, n), f = n;
        continue
      }
      for (o = [], v = []; i !== null && i !== n;)(d ?? (d = new Set)).add(i), v.push(i), i = k(i.next);
      if (i === null) continue
    }(n.f & T) === 0 && o.push(n), f = n, i = k(n.next)
  }
  if (e.outrogroups !== null) {
    for (const b of e.outrogroups) b.pending.size === 0 && (V(Y(b.done)), (G = e.outrogroups) == null || G.delete(b));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (i !== null || d !== void 0) {
    var p = [];
    if (d !== void 0)
      for (n of d)(n.f & q) === 0 && p.push(n);
    for (; i !== null;)(i.f & q) === 0 && i !== e.fallback && p.push(i), i = k(i.next);
    var A = p.length;
    if (A > 0) {
      var R = (t & ne) !== 0 && u === 0 ? l : null;
      if (s) {
        for (a = 0; a < A; a += 1)(U = (J = p[a].nodes) == null ? void 0 : J.a) == null || U.measure();
        for (a = 0; a < A; a += 1)(K = (Z = p[a].nodes) == null ? void 0 : Z.a) == null || K.fix()
      }
      Se(e, p, R)
    }
  }
  s && Te(() => {
    var b, P;
    if (E !== void 0)
      for (n of E)(P = (b = n.nodes) == null ? void 0 : b.a) == null || P.apply()
  })
}

function De(e, r, l, t, h, s, u, c) {
  var i = (u & ge) !== 0 ? (u & he) === 0 ? Ee(l, !1, !1) : j(l) : null,
    d = (u & be) !== 0 ? j(h) : null;
  return {
    v: i,
    i: d,
    e: B(() => (s(r, i ?? l, d ?? h, c), () => {
      e.delete(t)
    }))
  }
}

function y(e, r, l) {
  if (e.nodes)
    for (var t = e.nodes.start, h = e.nodes.end, s = r && (r.f & T) === 0 ? r.nodes.start : l; t !== null;) {
      var u = Ce(t);
      if (s.before(t), t === h) return;
      t = u
    }
}

function m(e, r, l) {
  r === null ? e.effect.first = l : r.next = l, l === null ? e.effect.last = r : l.prev = r
}
export {
  ke as e, xe as i
};