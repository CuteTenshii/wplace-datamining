import {
  i as L,
  h as P,
  e as N,
  E as Y,
  a6 as U,
  a7 as j,
  a8 as B,
  a1 as F,
  a9 as D,
  j as q,
  k as O,
  l as C,
  aN as K,
  m as M,
  ai as z,
  q as H,
  o as V,
  aO as T,
  aP as Z,
  aQ as $,
  g as m,
  L as G,
  a5 as Q,
  x as W,
  z as X,
  aR as J,
  V as k,
  aS as ee,
  aT as re,
  H as ne,
  aF as te,
  aU as ae,
  aV as se,
  aW as ie,
  U as A,
  aX as x,
  aY as y
} from "./BI2n3g5M.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "396734e5db96c8d18b29022abf53bbd030e61152"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "2f86b5a2-80d0-499e-b53e-0fd367115406", e._sentryDebugIdIdentifier = "sentry-dbid-2f86b5a2-80d0-499e-b53e-0fd367115406")
  })()
} catch {}

function de(e, r, t = !1) {
  P && N();
  var n = e,
    a = null,
    f = null,
    l = K,
    c = t ? Y : 0,
    p = !1;
  const S = (o, i = !0) => {
    p = !0, _(i, o)
  };
  var u = null;

  function w() {
    u !== null && (u.lastChild.remove(), n.before(u), u = null);
    var o = l ? a : f,
      i = l ? f : a;
    o && z(o), i && H(i, () => {
      l ? f = null : a = null
    })
  }
  const _ = (o, i) => {
    if (l === (l = o)) return;
    let E = !1;
    if (P) {
      const b = U(n) === j;
      !!l === b && (n = B(), F(n), D(!1), E = !0)
    }
    var v = M(),
      d = n;
    if (v && (u = document.createDocumentFragment(), u.append(d = q())), l ? a ?? (a = i && O(() => i(d))) : f ?? (f = i && O(() => i(d))), v) {
      var h = C,
        g = l ? a : f,
        s = l ? f : a;
      g && h.skipped_effects.delete(g), s && h.skipped_effects.add(s), h.add_callback(w)
    } else w();
    E && D(!0)
  };
  L(() => {
    p = !1, r(S), p || _(null, null)
  }, c), P && (n = V)
}
let I = !1;

function fe(e) {
  var r = I;
  try {
    return I = !1, [e(), I]
  } finally {
    I = r
  }
}

function ce(e, r = 1) {
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
      if (y(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--;) {
      let a = e.props[n];
      y(a) && (a = a());
      const f = T(a, r);
      if (f && f.set) return f.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (y(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const a = T(n, r);
        return a && !a.configurable && (a.configurable = !0), a
      }
    }
  },
  has(e, r) {
    if (r === A || r === x) return !1;
    for (let t of e.props)
      if (y(t) && (t = t()), t != null && r in t) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (y(t) && (t = t()), !!t) {
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
    c = n,
    p = !0,
    S = () => (p && (p = !1, c = l ? ne(n) : n), c),
    u;
  if (f) {
    var w = A in e || x in e;
    u = ((g = T(e, r)) == null ? void 0 : g.set) ?? (w && r in e ? s => e[r] = s : void 0)
  }
  var _, o = !1;
  f ? [_, o] = fe(() => e[r]) : _ = e[r], _ === void 0 && n !== void 0 && (_ = S(), u && (a && Z(), u(_)));
  var i;
  if (a ? i = () => {
      var s = e[r];
      return s === void 0 ? S() : (p = !0, s)
    } : i = () => {
      var s = e[r];
      return s !== void 0 && (c = void 0), s === void 0 ? c : s
    }, a && (t & $) === 0) return i;
  if (u) {
    var E = e.$$legacy;
    return (function(s, b) {
      return arguments.length > 0 ? ((!a || !b || E || o) && u(b ? i() : s), s) : i()
    })
  }
  var v = !1,
    d = ((t & se) !== 0 ? G : Q)(() => (v = !1, i()));
  f && m(d);
  var h = k;
  return (function(s, b) {
    if (arguments.length > 0) {
      const R = b ? m(d) : a && f ? W(s) : s;
      return X(d, R), v = !0, c !== void 0 && (c = R), s
    }
    return J && v || (h.f & ee) !== 0 ? d.v : m(d)
  })
}
export {
  de as i, ve as p, _e as r, pe as s, ce as u
};