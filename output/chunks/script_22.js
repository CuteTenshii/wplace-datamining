import {
  a3 as O,
  D as fe,
  a9 as ae,
  B as x,
  H as z,
  aa as ie,
  C as le,
  i as Q,
  F as ue,
  W as se,
  G as Z,
  I as L,
  K as F,
  ab as oe,
  ac as de,
  ad as $,
  _ as te,
  ae as T,
  a4 as q,
  af as ve,
  a6 as ce,
  A as pe,
  ag as _e,
  ah as V,
  ai as ge,
  aj as he,
  ak as Ee,
  al as j,
  am as be,
  a0 as ne,
  a2 as re,
  an as Y,
  Y as Te,
  ao as me,
  ap as Ie,
  aq as we,
  a1 as Ae,
  ar as Ce
} from "./B8NcJmf7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6606c0fa-637b-4a8c-a90e-d32abea63fd6", e._sentryDebugIdIdentifier = "sentry-dbid-6606c0fa-637b-4a8c-a90e-d32abea63fd6")
  } catch {}
})();

function xe(e, n) {
  return n
}

function Se(e, n, l) {
  for (var t = [], h = n.length, s, u = n.length, c = 0; c < h; c++) {
    let E = n[c];
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
      we(r), r.append(d), e.items.clear()
    }
    B(n, !i)
  } else s = {
    pending: new Set(n),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function B(e, n = !0) {
  for (var l = 0; l < e.length; l++) Ae(e[l], n)
}
var ee;

function ke(e, n, l, t, h, s = null) {
  var u = e,
    c = new Map,
    i = (n & ae) !== 0;
  if (i) {
    var d = e;
    u = x ? z(ie(d)) : d.appendChild(O())
  }
  x && le();
  var r = null,
    E = pe(() => {
      var f = l();
      return _e(f) ? f : f == null ? [] : V(f)
    }),
    o, v = !0;

  function I() {
    a.fallback = r, Ne(a, o, u, n, t), r !== null && (o.length === 0 ? (r.f & T) === 0 ? ne(r) : (r.f ^= T, y(r, null, u)) : re(r, () => {
      r = null
    }))
  }
  var C = fe(() => {
      o = Q(E);
      var f = o.length;
      let S = !1;
      if (x) {
        var N = ue(u) === se;
        N !== (f === 0) && (u = Z(), z(u), L(!1), S = !0)
      }
      for (var _ = new Set, w = te, D = ce(), p = 0; p < f; p += 1) {
        x && F.nodeType === oe && F.data === de && (u = F, S = !0, L(!1));
        var A = o[p],
          R = t(A, p),
          g = v ? null : c.get(R);
        g ? (g.v && $(g.v, A), g.i && $(g.i, p), D && w.unskip_effect(g.e)) : (g = De(c, v ? u : ee ?? (ee = O()), A, R, p, h, n, l), v || (g.e.f |= T), c.set(R, g)), _.add(R)
      }
      if (f === 0 && s && !r && (v ? r = q(() => s(u)) : (r = q(() => s(ee ?? (ee = O()))), r.f |= T)), f > _.size && ve(), x && f > 0 && z(Z()), !v)
        if (D) {
          for (const [H, M] of c) _.has(H) || w.skip_effect(M.e);
          w.oncommit(I), w.ondiscard(() => {})
        } else I();
      S && L(!0), Q(E)
    }),
    a = {
      effect: C,
      items: c,
      outrogroups: null,
      fallback: r
    };
  v = !1, x && (u = F)
}

function k(e) {
  for (; e !== null && (e.f & me) === 0;) e = e.next;
  return e
}

function Ne(e, n, l, t, h) {
  var g, H, M, G, K, U, W, X, J;
  var s = (t & Ie) !== 0,
    u = n.length,
    c = e.items,
    i = k(e.effect.first),
    d, r = null,
    E, o = [],
    v = [],
    I, C, a, f;
  if (s)
    for (f = 0; f < u; f += 1) I = n[f], C = h(I, f), a = c.get(C).e, (a.f & T) === 0 && ((H = (g = a.nodes) == null ? void 0 : g.a) == null || H.measure(), (E ?? (E = new Set)).add(a));
  for (f = 0; f < u; f += 1) {
    if (I = n[f], C = h(I, f), a = c.get(C).e, e.outrogroups !== null)
      for (const b of e.outrogroups) b.pending.delete(a), b.done.delete(a);
    if ((a.f & T) !== 0)
      if (a.f ^= T, a === i) y(a, null, l);
      else {
        var S = r ? r.next : i;
        a === e.effect.last && (e.effect.last = a.prev), a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), m(e, r, a), m(e, a, S), y(a, S, l), r = a, o = [], v = [], i = k(r.next);
        continue
      } if ((a.f & Y) !== 0 && (ne(a), s && ((G = (M = a.nodes) == null ? void 0 : M.a) == null || G.unfix(), (E ?? (E = new Set)).delete(a))), a !== i) {
      if (d !== void 0 && d.has(a)) {
        if (o.length < v.length) {
          var N = v[0],
            _;
          r = N.prev;
          var w = o[0],
            D = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) y(o[_], N, l);
          for (_ = 0; _ < v.length; _ += 1) d.delete(v[_]);
          m(e, w.prev, D.next), m(e, r, w), m(e, D, N), i = N, r = D, f -= 1, o = [], v = []
        } else d.delete(a), y(a, i, l), m(e, a.prev, a.next), m(e, a, r === null ? e.effect.first : r.next), m(e, r, a), r = a;
        continue
      }
      for (o = [], v = []; i !== null && i !== a;)(d ?? (d = new Set)).add(i), v.push(i), i = k(i.next);
      if (i === null) continue
    }(a.f & T) === 0 && o.push(a), r = a, i = k(a.next)
  }
  if (e.outrogroups !== null) {
    for (const b of e.outrogroups) b.pending.size === 0 && (B(V(b.done)), (K = e.outrogroups) == null || K.delete(b));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (i !== null || d !== void 0) {
    var p = [];
    if (d !== void 0)
      for (a of d)(a.f & Y) === 0 && p.push(a);
    for (; i !== null;)(i.f & Y) === 0 && i !== e.fallback && p.push(i), i = k(i.next);
    var A = p.length;
    if (A > 0) {
      var R = (t & ae) !== 0 && u === 0 ? l : null;
      if (s) {
        for (f = 0; f < A; f += 1)(W = (U = p[f].nodes) == null ? void 0 : U.a) == null || W.measure();
        for (f = 0; f < A; f += 1)(J = (X = p[f].nodes) == null ? void 0 : X.a) == null || J.fix()
      }
      Se(e, p, R)
    }
  }
  s && Te(() => {
    var b, P;
    if (E !== void 0)
      for (a of E)(P = (b = a.nodes) == null ? void 0 : b.a) == null || P.apply()
  })
}

function De(e, n, l, t, h, s, u, c) {
  var i = (u & ge) !== 0 ? (u & he) === 0 ? Ee(l, !1, !1) : j(l) : null,
    d = (u & be) !== 0 ? j(h) : null;
  return {
    v: i,
    i: d,
    e: q(() => (s(n, i ?? l, d ?? h, c), () => {
      e.delete(t)
    }))
  }
}

function y(e, n, l) {
  if (e.nodes)
    for (var t = e.nodes.start, h = e.nodes.end, s = n && (n.f & T) === 0 ? n.nodes.start : l; t !== null;) {
      var u = Ce(t);
      if (s.before(t), t === h) return;
      t = u
    }
}

function m(e, n, l) {
  n === null ? e.effect.first = l : n.next = l, l === null ? e.effect.last = n : l.prev = n
}
export {
  ke as e, xe as i
};