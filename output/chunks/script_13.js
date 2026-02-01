import {
  aJ as y,
  aK as x,
  aL as A,
  j as g,
  ai as L,
  W as m,
  g as N,
  i as Y,
  aM as j,
  ac as B,
  aN as K,
  aO as M,
  y as U,
  ax as $,
  aP as q,
  aQ as z,
  aR as C,
  T as I,
  aS as E,
  aT as c
} from "./DDHVoadr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "aa796258-5fda-4d2c-8d95-b3e317d3eef8", e._sentryDebugIdIdentifier = "sentry-dbid-aa796258-5fda-4d2c-8d95-b3e317d3eef8")
  })()
} catch {}
let _ = !1;

function G(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function Z(e, r = 1) {
  const n = e();
  return e(n + r), n
}
const J = {
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

function F(e, r, n) {
  return new Proxy({
    props: e,
    exclude: r
  }, J)
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

function H(...e) {
  return new Proxy({
    props: e
  }, Q)
}

function V(e, r, n, t) {
  var P;
  var i = !$ || (n & q) !== 0,
    f = (n & M) !== 0,
    O = (n & C) !== 0,
    a = t,
    v = !0,
    w = () => (v && (v = !1, a = O ? U(t) : t), a),
    d;
  if (f) {
    var T = I in e || E in e;
    d = ((P = y(e, r)) == null ? void 0 : P.set) ?? (T && r in e ? s => e[r] = s : void 0)
  }
  var o, h = !1;
  f ? [o, h] = G(() => e[r]) : o = e[r], o === void 0 && t !== void 0 && (o = w(), d && (i && x(), d(o)));
  var u;
  if (i ? u = () => {
      var s = e[r];
      return s === void 0 ? w() : (v = !0, s)
    } : u = () => {
      var s = e[r];
      return s !== void 0 && (a = void 0), s === void 0 ? a : s
    }, i && (n & A) === 0) return u;
  if (d) {
    var R = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || R || h) && d(p ? u() : s), s) : u()
    })
  }
  var b = !1,
    l = ((n & z) !== 0 ? L : m)(() => (b = !1, u()));
  f && g(l);
  var D = B;
  return (function(s, p) {
    if (arguments.length > 0) {
      const S = p ? g(l) : i && f ? N(s) : s;
      return Y(l, S), b = !0, a !== void 0 && (a = S), s
    }
    return j && b || (D.f & K) !== 0 ? l.v : g(l)
  })
}
export {
  V as p, F as r, H as s, Z as u
};