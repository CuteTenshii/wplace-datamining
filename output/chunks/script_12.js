import {
  at as y,
  au as x,
  av as A,
  j as g,
  F as m,
  a4 as L,
  g as B,
  i as Y,
  aw as j,
  H as N,
  ax as K,
  ay as M,
  w as U,
  az as z,
  aA as C,
  aB as $,
  aC as q,
  a1 as I,
  aD as E,
  aE as c
} from "./DcuED2r1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5d465def-1463-422b-80a3-1c1f00d8fc19", e._sentryDebugIdIdentifier = "sentry-dbid-5d465def-1463-422b-80a3-1c1f00d8fc19")
  })()
} catch {}
let _ = !1;

function F(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function J(e, r = 1) {
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

function Q(e, r, n) {
  return new Proxy({
    props: e,
    exclude: r
  }, G)
}
const H = {
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
      const f = y(i, r);
      if (f && f.set) return f.set(n), !0
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

function V(...e) {
  return new Proxy({
    props: e
  }, H)
}

function W(e, r, n, t) {
  var P;
  var i = !z || (n & C) !== 0,
    f = (n & M) !== 0,
    D = (n & q) !== 0,
    u = t,
    v = !0,
    w = () => (v && (v = !1, u = D ? U(t) : t), u),
    o;
  if (f) {
    var O = I in e || E in e;
    o = ((P = y(e, r)) == null ? void 0 : P.set) ?? (O && r in e ? s => e[r] = s : void 0)
  }
  var d, h = !1;
  f ? [d, h] = F(() => e[r]) : d = e[r], d === void 0 && t !== void 0 && (d = w(), o && (i && x(), o(d)));
  var a;
  if (i ? a = () => {
      var s = e[r];
      return s === void 0 ? w() : (v = !0, s)
    } : a = () => {
      var s = e[r];
      return s !== void 0 && (u = void 0), s === void 0 ? u : s
    }, i && (n & A) === 0) return a;
  if (o) {
    var R = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || R || h) && o(p ? a() : s), s) : a()
    })
  }
  var b = !1,
    l = ((n & $) !== 0 ? m : L)(() => (b = !1, a()));
  f && g(l);
  var T = N;
  return (function(s, p) {
    if (arguments.length > 0) {
      const S = p ? g(l) : i && f ? B(s) : s;
      return Y(l, S), b = !0, u !== void 0 && (u = S), s
    }
    return j && b || (T.f & K) !== 0 ? l.v : g(l)
  })
}
export {
  W as p, Q as r, V as s, J as u
};