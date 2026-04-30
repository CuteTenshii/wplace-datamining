import {
  a3 as z,
  E as fe,
  a9 as re,
  C as b,
  I as L,
  aa as ie,
  D as le,
  i as Z,
  G as ue,
  W as se,
  H as $,
  J as q,
  L as F,
  ab as oe,
  ac as ve,
  ad as y,
  _ as te,
  ae as T,
  a4 as B,
  af as de,
  a6 as ce,
  ag as pe,
  ah as _e,
  ai as G,
  aj as he,
  ak as ge,
  al as Ee,
  am as j,
  an as me,
  a0 as ae,
  a2 as ne,
  ao as Y,
  Y as Te,
  ap as Ce,
  aq as Ae,
  ar as Ie,
  a1 as we,
  as as Ne
} from "./BC180BoF.js";

function be(e, i) {
  return i
}

function Se(e, i, l) {
  for (var t = [], g = i.length, s, u = i.length, c = 0; c < g; c++) {
    let E = i[c];
    ne(E, () => {
      if (s) {
        if (s.pending.delete(E), s.done.add(E), s.pending.size === 0) {
          var o = e.outrogroups;
          V(G(s.done)), o.delete(s), o.size === 0 && (e.outrogroups = null)
        }
      } else u -= 1
    }, !1)
  }
  if (u === 0) {
    var f = t.length === 0 && l !== null;
    if (f) {
      var v = l,
        a = v.parentNode;
      Ie(a), a.append(v), e.items.clear()
    }
    V(i, !f)
  } else s = {
    pending: new Set(i),
    done: new Set
  }, (e.outrogroups ?? (e.outrogroups = new Set)).add(s)
}

function V(e, i = !0) {
  for (var l = 0; l < e.length; l++) we(e[l], i)
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
  var a = null,
    E = pe(() => {
      var n = l();
      return _e(n) ? n : n == null ? [] : G(n)
    }),
    o, d = !0;

  function A() {
    r.fallback = a, xe(r, o, u, i, t), a !== null && (o.length === 0 ? (a.f & T) === 0 ? ae(a) : (a.f ^= T, D(a, null, u)) : ne(a, () => {
      a = null
    }))
  }
  var N = fe(() => {
      o = Z(E);
      var n = o.length;
      let S = !1;
      if (b) {
        var x = ue(u) === se;
        x !== (n === 0) && (u = $(), L(u), q(!1), S = !0)
      }
      for (var _ = new Set, I = te, H = ce(), p = 0; p < n; p += 1) {
        b && F.nodeType === oe && F.data === ve && (u = F, S = !0, q(!1));
        var w = o[p],
          R = t(w, p),
          h = d ? null : c.get(R);
        h ? (h.v && y(h.v, w), h.i && y(h.i, p), H && I.unskip_effect(h.e)) : (h = He(c, d ? u : ee ?? (ee = z()), w, R, p, g, i, l), d || (h.e.f |= T), c.set(R, h)), _.add(R)
      }
      if (n === 0 && s && !a && (d ? a = B(() => s(u)) : (a = B(() => s(ee ?? (ee = z()))), a.f |= T)), n > _.size && de(), b && n > 0 && L($()), !d)
        if (H) {
          for (const [M, O] of c) _.has(M) || I.skip_effect(O.e);
          I.oncommit(A), I.ondiscard(() => {})
        } else A();
      S && q(!0), Z(E)
    }),
    r = {
      effect: N,
      items: c,
      outrogroups: null,
      fallback: a
    };
  d = !1, b && (u = F)
}

function k(e) {
  for (; e !== null && (e.f & Ce) === 0;) e = e.next;
  return e
}

function xe(e, i, l, t, g) {
  var h, M, O, J, U, W, X, K, P;
  var s = (t & Ae) !== 0,
    u = i.length,
    c = e.items,
    f = k(e.effect.first),
    v, a = null,
    E, o = [],
    d = [],
    A, N, r, n;
  if (s)
    for (n = 0; n < u; n += 1) A = i[n], N = g(A, n), r = c.get(N).e, (r.f & T) === 0 && ((M = (h = r.nodes) == null ? void 0 : h.a) == null || M.measure(), (E ?? (E = new Set)).add(r));
  for (n = 0; n < u; n += 1) {
    if (A = i[n], N = g(A, n), r = c.get(N).e, e.outrogroups !== null)
      for (const m of e.outrogroups) m.pending.delete(r), m.done.delete(r);
    if ((r.f & T) !== 0)
      if (r.f ^= T, r === f) D(r, null, l);
      else {
        var S = a ? a.next : f;
        r === e.effect.last && (e.effect.last = r.prev), r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev), C(e, a, r), C(e, r, S), D(r, S, l), a = r, o = [], d = [], f = k(a.next);
        continue
      } if ((r.f & Y) !== 0 && (ae(r), s && ((J = (O = r.nodes) == null ? void 0 : O.a) == null || J.unfix(), (E ?? (E = new Set)).delete(r))), r !== f) {
      if (v !== void 0 && v.has(r)) {
        if (o.length < d.length) {
          var x = d[0],
            _;
          a = x.prev;
          var I = o[0],
            H = o[o.length - 1];
          for (_ = 0; _ < o.length; _ += 1) D(o[_], x, l);
          for (_ = 0; _ < d.length; _ += 1) v.delete(d[_]);
          C(e, I.prev, H.next), C(e, a, I), C(e, H, x), f = x, a = H, n -= 1, o = [], d = []
        } else v.delete(r), D(r, f, l), C(e, r.prev, r.next), C(e, r, a === null ? e.effect.first : a.next), C(e, a, r), a = r;
        continue
      }
      for (o = [], d = []; f !== null && f !== r;)(v ?? (v = new Set)).add(f), d.push(f), f = k(f.next);
      if (f === null) continue
    }(r.f & T) === 0 && o.push(r), a = r, f = k(r.next)
  }
  if (e.outrogroups !== null) {
    for (const m of e.outrogroups) m.pending.size === 0 && (V(G(m.done)), (U = e.outrogroups) == null || U.delete(m));
    e.outrogroups.size === 0 && (e.outrogroups = null)
  }
  if (f !== null || v !== void 0) {
    var p = [];
    if (v !== void 0)
      for (r of v)(r.f & Y) === 0 && p.push(r);
    for (; f !== null;)(f.f & Y) === 0 && f !== e.fallback && p.push(f), f = k(f.next);
    var w = p.length;
    if (w > 0) {
      var R = (t & re) !== 0 && u === 0 ? l : null;
      if (s) {
        for (n = 0; n < w; n += 1)(X = (W = p[n].nodes) == null ? void 0 : W.a) == null || X.measure();
        for (n = 0; n < w; n += 1)(P = (K = p[n].nodes) == null ? void 0 : K.a) == null || P.fix()
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
    e: B(() => (s(i, f ?? l, v ?? g, c), () => {
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

function C(e, i, l) {
  i === null ? e.effect.first = l : i.next = l, l === null ? e.effect.last = i : l.prev = i
}
export {
  ke as e, be as i
};