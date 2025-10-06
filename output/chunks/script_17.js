import {
  j as ee,
  i as se,
  _ as ae,
  V as Y,
  h as N,
  X as ue,
  e as de,
  g as W,
  a0 as ve,
  a1 as oe,
  a2 as ce,
  a3 as Z,
  a4 as X,
  o as M,
  P as _e,
  a5 as he,
  k as P,
  m as be,
  a6 as L,
  a7 as O,
  l as pe,
  a8 as $,
  a9 as Ee,
  aa as j,
  ab as re,
  ac as me,
  ad as ne,
  q as we,
  ae as Te,
  af as k,
  L as Ie,
  ag as fe,
  ah as ge,
  Q as Ae,
  ai as ye,
  aj as De,
  ak as Ne,
  N as xe
} from "./TyfPWVbD.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "6fe71e2aef866a931e2568b1d6f6762fddc1f62d"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "5c149978-792e-4bc2-b6c9-0bd7bce161b0", f._sentryDebugIdIdentifier = "sentry-dbid-5c149978-792e-4bc2-b6c9-0bd7bce161b0")
  })()
} catch {}
let B = null;

function Re(f, r) {
  return r
}

function Ce(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var _ = d > 0 && u.length === 0 && e !== null;
  if (_) {
    var m = e.parentNode;
    De(m), m.append(e), s.clear(), g(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var E = 0; E < d; E++) {
      var o = r[E];
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
    m = (r & ae) !== 0;
  if (m) {
    var E = f;
    t = N ? Y(ue(E)) : E.appendChild(ee())
  }
  N && de();
  var o = null,
    y = !1,
    w = new Map,
    x = ve(() => {
      var v = e();
      return me(v) ? v : v == null ? [] : re(v)
    }),
    i, b;

  function n() {
    Se(b, i, _, w, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = P(() => d(t)) : o !== null && we(o, () => {
      o = null
    }))
  }
  se(() => {
    b ?? (b = xe), i = W(x);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let p = !1;
    if (N) {
      var T = oe(t) === ce;
      T !== (v === 0) && (t = Z(), Y(t), X(!1), p = !0)
    }
    if (N) {
      for (var A = null, c, a = 0; a < v; a++) {
        if (M.nodeType === _e && M.data === he) {
          t = M, p = !0, X(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        c = Q(M, _, A, null, l, h, a, u, r, e), _.items.set(h, c), A = c
      }
      v > 0 && Y(Z())
    }
    if (N) v === 0 && d && (o = P(() => d(t)));
    else if (be()) {
      var C = new Set,
        R = pe;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = _.items.get(h) ?? w.get(h);
        D ? (r & (L | O)) !== 0 && ie(D, l, a, r) : (c = Q(null, _, null, null, l, h, a, u, r, e, !0), w.set(h, c)), C.add(h)
      }
      for (const [I, H] of _.items) C.has(I) || R.skipped_effects.add(H.e);
      R.add_callback(n)
    } else n();
    p && X(!0), W(x)
  }), N && (t = M)
}

function Se(f, r, e, s, u, d, t, _, m) {
  var U, z, G, J;
  var E = (t & ge) !== 0,
    o = (t & (L | O)) !== 0,
    y = r.length,
    w = e.items,
    x = e.first,
    i = x,
    b, n = null,
    v, p = [],
    T = [],
    A, c, a, l;
  if (E)
    for (l = 0; l < y; l += 1) A = r[l], c = _(A, l), a = w.get(c), a !== void 0 && ((U = a.a) == null || U.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (A = r[l], c = _(A, l), a = w.get(c), a === void 0) {
      var h = s.get(c);
      if (h !== void 0) {
        s.delete(c), w.set(c, h);
        var C = n ? n.next : i;
        g(e, n, h), g(e, h, C), F(h, C, u), n = h
      } else {
        var R = i ? i.e.nodes_start : u;
        n = Q(R, e, n, n === null ? e.first : n.next, A, c, l, d, t, m)
      }
      w.set(c, n), p = [], T = [], i = n.next;
      continue
    }
    if (o && ie(a, A, l, t), (a.e.f & k) !== 0 && (ne(a.e), E && ((z = a.a) == null || z.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (b !== void 0 && b.has(a)) {
        if (p.length < T.length) {
          var D = T[0],
            I;
          n = D.prev;
          var H = p[0],
            q = p[p.length - 1];
          for (I = 0; I < p.length; I += 1) F(p[I], D, u);
          for (I = 0; I < T.length; I += 1) b.delete(T[I]);
          g(e, H.prev, q.next), g(e, n, H), g(e, q, D), i = D, n = q, l -= 1, p = [], T = []
        } else b.delete(a), F(a, i, u), g(e, a.prev, a.next), g(e, a, n === null ? e.first : n.next), g(e, n, a), n = a;
        continue
      }
      for (p = [], T = []; i !== null && i.k !== c;)(i.e.f & k) === 0 && (b ?? (b = new Set)).add(i), T.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    p.push(a), n = a, i = a.next
  }
  if (i !== null || b !== void 0) {
    for (var S = b === void 0 ? [] : re(b); i !== null;)(i.e.f & k) === 0 && S.push(i), i = i.next;
    var V = S.length;
    if (V > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (E) {
        for (l = 0; l < V; l += 1)(G = S[l].a) == null || G.measure();
        for (l = 0; l < V; l += 1)(J = S[l].a) == null || J.fix()
      }
      Ce(e, S, le)
    }
  }
  E && Ie(() => {
    var K;
    if (v !== void 0)
      for (a of v)(K = a.a) == null || K.apply()
  }), f.first = e.first && e.first.e, f.last = n && n.e;
  for (var te of s.values()) fe(te.e);
  s.clear()
}

function ie(f, r, e, s) {
  (s & L) !== 0 && $(f.v, r), (s & O) !== 0 ? $(f.i, e) : f.i = e
}

function Q(f, r, e, s, u, d, t, _, m, E, o) {
  var y = B,
    w = (m & L) !== 0,
    x = (m & Te) === 0,
    i = w ? x ? Ee(u, !1, !1) : j(u) : u,
    b = (m & O) === 0 ? t : j(t),
    n = {
      i: b,
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
    return n.e = P(() => _(f, i, b, E), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
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