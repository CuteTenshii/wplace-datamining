import {
  aQ as y,
  aR as x,
  aS as A,
  g,
  P as L,
  a1 as m,
  x as Y,
  y as B,
  aT as N,
  ao as U,
  aU as j,
  aV as K,
  L as M,
  aI as Z,
  aW as $,
  aX as q,
  aY as z,
  Y as I,
  aZ as E,
  a_ as c
} from "./WB2K_T_Y.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "897484dd-e8a1-4aa0-8c97-e33562472ea2", e._sentryDebugIdIdentifier = "sentry-dbid-897484dd-e8a1-4aa0-8c97-e33562472ea2")
  })()
} catch {}
let _ = !1;

function C(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function W(e, r = 1) {
  const n = e();
  return e(n + r), n
}
const G = {
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

function X(e, r, n) {
  return new Proxy({
    props: e,
    exclude: r
  }, G)
}
const Q = {
  get(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (c(t) && (t = t()), typeof t == "object" && t !== null && r in t) return t[r]
    }
  },
  set(e, r, n) {
    let t = e.props.length;
    for (; t--;) {
      let i = e.props[t];
      c(i) && (i = i());
      const a = y(i, r);
      if (a && a.set) return a.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (c(t) && (t = t()), typeof t == "object" && t !== null && r in t) {
        const i = y(t, r);
        return i && !i.configurable && (i.configurable = !0), i
      }
    }
  },
  has(e, r) {
    if (r === I || r === E) return !1;
    for (let n of e.props)
      if (c(n) && (n = n()), n != null && r in n) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let n of e.props)
      if (c(n) && (n = n()), !!n) {
        for (const t in n) r.includes(t) || r.push(t);
        for (const t of Object.getOwnPropertySymbols(n)) r.includes(t) || r.push(t)
      } return r
  }
};

function F(...e) {
  return new Proxy({
    props: e
  }, Q)
}

function H(e, r, n, t) {
  var P;
  var i = !Z || (n & $) !== 0,
    a = (n & K) !== 0,
    O = (n & z) !== 0,
    f = t,
    v = !0,
    w = () => (v && (v = !1, f = O ? M(t) : t), f),
    o;
  if (a) {
    var R = I in e || E in e;
    o = ((P = y(e, r)) == null ? void 0 : P.set) ?? (R && r in e ? s => e[r] = s : void 0)
  }
  var d, h = !1;
  a ? [d, h] = C(() => e[r]) : d = e[r], d === void 0 && t !== void 0 && (d = w(), o && (i && x(), o(d)));
  var u;
  if (i ? u = () => {
      var s = e[r];
      return s === void 0 ? w() : (v = !0, s)
    } : u = () => {
      var s = e[r];
      return s !== void 0 && (f = void 0), s === void 0 ? f : s
    }, i && (n & A) === 0) return u;
  if (o) {
    var T = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || T || h) && o(p ? u() : s), s) : u()
    })
  }
  var b = !1,
    l = ((n & q) !== 0 ? L : m)(() => (b = !1, u()));
  a && g(l);
  var D = U;
  return (function(s, p) {
    if (arguments.length > 0) {
      const S = p ? g(l) : i && a ? Y(s) : s;
      return B(l, S), b = !0, f !== void 0 && (f = S), s
    }
    return N && b || (D.f & j) !== 0 ? l.v : g(l)
  })
}
export {
  H as p, X as r, F as s, W as u
};