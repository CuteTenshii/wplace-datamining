import {
  j as ee,
  i as ue,
  P as ae,
  Q as X,
  h as D,
  R as te,
  e as ve,
  g as $,
  T as de,
  V as _e,
  W as oe,
  X as k,
  Y as B,
  o as O,
  Z as ce,
  _ as he,
  k as U,
  m as me,
  a0 as q,
  a1 as V,
  l as pe,
  a2 as y,
  a3 as Ee,
  a4 as j,
  a5 as re,
  a6 as Te,
  a7 as ne,
  q as Ae,
  a8 as Ie,
  a9 as F,
  N as Ne,
  aa as fe,
  ab as we,
  ac as xe,
  ad as Ce,
  ae as Me,
  af as De,
  ag as Re
} from "./DDWIi-vs.js";
let P = null;

function be(i, n) {
  return n
}

function Se(i, n, e) {
  for (var u = i.items, t = [], v = n.length, s = 0; s < v; s++) Ce(n[s].e, t, !0);
  var c = v > 0 && t.length === 0 && e !== null;
  if (c) {
    var T = e.parentNode;
    Me(T), T.append(e), u.clear(), w(i, n[0].prev, n[v - 1].next)
  }
  De(t, () => {
    for (var E = 0; E < v; E++) {
      var _ = n[E];
      c || (u.delete(_.k), w(i, _.prev, _.next)), fe(_.e, !c)
    }
  })
}

function Le(i, n, e, u, t, v = null) {
  var s = i,
    c = {
      flags: n,
      items: new Map,
      first: null
    },
    T = (n & ae) !== 0;
  if (T) {
    var E = i;
    s = D ? X(te(E)) : E.appendChild(ee())
  }
  D && ve();
  var _ = null,
    C = !1,
    A = new Map,
    R = de(() => {
      var d = e();
      return Te(d) ? d : d == null ? [] : re(d)
    }),
    f, m;

  function r() {
    He(m, f, c, A, s, t, n, u, e), v !== null && (f.length === 0 ? _ ? ne(_) : _ = U(() => v(s)) : _ !== null && Ae(_, () => {
      _ = null
    }))
  }
  ue(() => {
    m ?? (m = Re), f = $(R);
    var d = f.length;
    if (C && d === 0) return;
    C = d === 0;
    let p = !1;
    if (D) {
      var I = _e(s) === oe;
      I !== (d === 0) && (s = k(), X(s), B(!1), p = !0)
    }
    if (D) {
      for (var x = null, o, a = 0; a < d; a++) {
        if (O.nodeType === ce && O.data === he) {
          s = O, p = !0, B(!1);
          break
        }
        var l = f[a],
          h = u(l, a);
        o = W(O, c, x, null, l, h, a, t, n, e), c.items.set(h, o), x = o
      }
      d > 0 && X(k())
    }
    if (D) d === 0 && v && (_ = U(() => v(s)));
    else if (me()) {
      var S = new Set,
        b = pe;
      for (a = 0; a < d; a += 1) {
        l = f[a], h = u(l, a);
        var M = c.items.get(h) ?? A.get(h);
        M ? (n & (q | V)) !== 0 && le(M, l, a, n) : (o = W(null, c, null, null, l, h, a, t, n, e, !0), A.set(h, o)), S.add(h)
      }
      for (const [N, L] of c.items) S.has(N) || b.skipped_effects.add(L.e);
      b.add_callback(r)
    } else r();
    p && B(!0), $(R)
  }), D && (s = O)
}

