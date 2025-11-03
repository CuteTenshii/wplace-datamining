import {
  l as ee,
  k as se,
  Z as ae,
  _ as V,
  i as N,
  a0 as ue,
  j as de,
  h as P,
  a1 as ve,
  a2 as oe,
  a3 as ce,
  a4 as Q,
  a5 as k,
  v as M,
  a6 as _e,
  a7 as he,
  m as W,
  q as pe,
  a8 as O,
  a9 as L,
  o as Ee,
  aa as $,
  ab as be,
  ac as j,
  ad as re,
  ae as me,
  af as ne,
  w as we,
  ag as Te,
  ah as B,
  W as Ie,
  ai as fe,
  aj as Ae,
  ak as ge,
  al as ye,
  am as De,
  an as Ne,
  ao as xe
} from "./KRt5sQSh.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "a0d804b3-454b-4c3d-a7e8-a94d839aa160", f._sentryDebugIdIdentifier = "sentry-dbid-a0d804b3-454b-4c3d-a7e8-a94d839aa160")
  })()
} catch {}
let F = null;

function Re(f, r) {
  return r
}

function Ce(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var _ = d > 0 && u.length === 0 && e !== null;
  if (_) {
    var m = e.parentNode;
    De(m), m.append(e), s.clear(), A(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var b = 0; b < d; b++) {
      var o = r[b];
      _ || (s.delete(o.k), A(f, o.prev, o.next)), fe(o.e, !_)
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
    var b = f;
    t = N ? V(ue(b)) : b.appendChild(ee())
  }
  N && de();
  var o = null,
    y = !1,
    w = new Map,
    x = ve(() => {
      var v = e();
      return me(v) ? v : v == null ? [] : re(v)
    }),
    i, p;

  function n() {
    Se(p, i, _, w, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = W(() => d(t)) : o !== null && we(o, () => {
      o = null
    }))
  }
  se(() => {
    p ?? (p = xe), i = P(x);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let E = !1;
    if (N) {
      var T = oe(t) === ce;
      T !== (v === 0) && (t = Q(), V(t), k(!1), E = !0)
    }
    if (N) {
      for (var g = null, c, a = 0; a < v; a++) {
        if (M.nodeType === _e && M.data === he) {
          t = M, E = !0, k(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        c = X(M, _, g, null, l, h, a, u, r, e), _.items.set(h, c), g = c
      }
      v > 0 && V(Q())
    }
    if (N) v === 0 && d && (o = W(() => d(t)));
    else if (pe()) {
      var C = new Set,
        R = Ee;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = _.items.get(h) ?? w.get(h);
        D ? (r & (O | L)) !== 0 && ie(D, l, a, r) : (c = X(null, _, null, null, l, h, a, u, r, e, !0), w.set(h, c)), C.add(h)
      }
      for (const [I, H] of _.items) C.has(I) || R.skipped_effects.add(H.e);
      R.add_callback(n)
    } else n();
    E && k(!0), P(x)
  }), N && (t = M)
}

function Se(f, r, e, s, u, d, t, _, m) {
  var Z, z, G, J;
  var b = (t & Ae) !== 0,
    o = (t & (O | L)) !== 0,
    y = r.length,
    w = e.items,
    x = e.first,
    i = x,
    p, n = null,
    v, E = [],
    T = [],
    g, c, a, l;
  if (b)
    for (l = 0; l < y; l += 1) g = r[l], c = _(g, l), a = w.get(c), a !== void 0 && ((Z = a.a) == null || Z.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (g = r[l], c = _(g, l), a = w.get(c), a === void 0) {
      var h = s.get(c);
      if (h !== void 0) {
        s.delete(c), w.set(c, h);
        var C = n ? n.next : i;
        A(e, n, h), A(e, h, C), U(h, C, u), n = h
      } else {
        var R = i ? i.e.nodes_start : u;
        n = X(R, e, n, n === null ? e.first : n.next, g, c, l, d, t, m)
      }
      w.set(c, n), E = [], T = [], i = n.next;
      continue
    }
    if (o && ie(a, g, l, t), (a.e.f & B) !== 0 && (ne(a.e), b && ((z = a.a) == null || z.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (p !== void 0 && p.has(a)) {
        if (E.length < T.length) {
          var D = T[0],
            I;
          n = D.prev;
          var H = E[0],
            q = E[E.length - 1];
          for (I = 0; I < E.length; I += 1) U(E[I], D, u);
          for (I = 0; I < T.length; I += 1) p.delete(T[I]);
          A(e, H.prev, q.next), A(e, n, H), A(e, q, D), i = D, n = q, l -= 1, E = [], T = []
        } else p.delete(a), U(a, i, u), A(e, a.prev, a.next), A(e, a, n === null ? e.first : n.next), A(e, n, a), n = a;
        continue
      }
      for (E = [], T = []; i !== null && i.k !== c;)(i.e.f & B) === 0 && (p ?? (p = new Set)).add(i), T.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    E.push(a), n = a, i = a.next
  }
  if (i !== null || p !== void 0) {
    for (var S = p === void 0 ? [] : re(p); i !== null;)(i.e.f & B) === 0 && S.push(i), i = i.next;
    var Y = S.length;
    if (Y > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (b) {
        for (l = 0; l < Y; l += 1)(G = S[l].a) == null || G.measure();
        for (l = 0; l < Y; l += 1)(J = S[l].a) == null || J.fix()
      }
      Ce(e, S, le)
    }
  }
  b && Ie(() => {
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

function X(f, r, e, s, u, d, t, _, m, b, o) {
  var y = F,
    w = (m & O) !== 0,
    x = (m & Te) === 0,
    i = w ? x ? be(u, !1, !1) : j(u) : u,
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
  F = n;
  try {
    if (f === null) {
      var v = document.createDocumentFragment();
      v.append(f = ee())
    }
    return n.e = W(() => _(f, i, p, b), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
  } finally {
    F = y
  }
}

function U(f, r, e) {
  for (var s = f.next ? f.next.e.nodes_start : e, u = r ? r.e.nodes_start : e, d = f.e.nodes_start; d !== null && d !== s;) {
    var t = ge(d);
    u.before(d), d = t
  }
}

function A(f, r, e) {
  r === null ? f.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e)
}
export {
  F as c, He as e, Re as i
};