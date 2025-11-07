import {
  j as ee,
  i as se,
  Z as ae,
  _ as V,
  h as N,
  a0 as ue,
  e as de,
  g as P,
  a1 as ve,
  a2 as oe,
  a3 as _e,
  a4 as Q,
  a5 as k,
  o as M,
  a6 as ce,
  a7 as he,
  k as W,
  m as be,
  a8 as O,
  a9 as L,
  l as pe,
  aa as $,
  ab as Ee,
  ac as j,
  ad as re,
  ae as me,
  af as ne,
  q as we,
  ag as Te,
  ah as B,
  W as Ie,
  ai as fe,
  aj as ge,
  ak as Ae,
  al as ye,
  am as De,
  an as Ne,
  ao as xe
} from "./t6Scptgh.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "30982d7718bbc4a833ef39834f2cfbbfa1f546ae"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "8b422b54-f84b-4831-9cf8-5388ab84affc", f._sentryDebugIdIdentifier = "sentry-dbid-8b422b54-f84b-4831-9cf8-5388ab84affc")
  })()
} catch {}
let F = null;

function Re(f, r) {
  return r
}

function Ce(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var c = d > 0 && u.length === 0 && e !== null;
  if (c) {
    var m = e.parentNode;
    De(m), m.append(e), s.clear(), g(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var E = 0; E < d; E++) {
      var o = r[E];
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
    var E = f;
    t = N ? V(ue(E)) : E.appendChild(ee())
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
    Se(b, i, c, w, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = W(() => d(t)) : o !== null && we(o, () => {
      o = null
    }))
  }
  se(() => {
    b ?? (b = xe), i = P(x);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let p = !1;
    if (N) {
      var T = oe(t) === _e;
      T !== (v === 0) && (t = Q(), V(t), k(!1), p = !0)
    }
    if (N) {
      for (var A = null, _, a = 0; a < v; a++) {
        if (M.nodeType === ce && M.data === he) {
          t = M, p = !0, k(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        _ = X(M, c, A, null, l, h, a, u, r, e), c.items.set(h, _), A = _
      }
      v > 0 && V(Q())
    }
    if (N) v === 0 && d && (o = W(() => d(t)));
    else if (be()) {
      var C = new Set,
        R = pe;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = c.items.get(h) ?? w.get(h);
        D ? (r & (O | L)) !== 0 && ie(D, l, a, r) : (_ = X(null, c, null, null, l, h, a, u, r, e, !0), w.set(h, _)), C.add(h)
      }
      for (const [I, H] of c.items) C.has(I) || R.skipped_effects.add(H.e);
      R.add_callback(n)
    } else n();
    p && k(!0), P(x)
  }), N && (t = M)
}

function Se(f, r, e, s, u, d, t, c, m) {
  var Z, z, G, J;
  var E = (t & ge) !== 0,
    o = (t & (O | L)) !== 0,
    y = r.length,
    w = e.items,
    x = e.first,
    i = x,
    b, n = null,
    v, p = [],
    T = [],
    A, _, a, l;
  if (E)
    for (l = 0; l < y; l += 1) A = r[l], _ = c(A, l), a = w.get(_), a !== void 0 && ((Z = a.a) == null || Z.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (A = r[l], _ = c(A, l), a = w.get(_), a === void 0) {
      var h = s.get(_);
      if (h !== void 0) {
        s.delete(_), w.set(_, h);
        var C = n ? n.next : i;
        g(e, n, h), g(e, h, C), U(h, C, u), n = h
      } else {
        var R = i ? i.e.nodes_start : u;
        n = X(R, e, n, n === null ? e.first : n.next, A, _, l, d, t, m)
      }
      w.set(_, n), p = [], T = [], i = n.next;
      continue
    }
    if (o && ie(a, A, l, t), (a.e.f & B) !== 0 && (ne(a.e), E && ((z = a.a) == null || z.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (b !== void 0 && b.has(a)) {
        if (p.length < T.length) {
          var D = T[0],
            I;
          n = D.prev;
          var H = p[0],
            q = p[p.length - 1];
          for (I = 0; I < p.length; I += 1) U(p[I], D, u);
          for (I = 0; I < T.length; I += 1) b.delete(T[I]);
          g(e, H.prev, q.next), g(e, n, H), g(e, q, D), i = D, n = q, l -= 1, p = [], T = []
        } else b.delete(a), U(a, i, u), g(e, a.prev, a.next), g(e, a, n === null ? e.first : n.next), g(e, n, a), n = a;
        continue
      }
      for (p = [], T = []; i !== null && i.k !== _;)(i.e.f & B) === 0 && (b ?? (b = new Set)).add(i), T.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    p.push(a), n = a, i = a.next
  }
  if (i !== null || b !== void 0) {
    for (var S = b === void 0 ? [] : re(b); i !== null;)(i.e.f & B) === 0 && S.push(i), i = i.next;
    var Y = S.length;
    if (Y > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (E) {
        for (l = 0; l < Y; l += 1)(G = S[l].a) == null || G.measure();
        for (l = 0; l < Y; l += 1)(J = S[l].a) == null || J.fix()
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
  (s & O) !== 0 && $(f.v, r), (s & L) !== 0 ? $(f.i, e) : f.i = e
}

function X(f, r, e, s, u, d, t, c, m, E, o) {
  var y = F,
    w = (m & O) !== 0,
    x = (m & Te) === 0,
    i = w ? x ? Ee(u, !1, !1) : j(u) : u,
    b = (m & L) === 0 ? t : j(t),
    n = {
      i: b,
      v: i,
      k: d,
      a: null,
      e: null,
      prev: e,
      next: s
    };
  F = n;
  try {
    if (f === null) {
      var v = document.createDocumentFragment();
      v.append(f = ee())
    }
    return n.e = W(() => c(f, i, b, E), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
  } finally {
    F = y
  }
}

function U(f, r, e) {
  for (var s = f.next ? f.next.e.nodes_start : e, u = r ? r.e.nodes_start : e, d = f.e.nodes_start; d !== null && d !== s;) {
    var t = Ae(d);
    u.before(d), d = t
  }
}

function g(f, r, e) {
  r === null ? f.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e)
}
export {
  F as c, He as e, Re as i
};