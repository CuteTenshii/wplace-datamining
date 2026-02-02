import {
  H as ee,
  m as se,
  U as ae,
  P as q,
  k as N,
  V as ue,
  l as de,
  j as z,
  W as ve,
  M as oe,
  N as _e,
  O as K,
  Q as F,
  J as M,
  X as ce,
  Y as he,
  I as G,
  L as pe,
  Z as O,
  _ as L,
  C as be,
  a0 as $,
  a1 as Ee,
  a2 as j,
  a3 as re,
  a4 as me,
  D as ne,
  G as we,
  a5 as Te,
  a6 as U,
  S as Ie,
  F as fe,
  a7 as Ae,
  a8 as ye,
  a9 as De,
  aa as ge,
  ab as Ne,
  ac as Ce
} from "./CJKTONAG.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "dd5dce8d-1aea-48b0-8774-68bdc5a6af37", f._sentryDebugIdIdentifier = "sentry-dbid-dd5dce8d-1aea-48b0-8774-68bdc5a6af37")
  })()
} catch {}
let X = null;

function Re(f, r) {
  return r
}

function Se(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) De(r[t].e, u, !0);
  var c = d > 0 && u.length === 0 && e !== null;
  if (c) {
    var m = e.parentNode;
    ge(m), m.append(e), s.clear(), A(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var E = 0; E < d; E++) {
      var o = r[E];
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
    m = (r & ae) !== 0;
  if (m) {
    var E = f;
    t = N ? q(ue(E)) : E.appendChild(ee())
  }
  N && de();
  var o = null,
    D = !1,
    w = new Map,
    C = ve(() => {
      var v = e();
      return me(v) ? v : v == null ? [] : re(v)
    }),
    i, p;

  function n() {
    xe(p, i, c, w, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = G(() => d(t)) : o !== null && we(o, () => {
      o = null
    }))
  }
  se(() => {
    p ?? (p = Ce), i = z(C);
    var v = i.length;
    if (D && v === 0) return;
    D = v === 0;
    let b = !1;
    if (N) {
      var T = oe(t) === _e;
      T !== (v === 0) && (t = K(), q(t), F(!1), b = !0)
    }
    if (N) {
      for (var y = null, _, a = 0; a < v; a++) {
        if (M.nodeType === ce && M.data === he) {
          t = M, b = !0, F(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        _ = J(M, c, y, null, l, h, a, u, r, e), c.items.set(h, _), y = _
      }
      v > 0 && q(K())
    }
    if (N) v === 0 && d && (o = G(() => d(t)));
    else if (pe()) {
      var S = new Set,
        R = be;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var g = c.items.get(h) ?? w.get(h);
        g ? (r & (O | L)) !== 0 && ie(g, l, a, r) : (_ = J(null, c, null, null, l, h, a, u, r, e, !0), w.set(h, _)), S.add(h)
      }
      for (const [I, H] of c.items) S.has(I) || R.skipped_effects.add(H.e);
      R.oncommit(n)
    } else n();
    b && F(!0), z(C)
  }), N && (t = M)
}

function xe(f, r, e, s, u, d, t, c, m) {
  var P, Q, W, Z;
  var E = (t & Ae) !== 0,
    o = (t & (O | L)) !== 0,
    D = r.length,
    w = e.items,
    C = e.first,
    i = C,
    p, n = null,
    v, b = [],
    T = [],
    y, _, a, l;
  if (E)
    for (l = 0; l < D; l += 1) y = r[l], _ = c(y, l), a = w.get(_), a !== void 0 && ((P = a.a) == null || P.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < D; l += 1) {
    if (y = r[l], _ = c(y, l), a = w.get(_), a === void 0) {
      var h = s.get(_);
      if (h !== void 0) {
        s.delete(_), w.set(_, h);
        var S = n ? n.next : i;
        A(e, n, h), A(e, h, S), B(h, S, u), n = h
      } else {
        var R = i ? i.e.nodes_start : u;
        n = J(R, e, n, n === null ? e.first : n.next, y, _, l, d, t, m)
      }
      w.set(_, n), b = [], T = [], i = n.next;
      continue
    }
    if (o && ie(a, y, l, t), (a.e.f & U) !== 0 && (ne(a.e), E && ((Q = a.a) == null || Q.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (p !== void 0 && p.has(a)) {
        if (b.length < T.length) {
          var g = T[0],
            I;
          n = g.prev;
          var H = b[0],
            Y = b[b.length - 1];
          for (I = 0; I < b.length; I += 1) B(b[I], g, u);
          for (I = 0; I < T.length; I += 1) p.delete(T[I]);
          A(e, H.prev, Y.next), A(e, n, H), A(e, Y, g), i = g, n = Y, l -= 1, b = [], T = []
        } else p.delete(a), B(a, i, u), A(e, a.prev, a.next), A(e, a, n === null ? e.first : n.next), A(e, n, a), n = a;
        continue
      }
      for (b = [], T = []; i !== null && i.k !== _;)(i.e.f & U) === 0 && (p ?? (p = new Set)).add(i), T.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    b.push(a), n = a, i = a.next
  }
  if (i !== null || p !== void 0) {
    for (var x = p === void 0 ? [] : re(p); i !== null;)(i.e.f & U) === 0 && x.push(i), i = i.next;
    var V = x.length;
    if (V > 0) {
      var le = (t & ae) !== 0 && D === 0 ? u : null;
      if (E) {
        for (l = 0; l < V; l += 1)(W = x[l].a) == null || W.measure();
        for (l = 0; l < V; l += 1)(Z = x[l].a) == null || Z.fix()
      }
      Se(e, x, le)
    }
  }
  E && Ie(() => {
    var k;
    if (v !== void 0)
      for (a of v)(k = a.a) == null || k.apply()
  }), f.first = e.first && e.first.e, f.last = n && n.e;
  for (var te of s.values()) fe(te.e);
  s.clear()
}

function ie(f, r, e, s) {
  (s & O) !== 0 && $(f.v, r), (s & L) !== 0 ? $(f.i, e) : f.i = e
}

function J(f, r, e, s, u, d, t, c, m, E, o) {
  var D = X,
    w = (m & O) !== 0,
    C = (m & Te) === 0,
    i = w ? C ? Ee(u, !1, !1) : j(u) : u,
    p = (m & L) === 0 ? t : j(t),
    n = {
      i: p,
      v: i,
      k: d,
      a: null,
      e: null,
      prev: e,
      next: s
    };
  X = n;
  try {
    if (f === null) {
      var v = document.createDocumentFragment();
      v.append(f = ee())
    }
    return n.e = G(() => c(f, i, p, E), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
  } finally {
    X = D
  }
}

function B(f, r, e) {
  for (var s = f.next ? f.next.e.nodes_start : e, u = r ? r.e.nodes_start : e, d = f.e.nodes_start; d !== null && d !== s;) {
    var t = ye(d);
    u.before(d), d = t
  }
}

function A(f, r, e) {
  r === null ? f.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e)
}
export {
  X as c, He as e, Re as i
};