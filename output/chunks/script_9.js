import {
  g as L,
  h as E,
  e as N,
  E as F,
  G as Y,
  H as j,
  I as B,
  C,
  J as R,
  i as K,
  j as w,
  k as M,
  aD as U,
  l as G,
  T as H,
  n as q,
  m as J,
  aE as T,
  aF as Z,
  aG as $,
  y as O,
  A as z,
  F as Q,
  aH as V,
  aI as W,
  aJ as X,
  a1 as k,
  aK as ee,
  aL as re,
  v as ne,
  at as te,
  aM as ae,
  aN as se,
  aO as ie,
  a4 as D,
  aP as x,
  aQ as P
} from "./Bq4S7hUq.js";

function ce(e, r, t = !1) {
  E && N();
  var n = e,
    a = null,
    f = null,
    l = U,
    d = t ? F : 0,
    p = !1;
  const m = (o, i = !0) => {
    p = !0, _(i, o)
  };
  var u = null;

  function S() {
    u !== null && (u.lastChild.remove(), n.before(u), u = null);
    var o = l ? a : f,
      i = l ? f : a;
    o && H(o), i && q(i, () => {
      l ? f = null : a = null
    })
  }
  const _ = (o, i) => {
    if (l === (l = o)) return;
    let I = !1;
    if (E) {
      const h = Y(n) === j;
      !!l === h && (n = B(), C(n), R(!1), I = !0)
    }
    var v = G(),
      c = n;
    if (v && (u = document.createDocumentFragment(), u.append(c = K())), l ? a ?? (a = i && w(() => i(c))) : f ?? (f = i && w(() => i(c))), v) {
      var g = M,
        b = l ? a : f,
        s = l ? f : a;
      b && g.skipped_effects.delete(b), s && g.skipped_effects.add(s), g.add_callback(S)
    } else S();
    I && R(!0)
  };
  L(() => {
    p = !1, r(m), p || _(null, null)
  }, d), E && (n = J)
}
let y = !1;

function fe(e) {
  var r = y;
  try {
    return y = !1, [e(), y]
  } finally {
    y = r
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
      if (P(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--;) {
      let a = e.props[n];
      P(a) && (a = a());
      const f = T(a, r);
      if (f && f.set) return f.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (P(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const a = T(n, r);
        return a && !a.configurable && (a.configurable = !0), a
      }
    }
  },
  has(e, r) {
    if (r === D || r === x) return !1;
    for (let t of e.props)
      if (P(t) && (t = t()), t != null && r in t) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (P(t) && (t = t()), !!t) {
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
    m = () => (p && (p = !1, d = l ? ne(n) : n), d),
    u;
  if (f) {
    var S = D in e || x in e;
    u = ((b = T(e, r)) == null ? void 0 : b.set) ?? (S && r in e ? s => e[r] = s : void 0)
  }
  var _, o = !1;
  f ? [_, o] = fe(() => e[r]) : _ = e[r], _ === void 0 && n !== void 0 && (_ = m(), u && (a && Z(), u(_)));
  var i;
  if (a ? i = () => {
      var s = e[r];
      return s === void 0 ? m() : (p = !0, s)
    } : i = () => {
      var s = e[r];
      return s !== void 0 && (d = void 0), s === void 0 ? d : s
    }, a && (t & $) === 0) return i;
  if (u) {
    var I = e.$$legacy;
    return (function(s, h) {
      return arguments.length > 0 ? ((!a || !h || I || o) && u(h ? i() : s), s) : i()
    })
  }
  var v = !1,
    c = ((t & se) !== 0 ? z : Q)(() => (v = !1, i()));
  f && O(c);
  var g = k;
  return (function(s, h) {
    if (arguments.length > 0) {
      const A = h ? O(c) : a && f ? V(s) : s;
      return W(c, A), v = !0, d !== void 0 && (d = A), s
    }
    return X && v || (g.f & ee) !== 0 ? c.v : O(c)
  })
}
export {
  ce as i, ve as p, _e as r, pe as s, de as u
};