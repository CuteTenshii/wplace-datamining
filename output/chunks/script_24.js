import {
  a0 as z,
  B as fe,
  a6 as re,
  z as k,
  F as L,
  a7 as ie,
  A as le,
  i as W,
  C as ue,
  T as se,
  D as $,
  G as B,
  I as O,
  a8 as oe,
  a9 as ve,
  aa as y,
  X as te,
  ab as T,
  a1 as Y,
  ac as de,
  a3 as ce,
  ad as pe,
  ae as _e,
  af as X,
  ag as he,
  ah as ge,
  ai as Ee,
  aj as j,
  ak as me,
  Y as ne,
  _ as ae,
  al as V,
  V as Te,
  am as Ae,
  an as Ce,
  ao as Ie,
  Z as we,
  ap as Ne
} from "./wFsvFKKp.js";

function ke(e, i) {
  return i
}

function Se(e, i, l) {
  for (var t = [], g = i.length, s, u = i.length, c = 0; c < g; c++) {
    let E = i[c];
    ae(E, () => {
      if (s) {
        if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
          var o = e.outrogroups;
          q(X(s.done)), o.delete(s), o.size === 0 && (e.outrogroups = null)
        }
      } else u -= 1
    }, !1)
  }
  if (u === 0) {
    var f = t.length === 0 && l !== null;
    if (f) {
      var v = l,
        n = v.parentNode;
      Ie(n), n.append(v), e.items.clear()
    }
    q(i, !f)
  } else s = {
    pending: new Set(i),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function q(e, i = !0) {
  for (var l = 0; l < e.length; l++) we(e[l], i)
}
var ee;

function De(e, i, l, t, g, s = null) {
  var u = e,
    c = new Map,
    f = (i & re) !== 0;
  if (f) {
    var v = e;
    u = k ? L(ie(v)) : v.appendChild(z())
  }
  k && le();
  var n = null,
    E = pe(() => {
      var a = l();
      return _e(a) ? a : a == null ? [] : X(a)
    }),
    o, d = !0;

  function C() {
    r.fallback = n, xe(r, o, u, i, t), n !== null && (o.length === 0 ? (n.f & T) === 0 ? ne(n) : (n.f ^= T, H(n, null, u)) : ae(n, () => {
      n = null
    }))
  }
  var N = fe(() => {
      o = W(E);
      var a = o.length;
      let S = !1;
      if (k) {
        var x = ue(u) === se;
        x !== (a === 0) && (u = $(), L(u), B(!1), S = !0)
      }
      for (var _ = new Set, I = te, R = ce(), p = 0; p < a; p += 1) {
        k && O.nodeType === oe && O.data === ve && (u = O, S = !0, B(!1));
        var w = o[p],
          b = t(w, p),
          h = d ? null : c.get(b);
        h ? (h.v && y(h.v, w), h.i && y(h.i, p), R && I.unskip_effect(h.e)) : (h = Re(c, d ? u : ee ?? (ee = z()), w, b, p, g, i, l), d || (h.e.f |= T), c.set(b, h)), _.add(b)
      }
      if (a === 0 && s && !n && (d ? n = Y(() => s(u)) : (n = Y(() => s(ee ?? (ee = z()))), n.f |= T)), a > _.size && de(), k && a > 0 && L($()), !d)
        if (R) {
          for (const [M, F] of c) _.has(M) || I.skip_effect(F.e);
          I.oncommit(C), I.ondiscard(() => {})
        } else C();
      S && B(!0), W(E)
    }),
    r = {
      effect: N,
      items: c,
      outrogroups: null,
      fallback: n
    };
  d = !1, k && (u = O)
}

function D(e) {
  for (; e !== null && (e.f & Ae) === 0;) e = e.next;
  return e
}

function xe(e, i, l, t, g) {
  var h, M, F, G, U, Z, J, K, P;
  var s = (t & Ce) !== 0,
    u = i.length,
    c = e.items,
    f = D(e.effect.first),
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
      if (r.f ^= T, r === f) H(r, null, l);
      else {
        var S = n ? n.next : f;
        r === e.effect.last && (e.effect.last = r.prev), r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev), A(e, n, r), A(e, r, S), H(r, S, l), n = r, o = [], d = [], f = D(n.next);
        continue
      } if ((r.f & V) !== 0 && (ne(r), s && ((G = (F = r.nodes) == null ? void 0 : F.a) == null || G.unfix(), (E ?? (E = new Set)).delete(r))), r !== f) {
      if (v !== void 0 && v.has(r)) {
        if (o.length < d.length) {
          var x = d[0],
            _;
          n = x.prev;
          var I = o[0],
            R = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) H(o[_], x, l);
          for (_ = 0; _ < d.length; _ += 1) v.delete(d[_]);
          A(e, I.prev, R.next), A(e, n, I), A(e, R, x), f = x, n = R, a -= 1, o = [], d = []
        } else v.delete(r), H(r, f, l), A(e, r.prev, r.next), A(e, r, n === null ? e.effect.first : n.next), A(e, n, r), n = r;
        continue
      }
      for (o = [], d = []; f !== null && f !== r;)(v ?? (v = new Set)).add(f), d.push(f), f = D(f.next);
      if (f === null) continue
    }(r.f & T) === 0 && o.push(r), n = r, f = D(r.next)
  }
  if (e.outrogroups !== null) {
    for (const m of e.outrogroups) m.pending.size === 0 && (q(X(m.done)), (U = e.outrogroups) == null || U.delete(m));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (f !== null || v !== void 0) {
    var p = [];
    if (v !== void 0)
      for (r of v)(r.f & V) === 0 && p.push(r);
    for (; f !== null;)(f.f & V) === 0 && f !== e.fallback && p.push(f), f = D(f.next);
    var w = p.length;
    if (w > 0) {
      var b = (t & re) !== 0 && u === 0 ? l : null;
      if (s) {
        for (a = 0; a < w; a += 1)(J = (Z = p[a].nodes) == null ? void 0 : Z.a) == null || J.measure();
        for (a = 0; a < w; a += 1)(P = (K = p[a].nodes) == null ? void 0 : K.a) == null || P.fix()
      }
      Se(e, p, b)
    }
  }
  s && Te(() => {
    var m, Q;
    if (E !== void 0)
      for (r of E)(Q = (m = r.nodes) == null ? void 0 : m.a) == null || Q.apply()
  })
}

function Re(e, i, l, t, g, s, u, c) {
  var f = (u & he) !== 0 ? (u & ge) === 0 ? Ee(l, !1, !1) : j(l) : null,
    v = (u & me) !== 0 ? j(g) : null;
  return {
    v: f,
    i: v,
    e: Y(() => (s(i, f ?? l, v ?? g, c), () => {
      e.delete(t)
    }))
  }
}

function H(e, i, l) {
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
  De as e, ke as i
};