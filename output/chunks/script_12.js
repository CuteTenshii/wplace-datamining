import {
  aJ as y,
  aK as x,
  aL as A,
  j as g,
  J as L,
  W as m,
  g as j,
  i as N,
  aM as Y,
  aj as B,
  aN as K,
  aO as M,
  x as U,
  ax as J,
  aP as $,
  aQ as q,
  aR as z,
  S as I,
  aS as E,
  aT as c
} from "./8X9bXL-a.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "80dc074e-7126-457b-9fe9-dba484e4754e", e._sentryDebugIdIdentifier = "sentry-dbid-80dc074e-7126-457b-9fe9-dba484e4754e")
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

function F(e, r, n) {
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
  var S;
  var i = !J || (n & $) !== 0,
    f = (n & M) !== 0,
    O = (n & z) !== 0,
    a = t,
    v = !0,
    w = () => (v && (v = !1, a = O ? U(t) : t), a),
    o;
  if (f) {
    var R = I in e || E in e;
    o = ((S = y(e, r)) == null ? void 0 : S.set) ?? (R && r in e ? s => e[r] = s : void 0)
  }
  var l, h = !1;
  f ? [l, h] = C(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = w(), o && (i && x(), o(l)));
  var u;
  if (i ? u = () => {
      var s = e[r];
      return s === void 0 ? w() : (v = !0, s)
    } : u = () => {
      var s = e[r];
      return s !== void 0 && (a = void 0), s === void 0 ? a : s
    }, i && (n & A) === 0) return u;
  if (o) {
    var T = e.$$legacy;
    return (function(s, p) {
      return arguments.length > 0 ? ((!i || !p || T || h) && o(p ? u() : s), s) : u()
    })
  }
  var b = !1,
    d = ((n & q) !== 0 ? L : m)(() => (b = !1, u()));
  f && g(d);
  var D = B;
  return (function(s, p) {
    if (arguments.length > 0) {
      const P = p ? g(d) : i && f ? j(s) : s;
      return N(d, P), b = !0, a !== void 0 && (a = P), s
    }
    return Y && b || (D.f & K) !== 0 ? d.v : g(d)
  })
}
export {
  V as p, F as r, H as s, Z as u
};