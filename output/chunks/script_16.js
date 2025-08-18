import {
  i as ee,
  g as ue,
  B as ae,
  C as F,
  h as D,
  D as te,
  e as ve,
  y as z,
  F as de,
  G as _e,
  H as oe,
  I as k,
  J as U,
  m as O,
  K as ce,
  L as he,
  j as J,
  l as me,
  M as V,
  N as Y,
  k as pe,
  O as y,
  P as Ee,
  Q as j,
  R as re,
  S as Te,
  T as ne,
  n as Ae,
  U as Ie,
  V as X,
  W as Ce,
  X as fe,
  Y as Ne,
  Z as we,
  _ as xe,
  $ as Me,
  a0 as De,
  a1 as Se
} from "./Bq4S7hUq.js";
let g = null;

function Le(i, n) {
  return n
}

function He(i, n, e) {
  for (var u = i.items, t = [], v = n.length, s = 0; s < v; s++) xe(n[s].e, t, !0);
  var c = v > 0 && t.length === 0 && e !== null;
  if (c) {
    var T = e.parentNode;
    Me(T), T.append(e), u.clear(), N(i, n[0].prev, n[v - 1].next)
  }
  De(t, () => {
    for (var E = 0; E < v; E++) {
      var _ = n[E];
      c || (u.delete(_.k), N(i, _.prev, _.next)), fe(_.e, !c)
    }
  })
}

function be(i, n, e, u, t, v = null) {
  var s = i,
    c = {
      flags: n,
      items: new Map,
      first: null
    },
    T = (n & ae) !== 0;
  if (T) {
    var E = i;
    s = D ? F(te(E)) : E.appendChild(ee())
  }
  D && ve();
  var _ = null,
    x = !1,
    A = new Map,
    S = de(() => {
      var d = e();
      return Te(d) ? d : d == null ? [] : re(d)
    }),
    f, m;

  function r() {
    Re(m, f, c, A, s, t, n, u, e), v !== null && (f.length === 0 ? _ ? ne(_) : _ = J(() => v(s)) : _ !== null && Ae(_, () => {
      _ = null
    }))
  }
  ue(() => {
    m ?? (m = Se), f = z(S);
    var d = f.length;
    if (x && d === 0) return;
    x = d === 0;
    let p = !1;
    if (D) {
      var I = _e(s) === oe;
      I !== (d === 0) && (s = k(), F(s), U(!1), p = !0)
    }
    if (D) {
      for (var w = null, o, a = 0; a < d; a++) {
        if (O.nodeType === ce && O.data === he) {
          s = O, p = !0, U(!1);
          break
        }
        var l = f[a],
          h = u(l, a);
        o = K(O, c, w, null, l, h, a, t, n, e), c.items.set(h, o), w = o
      }
      d > 0 && F(k())
    }
    if (D) d === 0 && v && (_ = J(() => v(s)));
    else if (me()) {
      var H = new Set,
        L = pe;
      for (a = 0; a < d; a += 1) {
        l = f[a], h = u(l, a);
        var M = c.items.get(h) ?? A.get(h);
        M ? (n & (V | Y)) !== 0 && le(M, l, a, n) : (o = K(null, c, null, null, l, h, a, t, n, e, !0), A.set(h, o)), H.add(h)
      }
      for (const [C, b] of c.items) H.has(C) || L.skipped_effects.add(b.e);
      L.add_callback(r)
    } else r();
    p && U(!0), z(S)
  }), D && (s = O)
}

