import {
  a0 as Y,
  J as fe,
  a7 as ne,
  K as M,
  P as q,
  a8 as ie,
  L as le,
  i as G,
  N as ue,
  a9 as se,
  O as W,
  Q as B,
  R as L,
  aa as oe,
  ab as de,
  ac as $,
  a2 as ve,
  ad as w,
  a1 as J,
  ae as te,
  a4 as ce,
  af as pe,
  ag as ge,
  ah as P,
  ai as he,
  aj as _e,
  ak as Ee,
  al as j,
  am as me,
  an as Te,
  Y as re,
  _ as ae,
  ao as V,
  ap as we,
  aq as Ae,
  ar as Ce,
  as as Se,
  a3 as Ne,
  Z as Ie,
  at as Re
} from "./m4hpPlb8.js";

function Oe(e, r) {
  return r
}

function ke(e, r, u) {
  for (var s = [], c = r.length, l, i = r.length, p = 0; p < c; p++) {
    let E = r[p];
    ae(E, () => {
      if (l) {
        if (l.pending.delete(E), l.done.add(E), l.pending.size === 0) {
          var d = e.outrogroups;
          K(e, P(l.done)), d.delete(l), d.size === 0 && (e.outrogroups = null)
        }
      } else i -= 1
    }, !1)
  }
  if (i === 0) {
    var f = s.length === 0 && u !== null;
    if (f) {
      var t = u,
        a = t.parentNode;
      Se(a), a.append(t), e.items.clear()
    }
    K(e, r, !f)
  } else l = {
    pending: new Set(r),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(l)
}

function K(e, r, u = !0) {
  var s;
  if (e.pending.size > 0) {
    s = new Set;
    for (const i of e.pending.values())
      for (const p of i) s.add(e.items.get(p).e)
  }
  for (var c = 0; c < r.length; c++) {
    var l = r[c];
    if (s != null && s.has(l)) {
      l.f |= w;
      const i = document.createDocumentFragment();
      Ne(l, i)
    } else Ie(r[c], u)
  }
}
var ee;

function be(e, r, u, s, c, l = null) {
  var i = e,
    p = new Map,
    f = (r & ne) !== 0;
  if (f) {
    var t = e;
    i = M ? q(ie(t)) : t.appendChild(Y())
  }
  M && le();
  var a = null,
    E = pe(() => {
      var v = u();
      return ge(v) ? v : v == null ? [] : P(v)
    }),
    d, m = new Map,
    T = !0;

  function R(v) {
    (C.effect.f & Te) === 0 && (C.pending.delete(v), C.fallback = a, xe(C, d, i, r, s), a !== null && (d.length === 0 ? (a.f & w) === 0 ? re(a) : (a.f ^= w, b(a, null, i)) : ae(a, () => {
      a = null
    })))
  }

  function n(v) {
    C.pending.delete(v)
  }
  var o = fe(() => {
      d = G(E);
      var v = d.length;
      let h = !1;
      if (M) {
        var H = ue(i) === se;
        H !== (v === 0) && (i = W(), q(i), B(!1), h = !0)
      }
      for (var S = new Set, g = ve, x = ce(), N = 0; N < v; N += 1) {
        M && L.nodeType === oe && L.data === de && (i = L, h = !0, B(!1));
        var D = d[N],
          k = s(D, N),
          _ = T ? null : p.get(k);
        _ ? (_.v && $(_.v, D), _.i && $(_.i, N), x && g.unskip_effect(_.e)) : (_ = De(p, T ? i : ee ?? (ee = Y()), D, k, N, c, r, u), T || (_.e.f |= w), p.set(k, _)), S.add(k)
      }
      if (v === 0 && l && !a && (T ? a = J(() => l(i)) : (a = J(() => l(ee ?? (ee = Y()))), a.f |= w)), v > S.size && te(), M && v > 0 && q(W()), !T)
        if (m.set(g, S), x) {
          for (const [F, z] of p) S.has(F) || g.skip_effect(z.e);
          g.oncommit(R), g.ondiscard(n)
        } else R(g);
      h && B(!0), G(E)
    }),
    C = {
      effect: o,
      items: p,
      pending: m,
      outrogroups: null,
      fallback: a
    };
  T = !1, M && (i = L)
}

function O(e) {
  for (; e !== null && (e.f & Ae) === 0;) e = e.next;
  return e
}

function xe(e, r, u, s, c) {
  var D, k, _, F, z, Q, U, X, Z;
  var l = (s & Ce) !== 0,
    i = r.length,
    p = e.items,
    f = O(e.effect.first),
    t, a = null,
    E, d = [],
    m = [],
    T, R, n, o;
  if (l)
    for (o = 0; o < i; o += 1) T = r[o], R = c(T, o), n = p.get(R).e, (n.f & w) === 0 && ((k = (D = n.nodes) == null ? void 0 : D.a) == null || k.measure(), (E ?? (E = new Set)).add(n));
  for (o = 0; o < i; o += 1) {
    if (T = r[o], R = c(T, o), n = p.get(R).e, e.outrogroups !== null)
      for (const A of e.outrogroups) A.pending.delete(n), A.done.delete(n);
    if ((n.f & V) !== 0 && (re(n), l && ((F = (_ = n.nodes) == null ? void 0 : _.a) == null || F.unfix(), (E ?? (E = new Set)).delete(n))), (n.f & w) !== 0)
      if (n.f ^= w, n === f) b(n, null, u);
      else {
        var C = a ? a.next : f;
        n === e.effect.last && (e.effect.last = n.prev), n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), I(e, a, n), I(e, n, C), b(n, C, u), a = n, d = [], m = [], f = O(a.next);
        continue
      } if (n !== f) {
      if (t !== void 0 && t.has(n)) {
        if (d.length < m.length) {
          var v = m[0],
            h;
          a = v.prev;
          var H = d[0],
            S = d[d.length - 1];
          for (h = 0; h < d.length; h += 1) b(d[h], v, u);
          for (h = 0; h < m.length; h += 1) t.delete(m[h]);
          I(e, H.prev, S.next), I(e, a, H), I(e, S, v), f = v, a = S, o -= 1, d = [], m = []
        } else t.delete(n), b(n, f, u), I(e, n.prev, n.next), I(e, n, a === null ? e.effect.first : a.next), I(e, a, n), a = n;
        continue
      }
      for (d = [], m = []; f !== null && f !== n;)(t ?? (t = new Set)).add(f), m.push(f), f = O(f.next);
      if (f === null) continue
    }(n.f & w) === 0 && d.push(n), a = n, f = O(n.next)
  }
  if (e.outrogroups !== null) {
    for (const A of e.outrogroups) A.pending.size === 0 && (K(e, P(A.done)), (z = e.outrogroups) == null || z.delete(A));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (f !== null || t !== void 0) {
    var g = [];
    if (t !== void 0)
      for (n of t)(n.f & V) === 0 && g.push(n);
    for (; f !== null;)(f.f & V) === 0 && f !== e.fallback && g.push(f), f = O(f.next);
    var x = g.length;
    if (x > 0) {
      var N = (s & ne) !== 0 && i === 0 ? u : null;
      if (l) {
        for (o = 0; o < x; o += 1)(U = (Q = g[o].nodes) == null ? void 0 : Q.a) == null || U.measure();
        for (o = 0; o < x; o += 1)(Z = (X = g[o].nodes) == null ? void 0 : X.a) == null || Z.fix()
      }
      ke(e, g, N)
    }
  }
  l && we(() => {
    var A, y;
    if (E !== void 0)
      for (n of E)(y = (A = n.nodes) == null ? void 0 : A.a) == null || y.apply()
  })
}

function De(e, r, u, s, c, l, i, p) {
  var f = (i & he) !== 0 ? (i & _e) === 0 ? Ee(u, !1, !1) : j(u) : null,
    t = (i & me) !== 0 ? j(c) : null;
  return {
    v: f,
    i: t,
    e: J(() => (l(r, f ?? u, t ?? c, p), () => {
      e.delete(s)
    }))
  }
}

function b(e, r, u) {
  if (e.nodes)
    for (var s = e.nodes.start, c = e.nodes.end, l = r && (r.f & w) === 0 ? r.nodes.start : u; s !== null;) {
      var i = Re(s);
      if (l.before(s), s === c) return;
      s = i
    }
}

function I(e, r, u) {
  r === null ? e.effect.first = u : r.next = u, u === null ? e.effect.last = r : u.prev = r
}
export {
  be as e, Oe as i
};