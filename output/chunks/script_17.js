import {
  j as ee,
  i as se,
  a4 as ae,
  a1 as V,
  h as N,
  a3 as ue,
  e as de,
  g as W,
  a5 as ve,
  a6 as oe,
  a7 as _e,
  a8 as Z,
  a9 as X,
  o as M,
  X as ce,
  aa as he,
  k as U,
  m as pe,
  ab as O,
  ac as L,
  l as Ee,
  ad as $,
  ae as be,
  af as j,
  ag as re,
  ah as me,
  ai as ne,
  q as we,
  aj as Te,
  ak as k,
  S as Ie,
  al as fe,
  am as ge,
  Y as Ae,
  an as ye,
  ao as De,
  ap as Ne,
  V as Se
} from "./BR3IUnhn.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "b227214883eb8641881975e44ed77db97966a3e5"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "80f785c7-d60f-4c00-9b12-18de2850f02d", f._sentryDebugIdIdentifier = "sentry-dbid-80f785c7-d60f-4c00-9b12-18de2850f02d")
  })()
} catch {}
let B = null;

function Re(f, r) {
  return r
}

function xe(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var c = d > 0 && u.length === 0 && e !== null;
  if (c) {
    var m = e.parentNode;
    De(m), m.append(e), s.clear(), g(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var b = 0; b < d; b++) {
      var o = r[b];
      c || (s.delete(o.k), g(f, o.prev, o.next)), fe(o.e, !c)
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
    var b = f;
    t = N ? V(ue(b)) : b.appendChild(ee())
  }
  N && de();
  var o = null,
    y = !1,
    w = new Map,
    S = ve(() => {
      var v = e();
      return me(v) ? v : v == null ? [] : re(v)
    }),
    i, p;

  function n() {
    Ce(p, i, c, w, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = U(() => d(t)) : o !== null && we(o, () => {
      o = null
    }))
  }
  se(() => {
    p ?? (p = Se), i = W(S);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let E = !1;
    if (N) {
      var T = oe(t) === _e;
      T !== (v === 0) && (t = Z(), V(t), X(!1), E = !0)
    }
    if (N) {
      for (var A = null, _, a = 0; a < v; a++) {
        if (M.nodeType === ce && M.data === he) {
          t = M, E = !0, X(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        _ = z(M, c, A, null, l, h, a, u, r, e), c.items.set(h, _), A = _
      }
      v > 0 && V(Z())
    }
    if (N) v === 0 && d && (o = U(() => d(t)));
    else if (pe()) {
      var x = new Set,
        R = Ee;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = c.items.get(h) ?? w.get(h);
        D ? (r & (O | L)) !== 0 && ie(D, l, a, r) : (_ = z(null, c, null, null, l, h, a, u, r, e, !0), w.set(h, _)), x.add(h)
      }
      for (const [I, H] of c.items) x.has(I) || R.skipped_effects.add(H.e);
      R.add_callback(n)
    } else n();
    E && X(!0), W(S)
  }), N && (t = M)
}

function Ce(f, r, e, s, u, d, t, c, m) {
  var G, J, K, P;
  var b = (t & ge) !== 0,
    o = (t & (O | L)) !== 0,
    y = r.length,
    w = e.items,
    S = e.first,
    i = S,
    p, n = null,
    v, E = [],
    T = [],
    A, _, a, l;
  if (b)
    for (l = 0; l < y; l += 1) A = r[l], _ = c(A, l), a = w.get(_), a !== void 0 && ((G = a.a) == null || G.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (A = r[l], _ = c(A, l), a = w.get(_), a === void 0) {
      var h = s.get(_);
      if (h !== void 0) {
        s.delete(_), w.set(_, h);
        var x = n ? n.next : i;
        g(e, n, h), g(e, h, x), F(h, x, u), n = h
      } else {
        var R = i ? i.e.nodes_start : u;
        n = z(R, e, n, n === null ? e.first : n.next, A, _, l, d, t, m)
      }
      w.set(_, n), E = [], T = [], i = n.next;
      continue
    }
    if (o && ie(a, A, l, t), (a.e.f & k) !== 0 && (ne(a.e), b && ((J = a.a) == null || J.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (p !== void 0 && p.has(a)) {
        if (E.length < T.length) {
          var D = T[0],
            I;
          n = D.prev;
          var H = E[0],
            Y = E[E.length - 1];
          for (I = 0; I < E.length; I += 1) F(E[I], D, u);
          for (I = 0; I < T.length; I += 1) p.delete(T[I]);
          g(e, H.prev, Y.next), g(e, n, H), g(e, Y, D), i = D, n = Y, l -= 1, E = [], T = []
        } else p.delete(a), F(a, i, u), g(e, a.prev, a.next), g(e, a, n === null ? e.first : n.next), g(e, n, a), n = a;
        continue
      }
      for (E = [], T = []; i !== null && i.k !== _;)(i.e.f & k) === 0 && (p ?? (p = new Set)).add(i), T.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    E.push(a), n = a, i = a.next
  }
  if (i !== null || p !== void 0) {
    for (var C = p === void 0 ? [] : re(p); i !== null;)(i.e.f & k) === 0 && C.push(i), i = i.next;
    var q = C.length;
    if (q > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (b) {
        for (l = 0; l < q; l += 1)(K = C[l].a) == null || K.measure();
        for (l = 0; l < q; l += 1)(P = C[l].a) == null || P.fix()
      }
      xe(e, C, le)
    }
  }
  b && Ie(() => {
    var Q;
    if (v !== void 0)
      for (a of v)(Q = a.a) == null || Q.apply()
  }), f.first = e.first && e.first.e, f.last = n && n.e;
  for (var te of s.values()) fe(te.e);
  s.clear()
}

function ie(f, r, e, s) {
  (s & O) !== 0 && $(f.v, r), (s & L) !== 0 ? $(f.i, e) : f.i = e
}

function z(f, r, e, s, u, d, t, c, m, b, o) {
  var y = B,
    w = (m & O) !== 0,
    S = (m & Te) === 0,
    i = w ? S ? be(u, !1, !1) : j(u) : u,
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
  B = n;
  try {
    if (f === null) {
      var v = document.createDocumentFragment();
      v.append(f = ee())
    }
    return n.e = U(() => c(f, i, p, b), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
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