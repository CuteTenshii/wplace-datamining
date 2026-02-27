import {
  a2 as F,
  m as fe,
  a7 as ne,
  k,
  q as z,
  a8 as ie,
  l as le,
  i as Q,
  n as ue,
  V as se,
  o as W,
  v as L,
  w as O,
  a9 as oe,
  aa as de,
  ab as $,
  Z as te,
  ac as m,
  a3 as V,
  ad as ve,
  a5 as ce,
  ae as pe,
  af as _e,
  ag as B,
  ah as ge,
  ai as he,
  aj as Ee,
  ak as j,
  al as be,
  _ as re,
  a1 as ae,
  am as q,
  X as me,
  an as Te,
  ao as we,
  ap as Ie,
  a0 as Ae,
  aq as Ce
} from "./BGZizgo7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "d72c9ee2-cfea-43e6-8a93-b54788d8f65a", e._sentryDebugIdIdentifier = "sentry-dbid-d72c9ee2-cfea-43e6-8a93-b54788d8f65a")
  } catch {}
})();

function ke(e, r) {
  return r
}

function Se(e, r, l) {
  for (var t = [], h = r.length, s, u = r.length, c = 0; c < h; c++) {
    let E = r[c];
    ae(E, () => {
      if (s) {
        if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
          var o = e.outrogroups;
          Y(B(s.done)), o.delete(s), o.size === 0 && (e.outrogroups = null)
        }
      } else u -= 1
    }, !1)
  }
  if (u === 0) {
    var i = t.length === 0 && l !== null;
    if (i) {
      var d = l,
        a = d.parentNode;
      Ie(a), a.append(d), e.items.clear()
    }
    Y(r, !i)
  } else s = {
    pending: new Set(r),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function Y(e, r = !0) {
  for (var l = 0; l < e.length; l++) Ae(e[l], r)
}
var ee;

function xe(e, r, l, t, h, s = null) {
  var u = e,
    c = new Map,
    i = (r & ne) !== 0;
  if (i) {
    var d = e;
    u = k ? z(ie(d)) : d.appendChild(F())
  }
  k && le();
  var a = null,
    E = pe(() => {
      var f = l();
      return _e(f) ? f : f == null ? [] : B(f)
    }),
    o, v = !0;

  function w() {
    n.fallback = a, Ne(n, o, u, r, t), a !== null && (o.length === 0 ? (a.f & m) === 0 ? re(a) : (a.f ^= m, y(a, null, u)) : ae(a, () => {
      a = null
    }))
  }
  var C = fe(() => {
      o = Q(E);
      var f = o.length;
      let S = !1;
      if (k) {
        var N = ue(u) === se;
        N !== (f === 0) && (u = W(), z(u), L(!1), S = !0)
      }
      for (var _ = new Set, I = te, D = ce(), p = 0; p < f; p += 1) {
        k && O.nodeType === oe && O.data === de && (u = O, S = !0, L(!1));
        var A = o[p],
          R = t(A, p),
          g = v ? null : c.get(R);
        g ? (g.v && $(g.v, A), g.i && $(g.i, p), D && I.unskip_effect(g.e)) : (g = De(c, v ? u : ee ?? (ee = F()), A, R, p, h, r, l), v || (g.e.f |= m), c.set(R, g)), _.add(R)
      }
      if (f === 0 && s && !a && (v ? a = V(() => s(u)) : (a = V(() => s(ee ?? (ee = F()))), a.f |= m)), f > _.size && ve(), k && f > 0 && z(W()), !v)
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
      fallback: a
    };
  v = !1, k && (u = O)
}

function x(e) {
  for (; e !== null && (e.f & Te) === 0;) e = e.next;
  return e
}

function Ne(e, r, l, t, h) {
  var g, H, M, X, U, Z, G, J, K;
  var s = (t & we) !== 0,
    u = r.length,
    c = e.items,
    i = x(e.effect.first),
    d, a = null,
    E, o = [],
    v = [],
    w, C, n, f;
  if (s)
    for (f = 0; f < u; f += 1) w = r[f], C = h(w, f), n = c.get(C).e, (n.f & m) === 0 && ((H = (g = n.nodes) == null ? void 0 : g.a) == null || H.measure(), (E ?? (E = new Set)).add(n));
  for (f = 0; f < u; f += 1) {
    if (w = r[f], C = h(w, f), n = c.get(C).e, e.outrogroups !== null)
      for (const b of e.outrogroups) b.pending.delete(n), b.done.delete(n);
    if ((n.f & m) !== 0)
      if (n.f ^= m, n === i) y(n, null, l);
      else {
        var S = a ? a.next : i;
        n === e.effect.last && (e.effect.last = n.prev), n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), T(e, a, n), T(e, n, S), y(n, S, l), a = n, o = [], v = [], i = x(a.next);
        continue
      } if ((n.f & q) !== 0 && (re(n), s && ((X = (M = n.nodes) == null ? void 0 : M.a) == null || X.unfix(), (E ?? (E = new Set)).delete(n))), n !== i) {
      if (d !== void 0 && d.has(n)) {
        if (o.length < v.length) {
          var N = v[0],
            _;
          a = N.prev;
          var I = o[0],
            D = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) y(o[_], N, l);
          for (_ = 0; _ < v.length; _ += 1) d.delete(v[_]);
          T(e, I.prev, D.next), T(e, a, I), T(e, D, N), i = N, a = D, f -= 1, o = [], v = []
        } else d.delete(n), y(n, i, l), T(e, n.prev, n.next), T(e, n, a === null ? e.effect.first : a.next), T(e, a, n), a = n;
        continue
      }
      for (o = [], v = []; i !== null && i !== n;)(d ?? (d = new Set)).add(i), v.push(i), i = x(i.next);
      if (i === null) continue
    }(n.f & m) === 0 && o.push(n), a = n, i = x(n.next)
  }
  if (e.outrogroups !== null) {
    for (const b of e.outrogroups) b.pending.size === 0 && (Y(B(b.done)), (U = e.outrogroups) == null || U.delete(b));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (i !== null || d !== void 0) {
    var p = [];
    if (d !== void 0)
      for (n of d)(n.f & q) === 0 && p.push(n);
    for (; i !== null;)(i.f & q) === 0 && i !== e.fallback && p.push(i), i = x(i.next);
    var A = p.length;
    if (A > 0) {
      var R = (t & ne) !== 0 && u === 0 ? l : null;
      if (s) {
        for (f = 0; f < A; f += 1)(G = (Z = p[f].nodes) == null ? void 0 : Z.a) == null || G.measure();
        for (f = 0; f < A; f += 1)(K = (J = p[f].nodes) == null ? void 0 : J.a) == null || K.fix()
      }
      Se(e, p, R)
    }
  }
  s && me(() => {
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
    e: V(() => (s(r, i ?? l, d ?? h, c), () => {
      e.delete(t)
    }))
  }
}

function y(e, r, l) {
  if (e.nodes)
    for (var t = e.nodes.start, h = e.nodes.end, s = r && (r.f & m) === 0 ? r.nodes.start : l; t !== null;) {
      var u = Ce(t);
      if (s.before(t), t === h) return;
      t = u
    }
}

function T(e, r, l) {
  r === null ? e.effect.first = l : r.next = l, l === null ? e.effect.last = r : l.prev = r
}
export {
  xe as e, ke as i
};