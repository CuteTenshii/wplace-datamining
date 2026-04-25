import {
  a2 as z,
  C as fe,
  a8 as re,
  A as b,
  G as L,
  a9 as ie,
  B as le,
  i as W,
  D as ue,
  V as se,
  F as $,
  H as q,
  J as O,
  aa as oe,
  ab as ve,
  ac as y,
  Z as te,
  ad as T,
  a3 as V,
  ae as de,
  a5 as ce,
  af as pe,
  ag as _e,
  ah as Y,
  ai as he,
  aj as ge,
  ak as Ee,
  al as j,
  am as me,
  _ as ne,
  a1 as ae,
  an as B,
  X as Te,
  ao as Ae,
  ap as Ce,
  aq as we,
  a0 as Ie,
  ar as Ne
} from "./C21-Odj5.js";

function be(e, i) {
  return i
}

function Se(e, i, l) {
  for (var t = [], g = i.length, s, u = i.length, c = 0; c < g; c++) {
    let E = i[c];
    ae(E, () => {
      if (s) {
        if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
          var o = e.outrogroups;
          X(Y(s.done)), o.delete(s), o.size === 0 && (e.outrogroups = null)
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
    X(i, !f)
  } else s = {
    pending: new Set(i),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function X(e, i = !0) {
  for (var l = 0; l < e.length; l++) Ie(e[l], i)
}
var ee;

function ke(e, i, l, t, g, s = null) {
  var u = e,
    c = new Map,
    f = (i & re) !== 0;
  if (f) {
    var v = e;
    u = b ? L(ie(v)) : v.appendChild(z())
  }
  b && le();
  var n = null,
    E = pe(() => {
      var a = l();
      return _e(a) ? a : a == null ? [] : Y(a)
    }),
    o, d = !0;

  function C() {
    r.fallback = n, xe(r, o, u, i, t), n !== null && (o.length === 0 ? (n.f & T) === 0 ? ne(n) : (n.f ^= T, D(n, null, u)) : ae(n, () => {
      n = null
    }))
  }
  var N = fe(() => {
      o = W(E);
      var a = o.length;
      let S = !1;
      if (b) {
        var x = ue(u) === se;
        x !== (a === 0) && (u = $(), L(u), q(!1), S = !0)
      }
      for (var _ = new Set, w = te, H = ce(), p = 0; p < a; p += 1) {
        b && O.nodeType === oe && O.data === ve && (u = O, S = !0, q(!1));
        var I = o[p],
          R = t(I, p),
          h = d ? null : c.get(R);
        h ? (h.v && y(h.v, I), h.i && y(h.i, p), H && w.unskip_effect(h.e)) : (h = He(c, d ? u : ee ?? (ee = z()), I, R, p, g, i, l), d || (h.e.f |= T), c.set(R, h)), _.add(R)
      }
      if (a === 0 && s && !n && (d ? n = V(() => s(u)) : (n = V(() => s(ee ?? (ee = z()))), n.f |= T)), a > _.size && de(), b && a > 0 && L($()), !d)
        if (H) {
          for (const [M, F] of c) _.has(M) || w.skip_effect(F.e);
          w.oncommit(C), w.ondiscard(() => {})
        } else C();
      S && q(!0), W(E)
    }),
    r = {
      effect: N,
      items: c,
      outrogroups: null,
      fallback: n
    };
  d = !1, b && (u = O)
}

function k(e) {
  for (; e !== null && (e.f & Ae) === 0;) e = e.next;
  return e
}

function xe(e, i, l, t, g) {
  var h, M, F, G, J, U, Z, K, P;
  var s = (t & Ce) !== 0,
    u = i.length,
    c = e.items,
    f = k(e.effect.first),
    v, n = null,
    E, o = [],
    d = [],
    C, N, r, a;
  if (s)
    for (a = 0; a < u; a += 1) C = i[a], N = g(C, a), r = c.get(N).e, (r.f & T) === 0 && ((M = (h = r.nodes) == null ? void 0 : h.a) == null || M.measure(), (E ?? (E = new Set)).add(r));
  for (a = 0; a < u; a += 1) {
    if (C = i[a], N = g(C, a), r = c.get(N).e, e.outrogroups !== null)
      for (const m of e.outrogroups) m.pending.delete(r), m.done.delete(r);
    if ((r.f & T) !== 0)
      if (r.f ^= T, r === f) D(r, null, l);
      else {
        var S = n ? n.next : f;
        r === e.effect.last && (e.effect.last = r.prev), r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev), A(e, n, r), A(e, r, S), D(r, S, l), n = r, o = [], d = [], f = k(n.next);
        continue
      } if ((r.f & B) !== 0 && (ne(r), s && ((G = (F = r.nodes) == null ? void 0 : F.a) == null || G.unfix(), (E ?? (E = new Set)).delete(r))), r !== f) {
      if (v !== void 0 && v.has(r)) {
        if (o.length < d.length) {
          var x = d[0],
            _;
          n = x.prev;
          var w = o[0],
            H = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) D(o[_], x, l);
          for (_ = 0; _ < d.length; _ += 1) v.delete(d[_]);
          A(e, w.prev, H.next), A(e, n, w), A(e, H, x), f = x, n = H, a -= 1, o = [], d = []
        } else v.delete(r), D(r, f, l), A(e, r.prev, r.next), A(e, r, n === null ? e.effect.first : n.next), A(e, n, r), n = r;
        continue
      }
      for (o = [], d = []; f !== null && f !== r;)(v ?? (v = new Set)).add(f), d.push(f), f = k(f.next);
      if (f === null) continue
    }(r.f & T) === 0 && o.push(r), n = r, f = k(r.next)
  }
  if (e.outrogroups !== null) {
    for (const m of e.outrogroups) m.pending.size === 0 && (X(Y(m.done)), (J = e.outrogroups) == null || J.delete(m));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (f !== null || v !== void 0) {
    var p = [];
    if (v !== void 0)
      for (r of v)(r.f & B) === 0 && p.push(r);
    for (; f !== null;)(f.f & B) === 0 && f !== e.fallback && p.push(f), f = k(f.next);
    var I = p.length;
    if (I > 0) {
      var R = (t & re) !== 0 && u === 0 ? l : null;
      if (s) {
        for (a = 0; a < I; a += 1)(Z = (U = p[a].nodes) == null ? void 0 : U.a) == null || Z.measure();
        for (a = 0; a < I; a += 1)(P = (K = p[a].nodes) == null ? void 0 : K.a) == null || P.fix()
      }
      Se(e, p, R)
    }
  }
  s && Te(() => {
    var m, Q;
    if (E !== void 0)
      for (r of E)(Q = (m = r.nodes) == null ? void 0 : m.a) == null || Q.apply()
  })
}

function He(e, i, l, t, g, s, u, c) {
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

function D(e, i, l) {
  if (e.nodes)
    for (var t = e.nodes.start, g = e.nodes.end, s = i && (i.f & T) === 0 ? i.nodes.start : l; t !== null;) {
      var u = Ne(t);
      if (s.before(t), t === g) return;
      t = u
    }
}

function A(e, i, l) {
  i === null ? e.effect.first = l : i.next = l, l === null ? e.effect.last = i : l.prev = i
}
export {
  ke as e, be as i
};