function Re(i, n, e, u, t, v, s, c, T) {
  var P, Q, W, Z;
  var E = (s & Ne) !== 0,
    _ = (s & (V | Y)) !== 0,
    x = n.length,
    A = e.items,
    S = e.first,
    f = S,
    m, r = null,
    d, p = [],
    I = [],
    w, o, a, l;
  if (E)
    for (l = 0; l < x; l += 1) w = n[l], o = c(w, l), a = A.get(o), a !== void 0 && ((P = a.a) == null || P.measure(), (d ?? (d = new Set)).add(a));
  for (l = 0; l < x; l += 1) {
    if (w = n[l], o = c(w, l), a = A.get(o), a === void 0) {
      var h = u.get(o);
      if (h !== void 0) {
        u.delete(o), A.set(o, h);
        var H = r ? r.next : f;
        N(e, r, h), N(e, h, H), G(h, H, t), r = h
      } else {
        var L = f ? f.e.nodes_start : t;
        r = K(L, e, r, r === null ? e.first : r.next, w, o, l, v, s, T)
      }
      A.set(o, r), p = [], I = [], f = r.next;
      continue
    }
    if (_ && le(a, w, l, s), (a.e.f & X) !== 0 && (ne(a.e), E && ((Q = a.a) == null || Q.unfix(), (d ?? (d = new Set)).delete(a))), a !== f) {
      if (m !== void 0 && m.has(a)) {
        if (p.length < I.length) {
          var M = I[0],
            C;
          r = M.prev;
          var b = p[0],
            q = p[p.length - 1];
          for (C = 0; C < p.length; C += 1) G(p[C], M, t);
          for (C = 0; C < I.length; C += 1) m.delete(I[C]);
          N(e, b.prev, q.next), N(e, r, b), N(e, q, M), f = M, r = q, l -= 1, p = [], I = []
        } else m.delete(a), G(a, f, t), N(e, a.prev, a.next), N(e, a, r === null ? e.first : r.next), N(e, r, a), r = a;
        continue
      }
      for (p = [], I = []; f !== null && f.k !== o;)(f.e.f & X) === 0 && (m ?? (m = new Set)).add(f), I.push(f), f = f.next;
      if (f === null) continue;
      a = f
    }
    p.push(a), r = a, f = a.next
  }
  if (f !== null || m !== void 0) {
    for (var R = m === void 0 ? [] : re(m); f !== null;)(f.e.f & X) === 0 && R.push(f), f = f.next;
    var B = R.length;
    if (B > 0) {
      var ie = (s & ae) !== 0 && x === 0 ? t : null;
      if (E) {
        for (l = 0; l < B; l += 1)(W = R[l].a) == null || W.measure();
        for (l = 0; l < B; l += 1)(Z = R[l].a) == null || Z.fix()
      }
      He(e, R, ie)
    }
  }
  E && Ce(() => {
    var $;
    if (d !== void 0)
      for (a of d)($ = a.a) == null || $.apply()
  }), i.first = e.first && e.first.e, i.last = r && r.e;
  for (var se of u.values()) fe(se.e);
  u.clear()
}

function le(i, n, e, u) {
  (u & V) !== 0 && y(i.v, n), (u & Y) !== 0 ? y(i.i, e) : i.i = e
}

function K(i, n, e, u, t, v, s, c, T, E, _) {
  var x = g,
    A = (T & V) !== 0,
    S = (T & Ie) === 0,
    f = A ? S ? Ee(t, !1, !1) : j(t) : t,
    m = (T & Y) === 0 ? s : j(s),
    r = {
      i: m,
      v: f,
      k: v,
      a: null,
      e: null,
      prev: e,
      next: u
    };
  g = r;
  try {
    if (i === null) {
      var d = document.createDocumentFragment();
      d.append(i = ee())
    }
    return r.e = J(() => c(i, f, m, E), D), r.e.prev = e && e.e, r.e.next = u && u.e, e === null ? _ || (n.first = r) : (e.next = r, e.e.next = r.e), u !== null && (u.prev = r, u.e.prev = r.e), r
  } finally {
    g = x
  }
}

function G(i, n, e) {
  for (var u = i.next ? i.next.e.nodes_start : e, t = n ? n.e.nodes_start : e, v = i.e.nodes_start; v !== null && v !== u;) {
    var s = we(v);
    t.before(v), v = s
  }
}

function N(i, n, e) {
  n === null ? i.first = e : (n.next = e, n.e.next = e && e.e), e !== null && (e.prev = n, e.e.prev = n && n.e)
}
export {
  g as c, be as e, Le as i
};