function He(i, n, e, u, t, v, s, c, T) {
  var Z, z, G, J;
  var E = (s & we) !== 0,
    _ = (s & (q | V)) !== 0,
    C = n.length,
    A = e.items,
    R = e.first,
    f = R,
    m, r = null,
    d, p = [],
    I = [],
    x, o, a, l;
  if (E)
    for (l = 0; l < C; l += 1) x = n[l], o = c(x, l), a = A.get(o), a !== void 0 && ((Z = a.a) == null || Z.measure(), (d ?? (d = new Set)).add(a));
  for (l = 0; l < C; l += 1) {
    if (x = n[l], o = c(x, l), a = A.get(o), a === void 0) {
      var h = u.get(o);
      if (h !== void 0) {
        u.delete(o), A.set(o, h);
        var S = r ? r.next : f;
        w(e, r, h), w(e, h, S), Q(h, S, t), r = h
      } else {
        var b = f ? f.e.nodes_start : t;
        r = W(b, e, r, r === null ? e.first : r.next, x, o, l, v, s, T)
      }
      A.set(o, r), p = [], I = [], f = r.next;
      continue
    }
    if (_ && le(a, x, l, s), (a.e.f & F) !== 0 && (ne(a.e), E && ((z = a.a) == null || z.unfix(), (d ?? (d = new Set)).delete(a))), a !== f) {
      if (m !== void 0 && m.has(a)) {
        if (p.length < I.length) {
          var M = I[0],
            N;
          r = M.prev;
          var L = p[0],
            Y = p[p.length - 1];
          for (N = 0; N < p.length; N += 1) Q(p[N], M, t);
          for (N = 0; N < I.length; N += 1) m.delete(I[N]);
          w(e, L.prev, Y.next), w(e, r, L), w(e, Y, M), f = M, r = Y, l -= 1, p = [], I = []
        } else m.delete(a), Q(a, f, t), w(e, a.prev, a.next), w(e, a, r === null ? e.first : r.next), w(e, r, a), r = a;
        continue
      }
      for (p = [], I = []; f !== null && f.k !== o;)(f.e.f & F) === 0 && (m ?? (m = new Set)).add(f), I.push(f), f = f.next;
      if (f === null) continue;
      a = f
    }
    p.push(a), r = a, f = a.next
  }
  if (f !== null || m !== void 0) {
    for (var H = m === void 0 ? [] : re(m); f !== null;)(f.e.f & F) === 0 && H.push(f), f = f.next;
    var g = H.length;
    if (g > 0) {
      var ie = (s & ae) !== 0 && C === 0 ? t : null;
      if (E) {
        for (l = 0; l < g; l += 1)(G = H[l].a) == null || G.measure();
        for (l = 0; l < g; l += 1)(J = H[l].a) == null || J.fix()
      }
      Se(e, H, ie)
    }
  }
  E && Ne(() => {
    var K;
    if (d !== void 0)
      for (a of d)(K = a.a) == null || K.apply()
  }), i.first = e.first && e.first.e, i.last = r && r.e;
  for (var se of u.values()) fe(se.e);
  u.clear()
}

function le(i, n, e, u) {
  (u & q) !== 0 && y(i.v, n), (u & V) !== 0 ? y(i.i, e) : i.i = e
}

function W(i, n, e, u, t, v, s, c, T, E, _) {
  var C = P,
    A = (T & q) !== 0,
    R = (T & Ie) === 0,
    f = A ? R ? Ee(t, !1, !1) : j(t) : t,
    m = (T & V) === 0 ? s : j(s),
    r = {
      i: m,
      v: f,
      k: v,
      a: null,
      e: null,
      prev: e,
      next: u
    };
  P = r;
  try {
    if (i === null) {
      var d = document.createDocumentFragment();
      d.append(i = ee())
    }
    return r.e = U(() => c(i, f, m, E), D), r.e.prev = e && e.e, r.e.next = u && u.e, e === null ? _ || (n.first = r) : (e.next = r, e.e.next = r.e), u !== null && (u.prev = r, u.e.prev = r.e), r
  } finally {
    P = C
  }
}

function Q(i, n, e) {
  for (var u = i.next ? i.next.e.nodes_start : e, t = n ? n.e.nodes_start : e, v = i.e.nodes_start; v !== null && v !== u;) {
    var s = xe(v);
    t.before(v), v = s
  }
}

function w(i, n, e) {
  n === null ? i.first = e : (n.next = e, n.e.next = e && e.e), e !== null && (e.prev = n, e.e.prev = n && n.e)
}
export {
  P as c, Le as e, be as i
};