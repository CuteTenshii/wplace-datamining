import {
  Z as Y,
  z as fe,
  a5 as ne,
  x as M,
  C as q,
  a6 as ie,
  y as le,
  i as P,
  A as ue,
  a7 as se,
  B as Q,
  D as B,
  F as L,
  a8 as oe,
  a9 as de,
  aa as $,
  a0 as ve,
  ab as A,
  _ as X,
  ac as te,
  a2 as ce,
  ad as pe,
  ae as ge,
  af as U,
  ag as he,
  ah as _e,
  ai as Ee,
  aj as j,
  ak as me,
  al as Te,
  W as re,
  Y as ae,
  am as V,
  an as Ae,
  ao as Ce,
  ap as we,
  aq as Se,
  a1 as Ie,
  X as Ne,
  ar as xe
} from "./CV6xI6o5.js";

function be(e, r) {
  return r
}

function De(e, r, u) {
  for (var s = [], c = r.length, l, i = r.length, p = 0; p < c; p++) {
    let E = r[p];
    ae(E, () => {
      if (l) {
        if (l.pending.delete(E), l.done.add(E), l.pending.size === 0) {
          var d = e.outrogroups;
          y(e, U(l.done)), d.delete(l), d.size === 0 && (e.outrogroups = null)
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
    y(e, r, !f)
  } else l = {
    pending: new Set(r),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(l)
}

function y(e, r, u = !0) {
  var s;
  if (e.pending.size > 0) {
    s = new Set;
    for (const i of e.pending.values())
      for (const p of i) s.add(e.items.get(p).e)
  }
  for (var c = 0; c < r.length; c++) {
    var l = r[c];
    if (s != null && s.has(l)) {
      l.f |= A;
      const i = document.createDocumentFragment();
      Ie(l, i)
    } else Ne(r[c], u)
  }
}
var ee;

function Fe(e, r, u, s, c, l = null) {
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
      return ge(v) ? v : v == null ? [] : U(v)
    }),
    d, m = new Map,
    T = !0;

  function x(v) {
    (w.effect.f & Te) === 0 && (w.pending.delete(v), w.fallback = a, ke(w, d, i, r, s), a !== null && (d.length === 0 ? (a.f & A) === 0 ? re(a) : (a.f ^= A, F(a, null, i)) : ae(a, () => {
      a = null
    })))
  }

  function n(v) {
    w.pending.delete(v)
  }
  var o = fe(() => {
      d = P(E);
      var v = d.length;
      let h = !1;
      if (M) {
        var H = ue(i) === se;
        H !== (v === 0) && (i = Q(), q(i), B(!1), h = !0)
      }
      for (var S = new Set, g = ve, k = ce(), I = 0; I < v; I += 1) {
        M && L.nodeType === oe && L.data === de && (i = L, h = !0, B(!1));
        var R = d[I],
          D = s(R, I),
          _ = T ? null : p.get(D);
        _ ? (_.v && $(_.v, R), _.i && $(_.i, I), k && g.unskip_effect(_.e)) : (_ = Re(p, T ? i : ee ?? (ee = Y()), R, D, I, c, r, u), T || (_.e.f |= A), p.set(D, _)), S.add(D)
      }
      if (v === 0 && l && !a && (T ? a = X(() => l(i)) : (a = X(() => l(ee ?? (ee = Y()))), a.f |= A)), v > S.size && te(), M && v > 0 && q(Q()), !T)
        if (m.set(g, S), k) {
          for (const [O, z] of p) S.has(O) || g.skip_effect(z.e);
          g.oncommit(x), g.ondiscard(n)
        } else x(g);
      h && B(!0), P(E)
    }),
    w = {
      effect: o,
      items: p,
      pending: m,
      outrogroups: null,
      fallback: a
    };
  T = !1, M && (i = L)
}

function b(e) {
  for (; e !== null && (e.f & Ce) === 0;) e = e.next;
  return e
}

function ke(e, r, u, s, c) {
  var R, D, _, O, z, W, Z, G, J;
  var l = (s & we) !== 0,
    i = r.length,
    p = e.items,
    f = b(e.effect.first),
    t, a = null,
    E, d = [],
    m = [],
    T, x, n, o;
  if (l)
    for (o = 0; o < i; o += 1) T = r[o], x = c(T, o), n = p.get(x).e, (n.f & A) === 0 && ((D = (R = n.nodes) == null ? void 0 : R.a) == null || D.measure(), (E ?? (E = new Set)).add(n));
  for (o = 0; o < i; o += 1) {
    if (T = r[o], x = c(T, o), n = p.get(x).e, e.outrogroups !== null)
      for (const C of e.outrogroups) C.pending.delete(n), C.done.delete(n);
    if ((n.f & V) !== 0 && (re(n), l && ((O = (_ = n.nodes) == null ? void 0 : _.a) == null || O.unfix(), (E ?? (E = new Set)).delete(n))), (n.f & A) !== 0)
      if (n.f ^= A, n === f) F(n, null, u);
      else {
        var w = a ? a.next : f;
        n === e.effect.last && (e.effect.last = n.prev), n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), N(e, a, n), N(e, n, w), F(n, w, u), a = n, d = [], m = [], f = b(a.next);
        continue
      } if (n !== f) {
      if (t !== void 0 && t.has(n)) {
        if (d.length < m.length) {
          var v = m[0],
            h;
          a = v.prev;
          var H = d[0],
            S = d[d.length - 1];
          for (h = 0; h < d.length; h += 1) F(d[h], v, u);
          for (h = 0; h < m.length; h += 1) t.delete(m[h]);
          N(e, H.prev, S.next), N(e, a, H), N(e, S, v), f = v, a = S, o -= 1, d = [], m = []
        } else t.delete(n), F(n, f, u), N(e, n.prev, n.next), N(e, n, a === null ? e.effect.first : a.next), N(e, a, n), a = n;
        continue
      }
      for (d = [], m = []; f !== null && f !== n;)(t ?? (t = new Set)).add(f), m.push(f), f = b(f.next);
      if (f === null) continue
    }(n.f & A) === 0 && d.push(n), a = n, f = b(n.next)
  }
  if (e.outrogroups !== null) {
    for (const C of e.outrogroups) C.pending.size === 0 && (y(e, U(C.done)), (z = e.outrogroups) == null || z.delete(C));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (f !== null || t !== void 0) {
    var g = [];
    if (t !== void 0)
      for (n of t)(n.f & V) === 0 && g.push(n);
    for (; f !== null;)(f.f & V) === 0 && f !== e.fallback && g.push(f), f = b(f.next);
    var k = g.length;
    if (k > 0) {
      var I = (s & ne) !== 0 && i === 0 ? u : null;
      if (l) {
        for (o = 0; o < k; o += 1)(Z = (W = g[o].nodes) == null ? void 0 : W.a) == null || Z.measure();
        for (o = 0; o < k; o += 1)(J = (G = g[o].nodes) == null ? void 0 : G.a) == null || J.fix()
      }
      De(e, g, I)
    }
  }
  l && Ae(() => {
    var C, K;
    if (E !== void 0)
      for (n of E)(K = (C = n.nodes) == null ? void 0 : C.a) == null || K.apply()
  })
}

function Re(e, r, u, s, c, l, i, p) {
  var f = (i & he) !== 0 ? (i & _e) === 0 ? Ee(u, !1, !1) : j(u) : null,
    t = (i & me) !== 0 ? j(c) : null;
  return {
    v: f,
    i: t,
    e: X(() => (l(r, f ?? u, t ?? c, p), () => {
      e.delete(s)
    }))
  }
}

function F(e, r, u) {
  if (e.nodes)
    for (var s = e.nodes.start, c = e.nodes.end, l = r && (r.f & A) === 0 ? r.nodes.start : u; s !== null;) {
      var i = xe(s);
      if (l.before(s), s === c) return;
      s = i
    }
}

function N(e, r, u) {
  r === null ? e.effect.first = u : r.next = u, u === null ? e.effect.last = r : u.prev = r
}
export {
  Fe as e, be as i
};