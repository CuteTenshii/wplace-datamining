import {
  T as ee,
  m as se,
  U as ae,
  O as q,
  k as N,
  V as ue,
  l as de,
  j as K,
  W as ve,
  L as oe,
  M as _e,
  N as Q,
  P as U,
  X as R,
  Y as ce,
  Z as he,
  _ as P,
  a0 as pe,
  a1 as O,
  a2 as L,
  a3 as Ee,
  a4 as $,
  a5 as me,
  a6 as j,
  a7 as re,
  a8 as be,
  a9 as ne,
  aa as Te,
  ab as we,
  ac as X,
  R as Ie,
  ad as fe,
  ae as Ae,
  af as ge,
  ag as ye,
  ah as De,
  ai as Ne,
  aj as xe
} from "./CYj7RoHR.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "bf269f6a-731f-4cd8-a697-d94cc8dda9ed", f._sentryDebugIdIdentifier = "sentry-dbid-bf269f6a-731f-4cd8-a697-d94cc8dda9ed")
  })()
} catch {}
let B = null;

function Se(f, r) {
  return r
}

function Ce(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var c = d > 0 && u.length === 0 && e !== null;
  if (c) {
    var b = e.parentNode;
    De(b), b.append(e), s.clear(), A(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var m = 0; m < d; m++) {
      var o = r[m];
      c || (s.delete(o.k), A(f, o.prev, o.next)), fe(o.e, !c)
    }
  })
}

function He(f, r, e, s, u, d = null) {
  var t = f,
    c = {
      flags: r,
      items: new Map,
      first: null
    },
    b = (r & ae) !== 0;
  if (b) {
    var m = f;
    t = N ? q(ue(m)) : m.appendChild(ee())
  }
  N && de();
  var o = null,
    y = !1,
    T = new Map,
    x = ve(() => {
      var v = e();
      return be(v) ? v : v == null ? [] : re(v)
    }),
    i, p;

  function n() {
    Me(p, i, c, T, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = P(() => d(t)) : o !== null && Te(o, () => {
      o = null
    }))
  }
  se(() => {
    p ?? (p = xe), i = K(x);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let E = !1;
    if (N) {
      var w = oe(t) === _e;
      w !== (v === 0) && (t = Q(), q(t), U(!1), E = !0)
    }
    if (N) {
      for (var g = null, _, a = 0; a < v; a++) {
        if (R.nodeType === ce && R.data === he) {
          t = R, E = !0, U(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        _ = W(R, c, g, null, l, h, a, u, r, e), c.items.set(h, _), g = _
      }
      v > 0 && q(Q())
    }
    if (N) v === 0 && d && (o = P(() => d(t)));
    else if (pe()) {
      var C = new Set,
        S = Ee;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = c.items.get(h) ?? T.get(h);
        D ? (r & (O | L)) !== 0 && ie(D, l, a, r) : (_ = W(null, c, null, null, l, h, a, u, r, e, !0), T.set(h, _)), C.add(h)
      }
      for (const [I, H] of c.items) C.has(I) || S.skipped_effects.add(H.e);
      S.oncommit(n)
    } else n();
    E && U(!0), K(x)
  }), N && (t = R)
}

function Me(f, r, e, s, u, d, t, c, b) {
  var Z, k, z, G;
  var m = (t & Ae) !== 0,
    o = (t & (O | L)) !== 0,
    y = r.length,
    T = e.items,
    x = e.first,
    i = x,
    p, n = null,
    v, E = [],
    w = [],
    g, _, a, l;
  if (m)
    for (l = 0; l < y; l += 1) g = r[l], _ = c(g, l), a = T.get(_), a !== void 0 && ((Z = a.a) == null || Z.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (g = r[l], _ = c(g, l), a = T.get(_), a === void 0) {
      var h = s.get(_);
      if (h !== void 0) {
        s.delete(_), T.set(_, h);
        var C = n ? n.next : i;
        A(e, n, h), A(e, h, C), F(h, C, u), n = h
      } else {
        var S = i ? i.e.nodes_start : u;
        n = W(S, e, n, n === null ? e.first : n.next, g, _, l, d, t, b)
      }
      T.set(_, n), E = [], w = [], i = n.next;
      continue
    }
    if (o && ie(a, g, l, t), (a.e.f & X) !== 0 && (ne(a.e), m && ((k = a.a) == null || k.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (p !== void 0 && p.has(a)) {
        if (E.length < w.length) {
          var D = w[0],
            I;
          n = D.prev;
          var H = E[0],
            Y = E[E.length - 1];
          for (I = 0; I < E.length; I += 1) F(E[I], D, u);
          for (I = 0; I < w.length; I += 1) p.delete(w[I]);
          A(e, H.prev, Y.next), A(e, n, H), A(e, Y, D), i = D, n = Y, l -= 1, E = [], w = []
        } else p.delete(a), F(a, i, u), A(e, a.prev, a.next), A(e, a, n === null ? e.first : n.next), A(e, n, a), n = a;
        continue
      }
      for (E = [], w = []; i !== null && i.k !== _;)(i.e.f & X) === 0 && (p ?? (p = new Set)).add(i), w.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    E.push(a), n = a, i = a.next
  }
  if (i !== null || p !== void 0) {
    for (var M = p === void 0 ? [] : re(p); i !== null;)(i.e.f & X) === 0 && M.push(i), i = i.next;
    var V = M.length;
    if (V > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (m) {
        for (l = 0; l < V; l += 1)(z = M[l].a) == null || z.measure();
        for (l = 0; l < V; l += 1)(G = M[l].a) == null || G.fix()
      }
      Ce(e, M, le)
    }
  }
  m && Ie(() => {
    var J;
    if (v !== void 0)
      for (a of v)(J = a.a) == null || J.apply()
  }), f.first = e.first && e.first.e, f.last = n && n.e;
  for (var te of s.values()) fe(te.e);
  s.clear()
}

function ie(f, r, e, s) {
  (s & O) !== 0 && $(f.v, r), (s & L) !== 0 ? $(f.i, e) : f.i = e
}

function W(f, r, e, s, u, d, t, c, b, m, o) {
  var y = B,
    T = (b & O) !== 0,
    x = (b & we) === 0,
    i = T ? x ? me(u, !1, !1) : j(u) : u,
    p = (b & L) === 0 ? t : j(t),
    n = {
      i: p,
      v: i,
      k: d,
      a: null,
      e: null,
      prev: e,
      next: s
    };
  B = n;
  try {
    if (f === null) {
      var v = document.createDocumentFragment();
      v.append(f = ee())
    }
    return n.e = P(() => c(f, i, p, m), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
  } finally {
    B = y
  }
}

function F(f, r, e) {
  for (var s = f.next ? f.next.e.nodes_start : e, u = r ? r.e.nodes_start : e, d = f.e.nodes_start; d !== null && d !== s;) {
    var t = ge(d);
    u.before(d), d = t
  }
}

function A(f, r, e) {
  r === null ? f.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e)
}
export {
  B as c, He as e, Se as i
};