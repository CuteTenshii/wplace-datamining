import {
  i as L,
  h as I,
  e as N,
  E as Y,
  V as U,
  W as C,
  X as j,
  Q as B,
  Y as w,
  j as K,
  k as A,
  l as M,
  U as q,
  m as F,
  a7 as Z,
  q as $,
  o as H,
  aV as O,
  aW as V,
  aX as W,
  g as T,
  H as X,
  T as z,
  aK as G,
  aM as Q,
  aY as J,
  ag as k,
  aZ as ee,
  a_ as re,
  C as ne,
  aC as te,
  a$ as ae,
  b0 as se,
  b1 as ie,
  S as x,
  b2 as D,
  aU as S
} from "./DDWIi-vs.js";

function ce(e, r, t = !1) {
  I && N();
  var n = e,
    a = null,
    f = null,
    l = q,
    d = t ? Y : 0,
    p = !1;
  const m = (o, i = !0) => {
    p = !0, _(i, o)
  };
  var u = null;

  function P() {
    u !== null && (u.lastChild.remove(), n.before(u), u = null);
    var o = l ? a : f,
      i = l ? f : a;
    o && Z(o), i && $(i, () => {
      l ? f = null : a = null
    })
  }
  const _ = (o, i) => {
    if (l === (l = o)) return;
    let y = !1;
    if (I) {
      const h = U(n) === C;
      !!l === h && (n = j(), B(n), w(!1), y = !0)
    }
    var v = F(),
      c = n;
    if (v && (u = document.createDocumentFragment(), u.append(c = K())), l ? a ?? (a = i && A(() => i(c))) : f ?? (f = i && A(() => i(c))), v) {
      var b = M,
        g = l ? a : f,
        s = l ? f : a;
      g && b.skipped_effects.delete(g), s && b.skipped_effects.add(s), b.add_callback(P)
    } else P();
    y && w(!0)
  };
  L(() => {
    p = !1, r(m), p || _(null, null)
  }, d), I && (n = H)
}
let E = !1;

function fe(e) {
  var r = E;
  try {
    return E = !1, [e(), E]
  } finally {
    E = r
  }
}

function de(e, r = 1) {
  const t = e();
  return e(t + r), t
}
const ue = {
  get(e, r) {
    if (!e.exclude.includes(r)) return e.props[r]
  },
  set(e, r) {
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props) return {
      enumerable: !0,
      configurable: !0,
      value: e.props[r]
    }
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
  }
};

function _e(e, r, t) {
  return new Proxy({
    props: e,
    exclude: r
  }, ue)
}
const le = {
  get(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (S(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--;) {
      let a = e.props[n];
      S(a) && (a = a());
      const f = O(a, r);
      if (f && f.set) return f.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (S(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const a = O(n, r);
        return a && !a.configurable && (a.configurable = !0), a
      }
    }
  },
  has(e, r) {
    if (r === x || r === D) return !1;
    for (let t of e.props)
      if (S(t) && (t = t()), t != null && r in t) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (S(t) && (t = t()), !!t) {
        for (const n in t) r.includes(n) || r.push(n);
        for (const n of Object.getOwnPropertySymbols(t)) r.includes(n) || r.push(n)
      } return r
  }
};

function pe(...e) {
  return new Proxy({
    props: e
  }, le)
}

function ve(e, r, t, n) {
  var g;
  var a = !te || (t & ae) !== 0,
    f = (t & re) !== 0,
    l = (t & ie) !== 0,
    d = n,
    p = !0,
    m = () => (p && (p = !1, d = l ? ne(n) : n), d),
    u;
  if (f) {
    var P = x in e || D in e;
    u = ((g = O(e, r)) == null ? void 0 : g.set) ?? (P && r in e ? s => e[r] = s : void 0)
  }
  var _, o = !1;
  f ? [_, o] = fe(() => e[r]) : _ = e[r], _ === void 0 && n !== void 0 && (_ = m(), u && (a && V(), u(_)));
  var i;
  if (a ? i = () => {
      var s = e[r];
      return s === void 0 ? m() : (p = !0, s)
    } : i = () => {
      var s = e[r];
      return s !== void 0 && (d = void 0), s === void 0 ? d : s
    }, a && (t & W) === 0) return i;
  if (u) {
    var y = e.$$legacy;
    return (function(s, h) {
      return arguments.length > 0 ? ((!a || !h || y || o) && u(h ? i() : s), s) : i()
    })
  }
  var v = !1,
    c = ((t & se) !== 0 ? X : z)(() => (v = !1, i()));
  f && T(c);
  var b = k;
  return (function(s, h) {
    if (arguments.length > 0) {
      const R = h ? T(c) : a && f ? G(s) : s;
      return Q(c, R), v = !0, d !== void 0 && (d = R), s
    }
    return J && v || (b.f & ee) !== 0 ? c.v : T(c)
  })
}
export {
  ce as i, ve as p, _e as r, pe as s, de as u
};