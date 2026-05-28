import {
  Y as F,
  w as fe,
  a3 as re,
  q as k,
  z as L,
  a4 as ie,
  v as le,
  i as K,
  x as ue,
  Q as se,
  y as P,
  A as q,
  B as z,
  a5 as oe,
  a6 as ve,
  a7 as $,
  U as te,
  a8 as T,
  Z as V,
  a9 as de,
  a0 as ce,
  aa as pe,
  ab as _e,
  ac as U,
  ad as he,
  ae as ge,
  af as Ee,
  ag as j,
  ah as me,
  V as ne,
  X as ae,
  ai as B,
  S as Te,
  aj as Ae,
  ak as Ce,
  al as we,
  W as Se,
  am as Ie
} from "./5zj5-rPA.js";

function ke(e, i) {
  return i
}

function Ne(e, i, l) {
  for (var t = [], g = i.length, s, u = i.length, c = 0; c < g; c++) {
    let E = i[c];
    ae(E, () => {
      if (s) {
        if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
          var o = e.outrogroups;
          Y(U(s.done)), o.delete(s), o.size === 0 && (e.outrogroups = null)
        }
      } else u -= 1
    }, !1)
  }
  if (u === 0) {
    var f = t.length === 0 && l !== null;
    if (f) {
      var v = l,
        n = v.parentNode;
      we(n), n.append(v), e.items.clear()
    }
    Y(i, !f)
  } else s = {
    pending: new Set(i),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function Y(e, i = !0) {
  for (var l = 0; l < e.length; l++) Se(e[l], i)
}
var ee;

function He(e, i, l, t, g, s = null) {
  var u = e,
    c = new Map,
    f = (i & re) !== 0;
  if (f) {
    var v = e;
    u = k ? L(ie(v)) : v.appendChild(F())
  }
  k && le();
  var n = null,
    E = pe(() => {
      var a = l();
      return _e(a) ? a : a == null ? [] : U(a)
    }),
    o, d = !0;

  function C() {
    r.fallback = n, xe(r, o, u, i, t), n !== null && (o.length === 0 ? (n.f & T) === 0 ? ne(n) : (n.f ^= T, M(n, null, u)) : ae(n, () => {
      n = null
    }))
  }
  var I = fe(() => {
      o = K(E);
      var a = o.length;
      let N = !1;
      if (k) {
        var x = ue(u) === se;
        x !== (a === 0) && (u = P(), L(u), q(!1), N = !0)
      }
      for (var _ = new Set, w = te, R = ce(), p = 0; p < a; p += 1) {
        k && z.nodeType === oe && z.data === ve && (u = z, N = !0, q(!1));
        var S = o[p],
          b = t(S, p),
          h = d ? null : c.get(b);
        h ? (h.v && $(h.v, S), h.i && $(h.i, p), R && w.unskip_effect(h.e)) : (h = Re(c, d ? u : ee ?? (ee = F()), S, b, p, g, i, l), d || (h.e.f |= T), c.set(b, h)), _.add(b)
      }
      if (a === 0 && s && !n && (d ? n = V(() => s(u)) : (n = V(() => s(ee ?? (ee = F()))), n.f |= T)), a > _.size && de(), k && a > 0 && L(P()), !d)
        if (R) {
          for (const [D, O] of c) _.has(D) || w.skip_effect(O.e);
          w.oncommit(C), w.ondiscard(() => {})
        } else C();
      N && q(!0), K(E)
    }),
    r = {
      effect: I,
      items: c,
      outrogroups: null,
      fallback: n
    };
  d = !1, k && (u = z)
}

function H(e) {
  for (; e !== null && (e.f & Ae) === 0;) e = e.next;
  return e
}

function xe(e, i, l, t, g) {
  var h, D, O, X, Q, W, Z, y, G;
  var s = (t & Ce) !== 0,
    u = i.length,
    c = e.items,
    f = H(e.effect.first),
    v, n = null,
    E, o = [],
    d = [],
    C, I, r, a;
  if (s)
    for (a = 0; a < u; a += 1) C = i[a], I = g(C, a), r = c.get(I).e, (r.f & T) === 0 && ((D = (h = r.nodes) == null ? void 0 : h.a) == null || D.measure(), (E ?? (E = new Set)).add(r));
  for (a = 0; a < u; a += 1) {
    if (C = i[a], I = g(C, a), r = c.get(I).e, e.outrogroups !== null)
      for (const m of e.outrogroups) m.pending.delete(r), m.done.delete(r);
    if ((r.f & T) !== 0)
      if (r.f ^= T, r === f) M(r, null, l);
      else {
        var N = n ? n.next : f;
        r === e.effect.last && (e.effect.last = r.prev), r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev), A(e, n, r), A(e, r, N), M(r, N, l), n = r, o = [], d = [], f = H(n.next);
        continue
      } if ((r.f & B) !== 0 && (ne(r), s && ((X = (O = r.nodes) == null ? void 0 : O.a) == null || X.unfix(), (E ?? (E = new Set)).delete(r))), r !== f) {
      if (v !== void 0 && v.has(r)) {
        if (o.length < d.length) {
          var x = d[0],
            _;
          n = x.prev;
          var w = o[0],
            R = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) M(o[_], x, l);
          for (_ = 0; _ < d.length; _ += 1) v.delete(d[_]);
          A(e, w.prev, R.next), A(e, n, w), A(e, R, x), f = x, n = R, a -= 1, o = [], d = []
        } else v.delete(r), M(r, f, l), A(e, r.prev, r.next), A(e, r, n === null ? e.effect.first : n.next), A(e, n, r), n = r;
        continue
      }
      for (o = [], d = []; f !== null && f !== r;)(v ?? (v = new Set)).add(f), d.push(f), f = H(f.next);
      if (f === null) continue
    }(r.f & T) === 0 && o.push(r), n = r, f = H(r.next)
  }
  if (e.outrogroups !== null) {
    for (const m of e.outrogroups) m.pending.size === 0 && (Y(U(m.done)), (Q = e.outrogroups) == null || Q.delete(m));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (f !== null || v !== void 0) {
    var p = [];
    if (v !== void 0)
      for (r of v)(r.f & B) === 0 && p.push(r);
    for (; f !== null;)(f.f & B) === 0 && f !== e.fallback && p.push(f), f = H(f.next);
    var S = p.length;
    if (S > 0) {
      var b = (t & re) !== 0 && u === 0 ? l : null;
      if (s) {
        for (a = 0; a < S; a += 1)(Z = (W = p[a].nodes) == null ? void 0 : W.a) == null || Z.measure();
        for (a = 0; a < S; a += 1)(G = (y = p[a].nodes) == null ? void 0 : y.a) == null || G.fix()
      }
      Ne(e, p, b)
    }
  }
  s && Te(() => {
    var m, J;
    if (E !== void 0)
      for (r of E)(J = (m = r.nodes) == null ? void 0 : m.a) == null || J.apply()
  })
}

function Re(e, i, l, t, g, s, u, c) {
  var f = (u & he) !== 0 ? (u & ge) === 0 ? Ee(l, !1, !1) : j(l) : null,
    v = (u & me) !== 0 ? j(g) : null;
  return {
    v: f,
    i: v,
    e: V(() => (s(i, f ?? l, v ?? g, c), () => {
      e.delete(t)
    }))
  }
}

function M(e, i, l) {
  if (e.nodes)
    for (var t = e.nodes.start, g = e.nodes.end, s = i && (i.f & T) === 0 ? i.nodes.start : l; t !== null;) {
      var u = Ie(t);
      if (s.before(t), t === g) return;
      t = u
    }
}

function A(e, i, l) {
  i === null ? e.effect.first = l : i.next = l, l === null ? e.effect.last = i : l.prev = i
}
export {
  He as e, ke as i
};