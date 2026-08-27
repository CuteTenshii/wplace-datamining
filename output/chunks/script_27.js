import {
  a3 as q,
  M as fe,
  aa as ne,
  N as M,
  S as Y,
  ab as ie,
  O as le,
  i as W,
  Q as ue,
  ac as se,
  R as Z,
  T as B,
  U as L,
  ad as oe,
  ae as de,
  af as $,
  a5 as ve,
  ag as w,
  a4 as V,
  ah as te,
  a7 as ce,
  ai as pe,
  aj as ge,
  ak as X,
  al as he,
  am as _e,
  an as Ee,
  ao as j,
  ap as me,
  aq as Te,
  a0 as ae,
  a2 as re,
  ar as U,
  as as we,
  at as Se,
  au as Ae,
  av as Ce,
  a6 as Ne,
  a1 as Ie,
  aw as Re
} from "./D5GL_E7i.js";

function Oe(e, a) {
  return a
}

function ke(e, a, u) {
  for (var s = [], c = a.length, l, i = a.length, p = 0; p < c; p++) {
    let E = a[p];
    re(E, () => {
      if (l) {
        if (l.pending.delete(E), l.done.add(E), l.pending.size === 0) {
          var d = e.outrogroups;
          Q(e, X(l.done)), d.delete(l), d.size === 0 && (e.outrogroups = null)
        }
      } else i -= 1
    }, !1)
  }
  if (i === 0) {
    var f = s.length === 0 && u !== null;
    if (f) {
      var t = u,
        r = t.parentNode;
      Ce(r), r.append(t), e.items.clear()
    }
    Q(e, a, !f)
  } else l = {
    pending: new Set(a),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(l)
}

function Q(e, a, u = !0) {
  var s;
  if (e.pending.size > 0) {
    s = new Set;
    for (const i of e.pending.values())
      for (const p of i) s.add(e.items.get(p).e)
  }
  for (var c = 0; c < a.length; c++) {
    var l = a[c];
    if (s != null && s.has(l)) {
      l.f |= w;
      const i = document.createDocumentFragment();
      Ne(l, i)
    } else Ie(a[c], u)
  }
}
var ee;

function be(e, a, u, s, c, l = null) {
  var i = e,
    p = new Map,
    f = (a & ne) !== 0;
  if (f) {
    var t = e;
    i = M ? Y(ie(t)) : t.appendChild(q())
  }
  M && le();
  var r = null,
    E = pe(() => {
      var v = u();
      return ge(v) ? v : v == null ? [] : X(v)
    }),
    d, m = new Map,
    T = !0;

  function R(v) {
    (A.effect.f & Te) === 0 && (A.pending.delete(v), A.fallback = r, xe(A, d, i, a, s), r !== null && (d.length === 0 ? (r.f & w) === 0 ? ae(r) : (r.f ^= w, b(r, null, i)) : re(r, () => {
      r = null
    })))
  }

  function n(v) {
    A.pending.delete(v)
  }
  var o = fe(() => {
      d = W(E);
      var v = d.length;
      let h = !1;
      if (M) {
        var H = ue(i) === se;
        H !== (v === 0) && (i = Z(), Y(i), B(!1), h = !0)
      }
      for (var C = new Set, g = ve, x = ce(), N = 0; N < v; N += 1) {
        M && L.nodeType === oe && L.data === de && (i = L, h = !0, B(!1));
        var D = d[N],
          k = s(D, N),
          _ = T ? null : p.get(k);
        _ ? (_.v && $(_.v, D), _.i && $(_.i, N), x && g.unskip_effect(_.e)) : (_ = De(p, T ? i : ee ?? (ee = q()), D, k, N, c, a, u), T || (_.e.f |= w), p.set(k, _)), C.add(k)
      }
      if (v === 0 && l && !r && (T ? r = V(() => l(i)) : (r = V(() => l(ee ?? (ee = q()))), r.f |= w)), v > C.size && te(), M && v > 0 && Y(Z()), !T)
        if (m.set(g, C), x) {
          for (const [F, z] of p) C.has(F) || g.skip_effect(z.e);
          g.oncommit(R), g.ondiscard(n)
        } else R(g);
      h && B(!0), W(E)
    }),
    A = {
      effect: o,
      items: p,
      pending: m,
      outrogroups: null,
      fallback: r
    };
  T = !1, M && (i = L)
}

function O(e) {
  for (; e !== null && (e.f & Se) === 0;) e = e.next;
  return e
}

function xe(e, a, u, s, c) {
  var D, k, _, F, z, y, G, J, K;
  var l = (s & Ae) !== 0,
    i = a.length,
    p = e.items,
    f = O(e.effect.first),
    t, r = null,
    E, d = [],
    m = [],
    T, R, n, o;
  if (l)
    for (o = 0; o < i; o += 1) T = a[o], R = c(T, o), n = p.get(R).e, (n.f & w) === 0 && ((k = (D = n.nodes) == null ? void 0 : D.a) == null || k.measure(), (E ?? (E = new Set)).add(n));
  for (o = 0; o < i; o += 1) {
    if (T = a[o], R = c(T, o), n = p.get(R).e, e.outrogroups !== null)
      for (const S of e.outrogroups) S.pending.delete(n), S.done.delete(n);
    if ((n.f & U) !== 0 && (ae(n), l && ((F = (_ = n.nodes) == null ? void 0 : _.a) == null || F.unfix(), (E ?? (E = new Set)).delete(n))), (n.f & w) !== 0)
      if (n.f ^= w, n === f) b(n, null, u);
      else {
        var A = r ? r.next : f;
        n === e.effect.last && (e.effect.last = n.prev), n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), I(e, r, n), I(e, n, A), b(n, A, u), r = n, d = [], m = [], f = O(r.next);
        continue
      } if (n !== f) {
      if (t !== void 0 && t.has(n)) {
        if (d.length < m.length) {
          var v = m[0],
            h;
          r = v.prev;
          var H = d[0],
            C = d[d.length - 1];
          for (h = 0; h < d.length; h += 1) b(d[h], v, u);
          for (h = 0; h < m.length; h += 1) t.delete(m[h]);
          I(e, H.prev, C.next), I(e, r, H), I(e, C, v), f = v, r = C, o -= 1, d = [], m = []
        } else t.delete(n), b(n, f, u), I(e, n.prev, n.next), I(e, n, r === null ? e.effect.first : r.next), I(e, r, n), r = n;
        continue
      }
      for (d = [], m = []; f !== null && f !== n;)(t ?? (t = new Set)).add(f), m.push(f), f = O(f.next);
      if (f === null) continue
    }(n.f & w) === 0 && d.push(n), r = n, f = O(n.next)
  }
  if (e.outrogroups !== null) {
    for (const S of e.outrogroups) S.pending.size === 0 && (Q(e, X(S.done)), (z = e.outrogroups) == null || z.delete(S));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (f !== null || t !== void 0) {
    var g = [];
    if (t !== void 0)
      for (n of t)(n.f & U) === 0 && g.push(n);
    for (; f !== null;)(f.f & U) === 0 && f !== e.fallback && g.push(f), f = O(f.next);
    var x = g.length;
    if (x > 0) {
      var N = (s & ne) !== 0 && i === 0 ? u : null;
      if (l) {
        for (o = 0; o < x; o += 1)(G = (y = g[o].nodes) == null ? void 0 : y.a) == null || G.measure();
        for (o = 0; o < x; o += 1)(K = (J = g[o].nodes) == null ? void 0 : J.a) == null || K.fix()
      }
      ke(e, g, N)
    }
  }
  l && we(() => {
    var S, P;
    if (E !== void 0)
      for (n of E)(P = (S = n.nodes) == null ? void 0 : S.a) == null || P.apply()
  })
}

function De(e, a, u, s, c, l, i, p) {
  var f = (i & he) !== 0 ? (i & _e) === 0 ? Ee(u, !1, !1) : j(u) : null,
    t = (i & me) !== 0 ? j(c) : null;
  return {
    v: f,
    i: t,
    e: V(() => (l(a, f ?? u, t ?? c, p), () => {
      e.delete(s)
    }))
  }
}

function b(e, a, u) {
  if (e.nodes)
    for (var s = e.nodes.start, c = e.nodes.end, l = a && (a.f & w) === 0 ? a.nodes.start : u; s !== null;) {
      var i = Re(s);
      if (l.before(s), s === c) return;
      s = i
    }
}

function I(e, a, u) {
  a === null ? e.effect.first = u : a.next = u, u === null ? e.effect.last = a : u.prev = a
}
export {
  be as e, Oe as i
};