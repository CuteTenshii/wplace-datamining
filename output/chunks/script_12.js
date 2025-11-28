import {
  aG as y,
  aH as x,
  aI as A,
  j as g,
  N as L,
  U as m,
  g as N,
  i as Y,
  aJ as j,
  ak as B,
  aK as K,
  aL as M,
  x as U,
  au as G,
  aM as $,
  aN as q,
  aO as z,
  S as I,
  aP as E,
  aQ as c
} from "./DCrkY18i.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f20ce6c7de81c065c8837dcafe40492e8d59c7f8"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "63399c26-0047-4d8d-8160-b500ab81f763", e._sentryDebugIdIdentifier = "sentry-dbid-63399c26-0047-4d8d-8160-b500ab81f763")
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

function Z(e, r = 1) {
  const n = e();
  return e(n + r), n
}
const H = {
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
  }, H)
}
const J = {
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
  }, J)
}

function W(e, r, n, t) {
  var P;
  var i = !G || (n & $) !== 0,
    f = (n & M) !== 0,
    O = (n & z) !== 0,
    u = t,
    v = !0,
    w = () => (v && (v = !1, u = O ? U(t) : t), u),
    o;
  if (f) {
    var D = I in e || E in e;
    o = ((P = y(e, r)) == null ? void 0 : P.set) ?? (D && r in e ? s => e[r] = s : void 0)
  }
  var l, h = !1;
  f ? [l, h] = C(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = w(), o && (i && x(), o(l)));
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
    d = ((n & q) !== 0 ? L : m)(() => (b = !1, a()));
  f && g(d);
  var T = B;
  return (function(s, p) {
    if (arguments.length > 0) {
      const S = p ? g(d) : i && f ? N(s) : s;
      return Y(d, S), b = !0, u !== void 0 && (u = S), s
    }
    return j && b || (T.f & K) !== 0 ? d.v : g(d)
  })
}
export {
  W as p, F as r, V as s, Z as u
};