import {
  a4 as F,
  m as fe,
  a9 as ne,
  k,
  q as z,
  aa as ie,
  l as le,
  i as Q,
  n as ue,
  X as se,
  o as W,
  v as L,
  w as O,
  ab as oe,
  ac as de,
  ad as $,
  a0 as te,
  ae as m,
  a5 as Y,
  af as ve,
  a7 as ce,
  K as pe,
  ag as _e,
  ah as V,
  ai as ge,
  aj as he,
  ak as Ee,
  al as j,
  am as be,
  a1 as ae,
  a3 as re,
  an as q,
  Z as me,
  ao as Te,
  ap as we,
  aq as Ie,
  a2 as Ae,
  ar as Ce
} from "./CA9fhze-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bd7c639a-5501-4c4e-9545-840807d4ad73", e._sentryDebugIdIdentifier = "sentry-dbid-bd7c639a-5501-4c4e-9545-840807d4ad73")
  } catch {}
})();

function ke(e, a) {
  return a
}

function Se(e, a, l) {
  for (var t = [], h = a.length, s, u = a.length, c = 0; c < h; c++) {
    let E = a[c];
    re(E, () => {
      if (s) {
        if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
          var o = e.outrogroups;
          B(V(s.done)), o.delete(s), o.size === 0 && (e.outrogroups = null)
        }
      } else u -= 1
    }, !1)
  }
  if (u === 0) {
    var i = t.length === 0 && l !== null;
    if (i) {
      var d = l,
        r = d.parentNode;
      Ie(r), r.append(d), e.items.clear()
    }
    B(a, !i)
  } else s = {
    pending: new Set(a),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function B(e, a = !0) {
  for (var l = 0; l < e.length; l++) Ae(e[l], a)
}
var ee;

function xe(e, a, l, t, h, s = null) {
  var u = e,
    c = new Map,
    i = (a & ne) !== 0;
  if (i) {
    var d = e;
    u = k ? z(ie(d)) : d.appendChild(F())
  }
  k && le();
  var r = null,
    E = pe(() => {
      var f = l();
      return _e(f) ? f : f == null ? [] : V(f)
    }),
    o, v = !0;

  function w() {
    n.fallback = r, Ne(n, o, u, a, t), r !== null && (o.length === 0 ? (r.f & m) === 0 ? ae(r) : (r.f ^= m, y(r, null, u)) : re(r, () => {
      r = null
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
        g ? (g.v && $(g.v, A), g.i && $(g.i, p), D && I.unskip_effect(g.e)) : (g = De(c, v ? u : ee ?? (ee = F()), A, R, p, h, a, l), v || (g.e.f |= m), c.set(R, g)), _.add(R)
      }
      if (f === 0 && s && !r && (v ? r = Y(() => s(u)) : (r = Y(() => s(ee ?? (ee = F()))), r.f |= m)), f > _.size && ve(), k && f > 0 && z(W()), !v)
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
      fallback: r
    };
  v = !1, k && (u = O)
}

function x(e) {
  for (; e !== null && (e.f & Te) === 0;) e = e.next;
  return e
}

function Ne(e, a, l, t, h) {
  var g, H, M, X, K, U, Z, G, J;
  var s = (t & we) !== 0,
    u = a.length,
    c = e.items,
    i = x(e.effect.first),
    d, r = null,
    E, o = [],
    v = [],
    w, C, n, f;
  if (s)
    for (f = 0; f < u; f += 1) w = a[f], C = h(w, f), n = c.get(C).e, (n.f & m) === 0 && ((H = (g = n.nodes) == null ? void 0 : g.a) == null || H.measure(), (E ?? (E = new Set)).add(n));
  for (f = 0; f < u; f += 1) {
    if (w = a[f], C = h(w, f), n = c.get(C).e, e.outrogroups !== null)
      for (const b of e.outrogroups) b.pending.delete(n), b.done.delete(n);
    if ((n.f & m) !== 0)
      if (n.f ^= m, n === i) y(n, null, l);
      else {
        var S = r ? r.next : i;
        n === e.effect.last && (e.effect.last = n.prev), n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), T(e, r, n), T(e, n, S), y(n, S, l), r = n, o = [], v = [], i = x(r.next);
        continue
      } if ((n.f & q) !== 0 && (ae(n), s && ((X = (M = n.nodes) == null ? void 0 : M.a) == null || X.unfix(), (E ?? (E = new Set)).delete(n))), n !== i) {
      if (d !== void 0 && d.has(n)) {
        if (o.length < v.length) {
          var N = v[0],
            _;
          r = N.prev;
          var I = o[0],
            D = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) y(o[_], N, l);
          for (_ = 0; _ < v.length; _ += 1) d.delete(v[_]);
          T(e, I.prev, D.next), T(e, r, I), T(e, D, N), i = N, r = D, f -= 1, o = [], v = []
        } else d.delete(n), y(n, i, l), T(e, n.prev, n.next), T(e, n, r === null ? e.effect.first : r.next), T(e, r, n), r = n;
        continue
      }
      for (o = [], v = []; i !== null && i !== n;)(d ?? (d = new Set)).add(i), v.push(i), i = x(i.next);
      if (i === null) continue
    }(n.f & m) === 0 && o.push(n), r = n, i = x(n.next)
  }
  if (e.outrogroups !== null) {
    for (const b of e.outrogroups) b.pending.size === 0 && (B(V(b.done)), (K = e.outrogroups) == null || K.delete(b));
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
        for (f = 0; f < A; f += 1)(Z = (U = p[f].nodes) == null ? void 0 : U.a) == null || Z.measure();
        for (f = 0; f < A; f += 1)(J = (G = p[f].nodes) == null ? void 0 : G.a) == null || J.fix()
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

function De(e, a, l, t, h, s, u, c) {
  var i = (u & ge) !== 0 ? (u & he) === 0 ? Ee(l, !1, !1) : j(l) : null,
    d = (u & be) !== 0 ? j(h) : null;
  return {
    v: i,
    i: d,
    e: Y(() => (s(a, i ?? l, d ?? h, c), () => {
      e.delete(t)
    }))
  }
}

function y(e, a, l) {
  if (e.nodes)
    for (var t = e.nodes.start, h = e.nodes.end, s = a && (a.f & m) === 0 ? a.nodes.start : l; t !== null;) {
      var u = Ce(t);
      if (s.before(t), t === h) return;
      t = u
    }
}

function T(e, a, l) {
  a === null ? e.effect.first = l : a.next = l, l === null ? e.effect.last = a : l.prev = a
}
export {
  xe as e, ke as i
};