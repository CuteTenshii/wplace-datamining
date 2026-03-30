import {
  aL as P,
  aM as x,
  aN as A,
  i as g,
  g as L,
  h as m,
  aO as N,
  aD as Y,
  aP as B,
  aQ as K,
  G as M,
  P as U,
  aR as j,
  aS as G,
  av as $,
  K as q,
  aT as z,
  _ as I,
  aU as E,
  aV as c
} from "./DySbC8v5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "942b3260-30b9-41d0-a333-20356fb96a02", e._sentryDebugIdIdentifier = "sentry-dbid-942b3260-30b9-41d0-a333-20356fb96a02")
  } catch {}
})();
let _ = !1;

function C(e) {
  var r = _;
  try {
    return _ = !1, [e(), _]
  } finally {
    _ = r
  }
}

function F(e, r = 1) {
  const n = e();
  return e(n + r), n
}
const Q = {
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

function H(e, r, n) {
  return new Proxy({
    props: e,
    exclude: r
  }, Q)
}
const V = {
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
      const f = P(i, r);
      if (f && f.set) return f.set(n), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let n = e.props.length;
    for (; n--;) {
      let t = e.props[n];
      if (c(t) && (t = t()), typeof t == "object" && t !== null && r in t) {
        const i = P(t, r);
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

function J(...e) {
  return new Proxy({
    props: e
  }, V)
}

function W(e, r, n, t) {
  var h;
  var i = !U || (n & j) !== 0,
    f = (n & K) !== 0,
    O = (n & z) !== 0,
    a = t,
    b = !0,
    y = () => (b && (b = !1, a = O ? M(t) : t), a),
    o;
  if (f) {
    var D = I in e || E in e;
    o = ((h = P(e, r)) == null ? void 0 : h.set) ?? (D && r in e ? s => e[r] = s : void 0)
  }
  var l, S = !1;
  f ? [l, S] = C(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = y(), o && (i && x(), o(l)));
  var u;
  if (i ? u = () => {
      var s = e[r];
      return s === void 0 ? y() : (b = !0, s)
    } : u = () => {
      var s = e[r];
      return s !== void 0 && (a = void 0), s === void 0 ? a : s
    }, i && (n & A) === 0) return u;
  if (o) {
    var R = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || R || S) && o(p ? u() : s), s) : u()
    })
  }
  var v = !1,
    d = ((n & G) !== 0 ? $ : q)(() => (v = !1, u()));
  f && g(d);
  var T = Y;
  return (function(s, p) {
    if (arguments.length > 0) {
      const w = p ? g(d) : i && f ? L(s) : s;
      return m(d, w), v = !0, a !== void 0 && (a = w), s
    }
    return N && v || (T.f & B) !== 0 ? d.v : g(d)
  })
}
export {
  W as p, H as r, J as s, F as u
};