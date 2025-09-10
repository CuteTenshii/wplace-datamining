import {
  i as L,
  h as I,
  e as N,
  E as U,
  R as Y,
  T as j,
  U as B,
  O as M,
  V as w,
  j as q,
  k as A,
  l as z,
  aL as C,
  m as F,
  a4 as K,
  q as H,
  o as Q,
  aM as R,
  aN as V,
  aO as Z,
  g as O,
  D as $,
  Q as G,
  aH as J,
  aJ as W,
  aP as X,
  ad as k,
  aQ as ee,
  aR as re,
  z as ne,
  az as te,
  aS as ae,
  aT as se,
  aU as ie,
  S as D,
  aV as x,
  aW as S
} from "./B0_b_ZC0.js";

function ce(e, r, t = !1) {
  I && N();
  var n = e,
    a = null,
    f = null,
    l = C,
    d = t ? U : 0,
    p = !1;
  const P = (o, i = !0) => {
    p = !0, _(i, o)
  };
  var u = null;

  function m() {
    u !== null && (u.lastChild.remove(), n.before(u), u = null);
    var o = l ? a : f,
      i = l ? f : a;
    o && K(o), i && H(i, () => {
      l ? f = null : a = null
    })
  }
  const _ = (o, i) => {
    if (l === (l = o)) return;
    let y = !1;
    if (I) {
      const h = Y(n) === j;
      !!l === h && (n = B(), M(n), w(!1), y = !0)
    }
    var v = F(),
      c = n;
    if (v && (u = document.createDocumentFragment(), u.append(c = q())), l ? a ?? (a = i && A(() => i(c))) : f ?? (f = i && A(() => i(c))), v) {
      var g = z,
        b = l ? a : f,
        s = l ? f : a;
      b && g.skipped_effects.delete(b), s && g.skipped_effects.add(s), g.add_callback(m)
    } else m();
    y && w(!0)
  };
  L(() => {
    p = !1, r(P), p || _(null, null)
  }, d), I && (n = Q)
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
      const f = R(a, r);
      if (f && f.set) return f.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (S(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const a = R(n, r);
        return a && !a.configurable && (a.configurable = !0), a
      }
    }
  },
  has(e, r) {
    if (r === D || r === x) return !1;
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
  var b;
  var a = !te || (t & ae) !== 0,
    f = (t & re) !== 0,
    l = (t & ie) !== 0,
    d = n,
    p = !0,
    P = () => (p && (p = !1, d = l ? ne(n) : n), d),
    u;
  if (f) {
    var m = D in e || x in e;
    u = ((b = R(e, r)) == null ? void 0 : b.set) ?? (m && r in e ? s => e[r] = s : void 0)
  }
  var _, o = !1;
  f ? [_, o] = fe(() => e[r]) : _ = e[r], _ === void 0 && n !== void 0 && (_ = P(), u && (a && V(), u(_)));
  var i;
  if (a ? i = () => {
      var s = e[r];
      return s === void 0 ? P() : (p = !0, s)
    } : i = () => {
      var s = e[r];
      return s !== void 0 && (d = void 0), s === void 0 ? d : s
    }, a && (t & Z) === 0) return i;
  if (u) {
    var y = e.$$legacy;
    return (function(s, h) {
      return arguments.length > 0 ? ((!a || !h || y || o) && u(h ? i() : s), s) : i()
    })
  }
  var v = !1,
    c = ((t & se) !== 0 ? $ : G)(() => (v = !1, i()));
  f && O(c);
  var g = k;
  return (function(s, h) {
    if (arguments.length > 0) {
      const T = h ? O(c) : a && f ? J(s) : s;
      return W(c, T), v = !0, d !== void 0 && (d = T), s
    }
    return X && v || (g.f & ee) !== 0 ? c.v : O(c)
  })
}
export {
  ce as i, ve as p, _e as r, pe as s, de as u
};