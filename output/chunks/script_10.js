import {
  i as L,
  h as P,
  e as N,
  E as Y,
  X as U,
  Y as j,
  Z as B,
  U as F,
  _ as D,
  j as q,
  k as O,
  l as C,
  aN as K,
  m as M,
  a9 as Z,
  q as z,
  o as H,
  aO as T,
  aP as W,
  aQ as X,
  g as m,
  L as $,
  W as G,
  x as Q,
  z as V,
  aR as J,
  ai as k,
  aS as ee,
  aT as re,
  H as ne,
  aF as te,
  aU as ae,
  aV as se,
  aW as ie,
  al as A,
  aX as x,
  aY as y
} from "./DUWZzbWe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b94e2423-950b-4791-9fb5-cb3b4bf6d833", e._sentryDebugIdIdentifier = "sentry-dbid-b94e2423-950b-4791-9fb5-cb3b4bf6d833")
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
    o && Z(o), i && z(i, () => {
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
  }, c), P && (n = H)
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
  f ? [_, o] = fe(() => e[r]) : _ = e[r], _ === void 0 && n !== void 0 && (_ = S(), u && (a && W(), u(_)));
  var i;
  if (a ? i = () => {
      var s = e[r];
      return s === void 0 ? S() : (p = !0, s)
    } : i = () => {
      var s = e[r];
      return s !== void 0 && (c = void 0), s === void 0 ? c : s
    }, a && (t & X) === 0) return i;
  if (u) {
    var E = e.$$legacy;
    return (function(s, b) {
      return arguments.length > 0 ? ((!a || !b || E || o) && u(b ? i() : s), s) : i()
    })
  }
  var v = !1,
    d = ((t & se) !== 0 ? $ : G)(() => (v = !1, i()));
  f && m(d);
  var h = k;
  return (function(s, b) {
    if (arguments.length > 0) {
      const R = b ? m(d) : a && f ? Q(s) : s;
      return V(d, R), v = !0, c !== void 0 && (c = R), s
    }
    return J && v || (h.f & ee) !== 0 ? d.v : m(d)
  })
}
export {
  de as i, ve as p, _e as r, pe as s, ce as u
};