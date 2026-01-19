import {
  a2 as ee,
  m as se,
  a3 as ae,
  P as Y,
  k as N,
  R as ue,
  l as de,
  j as W,
  a4 as ve,
  a5 as oe,
  a6 as ce,
  a7 as Z,
  a8 as k,
  J as S,
  K as _e,
  a9 as he,
  aa as K,
  ab as pe,
  ac as L,
  ad as O,
  V as Ee,
  ae as $,
  af as me,
  ag as j,
  ah as re,
  ai as be,
  aj as ne,
  ak as we,
  al as Te,
  am as B,
  a0 as Ie,
  an as fe,
  ao as Ae,
  L as ge,
  ap as ye,
  aq as De,
  ar as Ne,
  H as xe
} from "./DcuED2r1.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "9ea58666-1382-4562-8183-74b7ac9a075c", f._sentryDebugIdIdentifier = "sentry-dbid-9ea58666-1382-4562-8183-74b7ac9a075c")
  })()
} catch {}
let F = null;

function Me(f, r) {
  return r
}

function Ce(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var _ = d > 0 && u.length === 0 && e !== null;
  if (_) {
    var b = e.parentNode;
    De(b), b.append(e), s.clear(), A(f, r[0].prev, r[d - 1].next)
  }
  Ne(u, () => {
    for (var m = 0; m < d; m++) {
      var o = r[m];
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
    b = (r & ae) !== 0;
  if (b) {
    var m = f;
    t = N ? Y(ue(m)) : m.appendChild(ee())
  }
  N && de();
  var o = null,
    y = !1,
    w = new Map,
    x = ve(() => {
      var v = e();
      return be(v) ? v : v == null ? [] : re(v)
    }),
    i, p;

  function n() {
    Re(p, i, _, w, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = K(() => d(t)) : o !== null && we(o, () => {
      o = null
    }))
  }
  se(() => {
    p ?? (p = xe), i = W(x);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let E = !1;
    if (N) {
      var T = oe(t) === ce;
      T !== (v === 0) && (t = Z(), Y(t), k(!1), E = !0)
    }
    if (N) {
      for (var g = null, c, a = 0; a < v; a++) {
        if (S.nodeType === _e && S.data === he) {
          t = S, E = !0, k(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        c = P(S, _, g, null, l, h, a, u, r, e), _.items.set(h, c), g = c
      }
      v > 0 && Y(Z())
    }
    if (N) v === 0 && d && (o = K(() => d(t)));
    else if (pe()) {
      var C = new Set,
        M = Ee;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = _.items.get(h) ?? w.get(h);
        D ? (r & (L | O)) !== 0 && ie(D, l, a, r) : (c = P(null, _, null, null, l, h, a, u, r, e, !0), w.set(h, c)), C.add(h)
      }
      for (const [I, H] of _.items) C.has(I) || M.skipped_effects.add(H.e);
      M.oncommit(n)
    } else n();
    E && k(!0), W(x)
  }), N && (t = S)
}

function Re(f, r, e, s, u, d, t, _, b) {
  var U, X, z, G;
  var m = (t & Ae) !== 0,
    o = (t & (L | O)) !== 0,
    y = r.length,
    w = e.items,
    x = e.first,
    i = x,
    p, n = null,
    v, E = [],
    T = [],
    g, c, a, l;
  if (m)
    for (l = 0; l < y; l += 1) g = r[l], c = _(g, l), a = w.get(c), a !== void 0 && ((U = a.a) == null || U.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (g = r[l], c = _(g, l), a = w.get(c), a === void 0) {
      var h = s.get(c);
      if (h !== void 0) {
        s.delete(c), w.set(c, h);
        var C = n ? n.next : i;
        A(e, n, h), A(e, h, C), J(h, C, u), n = h
      } else {
        var M = i ? i.e.nodes_start : u;
        n = P(M, e, n, n === null ? e.first : n.next, g, c, l, d, t, b)
      }
      w.set(c, n), E = [], T = [], i = n.next;
      continue
    }
    if (o && ie(a, g, l, t), (a.e.f & B) !== 0 && (ne(a.e), m && ((X = a.a) == null || X.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (p !== void 0 && p.has(a)) {
        if (E.length < T.length) {
          var D = T[0],
            I;
          n = D.prev;
          var H = E[0],
            q = E[E.length - 1];
          for (I = 0; I < E.length; I += 1) J(E[I], D, u);
          for (I = 0; I < T.length; I += 1) p.delete(T[I]);
          A(e, H.prev, q.next), A(e, n, H), A(e, q, D), i = D, n = q, l -= 1, E = [], T = []
        } else p.delete(a), J(a, i, u), A(e, a.prev, a.next), A(e, a, n === null ? e.first : n.next), A(e, n, a), n = a;
        continue
      }
      for (E = [], T = []; i !== null && i.k !== c;)(i.e.f & B) === 0 && (p ?? (p = new Set)).add(i), T.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    E.push(a), n = a, i = a.next
  }
  if (i !== null || p !== void 0) {
    for (var R = p === void 0 ? [] : re(p); i !== null;)(i.e.f & B) === 0 && R.push(i), i = i.next;
    var V = R.length;
    if (V > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (m) {
        for (l = 0; l < V; l += 1)(z = R[l].a) == null || z.measure();
        for (l = 0; l < V; l += 1)(G = R[l].a) == null || G.fix()
      }
      Ce(e, R, le)
    }
  }
  m && Ie(() => {
    var Q;
    if (v !== void 0)
      for (a of v)(Q = a.a) == null || Q.apply()
  }), f.first = e.first && e.first.e, f.last = n && n.e;
  for (var te of s.values()) fe(te.e);
  s.clear()
}

function ie(f, r, e, s) {
  (s & L) !== 0 && $(f.v, r), (s & O) !== 0 ? $(f.i, e) : f.i = e
}

function P(f, r, e, s, u, d, t, _, b, m, o) {
  var y = F,
    w = (b & L) !== 0,
    x = (b & Te) === 0,
    i = w ? x ? me(u, !1, !1) : j(u) : u,
    p = (b & O) === 0 ? t : j(t),
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
    return n.e = K(() => _(f, i, p, m), N), n.e.prev = e && e.e, n.e.next = s && s.e, e === null ? o || (r.first = n) : (e.next = n, e.e.next = n.e), s !== null && (s.prev = n, s.e.prev = n.e), n
  } finally {
    F = y
  }
}

function J(f, r, e) {
  for (var s = f.next ? f.next.e.nodes_start : e, u = r ? r.e.nodes_start : e, d = f.e.nodes_start; d !== null && d !== s;) {
    var t = ge(d);
    u.before(d), d = t
  }
}

function A(f, r, e) {
  r === null ? f.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e)
}
export {
  F as c, He as e, Me as i
};