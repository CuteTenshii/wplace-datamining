import {
  j as ee,
  i as se,
  T as ae,
  U as V,
  h as N,
  V as ue,
  e as de,
  g as P,
  W as ve,
  X as oe,
  Y as ce,
  Z as Q,
  _ as U,
  o as M,
  a0 as _e,
  a1 as he,
  k as W,
  m as pe,
  a2 as O,
  a3 as L,
  l as Ee,
  a4 as $,
  a5 as me,
  a6 as j,
  a7 as re,
  a8 as be,
  a9 as ne,
  q as Te,
  aa as we,
  ab as X,
  S as Ie,
  ac as fe,
  ad as ge,
  ae as Ae,
  af as ye,
  ag as De,
  ah as Ne,
  ai as Se
} from "./DUWZzbWe.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "d923d5dc-783d-4f39-b51a-e573f3f63438", f._sentryDebugIdIdentifier = "sentry-dbid-d923d5dc-783d-4f39-b51a-e573f3f63438")
  })()
} catch {}
let B = null;

function Re(f, r) {
  return r
}

function xe(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var _ = d > 0 && u.length === 0 && e !== null;
  if (_) {
    var b = e.parentNode;
    De(b), b.append(e), s.clear(), g(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var m = 0; m < d; m++) {
      var o = r[m];
      _ || (s.delete(o.k), g(f, o.prev, o.next)), fe(o.e, !_)
    }
  })
}

function He(f, r, e, s, u, d = null) {
  var t = f,
    _ = {
      flags: r,
      items: new Map,
      first: null
    },
    b = (r & ae) !== 0;
  if (b) {
    var m = f;
    t = N ? V(ue(m)) : m.appendChild(ee())
  }
  N && de();
  var o = null,
    y = !1,
    T = new Map,
    S = ve(() => {
      var v = e();
      return be(v) ? v : v == null ? [] : re(v)
    }),
    i, p;

  function n() {
    Ce(p, i, _, T, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = W(() => d(t)) : o !== null && Te(o, () => {
      o = null
    }))
  }
  se(() => {
    p ?? (p = Se), i = P(S);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let E = !1;
    if (N) {
      var w = oe(t) === ce;
      w !== (v === 0) && (t = Q(), V(t), U(!1), E = !0)
    }
    if (N) {
      for (var A = null, c, a = 0; a < v; a++) {
        if (M.nodeType === _e && M.data === he) {
          t = M, E = !0, U(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        c = Z(M, _, A, null, l, h, a, u, r, e), _.items.set(h, c), A = c
      }
      v > 0 && V(Q())
    }
    if (N) v === 0 && d && (o = W(() => d(t)));
    else if (pe()) {
      var x = new Set,
        R = Ee;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = _.items.get(h) ?? T.get(h);
        D ? (r & (O | L)) !== 0 && ie(D, l, a, r) : (c = Z(null, _, null, null, l, h, a, u, r, e, !0), T.set(h, c)), x.add(h)
      }
      for (const [I, H] of _.items) x.has(I) || R.skipped_effects.add(H.e);
      R.add_callback(n)
    } else n();
    E && U(!0), P(S)
  }), N && (t = M)
}

function Ce(f, r, e, s, u, d, t, _, b) {
  var k, z, G, J;
  var m = (t & ge) !== 0,
    o = (t & (O | L)) !== 0,
    y = r.length,
    T = e.items,
    S = e.first,
    i = S,
    p, n = null,
    v, E = [],
    w = [],
    A, c, a, l;
  if (m)
    for (l = 0; l < y; l += 1) A = r[l], c = _(A, l), a = T.get(c), a !== void 0 && ((k = a.a) == null || k.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (A = r[l], c = _(A, l), a = T.get(c), a === void 0) {
      var h = s.get(c);
      if (h !== void 0) {
        s.delete(c), T.set(c, h);
        var x = n ? n.next : i;
        g(e, n, h), g(e, h, x), F(h, x, u), n = h
      } else {
        var R = i ? i.e.nodes_start : u;
        n = Z(R, e, n, n === null ? e.first : n.next, A, c, l, d, t, b)
      }
      T.set(c, n), E = [], w = [], i = n.next;
      continue
    }
    if (o && ie(a, A, l, t), (a.e.f & X) !== 0 && (ne(a.e), m && ((z = a.a) == null || z.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (p !== void 0 && p.has(a)) {
        if (E.length < w.length) {
          var D = w[0],
            I;
          n = D.prev;
          var H = E[0],
            Y = E[E.length - 1];
          for (I = 0; I < E.length; I += 1) F(E[I], D, u);
          for (I = 0; I < w.length; I += 1) p.delete(w[I]);
          g(e, H.prev, Y.next), g(e, n, H), g(e, Y, D), i = D, n = Y, l -= 1, E = [], w = []
        } else p.delete(a), F(a, i, u), g(e, a.prev, a.next), g(e, a, n === null ? e.first : n.next), g(e, n, a), n = a;
        continue
      }
      for (E = [], w = []; i !== null && i.k !== c;)(i.e.f & X) === 0 && (p ?? (p = new Set)).add(i), w.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    E.push(a), n = a, i = a.next
  }
  if (i !== null || p !== void 0) {
    for (var C = p === void 0 ? [] : re(p); i !== null;)(i.e.f & X) === 0 && C.push(i), i = i.next;
    var q = C.length;
    if (q > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (m) {
        for (l = 0; l < q; l += 1)(G = C[l].a) == null || G.measure();
        for (l = 0; l < q; l += 1)(J = C[l].a) == null || J.fix()
      }
      xe(e, C, le)
    }
  }
  m && Ie(() => {
    var K;
    if (v !== void 0)
      for (a of v)(K = a.a) == null || K.apply()
  }), f.first = e.first && e.first.e, f.last = n && n.e;
  for (var te of s.values()) fe(te.e);
  s.clear()
}

function ie(f, r, e, s) {
  (s & O) !== 0 && $(f.v, r), (s & L) !== 0 ? $(f.i, e) : f.i = e
}

function Z(f, r, e, s, u, d, t, _, b, m, o) {
  var y = B,
    T = (b & O) !== 0,
    S = (b & we) === 0,
    i = T ? S ? me(u, !1, !1) : j(u) : u,
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
    return n.e = W(() => _(f, i, p, m), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
  } finally {
    B = y
  }
}

function F(f, r, e) {
  for (var s = f.next ? f.next.e.nodes_start : e, u = r ? r.e.nodes_start : e, d = f.e.nodes_start; d !== null && d !== s;) {
    var t = Ae(d);
    u.before(d), d = t
  }
}

function g(f, r, e) {
  r === null ? f.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e)
}
export {
  B as c, He as e, Re as i
};