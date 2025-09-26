import {
  j as ee,
  i as se,
  N as ae,
  O as V,
  h as N,
  P as ue,
  e as de,
  g as J,
  Q as ve,
  R as oe,
  T as _e,
  U as K,
  V as U,
  o as S,
  W as ce,
  X as he,
  k as P,
  m as pe,
  Y as O,
  Z as L,
  l as Ee,
  _ as $,
  a0 as me,
  a1 as j,
  a2 as re,
  a3 as Te,
  a4 as ne,
  q as we,
  a5 as be,
  a6 as X,
  L as Ie,
  a7 as fe,
  a8 as Ae,
  a9 as ge,
  aa as ye,
  ab as De,
  ac as Ne,
  ad as xe
} from "./BS43lSzs.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "f081a31e50addc038845f96ddcdcac2e385f6a91"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new f.Error().stack;
    r && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[r] = "ac89915e-f261-4f84-9428-f4a8e4a48872", f._sentryDebugIdIdentifier = "sentry-dbid-ac89915e-f261-4f84-9428-f4a8e4a48872")
  })()
} catch {}
let B = null;

function Me(f, r) {
  return r
}

function Ce(f, r, e) {
  for (var s = f.items, u = [], d = r.length, t = 0; t < d; t++) ye(r[t].e, u, !0);
  var c = d > 0 && u.length === 0 && e !== null;
  if (c) {
    var T = e.parentNode;
    De(T), T.append(e), s.clear(), A(f, r[0].prev, r[d - 1].next)
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
    T = (r & ae) !== 0;
  if (T) {
    var m = f;
    t = N ? V(ue(m)) : m.appendChild(ee())
  }
  N && de();
  var o = null,
    y = !1,
    w = new Map,
    x = ve(() => {
      var v = e();
      return Te(v) ? v : v == null ? [] : re(v)
    }),
    i, p;

  function n() {
    Re(p, i, c, w, t, u, r, s, e), d !== null && (i.length === 0 ? o ? ne(o) : o = P(() => d(t)) : o !== null && we(o, () => {
      o = null
    }))
  }
  se(() => {
    p ?? (p = xe), i = J(x);
    var v = i.length;
    if (y && v === 0) return;
    y = v === 0;
    let E = !1;
    if (N) {
      var b = oe(t) === _e;
      b !== (v === 0) && (t = K(), V(t), U(!1), E = !0)
    }
    if (N) {
      for (var g = null, _, a = 0; a < v; a++) {
        if (S.nodeType === ce && S.data === he) {
          t = S, E = !0, U(!1);
          break
        }
        var l = i[a],
          h = s(l, a);
        _ = Q(S, c, g, null, l, h, a, u, r, e), c.items.set(h, _), g = _
      }
      v > 0 && V(K())
    }
    if (N) v === 0 && d && (o = P(() => d(t)));
    else if (pe()) {
      var C = new Set,
        M = Ee;
      for (a = 0; a < v; a += 1) {
        l = i[a], h = s(l, a);
        var D = c.items.get(h) ?? w.get(h);
        D ? (r & (O | L)) !== 0 && ie(D, l, a, r) : (_ = Q(null, c, null, null, l, h, a, u, r, e, !0), w.set(h, _)), C.add(h)
      }
      for (const [I, H] of c.items) C.has(I) || M.skipped_effects.add(H.e);
      M.add_callback(n)
    } else n();
    E && U(!0), J(x)
  }), N && (t = S)
}

function Re(f, r, e, s, u, d, t, c, T) {
  var W, Z, k, z;
  var m = (t & Ae) !== 0,
    o = (t & (O | L)) !== 0,
    y = r.length,
    w = e.items,
    x = e.first,
    i = x,
    p, n = null,
    v, E = [],
    b = [],
    g, _, a, l;
  if (m)
    for (l = 0; l < y; l += 1) g = r[l], _ = c(g, l), a = w.get(_), a !== void 0 && ((W = a.a) == null || W.measure(), (v ?? (v = new Set)).add(a));
  for (l = 0; l < y; l += 1) {
    if (g = r[l], _ = c(g, l), a = w.get(_), a === void 0) {
      var h = s.get(_);
      if (h !== void 0) {
        s.delete(_), w.set(_, h);
        var C = n ? n.next : i;
        A(e, n, h), A(e, h, C), F(h, C, u), n = h
      } else {
        var M = i ? i.e.nodes_start : u;
        n = Q(M, e, n, n === null ? e.first : n.next, g, _, l, d, t, T)
      }
      w.set(_, n), E = [], b = [], i = n.next;
      continue
    }
    if (o && ie(a, g, l, t), (a.e.f & X) !== 0 && (ne(a.e), m && ((Z = a.a) == null || Z.unfix(), (v ?? (v = new Set)).delete(a))), a !== i) {
      if (p !== void 0 && p.has(a)) {
        if (E.length < b.length) {
          var D = b[0],
            I;
          n = D.prev;
          var H = E[0],
            Y = E[E.length - 1];
          for (I = 0; I < E.length; I += 1) F(E[I], D, u);
          for (I = 0; I < b.length; I += 1) p.delete(b[I]);
          A(e, H.prev, Y.next), A(e, n, H), A(e, Y, D), i = D, n = Y, l -= 1, E = [], b = []
        } else p.delete(a), F(a, i, u), A(e, a.prev, a.next), A(e, a, n === null ? e.first : n.next), A(e, n, a), n = a;
        continue
      }
      for (E = [], b = []; i !== null && i.k !== _;)(i.e.f & X) === 0 && (p ?? (p = new Set)).add(i), b.push(i), i = i.next;
      if (i === null) continue;
      a = i
    }
    E.push(a), n = a, i = a.next
  }
  if (i !== null || p !== void 0) {
    for (var R = p === void 0 ? [] : re(p); i !== null;)(i.e.f & X) === 0 && R.push(i), i = i.next;
    var q = R.length;
    if (q > 0) {
      var le = (t & ae) !== 0 && y === 0 ? u : null;
      if (m) {
        for (l = 0; l < q; l += 1)(k = R[l].a) == null || k.measure();
        for (l = 0; l < q; l += 1)(z = R[l].a) == null || z.fix()
      }
      Ce(e, R, le)
    }
  }
  m && Ie(() => {
    var G;
    if (v !== void 0)
      for (a of v)(G = a.a) == null || G.apply()
  }), f.first = e.first && e.first.e, f.last = n && n.e;
  for (var te of s.values()) fe(te.e);
  s.clear()
}

function ie(f, r, e, s) {
  (s & O) !== 0 && $(f.v, r), (s & L) !== 0 ? $(f.i, e) : f.i = e
}

function Q(f, r, e, s, u, d, t, c, T, m, o) {
  var y = B,
    w = (T & O) !== 0,
    x = (T & be) === 0,
    i = w ? x ? me(u, !1, !1) : j(u) : u,
    p = (T & L) === 0 ? t : j(t),
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
  B as c, He as e, Me as i
};